import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import BooksView from '../views/BooksView.vue';
import AboutView from '../views/AboutView.vue';
import CategoriesView from '../views/CategoriesView.vue';
import AboutProfile from '../views/AboutProfile.vue';
import Login from '@/views/Login.vue';
import Register from '@/views/Register.vue';
import DetailBooks from "../components/DetailBooks.vue";

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
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/aboutprofile',
    name: 'aboutprofile',
    component: AboutProfile,
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
  },
  {
    path: '/books/:id',
    name: 'bookDetail',
    component: DetailBooks,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
