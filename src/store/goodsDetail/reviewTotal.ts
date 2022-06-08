const url = "http://localhost:3000/review/total/";
const headers = { Accept: "application/json" };

type reviewTotal = {
  reviewTotal: [],
}

export default {
  state: {
    reviewTotal: [],
  },
  mutations: {
    //syncrous
    setReviewTotal(state:reviewTotal, payload:any) {
      //state.reviewTotal.push(...payload);
      //state.reviewTotal = payload
      state.reviewTotal = payload[0];
      console.log("array push ", payload);
    },
  },
  actions: {
    //asyncronous
    async setReviewTotal({commit}:{commit:Function}, payload:[]) {
      const reviewTotal = await fetch(url + payload, { headers });
      const j = await reviewTotal.json();
      commit("setReviewTotal", j);
      console.log("in setReviewTotal method", j);
    },
  },
  getters: {
    getReviewTotal: (state:reviewTotal) => {
      console.log("in getReviewTotal method", state.reviewTotal);
      console.log(state.reviewTotal);
      return state.reviewTotal;
    },
  },
};