import { createStore } from 'vuex'
import category from './home/category'
import hotGoods from './home/hotGoods'
import swiper from './home/swiper'
import review from "./goodsDetail/review";
import reviewRating from "./goodsDetail/reviewRating";
import reviewTotal from "./goodsDetail/reviewTotal";
import goodsQa from './goodsDetail/goodsQa';
import goodsInfo from "./goodsDetail/goodsInfo";


export default createStore({
  modules: {
    category,
    hotGoods,
    swiper,
    review,
    reviewRating,
    reviewTotal,
    goodsQa,
    goodsInfo
  },
})