/* eslint-disable no-param-reassign */
import Vue from 'vue';
import Vuex from 'vuex';
import firebase from 'firebase/app';
import 'firebase/database';
import axios from 'axios';
import VuexPersistence from 'vuex-persist';
import localforage from 'localforage';

const config = {
  apiKey: 'AIzaSyD_2loigkytg-nwnnkjQl0eik382rJm7HU',
  databaseURL: 'https://ask-app-a.firebaseio.com',
  projectId: 'ask-app-a',
  messagingSenderId: '923505312668',
};

firebase.initializeApp(config);

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [new VuexPersistence({ storage: localforage }).plugin],
  state: {
    user: null,
    res: null,
    chance: 2,
    showedQuests: {
      0: [2, 3], // 0, 1,
      1: [2, 3, 4], // 0, 1,
      2: [6, 7, 8], // 0, 1,
      3: [4, 6, 7, 8], // 0, 1,
      4: [4, 6, 7, 8, 9], // 0, 1,
      5: [2, 3, 4, 5, 7, 8, 9], // 0, 1,
    },
    chancePercents: [10, 25, 40, 60, 80, 50],
    qList: [
      {
        q: 'Mi a tanár neme?',
        a: ['férfi', 'nő'],
        w: 0,
      },
      {
        q: 'Hanyadik órában írnátok?',
        a: ['0.', '1.', '2.', '3.', '4.', '5.', '6.', '7.', '8.', '9.'],
        w: [-1, -1, 0, 0, 0, 0, 0, -1, -2, -2],
      },
      {
        q: 'Régen írtál dolgozatot?',
        a: ['igen', 'nem'],
        w: [2, 0],
      },
      {
        q: 'Milyen kedve volt a tanárnak múlt órán?',
        a: ['rossz', 'jó'],
        w: [2, 0],
      },
      {
        q: 'Mennyire tudod a tananyagot?',
        a: ['semmenyire', 'mindent vágok'],
        w: [2, -1],
      },
      {
        q: 'Mennyi jegyed van a tantárgyból?',
        a: ['kevés', 'sok'],
        w: [2, 0],
      },
      {
        q: 'Milyennek tartod a jegyeidet?',
        a: ['Rossz', 'Tökéletes'],
        w: [2, -2],
      },
      {
        q: 'Ez előtt tanultál már valamit a tananyagból?',
        a: ['nem', 'igen'],
        w: [2, -2],
      },
      {
        q: 'Tudsz puskázni vagy le tudsz valakit lesni?',
        a: ['nem', 'sima ügy'],
        w: [2, -2],
      },
      {
        q: 'Esszé / kifejtős feladat lesz, vagy csak feleletválasztós?',
        a: ['eszzé', 'tippmix'],
        w: [1, 0],
      },
    ],
    savedRes: [],
  },
  actions: {
    firebaseUpdateContent({ commit }) {
      const connectedRef = firebase.database().ref('.info/connected'); connectedRef.on('value', (snap) => {
        if (snap.val() === true) {
          firebase.database().ref().once('value', (snapshot) => {
            commit('FIREBASE_UPDATE_CONTENT', snapshot.val());
          });
        }
      });
    },
    examHappened({ commit, state }, payload) {
      const filled = [];
      for (const i of state.savedRes[payload[0]].res) {
        switch (i) {
          case null:
            filled.push([0, 0]);
            break;
          case 0:
            if (payload[1]) { filled.push([1, 0]); break; } else { filled.push([0, -1]); break; }
          default:
            if (payload[1]) { filled.push([-1, 0]); break; } else { filled.push([0, 1]); break; }
        }
      }
      axios.post('https://us-central1-ask-app-a.cloudfunctions.net/api', {
        payload: filled,
      })
        .then((response) => { console.log(response); commit('DEL_SAVED', payload); })
        .catch((error) => {
          console.log(error);
        });
      commit('DEL_SAVED', payload);
    },
  },
  mutations: {
    UPDATE_RES(state, res) {
      state.res = res;
    },
    SAVE_RES(state) {
      state.savedRes.push({
        chance: state.chance,
        res: state.res,
        date: Date.now(),
      });
    },
    USER_ALTER(state, usr) { state.user = usr; },
    UPDATE_CHANCE(state, payload) { state.chance = payload; },
    DEL_SAVED(state, payload) {
      state.savedRes.splice(payload, 1);
    },
    FIREBASE_UPDATE_CONTENT(state, payload) {
      state.qList = payload.qList;
      state.chancePercents = payload.chancePercents;
      state.showedQuests = payload.showedQuests;
    },
  },
});
