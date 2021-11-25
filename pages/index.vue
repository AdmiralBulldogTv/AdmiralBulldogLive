<template>
  <v-container fluid>
    <v-row >
      <span v-for="bdog in bulldogStream" :key="bdog.broadcaster_id" style="width:100%;"> 
      <v-card v-if="bdog.segment_title && !bdog.vacation_start" style="background-color:#0b6636"
          elevation="4"
          justify="center"
          align="center">  {{bdog.segment_title}} today! 
      </v-card>
       <v-card v-else style="background-color:#c81208"
          elevation="4"
          justify="center"
          align="center">  No Stream Today. Budok is doing your mum! 
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
    <v-row>
      <v-col v-for="(items, i) in socials" :key="i" :to="5">
        <v-card style="height: 10rem"
          ><v-row>
            <v-col></v-col
            ><v-col v-if="items.name!='Discord'">
              <a :href="items.url" target="_blank">
                <v-icon size="125" color="#0b6636"  class="icons">{{
                  items.icon
                }}</v-icon>
              </a> </v-col>
              <v-col v-else>
            <a :href="items.url" target="_blank">
                <v-icon size="125" color="#0b6636"  class="discord_icon">{{
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
export default Vue.extend({
  data() {
    el: "#ID_Youtube";
    return {
      bulldogStream: [],
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
        "https://api.twitch.tv/helix/schedule?broadcaster_id=30816637";

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
          if (data.data.vacation !== null)
          {
             bulldogSchedule.push({
              broadcaster_id: data.data.broadcaster_id,
              broadcaster_name: data.data.broadcaster_name,     
              vacation_start : data.data.vacation.start_time, 
              vacation_end : data.data.vacation.start_time,      
          });
          }
          else
          {
             bulldogSchedule.push({
              broadcaster_id: data.data.broadcaster_id,
              broadcaster_name: data.data.broadcaster_name,   
              segment_title : data.data.segments[0].title,    
          });
          }
          console.log(bulldogSchedule.segment_title)
          this.bulldogStream = bulldogSchedule;
        });
    },
   },
    mounted() {
    this.fetchSchedule();
  },
});
</script>

<style scoped>
.videobox {
  margin: 2%;
}
.videobox:hover {
  box-shadow: 0px 0px 15px 5px #0b6636;
}

.icons .discord_icon {
  position: relative;
  align-items: center;
  margin-left:1rem;
  margin-top:0.5rem
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
