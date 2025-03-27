import {
  createMemoryHistory,
  createRouter,
  createWebHistory,
  RouteRecordRaw,
} from "vue-router";

import Home from "./views/Home.vue";
import Cart from "./views/Cart.vue";
import New from "./views/New.vue";

const routes: RouteRecordRaw[] = [
  { path: "/", component: Home },
  { path: "/products/new", component: New },
  { path: "/cart", component: Cart },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});



// interface ProductBase{
//   name: string;
//   price: number;
//   instock: number;
//   description: string;
//   image: string;
// }