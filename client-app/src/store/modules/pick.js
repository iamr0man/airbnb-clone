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
      const { data } = await PickApi.getPick();
      if(data){
        commit('SET_PICK', data)
      }
    },
    async createPick({ commit }, {discover, city, museum}) {
      const { data } = await PickApi.createPick(discover, city, museum);
      if(data){
        commit('SET_PICK', data)
      }
    },
  },
  getters: {
    pick: state => state.pick,
    discover: state => state.pick.discover,
    city: state => state.pick.city,
    museum: state => state.pick.museum,
  }
}