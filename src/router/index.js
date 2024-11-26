import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import BooksView from '../views/BooksView.vue';
import AboutView from '../views/AboutView.vue';
import CategoriesView from '../views/CategoriesView.vue';
<<<<<<< HEAD
import AboutProfile from '../views/AboutProfile.vue';
=======
import Login from '@/views/Login.vue';
import Register from '@/views/Register.vue';
>>>>>>> origin/main

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
<<<<<<< HEAD
    path: '/profile',
    name: 'profile',
    component: AboutProfile,
=======
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
>>>>>>> origin/main
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
