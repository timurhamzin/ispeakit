import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  // repetitions: 5,
  state: {
    lexemes: [
      { name: 'This', repetitions: 5 }
    ]
  }
})
