import axios from "axios";

const url = "http://localhost:3000/cart/list/";
//routes.json
const headers = { Accept: "application/json" };

type CartState={
    cart:{},
    quantity:number,
    sku: string,
    sizeValue:number,
    point:number
}

export default{
    state:{
        cart:{},
        quantity:1,
        sku: "",
        
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
    },

    setSku(state:CartState,sku:string){
        state.sku = sku
    },

    setSizeValue(state:CartState, sizeValue:number){
        state.sizeValue = sizeValue
    },

    setPoint(state:CartState, point:number){
        state.point = point
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
          sizeValue: "7564861",
          point:36,
          quantity: 1,
          cartDate: new Date(),
        };
        addCart.quantity = context.state.quantity;
        addCart.sku = context.state.sku;
        addCart.sizeValue = context.state.sizeValue;
        addCart.point = context.state.point;
        // await axios.post("http://localhost:3000/addCart",addCart);

      
      
    if(addCart.quantity < 1 || addCart.quantity > 999 || addCart.quantity == null){
        alert("INPUT AGAIN");
    }else{
        await axios.post("http://localhost:3000/addCart",addCart);
        alert("ADD TO CART SUCCESSFULLY")
    }
    },

    async deleteCart({commit}:{commit:Function}, {id, userId}:{id:number,userId:number}) {
        await fetch("http://localhost:3000/cartList/"+ id, { method: "DELETE" });
        const cart = await fetch(url + userId, { headers });
        const j = await cart.json();
        commit("setCart", j);
      },
},

getters:{
    getCart: (state:CartState) => {
        console.log("cartcart",state.cart)
        return state.cart;
    },

    getQuantity:(state:CartState) => {
        return state.quantity;
    },

    getSku:(state:CartState) => {
        return state.sku;
    },

    getSizeValue:(state:CartState) => {
        return state.sizeValue;
    },

    getPoint:(state:CartState) => {
        return state.point;
    }



    // "goodsTitle":string,
    // "code":number,
    // "color":string,
    // "goodsSize":string,
    // "price":number,
    // "photo":string
},
}