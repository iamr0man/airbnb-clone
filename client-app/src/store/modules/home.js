import { HomeApi } from '../../services/index'

export default {
  namespaced: true,
  state: {
    home: {}
  },
  mutations: {
    SET_HOME(state, payload) {
      state.home = payload
    },
  },
  actions:{
    async getHome({ commit }, { id }) {
      const { data } = await HomeApi.getHome(id);
      if(data){
        commit('SET_HOMES', data)
      }
    },
    // eslint-disable-next-line
    async getPhoto({ commit }, {formData}) {
      return await HomeApi.getPhoto(formData);
    },
    async createHome({ commit }, {title, shortDescription, description, preview}) {
      const { data } = await HomeApi.createHome(title, shortDescription, description, preview);
      if(data){
        commit('SET_HOME', data)
      }
    },
  },
  getters: {
    currentHome: state => state.home,
  }
}
