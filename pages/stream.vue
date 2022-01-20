<template>
  <v-container fluid id="stream">
      <v-row
        justify="center"
        style="margin: 2px;height:82vh;max-height:100%; flex-grow:1"
      >
        <v-col class="flex-grow-1 flex-shrink-1">
          <v-card  elevation="4"
                  align="left"
                 class="fill-height"
                
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
        <v-col class="flex-grow-0 flex-shrink-0">
          <v-card elevation="4"
      align="left"
      id="chat"
      class="fill-height" 
       style="width:400px"
       >
            <iframe
              frameborder="0"
              src="https://www.twitch.tv/embed/admiralbulldog/chat?darkpopout&parent=wintersuntestv1.vercel.app&parent=localhost&parent=admiralbulldog.live"
              height="100%"
              width="100%"
            >
            </iframe>
          </v-card>
        </v-col>
      </v-row>
  </v-container>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  data: function () {
    return { bulldogTwitch: [], isMobile: false };
  },
  methods: {
    fetchStream: function () {
      let fetchLink =
        "https://api.twitch.tv/helix/search/channels?query=admiralbulldog";

      fetch(fetchLink, {
        method: "get",
        headers: new Headers({
          Authorization: "Bearer nlkookh5txhogq5bdgs9zshxmhs3ej",
          "Client-ID": "pe8j3m8aepe7wa1n4qvba6jvvatfzi",
        }),
      })
        .then(function (response) {
          return response.json();
        })
        .then((data) => {
          let bulldogStream = [];
          bulldogStream.push({
            streamID: data.data[0].id,
            display_name: data.data[0].display_name,
            is_live: data.data[0].is_live,
            thumbnail_url: data.data[0].thumbnail_url
              .replace("{width}", "213")
              .replace("{height}", "285"),
            started_at: data.data[0].started_at,
          });

          this.bulldogTwitch = bulldogStream;
        });
    },
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
