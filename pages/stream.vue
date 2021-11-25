<template>
<v-container-fluid >
   <div d-flex flex-row style="height:100%" >
    <v-card  class="d-flex justify-end  mb-6" style="height:100%"
    outlined
    tile >
          <!-- <div v-for="bdog in bulldogTwitch" :key="bdog.streamID">
            <img :src="bdog.thumbnail_url" alt="" />
          </div> -->
           <iframe class="pa-2"  frameborder="0"
            src="https://player.twitch.tv/?channel=admiralbulldog&parent=wintersuntestv1.vercel.app&muted=true"
            height="100%"
            width="100%"
            allowfullscreen="true">
        </iframe>
      
        <iframe  frameborder="0" style="max-width:400px"   class="pa-2"  src="https://www.twitch.tv/embed/admiralbulldog/chat?parent=wintersuntestv1.vercel.app"
        height="100%"
        width="100%">
        </iframe>     
    </v-card>
   </div> 
   </v-container-fluid>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  name: "GetTopGames",
  data: function () {
    return { bulldogTwitch: [] };
  },
  methods: {
    fetchTopGames: function () {
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
  },
  mounted() {
    this.fetchTopGames();
  },
});
</script>
   

 <<style lang="scss" scoped>
  body{
      height:100%;
  }
 </style>