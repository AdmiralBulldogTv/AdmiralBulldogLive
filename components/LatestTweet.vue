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
      style="min-height: 34rem; height:34rem;"
      id="twitter"
    >
      <v-row>
        <v-col cols=""></v-col>
        <v-col cols="auto">
        <a
          class="twitter-timeline"
          data-width="650"
          data-height="500"
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
    </v-card>
  </v-col>
</template>

<style lang="scss" scoped>
#twitter
{
  overflow-y: auto;
  overflow-x: hidden;
}
</style>