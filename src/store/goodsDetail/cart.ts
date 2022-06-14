const url = "http://localhost:3000/cart/";
const headers = { Accept: "application/json" };

type CartState={
    cart:[],
}

export default{
    state:{
        cart:[],
        
    },


mutations:{
    setCart(state:CartState,payload:[]){
        state.cart = payload;
    },
},

actions:{
    async setCart({ commit }: { commit: Function }, payload: string) {
        const cart = await fetch(url + payload, { headers });
        const j = await cart.json();
        commit("setCart", j);
        console.log("in setCart method", j);
      },
},

getters:{
    getCart: (state:CartState) => {
        console.log("cartcart",state.cart)
        return state.cart;
      },



    // "goodsTitle":string,
    // "code":number,
    // "color":string,
    // "goodsSize":string,
    // "price":number,
    // "photo":string
},
}