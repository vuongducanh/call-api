import * as actionApi  from '@/api/read'

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
    async getAdmin({ commit }) {
      try {
        const listData = await actionApi.get()
        console.log(listData.data)
        commit('GET_ADMIN', listData.data)
      } catch(err) {
        return err
      }
    }
  }
}
export default user
