import { createRouter, createWebHistory } from "vue-router";
import HomeVue from "./pages/Home.vue";
import QuestionVue from "./pages/Question.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeVue,
    },
    {
      path: "/question",
      name: "Question",
      component: QuestionVue,
    },
  ],
});

export default router;
