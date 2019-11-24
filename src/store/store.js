import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  // repetitions: 5,
  state: {
    lexemes: {
      count: 0
    },
    lastViewedLexeme: {
      elId: ''
    },
    lexemesMaxCount: 3,
    yandexTranslateApiKey: 'trnsl.1.1.20181030T164747Z.50350640be185f5d.a9c2d0892171111c7027edd85669141908d3301a'
  },
  getters: {
    lexemes (state) {
      return state.lexemes
    },
    lastViewedLexeme (state) {
      return state.lastViewedLexeme
    }
  },
  mutations: {
    updateLexemes (state, el) {
      if (el.id in state.lexemes) {
        if (state.lexemes[el.id].repeated === state.lexemesMaxCount) {
          state.lexemes[el.id].repeated = 0
        } else {
          state.lexemes[el.id].repeated += 1
        }
      } else {
        state.lexemes[el.id] = {lexeme: el.id, repetitions: 5, repeated: 1}
      }
      state.lastViewedLexeme.elId = el.id
      state.lexemes['count'] += 1
    }
  }
})
