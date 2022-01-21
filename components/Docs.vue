<template>
  <v-row class="fill-height"  justify="center" v-if="this.$vuetify.breakpoint.width > '550'"

>
 <v-col cols="12" xs="12" sm="6" md="6" lg="6" xl="6" v-for="(items, i) in docs" :key="i" :to="5" >
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
            {{ items.name }}
          </div>
        </div>
      </v-card>
    </v-col>
  </v-row>
  <v-row class="fill-height"  justify="center" v-else>
    <v-col cols="6" xs="6" sm="6" md="6" lg="6" xl="6" v-for="(items, i) in docs" :key="i" :to="5" >
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
            {{ items.name }}
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
          name: "Spreadsheets",
          url: "https://docs.google.com/spreadsheets/d/1OqM-PLEX3_rxZF_r67ecc0kUIbo5xcrXsCur_ELIWYM/edit#gid=1049341315",
          icon: "mdi-file-document",
          desc: "External Link to ",
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
