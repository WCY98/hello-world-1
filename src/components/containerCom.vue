<template>
  <div class="container">
    <input
      type="text"
      v-model="msg"
    >
    <button @click="create">Create</button>
    <TodoList
      :TodoLists="TodoLists"
    />
  </div>
</template>

<script>
import TodoList from './TodoList';
//import { ref } from "@vue/runtime-core";
// add unused comments
export default {
  components: {
    TodoList,
  },

  methods: {
    create(){
      console.log('in create ');
      let id = 4;
      id += 1;
      console.log('in create id',id );
      const next = { id, name: this.msg };
      this.TodoLists.push(next);
    }
     
    },
  data() {
   
   
    
    // const Delete = (idx) => {
    //   this.TodoLists = this.TodoLists.filter((r) => r.id !== idx);
    // }
    
    return {
      TodoLists: [
      { id: 1, name: 'cooking' },
      { id: 2, name: 'eating' },
      { id: 3, name: 'dancing' },
    ],
      
      //Delete: Delete()
    };
  }
}
</script>