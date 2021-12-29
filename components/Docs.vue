<template>
  <v-row>
    <v-col v-for="(items, i) in docs" :key="i" :to="5">
      <v-card style="height: 8rem">
        <div class="icons">
          <div>
            <a :href="items.url" target="_blank">
              <v-icon size="100" color="#0b6636" class="icon">{{
                items.icon
              }}</v-icon>
            </a>
          </div>

          <div class="text">
            {{ items.name + " " + items.desc }}
          </div>
        </div>
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
          name: "DongerDragons",
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
  height: 100%;
  width: 100%;
}

.icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.text {
  position: absolute;
  top: 85%;
  left: 50%;
  transform: translate(-50%, -15%);
  white-space: nowrap;
}

.icon:hover {
  box-shadow: 0px 0px 15px 5px #0b6636;
  border-radius: 15px 15px 15px 15px;
}

a {
  color: #ffffff;
  text-decoration: none;
}
</style>
