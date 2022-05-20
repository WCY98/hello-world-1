import { createStore } from 'vuex'
import category from './home/category'
import hotGoods from './home/hotGoods'

export default createStore({
  modules: {
    category,
    hotGoods
  },
})