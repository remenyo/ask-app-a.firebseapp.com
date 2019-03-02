/* eslint-disable no-param-reassign */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    res: null,
    chance: 3,
    chances: [10, 25, 40, 60, 80, 50],
    qList: [
      {
        q: 'Mi a tanár neme?',
        a: ['férfi', 'nő'],
        w: [0, 0],
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
  },
  mutations: {
    UPDATE_RES(state, res) {
      state.res = res;
    },
  },
  actions: {

  },
});
