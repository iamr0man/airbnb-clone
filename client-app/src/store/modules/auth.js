import Cookie from 'js-cookie'
import { UserApi } from "../../services/index";

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
      const session_id = Cookie.get('session_id') || {}
      const data = await UserApi.getUser(session_id)

      if(data) {
        commit('SET_USER', data)
      }
    },
    // eslint-disable-next-line
    async registration({ commit }, { email, name, password, passwordConfirmation}) {
      await UserApi.registration(email, name, password, passwordConfirmation)
    },
    // eslint-disable-next-line
    async logIn({ commit }, { email, password}){
      const data = await UserApi.logIn(email, password)
      if(data){
        // TODO success message
        // commit('SET_USER', data)
      }
    },
    // eslint-disable-next-line
    async logout({ commit }) {
      commit('SET_USER', {})
    }
  },
  getters: {
    user: state => state.user
  }
};
