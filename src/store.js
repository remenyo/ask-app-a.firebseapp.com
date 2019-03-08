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
    chance: 2,
    weights: [[0, 0], [0, -2], [2, 0], [2, 0], [2, -1], [2, 0], [2, -2], [2, -2], [2, -2], [1, 0]],
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
      for (const i of state.savedRes[payload.i].res) {
        switch (i) {
          case null:
            filled.push([0, 0]);
            break;
          case 0:
            if (payload.examHappened) { filled.push([1, 0]); break; } else { filled.push([0, -1]); break; }
          default:
            if (payload.examHappened) { filled.push([-1, 0]); break; } else { filled.push([0, 1]); break; }
        }
      }
      const send = payload.data;
      send.res = filled;
      send.examHappened = payload.examHappened;
      console.log(send);
      axios.post('https://ask-app-a.firebaseapp.com/updateweights', {
        payload: send,
      })
        .then((response) => { console.log(response); commit('DEL_SAVED', payload); })
        .catch((error) => {
          console.log(error);
        });
      commit('DEL_SAVED', payload.i);
    },
  },
  mutations: {
    UPDATE_RES(state, res) {
      state.res = res;
    },
    SAVE_RES(state, payload) {
      state.savedRes.push({
        date: Date.now(),
        chanceIndex: payload.chance,
        initialChance: payload.chancePercent,
        endChance: payload.percent,
        res: payload.res,
      });
    },
    USER_ALTER(state, usr) { state.user = usr; },
    UPDATE_CHANCE(state, payload) { state.chance = payload; },
    DEL_SAVED(state, payload) {
      state.savedRes.splice(payload, 1);
    },
    FIREBASE_UPDATE_CONTENT(state, payload) {
      state.weights = payload.weights;
    },
  },
});
