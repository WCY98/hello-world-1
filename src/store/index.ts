import { InjectionKey } from 'vue'
import { createStore, Store ,useStore as baseUseStore} from 'vuex'


import category from './home/category'
import hotGoods from './home/hotGoods'
import swiper from './home/swiper'
import review from "./goodsDetail/review";
import reviewRating from "./goodsDetail/reviewRating";
import reviewTotal from "./goodsDetail/reviewTotal";
import goodsQa from './goodsDetail/goodsQa';
import goodsInfo from "./goodsDetail/goodsInfo";
import cart from "./cart/cart"; 
import mypage from "./myPage/MyPage";
import myorder from "./myPage/MyOrder"
import orderdetail from "./myPage/OrderDetail"
import mywish from "./myPage/MyWish"
import infoChange from "./myPage/InfoChange"


type State = {};

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  modules: {
    category,
    hotGoods,
    swiper,
    review,
    reviewRating,
    reviewTotal,
    goodsQa,
    goodsInfo,
    cart,
    mypage,
    myorder,
    orderdetail,
    mywish,
    infoChange
  },
})

export const useStore = () => {
  return baseUseStore(key);
} 