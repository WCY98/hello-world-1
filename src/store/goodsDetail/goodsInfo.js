const url = "http://localhost:3000/goods/info/";
const headers = { Accept: "application/json" };

export default {
  state: {
    info: [],
    // showed:false,
  },
  mutations: {
    //synchronous 同期
    setInfo(state, payload) {
      state.info = payload[0];
      console.log("array push ", payload);
    },

    // changeShowed(state, changeShowed) {
    //   state.showed = changeShowed;
    // },
  },

  actions: {
    //asyncronous 非同期
    async setInfo(context, payload) {
      const info = await fetch(url + payload, { headers });
      const j = await info.json();
      context.commit("setInfo", j);
      console.log("in setInfo method", j)
    },
  },
  getters: {
    getInfo: (state) => {
      return state.info;
    },

    // getShowed: (state) => {
    //   return state.showed;
    // },
  },
};