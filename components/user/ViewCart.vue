<template>
  <transition name="fade">
<div v-if="this.$store.state.cart.show" class="bg-blue-50 shadow-sm fixed w-80 right-full z-10">
  <button @click="close" class="h-auto float-right px-2  mr-1 mt-1 rounded-lg bg-red-500 hover:bg-blue-500 text-gray-300 shadow-md ">
    &times;
  </button>
  <div class="w-full h-96 overflow-x-hidden view-cart-item">
    <div class="flex h-full w-full justify-center items-center" v-if="this.$store.state.cart.items == ''">
          <span>Cart empty</span>
    </div>
    <div v-for="item,index in this.$store.state.cart.items" :key="index">
     <div  class="flex flex-row py-3 items-center">
       <div class="w-16">
            <a href="" class="block">
              <img class="w-full h-full object-contain" :src="url+'/'+item.thumbnail" alt="">
            </a>
       </div>
       <div class="w-32">
             <a href="" class="block font-bold text-sm">
               {{item.title}}
            </a>
       </div>
       <div>
         <div>
             <del class="text-gray-400" v-if="item.price_sale != '' && item.price > item.price_sale && item.price != ''">
             {{item.price}}$
            </del>
            <span class="text-red-700 font-bold">
          {{ item.price_sale == '' || item.price_sale == 0 ? '' :  item.price_sale + ' $' }}
            </span>
         </div>
         <div class="text-xs font-bold">
           Quantity: {{item.quantity}}
         </div>
       </div>
    </div>
    <div class="h-px w-full bg-gray-400">
    </div>
        </div>
  </div>
  <div class="float-right">
    <b class="font-bold">Price total: <span class="text-red-700">{{this.$store.state.cart.cart_total}}$</span></b>
  </div>
  <div class="clear-both"></div>
  <div class="flex justify-between">
    <button   @click="viewCart" class="mx-2 my-2 bg-yellow-400 text-white px-3 py-1 shadow rounded hover:bg-red-500 transition-all">
      View Cart
    </button>
    <nuxt-link v-if="this.$store.state.cart.items != ''" :to="{path:'/payment'}" class="mx-2 my-2 bg-green-400 text-white px-3 py-1 shadow rounded hover:bg-blue-500 transition-all">
      Check out
    </nuxt-link>
  </div>
</div>
  </transition>
</template>
<script>
export default {
  transition: 'fade',
    computed: {
    url() {
      return process.env.ROOT_URL;
    }
  },
  methods:{
    close(){
       this.$store.commit("cart/showCart", false, { root: true });
    },
    viewCart(){
      this.close();
      this.$router.push("/cart");
    }
  }
}
</script>
<style scoped>
 .fade-enter-active, .fade-leave-active { transition: opacity .5s; }
  .fade-enter, .fade-leave-active { opacity: 0; }
  .view-cart-item > div:last-child > div:last-child{
display: none;
  }
</style>