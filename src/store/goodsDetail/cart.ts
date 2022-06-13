import { ssrContextKey } from "vue";

const url = "http://localhost:3000/cart/";
const headers = { Accept: "application/json" };

type CartState={
    cart:[],
    goodsTitle:string,
    code:number,
    color:string,
    goodsSize:string,
    price:number,
    photo:string
}

export default{
    state:{
        cart:[],
        
    },


mutations:{
    setCart(state:CartState,payload:[]){
        state.cart = payload;
    }
},

actions:{
    setCart(context, sizeValue:number){
        context.commit("setCart", sizeValue)
    }
},

getters:{
    getCart: (state:CartState) => {
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