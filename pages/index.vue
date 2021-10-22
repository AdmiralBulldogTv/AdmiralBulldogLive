<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6" justify-space-between>
      <v-card-title class="headline" justify="center" align="center">
        Latest News
      </v-card-title>
      <v-card elevation="5" outlined shaped justify="center" align="center">
        <v-card-text>
          <p>
            Sample Description about the Website, whats it is doing and what not
          </p>
          <p>Perhaps any news?</p>
          <p>
            Perhaps a schedule? Something like upcoming events (Mediashare,
            Point rewards, Movie Night, Setup Reviews etc.)
          </p>
        </v-card-text>

        <!--    <Calender /> -->
      </v-card>
    </v-col>
    <v-spacer></v-spacer>
    <v-col cols="12" sm="8" md="6" justify-space-between>
      <v-card-title class="headline">
        Latest Social Media post (Can Be Twitter, IG, Facebook or all?)
      </v-card-title>
      <v-card elevation="5" outlined  justify="center" align="center">
        <a
          class="twitter-timeline"
          href="https://twitter.com/AdmiralBulldog"
          data-tweet-limit="1"
          data-width="399"
          data-theme="light"
        ></a>
        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charset="utf-8"
        ></script>
      </v-card>
      <v-card-title class="headline"> Latest YouTube Video </v-card-title>
      <v-card elevation="5" outlined  justify="center" align="center">
        <v-card-text>           
<iframe width="600" height="315" allowfullscreen  frameborder="0"
src="https://www.youtube.com/embed/watch?v=jgZeFDq_d6s&list=UUk8ZIMJxSO9-pUg7xyrnaFQ&index=1">
</iframe>
</v-card-text
        >
      </v-card>
    </v-col>
  </v-row>
</template>

