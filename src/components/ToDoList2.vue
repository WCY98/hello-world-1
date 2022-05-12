<template>
    <div id="todo-list-example" class="demo">
    <form v-on:submit.prevent="addNewTodo">
        <label for="new-todo">Add a todo</label>
        <input
        v-model="newTodoText"
        id="new-todo"
        placeholder="E.g. Feed the cat"
        />
        <button>Add</button>
    </form>
    <ul>
        <toDo
        v-for="(todo) in todos"
        v-bind:key="todo.id"
        v-bind:title="todo.title"
        
        ></toDo>
    </ul>
    </div>
</template>

<script>

import toDo from './toDo'

 export default {
    components: {
    toDo,
  },
  data() {
    return {
      newTodoText: '',
      todos: [
        {
          id: 1,
          title: 'Do the dishes'
        },
        {
          id: 2,
          title: 'Take out the trash'
        },
        {
          id: 3,
          title: 'Mow the lawn'
        }
      ],
      nextTodoId: 4
    }
  },
  methods: {
    addNewTodo() {
      this.todos.push({
        id: this.nextTodoId++,
        title: this.newTodoText
      })
      this.newTodoText = ''
    }
  }
}

</script>
