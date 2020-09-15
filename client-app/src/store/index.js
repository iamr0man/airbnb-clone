import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import user from './modules/user'
import data from './modules/data'
import home from './modules/home'
import pick from './modules/pick'

export default new Vuex.Store({
  modules: {
    user,
    data,
    home,
    pick
  }
});
