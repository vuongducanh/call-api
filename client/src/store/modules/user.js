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
      state.listData = listUser
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
        console.log('listData = ', listData.data);
        
        // commit('CREATE_USER', listData.data)
      } catch(err) {
        return err
      }
    }
  }
}
export default user
