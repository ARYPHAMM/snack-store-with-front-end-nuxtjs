<template>
  <div :style="{background: this.background}">
    <div class="container lg:px-28 px-5 pb-3">
      <div class="flex">
        <div class="w-1/4 px-1">
          <span class="text-right block font-medium text-lg -backdrop-hue-rotate-15 text-white">
            {{item.title}} Popular 
          </span>
        </div>
        <div class="w-3/4">
          <div :class="`w-full swiper-container swiper-container-slide-product-`+id">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="item,index in items" :key="`category_products_${index}`">
                  <User-ProductItem class="swiper-product-item" :item="item"/>
              </div>
            </div>
          </div>
          <div
          v-show="false"
              class="swiper-pagination swiper-pagination-slide-product-1 position-relative"
            ></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
 import { uuid } from 'vue-uuid'; 
export default {
    props:['background','items','item'],
    data(){
      return{
        id: uuid.v4()
      }
    },
  mounted() {
    var swiper = new Swiper(".swiper-container-slide-product-"+this.id, {
      autoplay: {
        delay: 5000
      },
      loop:false,
      pagination: {
        el: ".swiper-pagination-slide-product-1",
        clickable: true
      },
      speed: 2000,
      navigation: {
        nextEl: ".swiper-button-next-slide-product-1",
        prevEl: ".swiper-button-prev-slide-product-1"
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 5
        },
        640: {
          slidesPerView: 1,
          spaceBetween: 15
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 10
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20
        }
      }
    });
  }
};
</script>
<style scoped>
.bg-yellow {
  background-color: #ffb412;
}
.title {
  color: #fff;
}

</style>
