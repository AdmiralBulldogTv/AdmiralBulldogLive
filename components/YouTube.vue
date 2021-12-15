<template>
     <v-col cols="12" sm="8" md="6" justify-space-between>
        <v-card-title class="headline" justify="center" align="center">
          Latest YouTube Videos
        </v-card-title>
        <v-card
          elevation="4"
          justify="center"
          align="center"
          id="ID_Youtube"
          style="min-height: 34rem"
        >
          <!-- falls auflösung > 1920p, dann 6-->
          <v-card-text>
            <!-- latest four videos -->
            <span  v-if="this.$vuetify.breakpoint.width <= '1920'">
            <iframe
              v-for="(item, i) in 5" v-if="i >= 1"
              :key="i"
              :to="4"
              width="300"
              height="200"
              allowfullscreen
              frameborder="0"
              :src="'https://www.youtube-nocookie.com/embed/watch?v=jgZeFDq_d6s&list=UUk8ZIMJxSO9-pUg7xyrnaFQ&index='+i"
              class="videobox"
            >
            </iframe>
            </span>

            <span  v-else>
            <iframe
              v-for="(item, i) in 7"  v-if="i >= 1"
              :key="i"
              :to="4"
              width="300"
              height="200"
              allowfullscreen
              frameborder="0"
              :src="'https://www.youtube-nocookie.com/embed/watch?v=jgZeFDq_d6s&list=UUk8ZIMJxSO9-pUg7xyrnaFQ&index='+i"
              class="videobox"
            >
            </iframe>
            </span>
          </v-card-text>
        </v-card>
      </v-col>
</template>

<script>
import Vue from "vue";
export default Vue.extend({  
  props: {},
  data() {
    return {
    };
  },
});
</script>

<style scoped>
.videobox {
  margin: 2%;
  min-width: 300;
  min-height: 200;
}
.videobox:hover {
  box-shadow: 0px 0px 15px 5px #0b6636;
}

a {
  color: #ffffff;
  text-decoration: none;
}
</style>
