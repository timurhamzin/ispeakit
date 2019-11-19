import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  // repetitions: 5,
  state: {
    lexemes: {
      count: 0
    }
  },
  getters: {
    lexemes (state) {
      return state.lexemes
    }
  },
  mutations: {
    updateLexemes (state, el) {
      if (el.id in state.lexemes) {
        state.lexemes[el.id].repeated += 1
      } else {
        state.lexemes[el.id] = {lexeme: el.id, repetitions: 5, repeated: 0}
      }
      state.lexemes['count'] += 1
    }
  }
})
