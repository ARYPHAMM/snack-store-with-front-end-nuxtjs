<template>
  <div>
    <div id="accordianId" role="tablist" aria-multiselectable="true">
      <div class="card rounded-0">
        <div class="card-header p-2" role="tab" id="manager__category">
          <h6 class="mb-0">
            <a
              class="text-dark d-flex align-items-center justify-content-between"
              data-toggle="collapse"
              data-parent="#accordianId"
              href="#manager__category--content"
              aria-expanded="true"
              aria-controls="manager__category--content"
            >
             Category <i class="fas fa-chevron-down    "></i>
            </a>
             
          </h6>
        </div>
        <div
          id="manager__category--content"
          class="collapse in"
          role="tabpanel"
          aria-labelledby="manager__category"
        >
          <div class="card-body p-2 d-flex flex-column">
             <nuxt-link class="text-muted" :to="{path:'/admin/category'}">List</nuxt-link>
          </div>
        </div>
      </div>
      <div class="card rounded-0">
        <div class="card-header p-2" role="tab" id="manager__post">
          <h6 class="mb-0">
            <a
              class="text-dark d-flex align-items-center justify-content-between"
              data-toggle="collapse"
              data-parent="#accordianId"
              href="#manager__post--content"
              aria-expanded="true"
              aria-controls="manager__post--content"
            >
             Gift <i class="fas fa-chevron-down    "></i>
            </a>
             
          </h6>
        </div>
        <div
          id="manager__post--content"
          class="collapse in"
          role="tabpanel"
          aria-labelledby="manager__post"
        >
          <div class="card-body p-2 d-flex flex-column">
             <nuxt-link class="text-muted" :to="{path:'/admin/post'}">List</nuxt-link>
          </div>
        </div>
      </div>
      <div class="card rounded-0">
        <div class="card-header p-2" role="tab" id="manager__product">
          <h6 class="mb-0">
            <a
              class="text-dark d-flex align-items-center justify-content-between"
              data-toggle="collapse"
              data-parent="#accordianId"
              href="#manager__product--content"
              aria-expanded="true"
              aria-controls="manager__product--content"
            >
             Product <i class="fas fa-chevron-down    "></i>
            </a>
             
          </h6>
        </div>
        <div
          id="manager__product--content"
          class="collapse in"
          role="tabpanel"
          aria-labelledby="manager__product"
        >
          <div class="card-body p-2 d-flex flex-column">
             <nuxt-link class="text-muted" :to="{path:'/admin/product'}">List</nuxt-link>
          </div>
        </div>
      </div>
       <div class="card rounded-0">
        <div class="card-header p-2" role="tab" id="manager__contact">
          <h6 class="mb-0">
            <a
              class="text-dark d-flex align-items-center justify-content-between"
              data-toggle="collapse"
              data-parent="#accordianId"
              href="#manager__contact--content"
              aria-expanded="true"
              aria-controls="manager__contact--content"
            >
             Contact <i class="fas fa-chevron-down    "></i>
            </a>
             
          </h6>
        </div>
        <div
          id="manager__contact--content"
          class="collapse in"
          role="tabpanel"
          aria-labelledby="manager__contact"
        >
          <div class="card-body p-2 d-flex flex-column">
             <nuxt-link class="text-muted" :to="{path:'/admin/contact'}">List</nuxt-link>
          </div>
        </div>
      </div>
       <div class="card rounded-0">
        <div class="card-header p-2" role="tab" id="manager__order">
          <h6 class="mb-0">
            <a
              class="text-dark d-flex align-items-center justify-content-between"
              data-toggle="collapse"
              data-parent="#accordianId"
              href="#manager__order--content"
              aria-expanded="true"
              aria-controls="manager__order--content"
            >
             Order <i class="fas fa-chevron-down    "></i>
            </a>
             
          </h6>
        </div>
        <div
          id="manager__order--content"
          class="collapse in"
          role="tabpanel"
          aria-labelledby="manager__order"
        >
          <div class="card-body p-2 d-flex flex-column">
             <nuxt-link class="text-muted" :to="{path:'/admin/order'}">List</nuxt-link>
          </div>
        </div>
      </div>
      <div class="card rounded-0">
        <div class="card-header p-2" role="tab" id="manager__ui">
          <h6 class="mb-0">
            <a
              class="text-dark d-flex align-items-center justify-content-between"
              data-toggle="collapse"
              data-parent="#accordianId"
              href="#manager__ui--content"
              aria-expanded="true"
              aria-controls="manager__ui--content"
            >
             UI <i class="fas fa-chevron-down    "></i>
            </a>
             
          </h6>
        </div>
        <div
          id="manager__ui--content"
          class="collapse in"
          role="tabpanel"
          aria-labelledby="manager__ui"
        >
          <div class="card-body p-2 d-flex flex-column">
             <nuxt-link class="text-muted" :to="{path:'/admin/ui/default'}">UI Default</nuxt-link>
             <nuxt-link class="text-muted" :to="{path:'/admin/ui/page'}">UI Page</nuxt-link>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
export default {};
</script>
<style></style>
