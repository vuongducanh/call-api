import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import read from './modules/read'

const store = new Vuex.Store({
  modules: {
    read
  }
})

export default store

