<template>
 <div class="bg-white  shadow-sm pb-3">
    <User-Breadcrumb :value="[]" />
    <div class="container max-w-7xl block m-auto">
       <div class="flex lg:flex-row flex-col">
         <div class="lg:w-1/2 w-full mt-3 px-3 lg:p-0">
          <h1 class="text-2xl font-bold mb-3">
            Contact
          </h1>
           <form @submit.prevent="send" >
             <div class="flex flex-col mb-3">
                <lable class="text-md font-semibold">
                  Full name
                </lable>
                <input v-model="form.fullname" type="text" class="lg:w-10/12 w-full border-gray-500  border text-gray-700 shadow-sm h-10 px-2 rounded-md outline-none focus:shadow-md" placeholder="Enter full name..."  >
             </div>
             <div class="flex flex-col mb-3">
                <lable class="text-md font-semibold">
                  Tel
                </lable>
                <input v-model="form.tel" type="text" class="lg:w-10/12 w-full border-gray-500  border text-gray-700 shadow-sm h-10 px-2 rounded-md outline-none focus:shadow-md" placeholder="Enter tel..."  >
             </div>
             <div class="flex flex-col mb-3">
                <lable class="text-md font-semibold">
                  Email
                </lable>
                <input v-model="form.email" type="text" class="lg:w-10/12 w-full border-gray-500  border text-gray-700 shadow-sm h-10 px-2 rounded-md outline-none focus:shadow-md" placeholder="Enter email..."  >
             </div>
             <div class="flex flex-col mb-3">
                <lable class="text-md font-semibold">
                  Content
                </lable>
                <textarea v-model="form.content" class="lg:w-10/12 w-full border-gray-500  border text-gray-700 shadow-sm  px-2 rounded-md outline-none focus:shadow-md" placeholder="Enter content..." cols="30" rows="3"></textarea>
             </div>
             <div class="lg:w-10/12 w-full ">
             <button class="bg-blue-500 px-3 shadow-md text-white py-2 float-right hover:bg-red-500 transition-all">
                Send
             </button>
             </div>
           </form>
         </div>
         <div class="lg:w-1/2 w-full mt-3">
           <ul class="flex flex-wrap justify-center">
            <li>
              <a class="block p-1 text-pink-500" :href="this.$store.state.footer.facebook">
                <i class="fab text-3xl fa-facebook    "></i>
              </a>
            </li>
            <li>
              <a class="block p-1 text-pink-500" :href="this.$store.state.footer.instagram">
                <i class="fab text-3xl fa-instagram    "></i>
              </a>
            </li>
            <li>
              <a class="block p-1 text-pink-500" :href="this.$store.state.footer.linkedin">
                <i class="fab text-3xl fa-linkedin    "></i>
              </a>
            </li>
            <li>
              <a class="block p-1 text-pink-500" :href="this.$store.state.footer.whatsapp">
                <i class="fab text-3xl fa-whatsapp    "></i>
              </a>
            </li>
            <li>
              <a class="block p-1 text-pink-500" :href="this.$store.state.footer.messenger">
                <i class="fab text-3xl fa-facebook-messenger    "></i>
              </a>
            </li>
          </ul>
          <div class="map">
            <iframe class="max-w-full max-h-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125552.7431560326!2d105.55582253344681!3d10.45935660746249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310a65a7745ea433%3A0xa7cfd64d35b50f23!2zQ2FvIEzDo25oLCDEkOG7k25nIFRow6FwIFByb3ZpbmNl!5e0!3m2!1sen!2s!4v1629709655806!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
          </div>
         </div>
       </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      form:{
        fullname:'',
        email:'',
        tel:'',
        content:''
      }
    }
  },
  methods:{
      send(){
        if(this.form.email == '' && this.form.tel == ''){
          alert("Email or tel don't empty");
        }else{
          this.$store.dispatch("api/saveContact",this.form,{root:true});
        }
      }
  }
};
</script>
