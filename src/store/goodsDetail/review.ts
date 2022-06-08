const url = "http://localhost:3000/review/goodsId/:goodsId/offset/:offset";
const headers = { Accept: "application/json" };

type reviewState={
  reviews: {reviewCount:number,reviewList: review []},
  reviewList: review [],
  showed: false,
  allReviewList:review [],
}

type review={
  "rating":number,  
  "nickName": string,
  "reviewDate": string,
  "goodsName": string,
  "title": string,
  "content": string,
  "count": number,
}


export default {
  state: {
    reviews: {},
    reviewList: [],
    showed: false,
    allReviewList:[]
  },
  mutations: {
    //syncrous
    setReview(state:reviewState, payload:any) {
      // state.reviews = j[0];
      state.reviews = payload[0];
      console.log("array push ", payload[0]);
      // console.log("array push reviews[0]", j[0]);
      // console.log("array push reviews[0]", j);
    },
    setReviewList(state:reviewState, j:[]) {
      //state.reviewList =[];
      state.reviewList.push(...j);
      console.log("state.reviewList.push(...reviewList)", j);
    },
    changeShowed(state:reviewState, payload:any) {
      state.showed = payload;
    },

    filterReviews(state:reviewState, rating:any) {
      if(state.allReviewList.length === 0){
        // state.allReviewList.push(...state.reviews.reviewList);
        state.allReviewList.push(...state.reviewList);
      }
      const arr = state.allReviewList.filter((review:review) =>review.rating ===rating);

      //点击rating对应的review之后、showMeMore的分母数字改变
      state.reviews.reviewCount = arr.length;
      if (arr.length > 3 ){
        state.reviews.reviewList = arr.slice(0,3);
        state.reviewList = arr.slice(3);
      }else{
        state.reviews.reviewList = arr;
      }
    }
  },
  actions: {
    //asyncronous  异步
    async setReview({commit}:{commit:Function}, payload:any) {
      const { goodsId, offset } = payload;
      const newUrl = url
        .replace(":goodsId", goodsId)
        .replace(":offset", offset);

      const reviews = await fetch(newUrl, { headers });
      const j = await reviews.json();

      console.log("in setReviews method", j);
      console.log("j[0].reviewList", j[0].reviewList);

      if (offset === 0) {
        commit("setReview", j);
      } else {
        // context.commit("changeShowed", true);
        commit("setReviewList", j[0].reviewList);
      }
    },
  },
  getters: {
    getReview: (state:reviewState) => {
      console.log("in getReviews method", state.reviews);
      console.log(state.reviews);
      return state.reviews;
    },
    getReviewList: (state:reviewState) => {
      return state.reviewList;
    },
    getShowed: (state:reviewState) => {
      return state.showed;
    },
  },
};