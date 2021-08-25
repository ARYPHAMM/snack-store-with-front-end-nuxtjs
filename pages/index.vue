<template>
<transition name="index" mode="out-in">
  <div>
    <User-Slider :Items="this.$store.state.slider.items" />
    <div v-for="item,index in this.$store.state.website.categories" :key="`category_${index}`">
      
      <User-InforBrand   :item="item" :background="item.background" :rowReverse="(index % 2 == 0? 1 :0 )" />
      <User-BrandProduct
      
        v-if="item.products != ''"
        :item="item" 
        :items="item.products"
        :background="item.background"
      />
    </div>
  </div>
  </transition>
</template>
<script>
 import { uuid } from 'vue-uuid'; 
export default {
  head() {
    return {
      title: this.$store.state.website.item.title,
      meta: [
        {
          hid: this.$store.state.website.item.title,
          name: this.$store.state.website.item.title,
          content: this.$store.state.website.item.content
        }
      ],
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: process.env.ROOT_URL + "/" + this.$store.state.website.fav
        }
      ]
    };
  },
  data(){
    return {
      generateID: uuid.v1()
    }
  },
   transition: {
    name: 'home',
    mode: 'out-in'
  },
  // methods:{
  //   rand_uuid(){
  //     return uuid.v1();
  //   }
  // }



};
</script>
<style scoped>
  .home-enter-active, .home-leave-active { transition: opacity .5s; }
  .home-enter, .home-leave-active { opacity: 0; }
</style>