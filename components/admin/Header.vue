<template>
  <div>
    <div class="d-flex flex-row shadow ">
      <div
        class=" p-1 col-md-2 bg-primary d-flex align-items-center text-white font-weight-bold justify-content-center"
      >
        Admin
      </div>
      <div
        v-if="user != null"
        class="p-1 col-md-10 d-flex justify-content-end pr-2"
      >
        <div>
          <button
            class="btn shadow-none"
            type="button"
            data-toggle="collapse"
            data-target="#contentId"
            aria-expanded="false"
            aria-controls="contentId"
          >
            <span>
              {{ user.fullname }}
            </span>
            <i class="fas fa-chevron-down    "></i>
          </button>
          <div class="collapse" id="contentId">
            <nuxt-link :to="{ path: '/setting' }">
              <i class="fas fa-cog    "></i> Setting</nuxt-link
            >
            <a class="d-block " @click="logout"> <i class="fas fa-sign-out    "></i> Sign out</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: "admin",
  data() {
    return {
      user: {}
    };
  },
  methods: {
    logout() {
      this.$auth.logout();
    }
  },
  async created(){
    this.user = this.$auth.user || null;
  }
};
</script>
<style scoped>
.collapsing {
  transition: none !important;
}
#contentId.collapse {
  opacity: 0;
}
#contentId.collapse.show {
  opacity: 1;
}
div#contentId {
  display: flex !important;
  padding: 0px 10px;
  position: absolute;
  background: white;
  width: 120px;
  text-align: right;
  right: 0;
  left: auto;
  box-shadow: 1px 0px 4px rgb(0 0 1 / 11%);
  border: 1px solid #dedede;
  margin-top: 3px;
  border-radius: 3px;
  transition: height 0.35s ease !important;
  top: 100%;
  flex-direction: column;
  z-index: 9;
}
div#contentId > a {
  color: var(--gray-dark);
  font-size: 1rem;
}
div#contentId > a:not(:last-child) {
  line-height: 2rem;
}
</style>
