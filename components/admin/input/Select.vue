<template>
  <select
    v-model="val"
    class="custom-select rounded-0 shadow-none"
    required
  >
    <option :value="''" disabled>Chose category</option>
    <option
      v-for="(v, index) in value"
      :key="index"
      :value="v.id"
    >
      {{ v.title }}
    </option>
  </select>
</template>

<script>
export default {
  props:['value','selected'],
  data(){
    return{
      val:'',
    }
  },
  watch:{
    selected(val,value){
      this.val = val;
    }
  },
  created(){
    this.val = this.selected;
  },

};
</script>

<style></style>
