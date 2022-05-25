const url = "http://localhost:3000/swiper";
const headers = { Accept: "application/json" };

export default {
  state: {
   images:[]
  },
  mutations: {
    //syncrous
    setImages(state, payload) {
      state.images.push(...payload);
      console.log("array push ", payload);
    },

  },
  actions: {
    //asyncronous
    async setImages(context) {
      const goodses = await fetch(url, { headers });
      const j = await goodses.json();
      context.commit("setImages", j);
      console.log("in setImages method", j);
    },

  },
  modules: {},
  getters: {
    getImages: (state) => {
      console.log("in getImages method", state.images);
      console.log(state.images);
      return state.images;
    },

  },
};