<template>
  <footer class="footer shadow-md">
    <div class="container">
      <div class="flex flex-wrap">
        <div class="lg:w-2/6 w-1/2 pt-5">
          <img class="footer__logo" src="/upload/BA_STORE.png" alt="" />
        </div>
        <div class="lg:w-2/6 w-1/2 pt-5 flex items-center">
          <span class="text-white">
            {{this.$store.state.footer.address}}
          </span>
        </div>
        <div class="lg:w-2/6 w-full  pt-5">
          <ul class="flex flex-wrap items-center h-full justify-center lg:justify-items-start">
            <li>
              <a class="block p-1 text-white  "   :href="this.$store.state.footer.facebook">
                <i class="fab fa-facebook   text-2xl"></i>
              </a>
            </li>
            <li>
              <a class="block p-1 text-white  "   :href="this.$store.state.footer.instagram">
                <i class="fab fa-instagram   text-2xl"></i>
              </a>
            </li>
            <li>
              <a class="block p-1 text-white  "   :href="this.$store.state.footer.linkedin">
                <i class="fab fa-linkedin   text-2xl"></i>
              </a>
            </li>
            <li>
              <a class="block p-1 text-white  "   :href="this.$store.state.footer.whatsapp">
                <i class="fab fa-whatsapp   text-2xl"></i>
              </a>
            </li>
            <li>
              <a class="block p-1 text-white  "   :href="this.$store.state.footer.messenger">
                <i class="fab fa-facebook-messenger   text-2xl"></i>
              </a>
            </li>
          </ul>
        </div>
        
      </div>
      <div class="flex justify-center">
        <div class="text-md text-white pb-3">
            {{this.$store.state.footer.copyright}}
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {};
</script>
<style scoped></style>
