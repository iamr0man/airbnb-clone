import { DataApi} from '../../services/index'

export default {
  namespaced: true,
  state: {
    requests: [],
  },
  mutations: {
    SET_REQUESTS(state, payload) {
      state.requests = payload
    }  
  },
  actions: {
    async getRequests({ commit }) {
      const { data } = await DataApi.getRequests();
      if(data){
        commit('SET_REQUESTS', data)
      }
    },
    async createRequest({ commit }, {requestFields}) {
      const { data } = await DataApi.createRequest(requestFields)
      if(data){
        commit('SET_REQUESTS', data)
      }
    },
    // eslint-disable-next-line
    async updateRequest({ commit }, { id, requestFields }) {
      return await DataApi.updateRequest(id, requestFields)
      // if(data) {
      //   commit('SET_REQUEST', data)
      // }
    }
  },
  getters: {
    requests: state => state.requests,
  }
}