import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Car from "../views/Car.vue";
import Cars from "../views/Cars.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,

  },
  {
    path: "/cars",
    name: "Cars",
    component: Cars,
    children: [],
  },
  { path: "/cars/:carId", name: "Car", component: Car },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import(/* webpackChunkName: "auth" */ "../views/Login.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
