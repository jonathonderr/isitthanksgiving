<template>
  <div>
    <v-row class="fill-height" justify="center" no-gutters>
      <v-col cols="12" md="6">
        <v-row class="fill-height" align="center" justify="center" no-gutters>
          <v-col cols="8">
            <v-col v-if="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm" cols="12" >
              <v-container></v-container>
            </v-col>
            <v-row justify="start">
              <h1>Clink</h1>
            </v-row>
            <v-row justify="start">
              <v-card
                width="70%"
                height="10"
                color="primary"
                elevation="0"
              >
              </v-card>
            </v-row>
            <v-row>
              <v-container />
            </v-row>
            <v-row justify="center">
              <body>
                Using Clink is the best way to break down social barriers, meet new people,
                and experience being in the moment. Clink utilizes Bluetooth technology
                to allow you to message and connect with the people around with you. 
                Download the app and start connecting!
              </body>
            </v-row>
            <v-row>
              <v-container />
            </v-row>
            <v-row>
              <a href="https://apps.apple.com/app/id1570368363/">
                <v-img 
                  src="../assets/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"
                />
              </a>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
      <v-col v-if="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm" cols="12" >
        <v-container></v-container>
      </v-col>
      <v-col cols="12" md="6">
        <v-row class="fill-height" align="end" justify="end" no-gutters>
          <v-img
            class="mockup"
            aspect-ratio="1"
            src="../assets/deviceMockup.png"
          ></v-img>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data: () => ({
    //
  }),
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
