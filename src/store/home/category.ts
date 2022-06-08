const url = "http://localhost:3000/categories";
const headers = { Accept: "application/json" };

export type categoriesState = {
  categories: [];
};

export default {
  state: {
    categories: [],
  },
  mutations: {
    //syncrous
    setCategories(state : categoriesState, payload:[]) {
      // state.categories.push(...payload);
      state.categories = payload
      console.log("array push ", payload);
    },
  },
  actions: {
    //asyncronous
    async setCategories({commit}:{commit:Function}) {
      const categories = await fetch(url, { headers });
      const j = await categories.json();
      commit("setCategories", j);
      // console.log("in setCategories method", j);
    },
  },
  getters: {
    getCategories: (state: categoriesState) => {
      console.log("in getCategories method", state.categories);
      console.log(state.categories);
      return state.categories;
    },
  },
};