import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todoItems: [], // sample {id: 1, msg: 'msg'}
    lastID: 0
  },
  getters:{
    todoItems(state){
      return state.todoItems
    }
  },
  mutations: {
    initItems(state, items){
      let count = items.length
      state.lastID = count == 0 ? 0 : items[count - 1].id
      state.todoItems = items
    },
    addItem(state, item){
      state.lastID = item.id
      state.todoItems.push(item)
    },
    removeItem(state, id){
      state.todoItems = state.todoItems.filter(todoItem => todoItem.id != id)
    },
    removeItems(state){
      state.todoItems = []
    }
  },
  actions: {
    initItems({ commit }){
      let keys = []

      if(localStorage.length > 0){
        for(let i=0; i<localStorage.length; i++){
          keys.push(localStorage.key(i))
        }
      }
      let items = keys.sort((a,b) => a - b ).map(key => JSON.parse(localStorage.getItem(key)))
      commit('initItems', items)
    },
    addItem({ commit, state }, msg){
      let id = state.lastID + 1
      let item = {id, msg}

      localStorage.setItem(id, JSON.stringify(item))
      commit('addItem', item)
    },
    removeItem({commit}, id){
      localStorage.removeItem(id)
      commit('removeItem', id)
    },
    removeItems({commit}){
      localStorage.clear()
      commit('removeItems')
    }
  }
})
