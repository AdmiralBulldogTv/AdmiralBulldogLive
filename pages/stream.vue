<template>
  <v-container-fluid id="stream">
    <v-row class="fill-height" justify="center" style="margin-left:14px; margin-right:14px; padding-bottom:14px;">
      <v-col class="flex-grow-1 flex-shrink-1" style="padding:0;">
        <v-card
          elevation="4"
          align="left"
          style="height: 94%; margin-top: 8px; min-width: 400px"
        >
          <iframe
            frameborder="0"
            src="https://player.twitch.tv/?channel=admiralbulldog&parent=wintersuntestv1.vercel.app&parent=localhost&parent=admiralbulldog.live&muted=true"
            height="100%"
            width="100%"
            allowfullscreen="true"
          >
          </iframe>
        </v-card>
      </v-col>
      <v-col class="flex-grow-0 flex-shrink-1" style="padding:0;">
        <span v-if="this.$vuetify.breakpoint.width > '853'">
          <v-card
            elevation="4"
            align="left"
            id="chat"
            style="
              min-width: 22rem;
              width: 400px;
              max-width: 100vw;
              height: 94%;
              margin-top: 8px;
            "
          >
            <iframe
              frameborder="0"
              src="https://www.twitch.tv/embed/admiralbulldog/chat?darkpopout&parent=wintersuntestv1.vercel.app&parent=localhost&parent=admiralbulldog.live"
              height="100%"
              width="100%"
            >
            </iframe>
          </v-card>
        </span>
        <span v-else>
          <v-card
            elevation="4"
            align="left"
            id="chat"
            style="width: 100vw; height: 94%; margin-top: 8px"
          >
            <iframe
              frameborder="0"
              src="https://www.twitch.tv/embed/admiralbulldog/chat?darkpopout&parent=wintersuntestv1.vercel.app&parent=localhost&parent=admiralbulldog.live"
              height="100%"
              width="100%"
            >
            </iframe>
          </v-card>
        </span>
      </v-col>
    </v-row>
  </v-container-fluid>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  data: function () {
    return { bulldogTwitch: [], isMobile: false };
  },
  methods: {
    onResize() {
      this.isMobile = window.innerWidth < 1100;
    },
  },
  beforeDestroy() {
    if (typeof window === "undefined") return;

    window.removeEventListener("resize", this.onResize, { passive: true });
  },
  mounted() {
    //this.fetchStream();
    this.onResize();
    window.addEventListener("resize", this.onResize, { passive: true });
  },
});
</script>

<
<style lang="scss" scoped>
@import "@/assets/variables.scss";
</style>
