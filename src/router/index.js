import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import BooksView from '../views/BooksView.vue';
import AboutView from '../views/AboutView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/books',
    name: 'books',
    component: BooksView,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
