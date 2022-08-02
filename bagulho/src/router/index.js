import { createRouter, createWebHistory } from "vue-router";
import MoreView from "@/views/MoreView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: "more",
      path: "/more",
      component: MoreView,
    },
  ],
});

export default router;
