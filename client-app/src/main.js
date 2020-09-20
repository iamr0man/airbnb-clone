import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

import './assets/styles/fonts.css'

// require("dotenv").config();

// import * as VueGoogleMaps from "vue2-google-maps";
// Vue.use(VueGoogleMaps, {
//   load: { key: '' }
// });

Vue.config.productionTip = false;

(async () => {
  await store.dispatch('auth/getUser')
  new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
  }).$mount("#app");

})();
