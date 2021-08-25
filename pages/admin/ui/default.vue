<template>
  <div class="d-flex bg-white pt-3 w-100">
    <div class="col-md-9">
      <div v-for="(item, index) in configLayout[this.layout]" :key="index">
        <Admin-Ui-Position
          class="m-1 p-1 mb-2 ui__border shadow-none float-left col-12 p-0"
          :ref="index"
          v-if="item.type == 'position'"
          :name="index"
          :value="item.value"
          :title="item.title"
        />
        <Admin-Ui-Image
          class="p-1 mb-2 shadow-none col-6 p-0 float-left  "
          :ref="index"
          v-if="item.type == 'image'"
          :name="index"
          :value="item.value"
          :title="item.title"
        />
        <Admin-Ui-Text
          class="p-1 mb-2 shadow-none col-6 p-0 float-left  "
          :ref="index"
          v-if="item.type == 'text'"
          :name="index"
          :value="item.value"
          :title="item.title"
        />
        <Admin-Ui-Textarea
          class="p-1 mb-2 shadow-none col-6 p-0 float-left  "
          :ref="index"
          v-if="item.type == 'textarea'"
          :name="index"
          :value="item.value"
          :title="item.title"
        />
        <Admin-Ui-Editor
          class="p-1 mb-2 shadow-none col-12 p-0 float-left  "
          :ref="index"
          v-if="item.type == 'editor'"
          :name="index"
          :value="item.value"
          :title="item.title"
        />
      </div>
      <div class="clearfix"></div>
      <div class="col-12  text-center">
        <button @click="save" class="btn btn-success">
          Save
        </button>
      </div>
    </div>
    <div class="col-md-3">
      <Admin-Ui-Menu />
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  layout: "admin",
  computed: {
    ...mapGetters({ getItemsUi: "database/getItemsUi" })
  },
  watch: {
    getItemsUi(value, val) {
      this.getItemsUi.map(curr => {
        if (
          this.configLayout[this.layout][curr.name] != null &&
          curr.layout == this.layout &&
          curr.value != null
        ) {
          //   if(curr.type == 'position' && Array.isArray(JSON.parse(curr.value)))
          this.$set(
            this.configLayout[this.layout][curr.name],
            "value",
            JSON.parse(curr.value)
          );
          this.$set(this.configLayout[this.layout][curr.name], "id", curr.id);
          this.$set(
            this.configLayout[this.layout][curr.name],
            "name",
            curr.name
          );
        }
      });
    }
  },
  data() {
    return {
      tableUi: "ui",
      tableCategory: "categories",
      layout: "default"
    };
  },
  methods: {
    ...mapActions({
      fetchItemsUi: "database/fetchItemsUi",
      updateItem: "database/updateItem",
      createItem: "database/createItem"
    }),
    save() {
      for (var k in this.configLayout[this.layout]) {
        if (this.configLayout[this.layout][k]["id"] != null) {
          let formData = new FormData();
          formData.append("table", this.tableUi);
          formData.append("id", this.configLayout[this.layout][k]["id"]);
          formData.append("name", k);
          formData.append("type", this.configLayout[this.layout][k]["type"]);
          formData.append("layout", this.layout);
          if (this.configLayout[this.layout][k]["type"] == "position")
            formData.append("value", JSON.stringify(this.$refs[k][0].items));
          if (this.configLayout[this.layout][k]["type"] == "image") {
            let data = {
              url: this.$refs[k][0].url,
              value: this.$refs[k][0].$refs["thumbnail"].val
            };
            formData.append("value", JSON.stringify(data));
          }
          if (
            this.configLayout[this.layout][k]["type"] == "text" ||
            this.configLayout[this.layout][k]["type"] == "textarea" ||
            this.configLayout[this.layout][k]["type"] == "editor"
          ) {
            let data = {
              url: this.$refs[k][0].url,
              value: this.$refs[k][0].$refs["content"].val
            };
            formData.append("value", JSON.stringify(data));
          }
          if (this.configLayout[this.layout][k]["type"] == "images") {
            formData.append("value", JSON.stringify(this.$refs[k][0].val));
          }
          this.updateItem(formData);
          this.initPage();
        } else {
          let formData = new FormData();
          formData.append("table", this.tableUi);
          formData.append("name", k);
          formData.append("type", this.configLayout[this.layout][k]["type"]);
          formData.append("layout", this.layout);
          if (this.configLayout[this.layout][k]["type"] == "position")
            formData.append("value", JSON.stringify(this.$refs[k][0].items));
          if (this.configLayout[this.layout][k]["type"] == "image") {
            let data = {
              url: this.$refs[k][0].url,
              value: this.$refs[k][0].$refs["thumbnail"].val
            };
            formData.append("value", JSON.stringify(data));
          }
          if (
            this.configLayout[this.layout][k]["type"] == "text" ||
            this.configLayout[this.layout][k]["type"] == "textarea" ||
            this.configLayout[this.layout][k]["type"] == "editor"
          ) {
            let data = {
              url: this.$refs[k][0].url,
              value: this.$refs[k][0].$refs["content"].val
            };
            formData.append("value", JSON.stringify(data));
          }
          if (this.configLayout[this.layout][k]["type"] == "images") {
            formData.append("value", JSON.stringify(this.$refs[k][0].val));
          }
          this.createItem(formData);
          this.initPage();
        }
      }
    },
    initPage() {
      const formData = [{ table: this.tableUi }, { table: this.tableCategory }];
      this.fetchItemsUi(formData);
    }
  },
  created() {
    this.initPage();
  }
};
</script>
<style scoped>

</style>
