<template>
  <section class=" bg-white sticky top-0 left-0 z-10 shadow-md">
    <div class="container px-4 mx-auto">
      <nav class="relative">
        <div class="flex justify-center items-center">
          <nuxt-link :to="{ path: '/' }">
            <img
              class="h-10"
              :src="url + '/' + this.$store.state.header.logo"
              alt=""
              width="auto"
            />
          </nuxt-link>
          <div class="md:hidden absolute left-0 top-0">
            <button
              @click="toggleMobile"
              class="navbar-burger flex items-center py-3 hover:bg-transparent rounded outline-none"
            >
              <svg
              v-if="!this.activeMenu"
                class="block h-4 w-4"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Mobile menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
              </svg>
              <i class="py-0 px-0 font-bold text-red-500 " v-if="this.activeMenu">
                &times;
              </i>
            </button>
          </div>
          <ul
            ref="navMenu"
            :class="
              `transition-all flex lg:flex-row md:flex-row pointer-events-none opacity-0 h-100 
          absolute top-full -left-full bg-white
          md:opacity-1 lg:opacity-1 md:h-auto lg:h-auto
          lg:pointer-events-auto  justify-center w-full leading-10  flex-col 
          lg:relative lg:top-auto lg:left-auto
          md:relative md:top-auto md:left-auto
          md:pointer-events-auto ` + (activeMenu == false ? '' : 'active-menu')
            "
          >
            <li>
              <nuxt-link
                class="text-lg hover:text-pink-500 font-medium  pr-4 pl-4"
                :to="{ path: '/' }"
                ><i class="fas fa-home text-purple-500"></i
              ></nuxt-link>
            </li>
            <li class="relative">
              <a
                @click="toggleShop = !toggleShop"
                class="text-lg hover:text-pink-500 font-medium  pr-4 pl-4"
                href="javascript:void(0)"
                ><i class="fas fa-store text-pink-500"></i> Shop
                <i class="fas fa-chevron-down  text-sm text-blue-300 "></i
              ></a>
              <div
                v-if="toggleShop"
                class="lg:absolute relative top-full mt- right-0 left-auto text-center shadow bg-white px-2 text-lg lg:w-40 md:w-40 w-60 z-10 dropdow px-5 lg:px-0"
              >
                <div
                  v-for="(item, index) in this.$store.state.header.items"
                  :key="index"
                >
                  <nuxt-link
                    class="block py-1 font-medium text-pink-400 hover:text-pink-900"
                    :to="{ path: '/' + item.url }"
                    >{{ item.title }}</nuxt-link
                  >
                  <div class="h-px w-full bg-gray-300"></div>
                </div>
              </div>
            </li>
            <li>
              <nuxt-link
                class="text-lg hover:text-pink-500 font-medium  pr-4 pl-4"
                :to="{ path: '/gift' }"
                ><i class="fas fa-gift pr-1 text-red-700"></i>Gift</nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                class="text-lg hover:text-pink-500 font-medium  pr-4 pl-4"
                :to="{ path: '/contact' }"
                ><i class="fas fa-paper-plane pr-1 text-blue-500"></i
                >Contact</nuxt-link
              >
            </li>
            <li class="block lg:hidden">
              <nuxt-link
                class=" hover:bg-red-500 bg-green-400 border-0 mx-1.5 px-8 py-1 rounded shadow text-white"
                :to="{ path: '/login' }"
              >
                Log In
              </nuxt-link>
            </li>
            <li class="block lg:hidden">
            <nuxt-link
              class=" hover:bg-red-500 bg-purple-400 border-0 mx-1.5 px-8 py-1 rounded shadow text-white"
              :to="{ path: '/register' }"
            >
              Sign Up
            </nuxt-link>
              </li>
          </ul>
          <div class="flex  absolute right-0 ">
            <button
              @click="showCart"
              class="hover:bg-green-500 bg-red-500 border-0 mx-1.5 px-8 py-1 rounded shadow text-white"
            >
              Cart
              {{
                this.$store.state.cart.items != ""
                  ? "(" + this.$store.state.cart.items.length + ")"
                  : ""
              }}
            </button>
            <nuxt-link
              class="hidden lg:block hover:bg-red-500 bg-green-400 border-0 mx-1.5 px-8 py-1 rounded shadow text-white"
              :to="{ path: '/login' }"
            >
              Log In
            </nuxt-link>
            <nuxt-link
              class="hidden lg:block hover:bg-red-500 bg-purple-400 border-0 mx-1.5 px-8 py-1 rounded shadow text-white"
              :to="{ path: '/register' }"
            >
              Sign Up
            </nuxt-link>
          </div>
        </div>
      </nav>
    </div>
  </section>
</template>
<script>
export default {
  loading: true,
  data() {
    return {
      toggleShop: false,
      activeMenu: false
    };
  },
  watch: {
    $route(to, from) {
      this.toggleShop = this.toggleShop == true ? false : this.toggleShop;
    }
  },
  computed: {
    url() {
      return process.env.ROOT_URL;
    }
  },
  methods: {
    showCart() {
      this.$store.dispatch("cart/fetchCart", null, { root: true });
      this.$store.commit("cart/showCart", true, { root: true });
    },
    toggleMobile() {
      this.activeMenu = !this.activeMenu;
    }
  }
};
</script>
<style scoped>
.active-menu {
  left: 0;
  opacity: 1;
  pointer-events: all;
}
.dropdow > div:last-child div {
  @apply hidden;
}
</style>
