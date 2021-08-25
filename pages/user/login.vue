<template>
    <div class="md:w-1/4  m-auto flex items-center justify-center h-full" >
      <div class="w-full lg:px-0 px-5">
          <form
            @submit.prevent="login"
            autocomplete="on"
            class="w-full"
          >
          <h1 class="font-bold text-xl">
            Login
          </h1>

            <div class="mt-3 relative rounded-md shadow-sm">
              <div
                class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
              >
                <span class="text-gray-500 sm:text-sm">
                  <i class="fas fa-envelope    "></i>
                </span>
              </div>
              <input
                type="text"
                v-model="form.email"
                class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 py-1 text-md border-gray-300 rounded-md outline-none"
                placeholder="Enter email..."
              />
            </div>
            <div class="mt-3 relative rounded-md shadow-sm">
              <div
                class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
              >
                <span class="text-gray-500 sm:text-sm">
                  <i class="fas fa-key    "></i>
                </span>
              </div>
              <input
                type="password"
                v-model="form.password"
                class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 py-1 text-md border-gray-300 rounded-md outline-none"
                placeholder="Enter password..."
              />
            </div>
        
          <button type="submit" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-6 rounded text-md mt-3 block ml-auto">
            <i class="fas fa-sign-in-alt    "></i>
          </button>
        </form>
      </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        email: "",
        password: ""
      }
    };
  },
  mounted() {
    this.$axios.get("http://127.0.0.1:8000/sanctum/csrf-cookie");
    if (this.$auth.loggedIn) {
      let role = this.$auth.hasScope("admin") ? true : false;
      this.$router.push(!role ? "/" : "/admin");
    }
  },
  methods: {
    login() {
      let data = this.form;
      this.$auth
        .login({
          data: data
        })
        .then(res => {
          let role = this.$auth.hasScope("admin") ? true : false;
          this.$router.push(!role ? "/" : "/admin");
        });
    }
  }
};
</script>
<style></style>
