<template>
  <v-container id="index">
    <v-row class="fill-height" justify="center">
      <!-- embedded stream -->
      <v-col
       cols="12"
        sm="8"
        md="6"
  >
  <v-card-title class="headline" justify="center" align="center">
      Watch Stream
     </v-card-title>
      <v-card  elevation="4"
      justify="center"
      align="center"
      style="min-height: 34rem; height: 34rem"> 
        <iframe
            frameborder="0"
            src="https://player.twitch.tv/?channel=admiralbulldog&parent=wintersuntestv1.vercel.app&parent=localhost&parent=admiralbulldog.live&muted=true"
            height="98%"
            width="98%"
            allowfullscreen="true"
            class="mt-1"
          >
          </iframe>
      </v-card>
      </v-col>
      <YouTube />
    </v-row>
    <Socials />
    <v-spacer></v-spacer>
  </v-container>
</template>

<style lang="scss" scoped>
@import "@/assets/variables.scss";
</style>
