import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import HiddenView from "../views/HiddenView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/hidden.do",
    name: "hidden",
    component: HiddenView,
  },
  {
    path: "/board.do",
    name: "board",
    component: () => import("../views/boardView.vue"),
  },
  {
    path: "/board.do/:key",
    name: "boardDetail",
    component: () => import("../views/boardDetailView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  console.log("--------beforeEach start--------");
  console.log("to", to);
  console.log("from", from);
  console.log("--------beforeEach end--------");
  next();
});

router.afterEach((to, from) => {
  console.log("--------afterEach start--------");
  console.log("to", to);
  console.log("from", from);
  console.log("--------afterEach end--------");
});

export default router;
