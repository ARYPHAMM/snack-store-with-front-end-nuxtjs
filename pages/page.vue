<template>
  <div class="container">
    <div class="row">
      <User-Breadcrumb :value="[item]" />
    </div>
    <div id="page__content" class="row align-items-center">
      <div class="w-100" v-html="item.content"></div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["item"],
  computed: {
    url() {
      return process.env.ROOT_URL;
    }
  },
  created() {
    let app = this;
    $(document).ready(function() {
      let element = $("#page__content img");
      $(element).each(function(index, val) {
        $(val).attr("src", app.url + "/" + $(val).attr("src"));
      });
    });
  }
};
</script>
<style scoped>
.logo {
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
}
.title {
  font-size: 1.5rem;
  letter-spacing: 0.5px;
}
</style>
