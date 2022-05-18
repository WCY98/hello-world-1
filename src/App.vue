<template>
  <Date-Picker v-model="date" />
  <to-do-list2 first-name="json" name="peter" />
  <v-model-example></v-model-example>
  <my-component v-model.capitalize="modelValue"></my-component>
  {{ modelValue }}
  <my-component :modelValue="modelValue"></my-component>
  <!-- <goods-link v-bind="goods"></goods-link> -->
  <goods-list></goods-list>
</template>

<script>
import toDoList2 from "./components/ToDoList2.vue";
import DatePicker from "./components/DatePicker.vue";
import VModelExample from "./components/vModelExample.vue";
import MyComponent from "./components/myComponent";
// import GoodsLink from "./components/GoodsLink";
import GoodsList from "./components/GoodsList"

export default {
  data() {
    return {
      modelValue: "abc",
      // goods: {
      //   link: '/goods/detail/10195',
      //   tittle: '智能降噪 长久续航',
      //   imgSrc: '/goods-img/0dc503b2-90a2-4971-9723-c085a1844b76.jpg',
      //   name: '索尼1 WH-1000XM3 头戴式耳机 麒麟显卡 16G内...',
      //   price: 250,
      //   counter: '猜你喜欢',
      // },
    };
  },
  name: "App",
  components: {
    toDoList2,
    DatePicker,
    VModelExample,
    MyComponent,
    GoodsList
    // GoodsLink,
  },

  methods: {
    showChange(event) {
      console.log(event.target.value); // 将打印所选选项的值
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
