<template>
  <v-app>
    <v-main class="background-color">
      <router-view fill-height class="debug-ui"></router-view>
    </v-main>
  </v-app>
</template>

<script>
// import Home from './components/home.vue'

export default {
  name: 'Is It Thanksgiving?',

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
   height: 100%;
 }

 .background-color {
   background-color: black;
   height: 100%;
 }

 .mockup {
    height: 85vh;
 }
</style>
