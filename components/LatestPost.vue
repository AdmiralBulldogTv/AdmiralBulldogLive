<template>
  <v-carousel hide-delimiters>
    <v-carousel-item>
      <a
        class="twitter-timeline"
        data-width="650"
        data-height="600"
        data-theme="dark"
        href="https://twitter.com/AdmiralBulldog?ref_src=twsrc%5Etfw"
        >Tweets by AdmiralBulldog</a
      >
      <script
        async
        src="https://platform.twitter.com/widgets.js"
        charset="utf-8"
      ></script
    ></v-carousel-item>
    <v-carousel-item>
      <iframe
        src="http://www.facebook.com/plugins/likebox.php?href=http%3A%2F%2Fwww.facebook.com%2FAdmiralBulldog&width=600&colorscheme=light&show_faces=true&border_color&stream=true&header=true&height=435"
        scrolling="yes"
        style="
          border: none;
          overflow: hidden;
          width: 650px;
          height: 600px;
          background: white;
        "
        allowtransparency="true"
        frameborder="0"
      ></iframe>
      <br />(This looks scuffed atm, to implement this properly I will need your
      Facebook page's Access token:
      https://developers.facebook.com/docs/facebook-login/access-tokens/#pagetokens)
    </v-carousel-item>

    <v-carousel-item
      v-for="(item, i) in items"
      :key="i"
      :src="item.src"
      height:100px
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: "https://cdn.discordapp.com/attachments/309318262213312512/901133277753135124/361069065860808705.png",
        },
      ],
    };
  },
};
</script>
