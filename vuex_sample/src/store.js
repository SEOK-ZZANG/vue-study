import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        counter: 0
    },

    getters: {
        getCounter(state) {
            return state.counter;
        }
    },

    actions: {
        addCounter(context) {
            return context.commit('addCounter')
        },
        subCounter(context) {
            return context.commit('subCounter')
        },
        asyncIncrement(context, payload) {
            return setTimeout(() => {
                context.commit('increment', payload.by)
            }, payload.duration)
        },
        asyncDecrement(context, payload) {
            return setTimeout(() => {
                context.commit('decrement', payload.by)
            }, payload.duration)
        }
    },

    mutations: {
        addCounter(state, payload) {
            return state.counter++
        },
        subCounter(state, payload) {
            return state.counter--
        },
        increment(state, payload){
            return state.counter = state.counter + payload
        },
        decrement(state, payload){
            return state.counter = state.counter - payload
        }
    }
});