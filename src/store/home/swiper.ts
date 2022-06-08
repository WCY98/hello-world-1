const url = "http://localhost:3000/swiper";
const headers = { Accept: "application/json" };

interface swiperState{
  images:[]
}

export default {
  state: {
   images:[]
  },
  mutations: {
    //syncrous
    setImages(state:swiperState, payload:[]) {
      state.images.push(...payload);
      console.log("array push ", payload);
    },

  },
  actions: {
    //asyncronous
    async setImages({commit}:{commit:Function}) {
      const goodses = await fetch(url, { headers });
      const j = await goodses.json();
      commit("setImages", j);
      console.log("in setImages method", j);
    },

  },
  modules: {},
  getters: {
    getImages: (state:swiperState) => {
      console.log("in getImages method", state.images);
      console.log(state.images);
      return state.images;
    },

  },
};