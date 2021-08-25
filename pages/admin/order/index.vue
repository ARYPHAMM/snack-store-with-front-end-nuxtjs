<template>
  <div class="col-12">
    <h5 class="mt-3">All order</h5>
    <table class="table table-bordered mt-3 bg-white">
      <thead>
        <Admin-Table-Th :data="tr" />
      </thead>
      <tbody>
        <Admin-Table-Tr
          @onRemove="remove"
          @onUpdate="update"
          @onDuplicate="duplicateItem"
          v-for="tr in this.Items"
          :data="tr"
          :key="tr.data"
        />
      </tbody>
    </table>
    <div
      v-if="limit < getItems.length"
      class="row justify-content-center mt-3 mb-3"
    >
      <PaginationAdmin
        :route="'ProductAdmin'"
        :count="Count"
        :active="this.Page"
      />
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
  layout: "admin",
  computed: {
    ...mapGetters({ getItems: "database/getItems" }),
    Page() {
      // page current
      return this.$route.query.page == null ? 1 : this.$route.query.page;
    },
    Count() {
      // count page
      let count =
        this.getItems.length < this.limit &&
        this.getItems.length % this.limit >= 1 &&
          this.getItems.length % this.limit < 5
          ? this.getItems.length / this.limit + 1
          : this.getItems.length / this.limit;
      return Math.round(count);
    },
    Items() {
      // all item
      return this.getItems
        .map(node => [

          { data: node.email },
          { data: node.tel },
          {
            handle: true,
            view: true,
            data: node.id,
            router: "admin-order-id"
          },
          {
            handle: true,
            remove: true,
            data: node.id,
            router: "admin-order-id"
          },
        ])
        .slice((this.Page - 1) * this.limit, this.limit * this.Page);
    }
  },
  methods: {
    // ...mapActions(["fetchItems", "updateItem", "deleteItem"]),
    ...mapActions({
      fetchItems: "database/fetchItems",
      updateItem: "database/updateItem",
      deleteItem: "database/deleteItem",
      duplicateItemDB: "database/duplicateItem"
    }),
    ...mapMutations({ removeItem: "database/removeItem" }),
    update(id, value, column) {
      const formData = new FormData();
      formData.append("id", id);
      formData.append("table", this.table);
      formData.append("setstatus", true);
      formData.append(column, value == 1 ? 0 : 1);
      if (this.updateItem(formData)) {
        let data = { table: this.table };
        this.fetchItems(data);
      } else {
        Alert("Update was fail");
      }
    },
    remove(id) {
      let data = { table: this.table, id: id };
      if (this.deleteItem(data)) {
        this.removeItem(id);
      } else {
        Alert("Delete item success");
      }
    },
    duplicateItem(id) {
      this.duplicateItemDB({ table: this.table, id: id })
        .then(res => {
          this.$router.push({
            name: "admin-product-id",
            params: { id: res.id }
          });
        })
        .catch(error => {
          alert("Error");
        });
    }
  },
  data() {
    return {
      // default data
      tr: [
        { data: "Email", class: "bold" },
        { data: "Tel", class: "bold" },
        { data: "View", class: " bold d-block center" },
        { data: "Remove", class: "bold d-block center" },
      ],
      limit: 10,
      table: "orders"
    };
  },
  created() {
    const formData = {
      table: this.table
    };
    this.fetchItems(formData);
  }
};
</script>
<style></style>
