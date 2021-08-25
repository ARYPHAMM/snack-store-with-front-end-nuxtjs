<template>
  <div :style="{background: this.background}">
  <div class="container px-5 lg:px-28 pb-3 lg:pb-0">
    <div :class="`flex flex-wrap items-center ` + (rowReverse == 0? 'flex-row-reverse' : '')" >
      <div class="lg:w-1/2 w-full flex justify-center">
        <a href="javascript:void(0)">
          <img class="image__brand" :src="url+'/'+item.thumbnail" alt="" />
        </a>
      </div>
      <div class="lg:w-1/2 w-full">
        <div class="font-bold text-3xl text-white ">{{item.title}}</div>
        <div class="mt-1">
          <div class="text-white opacity-90">{{item.description}}</div>
          <nuxt-link :to="{path:'/'+item.url}" class=" bg-red-500 transition hover:bg-blue-500 text-white font-bold py-1 px-4 border-b-2 border-red-700 hover:border-blue-500 rounded block ml-auto w-max shadow-md">Shop {{item.title}}</nuxt-link>
        </div>
      </div>
    </div>
  </div>

  </div>
</template>
<script>
export default {
    props:['background','item',"rowReverse"],
    computed:{
      url(){
        return process.env.ROOT_URL;
      }
    }
};
</script>
<style scoped>
.bg-yellow {
  background-color: #ffb412;
}
.title {
  color: #fff;
  font-weight: bold;
  text-align: center;
  padding-top: 5rem;
  font-size: 2.5rem;
  letter-spacing: 0.2rem;
}
.description {
  color: #fff;
  font-weight: 500;
  text-align: justify;
  font-size: 1.5rem;
  padding: 0 5rem;
}
.btn__view--more {
  background-color: transparent;
  border: 2px solid #fefefe;
  color: #fefefe;
  float: right;
  font-weight: 600;
}
.image__brand{
  max-height: 500px;
}
</style>
