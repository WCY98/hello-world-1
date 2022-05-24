import { createStore } from 'vuex'
import category from './home/category'
import hotGoods from './home/hotGoods'
import swiper from './home/swiper'
import review from "./goodsDetail/review";


export default createStore({
  modules: {
    category,
    hotGoods,
    swiper,
    review,
  },
})