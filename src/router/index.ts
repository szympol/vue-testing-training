import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Store from "../views/Store.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/dealer",
      name: "dealer",
      component: () => import("../views/Dealer.vue"),
    },
    {
      path: "/store",
      name: "store",
      component: Store,
    },
  ],
});

export default router;
