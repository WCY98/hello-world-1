const url = "http://localhost:3000/newGoodses";
const headers = { Accept: "application/json" };

type hotGoodsState = {
  newGoodses:[]
}

export default {
  state: {
    newGoodses: [],
    // day: { years: [], year: new Date().getFullYear(), month: 0, day: 1 },
  },
  mutations: {
    //syncrous
    setNewGoods(state:hotGoodsState, payload:[]) {
      state.newGoodses.push(...payload);
      console.log("array push ", payload);
    },

    //hot goods
  },
  actions: {
    //asyncronous
    async setNewGoodses({commit}:{commit: Function}) {
      const goodses = await fetch(url, { headers });
      const j = await goodses.json();
      commit("setNewGoods", j);
      console.log("in setNewGoodses method", j);
    },

    //hot goods fetch method
  },
  modules: {},
  getters: {
    getNewGoodses: (state:hotGoodsState) => {
      console.log("in getNewGoodses method", state.newGoodses);
      console.log(state.newGoodses);
      return state.newGoodses;
    },

    // hot goods getter
  },
};