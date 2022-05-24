import { createRouter, createWebHistory} from "vue-router";
import HomePage from "../pages/HomePage.vue";
import GoodsDetail from "../pages/GoodsDetail.vue";
import TestChange from "../pages/TestChange";

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
       
        //    component:() =>
        //    import ("../views/About.vue"),
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