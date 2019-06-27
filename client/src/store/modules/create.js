import * as actionApi  from '@/api/create'

const createProduct = {
  state: {
    listData: []
  },

  mutations: {
    GET_DATA: (state, listAdmin) => {
      state.listData = listAdmin
    }
  },

  actions: {
    async createNew({ commit }, data) {
      try {
        const listData = await actionApi.create(data)
        commit('GET_DATA', listData.data)
      } catch(err) {
        return err
      }
    }
  }
}
export default createProduct
