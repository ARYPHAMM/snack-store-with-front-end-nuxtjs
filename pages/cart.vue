<template>
  <div class="bg-gray-100  shadow-sm ">
    <User-Breadcrumb :value="[{ title: 'cart', url: 'cart' }]" />
    <div class="mt-3">
      <div class="container max-w-3xl block m-auto ">
        <div class="flex flex-col w-full ">
          <div
            v-for="(item, index) in this.$store.state.cart.items"
            :key="index"
            class="shadow-sm w-full flex flex-row justify-between items-center bg-red-200 mb-3 rounded-md"
          >
            <div
              class="w-10 font-bold text-lg text-red-700 flex items-center justify-center"
            >
              <button class="hover:text-red-900" @click="remove(item.id)">
                &times;
              </button>
            </div>
            <div class="thumbnail w-1/5 h-28 flex items-center">
              <nuxt-link
                :to="{ path: '/' + item.url }"
                class="block h-full w-full"
                ><img
                  class="h-full w-full object-contain"
                  :src="url + '/' + item.thumbnail"
                  alt=""
              /></nuxt-link>
            </div>
            <div class="pl-3 w-full h-28 flex items-center">
              <nuxt-link
                :to="{ path: '/' + item.url }"
                class="text-sm font-bold"
                >{{ item.title }}</nuxt-link
              >
            </div>
            <div class="w-1/3 h-28 flex items-center flex-col justify-center">
              <div>
                  <del class="text-gray-400" v-if="item.price_sale != '' && item.price > item.price_sale && item.price != ''">
             {{item.price}}$
            </del>
            <span class="font-semibold">
          {{ item.price_sale == '' || item.price_sale == 0 ? '' :  item.price_sale + ' $' }}
            </span>
              </div>
              <div class="flex">
                <button
                  @click="minus(item.id)"
                  class="m-1 bg-red-400 px-2 text-white font-bold shadow rounded-md"
                >
                  -
                </button>
                <input
                  class="m-1 w-10 shadow text-center rounded outline-none"
                  :value="item.quantity"
                  type="text"
                  readonly
                />
                <button
                  @click="plus(item.id)"
                  class="m-1 bg-red-400 px-2 text-white font-bold shadow rounded-md"
                >
                  +
                </button>
              </div>
              <div class="flex">
                <b class="pr-1">Total:</b>
                <span class="font-bold">
                  {{ item.price * item.quantity }}$
                </span>
              </div>
            </div>
          </div>
        </div>
        <div v-if="this.$store.state.cart.items != ''" class="flex">
          <div class="float-right">
            <b class="pr-1">Total Cart: </b>
            <span class="text-red-700"
              >{{ this.$store.state.cart.cart_total }}$</span
            >
          </div>
        </div>
        <div class="flex justify-center">
          <button
            @click="back"
            class="mx-2 my-2 bg-yellow-400 text-white px-3 py-1 shadow rounded hover:bg-red-500 transition-all"
          >
            Back
          </button>
          <nuxt-link
            :to="{path:'/payment'}"
            v-if="this.$store.state.cart.items != ''"
            class="mx-2 my-2 bg-green-400 text-white px-3 py-1 shadow rounded hover:bg-blue-500 transition-all"
          >
            Check out
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  computed: {
    url() {
      return process.env.ROOT_URL;
    }
  },
  methods: {
    ...mapMutations({
      cartPlus: "cart/cartPlus",
      cartMinus: "cart/cartMinus",
      cartRemove: "cart/cartRemove"
    }),
    plus(id) {
      this.cartPlus(id);
    },
    minus(id) {
      this.cartMinus(id);
    },
    remove(id) {
      this.cartRemove(id);
    },
    back(){
       this.$router.back();
    }
  }
};
</script>
<style></style>
