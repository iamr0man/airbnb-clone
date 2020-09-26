import { HomeApi } from '../../services/index'

export default {
  namespaced: true,
  state: {
    home: {},
    bookingData: {}
  },
  mutations: {
    SET_HOME(state, payload) {
      state.home = payload
    },
    SET_BOOKING_DATA(state, payload) {
      state.bookingData = payload
    },
  },
  actions:{
    // eslint-disable-next-line
    async getHome({}, { id }) {
      const { data } = await HomeApi.getHome(id);
      return data;
    },
    setHome({ commit }, { home }) {
      if(home) {
        commit('SET_HOME', home)
      }
    },
    setBookingData({ commit }, { data }) {
      if(data) {
        commit('SET_BOOKING_DATA', { ...data })
      }
    },
    // eslint-disable-next-line
    // async getPhoto({ commit }, {formData}) {
    //   return await HomeApi.getPhoto(formData);
    // },
    // async createHome({ commit }, {title, shortDescription, description, preview}) {
    //   const { data } = await HomeApi.createHome(title, shortDescription, description, preview);
    //   if(data){
    //     commit('SET_HOME', data)
    //   }
    // },
  },
  getters: {
    home: state => state.home,
    bookingData: state => state.bookingData
  }
}
