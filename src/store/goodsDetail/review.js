const url = "http://localhost:3000/review/goodsId/:goodsId/offset/:offset";
const headers = { Accept: "application/json" };

export default {
  state: {
    reviews: {},
    reviewList: [],
    showed: false,
    allReviewList:[]
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
    
    filterReviews(state, rating) {
      if(state.allReviewList.length ===0){
        state.allReviewList.push(...state.reviews.reviewList);
        state.allReviewList.push(...state.reviewList);
      }
      const arr = state.allReviewList.filter(review =>review.rating ===rating);

      if (arr.length >3 ){
        state.reviews.reviewList = arr.slice(0,3);
        state.reviewList = arr.slice(3);
      }else{
        state.reviews.reviewList = arr;
      }
    }
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