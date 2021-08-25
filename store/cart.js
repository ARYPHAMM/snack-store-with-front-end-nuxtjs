import qs from "qs";
export const state = {
  items: [],
  show: false,
  cart_total: 0
};
export const getters = {
  getCart() {
    return sessionStorage.getItem("cart");
  }
};
export const actions = {
  async addToCart({ commit, dispatch }, data) {
    let temp = [];
    if (sessionStorage.getItem("cart") === null) temp.push(data);
    else {
      let cart = JSON.parse(sessionStorage.getItem("cart"));
      let flag = false;
      cart.map(item => {
        if (item.id == data.id) {
          item.quantity += data.quantity;
          flag = !flag;
          return;
        }
      });
      if (!flag) cart.push(data);
      temp = cart;
    }
    sessionStorage.setItem("cart", JSON.stringify(temp));
    dispatch("fetchCart", null);
  },
  async fetchCart({ commit }) {
    let cart = JSON.parse(sessionStorage.getItem("cart"));
    let ids = [];
    cart.map(e => ids.push(e.id));
    let data = {
      ids: ids
    };
    let total = 0;
    const response = await this.$axios.get(
      `${process.env.ROOT_URL}/api/get-ids-product?${qs.stringify(data)}`
    );
    response.data.map(currentValue => {
      cart.map(e => {
        if (currentValue.id == e.id) {
          currentValue.quantity = e.quantity;
          total += currentValue.price_sale;
        }
      });
    });
    commit("setCart", response.data);
    commit("setCartTotal", total);
  }
};
export const mutations = {
  setAfterPayment: (state, items) => {
    sessionStorage.removeItem("cart")
    state.cart_total  = 0;
    state.items = items;
  },
  setCart: (state, items) => {
    state.items = items;
  },
  setCartTotal: (state, total) => {
    state.cart_total = total;
  },
  showCart: (state, flag) => {
    state.show = flag;
  },
  cartPlus: (state, id) => {
    let total = 0;
    state.items.map(currentValue => {
      if (currentValue.id == id) {
        currentValue.quantity += 1;
      }
      total+= currentValue.quantity*currentValue.price_sale;
    });
    state.cart_total  = total;
  },
  cartMinus: (state, id) => {
    let total = 0;
    state.items.map(currentValue => {
      if (currentValue.id == id && currentValue.quantity > 1) {
        currentValue.quantity -= 1;
      }
      total+= currentValue.quantity*currentValue.price_sale;
    });
    state.cart_total  = total;
  },
  cartRemove: (state, id) => {
    let total = 0;
    let cart = JSON.parse(sessionStorage.getItem("cart"));
    cart = cart.filter(e => e.id !== id);
    sessionStorage.setItem("cart", JSON.stringify(cart));
    state.items = state.items.filter(currentValue =>currentValue.id !== id);
    state.items.map(currentValue => {
      total+= currentValue.quantity*currentValue.price_sale;
    });
    state.cart_total = total;
  }
};
