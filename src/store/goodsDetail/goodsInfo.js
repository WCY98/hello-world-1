const url = "http://localhost:3000/goods/info/";
const headers = { Accept: "application/json" };

export default {
  state: {
    sizeList: [],
    variants:[],
    imgList:[],
    goodsSize:"",
    color:"",
    // info:{ }
  },
mutations: {
    //synchronous 同期
setSizeList(state, payload) {
      state.sizeList.push(...payload);
    },

setVariants(state, payload){
      state.variants.push(...payload);
    },

    // changeShowed(state, changeShowed) {
    //   state.showed = changeShowed;
setImgList(state,{goodsSize,color}){
let imgs = state.sizeList.filter((info) => info.goodsSize === goodsSize && info.color===color)
      
const limit = 3;
let count = imgs.length/limit;
count = imgs.length % limit? count++ :count;
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
      context.commit("setSizeList", j);
      console.log("in setSizeList method", j);

    context.commit("setSizeList",j[0].sizeList);
    context.commit("setVariants",j[0].variants);
    const goodsSize = j[0].variants[0].goodsSize;
    const color =j[0].variants[0].color;

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
    }

    // getShowed: (state) => {
    //   return state.showed;
    // },
  },
};