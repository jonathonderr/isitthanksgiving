<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <router-link to="/">
        <v-btn
            href=""
            target="_blank"
            text
            x-large
        >
          <div class="d-flex align-center">
            <v-img
              alt="Clink Logo"
              class="shrink mr-2"
              contain
              src="./assets/logo.png"
              transition="scale-transition"
              width="40"
            />
            <h2>Clink</h2>
          </div>
        </v-btn>
      </router-link>

      <v-spacer></v-spacer>

      <router-link to="/privacy">
        <v-btn
          href=""
          target="_blank"
          text
        >
          <span class="mr-2">Privacy Policy</span>
          <v-icon>mdi-open-in-new</v-icon>
        </v-btn>
      </router-link>
    </v-app-bar>

    <v-main class="background-color">
      <router-view></router-view>
    </v-main>
    <v-footer
      color="gray"
      padless
    >
      <v-row
        justify="center"
        no-gutters
      >
        <v-col
          class="grey darken-4 py-10 white--text"
          cols="12"
        >
          <v-row align="center" justify="center">
            Want to reach out to us?
          </v-row>
          <v-row align="center" justify="center">
            <a href="mailto:">support@clinkconnect.app</a>
          </v-row>
        </v-col>
     </v-row>
   </v-footer>
  </v-app>
</template>

<script>
// import Home from './components/home.vue'

export default {
  name: 'Clink Connect',

  components: {
    // Home,
  },

  data: () => ({
    //
  }),
  computed: {

  },
  methods: {
    isMobile() {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    }
}
};
</script>

<style scoped>
 .debug-ui {
   background-color: red;
 }

 .background-color {
   background-color: #E9EAE9;
 }

 .mockup {
    height: 85vh;
 }
</style>
