<template>
  <div 

         class="sortable-container position-relative"
         :data-id="name"
         :data-level="1"
         >
         <div
            v-for="(item, key_1) in items[name]"
            :key="key_1"
            class="category-item ui-state-highlight  m-1 position-static"
            :data-id="name"
            :data-current="key_1"
            :data-level="1"
            >
            <div class="font-weight-bold">
               {{ item['title'] }}
            </div>
            <div class="d-flex">
               <a href=""><i class="fas fa-cog    "></i></a>
               <button @click="addLevel(name, key_1, 1)">
               <i class="fas fa-plus    "></i>
               </button>
                 <button @click="remove(name, item)">
                     <i class="fas fa-trash    "></i>
                     </button>
            </div>
            <div
               class="sortable-child opacity-0 sortable-container"
               :data-id="name"
               :data-index1="key_1"
               :data-index="key_1"
               :data-level="2"
               >
               <button @click="close(name, key_1, 2)">
               <i class="fas fa-times    "></i>
               </button>
               <div
                  v-for="(item, key_2) in item['child']"
                  :key="key_2"
                  class="category-item ui-state-highlight  m-1 position-static"
                  :data-id="name"
                  :data-current="key_2"
                  :data-level="2"
                  >
                  <div class="font-weight-bold">
                     {{ item.title }}
                  </div>
                  <div class="d-flex">
                     <a href=""><i class="fas fa-cog    "></i></a>
                     <button @click="addLevel(name, key_2, 2)">
                     <i class="fas fa-plus    "></i>
                     </button>
                     <button @click="remove(name, item)">
                     <i class="fas fa-trash    "></i>
                     </button>
                  </div>
                  <div
                     class="sortable-child opacity-0 sortable-container"
                     :data-id="name"
                     :data-index1="key_1"
                     :data-index2="key_2"
                     :data-index="key_2"
                     :data-level="3"
                     >
                     <button @click="close(name, key_2, 3)">
                     <i class="fas fa-times    "></i>
                     </button>
                     <div
                        v-for="(item, key_3) in item['child']"
                        :key="key_3"
                        class="category-item ui-state-highlight  m-1 position-static"
                        :data-id="name"
                        :data-current="key_3"
                        :data-level="3"
                        >
                        <div class="font-weight-bold">
                           {{ item.title }}
                        </div>
                        <div class="d-flex">
                           <a href=""><i class="fas fa-cog    "></i></a>
                           <button @click="addLevel(name, key_3, 3)">
                           <i class="fas fa-plus    "></i>
                           </button>
                                  <button @click="remove(name, item)">
                     <i class="fas fa-trash    "></i>
                     </button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
</template>

<script>
export default {
props:['name','value'],
data() {
    return {
      items: {
        
      },
      table: "categories"
    };
  },
  watch: {
    value(value, val) {
        this.items = (value == '' || value == null ? [] : value);
    }
  },
  methods: {
    addLevel(id, index, level) {
      $(".category-item[data-level=" + level +"][data-id=" + id + "]").not("[data-current=" + index + "]").addClass("d-none");
      $(".category-item[data-level=" + level +"][data-id=" +id +"][data-current=" +index + "] > .sortable-child").removeClass("opacity-0").css('z-index',level);
      this.initSortable(".category-item[data-level=" + level +"][data-id=" +id +"][data-current=" +index + "] > .sortable-child");   
    },
    close(id, index, level) {
      $(".sortable-child[data-level="+level+"][data-id="+id+"][data-index=" +index + "]").addClass("opacity-0").removeAttr('style').disableSelection();
      $(".category-item[data-level=" + (level-1) + "][data-id=" + id + "]").removeClass("d-none");
      this.initSortable(".sortable-container[data-level=" + (level-1) + "][data-id=" + id + "]");  
    },
    remove(id,obj){
     
       this.items[id].filter((currentValue1,index1) => {
               if(currentValue1['id'] == obj.id)
                    this.$delete(this.items[id], index1);
               if(currentValue1['child']!=null)
                  currentValue1['child'].filter((currentValue2,index2) => {
                       if(currentValue2['id'] == obj.id)
                               this.$delete(this.items[id][index1]['child'], index2);
                        if(currentValue2['child']!=null)
                           currentValue2['child'].filter((currentValue3,index3) => {
                              if(currentValue3['id'] == obj.id)
                                   this.$delete(this.items[id][index1]['child'][index2]['child'], index3);
                              if(currentValue3['child']!=null)
                                    currentValue3['child'].filter((currentValue4,index4) => {
                                       if(currentValue4['id'] == obj.id)
                                                 this.$delete(this.items[id][index1]['child'][index2]['child'][index3]['child'], index4);
                                    });
                                 
                           });
                        
                  });
               
          
          });
    },
    exitsObj(arr,obj){
        let objArr =  arr.filter((currentValue1) => {
               if(currentValue1['id'] == obj.id){
                      return currentValue1;
               }
               if(currentValue1['child']!=null){
                  currentValue1['child'].filter((currentValue2) => {
                       if(currentValue2['id'] == obj.id){
                                return currentValue2;
                        }
                        if(currentValue2['child']!=null){
                           currentValue2['child'].filter((currentValue3) => {
                              if(currentValue3['id'] == obj.id){
                                       return currentValue3;
                               }
                              if(currentValue3['child']!=null){
                                    currentValue3['child'].filter((currentValue4) => {
                                       if(currentValue4['id'] == obj.id){
                                                return currentValue4;
                                       }
                                    });
                                 }
                           });
                        }
                  });
               }
          
          });
          return objArr
    },
    rand(){
     return (Math.random() + 1).toString(36).substring(7);
    },
    initSortable(cls){
      let app = this;
    $(function() {
      $(".sortable-container2").sortable({
        revert: true,
        connectWith: cls,
      });
      $(cls).sortable({
        revert: true,
        receive: function(ev, ui) {
          if (ui.item.hasClass("ui-state-disabled")) {
             ui.sender.sortable("cancel");
             let id = $(this).data("id");
             let obj = $(ui.item[0]).data("object");
             let index1 = $(this).data("index1");
             let index2 = $(this).data("index2");
            if ($(this).data("level") == 1){
               if(app.items[id]== null)
                 app.$set(app.items, id, []);
                 let exits_obj = app.exitsObj(app.items[id],obj);
               if(exits_obj.length == 0)
                  app.$set(app.items[id],app.items[id].length,obj);

            }
            if ($(this).data("level") == 2){
                 if(app.items[id][index1]['child'] == null)                    
                    app.$set(app.items[id][index1],'child',[]);
                   let exits_obj = app.exitsObj(app.items[id],obj);
               if(exits_obj.length == 0)
                    app.$set(app.items[id][index1]['child'],app.items[id][index1]['child'].length,obj);
            }
            if ($(this).data("level") == 3){
                if(app.items[id][index1]['child'][index2]['child'] == null)                    
                    app.$set(app.items[id][index1]['child'][index2],'child',[]);
                let exits_obj = app.exitsObj(app.items[id],obj);
               if(exits_obj.length == 0)
                    app.$set(app.items[id][index1]['child'][index2]['child'],app.items[id][index1]['child'][index2]['child'].length,obj);
            }
          }
        }
      });
    });
    }
  },
  mounted() {
     this.initSortable('.sortable-container');
  }
}
</script>

<style>

</style>