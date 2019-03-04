<template>
  <v-layout column align-center>
    <h1 class="heading-1 mb-3">
      <span class="corn">App-a</span> megmondja
    </h1>
    <v-btn class="mb-5" color="success" @click="openTab = 0">Kezdés</v-btn>
    <v-expansion-panel v-model="openTab" expand>
      <v-expansion-panel-content>
        <template v-slot:header>
          <h3>1. Lépés: Alapvető valószínűség</h3>
        </template>
        <v-divider/>
        <v-card class="pa-3">
          <h1 class="heading-1 mb-2">1. Lépés
            <br>Alapvető valószínűség
          </h1>
          <v-divider/>
          <h2 class="mt-2">A tanár...</h2>
          <h3 class="mt-2">1 = Nem mondott semmit, csak úgy tanuljak órára</h3>
          <h3 class="mt-3">2 = Azt mondta lehet hogy írunk</h3>
          <h3 class="mt-3">3 = Azt mondta hogy pár ember biztos fog dogát írni / felelni</h3>
          <h3 class="mt-3">4 = Azt mondta mindenki írni fog dolgozatot</h3>
          <h3 class="mt-3">5 = Azt mondta Témazáró lesz</h3>
          <h3 class="mt-3 mb-4">¯\_(ツ)_/¯ = Kihagynám a kérdést (50/50)
            <br>(ha szeretnéd látni az összes kérdést a következő lépésben, válaszd ezt)
          </h3>

          <v-layout justify-center column align-center>
            <v-btn-toggle v-model="chance" mandatory>
              <v-btn v-for="i in 5" :key="i" flat>
                <span class="corn mx-2" style="font-size:150%">{{ i }}</span>
              </v-btn>
              <v-btn flat style="font-size:120%">¯\_(ツ)_/¯</v-btn>
            </v-btn-toggle>
            <v-btn
              class="mt-5"
              color="accent"
              @click="openTab = 1; $vuetify.goTo(321,{
                duration: 300,
                offset: 50,
                easing: 'easeInOutQuad'
              })"
            >Tovább</v-btn>
          </v-layout>
        </v-card>
      </v-expansion-panel-content>
      <v-expansion-panel-content>
        <template v-slot:header>
          <h3>2. Lépés: Befolyásoló tényezők</h3>
        </template>
        <v-divider/>
        <v-card class="pa-3">
          <h1 class="heading-1 mb-2">2. Lépés
            <br>Befolyásoló tényezők
          </h1>
          <v-divider/>
          <template v-for="row in showedQuests[chance]">
            <h2 :key="row" class="mt-4">{{ qList[row].q }}</h2>
            <v-btn-toggle :key="row+'_btn'" v-model="res[row]" class="mt-1">
              <v-btn v-for="a in qList[row].a" :key="a">
                <span class="mx-2" style="font-size:130%">{{ a }}</span>
              </v-btn>
            </v-btn-toggle>
          </template>
          <br>
          <v-btn class="mt-5" color="accent" @click="openTab = 2;">Tovább</v-btn>
          <!-- <Adsense
            data-ad-client="ca-pub-6094772749025123"
            data-ad-slot="6844981012"
          />-->
        </v-card>
      </v-expansion-panel-content>
      <v-expansion-panel-content>
        <template v-slot:header>
          <h3>Eredmény</h3>
        </template>
        <v-divider/>
        <v-card class="pa-3">
          <h1 class="heading-1 center mb-2">Eredmény</h1>
          <v-divider/>
          <div class="center mt-5 corn" style="font-size:300%">{{ percent }}%</div>
          <div class="center my-2 mb-5" style="font-size:200%">{{ learnOrWhat }}</div>
          <v-alert class="mt-5" outline type="warning" :value="true" style="font-size:110%;">
            <span class="corn">App-a!</span>&nbsp;nyílvánvalóan csak egy szofisztikált tippelőgép.
            <br>Az hogy ő hülye, nem jogogsít fel téged is, hogy az legyél.
          </v-alert>
          <v-checkbox label="Kifejezetten lusta vagyok" v-model="lazyness"></v-checkbox>
          <v-btn class="mt-5" outline @click="openTab = 3;">Tovább & mentés</v-btn>
        </v-card>
      </v-expansion-panel-content>
      <v-expansion-panel-content>
        <template v-slot:header>
          <h3>Modell fejlesztése</h3>
        </template>
        <v-divider/>
        <v-card class="pa-3">
          <h1 class="heading-1 center mb-2">
            Pontosítsd &nbsp;
            <span class="corn">App-a!</span>&nbsp;-t!
          </h1>
          <v-divider/>
          <div class="center mt-5 corn" style="font-size:300%"/>
          <h3 class="center mb-3">
            Lehet, hogy {{ azOra }}
            <strong>{{ percent }}%</strong> nem pontos eredmény.
            <br>Szerencsére tudsz segítení:
          </h3>
          <ol>
            <li>Mentsd el az eredményedet a lenti mentés gombbal.</li>
            <li>Tanulj, (vagy ne 😉) a kérdéses órára. Dolgozat előtt ne ezzel az appal fecséreld az idődet.</li>
            <li>A kritikus óra után, (vagy a következő dolgozat előtt 😉) nyisd meg újra ezt az alkalmazást.</li>
            <li>Kattints a jobb felső gombra, hogy elmodhasd Appának, végül volt-e dolgozat.</li>
            <li>
              A következő kérdőív kitöltésnél már a kérdések frissített súlyozásával történik a kiszámított tipp, így dolgozatról dolgozatra tud fejlődni&nbsp;
              <span
                class="corn"
              >App-a!</span>
            </li>
          </ol>
          <v-btn
            class="mt-3"
            :disabled="noSendBtn"
            color="success"
            @click="SAVE_RES(); noSendBtn=true"
          >Mentés
            <v-icon class="select_none ml-2" v-if="noSendBtn" color="success">done</v-icon>
          </v-btn>
          <div v-if="noSendBtn">Újra mentéshez változtass a kérdőíven.</div>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
    <!-- <Adsense
            data-ad-client="ca-pub-6094772749025123"
            data-ad-slot="6844981012"
    />-->
  </v-layout>
