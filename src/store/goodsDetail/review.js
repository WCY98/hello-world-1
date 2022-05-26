const url = "http://localhost:3000/review/";
const url2 = "http://localhost:3000/review/goodsId/:goodsId/offset/:offset";
const headers = { Accept: "application/json" };

export default {
  state: {
    goods:{},
    review: {},
    reviewList:[],
    showed:false,
  },
  mutations: {
    setGoods(state, payload) {
      state.goods = payload[0];
      console.log("array push ", payload);
    },
    //syncrous
    setReview(state, payload) {
      state.review = payload[0];
      console.log("array push ", payload[0]);
    },
    setReviewList(state, payload) {
      // state.reviewList = payload;
      state.reviewList.push(...payload);
    },

    changeShowed(state,payload){
      state.showed = payload;
    }
  },
  actions: {
    //asyncronous
    async setGoods(context, payload) {
      const goodsId = payload.goodsId;
      const goods = await fetch(url + goodsId, { headers });
      const j = await goods.json();
      context.commit("setGoods", j);
    },
    async setReview(context, payload) {
      const { goodsId, offset} = payload;
      const newUrl = url2
                     .replace(":goodsId",goodsId)
                     .replace(":offset",offset)
      // console.log("url",newUrl)

      const goodses = await fetch(newUrl, { headers });
      const j = await goodses.json();

      if(offset === 0 ){
        context.commit("setReview", j);
      }else{
        context.commit("changeShowed", true);
        context.commit("setReviewList", j[0].reviewList);
      }
    },
  },
  getters: {
    getGoods: (state) => {
      // console.log("in getGoods method", state.goods);
      return state.goods;
    },
    getReview: (state) => {
      // console.log("in getReview method", state.review);
      return state.review;
    },
    getReviewList: (state) => {
      return state.reviewList;
    },
    getShowed: (state) => {
      return state.showed;
    },
  },
};