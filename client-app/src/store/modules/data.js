import { DataApi} from '../../services/index'
import router from '../../router/index'

export default {
  namespaced: true,
  state: {
    points: [],
  },
  mutations: {
    SET_POINTS(state, payload) {
      state.points = payload
    }  
  },
  actions: {
    async getPoints({ commit }) {
      const { data } = await DataApi.getPoints();
      if(data){
        commit('SET_POINTS', data)
      }
    },
    // eslint-disable-next-line
    async createPoint({ commit }, {latitude, longitude, title, describe, emoji}) {
      await DataApi.createPoint(latitude, longitude, title, describe, emoji)
    },
    // eslint-disable-next-line
    async likePoint({ commit }, {id}) {
      await DataApi.likePoint(id);
    },
    // eslint-disable-next-line
    async unlikePoint({ commit }, {id}) {
      await DataApi.unlikePoint(id);
    },
    // eslint-disable-next-line
    async deletePoint({ commit }, {id}) {
      await DataApi.deletePoint(id);
      router.push({name: "Map"})
    }, 
  },
  getters: {
    points: state => state.points,
  }
}