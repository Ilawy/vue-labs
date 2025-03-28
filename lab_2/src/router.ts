import {
  createMemoryHistory,
  createRouter,
  createWebHistory,
  RouteRecordRaw,
} from "vue-router";

import Home from "./views/Home.vue";
import Cart from "./views/Cart.vue";
import New from "./views/New.vue";
import Details from "./views/Details.vue";

const routes: RouteRecordRaw[] = [
  { path: "/", component: Home },
  { path: "/products/new", component: New },
  { path: "/products/:id", component: Details },
  { path: "/cart", component: Cart },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});


