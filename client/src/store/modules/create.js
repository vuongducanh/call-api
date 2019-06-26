import { get } from '@/api/create'

const user = {
  state: {
    listData: []
  },

  mutations: {
    GET_ADMIN: (state, listAdmin) => {
      state.listData = listAdmin
    }
  },

  actions: {
    getAdmin({ commit }) {
      return new Promise((resolve, reject) => {
        get().then(response => {
          const data = response.data
          commit('GET_ADMIN', data.data)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}
export default user
