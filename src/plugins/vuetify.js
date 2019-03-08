import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import 'vuetify/src/stylus/app.styl';
import hu from 'vuetify/es5/locale/hu';

Vue.use(Vuetify, {
  iconfont: 'md',
  lang: {
    locales: { hu },
    current: 'hu',
  },
  theme: {
    primary: '#6A0080',
    accent: '#1976d2',
  },
});
