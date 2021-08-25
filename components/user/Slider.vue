<template>
  <div class="swiper-container swiper-container-slider">
    <div class="swiper-wrapper">
      <div :style="{backgroundColor: item.heading.color}" class="swiper-slide" v-for="item,index in Items" :key="index">
     
        <nuxt-link class="d-block position-relative" :to="{path:'/'}">
          <img :src="url+'/'+item.thumbnail" alt="" />
        
        </nuxt-link>
         <div class="heading">
            <div class="title" data-swiper-parallax="-300">
              {{ item.heading.title }}
            </div>
      
            <div class="text" data-swiper-parallax="-100">
              <p>
                {{ item.heading.description }}
              </p>
              <div class="clear-both"></div>
              <a
                v-if="item.heading.url != null"
                :href="item.heading.url"
                target="_bank"
                class="block shadow-sm bg-blue-500 transition hover:bg-blue-400 text-white font-bold py-4 px-4  rounded mt-6 text-sm w-max"
              >
                View Collection
              </a>
            </div>
          </div> 
      </div>
    </div>
    <div class="swiper-pagination swiper-pagination-slider"></div>
    <!-- Add Arrows -->
    <!-- <div class='swiper-button-next swiper-button-next-slider'></div>
<div class='swiper-button-prev swiper-button-prev-slider'></div> -->
  </div>
</template>
<script>
export default {
  props: ["Items"],
  computed: {
    url() {
      return process.env.ROOT_URL;
    }
  },
  mounted() {
    $(document).ready(function() {
      setTimeout(()=>{
   var swiper = new Swiper(".swiper-container-slider", {
        autoplay: {
          delay: 5000
        },
        pagination: {
          el: ".swiper-pagination-slider",
          clickable: true
        },
        speed: 2000,
        navigation: {
          nextEl: ".swiper-button-next-slider",
          prevEl: ".swiper-button-prev-slider"
        },
   
      });
      },1000)
   
    });
  }
};
</script>
<style lang="css" scoped>

.swiper-container-slider img{
  height: 500px;
width: 100%;
object-fit: contain;
}
.heading{
  position: absolute;
    top: 0;
    left: 40px;
    height: 100%;
    display: flex;
    justify-content: center;
    /* align-items: center; */
    flex-direction: column;
}
.swiper-slide {
  font-size: 18px;
  color: #fff;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.swiper-slide .title {
  font-size: 41px;
  font-weight: 300;
}
.swiper-slide .subtitle {
  font-size: 21px;
}
.swiper-slide .text {
  font-size: 1.3rem;
  max-width: 400px;
  line-height: 1.3;
}
.button__view--more {
  display: inline;
  margin-left: auto;
}
</style>
