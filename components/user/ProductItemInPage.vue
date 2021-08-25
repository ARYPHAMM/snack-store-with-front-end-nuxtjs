<template>
  <div class="product__item bg-white shadow">
    <div class="thumbnail">
      <a href=""><img :src="url + '/' + item.thumbnail" alt=""/></a>
    </div>
    <div class="heading">
      <div class="w-full flex flex-wrap">
        <nuxt-link
          :to="{ path: '/' + item.url }"
          class="font-medium block  w-full title hover:text-pink-700"
          >{{ item.title }}</nuxt-link
        >
        <div class="w-full">
          <div>
            <del
              class="text-gray-400"
              v-if="
                item.price_sale != '' &&
                  item.price > item.price_sale &&
                  item.price != ''
              "
            >
              {{ item.price }}$
            </del>
            <span class="text-red-500 font-bold"> {{ item.price_sale == '' || item.price_sale == 0 ? '' :  item.price_sale + ' $' }} </span>
          </div>
          <div>
            <a
              @click="addCart"
              class="bg-purple-400 border-b-2 border-white cursor-pointer float-right font-bold hover:bg-blue-500 hover:border-blue-500 mx-1 px-2 py-1 rounded shadow-sm text-sm text-white transition"
              >Add</a
            >
            <nuxt-link
              :to="{ path: '/' + item.url }"
              class="bg-purple-400 border-b-2 border-white cursor-pointer float-right font-bold hover:bg-blue-500 hover:border-blue-500 mx-1 px-2 py-1 rounded shadow-sm text-sm text-white transition"
              >View</nuxt-link
            >
          </div>
        </div>
      </div>
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
  methods: {
    addCart() {
      this.addToCart(this.item.id, 1);
      this.$store.commit("cart/showCart", true, { root: true });
    }
  }
};
</script>
<style scoped>
.product__item {
  display: flex;
  flex-direction: row;
  padding: 0.1rem;
  border: 1px solid #dedede;
}
.thumbnail {
  width: 100px;
  height: 100px;
}
.thumbnail a {
  display: block;
}
.thumbnail a img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>
