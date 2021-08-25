<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <li class="page-item">
        <a class="page-link" href="#" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
          <span class="sr-only">Previous</span>
        </a>
      </li>
      <li class="page-item" v-for="(value, index) in count" :key="index">
        <nuxt-link
          :class="`page-link ` + (active == value ? 'active' : '')"
          :to="{ name: nuxt, query: { page: value } }"
        >
          {{ value }}
        </nuxt-link>
      </li>
      <li class="page-item">
        <a class="page-link" href="#" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
          <span class="sr-only">Next</span>
        </a>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  props: ["count", "active", "router"]
};
</script>
<style></style>
