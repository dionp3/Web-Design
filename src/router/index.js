import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import BooksView from '../views/BooksView.vue';
import AboutView from '../views/AboutView.vue';
import CategoriesView from '../views/CategoriesView.vue';
import AboutProfile from '../views/AboutProfile.vue';

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
  {
    path: '/categories',
    name: 'categories',
    component: CategoriesView,
  },
  {
    path: '/profile',
    name: 'profile',
    component: AboutProfile,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
