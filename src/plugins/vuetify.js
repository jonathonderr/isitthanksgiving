import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#000000", // #E53935
        secondary: "#FFFFFF", // #FFCDD2
      }
    }
  }
});
