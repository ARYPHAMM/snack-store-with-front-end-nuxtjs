<template>
  <div class="product__item">
    <div class="thumbnail">
      <nuxt-link :to="{ path: '/' + item.url }"
        ><img :src="url + '/' + item.thumbnail" alt=""
      /></nuxt-link>
    </div>
    <div class="w-full flex flex-wrap">
      <nuxt-link
        :to="{ path: '/' + item.url }"
        class="font-medium block text-white w-full title"
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
          <span class="text-white font-bold">
            {{
              item.price_sale == "" || item.price_sale == 0
                ? ""
                : item.price_sale + " $"
            }}
          </span>
        </div>
        <a
          @click="addCart"
          class="bg-purple-400 border-b-2 border-white cursor-pointer float-right font-bold hover:bg-blue-500 hover:border-blue-500 mx-1 px-2 py-1 rounded shadow-sm text-sm text-white transition"
          >Add</a
        >
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
.title {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  height: 3rem;
}
.thumbnail {
  width: 100px;
  height: 100px;
}
.thumbnail a {
  display: block;
}
/* .thumbnail a img {
  width: 100%;
  height: 100%;
  object-fit: contain;
} */
.heading * {
  color: #fff;
}
.button__addToCart {
  border: 2px solid #fff;
  font-size: 0.8rem;
  float: right;
}
.product__item.swiper-product-item img {
  height: 100px;
  object-fit: contain;
  width: 100px;
}
.product__item.swiper-product-item .heading {
  width: 100%;
}
.product__item.swiper-product-item .heading > a:first-child {
  font-size: 0.9rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  height: 3rem;
}
</style>
