import { createWebHashHistory, createRouter } from "vue-router";

import HomeView from "./views/HomeView.vue";
import ResumeView from "./views/ResumeView.vue";

const routes = [
  { path: '/', component: HomeView },
  { path: '/resume', component: ResumeView },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router