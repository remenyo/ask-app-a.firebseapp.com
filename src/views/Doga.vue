<template>
  <v-layout column>
    <h1 class="heading-1 mb-3">
      <span class="corn">App-a</span> megmondja
    </h1>
    <v-card class="pa-3">
      <h2 class="heading-2">1. Dolgozat típusa / nehézsége</h2>
      <h3 class="my-4 heading-3">1 = Nem mondtak semmit, csak úgy tanuljak órára
        <br>2 = A tanár azt mondta lehet hogy írunk
        <br>3 = A tanár azt mondta, hogy biztos pár ember dogát fog írni/felel
        <br>4 = Azt mondta a tanár, mindenki írni fog dolgozatott
        <br>5 = Témazáró lesz
      </h3>
      <v-slider
        class="mb-3 px-4"
        color="accent"
        always-dirty
        max="5"
        min="1"
        thumb-label
        ticks
        :value="hardness"
      ></v-slider>
    </v-card>
    <v-checkbox label="label" v-model="value" value="value"></v-checkbox>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      hardness: 1,
      active: "Start",
      tabs: [
        {
          name: "Start",
          icon: "home",
          route: "/"
        },
        {
          name: "Dolgozat",
          icon: "library_books",
          route: "/doga"
        }
      ]
    };
  }
};
</script>