</template>
<script>
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      lazyness: false,
      res: [],
      noSendBtn: false,
      openTab: null,
      chancePercents: null
    };
  },
  computed: {
    azOra() {
      if ((this.percent == 1) | (String(this.percent).substring(0, 1) == 5))
        return "az";
      return "a";
    },
    percent() {
      let chance = this.chancePercents[this.chance];
      const mod = [];
      for (const row of this.showedQuests[this.chance]) {
        if (this.res[row] == null) {
          mod.push(0);
          continue;
        }
        mod.push(this.qList[row].w[this.res[row]]);
      }
      if (mod.reduce((acc, curr) => acc + curr) == 0) return chance;
      const oszto = mod.reduce((acc, curr) => acc + Math.abs(curr), 0);
      let osztando;
      if (mod.reduce((acc, curr) => acc + curr) < 0) {
        osztando = chance;
      } else osztando = 100 - chance;
      chance += mod.reduce((acc, curr) => acc + (osztando / oszto) * curr, 0);
      if (this.lazyness) return Math.round(chance) - 20;
      return Math.round(chance);
    },
    learnOrWhat() {
      const val = this.percent;
      if (this.percent < 20) return "Nem kell tanulnod most";
      if (this.percent < 40) return "Nem biztos hogy kell tanulnod";
      if (this.percent < 50) return "Közel van az az 50%...";
      if (this.percent == 50)
        return "Ha App-a nem tudott dönteni, senki sem tud. Tanulj, az a biztos.";
      if (this.percent < 78) return "TaNuLáSbA mÉg NEm HaLT BeLe SeNKi";
      if (this.percent < 85) return "Nincs mese, tanulni kell.";
      return "Van ez így.";
    },
    chance: {
      get() {
        return this.$store.state.chance;
      },
      set(val) {
        this.UPDATE_CHANCE(val);
        this.noSendBtn = false;
      }
    },
    qList() {
      return this.$store.state.qList;
    },
    showedQuests() {
      return this.$store.state.showedQuests;
    }
  },
  watch: {
    res(val) {
      this.UPDATE_RES(val);
      this.noSendBtn = false;
    }
  },
  created() {
    this.chancePercents = this.$store.state.chancePercents;
    this.res = Array(this.qList.length).fill(null);
  },
  methods: {
    ...mapMutations([
      "UPDATE_RES",
      "UPDATE_CHANCE",
      "SAVE_RES" // map `this.add()` to `this.$store.commit('increment')`
    ])
  }
};
</script>
