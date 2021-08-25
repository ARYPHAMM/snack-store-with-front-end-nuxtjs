<template>
  <div>
    <User-Header ref="header__frame" />
    <Nuxt
      ref="app__frame"
      class="transition-opacity"
      :style="{ minHeight: 1000 + 'px', opacity: this.opacity }"
    />
    <User-ViewCart ref="cart" />
    <User-Footer ref="footer__frame" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      opacity: 0
    };
  },
  watch: {
    $route(to, from) {
      this.opacity = 0;
      this.loadPage(500);
      if(this.$store.state.cart.show){
       this.$store.commit("cart/showCart", false, { root: true });
      }
    },
    "$store.state.cart.show": function() {

      setTimeout(() => {
        this.$refs.cart.$el.style.top =
          this.$refs.header__frame.$el.offsetHeight + "px";
        this.$refs.cart.$el.style.right = "0";
      }, 1000);
    }
  },
  methods: {
    setHeight() {
      if (!process.server) {
        let app = this;
        this.$nextTick(() => {
          if (
            app.$refs.header__frame == undefined ||
            app.$refs.footer__frame == undefined ||
            app.$refs.app__frame == undefined
          ) {
            setTimeout(res => {
              this.setHeight();
            }, 1000);
          } else {
            let minHeight =
              window.innerHeight -
              (app.$refs.header__frame.$el.offsetHeight +
                app.$refs.footer__frame.$el.offsetHeight);
            if (app.$refs.app__frame != undefined) {
              setTimeout(() => {
                app.$refs.app__frame.$el.style.minHeight = "";
                app.$refs.app__frame.$el.style.minHeight = minHeight - 1 + "px";
                setTimeout(() => {
                  this.opacity = 1;
                }, 100);
              }, 500);
            }
          }
        });
      }
    },
    loadPage(setTime) {
      this.$nextTick(() => {
        this.$nuxt.$loading.start();
        setTimeout(() => {
          this.$nuxt.$loading.finish();
          this.setHeight();
        }, setTime);
      });
    }
  },
  created() {
    if (!process.server) {
      this.$store.dispatch("api/initHeader", null, { root: true });
      this.$store
        .dispatch("api/initIndex", null, { root: true });
        
      this.$store.dispatch("api/initFooter", null, { root: true });
      this.$store.dispatch("cart/fetchCart", null, { root: true });

    }
  },
  mounted() {
    this.loadPage(3000);
  }
};
</script>
