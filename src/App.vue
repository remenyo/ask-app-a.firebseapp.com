<template>
  <v-app dark>
    <v-toolbar color="primary" app dense scroll-off-screen>
      <v-toolbar-title
        class="corn select_none"
        style="cursor: pointer"
        @click="$router.push('/')"
      >App-A!</v-toolbar-title>
    </v-toolbar>

    <v-content>
      <v-container fluid fill-height>
        <router-view/>
      </v-container>
    </v-content>
    <v-bottom-nav :active.sync="bottomNav" :value="true" absolute color="transparent">
      <v-btn v-for="(i,key) in links" :key="key" color="accent" flat :value="i.route">
        <span>{{i.show}}</span>
        <v-icon>{{i.icon}}</v-icon>
      </v-btn>
    </v-bottom-nav>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      active: null,
      links: [
        {
          show: "Start",
          icon: "home",
          route: "/"
        },
        {
          show: "Dolgozat",
          icon: "library_books",
          route: "/doga"
        },
        {
          show: "Az alkalmazásról",
          icon: "info",
          route: "/about"
        }
      ]
    };
  },
  computed: {
    bottomNav: {
      get() {
        return this.$route.path;
      },
      set(val) {
        this.$router.push(val);
      }
    }
  }
};
</script>
<style>
@import url(./assets/common.css);
</style>
