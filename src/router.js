import Vue from 'vue';
import Router from 'vue-router';
import Start from './views/Start.vue';
import Doga from './views/Doga.vue';
import About from './views/About.vue';
import AuthSuccess from './components/AuthSuccess.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'start',
      component: Start,
    },
    {
      path: '/doga',
      name: 'doga',
      component: Doga,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    { path: '/success', component: AuthSuccess },
    { path: '*', redirect: '/' },
  ],
});
