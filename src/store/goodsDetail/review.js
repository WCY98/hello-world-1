const url = "http://localhost:3000/review/goodsId/:goodsId/offset/:offset";
const headers = { Accept: "application/json" };

export default {
  state: {
    reviews: {},
    reviewList: [],
    showed: false,
  },
  mutations: {
    //syncrous
    setReview(state, j) {
      state.reviews = j[0];
      console.log("array push reviews", j);
      console.log("array push reviews[0]", j[0]);
    },
    setReviewList(state, j) {
      //state.reviewList =[];
      state.reviewList.push(...j);
      console.log("state.reviewList.push(...reviewList)", j);
    },
    changeShowed(state, changeShowed) {
      state.showed = changeShowed;
    },
  },
  actions: {
    //asyncronous  异步
    async setReview(context, payload) {
      const { goodsId, offset } = payload;
      const newUrl = url
        .replace(":goodsId", goodsId)
        .replace(":offset", offset);

      const reviews = await fetch(newUrl, { headers });
      const j = await reviews.json();

      console.log("in setReviews method", j);
      console.log("j[0].reviewList", j[0].reviewList);

      if (offset === 0) {
        context.commit("setReview", j);
      } else {
        context.commit("changeShowed", true);
        context.commit("setReviewList", j[0].reviewList);
      }
    },
  },
  getters: {
    getReview: (state) => {
      console.log("in getReviews method", state.reviews);
      console.log(state.reviews);
      return state.reviews;
    },
    getReviewList: (state) => {
      return state.reviewList;
    },
    getShowed: (state) => {
      return state.showed;
    },
  },
};