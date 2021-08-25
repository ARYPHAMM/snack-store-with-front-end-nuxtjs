const state = {
  item:{},
  categories:[],
  fav:''
};
const getters = {
   getItems(state) {
       return state.items;
   },
};


const mutations = {
   setItem: (state, item) => {
       state.item = JSON.parse(item.value)[0];
   },
   setItemFav: (state, item) => {
       state.fav = JSON.parse(item.value).value;
   },
   setCategories: (state, item) => {
       state.categories.push(item);
   },
};
export default {
   getters,
   state,
   mutations
};
