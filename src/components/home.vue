<template>
  <div class="thanksgivingyeet">
    <v-container fill-height fluid>
      <v-row align="center"
          justify="center"
      >
          <v-col>
            <h1>{{ isIt ? 'YES' : 'NO' }}</h1>
          </v-col>
      </v-row>
      <v-row align="center"
        justify="center"
      >
        <v-col class="d-flex flex-column justify-space-between align-center">
          <v-img
            aspect-ratio="1"
            height="350"
            width="350"
            max-height="350"
            max-width="350"
            :src="isIt ? getSrc('happy') : getSrc('sad')"
          ></v-img>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data: () => ({
    
  }),
  computed: {
    isIt: () => {
      let date = new Date(Date.now())
      let month = date.getMonth()
      let day = date.getDate()
      return month == '10' && day == '25'
    }
  },
  methods: {
    getSrc(name) {
        var images = require.context('../assets/', false, /\.jpg$/);
        return images('./jonny-' + name + ".jpg")
    }
}
};
</script>

<style scoped>
 .debug-ui {
   background-color: red;
 }

 .thanksgivingyeet {
   color: white;
   background-color: black;
   text-align: center;
   font-size: 100px;
 }

 .mockup {
    height: 85vh;
 }
</style>
