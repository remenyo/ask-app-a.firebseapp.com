import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'start',
      component: () => import(/* webpackChunkName: "Start" */ './views/Start.vue'),
    },
    {
      path: '/doga',
      name: 'doga',
      component: () => import(/* webpackChunkName: "Doga" */ './views/Doga.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "Doga" */ './views/About.vue'),
    },
    { path: '**', redirect: '/' },
  ],
});
