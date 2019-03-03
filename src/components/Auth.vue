<template lang="html">
  <v-layout column align-center>
      <v-btn v-if="uid" color="warning" @click="logOut()">Kijelentkezés</v-btn>
    <div v-else id="firebaseui-auth-container"></div>
  </v-layout>
</template>

<script>
import { mapMutations } from "vuex";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseui from "firebaseui";
const config = {
  apiKey: "AIzaSyD_2loigkytg-nwnnkjQl0eik382rJm7HU",
  authDomain: "ask-app-a.firebaseapp.com",
  databaseURL: "https://ask-app-a.firebaseio.com",
  projectId: "ask-app-a",
  storageBucket: "ask-app-a.appspot.com",
  messagingSenderId: "923505312668"
};
export default {
  name: "auth",
  computed: {
    uid() {
      return this.$store.state.user.uid;
    }
  },
  mounted() {
    // const CLIENT_ID =      for one-tap login only, its beta is closed
    //   "923505312668-ch4gg97j7mu2qe6qr0foo3sm9tphj276.apps.googleusercontent.com";
    var uiConfig = {
      signInOptions: [
        // {
        //   provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        //   // Required to enable this provider in One-Tap Sign-up.
        //   authMethod: "https://accounts.google.com",
        //   // Required to enable ID token credentials for this provider.
        //   clientId: CLIENT_ID
        // },
        firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID, // remove this line on onetap
        {
          provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
          requireDisplayName: true
        }
      ]
      // credentialHelper: //watch for updates here: https://developers.google.com/identity/one-tap/web/
      //   CLIENT_ID && CLIENT_ID != "YOUR_OAUTH_CLIENT_ID"
      //     ? firebaseui.auth.CredentialHelper.GOOGLE_YOLO
      //     : firebaseui.auth.CredentialHelper.ACCOUNT_CHOOSER_COM
    };
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
    var loginUi = new firebaseui.auth.AuthUI(firebase.auth());
    loginUi.start("#firebaseui-auth-container", uiConfig);
  },
  updated() {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        USER_ALTER(user);
      }
    });
  },
  methods: {
    ...mapMutations([
      "USER_ALTER" // map `this.add()` to `this.$store.commit('increment')`
    ]),
    logOut() {
      firebase.auth().signOut();
      USER_ALTER();
      loginUi.start("#firebaseui-auth-container", uiConfig);
    }
  }
};
</script>

<style lang="css">
@import url(../../node_modules/firebaseui/dist/firebaseui.css);
</style>
