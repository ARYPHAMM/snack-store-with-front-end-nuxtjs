<template>
        <textarea v-model="val" placeholder="..."></textarea>
</template>

<script>
export default {
    
    props:['value'],
    data(){
        return{
            val:''
        }
    },
   watch: {
    value(value, val) {
        this.val = (value == '' || value == null ? '' : value);
      }
    },
 
};
</script>

<style></style>
