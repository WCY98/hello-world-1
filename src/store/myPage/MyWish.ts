import axios from "axios";

const url = "http://localhost:3000/wish/list/";
const headers = { Accept: "application/json" };

type wishListState = {
  wishList: Wish[],
  quantity:number
};

type Wish= {
  userId:number,
  skuName:string,
  price:number,
  imgUrl:string,
  quantity:1
}


export default {
  state: {
    wishList: [],
    price:1990,
    quantity:1
  },

  mutations: {
    setWishList(state: wishListState, payload:any) {
      state.wishList = payload;
    },

    updateQuantity(state:wishListState,quantity:number){
      if ( quantity <1 || quantity> 999 ) {
        alert("INPUT AGAIN");
      } else {
        state.quantity = +quantity.toString().slice( 0 ,3 );
      }
  },
  },
  actions: {
    async setWishList(context, payload: number) {
      const wish = await fetch(url + payload, { headers });
      const j = await wish.json();
      context.commit("setWishList", j);
    },

    async updateWishList(context, { id, userId }: { id: number, userId: string }) {
      await axios.patch("http://localhost:3000/wishList/" + id, {
        quantity: context.state.quantity,
      });
      const wish = await fetch(url + userId, { headers });
      const j = await wish.json();
      context.commit("setWishList", j);
      console.log("in setWishList method", j);
  },

    
  },
  getters: {
    getWishList(state: wishListState) {
      return state.wishList;
    },
  },
};