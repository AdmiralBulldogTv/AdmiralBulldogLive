Skip to content
Search or jump to…
Pull requests
Issues
Marketplace
Explore
 
@Wintersun93 
Wintersun93
/
Testwebsite
Private
1
00
Code
Issues
Pull requests
8
Actions
Projects
Security
3
Insights
Settings
We found potential security vulnerabilities in your dependencies.
Only the owner of this repository can see this message.

Testwebsite/pages/index.vue
@Wintersun93
Wintersun93 Fixed Error when loading the page
Latest commit fcd7608 6 days ago
 History
 1 contributor
336 lines (321 sloc)  9.21 KB
   
<template>
  <v-container fluid>
    <v-row>
      <span
        v-for="bdog in bulldogStream"
        :key="bdog.broadcaster_id"
        style="width: 100%"
      >
        <!-- If no day off, same day before stream -->
        <v-card
          v-if="getStreamerStatus() === null
          "
          style="background-color: #0b6636"
          elevation="4"
          justify="center"
          align="center"
        >
          Next {{ bdog.segments[0].title }} <p> in {{ timeLeft }} </p>
        </v-card>
        <v-card
          v-else-if="getStreamerStatus() == false
          "
          style="background-color: #c81208"
          elevation="4"
          justify="center"
          align="center"
        >
        No Stream Today.  <p> Bulldog will stream again in {{timeLeft}}. Watch there latest <NuxtLink to="/vods">VOD</NuxtLink> here </p>
        </v-card>
      </span>
    </v-row>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="6" justify-space-between>
        <v-card-title class="headline" justify="center" align="center">
          Latest News &nbsp;
          <a
            href="https://twitter.com/AdmiralBulldog?ref_src=twsrc%5Etfw"
            class="twitter-follow-button"
            data-show-screen-name="false"
            data-show-count="false"
            >Follow @AdmiralBulldog</a
          >
          <script
            async
            src="https://platform.twitter.com/widgets.js"
            charset="utf-8"
          ></script>
        </v-card-title>
        <v-card
          elevation="4"
          justify="center"
          align="center"
          style="height: 34rem"
        >
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
          style="min-height: 34rem"
        >
          <!-- falls auflösung > 1920p, dann 6-->
          <v-card-text>
            <!-- latest four videos -->
            <span  v-if="this.$vuetify.breakpoint.width <= '1920'">
            <iframe
              v-for="(item, i) in 5"  v-if="i>=1"
              :key="i"
              :to="4"
              width="300"
              height="200"
              allowfullscreen
              frameborder="0"
              :src="'https://www.youtube.com/embed/watch?v=jgZeFDq_d6s&list=UUk8ZIMJxSO9-pUg7xyrnaFQ&index='+i"
              class="videobox"
            >
            </iframe>
            </span>

            <span  v-else>
            <iframe
              v-for="(item, i) in 7" v-if="i>=1"
              :key="i"
              :to="4"
              width="300"
              height="200"
              allowfullscreen
              frameborder="0"
              :src="'https://www.youtube.com/embed/watch?v=jgZeFDq_d6s&list=UUk8ZIMJxSO9-pUg7xyrnaFQ&index='+i"
              class="videobox"
            >
            </iframe>
            </span>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="(items, i) in socials" :key="i" :to="5">
        <v-card style="height: 10rem"
          ><v-row>
            <v-col></v-col
            ><v-col v-if="items.name != 'Discord'">
              <a :href="items.url" target="_blank">
                <v-icon size="125" color="#0b6636" class="icons">{{
                  items.icon
                }}</v-icon>
              </a>
            </v-col>
            <v-col v-else>
              <a :href="items.url" target="_blank">
                <v-icon size="125" color="#0b6636" class="discord_icon">{{
                  items.icon
                }}</v-icon>
              </a>
            </v-col>
            <v-col></v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Vue from "vue";
