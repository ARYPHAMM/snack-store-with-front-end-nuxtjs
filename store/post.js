const state= {
  items: []
}
const getters = {
  getItems:(state)=>{
    return state.items
  }
}
const mutations = {
  setItems: (state,items) => {
      state.items = items;
  }
}
export default{
  state,
  getters,
  mutations
}