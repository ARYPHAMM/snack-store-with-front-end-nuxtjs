import qs from "qs";
const actions = {
  async initIndex({ commit }) {
    let data = {
      url: "get-items-ui",
      data: {
        table: "ui",
        name: "slider"
      },
      mutation: "slider/setItems"
    };
    this.dispatch("api/fetchItemsUi", data, { root: true }).then(res => {
      commit(data.mutation, res.data, { root: true });
      data.mutation = "website/setItem";
      data.data.name = "website";
      this.dispatch("api/fetchItemsUi", data, { root: true }).then(res => {
        commit(data.mutation, res.data, { root: true });
        data.mutation = "website/setItemFav";
        data.data.name = "fav_icon";
        this.dispatch("api/fetchItemsUi", data, { root: true }).then(res => {
          commit(data.mutation, res.data, { root: true });
          data.url_pro = "get-items-pro";
          (data.data_pro = {
            table: "products"
          }),
            (data.mutation = "website/setCategories");
          data.data.name = "popular";
          this.dispatch("api/fetchItemsWidthCatId", data, { root: true });
        });
      });
    });
  },
  async fetchItemsUi({ commit }, data) {
    const response = await this.$axios.get(
      `${process.env.ROOT_URL}/api/${data.url}?${qs.stringify(data.data)}`
    );
    return response;
  },
  async fetchItemsWidthCatId({ commit }, data) {
    const responseCat = await this.$axios
      .get(`${process.env.ROOT_URL}/api/${data.url}?${qs.stringify(data.data)}`)
      .then(res => JSON.parse(res.data.value));
    setTimeout(() => {
      responseCat.map(currentValue => {
        const responsePro = this.$axios
          .get(
            `${process.env.ROOT_URL}/api/${data.url_pro}?${qs.stringify(
              data.data_pro
            )}` + `&${qs.stringify({ cat_id: currentValue.id })}`
          )
          .then(res => {
            currentValue.products = res.data;
            commit(data.mutation, currentValue, { root: true });
          });
      });
    }, 50);
  },
  async initFooter({ commit }) {
    let data = {
      url: "get-items-ui",
      data: {
        table: "ui",
        name: "address_footer"
      },
      mutation: "footer/setAddress"
    };
    this.dispatch("api/fetchItemsUi", data, { root: true }).then(res => {
      commit(data.mutation, res.data, { root: true });
      this.dispatch("api/fetchItemsUi", data, { root: true }).then(res => {
        commit(data.mutation, res.data, { root: true });
        data.mutation = "footer/setFacebook";
        data.data.name = "facebook";
        this.dispatch("api/fetchItemsUi", data, { root: true }).then(res => {
          commit(data.mutation, res.data, { root: true });
          data.mutation = "footer/setMessenger";
          data.data.name = "messenger";
          this.dispatch("api/fetchItemsUi", data, { root: true }).then(res => {
            commit(data.mutation, res.data, { root: true });
            data.mutation = "footer/setInstagram";
            data.data.name = "instagram";
            this.dispatch("api/fetchItemsUi", data, { root: true }).then(
              res => {
                commit(data.mutation, res.data, { root: true });
                data.mutation = "footer/setWhatsapp";
                data.data.name = "whatsapp";
                this.dispatch("api/fetchItemsUi", data, { root: true }).then(
                  res => {
                    commit(data.mutation, res.data, { root: true });
                    data.mutation = "footer/setLinkedin";
                    data.data.name = "linkedin";
                    this.dispatch("api/fetchItemsUi", data, {
                      root: true
                    }).then(res => {
                      commit(data.mutation, res.data, { root: true });
                      data.mutation = "footer/setCopyright";
                      data.data.name = "copyright";
                      this.dispatch("api/fetchItemsUi", data, {
                        root: true
                      }).then(res => {
                        commit(data.mutation, res.data, { root: true });
                      });
                      
                    });
                  }
                );
              }
            );
          });
        });
      });
    });
  },
  async initHeader({ commit }) {
    let data = {
      url: "get-items-ui",
      data: {
        table: "ui",
        name: "sort"
      },
      mutation: "header/setItems"
    };
    this.dispatch("api/fetchItemsUi", data, { root: true }).then(res => {
      commit(data.mutation, res.data, { root: true });
      data.mutation = "header/setLogo";
      data.data.name = "logo";
      this.dispatch("api/fetchItemsUi", data, { root: true }).then(res => {
        commit(data.mutation, res.data, { root: true });
      });
    });
  },
  async fetchItems({ commit }, data) {
    // for category type of product
    const response = await this.$axios
      .get(`${process.env.ROOT_URL}/api/${data.url}?${qs.stringify(data.data)}`)
      .then(res => res);
    commit(data.mutation, response.data, { root: true });
  },
  async saveContact({},data){
    const response = await this.$axios
     .post(`${process.env.ROOT_URL}/api/save-contact`,data);
  }

};
export default {
  actions
};