import moment from "moment";
export default Vue.extend({
  props: {},
  data() {
    return {
      bulldogStream: [],
      bulldogTwitch: [],
      streamStatus: null,
      timeLeft: null,
      nextStreamVac: null,
      currentTime: null,
      nextStream: null,
      videos: [
        {
          src: "https://www.youtube.com/embed/watch?v=jgZeFDq_d6s&list=UUk8ZIMJxSO9-pUg7xyrnaFQ&index",
        },
      ],
      socials: [
        {
          name: "Facebook",
          url: "https://www.facebook.com/AdmiralBulldog",
          icon: "mdi-facebook",
        },
        {
          name: "Instagram",
          url: "https://www.instagram.com/theadmiralbulldog",
          icon: "mdi-instagram",
        },
        {
          name: "Reddit",
          url: "https://www.reddit.com/r/AdmiralBulldog",
          icon: "mdi-reddit",
        },
        {
          name: "Discord",
          url: "https://discord.com/invite/wnPsCUm",
          icon: "mdi-discord",
        },
      ],
    };
  },
  methods: {
    fetchSchedule: function () {
      // 30816637 budok broadcaster_id
      let fetchLink =
        "https://api.twitch.tv/helix/schedule?broadcaster_id=30816637&first=2&utc_offset=120";
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
          console.log(data);
          let bulldogSchedule = [];
          if (data.data.vacation !== null) {
            bulldogSchedule.push({
              broadcaster_id: data.data.broadcaster_id,
              broadcaster_name: data.data.broadcaster_name,
              segments: data.data.segments,
              vacation_start: data.data.vacation.start_time,
              vacation_end: data.data.vacation.start_time,
              
            });
          } else {
            bulldogSchedule.push({
              broadcaster_id: data.data.broadcaster_id,
              broadcaster_name: data.data.broadcaster_name,
              segments: data.data.segments,
              vacation: data.data.vacation,
            });
          }
          this.bulldogStream = bulldogSchedule;
        });
    },
    fetchStream: function () {
      let fetchLink =
        "https://api.twitch.tv/helix/search/channels?query=admiralbulldog&first=1";
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
          console.log(data);
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
      return moment().format("DD.MM.YYYY HH:mm:ss");
    },
    getStreamerStatus: function() {   
      // wait for twitch api to respond   
      if ( this.bulldogTwitch[0] !== undefined )
      {  
        if (this.bulldogTwitch[0].is_live == true)
        {
            return true;
        }
        else if(this.bulldogTwitch[0].is_live == false && this.bulldogStream.vacation !== null )
        {
            return false;
        }
        else if (this.bulldogTwitch[0].is_live == false) {
          return null;
        } 
      }
    }
  },
  mounted() {
  // get stream infos
    this.fetchStream();
    this.fetchSchedule();
    // update timer
    setInterval(() => {
      this.currentTime = this.currentDateTime();
      this.nextStream = moment(
      this.bulldogStream[0].segments[0].start_time
      ).format("DD.MM.YYYY HH:mm:ss");
      if (this.getStreamerStatus() == null)
      {
           this.timeLeft = moment
          .utc(moment(this.nextStream).diff(moment(this.currentTime)))
          .format("HH:mm:ss");
      }
        else if (this.getStreamerStatus() == false)
        {
              this.nextStreamVac = moment(
               this.bulldogStream[0].vacation_end
              ).format("DD.MM.YYYY HH:mm:ss");

             this.timeLeft = moment
            .utc(moment(this.nextStreamVac).diff(moment(this.currentTime)))
            .format("HH:mm:ss");
        }
    }, 1000);
   window.addEventListener('resize', () => {
    this.windowHeight = window.innerHeight
  })
  },
  computed: {
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
.icons .discord_icon {
  position: relative;
  align-items: center;
  margin-left: 1rem;
  margin-top: 0.5rem;
}
.icons:hover {
  box-shadow: 0px 0px 15px 5px #0b6636;
  border-radius: 75px 75px 75px 75px;
}
.discord_icon:hover {
  box-shadow: 0px 0px 15px 5px #0b6636;
  border-radius: 15px 15px 15px 15px;
}
a {
  color: #ffffff;
  text-decoration: none;
}
</style>
© 2021 GitHub, Inc.
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
Loading complete