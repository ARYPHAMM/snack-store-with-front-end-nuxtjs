<template>
  <div>
    <div class="form-group">
      <label for=""></label>
      <input
        type="text"
        class="form-control rounded-0 shadow-none"
        aria-describedby="helpId"
        placeholder="Enter category name..."
        v-model="title"
        @input="search"
      />
      <small id="helpId" class="form-text text-muted">Search category</small>
    </div>
    <div>
      <div class="sortable-container2">
        <div
          v-for="item in Items"
          :key="item.id"
          class=" ui-state-highlight ui-state-disabled  m-1"
          :data-object="JSON.stringify(item)"
        >
          <div class="font-weight-bold">
            {{ item.title }}
          </div>
          <div class="text-muted">
           type:  {{ item.type }}
           </div>

        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({ getItems: "database/getItems"}),
    Items() {
      return this.getItems.slice(0,10);
    }
  },
  data() {
    return {
      table: "categories",
      title:''
    };
  },
  methods: {
    ...mapActions({ fetchItems: "database/fetchItems",getItemsByKeyword: "database/getItemsByKeyword"  }),
    search(){
       let data = {
         title: this.title,
         table: this.table
       }
       this.getItemsByKeyword(data);
  
        
    }
  
  },

  created() {
    const formData = {
      table: this.table
    };
    this.fetchItems(formData);
  },
  mounted() {
         $(function() {
      $(".sortable-container2").sortable({
        revert: true,
        connectWith: ".sortable-container",
  
      });
    });
  },
  updated() {
    // let app = this;
  
   
    
      // $("div").disableSelection();

  }
};
</script>
<style></style>
