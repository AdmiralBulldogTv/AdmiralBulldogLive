<template>
  <v-col cols="12" sm="8" md="6" justify-space-between>
<v-card-title class="headline" justify="center" align="center">
      Latest News &nbsp;
    </v-card-title>
      <v-card  elevation="4"
      justify="center"
      align="center"
      style="min-height: 34rem; height: 34rem">
    <v-tabs
      v-model="tab"
      background-color="green accent-7"
      centered
      dark
      icons-and-text
    >
      <v-tabs-slider></v-tabs-slider>

      <v-tab href="#tab-1">
        Tweets
        <v-icon>mdi-phone</v-icon>
      </v-tab>

      <v-tab href="#tab-2">
        Instagram
        <v-icon>mdi-heart</v-icon>
      </v-tab>

      <v-tab href="#tab-3">
        Reddit
        <v-icon>mdi-account-box</v-icon>
      </v-tab>

       <v-tab href="#tab-4">
        Discord
        <v-icon>mdi-account-box</v-icon>
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item
        :value="'tab-1'"
      >
        <v-card flat>
          <v-card-text>
        <v-row>
          <v-col cols=""></v-col>
          <v-col cols="auto">
            <a
              class="twitter-timeline"
              data-width="650"
              data-height="450"
              data-theme="dark"
              href="https://twitter.com/AdmiralBulldog"
              >Tweets by AdmiralBulldog</a
            >
            <script
              async
              src="https://platform.twitter.com/widgets.js"
              charset="utf-8"
            ></script>
          </v-col>
          <v-col></v-col>
        </v-row>
          </v-card-text>
        </v-card>
      </v-tab-item>
       <v-tab-item
        :value="'tab-2'"
      >
        <v-card flat>
          <v-card-text>
        <v-row>
          <v-col cols=""></v-col>
          <v-col cols="auto">
              
          </v-col>
          <v-col></v-col>
        </v-row>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
  </v-col> 
</template>

<script>
export default {
  data() {
    return{
      tab: null,
      instagram: []
    }
  },
  methods: {
   getInstagram: function () {
      let fetchLink =
        "https://www.instagram.com/theadmiralbulldog/channel/?__a=1";

      fetch(fetchLink, {
        method: "get",
         headers: new Headers({
          "Access-Control-Allow-Origin": "*"
        }),
      })
        .then(function (response) {
         // console.log(response)
          return response.json();
        })
        .then((data) => {
          console.log(data);

          let instagramTemp = [];

          this.instagram = instagramTemp;
        });
    },
  },
  mounted() {
    this.getInstagram();
  }
}
</script>