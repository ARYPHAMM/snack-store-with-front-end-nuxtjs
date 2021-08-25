<template>
  <div class="md:w-1/4  m-auto flex items-center justify-center h-full">
    <div class="w-full w-full lg:px-0 px-5">
      <form @submit.prevent="register" autocomplete="on" class="w-full">
        <h1 class="font-bold text-lg">
          Sign Up
        </h1>
        <!-- <label for="price" class="block text-sm font-medium text-gray-700"
              >Email</label
            > -->
        <div class="mt-3 relative rounded-md shadow-sm">
          <div
            class="absolute top-2 left-0 pl-3 flex items-center pointer-events-none"
          >
            <span class="text-gray-500 sm:text-sm">
              <i class="fas fa-file-invoice"></i>
            </span>
          </div>
          <input
            type="text"
            v-model="form.fullname"
            class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 py-1 text-md border-gray-300 rounded-md outline-none"
            placeholder="Enter full name..."
          />
          <div class="bg-red-400 text-white pl-1 pr-1" v-show="error.fullname != ''">
            <strong><i class="fas fa-exclamation    "></i> {{ error.fullname }}</strong>
          </div>
        </div>
        <div>
          <div
            class="mt-3 relative rounded-none shadow-none bg-white flex justify-around"
          >
            <label class="font-normal text-gray-500">Gender</label>
            <div class="custom-control custom-radio custom-control-inline">
              <input
                type="radio"
                v-model="form.gender"
                value="1"
                id="male"
                name="gender"
                class="custom-control-input"
              />
              <label class="custom-control-label" for="male"
                ><i class="fas fa-male    "></i
              ></label>
            </div>
            <div class="custom-control custom-radio custom-control-inline">
              <input
                type="radio"
                v-model="form.gender"
                id="female"
                value="2"
                name="gender"
                class="custom-control-input"
              />
              <label class="custom-control-label" for="female"
                ><i class="fas fa-female   text-pink "></i
              ></label>
            </div>
            <div class="custom-control custom-radio custom-control-inline">
              <input
                type="radio"
                v-model="form.gender"
                value="0"
                id="other"
                name="gender"
                class="custom-control-input"
              />
              <label class="custom-control-label text-purple" for="other"
                >Other
              </label>
            </div>
          </div>
          <div>
            <div class="bg-red-400 text-white pl-1 pr-1" v-show="error.gender != ''">
              <strong><i class="fas fa-exclamation    "></i> {{ error.gender }}</strong>
            </div>
          </div>
        </div>
        <div class="mt-3 relative rounded-md shadow-sm">
          <div
            class="absolute top-2 left-0 pl-3 flex items-center pointer-events-none"
          >
            <span class="text-gray-500 sm:text-sm">
              <i class="fas fa-birthday-cake    "></i>
            </span>
          </div>
          <input
            type="date"
            v-model="form.birthday"
            class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 py-1 text-md border-gray-300 rounded-md outline-none"
          />
           <div class="bg-red-400 text-white pl-1 pr-1" v-show="error.birthday != ''">
          <strong><i class="fas fa-exclamation    "></i> {{ error.birthday }}</strong>
        </div>
        </div>
        <div class="mt-3 relative rounded-md shadow-sm">
          <div
            class="absolute top-2 left-0 pl-3 flex items-center pointer-events-none"
          >
            <span class="text-gray-500 sm:text-sm">
              <i class="fas fa-address-card    "></i>
            </span>
          </div>
           <textarea v-model="form.address" rows="3" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 py-1 text-md border-gray-300 rounded-md outline-none"
            placeholder="Enter address..."></textarea>
              <div class="bg-red-400 text-white pl-1 pr-1" v-show="error.address != ''">
          <strong><i class="fas fa-exclamation    "></i> {{ error.address }}</strong>
        </div>
        </div>
        <div class="mt-3 relative rounded-md shadow-sm">
          <div
            class="absolute top-2 left-0 pl-3 flex items-center pointer-events-none"
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
               <div class="bg-red-400 text-white pl-1 pr-1" v-show="error.email != ''">
          <strong><i class="fas fa-exclamation    "></i> {{ error.email }}</strong>
        </div>
        </div>
        <div class="mt-3 relative rounded-md shadow-sm">
          <div
            class="absolute top-2 left-0 pl-3 flex items-center pointer-events-none"
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
               <div class="bg-red-400 text-white pl-1 pr-1" v-show="error.password != ''">
          <strong><i class="fas fa-exclamation    "></i> {{ error.password }}</strong>
        </div>
        </div>
        <button
          type="submit"
          class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-6 rounded text-md mt-3 block ml-auto"
        >
         <i class="fas fa-paper-plane"></i>
        </button>
      </form>
    </div>
  </div>
  <!-- <div class="bg-white">
    <div class="container">
      <div class="row justify-content-center">
        <form
          @submit.prevent="register"
          autocomplete="on"
          class="col-md-6 mt-3 mb-3"
        >
          <h3 class="text-primary">
            Register Form
          </h3>
          <div class="form-group">
            <label>Full name</label>
            <input
              v-model="form.fullname"
              type="text"
              class="form-control shadow-none rounded-0 outline-none border-none"
              placeholder="Enter Full name"
            />
            <div
              v-show="error.fullname != ''"
              class="alert alert-danger rounded-0 p-0 pr-1 pl-1"
              role="alert"
            >
              <strong><i class="fas fa-exclamation    "></i> {{ error.fullname }}</strong>
            </div>
          </div>
          <label>Gender</label>
          <div class="form-group justify-content-center d-flex">
            <div>
              <div class="custom-control custom-radio custom-control-inline">
                <input
                  type="radio"
                  v-model="form.gender"
                  value="1"
                  id="male"
                  name="gender"
                  class="custom-control-input"
                />
                <label class="custom-control-label" for="male"
                  ><i class="fas fa-male    "></i
                ></label>
              </div>
              <div class="custom-control custom-radio custom-control-inline">
                <input
                  type="radio"
                  v-model="form.gender"
                  id="female"
                  value="2"
                  name="gender"
                  class="custom-control-input"
                />
                <label class="custom-control-label" for="female"
                  ><i class="fas fa-female   text-pink "></i
                ></label>
              </div>
              <div class="custom-control custom-radio custom-control-inline">
                <input
                  type="radio"
                  v-model="form.gender"
                  value="0"
                  id="other"
                  name="gender"
                  class="custom-control-input"
                />
                <label class="custom-control-label text-purple" for="other"
                  >Other
                </label>
              </div>
            </div>
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Birthday</label>
            <input
              type="date"
              v-model="form.birthday"
              class="form-control shadow-none rounded-0 outline-none border-none"
            />
            <div
              v-show="error.birthday != ''"
              class="alert alert-danger rounded-0 p-0 pr-1 pl-1"
              role="alert"
            >
              <strong><i class="fas fa-exclamation    "></i> {{ error.birthday }}</strong>
            </div>
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Address</label>
            <textarea
              class="form-control shadow-none rounded-0 outline-none border-none"
              v-model="form.address"
              id=""
              cols="30"
              rows="2"
            ></textarea>
            <div
              v-show="error.address != ''"
              class="alert alert-danger rounded-0 p-0 pr-1 pl-1"
              role="alert"
            >
              <strong><i class="fas fa-exclamation    "></i> {{ error.address }}</strong>
            </div>
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              v-model="form.email"
              class="form-control shadow-none rounded-0 outline-none border-none"
              placeholder="Enter email"
            />
            <div
              v-show="error.email != ''"
              class="alert alert-danger rounded-0 p-0 pr-1 pl-1"
              role="alert"
            >
              <strong><i class="fas fa-exclamation    "></i> {{ error.email }}</strong>
            </div>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              v-model="form.password"
              class="form-control shadow-none rounded-0 outline-none border-none"
              id="exampleInputPassword1"
              placeholder="Password"
            />
            <div
              v-show="error.password != ''"
              class="alert alert-danger rounded-0 p-0 pr-1 pl-1"
              role="alert"
            >
              <strong><i class="fas fa-exclamation    "></i> {{ error.password }}</strong>
            </div>
          </div>
          <button type="submit" class="btn btn-primary float-right">
            Submit
          </button>
        </form>
      </div>
    </div>
  </div> -->
</template>
<script>
export default {
  data() {
    return {
      form: {
        fullname: "",
        gender: "",
        birthday: "",
        address: "",
        email: "",
        password: ""
      },
      error: {
        fullname: "",
        gender: "",
        birthday: "",
        address: "",
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
    async register() {
      this.$axios
        .post("register", this.form)
        .then(res => {
          this.$router.push("/login");
        })
        .catch(error => {
             for (var k in this.error) {
          if(error.response.data.errors[k] != null)
            this.error[k] = error.response.data.errors[k][0];
          else
           this.error[k] = '';
        }
        });
      // this.$auth.logout();
      //  this.$axios.get('http://127.0.0.1:8000/sanctum/csrf-cookie').then(res => {
      //   //  this.$axios.post('register', data).then(res=>{
      //     this.$auth.login({
      //         data: {email:'quoctienphamm@gmail.com',password:'123456'}
      //     });
      //     // })
      //  });
    }
  }
};
</script>
