const url = "http://localhost:3000/goodsqa/";
const headers = { Accept: "application/json" };

export default {
  state: {
    goodsQA: [],
    totalCount: Number,
  },
  mutations: {
    //syncrous
    setGoodsQA(state, payload) {
      //state.goodsQA.push(...payload);
      //state.goodsQA = payload;
      state.goodsQA = payload[0].qaList;
      console.log("array push ", payload);
    },
  },
  actions: {
    //asyncronous
    async setGoodsQA(context, payload) {
      const goodsQA = await fetch(url + payload, { headers });
      const j = await goodsQA.json();
      context.commit("setGoodsQA", j);
      console.log("in setGoodsQA method", j);
    },
  },
  getters: {
    getGoodsQA: (state) => {
      // console.log("in getGoodsQA method", state.goodsQA);
      // console.log(state.goodsQA);
      return state.goodsQA;
    },
  },
};