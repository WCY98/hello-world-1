const url = "http://localhost:3000/goods/info/";
const headers = { Accept: "application/json" };

type DetailState={
  sizeList: [],
  variants:[],
  imgList:string[][],
  goodsSize:string,
  color:string,
  newList:any[],
  newList1:{}
}

type info = {
  "goodsSize":string,
  "sizeValue":string,
  "dataCode":string,
  "color":string,
  "price":number,
  "code":string,
  "size":string,
  "material": string,
  "weight": string,
  "warrantyYear": string,
  "point":string,
  "photoList":string[]
}



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
setSizeList(state:DetailState, payload:[]) {
      state.sizeList=payload;
    },

setVariants(state:DetailState, payload:[]){
      state.variants=payload;
    },

    // changeShowed(state, changeShowed) {
    //   state.showed = changeShowed;
setImgList(state:DetailState,{goodsSize,color}:{goodsSize:string,color:string}){
  // console.log("eeeeeee",state.sizeList)
  // console.log("ggggggg",goodsSize)
  // console.log(color)

let imgs :string[] = [];
// console.log("fffffffffff",state.imgList)
const newList = state.sizeList.filter((info:info) => info.goodsSize === goodsSize && info.color===color)
if (newList.length > 0){
  imgs = newList[0]["photoList"];
}

state.newList1=newList[0]
// let imgs = state.sizeList.filter((info) => info.goodsSize === goodsSize && info.color===color)[0].photoList;
state.newList= newList
      
const limit = 3;
const count = Math.ceil(imgs.length/limit);
// count = imgs.length % limit? count++ :count;
let idx = 0;
state.imgList = [];
while (idx < count) {
state.imgList.push(imgs.slice(idx * limit, idx * limit+ limit))
idx++;
      }
    },
    setGoodsSize(state:DetailState,payload:string){
      state.goodsSize = payload;
    },

    setColor(state:DetailState,payload:string){
      state.color = payload;
    }

  },

  actions: {
    //asyncronous 非同期
    async setSizeList({commit}:{commit:Function}, payload:string) {
      const sizeList = await fetch(url + payload, { headers });
      const j = await sizeList.json();
      // console.log("in setSizeList method", j);

    commit("setSizeList",j[0].sizeList);
    commit("setVariants",j[0].variants);
    const goodsSize = j[0].variants[0].goodsSize;
    const color =j[0].variants[0].color[0];

    commit("setGoodsSize", goodsSize);
    commit("setColor", color);
    commit("setImgList", { goodsSize, color });
    
    },

    // async setImgList(context, payload) {
    //   const imgList = await fetch(url + payload, { headers });
    //   const j = await imgList.json();
    //   context.commit("setImgList", j);
    //   console.log("in setImgList method", j)
    // },
    
  },


  getters: {
    getSizeList: (state:DetailState) => {
      return state.sizeList;
    },

    getVariants: (state:DetailState) => {
      return state.variants;
    },
    
    getImgList:(state:DetailState) =>{
      return state.imgList;
    },

    getGoodsSize:(state:DetailState) =>{
      return state.goodsSize;
    },

    getColor:(state:DetailState) =>{
      return state.color;
    },

    getNewList1:(state:DetailState) =>{
      return state.newList1;
    }

    // getShowed: (state) => {
    //   return state.showed;
    // },
  },
};