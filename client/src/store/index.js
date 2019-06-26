import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import create from './modules/create'

const store = new Vuex.Store({
  modules: {
    create
  }
})

export default store

