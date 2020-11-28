import { createRouter, createWebHistory } from 'vue-router';
import Home from './../views/Home';
import Work from './../views/Work';
import About from './../views/About';
import Contact from './../views/Contact';

const routes = [
  {
    name: 'Home',
    path: '/',
    component: Home
  },
  {
    name: 'Work',
    path: '/work',
    component:  Work
  },
  {
    name: 'About',
    path: '/about',
    component:  About
  },
  {
    name: 'Contact',
    path: '/contact',
    component:  Contact
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
