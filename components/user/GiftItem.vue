<template>
    <div class="git__item">
     <div class="git__thumbnail">
        <nuxt-link :to="{path:'/'+item.url}">
            <img :src="url+'/'+item.thumbnail" alt="">
        </nuxt-link>
     </div>
     <div class="git__heading">
        <nuxt-link :to="{path:'/'+item.url}">
             {{item.title}}
        </nuxt-link>
     </div>
    </div>  
</template>

<script>
export default {
    props:['item'],
 computed: {
    url() {
      return process.env.ROOT_URL;
    }
  },
}
</script>

<style>

</style>