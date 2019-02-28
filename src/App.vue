<template>
  <v-app dark>
    <v-toolbar tabs color="primary" app dense scroll-off-screen>
      <v-toolbar-side-icon v-if="$vuetify.breakpoint.mdAndUp" @click="drawer=!drawer"></v-toolbar-side-icon>

      <v-toolbar-title
        class="corn select_none"
        style="cursor: pointer"
        @click="$router.push('/')"
      >App-A!</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-tabs
        align-with-title
        slot="extension"
        v-if="$vuetify.breakpoint.mdAndUp"
        color="transparent"
      >
        <v-tabs-slider></v-tabs-slider>
        <v-tab ripple v-for="item in links" :key="item.route" @click="$router.push(item.route)">
          <v-icon>{{ item.icon }}</v-icon>
          &nbsp;
          {{ item.title }}
        </v-tab>
      </v-tabs>
    </v-toolbar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list class="pa-1">
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title class="corn center select_none" style="font-size: 200%">App-a!</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

      <v-list>
        <v-list-tile v-for="item in links" :key="item.title" @click="$router.push(item.route)">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-content>
      <v-container fluid fill-height>
        <router-view/>
      </v-container>
    </v-content>

    <v-bottom-nav app shift fixed :active.sync="bottomNav" :value="!$vuetify.breakpoint.mdAndUp">
      <v-btn v-for="(i,key) in links" :key="key" color="#d88cff" flat :value="i.route">
        <span>{{i.title}}</span>
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
      drawer: null,
      links: [
        {
          title: "Kezdőlap",
          icon: "home",
          route: "/"
        },
        {
          title: "Lesz dolgozat?",
          icon: "library_books",
          route: "/doga"
        },
        {
          title: "Az alkalmazásról",
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
    },
    upperNav() {
      return this.$route.path;
    }
  }
};
</script>
<style>
@import url(./assets/common.css);
</style>
