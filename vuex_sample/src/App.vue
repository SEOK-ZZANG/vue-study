<template>
  <!-- Parent (App.vue) Template -->
  <div id="app">
    Parent counter : {{ counter }} <br>
    <button @click="addCounter">+</button>
    <button @click="subCounter">-</button>
    
    <child></child>
  </div>
</template>



<script>
import Child from './components/Child.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'app',

  // data () {
  //   return {
  //     // data 속성 등록
  //     counter: 0
  //   }
  // },

  methods: {
    // 이벤트 추가
    addCounter() {
      this.$store.dispatch('addCounter')

    },
    subCounter() {
      this.$store.dispatch('subCounter')
    }
  },

  computed: {
    counter(){
      return this.$store.getters.getCounter
    }
  },

  components: {
    Child
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
