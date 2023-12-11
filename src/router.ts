import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from './pages/Home.vue';
import About from './pages/About.vue';
import Schedule from './pages/Schedule.vue';

const routes: RouteRecordRaw[] = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/schedule', component: Schedule },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
