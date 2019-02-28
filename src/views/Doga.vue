<template>
  <v-layout class="pa-3" column justify-center>
    <h1 class="heading-1">
      <span class="corn">App-a</span> megmondja
    </h1>
    <h2 class="mt-5 heading-2">1. Dolgozat típusa / nehézsége</h2>
    <h3 class="my-4 heading-3">1 = Röpdolgozat
      <br>2 = Bejelentett általános dolgozat
      <br>3 = Témazáró-szerű
      <br>4 = Konkrétan témazáró
      <br>5 = [valami nehéz téma kell ide]
    </h3>
    <v-slider color="primary" always-dirty max="5" min="1" thumb-label ticks value="hardness"></v-slider>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      hardness: null,
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
