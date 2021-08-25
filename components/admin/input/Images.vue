<template>
  <div>
    <div
      id="imagelist-container"
      style="margin-bottom: 10px; overflow: hidden;"
    >
      <div
        v-for="(image, index) in val"
        :key="index"
        style="position: relative; float: left; margin-right: 5px; margin-bottom: 5px;"
      >
        <span
          class="close"
          style="position: absolute; top: 8px; right: 8px; background: #fff; box-shadow: 0 0 3px #000; width: 20px; height: 20px; line-height: 18px; text-align: center; font-size: 16px; opacity: 1; user-select: none;"
          @click="remove(index)"
          >x</span
        >
        <img
          :src="ROOT_URL + '/' + image"
          class="thumbnail"
          style="-width: 100px !important; height: 70px
        !important; background: transparent !important; margin-bottom: 0;"
        />
      </div>
    </div>
    <button
      type="button"
      class="btn btn-primary "
      @click="openBrowser('folder', '#imagelist', true)"
    >
      Thêm hình</button
    >&nbsp;&nbsp;&nbsp;
    <button
      type="button"
      class="btn btn-danger "
      @click="removeAll"
    >
      Xóa tất cả
    </button>
  </div>
</template>
<script>
var fileSeleted = null;
export default {
  head: {
    script: [
      {
        src: process.env.ROOT_URL + "/assets/ckfinder/ckfinder.js",
        type: "text/javascript"
      }
    ]
  },
  props: ["value"],
  computed: {
    ROOT_URL() {
      return process.env.ROOT_URL;
    }
  },
  data() {
    return {
      val: []
    };
  },
    watch: {
     value(value, val) {
        this.val = (value == "" || value == null ? [] : JSON.parse(value));
      }
    },
  mounted() {
    $(document).ready(function() {
      $("#imagelist-container").sortable({
        revert: true,
        placeholder: "ui-state-highlight",
        stop: function() {
          refreshImageList();
        }
      });
    });
  },
  methods: {
    openBrowser(imgid, inputid, rf = undefined, cb = undefined) {
      let app = this;
      CKFinder.popup({
        chooseFiles: true,
        chooseFilesOnDblClick: true,
        width: 800,
        height: 600,
        onInit: function(finder) {
          finder.on("files:selected", function(evt) {
            fileSeleted = evt.data.files;
          });
          finder.on("files:choose", function(evt) {
            if (!rf) {
              var file = evt.data.files.first();
              var output = document.getElementById(inputid);
              var view = document.getElementById(imgid);
              view.src = process.env.ROOT_URL + "/" + file.getUrl();
              output.value = file.getUrl();
              app.val = file.getUrl();
            } else {
              var files = evt.data.files;
              var files = fileSeleted;
              var chosenFiles = "";
              files.forEach(function(file, i) {
                chosenFiles += i + 1 + ". " + file.get("name") + "\n";
                app.addToImagList(file.getUrl());
              });
            }
          });
          finder.on("file:choose:resizedImage", function(evt) {
            var output = document.getElementById(inputid);
            output.value = evt.data.resizedUrl;
          });
        }
      });
    },
    addToImagList(url) {
      if(this.val == "")
        this.val = [url]
      else
      this.val.push(url);
    },
    remove(index) {
      this.val = this.val.filter((val,key) => key !== index);
    },
    removeAll(){
      this.val = [];
    }
  }
};
</script>
<style scoped>
#imagelist-container {
  position: relative;
}
</style>
