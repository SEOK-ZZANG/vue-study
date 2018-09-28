import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  // state: {
  //   contacts: [],
  //   pageNo: 0,
  //   pageSize: 0,
  //   totalCount: 0,
  // },
  // mutations: {
  //   initContacts(state, initData){
  //     state.contacts = initData.contacts
  //     state.pageNo = initData.pageno
  //     state.pageSize = initData.pagesize
  //     state.totalCount = initData.totalcount
  //   }
  // },
  // actions: {
  //   initContacts({ commit }){
  //     axios.get('http://sample.bmaster.kro.kr/contacts/')
  //     .then((response) => {
  //       commit ('initContacts', response.data)
  //     })
  //     .catch((ex) => {
  //       console.log('updatePhoto failed', ex);
  //     });
  //   }
  // },
  // getters: {
  //   getContacts(state) {
  //     return state.contacts
  //   }
  // }
})
