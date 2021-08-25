<template>
  <div class=" w-100 d-flex justify-content-center bg-white">
    <div>
      <div class="container max-w-7xl flex  flex-col">
        <table>
          <tr>
            <th class="w-28 text-right">charge_id:</th>
            <td>{{ item.charge_id }}</td>
          </tr>
          <tr>
            <th class="w-28 text-right">Full name:</th>
            <td>{{ item.fullname }}</td>
          </tr>
          <tr>
            <th class="w-28 text-right">Tel:</th>
            <td>{{ item.tel }}</td>
          </tr>
          <tr>
            <th class="w-28 text-right">Email:</th>
            <td>{{ item.email }}</td>
          </tr>
          <tr>
            <th class="w-28 text-right">Address:</th>
            <td>{{ item.address }}</td>
          </tr>
          <tr>
            <th class="w-28 text-right">Total price:</th>
            <td>{{ item.total_price }}$</td>
          </tr>
        </table>
        <div v-for="(item, index) in item.order_detail" :key="index">
          <div class="flex flex-row py-3 items-center">
            <div class="w-16">
              <a :href="item.url" target="_bank" class="block">
                <img
                  class="w-full h-full object-contain"
                  :src="url + '/' + item.thumbnail"
                  alt=""
                />
              </a>
            </div>
            <div class="w-32">
              <a :href="item.url" target="_bank" class="block font-bold text-sm">
                {{ item.title }}
              </a>
            </div>
            <div>
              <div>
                <span class="text-red-700 font-bold">
                  {{ item.price == "" || item.price == 0 ? "" : item.price + " $" }}
                </span>
              </div>
              <div class="text-xs font-bold">Quantity: {{ item.quantity }}</div>
            </div>
          </div>
          <div class="h-px w-full bg-gray-400"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Ckfinder from "../../../components/admin/input/Ckfinder.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  components: { Ckfinder },
  layout: "admin",
  computed: {
    ...mapGetters({ getItem: "database/getItem" }),
    Id() {
      return this.$route.params.id;
    },
    url() {
      return process.env.ROOT_URL;
    },
    url_base() {
      return process.env.ROOT_BASE;
    }
  },
  data() {
    return {
      table: "orders",
      item: {}
    };
  },
  watch: {
    getItem(val) {
      this.item = val;
    }
  },
  mounted() {
    const formData = {
      table: this.table,
      id: this.Id
    };
    this.fetchItem(formData);
  },
  methods: {
    ...mapActions({
      fetchItem: "database/fetchItem"
    })
  }
};
</script>
<style></style>
