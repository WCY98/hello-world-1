const url = "http://localhost:3000/order/list/";
const headers = { Accept: "application/json" };

type orderState = {
    orderList: Order[],
    filteredList:Order[],
    // order:[],
    date:string,
    status:string,
    orderTimeSlot:string,
    orderStatus:string,
    statusValue:string
};

type Order = {
    userId:number,
    name:string,
    orderCode:string,
    orderId:number,
    orderDate:string,
    deliveryDate:string,
    orderTimeSlot:string,
    orderStatus:string,
    statusValue:string,
    dateValue:string

}

export default {
  state: {
    orderList: [],
    filteredList:[],
    date:"00",
    status:"ALL"
  },

  mutations: {
  setOrderList(state: orderState, payload:any) {
    state.orderList = payload;
    state.orderList.sort((a,b) => +new Date(b.orderDate) - +new Date(a.orderDate))
    console.log("rrrrrrrr",payload)
  },

    // filterByDate(state:orderState){
  setFilteredList(state: orderState, payload: []) {
    function GetDateStr(AddDayCount){
      const dd = new Date();
      dd.setDate(dd.getDate() + AddDayCount);
      const y = dd.getFullYear();
      const m =(dd.getMonth() + 1) < 10 ? "0" + (dd.getMonth() + 1):(dd.getMonth() + 1);
      //获取当前月份的日期，不足10补0
      const d = dd.getDate() < 10 ? "0" + (dd.getDate()):(dd.getDate())
      return y + "/" + m + "/" + d
    }
    state.filteredList = payload.filter( (order:Order) => order.orderDate > (GetDateStr(-180)) );
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

  filterByDateAndStatus(state:orderState) {
    function GetDateStr(AddDayCount){
      const dd = new Date();
      dd.setDate(dd.getDate() + AddDayCount);
      const y = dd.getFullYear();
      const m =(dd.getMonth() + 1) < 10 ? "0" + (dd.getMonth() + 1):(dd.getMonth() + 1);
      //获取当前月份的日期，不足10补0
      const d = dd.getDate() < 10 ? "0" + (dd.getDate()):(dd.getDate())
      return y + "/" + m + "/" + d
    }
    const thisYear = new Date().getFullYear();
    let filtered: Order[] = [];
    if ( state.date === "00" ){
      filtered = state.orderList.filter((order:Order) => order.orderDate > (GetDateStr(-180)))
    }else if ( state.date === "10" ){
      filtered = state.orderList.filter((order:Order) => new Date(order.orderDate).getFullYear() === thisYear)
    }else if ( state.date === "11" ){
      filtered = state.orderList.filter((order:Order) => new Date(order.orderDate).getFullYear() === thisYear - 1)
    }else if ( state.date === "12" ){
      filtered = state.orderList.filter((order:Order) => new Date(order.orderDate).getFullYear() === thisYear - 2)
    }else if ( state.date === "13" ){
      filtered = state.orderList.filter((order:Order) => new Date(order.orderDate).getFullYear() === thisYear - 3)
    }else if ( state.date === "14" ){
      filtered = state.orderList.filter((order:Order) => new Date(order.orderDate).getFullYear() === thisYear - 4)
    }

    // if(state.statusValue != "ALL" )
    //   state.filteredList = state.orderList.filter(
    //     (order) => order.statusValue === value
    //   );
    if (state.status === "ALL") {
      state.filteredList = filtered ;
    } else {
      state.filteredList = filtered.filter(
        (order) => order.statusValue === state.status
      );
    }
  },

  // filterByStatus(state: orderState, value: string) {
  //   if(state.statusValue != "ALL")
  //     state.filteredList = state.orderList.filter(
  //       (order) => order.statusValue === value
  //     );
  // },
  
  },

  actions: {
    async setOrderList(context, payload: number) {
      const order = await fetch(url + payload, { headers });
      const j = await order.json();
      console.log("ddddddd",j)
      context.commit("setOrderList", j);
      context.commit("setFilteredList",j)
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
      console.log("filteredList", state.filteredList);
      return state.filteredList;
    },
    
    getDate(state: orderState) {
      return state.date
    },

    getStatus(state: orderState) {
      return state.status
    },



    // getOrderHistory(state: orderState) {
    //     return state.orderHistory;
    //   },
  },
};