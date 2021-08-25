<template>
  <div class="transition-opacity" :style="{opacity: this.opacity}">
    <Admin-Header   />
    <div  class="transition-opacity d-flex" :style="{minHeight: 1000 + 'px'}" >
      <div class="p-0 col-md-2">
        <div class="h-100vh bg-light">
          <Admin-Manager />
        </div>
      </div>
      <div class="p-0 col-md-10 d-flex ">
        <Nuxt />
      </div>
    </div>
    <Admin-Footer  />
  </div>
</template>
<script>
export default {
  head: {
    link: [
      // { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {  rel: "stylesheet", href: "/css/bootstrap.min.css" }
    ],
    script: [
      {
        src:"/js/bootstrap.min.js",
        type: "text/javascript"
      },
      {
        src: process.env.ROOT_URL + "/assets/ckfinder/ckfinder.js",
        type: "text/javascript"
      },
      {
        src: process.env.ROOT_URL + "/assets/ckeditor/ckeditor.js",
        type: "text/javascript"
      }
    ]
  },
  data() {
    return {
      opacity: 0
    };
  },
  // watch: {
  //   $route(to, from) {
  //     this.opacity = 0;
  //     this.loadPage(500);
  //   }
  // },
  // methods: {
  //    setHeight() {
  //     if (!process.server) {
  //       let app = this;
  //       this.$nextTick(() => {
  //         console.log()
  //         if (
  //           app.$refs.headerAdmin__frame == undefined || 
  //           app.$refs.footerAdmin__frame == undefined ||
  //           app.$refs.appAdmin__frame == undefined ||
  //           app.$refs.headerAdmin__frame.$el.offsetHeight == undefined ||
  //           app.$refs.footerAdmin__frame.$el.offsetHeight == undefined 
  //         ) {
  //           setTimeout(res => {
  //             this.setHeight();
  //           }, 1000);
  //         } else {
  //           let minHeight =
  //             window.innerHeight -
  //             (app.$refs.headerAdmin__frame.$el.offsetHeight +
  //               app.$refs.footerAdmin__frame.$el.offsetHeight);
  //           if (app.$refs.appAdmin__frame != undefined) {
  //             setTimeout(res => {
  //               app.$refs.appAdmin__frame.$el.style.minHeight = "";
  //               app.$refs.appAdmin__frame.$el.style.minHeight = minHeight - 1 + "px";
  //               setTimeout(() => {
  //                 this.opacity = 1;
  //               }, 100);
  //             }, 500);
  //           }
  //         }
  //       });
  //     }
  //   },
  //   loadPage(setTime) {
  //     this.$nextTick(() => {
  //       this.$nuxt.$loading.start();
  //       setTimeout(() => {
  //         this.$nuxt.$loading.finish();
  //         this.setHeight();
  //       }, setTime);
  //     });
  //   }
  // },
  mounted() {
    if (!this.$auth.loggedIn || !this.$auth.hasScope("admin")) {
      this.$router.push("/");
    }else{
      this.opacity = 1;
    }
    // this.loadPage(3000);
  }
};
</script>
<style></style>
