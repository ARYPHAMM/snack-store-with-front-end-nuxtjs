<template>
  <div>
    <select
      v-model="category_id_1"
      class="custom-select rounded-0 shadow-none mb-1"
      @change="categoryIdChange(1)"
      
    >
      <option :value="''" >Chose category level 1</option>
      <option v-for="(v, index) in ItemsLv1" :key="index" :value="v.id">
        {{ v.title }}
      </option>
    </select>
    <select
      v-model="category_id_2"
      class="custom-select rounded-0 shadow-none mb-1"
         v-show="category_id_1 != ''"
         @change="categoryIdChange(2)"
      
    >
      <option :value="''" >Chose category level 2</option>
      <option
        v-for="(v, index) in ItemsLv2"
        v-show="v.category_level_1 == category_id_1"
        :key="index"
        :value="v.id"
      >
        {{ v.title }}
      </option>
    </select>
    <select
      v-model="category_id_3"
      class="custom-select rounded-0 shadow-none mb-1"
      
      v-show="category_id_2 != ''"
    >
      <option :value="''" >Chose category level 2</option>
      <option
        v-for="(v, index) in ItemsLv3"
        v-show="v.category_level_2 == category_id_2"
        :key="index"
        :value="v.id"
      >
        {{ v.title }}
      </option>
    </select>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  props: ['value1','value2','value3'],
  computed: {
    ...mapGetters({ getItems: "database/getItems" }),
    ItemsLv1() {
      let data = [];
      this.getItems.map(item => {
        if (item.name == "sort") {
          data = JSON.parse(item.value);
        }
      });
      return data;
    },
    ItemsLv2() {
      let data = [];
      this.ItemsLv1.map(item => {
        if (item["child"] != null) {
          item["child"].map(currentValue => {
            let category = currentValue;
            Object.assign(category, { category_level_1: item["id"] });
            data.push(category);
          });
        }
      });
      return data;
    },
    ItemsLv3() {
      let data = [];
      this.ItemsLv2.map(item => {
        if (item["child"] != null) {
          item["child"].map(currentValue => {
            let category = currentValue;
            Object.assign(category, { category_level_2: item["id"] });
            data.push(category);
          });
        }
      });
      return data;
    }
  },
  methods: {
    ...mapActions({ fetchItems: "database/fetchItems" }),
     categoryIdChange(level){
       switch (level) {
         case 1:
           this.category_id_2 = '';
           break;
         case 2:
           this.category_id_3 = '';
           break;
         default:
           break;
       }
     }
  },
  data() {
    return {
      category_id_1: '',
      category_id_2: '',
      category_id_3: '',
      table: "ui",
      layout: "default"
    };
  },
  watch:{
    value1(val,value){
      this.category_id_1 = val;
    },
    value2(val,value){
      this.category_id_2 = val;
    },
    value3(val,value){
      this.category_id_3 = val;
    }
  },
  created() {
    const formData = {
      table: this.table
    };
    this.fetchItems(formData);
      this.category_id_1 = this.value1;
      this.category_id_2 = this.value2;
     this.category_id_3 = this.value2;
  }
};
</script>
<style></style>
