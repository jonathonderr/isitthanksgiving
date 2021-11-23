import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#696698", // #E53935
        secondary: "#365691", // #FFCDD2
      }
    }
  }
});
