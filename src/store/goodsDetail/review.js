const url = "http://localhost:3000/review/";
const headers = { Accept: "application/json" };

export default {
  state: {
    review: [],
  },
  mutations: {
    //syncrous
    setReview(state, payload) {
      state.review.push(...payload);
      console.log("array push ", payload);
    },
  },
  actions: {
    //asyncronous
    async setReview(state, payload) {
      console.log(payload);
      const review = await fetch(url + payload, { headers });
      const j = await review.json();
      state.commit("setReview", j);
      console.log("in setReview method", j);
    },
  },
  getters: {
    getReview: (state) => {
      console.log("in getReview method", state.review);
      console.log(state.review);
      return state.review;
    },
  },
};