<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addItem="addTodo"></TodoInput>
    <TodoList v-bind:items="todoItems" v-on:removeItem="removeTodo"></TodoList>
    <TodoFooter v-on:clearAll="removeAll"></TodoFooter>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
  name: 'app',
  data() {
    return {
      todoItems: []
    }
  },
  components: {
    // HelloWorld,
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter
  },
  methods:{
    addTodo(todoItem) {
      localStorage.setItem(todoItem, todoItem)
      this.todoItems.push(todoItem)
    },
    removeTodo(todoItem, index){
      localStorage.removeItem(todoItem)
      this.todoItems.splice(index, 1)
    },
    removeAll(){
      localStorage.clear()
      this.todoItems = []
    }
  },
  created(){
    if(localStorage.length > 0){
      for(let i=0; i<localStorage.length; i++){
        this.todoItems.push(localStorage.key(i))
      }
    }
  },
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */

body {
  text-align: center;
  background-color: #F6F6F6;
}

input {
  border-style: groove;
  width: 200px;
}

button {
  border-style: groove;
}

.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
