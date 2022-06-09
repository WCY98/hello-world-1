const url = "http://localhost:3000/goodsqa/";
const headers = { Accept: "application/json" };


type QaState = {
  goodsQA: {qaList: Qa[]},
  totalCount: number,
  pageNo: number,
  totalPage: number,
  qaList:[],
  // showLeft:false
}

type Qa ={
  "questionContents":string,
  "questionDate":Date,
  "answerContents":string,
  "answerName":string,
  "answerDate":Date,  
  "count":number       
}

export default {
  state: {
    goodsQA: {qaList: []},
    pageNo: 1,
    totalPage: Number,
    
  },

  mutations: {
    //syncrous
    setGoodsQA(state:QaState, payload:QaState) {
      // state.goodsQA = payload[0];
      state.goodsQA = payload;
      console.log("array push ", payload);
    },

    setTotalCount(state:QaState, payload:any) {
      state.totalCount = payload[0].totalCount;
    },

    setSort(state:QaState, value:string){
      if (value === "新しい順"){
        state.goodsQA.qaList.sort(( a , b) => 
           +new Date(b.answerDate)- +new Date(a.answerDate)
        
        );
        }else{
          state.goodsQA.qaList.sort(( a , b ) => b.count - a.count);
        }
    },

    nextPage(state:QaState) {
      state.pageNo++;
    },
    previousPage(state:QaState) {
      state.pageNo--;
    },
    // changeShowLeft(state:QaState, changeShowLeft:any) {
    //   state.showLeft = changeShowLeft;
    // },
  },
  actions: {
    //asyncronous
    async setGoodsQA({commit}:{commit:Function}, payload:string) {
      const goodsQA = await fetch(url + payload, { headers });
      const j = await goodsQA.json();
      commit("setGoodsQA", j);
      console.log("in setGoodsQA method", j);
    },
  },
  getters: {
    getGoodsQA: (state:QaState) => {
      console.log("QQQQQQQQQQ",state.goodsQA)
      return state.goodsQA;
    },
    // getQaList: (state:QaState) => {
    //   return state.qaList;
    // },
    // getTotalCount: (state:QaState) => {
    //   return state.totalCount;
    // },
    getPageNo: (state:QaState) => {
      return state.pageNo;
    },
    // getTotalPage: (state:QaState) => {
    //   return state.totalPage;
    // },
    
  },
};