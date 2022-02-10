<template>
  <v-row>
    <span
      v-for="bdog in bulldogStream"
      :key="bdog.broadcaster_id"
      style="width: 100%; margin-top: 11px"
    >
      <span v-if="getStreamerStatus === true">
        <v-avatar tile> </v-avatar>
      </span>
      <v-card
        v-else-if="getStreamerStatus === null && timeLeft.split(':')[0] < 22"
        style="background-color: #0b6636"
        elevation="16"
        justify="center"
        align="center"
        tile
      >
        <v-avatar tile> </v-avatar> Next {{ bdog.segments[0].title }} in
        {{ timeLeft }} <v-avatar tile> </v-avatar>
      </v-card>
      <v-card
        v-else-if="getStreamerStatus === null && timeLeft.split(':')[0] > 22"
        style="background-color: #0b6636"
        elevation="16"
        justify="center"
        align="center"
        tile
      >
        <v-avatar tile> </v-avatar>
        Bulldog should be live any moment now
        <v-avatar tile>
          <!-- <img src="../static/emotes/Prayge.png" /> -->
        </v-avatar>
      </v-card>
      <v-card
        v-else-if="getStreamerStatus === false"
        style="background-color: #c81208"
        elevation="16"
        justify="center"
        align="center"
        tile
      >
        <v-avatar tile> </v-avatar>
        No Stream Today.
        <p>
          Bulldog will stream again in {{ timeLeft }}. Watch the latest
          <NuxtLink to="/vods">VOD</NuxtLink> here
        </p>
        <v-avatar tile> </v-avatar>
      </v-card>
    </span>
  </v-row>
</template>

<script>
import Vue from "vue";
import moment from "moment";

import config from "@/config.js";

const token = config.config.OAUTH_TOKEN;
const clientID = config.config.CLIENT_ID;

export default Vue.extend({
  props: {},
  data() {
    return {
      bulldogStream: [],
      bulldogTwitch: [],
      timeLeft: "live",
      nextStreamVac: null,
      currentTime: null,
      nextStream: null,
      client: clientID,
    };
  },
  methods: {
    fetchSchedule: function () {
      let fetchLink =
        "https://api.twitch.tv/helix/schedule?broadcaster_id=30816637&first=2&utc_offset=120";
      fetch(fetchLink, {
        method: "get",
        headers: new Headers({
          Authorization: "Bearer " + token,
          "Client-ID": clientID,
        }),
      })
        .then(function (response) {
          return response.json();
        })
        .then((data) => {
          let bulldogSchedule = [];
          bulldogSchedule.push({
            broadcaster_id: data.data.broadcaster_id,
            broadcaster_name: data.data.broadcaster_name,
            segments: data.data.segments,
            vacation_start: moment(data.data.vacation.start_time),
            vacation_end: moment(data.data.vacation.end_time),
          });
          this.bulldogStream = bulldogSchedule;
        });
    },
    fetchStream: function () {
      let fetchLink =
        "https://api.twitch.tv/helix/search/channels?query=admiralbulldog&first=1";
      fetch(fetchLink, {
        method: "get",
        headers: new Headers({
          Authorization: "Bearer " + token,
          "Client-ID": clientID,
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
    currentDateTime() {
      return moment();
    },
    streamStartTime() {
      return moment("2021-12-10T08:00:00Z").format("DD.MM.YYYY HH:mm:ss");
    },
  },
  mounted() {
    // get stream infos
    this.fetchStream();
    this.fetchSchedule();

    // update timer
    setInterval(() => {
      this.currentTime = this.currentDateTime();
      this.nextStream = moment(this.bulldogStream[0].segments[0].start_time);
      this.vacation_start = moment(this.bulldogStream[0].vacation_start);
      this.vacation_end = moment(this.bulldogStream[0].vacation_end);

      if (
        this.getStreamerStatus === null &&
        this.nextStream !== "" &&
        this.currentTime !== ""
      ) {
        this.timeLeft = moment
          .utc(moment(this.nextStream).diff(moment(this.currentTime)))
          .format("HH:mm:ss");
      } else if (this.getStreamerStatus === false) {
        this.nextStreamAfterVac = moment(
          this.bulldogStream[0].segments[1].start_time
        );
        this.timeLeft = moment
          .utc(this.nextStreamAfterVac.diff(this.currentTime))
          .format("HH:mm:ss");
      }
    }, 1000);
  },
  computed: {
    getStreamerStatus() {
      // wait for twitch api to respond
      if (this.bulldogTwitch[0] !== undefined) {
        console.log(this.bulldogTwitch[0].is_live);
        if (this.bulldogTwitch[0].is_live === true) {
          return true;
        } else if (
          this.bulldogTwitch[0].is_live === false &&
          this.nextStream > this.vacation_start &&
          this.nextStream < this.vacation_end
        ) {
          // no no stream
          return false;
        } else if (this.bulldogTwitch[0].is_live === false) {
          return null;
        }
      }
    },
  },
});
</script>
