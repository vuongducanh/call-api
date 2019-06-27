import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import read from './modules/read'
import create from './modules/create'

const store = new Vuex.Store({
  modules: {
    read,
    create
  }
})

export default store

