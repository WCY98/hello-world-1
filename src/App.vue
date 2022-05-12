<template>
  <containerCom /> 
  <toDoList></toDoList>
  <toDoList2/>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
//import watchCom from './components/watch-example.vue'
import toDoList2 from './components/ToDoList2.vue'
import containerCom from './components/containerCom.vue'

export default {
  name: 'App',
  components: {
//    HelloWorld
//  watchCom,
  containerCom,
  toDoList2,
 //  toDoList
  }
}
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
