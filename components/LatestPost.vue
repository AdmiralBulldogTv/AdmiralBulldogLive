<template>
  <v-carousel hide-delimiters>
    <v-carousel-item >
      <a
        width:100%
        height:100%
        class="twitter-timeline"
        href="https://twitter.com/AdmiralBulldog"
        data-tweet-limit="1"
        data-theme="dark"
      ></a>
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
          width: 600px;
          height: 430px;
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
