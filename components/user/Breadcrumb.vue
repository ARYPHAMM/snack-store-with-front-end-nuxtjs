<template>

  <div  v-if="value != null" class="bg-gray-50 shadow-sm py-2">
    <div class="container lg:px-14 mx-auto">
      <ul class="flex text-gray-600 text-sm lg:text-base font-medium">
        <li class="inline-flex items-center">
          <nuxt-link :to="{path:'/'}"><i class="fas fa-home    "></i></nuxt-link>
          <svg
            class="h-5 w-auto text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </li>
        <li class="inline-flex items-center" v-for="item,index in value" :key="index">
          <nuxt-link :disabled="(value.length-1 == index?true :false)" :class="(value.length-1 == index?'disabled:opacity-50 cursor-default' :'')" :to="{path:'/'+item.url}">
            {{item.title}}
          </nuxt-link>
          <svg v-if="index != (value.length-1)"
            class="h-5 w-auto text-gray-400 "
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </li>

      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: ["value"]
};
</script>
<style></style>
