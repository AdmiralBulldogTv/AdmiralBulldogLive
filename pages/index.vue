<template>
  <v-container fluid>
        <v-row>
    <v-col> </v-col>
    <v-col cols="12" sm="8" md="6" justify-space-between>
      <v-card-title class="headline"> General Information/News </v-card-title>
      <v-card elevation="5" outlined justify="center" align="center">
        <v-card-text>
          <p>
            Sample Description about the Website, whats it is doing and what not
          </p>
          <p>Perhaps any news?</p>
          <p>
            Perhaps a schedule? Something like upcoming events (Mediashare,
            Point rewards, Movie Night, Setup Reviews etc.)
          </p>
          <p>Latest AMA could be uploaded here or to a dedicated site</p>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col> </v-col>
  </v-row>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="6" justify-space-between>
        <v-card-title class="headline" justify="center" align="center">
          Latest News
        </v-card-title>
        <v-card elevation="7" outlined justify="center" align="center">
          <v-card-text>
            <LatestPost />
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" sm="8" md="6" justify-space-between>
        <v-card-title class="headline" justify="center" align="center">
          Latest YouTube Video
        </v-card-title>
        <v-card elevation="7" outlined justify="center" align="center">
          <v-card-text>
            <iframe
              width="600"
              height="500"
              allowfullscreen
              frameborder="0"
              src="https://www.youtube.com/embed/watch?v=jgZeFDq_d6s&list=UUk8ZIMJxSO9-pUg7xyrnaFQ&index=1"
            >
            </iframe>
          </v-card-text>
        </v-card>
      </v-col>
      </v-row>
  
  </v-container>
</template>
