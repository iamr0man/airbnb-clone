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
    async createRequest({ commit }, {host_id, home, date, guests, money}) {
      const { data } = await DataApi.createRequest(host_id, home, date, guests, money)
      if(data){
        commit('SET_REQUESTS', data)
      }
    }
  },
  getters: {
    requests: state => state.requests,
  }
}