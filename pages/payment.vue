<template>
  <div class="flex justify-center items-center">
    <div class="md:w-1/4  m-auto flex items-center justify-center h-full">
      <div class="w-full">
        <form @submit.prevent="send" autocomplete="on" class="w-full">
          <h1 class="font-bold text-xl text-pink-500">
            Payment
          </h1>
          <div class="mt-3 relative rounded-md shadow-sm">
            <div
              class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
            >
              <span class="text-gray-500 sm:text-sm">
                <i class="fas text-blue-500 fa-exclamation    "></i>
              </span>
            </div>
            <input
              type="text"
              class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 py-1 text-md border-gray-300 rounded-md outline-none"
              placeholder="Enter full name..."
              v-model="form.fullname"
            />
          </div>
          <div class="mt-3 relative rounded-md shadow-sm">
            <div
              class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
            >
              <span class="text-gray-500 sm:text-sm">
                <i
                  class="fas text-blue-500 fa-phone transform  rotate-90  "
                ></i>
              </span>
            </div>
            <input
              type="text"
              class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 py-1 text-md border-gray-300 rounded-md outline-none"
              placeholder="Enter tel..."
              v-model="form.tel"
            />
          </div>
          <div class="mt-3 relative rounded-md shadow-sm">
            <div
              class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
            >
              <span class="text-gray-500 sm:text-sm">
                <i class="fas text-blue-500 fa-envelope    "></i>
              </span>
            </div>
            <input
              type="text"
              class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 py-1 text-md border-gray-300 rounded-md outline-none"
              placeholder="Enter email..."
              v-model="form.email"
            />
          </div>
          <div class="mt-3 relative rounded-md shadow-sm">
            <div
              class="absolute top-1 left-0 pl-2 flex items-center pointer-events-none"
            >
              <span class="text-gray-500 sm:text-sm">
                <i class="fas text-blue-500 fa-map-marked    "></i>
              </span>
            </div>
            <textarea
              class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 py-1 text-md border-gray-300 rounded-md outline-none"
              placeholder="Enter address..."
              id=""
              cols="30"
              rows="3"
              v-model="form.address"
            ></textarea>
          </div>
          <div class="mt-3" id="card-element"></div>
          <p class="text-red-600" v-if="error != ''">{{ error }}</p>
          <p class="result-message hidden">
            Payment succeeded, see the result in your
            <a href="" target="_blank">Stripe dashboard.</a> Refresh the page to
            pay again.
          </p>
          <div class="w-full max-h-96 overflow-x-hidden view-cart-item">
            <div
              v-for="(item, index) in this.$store.state.cart.items"
              :key="index"
            >
              <div class="flex flex-row py-3 items-center">
                <div class="w-16">
                  <a href="" class="block">
                    <img
                      class="w-full h-full object-contain"
                      :src="url + '/' + item.thumbnail"
                      alt=""
                    />
                  </a>
                </div>
                <div class="w-32">
                  <a href="" class="block font-bold text-sm">
                    {{ item.title }}
                  </a>
                </div>
                <div class="flex ml-auto flex-col text-right">
                  <div>
                    <del
                      class="text-gray-400"
                      v-if="
                        item.price_sale != '' &&
                          item.price > item.price_sale &&
                          item.price != ''
                      "
                    >
                      {{ item.price }}$
                    </del>
                    <span class="text-red-700 font-bold">
                      {{
                        item.price_sale == "" || item.price_sale == 0
                          ? ""
                          : item.price_sale + " $"
                      }}
                    </span>
                  </div>
                  <div class="text-xs font-bold">
                    Quantity: {{ item.quantity }}
                  </div>
                </div>
              </div>
              <div class="h-px w-full bg-gray-400"></div>
            </div>
          </div>
          <div class="float-right">
            <b class="font-bold"
              >Price total:
              <span class="text-red-700"
                >{{ this.$store.state.cart.cart_total }}$</span
              ></b
            >
          </div>
          <div class="clear-both"></div>
          <button
            type="submit"
            class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-6 rounded text-md mt-3 block ml-auto"
          >
           submit
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { loadStripe } from "@stripe/stripe-js";
export default {
  computed: {
    url() {
      return process.env.ROOT_URL;
    }
  },
  data() {
    return {
      stripe: null,
      card: null,
      error: "",
      form: {
        fullname: "",
        tel: "",
        email: "",
        address: ""
      }
    };
  },
  async created() {
    if (this.$store.state.cart.items == "") this.$router.push("/");
    this.stripe = await loadStripe(process.env.STRIPE_PUBLISHABLE_KEY);
    var purchase = {
      items: [{ id: "xl-tshirt" }]
    };
    const elements = this.stripe.elements();
    const style = {
      base: {
        // Add your base input styles here. For example:
        fontSize: "16px",
        color: "#32325d"
      }
    };
    // Create an instance of the card Element.
    this.card = elements.create("card", { style });
    // Add an instance of the card Element into the `card-element` <div>.
    this.card.mount("#card-element");
  },
  methods: {
    send() {
      let app = this;
      this.stripe.createToken(this.card).then(function(result) {
        if (result.error) {
          // Inform the customer that there was an error.
          app.showError(result.error.message);
        } else {
          // Send the token to your server.
          app.stripeTokenHandler(result.token.id);
        }
      });
    },
    async stripeTokenHandler(token) {
      let data = new FormData();
      data.append("token", token);
      let cart = this.$store.state.cart.items.map(currentValue => [
        {
          id: currentValue.id,
          quantity: currentValue.quantity,
          price: currentValue.price_sale,
          title: currentValue.title
        }
      ]);
      data.append("cart", JSON.stringify(cart));
      data.append("customer", JSON.stringify(this.form));
      await this.$axios
        .post(`${process.env.ROOT_URL}/api/stripe`, data)
        .then(res => {
          this.$store.commit("cart/setAfterPayment", [], { root: true });
          this.$router.push("/");
        });
    },
    showError(errorMsgText) {
      // loading(false);
      this.error = errorMsgText;
      setTimeout(function() {
        this.error = "";
      }, 4000);
    }
  }
};
</script>
