const url = "http://localhost:3000/order/detail/";
const headers = { Accept: "application/json" };

type OrderDetailState = {
  order: {};
  detailList: [];
};

export default {
  state: {
    order: {},
    detailList: [],
  },

  mutations: {
    setOrder(state: OrderDetailState, payload: {}) {
      state.order = payload;
    },
    setDetailList(state: OrderDetailState, payload: []) {
      state.detailList = payload;
    },
  },

  actions: {
    async setOrder(context, payload: string) {
      const info = await fetch(url + payload, { headers });
      const j = await info.json();
      context.commit("setOrder", j[0]);
      context.commit("setDetailList", j[0].orderDetail);
      console.log("j", j);
    },
  },
  getters: {
    getOrder(state: OrderDetailState) {
      return state.order;
    },
    getDetailList(state: OrderDetailState) {
      return state.detailList;
    },
  },
};