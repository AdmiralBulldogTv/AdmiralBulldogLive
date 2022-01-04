<template>
  <v-container-fluid >
    <Banner />
    <v-row 
      class="d-flex fill-height"
        justify="center"
        style="margin:1px"
       >
      <LatestTweet />
      <YouTube />   
      <Socials />
    </v-row>
    <v-spacer></v-spacer>
    
     
  </v-container-fluid>
</template>

<style lang="scss" scoped>
@import "@/assets/variables.scss";
</style>
