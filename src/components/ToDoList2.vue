<template>
  <div id="todo-list-example" class="demo">
    <div>
      <label for="new-todo">Add a todo</label>
      <input
        v-focus
        v-model="newTodoText"
        id="new-todo"
        placeholder="E.g. Feed the cat"
      />
      <input id="month" v-model="month" placeholder="m" />
      <input id="day" v-model="day" placeholder="d" />
      <button @click="addNewTodo">Add</button>
    </div>

    <div id="sortDiv">
      <button @click="sortByTime">sort by time</button>
    </div>
    <span>{{ firstName }}</span>
    <span>{{ name }}</span>
    <ul>
      <to-do
        v-for="(todo, index) in todos"
        v-bind:key="todo.id"
        v-bind:title="todo.title"
        v-bind:date="todo.date"
        v-bind:finished="todo.finished"
        v-bind:index="index"
        @remove="remove(index)"
        @toggle-li="toggle(todo)"
      ></to-do>
    </ul>
  </div>
</template>

<script>
import toDo from "./toDo";

export default {
  // setup(props) {
  //   const setStorage = () => {
  //     localStorage.setItem("todoList", JSON.stringify(props.todos));
  //   };
  //   return {
  //     setStorage,
  //   };
  // },

  components: {
    toDo,
  },

  directives: {
    focus: {
      // 指令的定义
      mounted(el) {
        el.focus();
      },
    },
  },
  props: ["firstName", "name"],
  // mounted
  mounted() {
    console.log(this.todos);
    let store = JSON.parse(localStorage.getItem("todoList"));
    if (store) {
      this.todos = store;
      this.nextTodoId = this.todos.length + 1;
    }
  },

  data() {
    return {
      newTodoText: "",
      month: "",
      day: "",
      todos: [],
      nextTodoId: 1,
    };
  },
  methods: {
    addNewTodo() {
      if (this.month.indexOf("0") === 0) {
        this.month = this.month.replace("0", "");
      }
      this.todos.push({
        id: this.nextTodoId++,
        title: this.newTodoText,
        date: this.month + "/" + this.day,
      });
      this.newTodoText = "";
      this.month = "";
      this.day = "";

      this.setStorage();
    },

    sortByTime() {
      this.todos.sort(function (a, b) {
        let aDateArr = a.date.split("/"); // ['5','13']
        let bDateArr = b.date.split("/"); // ['5','14']

        if (aDateArr[0] === bDateArr[0]) {
          return aDateArr[1] - bDateArr[1];
        } else {
          // '5' - '4'
          return aDateArr[0] - bDateArr[0];
        }
      });
    },

    remove(index) {
      this.todos.splice(index, 1);
      this.setStorage();
    },

    toggle(todo) {
      todo.finished = !todo.finished;
      this.setStorage();
    },

    setStorage() {
      localStorage.setItem("todoList", JSON.stringify(this.todos));
    },
  },
};
</script>
<style>
@import "../css/todo.css";
</style>