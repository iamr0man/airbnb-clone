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
    async getPick({ dispatch, commit, getters }) {
      if(Object.keys(getters.pick).length === 0) {
        dispatch('loading/setLoading', {}, {root: true})

        const { data } = await PickApi.getPick();
        if(data){
          commit('SET_PICK', data)
        }

        dispatch('loading/setLoading', {}, {root: true})
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
