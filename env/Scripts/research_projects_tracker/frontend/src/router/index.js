import { createRouter, createWebHistory } from 'vue-router';
import Chercheurs from '../components/Chercheurs.vue';
import Projets from '../components/Projets.vue';
import Publications from '../components/Publications.vue';

const routes = [
  { path: '/chercheurs', component: Chercheurs },
  { path: '/projets', component: Projets },
  { path: '/publications', component: Publications },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
