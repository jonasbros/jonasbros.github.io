import { createApp } from 'vue';
import App from './App.vue';
import SiteFooter from './components/SiteFooter.vue';
import SentModal from './components/SentModal.vue';
import Pointer from './components/Pointer.vue';
import PageTransition from './components/PageTransition.vue';

import router from './router';


createApp(App)
    .component('PageTransition', PageTransition)
    .component('Pointer', Pointer)
    .component('SentModal', SentModal)
    .component('SiteFooter', SiteFooter)
    .use(router)
    .mount('#app')
