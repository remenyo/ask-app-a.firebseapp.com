<template>
  <v-app dark>
    <v-toolbar
      tabs
      color="#6500A0dd"
      app
      dense
      scroll-off-screen
    >
      <v-toolbar-side-icon
        v-if="$vuetify.breakpoint.mdAndUp"
        @click="drawer=!drawer"
      />
      <v-toolbar-title
        class="corn select_none mr-5"
        style="cursor: pointer"
        @click="$router.push('/')"
      >
        App-A!
      </v-toolbar-title>
      <v-toolbar-items>
        <v-tabs
          v-if="$vuetify.breakpoint.mdAndUp"
          color="transparent"
        >
          <v-tabs-slider />
          <v-tab
            v-for="item in links"
            :key="item.route"
            exact
            replace
            :to="item.route"
            ripple
          >
            <v-icon>{{ item.icon }}</v-icon>
            &nbsp;
            {{ item.title }}
          </v-tab>
        </v-tabs>
      </v-toolbar-items>
    </v-toolbar>
    <v-navigation-drawer
      v-if="$vuetify.breakpoint.mdAndUp"
      v-model="drawer"
      app
      flat
      absolute
    >
      <v-list class="pa-1">
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title
              class="corn center select_none"
              style="font-size: 200%"
            >
              App-a!
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

      <v-list>
        <v-list-tile
          v-for="item in links"
          :key="item.title"
          @click="$router.push(item.route)"
        >
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
      <v-container
        fluid
        fill-height
      >
        <router-view />
      </v-container>
    </v-content>
    <v-bottom-nav
      app
      shift
      fixed
      mandatory
      :active.sync="bottomNav"
      :value="!$vuetify.breakpoint.mdAndUp"
      color="primary"
    >
      <v-btn
        v-for="(i,key) in links"
        :key="key"
        :ripple="false"
        color="light"
        flat
        :value="i.route"
      >
        <span>{{ i.title }}</span>
        <v-icon>{{ i.icon }}</v-icon>
      </v-btn>
    </v-bottom-nav>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      tabs: null,
      drawer: false,
      links: [
        {
          title: 'Kezdőlap',
          icon: 'home',
          route: '/',
        },
        {
          title: 'Lesz dolgozat?',
          icon: 'library_books',
          route: '/doga',
        },
        {
          title: 'Az alkalmazásról',
          icon: 'info',
          route: '/about',
        },
      ],
    };
  },
  computed: {
    bottomNav: {
      get() {
        return this.$route.path;
      },
      set(val) {
        this.$router.push(val);
      },
    },
    upperNav() {
      return this.$route.path;
    },
  },
};
</script>
<style>
@import url(./assets/common.css);

/* .slide-enter-active {
  animation-name: move 3s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes move {
  from {
    clip: rect(200px, 200px, 200px, 200px);
    top: 50px;
  }
  to {
    clip: auto;
    top: 0px;
  }
} */
</style>
