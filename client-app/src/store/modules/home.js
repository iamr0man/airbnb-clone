import { HomeApi } from '../../services/index'

export default {
  namespaced: true,
  state: {
    home: {},
    bookingData: {}
  },
  mutations: {
    SET_HOME(state, payload) {
      state.home = payload.home
    },
    SET_BOOKING_DATA(state, payload) {
      state.bookingData = payload.data
    },
  },
  actions:{
    // eslint-disable-next-line
    async getHome({}, { id }) {
      const { data } = await HomeApi.getHome(id);
      return data;
    },
    // eslint-disable-next-line
    async setBookedData({ commit }, { bookedData }) {
      const { data } = await HomeApi.updateHome(bookedData);
      return data
    }
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
