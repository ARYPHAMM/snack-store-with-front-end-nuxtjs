<template>
  <transition name="gift" mode="out-in">
    <div class="bg-white">
      <User-Breadcrumb :value="[]" />
      <div>
        <div class="container lg:px-14 mx-auto">
          <h1 class="font-bold text-2xl text-pink-500">Gift</h1>
          <div class="flex justify-center">
            <div v-for="(item, index) in this.$store.state.post.items"
            :key="index" class="md:w-2/5 bg-white float-left m-1 shadow-md p-3">
              <User-GiftItem :item="item" />
            </div>
          </div>
        </div>
      </div>
      <div class="clear-both"></div>
    </div>
  </transition>
</template>
<script>
import { mapActions } from "vuex";
export default {
  transition: {
    name: "gift",
    mode: "out-in"
  },
  methods: {
    ...mapActions({ fetchItems: "api/fetchItems" })
  },
  created() {
    this.$store.commit("post/setItems", [], { root: true });
    let data = {
      url: "get-items-of-cat",
      data: {
        table: "posts",
        cat_id: ''
      },
      mutation: "post/setItems"
    };
    this.fetchItems(data);
  }
};
</script>
<style scoped>
.gift-enter-active,
.gift-leave-active {
  transition: opacity 0.5;
}
.gift-enter,
.gift-leave-to {
  opacity: 0;
}
</style>
