<template>
  <v-layout class="pa-2" column>
    <transition-group name="slide">
      <v-card class="pa-2 ma-2 mb-3 elevation-5" v-for="(arr,i) in savedRes" :key="arr.date">
        <v-layout>
          <span class="mb-3 display-1">{{new Date(arr.date).toLocaleString('hu-HU')}}</span>
          <v-spacer></v-spacer>
          <v-btn icon left @click="DEL_SAVED(i)">
            <v-icon class="ma-0 pa-0" medium>delete_forever</v-icon>
          </v-btn>
        </v-layout>
        <h3>Volt dolgozat?</h3>
        <v-layout align-end>
          <v-spacer></v-spacer>
          <v-btn
            class="ml-0"
            color="success"
            @click="$store.dispatch('examHappened', [i,true])"
          >Igen</v-btn>
          <v-btn color="error" @click="$store.dispatch('examHappened', [i,false])">Nem</v-btn>
        </v-layout>
      </v-card>
    </transition-group>
  </v-layout>
</template>
<script>
import { mapMutations } from "vuex";

export default {
  computed: {
    savedRes() {
      return this.$store.state.savedRes;
    }
  },
  methods: {
    ...mapMutations(["DEL_SAVED"])
  }
};
</script>
<style>
@import url(../assets/common.css);
</style>
