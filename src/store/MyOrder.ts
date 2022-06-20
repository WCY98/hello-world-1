const url = "http://localhost:3000/order/list/";
const headers = { Accept: "application/json" };

type orderState = {
    orderList: order[
    //   userId:number,
    //   name:string,
    //   orderCode:string,
    // //   orderHistory:orderHistory[]}
    // //   orderHistory:orderHistory
    //   orderId:number,
    //   orderDate:string,
    //   deliveryDate:string,
    //   orderTimeSlot:string,
    //   orderStatus:string
    ]
};

type order={
    userId:number,
    name:string,
    orderCode:string,
      orderId:number,
      orderDate:string,
      deliveryDate:string,
      orderTimeSlot:string,
      orderStatus:string

}

export default {
  state: {
    orderList: []
  },

  mutations: {
    setOrderList(state: orderState, payload:any) {
        state.orderList = payload;
        state.orderList.sort((a,b) => +new Date(b.orderDate) - +new Date(a.orderDate))
    },

    // filterByDate(state:orderState){
    //     const today = new Date();
    //     const year = 
    // }

    // setOrderHistory(state: orderState, payload:any){
    //     state.orderHistory = payload;
    // }
  },

  actions: {
    async setOrderList(context, payload: number) {
      const order = await fetch(url + payload, { headers });
      const j = await order.json();
      console.log("ddddddd",j)
      context.commit("setOrderList", j);
    },

    // async setOrderHistory(context, payload: number) {
    //     const history = await fetch(url + payload, { headers });
    //     const j = await history.json();
    //     console.log("eeeeeeee",j)
    //     context.commit("setOrderHistory", j[0]);
    //   },
  },

  getters: {
    getOrderList(state: orderState) {
      return state.orderList;
    },

    // getOrderHistory(state: orderState) {
    //     return state.orderHistory;
    //   },
  },
};