import { CommentOutlined } from "@ant-design/icons-vue";
import axios from "axios";

const url = "http://localhost:3000/cart/list/";
//routes.json
const headers = { Accept: "application/json" };

type CartState={
    cart:CartContent[],
    quantity:number,
    sku: string,
    sizeValue:number,
    point:number,
    subtotal:number
}
type CartContent = {
    id: number,
    userId: number,
    sku: string,
    goodsTitle:string,
    sizeValue:string,
    color:string,
    goodsSize:string,
    price:number,
    point:number,
    photo:string,
    quantity: number
  }

export default{
    state:{
        cart:[],
        quantity:1,
        sku: "",
        subtotal:0
        
    },


mutations:{
    setCart(state:CartState,payload:any){
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
    },

    setSubtotal(state: CartState, payload: number) {
        state.subtotal = payload;
      },
},

actions:{
    async setCart(context, payload: string) {
        const cart = await fetch(url + payload, { headers });
        const j = await cart.json();
        context.commit("setCart", j);
        console.log("in setCart method", j);

        //add new data
    let subtotal = 0;
    context.state.cart.map(
        (CartContent) => (subtotal += CartContent.price*CartContent.quantity))
        context.commit("setSubtotal",subtotal)
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

    async deleteCart(context, {id, userId}:{id:number,userId:number}) {
        await fetch("http://localhost:3000/cartList/"+ id, { method: "DELETE" });
        const cart = await fetch(url + userId, { headers });
        const j = await cart.json();
        context.commit("setCart", j);
    },
    // update data
    async updateCart(context, { id, userId }: { id: number; userId: string }) {
        await axios.patch("http://localhost:3000/cartList/" + id, {
          quantity: context.state.quantity,
        });
        const cart = await fetch(url + userId, { headers });
        const j = await cart.json();
        context.commit("setCart", j);
        console.log("in setCart method", j);

        //add new data
    let subtotal = 0;
    context.state.cart.map(
        (CartContent) => (subtotal += CartContent.price*CartContent.quantity))
        context.commit("setSubtotal",subtotal)
      
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
    },

    getSubtotal: (state: CartState) => {
        return state.subtotal;
      },



    // "goodsTitle":string,
    // "code":number,
    // "color":string,
    // "goodsSize":string,
    // "price":number,
    // "photo":string
},
}