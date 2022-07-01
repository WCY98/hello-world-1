import axios from "axios";

const url = "http://localhost:3000/wish/list/";
const headers = { Accept: "application/json" };

type wishListState = {
  wishList: Wish[],
  goodsList: Goods[],
  quantity:number,
  value: string;
  selectedName: string,
  id: number,
  canMoveList: Wish[],
  allGoodsList: Goods[],
  selectableList: string,
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
  quantity:number,
  listName: string;
}


export default {
  state: {
    wishList: [],
    goodsList:[],
    quantity:1,
    value: "",
    id: 1,
    selectedName: "お気に入り商品",
    canMoveList: [],
    allGoodsList: [],
    selectableList: "",
  },

  mutations: {
    setWishList(state: wishListState, payload:any) {
      state.wishList = payload;
      
    },

    setGoodsList(state: wishListState, payload:any) {
      state.goodsList = payload;
    },

    setALLGoodsList(state: wishListState, payload: []) {
      state.allGoodsList = payload;
    },

    setCanMoveList(state: wishListState, payload: []) {
      state.canMoveList = payload;
      state.selectableList = state.canMoveList[0].listName;
    },

    filterGoodsList(state:wishListState,payload:string){
      state.selectedName = payload;
      state.goodsList = state.allGoodsList.filter((w:Goods) => w.listName === payload);
      state.id = state.wishList.filter((w:Wish) => w.listName === payload)[0].id;
    },

    filterWishList(state: wishListState, payload: string) {
      state.canMoveList = state.wishList.filter(
        (w: Wish) => w.listName !== payload
      );
      state.selectableList = state.canMoveList[0].listName;
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
      // context.commit("setGoodsList", j[0].goodsList);
      const filtered = j.filter((w: Wish) => w.listName !== "お気に入り商品");
      context.commit("setCanMoveList", filtered);
    },

    async setWishGoodsList(context, payload: string) {
      const wish = await fetch(
        "http://localhost:3000/wish/goods/List/" + payload, { headers });
      const j = await wish.json();
      context.commit("setALLGoodsList", j);
      //得到初始list
      const filtered = j.filter((w: Wish) => w.listName === "お気に入り商品");
      context.commit("setGoodsList", filtered);
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
      //删除之后初始化wishList
      context.state.selectedName = "お気に入り商品";
    },


    async updateListName(context, { newName,id, userId }: {newName:string, id: number, userId: string }) {
      await axios.patch("http://localhost:3000/wishList/" + id, {
        listName: newName,
      });
      context.dispatch("setWishList", userId);
      context.state.selectedName = "お気に入り商品";
  },

  // //add goods into [お気に入り商品] list
  // async intoWish(context, newInfoList: {}) {
  //   const key = "listName";
  //   const value = "お気に入り商品";
  //   const key2 = "userId";
  //   const value2 = "989898";
  //   newInfoList[key] = value;
  //   newInfoList[key2] = value2;
  //   await axios.post("http://localhost:3000/wishgoodsList", newInfoList);

  //   const userId = "989898";
  //   context.dispatch("setWishList", userId);
  // },

  //delete goods in [お気に入り商品] list
  async deleteGoods(context, { id, userId }: { id: number; userId: string }) {
    await fetch("http://localhost:3000/wishgoodsList/" + id, { method: "DELETE" });
    context.dispatch("setWishGoodsList", userId);
    //删除之后初始化list名
    context.state.selectedName = "お気に入り商品";
  },

  //move goods from  [お気に入り商品] list to [123] list
  async moveGoods(context,
    {
      anotherName,
      id,
      userId,
    }: 
    { anotherName: string; id: number; userId: string } ) {
    await axios.patch("http://localhost:3000/wishgoodsList/" + id, {
      listName: anotherName,
    });
    //console.log("anotherName", anotherName);
    context.dispatch("setWishGoodsList", userId);
    context.dispatch("setWishList", userId);
    context.state.selectedName = "お気に入り商品";
  },

    
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

    getCanMoveList(state: wishListState) {
      return state.canMoveList;
    },

    getAllGoodsList(state: wishListState) {
      return state.allGoodsList;
    },
  },
};