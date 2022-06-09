const url = "http://localhost:3000/review/rating/";
const headers = { Accept: "application/json" };

type Rating={
  // reviewRating: [],
  rating:[]
}

export default {
  state: {
    // reviewRating: [],
    rating:[],
  },
  mutations: {
    setRating(state:Rating, payload) {
      state.rating = payload[0].rating;
      // state.rating.push(...payload[0].rating)
      //state.reviewRating = payload
      // state.reviewRating = payload[0];
      // console.log("array push ", payload);
    },

  },
  actions: {
    async setRating({commit}:{commit:Function}, payload:[]) {
      const res = await fetch(url + payload, { headers });
      const j = await res.json();
      commit("setRating", j);
      // console.log("in setRating method", j);
    },
  },
  getters: {
    getRating: (state:Rating) => {
      // console.log("in getReviewRating method", state.rating);
      // console.log(state.rating);
      return state.rating;
    },
  },
};