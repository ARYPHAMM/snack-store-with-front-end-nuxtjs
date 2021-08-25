<template>
        <input :type="type" v-model="val"  @keyup="inputChange" />
</template>

<script>
export default {
    props:['value','type'],
    data() {
        return {
            val:null
        }
    },
    watch: {
       value(value, val) {
        this.val = (value == '' || value == null ? '' : value);
      }
    },

    methods:{
        inputChange(){
            this.$emit("inputOnChange",this.val);
        }
    }
 
};
</script>

<style></style>
