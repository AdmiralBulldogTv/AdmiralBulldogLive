<template>
  <v-row>
    <v-col v-for="(items, i) in docs" :key="i" :to="5">
      <v-card style="height: 9rem"
        ><v-row>
          <v-col> {{ items.name }}</v-col
          ><v-col>
            <a :href="items.url" target="_blank">
              <v-icon size="125" color="#0b6636" class="icons">{{
                items.icon
              }}</v-icon>
            </a>
          </v-col>
          <v-col>{{ items.desc }}</v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  props: {},
  data() {
    return {
      docs: [
        {
          name: "Spotify",
          url: "https://open.spotify.com/playlist/37i9dQZF1E39vbXR0NAux6?si=MWSaikfcQjKCzA2gYugxJw",
          icon: "mdi-spotify",
          desc: "Playlist",
        },
        {
          name: "Dog Stream",
          url: "https://twitch.tv/thedongerdragons",
          icon: "mdi-text-to-speech",
          desc: "Stream",
        },
        {
          name: "Unban",
          url: "https://www.twitch.tv/popout/moderator/admiralbulldog/unban-requests",
          icon: "mdi-hammer",
          desc: "Requests",
        },
      ],
    };
  },
});
</script>

<style scoped>
.icons {
  position: relative;
  align-items: center;
  margin-left: auto;
  margin-top: auto;
}
.icons:hover {
  box-shadow: 0px 0px 15px 5px #0b6636;
  border-radius: 15px 15px 15px 15px;
}

a {
  color: #ffffff;
  text-decoration: none;
}
</style>
