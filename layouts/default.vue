<template>
  <v-app dark>
    <v-navigation-drawer v-model="drawer" :mini-variant="miniVariant" app>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          shaped
        >
          <v-list-item-action>
            <v-icon color="#0b6636">{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          router
          shaped
          href="https://www.designbyhumans.com/shop/AdmiralBulldog/new/"
          target="_blank"
        >
          <v-list-item-action>
            <v-icon color="#0b6636">mdi-cart</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title /> <span style="color: #839041">Store</span>
          </v-list-item-content>
        </v-list-item>

        <v-list-item
          router
          shaped
          href="http://www.twitch.tv/subs/admiralbulldog"
          target="_blank"
        >
          <v-list-item-action>
            <v-icon color="#0b6636">mdi-twitch</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title /><span style="color: #839041">Subscribe</span>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon color="#0b6636"
          >mdi-{{ `chevron-${miniVariant ? "right" : "left"}` }}</v-icon
        >
      </v-btn>

      <v-row
        style="width:100vw"
        v-for="bdog in bulldogTwitch"
        :key="bdog.streamID"
        id="title"
      >
        <v-col  align-self="center"
          >{{ bdog.display_name }}
          <v-avatar tile> </v-avatar>
        </v-col>
        <v-col v-if="isStreamerLive" style="text-align: end"
          >Currently
          <a href="https://www.twitch.tv/admiralbulldog" target="_blank"
            >live</a
          >
          <v-avatar color="grey" tile>
            <img src="../static/emotes/BdOkayChamp.png" />
          </v-avatar>
        </v-col>
        <v-col v-else style="text-align: end"
          >Currently offline
          <v-avatar tile>
            <img src="../static/emotes/NotOkayChamp.png" />
          </v-avatar>
        </v-col>
      </v-row>
      <v-spacer />
    </v-app-bar>
    <v-main fluid>
      <Nuxt />
    </v-main>
    <v-navigation-drawer
      class="drawer"
      v-model="rightDrawer"
      :right="right"
      fixed
    >
    </v-navigation-drawer>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      bulldogTwitch: [],
      isMobile: false,
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-home",
          title: "Home",
          to: "/",
        },
        {
          icon: "mdi-video-account",
          title: "Stream",
          to: "/stream",
        },
        {
          icon: "mdi-video",
          title: "Vods",
          to: "/vods",
        },
        {
          icon: "mdi-chat",
          title: "Chat Bot",
          to: "/chatbot",
        },
        {
          icon: "mdi-frequently-asked-questions",
          title: "FAQ",
          to: "/faq",
        },
        {
          icon: "mdi-file-document",
          title: "Spreadsheets",
          to: "/spreadsheet",
        },
        {
          icon: "mdi-book-cross",
          title: "Bible",
          to: "/bible",
        },
      ],
      miniVariant: true,
      right: false,
      rightDrawer: false,
      title: "AdmiralBulldog's Kappa Club",
    };
  },
  beforeDestroy () {
    if (typeof window === 'undefined') return

    window.removeEventListener('resize', this.onResize, { passive: true })
  },
  methods: {
    getBulldogStream: function () {
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
          //     console.log(data);

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
     onResize () {
        this.isMobile = window.innerWidth < 600
      },
  },
  mounted() {
    this.getBulldogStream();
    this.onResize()

    window.addEventListener('resize', this.onResize, { passive: true })
  },
  computed: {
    isStreamerLive() {
      // wait for twitch api to respond
      console.log(this.bulldogTwitch[0]);
      if (this.bulldogTwitch[0] !== undefined) {
        if (this.bulldogTwitch[0].is_live === true) {
          return true;
        } else {
          return false;
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";
.drawer {
  height: 0px;
}

body {
  overflow: hidden; /* Hide scrollbars */
}
</style>
