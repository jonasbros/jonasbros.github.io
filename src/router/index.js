import { createRouter, createWebHashHistory } from 'vue-router';
import Home from './../views/Home';
import Work from './../views/Work';
import About from './../views/About';
import Contact from './../views/Contact';

const routes = [
  {
    name: 'Home',
    path: '/',
    component: Home,
    meta: {
      title: 'Ping!',
    }
  },
  {
    name: 'Work',
    path: '/work',
    component:  Work,
    meta: {
      title: 'Work',
    }
  },
  {
    name: 'About',
    path: '/about',
    component:  About,
    meta: {
      title: 'About',
    }
  },
  {
    name: 'Contact',
    path: '/contact',
    component:  Contact,
    meta: {
      title: 'Contact',
    }
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    setTimeout( () => {
      document.getElementById('app').scrollIntoView();
    }, 750 );
  }
});

router.afterEach((to) => {
  if (to.meta && to.meta.title) {
    document.title = to.meta.title;
  }

  let nav = document.querySelector('nav');
  let hamburger_menu = document.querySelector('.hamburger');
  let close = document.querySelector('.close');

  setTimeout(() => {
    close.classList.add('active');
    hamburger_menu.classList.remove('active');
    nav.classList.remove('mobile__active');
    nav.classList.remove('fadeout');
  }, 1000);
});

export default router;
