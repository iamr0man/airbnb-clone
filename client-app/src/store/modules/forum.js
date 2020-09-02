import { ForumApi } from '../../services/index'

export default {
  namespaced: true,
  state: {
    post: {},
    posts: [],
  },
  mutations: {
    SET_POSTS(state, payload) {
      state.posts = payload
    },
    SET_POST(state, payload) {
      state.post = payload
    },
  },
  actions:{
    async getPosts({ commit }) {
      const { data } = await ForumApi.getPosts();
      if(data){
        commit('SET_POSTS', data)
      }
    },
    // eslint-disable-next-line
    async getPhoto({ commit }, {formData}) {
      return await ForumApi.getPhoto(formData);
    },
    async createPost({ commit }, {title, shortDescription, description, preview}) {
      const { data } = await ForumApi.createPost(title, shortDescription, description, preview);
      if(data){
        commit('SET_POST', data)
      }
    },
  },
  getters: {
    posts: state => state.posts,
    post: state => state.post,
  }
}