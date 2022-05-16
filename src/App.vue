<template>
<Date-Picker v-model="date" />
<to-do-list2 first-name="json" name="peter" />
  <v-model-example></v-model-example>
  <my-component v-model.capitalize="modelValue"></my-component>
  {{ modelValue }}
  <my-component :modelValue="modelValue"></my-component>

</template>

<script>
import toDoList2 from "./components/ToDoList2.vue";
import DatePicker from "./components/DatePicker.vue";
import VModelExample from "./components/vModelExample.vue";
import MyComponent from "./components/myComponent.vue";


export default {
  data() {
    return { modelValue: "abc" };
  },
  name: "App",
  components: {
    toDoList2,
    DatePicker,
    VModelExample,
    MyComponent,

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
