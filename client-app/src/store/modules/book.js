import { BookApi } from '../../services/index'

export default {
  namespaced: true,
  state: {
    book: {},
    books: [],
  },
  mutations: {
    SET_BOOKS(state, payload) {
      state.books = payload
    },
    SET_BOOK(state, payload) {
      state.book = payload
    },
  },
  actions:{
    async getBooks({ commit }) {
      const { data } = await BookApi.getBooks();
      if(data){
        commit('SET_BOOKS', data)
      }
    },
    async createBook({ commit }, {title, shortDescription, description, preview}) {
      const { data } = await BookApi.createBook(title, shortDescription, description, preview);
      if(data){
        commit('SET_BOOK', data)
      }
    },
  },
  getters: {
    books: state => state.books,
    book: state => state.book,
  }
}