const url = "http://localhost:3000/goods/info/";
const headers = { Accept: "application/json" };

export default {
  state: {
    info: {sizeList:[]},
    colorList:[],
    // count =1
    // sizeList: info [ sizeList:[]],
    // info:{ }
    // showed:false,
  },
  mutations: {
    //synchronous 同期
    setInfo(state, payload) {
      state.info = payload[0];
      console.log("array push ", payload);
    },

    setColorList(state, payload){
      state.colorList.push(...payload[0].color);
    }

    // changeShowed(state, changeShowed) {
    //   state.showed = changeShowed;
    // },
  // let count = color
  //  filterColorList(state, color) {
  //     if ( state.count.color >= 1) {

  //     }
  //   }
  },

  actions: {
    //asyncronous 非同期
    async setInfo(context, payload) {
      const info = await fetch(url + payload, { headers });
      const j = await info.json();
      context.commit("setInfo", j);
      console.log("in setInfo method", j)
    },

    async setColorList(context, payload) {
      const colorList = await fetch(url + payload, {headers});
      const j = await colorList.json();
      context.commit("setColorList", j);
      console.log("in setColorList method", j)
    }
  },
  getters: {
    getInfo: (state) => {
      return state.info;
    },

    getColorList: (state) => {
      return state.colorList;
    },

    // getShowed: (state) => {
    //   return state.showed;
    // },
  },
};