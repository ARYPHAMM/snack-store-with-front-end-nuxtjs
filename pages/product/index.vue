<template>
  <div class="bg-white">
    <User-Breadcrumb :value="[item]" />
    <div>
      <div class="container lg:px-14 mx-auto">
        <h5 class="font-bold text-lg text-pink-500 px-1">{{ item.title }}</h5>
        <div class="flex w-full flex-wrap flex-row">
          <div
            class="w-1/2 lg:w-1/4 "
            v-for="(item, index) in this.$store.state.product.items"
            :key="index"
          >
            <User-ProductItemInPage class="mx-1 mb-1" :item="item" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  props: ["item"],
  methods: {
    ...mapActions({ fetchItems: "api/fetchItems" })
  },
  created() {
    this.$store.commit("product/setItems", [], { root: true });
    let data = {
      url: "get-items-of-cat",
      data: {
        table: "products",
        cat_id: this.item.id
      },
      mutation: "product/setItems"
    };
    this.fetchItems(data);
  }
};
</script>
