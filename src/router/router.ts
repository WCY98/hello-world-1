import { createRouter, createWebHistory} from "vue-router";
import HomePage from "../pages/HomePage.vue";
import GoodsDetail from "../pages/GoodsDetail.vue";
import TestChange from "../pages/TestChange.vue";
import CartPage from "../pages/CartPage.vue";
import MyPage from "../pages/MY/MyPage.vue";

import MyOrder from "../pages/MY/OrderPage.vue";
import OrderDetail from "../pages/MY/OrderDetailPage.vue";

import MyLike from "../pages/MY/WishPage.vue";

import CustomerInfo from "../pages/MY/CustomerInfo.vue";
import EmailChange from "../pages/MY/CusEmail.vue";
import OtherChange from "../pages/MY/CusOther.vue";
import UpdateSuccess from "../pages/MY/UpdateSuccess.vue";


// export default createRouter({
    const routes = [
    // history : createWebHistory(),
    // routes : [
        {
            path:"/",
            name:"Homepage",
            component: HomePage,
        },
        {
           path:"/goods/detail/:goodsId",
           name:"GoodsDetail",
           component:GoodsDetail,
        },
        {
          path:"/cart/page/:userId",
          name:"CartPage",
          component: CartPage,
      },
      {
        path:"/my/page/:userId",
        name:"MyPage",
        component:MyPage,
      },
      {
        path:"/my/order/:userId",
        name:"MyOrder",
        component:MyOrder,
      },
      {
        path:"/order/detail/:orderCode",
        name:"OrderDetial",
        component:OrderDetail,
      },
      {
        path:"/my/like/:userId",
        name:"MyLike",
        component:MyLike,
      },
      {
        path:"/customer/info/:userId",
        name:"CustomerInfo",
        component:CustomerInfo,
      },
      {
        path:"/email/change/:userId",
        name:"EmailChange",
        component:EmailChange,
      },
      {
        path:"/other/change/:userId",
        name:"OtherChange",
        component:OtherChange,
      },
      {
        path:"/update/success/:userId",
        name:"UpdateSuccess",
        component:UpdateSuccess,
      },



        {  
          path: "/test", 
          name: "test", 
          component: TestChange
        }
    ];
    const router = createRouter({
        // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
      //   history: createWebHashHistory(),
        history: createWebHistory(),  
        routes // `routes: routes` 的缩写
      });
      
      export default router;


// import { createRouter, createWebHistory} from "vue.router";
// const routes = [
//   {path:'/itemCat',name:'itemCat',component:ItemCat}
//   {
//     path:"/",
//     name:"Home",
//     component: Home,
//   },
//   {
//     path:"/about",
//     name:"About",

//     component:() =>
//       import ("../views/About.vue"),
//   },
  
// ];
// const router = createRouter({
//   history : createWebHistory(),
//   routes,
// })