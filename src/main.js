import Vue from 'vue';
import './plugins/vuetify';
import firebase from 'firebase/app';
import VueAnalytics from 'vue-analytics';
// import Adsense from 'vue-google-adsense/dist/Adsense.min';
// import VS2 from 'vue-script2';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';

firebase.initializeApp({
  apiKey: 'AIzaSyD_2loigkytg-nwnnkjQl0eik382rJm7HU',
  authDomain: 'ask-app-a.firebaseapp.com',
  databaseURL: 'https://ask-app-a.firebaseio.com',
  projectId: 'ask-app-a',
  storageBucket: 'ask-app-a.appspot.com',
  messagingSenderId: '923505312668',
});
// Vue.use(VS2);
// Vue.use(Adsense);
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
