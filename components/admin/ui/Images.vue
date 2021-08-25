<template>
  <div >
      <div class="font-weight-bold">
      {{title}}
   </div>
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
        <span
          class="close bg-white"
          style="position: absolute; top: 8px; right: 28px; background: #fff; box-shadow: 0 0 3px #000; width: 20px; height: 20px; line-height: 18px; text-align: center; font-size: 16px; opacity: 1; user-select: none;"
          @click="edit(index)"
          ><i class="fas fa-edit    "></i></span
        >
        <img
          :src="ROOT_URL + '/' + image.thumbnail"
          class="thumbnail"
          style="-width: 100px !important; height: 70px
        !important; background: transparent !important; margin-bottom: 0;"
        />
      </div>
    </div>
    <button
      type="button"
      class="btn btn-primary rounded-0"
      @click="openBrowser('folder', '#imagelist', true)"
    >
      Choose images</button
    >&nbsp;&nbsp;&nbsp;
    <div :id="`modal-image`" class="modal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Heading for image</h5>

          </div>
          <div class="modal-body">
            <form >
              <div class="form-group">
                <label for="">Title</label>
                <input type="text" class="form-control" v-model="heading.title" aria-describedby="helpId">
              </div>
              <div class="form-group">
                <label for="">Desciprtion</label>
                <input type="text" class="form-control" v-model="heading.description" aria-describedby="helpId">
              </div>
              <div class="form-group">
                <label for="">Url</label>
                <input type="text" class="form-control" v-model="heading.url" aria-describedby="helpId">
              </div>
              <div class="form-group">
                <label for="">Color</label>
                <input type="text" class="form-control" v-model="heading.color" aria-describedby="helpId">
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button data-dismiss="modal" aria-label="Close" type="button" @click="save" class="btn btn-primary">Save</button>
          </div>
        </div>
      </div>
    </div>
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
  props: ["title","name","value"],
  computed: {
    ROOT_URL() {
      return process.env.ROOT_URL;
    }
  },
  data() {
    return {
      val: [],
      heading:{
        title: '',
        description: '',
        url:'',
        color:'',
      },
      index: ''
    };
  },
    watch: {
     value(value, val) {
        this.val = (value == "" || value == null ? [] : value);
      }
    },
  mounted() {
    $(document).ready(function() {
      $("#imagelist-container").sortable({
        revert: true,
        placeholder: "ui-state-highlight",
      });
      $('#modal-image').on('hidden.bs.modal', function () {
          this.save();
      })
    });
  },
  methods: {
    save(){
        this.val.map((currentValue,index) => {
           if(index== this.index){
              currentValue.heading = this.heading;
           }
        });
    },
    edit(index){
      this.index = index;
      this.val.map((currentValue,index) => {
           if(index== this.index){
             this.heading =  currentValue.heading || {};
           }
      });
      $(document).ready(function() {
         $('#modal-image').modal('show');
      });
    },
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
        this.val = [{
          thumbnail:url,
          heading:{

          },
        }]
      else
      this.val.push({
          thumbnail:url,
          heading:{

          },
        });
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
