<template>
  <div class="container">
    <div class="row">
      <User-Breadcrumb :value="[]" />
    </div>
    <div id="page__content" class="p-3">
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