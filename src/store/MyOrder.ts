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
    ],
    filteredList:order[],
    date:string,
    status:string
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
    orderList: [],
    filteredList:[],
    date:"00",
    status:""
  },

  mutations: {
  setOrderList(state: orderState, payload:any) {
    state.orderList = payload;
    state.orderList.sort((a,b) => +new Date(b.orderDate) - +new Date(a.orderDate))
  },

    // filterByDate(state:orderState){
  setFilterList(state: orderState, payload: []) {
    state.filteredList = payload;
    state.filteredList.sort(
      (a, b) => +new Date(b.orderDate) - +new Date(a.orderDate)
      );
  },

  setDate(state:orderState, dateValue:string){
    state.date = dateValue
  },

  setStatus(state:orderState, statusValue:string) {
    state.status = statusValue
  },

  filterByDate(state:orderState, value: string) {
    const thisYear = new Date().getFullYear();
    let filtered : order[] = []
    if( value === "00") {
      filtered = state.orderList.filter(
        (order) => (
        new Date(order.orderDate).getMonth() + 1 > 0
        //[getMonth] only 0-11 available
        &&
        new Date(order.orderDate).getFullYear() > 2021)
      );
    }else if ( value === "10"){
      filtered = state.orderList.filter(
        (order) => new Date(order.orderDate).getFullYear() === thisYear
      ) 
    }else if ( value === "11"){
      filtered = state.orderList.filter(
        (order) => new Date(order.orderDate).getFullYear() === thisYear - 1
      ) 
    }else if ( value === "12"){
      filtered = state.orderList.filter(
        (order) => new Date(order.orderDate).getFullYear() === thisYear - 2
      ) 
    }else if ( value === "13"){
      filtered = state.orderList.filter(
        (order) => new Date(order.orderDate).getFullYear() === thisYear - 3
      ) 
    }else if ( value === "14"){
      filtered = state.orderList.filter(
        (order) => new Date(order.orderDate).getFullYear() === thisYear - 4
      ) 
    }
    state.filteredList = filtered.filter(
      (order) => order[0].orderStatus === state.status
    )
    state.filteredList.sort(
      (a , b) => +new Date (b.orderDate) - +new Date(a.orderDate)
    )
  }
  
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

    getFilteredList(state: orderState) {
      return state.filteredList;
    },

    // getOrderHistory(state: orderState) {
    //     return state.orderHistory;
    //   },
  },
};