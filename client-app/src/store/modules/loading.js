export default {
  namespaced: true,
  state: {
    loading: false,
  },
  mutations: {
    SET_LOADING(state, payload) {
      state.loading = payload
    },
  },
  actions:{
    setLoading({ commit, getters }) {
      commit('SET_LOADING', !getters.loading)
    }
  },
  getters: {
    loading: state => state.loading
  }
}
