const url = "http://localhost:3000/goodsqa/";
const headers = { Accept: "application/json" };

export default {
  state: {
    goodsQA: {qaList: []},
    totalCount: Number,
    pageNo: 1,
    totalPage: Number,
    showLeft: false,
  },

  mutations: {
    //syncrous
    setGoodsQA(state, payload) {
      state.goodsQA = payload[0];
      console.log("array push ", payload);
    },

    setTotalCount(state, payload) {
      state.totalCount = payload[0].totalCount;
    },
    nextPage(state) {
      state.pageNo++;
    },
    previousPage(state) {
      state.pageNo--;
    },
    changeShowLeft(state, changeShowLeft) {
      state.showLeft = changeShowLeft;
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