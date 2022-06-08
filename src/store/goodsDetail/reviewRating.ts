const url = "http://localhost:3000/review/rating/";
const headers = { Accept: "application/json" };

type reviewRating={
  reviewRating: [],
    rating:[]
}

export default {
  state: {
    reviewRating: [],
    rating:[]
  },
  mutations: {
    setReviewRating(state:reviewRating, payload:[]) {
      state.reviewRating.push(...payload);
      // state.rating.push(...payload[0].rating)
      //state.reviewRating = payload
      // state.reviewRating = payload[0];
      console.log("array push ", payload);
    },

  },
  actions: {
    async setReviewRating({commit}:{commit:Function}, payload:[]) {
      const reviewRating = await fetch(url + payload, { headers });
      const j = await reviewRating.json();
      commit("setReviewRating", j);
      console.log("in setReviewRating method", j);
    },
  },
  getters: {
    getRating: (state:reviewRating) => {
      console.log("in getReviewRating method", state.rating);
      console.log(state.rating);
      return state.rating;
    },
  },
};