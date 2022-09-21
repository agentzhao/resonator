import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/youtube",
      name: "youtube",
      component: () => import("../views/Youtube.vue"),
    },
    {
      path: "/spotify",
      name: "spotify",
      component: () => import("../views/Spotify.vue"),
    },
  ],
});

export default router;
