<template>
  <v-col
    cols="12"
    sm="8"
    md="6"
    justify-space-between
    v-if="this.$vuetify.breakpoint.width <= '1920'"
  >
    <v-card-title class="headline" justify="center" align="center">
      Latest YouTube Videos &nbsp;
    </v-card-title>
    <v-card
      elevation="4"
      justify="center"
      align="center"
      id="youtube"
      style="min-height: 34rem; height: 34rem"
    >
      <v-row>
        <!-- falls auflösung > 1920p, dann 6-->
        <!-- latest four videos -->
        <span>
          <div class="mt-10" style="">
            <iframe
              v-for="(item, i) in 5"
              v-if="i >= 1"
              :key="i"
              :to="4"
              width="300"
              height="200"
              allowfullscreen
              frameborder="0"
              autoplay="0"
              :src="
                'https://www.youtube-nocookie.com/embed/watch?autoplay=0&v=jgZeFDq_d6s&list=UUk8ZIMJxSO9-pUg7xyrnaFQ&index=' +
                i
              "
              class="videobox"
            >
            </iframe>
          </div>
        </span>
      </v-row>
    </v-card>
  </v-col>
  <v-col cols="12" sm="8" md="6" justify-space-between v-else>
    <v-card-title class="headline" justify="center" align="center">
      Latest YouTube Videos &nbsp;
    </v-card-title>
    <v-card
      elevation="4"
      justify="center"
      align="center"
      id="youtube"
      style="min-height: 54rem; height: 54rem"
    >
      <v-row>
        <!-- falls auflösung > 1920p, dann 6-->
        <!-- latest four videos -->
        <span>
          <div class="mt-10" style="">
            <iframe
              v-for="(item, i) in 7"
              v-if="i >= 1"
              :key="i"
              :to="4"
              width="350"
              height="225"
              allowfullscreen
              frameborder="0"
              autoplay="0"
              :src="
                'https://www.youtube-nocookie.com/embed/watch?autoplay=0&v=jgZeFDq_d6s&list=UUk8ZIMJxSO9-pUg7xyrnaFQ&index=' +
                i
              "
              class="videobox"
            >
            </iframe>
          </div>
        </span>
      </v-row>
    </v-card>
  </v-col>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  props: {},
  data() {
    return {};
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

#youtube {
  overflow-y: auto;
  overflow-x: hidden;
}

/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 2px grey;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #0b6636;
  border-radius: 10px;
}
</style>
