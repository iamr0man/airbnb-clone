import { PickApi } from '../../services/index'

export default {
  namespaced: true,
  state: {
    pick: {},
  },
  mutations: {
    SET_PICK(state, payload) {
      state.pick = payload
    },
  },
  actions:{
    async getPick({ commit }) {
      const { data } = await PickApi.getPicks();
      if(data){
        commit('SET_PICK', data)
      }
    },
    async createPick({ commit }, {title, shortDescription, description, preview}) {
      const { data } = await PickApi.createPick(title, shortDescription, description, preview);
      if(data){
        commit('SET_PICK', data)
      }
    },
  },
  getters: {
    pick: state => state.pick,
  }
}
