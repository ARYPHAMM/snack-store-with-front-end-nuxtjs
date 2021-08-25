const state = {
   items:[],
};
const getters = {
    getItems(state) {
        return state.items;
    },
};
const mutations = {
    setItems: (state, items) => {
        state.items = JSON.parse(items.value);
    },
};
export default {
    getters,
    state,
    mutations
};
