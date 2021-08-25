const state = {
  items:[],
  logo:'',
};
const mutations = {
   setItems: (state, items) => {
       state.items = JSON.parse(items.value);
   },
   setLogo: (state, items) => {
      state.logo = JSON.parse(items.value).value;
   },

   
};
export default {
   state,
   mutations
};
