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
    goodsInfo
  },
})

export const useStore = () => {
  return baseUseStore(key);
} 