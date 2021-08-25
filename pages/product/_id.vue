<template>
  <div class="bg-gray-100  shadow-sm">
    <User-Breadcrumb :value="[item]" />
    <div class="mt-3">
      <div class="container max-w-7xl block m-auto">
       <div class="flex flex-wrap">
          <div class="lg:w-1/3 md:w-1/3 w-full">
          <div
            style="--swiper-navigation-color: #fff; --swiper-pagination-color: #fff"
            class="swiper-container swiper-slider-thumb"
          >
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <img :src="url + '/' + item.thumbnail" />
              </div>
              <div
                class="swiper-slide"
                v-for="(image, index) in JSON.parse(item.images)"
                :key="index"
              >
                <img :src="url + '/' + image" />
              </div>
            </div>
            <!-- <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div> -->
          </div>
          <div  class="swiper-container swiper-gallery">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <img :src="url + '/' + item.thumbnail" />
              </div>
              <div
                class="swiper-slide"
                v-for="(image, index) in JSON.parse(item.images)"
                :key="index"
              >
                <img :src="url + '/' + image" />
              </div>
            </div>
          </div>
        </div>
        <div class="lg:w-2/3 md:w-2/3 px-3 w-full">
          <h3 class="text-2xl text-purple-700 font-bold uppercase">
            {{ item.title }}
          </h3>
          <div class="mt-5 text-lg leading-7">
            {{ item.description }}
          </div>
          
          <div class="price  mt-5">
            <b class="font-weight-bold">Price:
            </b>
            <del class="text-gray-400" v-if="item.price_sale != '' && item.price > item.price_sale && item.price != ''">
             {{item.price}}$
            </del>
            <span class="text-red-700 font-bold">
          {{ item.price_sale == '' || item.price_sale == 0 ? '' :  item.price_sale + ' $' }}
            </span>
          </div>
          <div class="mt-5 lg:block md:block flex justify-center">
            <button @click="quantity -= 1" class="btn shadow-none lg:m-0 md:0 mx-2">
              <i class="fas fa-minus"></i>
            </button>
            <input
              v-model="quantity"
              min="1"
              max="100"
              type="number"
              value="1"
              class="form-control form-control-quantity mr-1"
            />
            <button @click="quantity += 1" class="btn shadow-none lg:m-0 md:0 mx-2">
              <i class="fas fa-plus    "></i>
            </button>
            <button class="bg-blue-500 px-5 py-2 text-white text-sm  shadow-md hover:bg-pink-900" @click="addCart">
              Add to cart
            </button>
          </div>
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
  data() {
    return {
      quantity: 1
    };
  },
  watch: {
    quantity(old) {
      if (old < 1) this.quantity = 1;
      if (old > 100) this.quantity = 100;
    }
  },
  mounted() {
    var swiper = new Swiper(".swiper-gallery", {
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true
    });
    var swiper2 = new Swiper(".swiper-slider-thumb", {
      spaceBetween: 10,
      // navigation: {
      //   nextEl: ".swiper-button-next",
      //   prevEl: ".swiper-button-prev"
      // },
      thumbs: {
        swiper: swiper
      }
    });
  },
  methods: {
    addCart() {
      this.addToCart(this.item.id, this.quantity);
      this.$store.commit("cart/showCart", true, { root: true });
    }
  }
};
</script>
<style scoped>
.swiper-container.swiper-slider-thumb {
  width: 100%;
  height: 300px;
  margin-left: auto;
  margin-right: auto;
}
.swiper-container.swiper-slider-thumb img{
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.swiper-slide {
  background-size: cover;
  background-position: center;
}
.swiper-slider-thumb {
  height: 80%;
  width: 100%;
}
.swiper-gallery {
  height: 20%;
  box-sizing: border-box;
  padding: 10px 0;
}
.swiper-gallery .swiper-slide {
  width: 25%;
  height: 100%;
  opacity: 0.4;
}
.swiper-gallery .swiper-slide-thumb-active {
  opacity: 1;
}
.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
