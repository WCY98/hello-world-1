import axios from "axios";

const url = "http://localhost:3000/cart/";
const headers = { Accept: "application/json" };

type CartState={
    cart:{},
    quantity:number
}

export default{
    state:{
        cart:{},
        quantity:1
        
    },


mutations:{
    setCart(state:CartState,payload:{}){
        state.cart = payload;
    },
    updateQuantity(state:CartState,quantity:number){
        if ( quantity > 999 ) {
            state.quantity = +quantity.toString().slice( 0 ,3 );
        } else {
            state.quantity = +quantity;
        }
    }
},

actions:{
    async setCart({ commit }: { commit: Function }, payload: string) {
        const cart = await fetch(url + payload, { headers });
        const j = await cart.json();
        commit("setCart", j);
        console.log("in setCart method", j);
      },
    
      async addCart(context) {
        const addCart = {
          userId: "989898",
          sku: "10195d_b",
          quantity: 1,
          cartDate: new Date(),
        };
        addCart.quantity = context.state.quantity;
        // await axios.post("http://localhost:3000/addCart",addCart);
      
      
      if(addCart.quantity < 1 || addCart.quantity > 999 || addCart.quantity == null){
        alert("INPUT AGAIN");
      }else{
        await axios.post("http://localhost:3000/addCart",addCart);
        alert("ALREADY IN THE CART")
      }
    }
},

getters:{
    getCart: (state:CartState) => {
        console.log("cartcart",state.cart)
        return state.cart;
    },

    getQuantity:(state:CartState) => {
        return state.quantity;
    }



    // "goodsTitle":string,
    // "code":number,
    // "color":string,
    // "goodsSize":string,
    // "price":number,
    // "photo":string
},
}