<template>
  <v-container id="index" fluid>
    <Banner />
    <v-row class="d-flex fill-height" justify="center">
      <LatestTweet />
      <YouTube />
    </v-row>
    <Socials />
    <v-spacer></v-spacer>
  </v-container>
</template>

<style lang="scss" scoped>
@import "@/assets/variables.scss";
</style>
