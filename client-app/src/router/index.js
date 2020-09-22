import Vue from "vue";
import VueRouter from "vue-router";
import store from '../store/'
import Home from "../views/Home.vue";
import CreateHome from "../views/CreateHome.vue";
import Login from "../views/Login.vue";
import Registration from "../views/Registration.vue";
import ProductPage from "../views/ProductPage.vue";
import Map from "../views/Map.vue";
import Expe from "../components/Expe.vue";

import Cookie from 'js-cookie'

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/registration",
    name: "Registration",
    component: Registration,
  },
  {
    path: "/",
    name: "Home",
    component: Home,
    async beforeEnter(to, from, next) {
      await store.dispatch('pick/getPick')
      next()
    }
  },
  {
    path: "/create-home",
    name: "CreateHome",
    component: CreateHome
  },
  {
    path: "/rooms/:id",
    name: "ProductPage",
    component: ProductPage,
    async beforeEnter(to, from, next) {
      const storeHome = store.getters['home/home']
      if(storeHome._id !== to.params.id) {
        const home = await store.dispatch('home/getHome', { id: to.params.id})
        await store.dispatch('home/setHome', { home })
      }
      next()
    }
  },
  {
    path: "/map",
    name: "Map",
    component: Map,
    children: [
      {
        path: "expe/:id",
        component: Expe,
        name: "Expe"
      },
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

// eslint-disable-next-line
router.beforeEach((to, from, next) => {
  const publicPages = ['Login', 'Registration', 'Home', 'ProductPage', 'Map']
  const authRequired = !publicPages.includes(to.name);
  const loggedIn = Cookie.get('session_id')

  if(authRequired && !loggedIn) {
    next('/login')
  } else {
    next();
  }
})

export default router;
