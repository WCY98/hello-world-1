const url = "http://localhost:3000/wish/list/";
const headers = { Accept: "application/json" };

type wishListState = {
  wishList: Wish[]
};

type Wish= {
  userId:number,
  skuName:string,
  price:number,
  imgUrl:string
}


export default {
  state: {
    wishList: []
  },

  mutations: {
    setWishList(state: wishListState, payload:any) {
      state.wishList = payload;
    },
  },
  actions: {
    async setWishList(context, payload: number) {
      const wish = await fetch(url + payload, { headers });
      const j = await wish.json();
      context.commit("setWishList", j);
      
    },
  },
  getters: {
    getWishList(state: wishListState) {
      return state.wishList;
    },
  },
};