const url = "http://localhost:3000/goods/info/";
const headers = { Accept: "application/json" };

export default {
  state: {
    sizeList: [],
    variants:[],
    imgList:[],
    goodsSize:"",
    color:"",
    newList:[],
    newList1:{}
    // info:{ }
  },
mutations: {
    //synchronous 同期
setSizeList(state, payload) {
      state.sizeList=payload;
    },

setVariants(state, payload){
      state.variants=payload;
    },

    // changeShowed(state, changeShowed) {
    //   state.showed = changeShowed;
setImgList(state,{goodsSize,color}){
  // console.log("eeeeeee",state.sizeList)
  // console.log("ggggggg",goodsSize)
  // console.log(color)

let imgs = [];
// console.log("fffffffffff",state.imgList)
const newList = state.sizeList.filter((info) => info.goodsSize === goodsSize && info.color===color)
if (newList.length > 0){
  imgs = newList[0].photoList;
}

state.newList1=newList[0]
// let imgs = state.sizeList.filter((info) => info.goodsSize === goodsSize && info.color===color)[0].photoList;
state.newList = newList
      
const limit = 3;
let count = Math.ceil(imgs.length/limit);
// count = imgs.length % limit? count++ :count;
let idx = 0;
state.imgList = [];
while (idx < count) {
state.imgList.push(imgs.slice(idx * limit, idx * limit+ limit))
idx++;
      }
    },
    setGoodsSize(state,payload){
      state.goodsSize = payload;
    },

    setColor(state,payload){
      state.color = payload;
    }

  },

  actions: {
    //asyncronous 非同期
    async setSizeList(context, payload) {
      const sizeList = await fetch(url + payload, { headers });
      const j = await sizeList.json();
      // console.log("in setSizeList method", j);

    context.commit("setSizeList",j[0].sizeList);
    context.commit("setVariants",j[0].variants);
    const goodsSize = j[0].variants[0].goodsSize;
    const color =j[0].variants[0].color[0];

    context.commit("setGoodsSize", goodsSize);
    context.commit("setColor", color);
    context.commit("setImgList", { goodsSize, color });
    
    },

    // async setImgList(context, payload) {
    //   const imgList = await fetch(url + payload, { headers });
    //   const j = await imgList.json();
    //   context.commit("setImgList", j);
    //   console.log("in setImgList method", j)
    // },
    
  },


  getters: {
    getSizeList: (state) => {
      return state.sizeList;
    },

    getVariants: (state) => {
      return state.variants;
    },
    
    getImgList:(state) =>{
      return state.imgList;
    },

    getGoodsSize:(state) =>{
      return state.goodsSize;
    },

    getColor:(state) =>{
      return state.color;
    },

    getNewList1:(state) =>{
      return state.newList1;
    }

    // getShowed: (state) => {
    //   return state.showed;
    // },
  },
};