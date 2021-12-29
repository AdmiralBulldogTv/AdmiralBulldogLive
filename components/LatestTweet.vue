<template>
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
      style="
        padding: 16px;
        overflow: auto;
        min-height: 34rem;
        max-height: 100rem;
      "
      class="fill-height"
      id="twitter"
    >
      <a
        class="twitter-timeline"
        data-width="650"
        data-height="500"
        data-theme="dark"
        href="https://twitter.com/AdmiralBulldog?ref_src=twsrc%5Etfw"
        >Tweets by AdmiralBulldog</a
      >
      <script
        async
        src="https://platform.twitter.com/widgets.js"
        charset="utf-8"
      ></script>
    </v-card>
  </v-col>
</template>
