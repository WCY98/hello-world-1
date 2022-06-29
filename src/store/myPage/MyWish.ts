import axios from "axios";

const url = "http://localhost:3000/wish/list/";
const headers = { Accept: "application/json" };

type wishListState = {
  wishList: Wish[],
  goodsList: Goods[],
  quantity:number,
  value: string;
  selectedName: string;
  id: number;
};

type Wish= {
  listName: string
  id:number,
  goodsList: Goods[],
};

type Goods={
  id:number,
  userId:number,
  skuName:string,
  price:number,
  imgUrl:string,
  quantity:1,
}


export default {
  state: {
    wishList: [],
    goodsList:[],
    quantity:1,
    item:{
      id: Number,
      userId: Number,
      skuName: String,
      price:Number,
      imgUrl:String,
      quantity: Number
  },
    value: "",
    id: 1,
    selectedName: "お気に入り商品",

  },

  mutations: {
    setWishList(state: wishListState, payload:any) {
      state.wishList = payload;
      
    },

    setGoodsList(state: wishListState, payload:any) {
      state.goodsList = payload;
    },

    filterGoodsList(state:wishListState,payload:string){
      state.selectedName = payload;
      state.goodsList = state.wishList.filter((w:Wish) => w.listName === payload)[0].goodsList;
      state.id = state.wishList.filter((w:Wish) => w.listName === payload)[0].id;
    },

    updateValue(state: wishListState, payload: string) {
      state.value = payload;
    },


  },

  actions: {
    async setWishList(context, payload: number) {
      const wish = await fetch(url + payload, { headers });
      const j = await wish.json();
      context.commit("setWishList", j);
      context.commit("setGoodsList", j[0].goodsList);
    },

    //add listName
    async addWishList(context, userId: string) {
      const wishList = {
        userId: "989898",
        listName: context.state.value,
        goodsList: [],
      };
      await axios.post("http://localhost:3000/wishList", wishList);
      context.dispatch("setWishList", userId);
      context.state.value = "";
    },
    //delete listName
    async deleteWishList(context,{ id, userId }: { id: number; userId: string }) {
      await fetch("http://localhost:3000/wishList/" + id, { method: "DELETE" });
      context.dispatch("setWishList", userId);
    },


    async updateWishList(context, { id, userId }: { id: number, userId: string }) {
      await axios.patch("http://localhost:3000/wishList/" + id, {
        quantity: context.state.quantity,
      });
      const wish = await fetch(url + userId, { headers });
      const j = await wish.json();
      context.commit("setWishList", j);
      console.log("in setWishList method", j);
  }

    
  },
  getters: {
    getWishList(state: wishListState) {
      return state.wishList;
    },

    getGoodsList(state: wishListState) {
      return state.goodsList;
    },

    getValue(state: wishListState) {
      return state.value;
    },

    getSelectName(state: wishListState) {
      return state.selectedName;
    },
    
    getId(state: wishListState) {
      return state.id;
    },
  },
};