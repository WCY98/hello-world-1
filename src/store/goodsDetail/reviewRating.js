const url = "http://localhost:3000/review/rating/";
const headers = { Accept: "application/json" };

export default {
  state: {
    reviewRating: [],
    rating:[]
  },
  mutations: {
    setReviewRating(state, payload) {
      state.reviewRating.push(...payload);
      state.rating.push(...payload[0].rating)
      //state.reviewRating = payload
      // state.reviewRating = payload[0];
      console.log("array push ", payload[0].payload);
    },
  },
  actions: {
    async setReviewRating(context, payload) {
      const reviewRating = await fetch(url + payload, { headers });
      const j = await reviewRating.json();
      context.commit("setReviewRating", j);
      console.log("in setReviewRating method", j);
    },
  },
  getters: {
    getRating: (state) => {
      console.log("in getReviewRating method", state.rating);
      console.log(state.rating);
      return state.rating;
    },
  },
};