import * as actionApi  from '@/api/user'

const user = {
  state: {
    listData: []
  },

  mutations: {
    GET_ADMIN: (state, listAdmin) => {
      state.listData = listAdmin
    },

    CREATE_USER: (state, listUser) => {
      state.listData.unshift(listUser)
    }
  },

  actions: {
    async getAdmin({ commit }) {
      try {
        const listData = await actionApi.get()
        commit('GET_ADMIN', listData.data)
      } catch(err) {
        return err
      }
    },

    async createNew({ commit }, data) {
      try {
        const listData = await actionApi.create(data)
        commit('CREATE_USER', listData.data.data[0])
      } catch(err) {
        return err
      }
    },

    async removeUser(_, id) {
      try {
        await actionApi.remove(id)
      } catch(err) {
        return err
      }
    },

    async updateUser({commit}, params) {
      try {
        await actionApi.update(params.id, params)
      } catch(err) {
        return err
      }
    }
  }
}
export default user
