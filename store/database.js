import qs from "qs";
const state = {
   items:[],
   items_ui:[],
   item:{}
};
const getters = {
    getItems(state) {
        return state.items;
    },
    getItemsUi(state) {
        return state.items_ui;
    },

    getItem(state) {
        return state.item;
    },
};
const actions = {

    async createItem({ state }, data) {
        const response = await this.$axios
            .post(`${process.env.ROOT_URL}/api/create-item`, data)
            .then(res => res);
        return response.data;
    },
    async fetchItem({ commit, state }, data) {
        commit("setItems", []);
        const response = await this.$axios
            .get(`${process.env.ROOT_URL}/api/get-item?${qs.stringify(data)}`)
            .then(res => res);
        commit("setItem", response.data);
    },
    async updateItem({ state }, data) {
        const response = await this.$axios
            .post(`${process.env.ROOT_URL}/api/update-item`, data)
            .then(res => res);
        return response.data;
    },
    async updateItemStatus({ state }, data) {
        const response = await this.$axios
            .post(`${process.env.ROOT_URL}/api/update-item-status`, data)
            .then(res => res);
        return response.data;
    },
    async fetchItems({ commit, state }, data) {
        commit("setItems", []);
        const response = await this.$axios
            .get(`${process.env.ROOT_URL}/api/get-items?${qs.stringify(data)}`)
            .then(res => res);
        commit("setItems", response.data);
    },
    async fetchItemsUi({ commit, state }, data) {
        commit("setItemsUi", []);
        try {
            const ui = await this.$axios
            .get(`${process.env.ROOT_URL}/api/get-items?${qs.stringify(data[0])}`)
            .then(res => res);
            const categories =  await this.$axios.get(`${process.env.ROOT_URL}/api/get-items?${qs.stringify(data[1])}`).then(res => res);
            let dataLast = [];
            ui.data.map((currentValue) => {
                if(currentValue.type == 'position'){
                    let customData = JSON.parse(currentValue.value);
                    customData.map((currentValueData) => {
                        categories.data.map(category =>{
                            if(category.id == currentValueData.id){
                              currentValueData.title = category.title
                            }
                           
                        })
                        if(currentValueData['child'] != null){
                            currentValueData['child'].map(currentValueDataChild =>{
                                categories.data.map(category =>{
                                    if(category.id == currentValueDataChild.id){
                                      currentValueDataChild.title = category.title
                                    }                                  
                                });
                                if(currentValueDataChild['child'] != null){
                                currentValueDataChild['child'].map(currentValueDataChildChild =>{
                                    categories.data.map(category =>{
                                        if(category.id == currentValueDataChildChild.id){
                                          currentValueDataChildChild.title = category.title
                                        }                                  
                                    });
                                });
                              }

                            });
                         
                        }
                    });
                    currentValue.value = JSON.stringify(customData);
                }
            });
            commit("setItemsUi", ui.data);
        } catch (error) {
            
        }
       

            
        // commit("setItems", response.data);
    },
    async deleteItem({ state }, data) {
        const response = await this.$axios
        .get(`${process.env.ROOT_URL}/api/delete-item?${qs.stringify(data)}`)
        .then(res => res);
        return response.data;
    },
    async duplicateItem({ state }, data) {
        const response = await this.$axios
        .get(`${process.env.ROOT_URL}/api/duplicate-item?${qs.stringify(data)}`);
        return response.data;
    },
    async getItemsByKeyword({commit ,state},data) {
        const search = data.title.trim().toLowerCase();
        if (!search.length) 
        this.dispatch('database/fetchItems',{table: data.table});
        commit("setItems", state.items.filter(item => item.title.toLowerCase().indexOf(search) > -1));
    },
    // async updateUser({ state }, data) {
    //     const response = await this.$axios
    //         .post(`${process.env.ROOT_URL}/api/updateuser`, data)
    //         .then(res => res);
    //     return response.data;
    // },
  

    async fetchItemsCondition({ commit }, data) {
        commit("setToken", window.localStorage.getItem("auth_token_default"));
        const response = await this.$axios
            .post(`${process.env.ROOT_URL}/api/getitemscondition`, data
            )
            .then(res => res);
        commit("setItems", response.data);
       },
 
    async getUrl(data) {
        const response = await this.$axios
            .post(`${process.env.ROOT_URL}/api/geturl`, data)
            .then(res => res);
        return response.data;
    }
    
};
const mutations = {
    setItems: (state, items) => {
        state.items = items;
    },
    removeItem: (state, id) => {
        state.items = state.items.filter((e)=>e.id !== id );
    },
    setItemsUi: (state, items) => {
        state.items_ui = items;
    },
    setItem: (state, item) => {
        state.item = item;
    },
};
export default {
    actions,
    getters,
    state,
    mutations
};
