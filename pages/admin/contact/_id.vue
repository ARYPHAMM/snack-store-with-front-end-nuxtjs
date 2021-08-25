<template>
  <div class=" w-100 d-flex justify-content-center bg-white">
    <div>
      <div class="container max-w-7xl flex ">
        <table>
          <tr>
            <th class="w-28 text-right">Full name:</th>
            <td>{{item.fullname}}</td>
          </tr>
          <tr>
            <th class="w-28 text-right">Tel:</th>
            <td>{{item.tel}}</td>
          </tr>
          <tr>
            <th class="w-28 text-right">Email:</th>
            <td>{{item.email}}</td>
          </tr>
          <tr>
            <th class="w-28 text-right">Content:</th>
            <td>{{item.content}}</td>
          </tr>
        </table>
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
    }
  },
  data() {
    return {
      table: "contacts",
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
