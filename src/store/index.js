//import Vue from "vue";
//import Vuex from "vuex";

// import { createApp } from 'vue'
import { createStore } from "vuex";

// Vue.use(Vuex);

const url = "http://localhost:3000/newGoodses";
const headers = { Accept: "application/json" };

export default createStore({
  state: {
    newGoodses: [],
  },
  mutations: {
    //syncrous
    setNewGoods(state, payload) {
      state.newGoodses.push(...payload);
      console.log('array push ',payload);
    },
  },
  actions: {
    //asyncronous
    async setNewGoodses(state) {
      
      const goodses = await fetch(url, { headers });
      const j = await goodses.json();
      state.commit("setNewGoods", j);
      console.log('in setNewGoodses method',j);
    },
  },
  modules: {},
  getters: {
    getNewGoodses: (state) => {
      console.log('in getNewGoodses method',state.newGoodses);
      console.log(state.newGoodses);
      return state.newGoodses
    },
  }
});
