<template>
  <div>
    <textarea :id="id" v-model="value"></textarea>
  </div>
</template>
<script>
let baseURL = process.env.ROOT_URL + "/";
export default {

  props: ["id", "value"],
  data() {
    return {
      val: ""
    };
  },
  watch: {
    value(value, val) {
      this.val = value == "" || value == null ? "" : value;
    }
  },
  mounted() {
    let app = this;
    app.val = app.value;
    $(document).ready(function() {
      setTimeout(() => {
        setTimeout(() => {
          app.getCkeditor();
        }, 500);
      }, 500);
      setInterval(() => {
        for (var i in CKEDITOR.instances) {
          CKEDITOR.instances[i].on("change", function() {
            if (CKEDITOR.instances[i].name == app.id) {
              app.val = CKEDITOR.instances[i].getData();
            }
          });
        }
      }, 3000);
    });
  },
  // updated() {
  // this.$nextTick(()=>{
  //      this.getCkeditor();
  // })
  // let app = this;
  // $(document).ready(function() {
  //     for (var i in CKEDITOR.instances) {
  //         CKEDITOR.instances[i].on("change", function() {
  //             if (CKEDITOR.instances[i].name == app.id) {
  //                 app.val = CKEDITOR.instances[i].getData();
  //             }
  //         });
  //     }
  // });
  // },
  methods: {
    getCkeditor() {
      CKEDITOR.replace(this.id, {
        baseHref: baseURL,
        filebrowserImageBrowseUrl: baseURL + "assets/ckfinder/ckfinder.html",
        filebrowserImageBrowseUrl:
          baseURL + "assets/ckfinder/ckfinder.html?type=Images",
        filebrowserUploadUrl:
          baseURL +
          "assets/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images",
        filebrowserWindowWidth: "1000",
        filebrowserWindowHeight: "700"
      });
    }
  }
};
</script>
<style>
.cke_screen_reader_only {
  width: auto !important;
}
</style>
