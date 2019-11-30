import Vue from 'vue'
import Vuex from 'vuex'
import {translate} from '../utils.js'
import config from '../config.js'
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
    lexemesMaxCount: 3
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
      if (!('transl' in state.lexemes[el.id])) {
        translate(state.lexemes[el.id]['lexeme'], config.FROMLANG, config.TOLANG, true).then(
          translResponse => {
            if (translResponse) {
              state.lexemes[el.id]['transl'] = translResponse.data.text
              state.lexemes['count'] += 1
            }
          }
        )
      }
      state.lastViewedLexeme.elId = el.id
      state.lexemes['count'] += 1
    }
  }
})
