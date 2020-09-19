import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
// import Rooms from "../views/Rooms.vue";
import ProductPage from "../views/ProductPage.vue";
import Map from "../views/Map.vue";
import Expe from "../components/Expe.vue";
import Forum from "../views/Forum.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/rooms/:id",
    name: "ProductPage",
    component: ProductPage,
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
  },
  {
    path: "/forum",
    name: "Forum",
    component: Forum,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

// eslint-disable-next-line
// router.beforeEach((to, from, next) => {
//   const publicPages = ['/login', '/registration']
//   const authRequied = !publicPages.includes(to.path);
//   const loggeIn = localStorage.getItem('user')

//   if(authRequied && !loggeIn) {
//     next('/login')
//   } else {
//     next();
//   }
// })

export default router;
