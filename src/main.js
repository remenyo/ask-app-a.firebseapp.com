import Vue from 'vue';
import './plugins/vuetify';
import VueAnalytics from 'vue-analytics';
import Adsense from 'vue-google-adsense/dist/Adsense.min';
import VS2 from 'vue-script2';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';

Vue.use(VS2);
Vue.use(Adsense);
Vue.use(VueAnalytics, {
  id: 'UA-135463315-2',
  debug: {
    sendHitTask: process.env.NODE_ENV === 'production',
  },
  router,
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
