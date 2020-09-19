import { UserApi } from "../../services/index";
import setAuthToken from '../../plugins/setAuthToken'
import router from '../../router/index'

export default {
  namespaced: true,

  state: {
    user: {},
  },
  mutations: {
    SET_USER(state, payload) {
      state.user = payload;
    },
  },
  actions: {
    async getUser({ commit}){
      const data = await UserApi.getUser()
      if(data) {
        commit('SET_USER', data)
      }
    },
    // eslint-disable-next-line
    async registration({ commit }, { email, name, password}) {
      const { data } = await UserApi.registration(email, name, password)

      if(data) {
        // commit('SET_USER', data.user)
        localStorage.set('user', JSON.stringify(data.user))
        setAuthToken(data.token)
        router.push({ path: '/', name: "Home" })
      }
    },
    // eslint-disable-next-line
    async logIn({ commit }, { email, password}){
      const data = await UserApi.logIn(email, password)
      if(data){
        // commit('SET_USER', data)
        // TODO request to get user
      }
    },
    // eslint-disable-next-line
    logout({ commit }) {
      commit('SET_USER', {})
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      router.push('/login')
    }
  },
  getters: {
    user: state => state.user
  }
};
