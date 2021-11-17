<template>
  <v-container fluid>
     
       <v-row justify="center" align="center">
        <v-col cols="12" sm="8" md="6" justify-space-between>
        <v-card-title class="headline" justify="center" align="center">
          Latest News &nbsp; <a href="https://twitter.com/AdmiralBulldog?ref_src=twsrc%5Etfw" class="twitter-follow-button"  data-show-screen-name="false" data-show-count="false">Follow @AdmiralBulldog</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        </v-card-title>
        <v-card elevation="4"  justify="center" align="center" style="height:34rem">
          <v-card-text>
            <LatestPost />
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="8" md="6" justify-space-between>
        <v-card-title class="headline" justify="center" align="center">
          Latest YouTube Videos
        </v-card-title>
        <v-card
          elevation="4"
          justify="center"
          align="center"
          id="ID_Youtube"
          style="min-height:34rem"
        >
          <v-card-text>
            <!-- latest four videos -->
            <iframe
              v-for="(item, i) in videos"
              :key="i"
              :to="4"
              width="300"
              height="200"
              allowfullscreen
              frameborder="0"
              :src="item.src"
              class="videobox"
            >
            </iframe>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>        
  </v-container>

  
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    el: "#ID_Youtube";
    return {
      videos: [
        {
          src: "https://www.youtube.com/embed/watch?v=jgZeFDq_d6s&list=UUk8ZIMJxSO9-pUg7xyrnaFQ&index=1",
        },
        {
          src: "https://www.youtube.com/embed/watch?v=jgZeFDq_d6s&list=UUk8ZIMJxSO9-pUg7xyrnaFQ&index=2",
        },
        {
          src: "https://www.youtube.com/embed/watch?v=jgZeFDq_d6s&list=UUk8ZIMJxSO9-pUg7xyrnaFQ&index=3",
        },
        {
          src: "https://www.youtube.com/embed/watch?v=jgZeFDq_d6s&list=UUk8ZIMJxSO9-pUg7xyrnaFQ&index=4",
        },
      ],
    };
  },
});
</script>


<style scoped>
  .videobox {
    margin:2%;
  }
 .videobox:hover {
    box-shadow: 0px 0px 15px 5px rgba(58,255,34,0.55);
 }
</style>