<template>
  <div>
    <div class="font-weight-bold">
      {{ title }}
    </div>
    <Admin-Input-Text
      ref="content"
      :value="value.value"
      :type="'text'"
      class="form-control rounded-0 shadow-none mb-1"
      :placeholder="`Enter ` + this.title +'...'"
    />
    <div v-if="value.url == true" class="form-group">
      <input
        type="text"
        class="form-control shadow-none rounded-0"
        ref="url"
        v-model="url"
        aria-describedby="helpId"
        :placeholder="`Enter ` + this.title +' url'"
      />
      <small id="helpId" class="form-text text-muted">URL for {{title}}</small>
    </div>
  </div>
</template>
<script>
export default {
  props: ["name", "value", "title"],
  data() {
    return {
      url: ""
    };
  },
  watch: {
    value(value, val) {
      this.url = value.url == "" || value.url == null ? "" : value.url;
    }
  },
  
};
</script>
<style></style>
