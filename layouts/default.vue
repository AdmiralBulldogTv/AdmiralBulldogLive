<template>
  <v-app dark>
    <!-- Preloader -->
    <div id="spinner" class="spinner-wrapper">
      <div class="spinner">
        <div class="bounce1"></div>
        <div class="bounce2">
          <v-avatar color="" tile>
            <img src="../static/emotes/blabla.gif" />
          </v-avatar>
        </div>
        <div class="bounce3"></div>
      </div>
    </div>
    <!-- end of preloader -->
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
            <v-list-item-title /> <span style="color: #839041">Shop</span>
          </v-list-item-content>
          <v-icon color="#839041"> mdi-open-in-new</v-icon>
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
          <v-icon color="#839041"> mdi-open-in-new</v-icon>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" app>
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-app-bar-nav-icon
            @click.stop="drawer = !drawer"
            v-bind="attrs"
            color="#0b6636"
            v-on="on"
          />
        </template>
        <span>Theatre Mode</span>
      </v-tooltip>
      <!-- <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon color="#0b6636"
          >mdi-{{ `chevron-${miniVariant ? "right" : "left"}` }}</v-icon
        >
      </v-btn> -->
      <v-row
        style="width: 100vw"
        v-for="bdog in bulldogTwitch"
        :key="bdog.streamID"
        id="title"
      >
        <v-col cols="2" style="white-space: nowrap; margin-top: 2.5px">
          {{ bdog.display_name }}
          <v-avatar tile> </v-avatar>
        </v-col>
        <v-col
          v-if="isStreamerLive"
          style="text-align: end; white-space: nowrap; margin-top: 2.5px"
          >Stream
          <a href="https://www.twitch.tv/admiralbulldog" target="_blank"
            >live</a
          >
          <v-avatar color="grey" tile>
            <img src="../static/emotes/BdOkayChamp.png" />
          </v-avatar>
        </v-col>
        <v-col v-else style="text-align: end"
          >Stream
          <a href="https://www.twitch.tv/admiralbulldog" target="_blank"
            >offline</a
          >
          <v-avatar tile>
            <img src="../static/emotes/BNotOkayChamp.png" />
          </v-avatar>
        </v-col>
      </v-row>
      <v-spacer />
    </v-app-bar>
    <v-main fluid>
      <span> <Banner /> </span>
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
      <span>&copy; {{ new Date().getFullYear() }} by Wintersun#2348</span>
    </v-footer>
  </v-app>
</template>

<script>
import config from "@/config.js";
const token = config.config.OAUTH_TOKEN;
const clientID = config.config.CLIENT_ID;
export default {
  data() {
    return {
      bulldogTwitch: [],
      isMobile: false,
      clipped: false,
      drawer: true,
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
        /* {
          icon: "mdi-frequently-asked-questions",
          title: "FAQ",
          to: "/faq",
        },*/
        {
          icon: "mdi-view-list",
          title: "Tiermaker",
          to: "/tiermaker",
        },
        {
          icon: "mdi-tournament",
          title: "Bracket Fights",
          to: "/bracketfights",
        },
        {
          icon: "mdi-comment-question",
          title: "AMAs",
          to: "/ama",
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
      miniVariant: false,
      right: false,
      rightDrawer: false,
      title: "AdmiralBulldog's Kappa Club",
    };
  },
  beforeDestroy() {
    if (typeof window === "undefined") return;

    window.removeEventListener("resize", this.onResize, { passive: true });
  },
  methods: {
    getBulldogStream: function () {
      let fetchLink =
        "https://api.twitch.tv/helix/search/channels?query=admiralbulldog";

      fetch(fetchLink, {
        method: "get",
        headers: new Headers({
          Authorization: "Bearer " + token,
          "Client-ID": clientID,
        }),
      })
        .then(function (response) {
          return response.json();
        })
        .then((data) => {
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
    onResize() {
      this.$forceUpdate();
    },
    removeSpinners() {
      var fadeTarget = document.getElementById("spinner");
      var fadeEffect = setInterval(function () {
        if (!fadeTarget.style.opacity) {
          fadeTarget.style.opacity = 2.5;
        }
        if (fadeTarget.style.opacity > 0) {
          fadeTarget.style.opacity -= 0.1;
        } else {
          clearInterval(fadeEffect);
          document.querySelector(".spinner-wrapper").remove();
        }
      }, 100);
    },
  },
  mounted() {
    this.getBulldogStream();
    setInterval(() => {
      this.getBulldogStream();
    }, 10000);
    this.onResize();

    window.addEventListener("resize", this.onResize, { passive: true });
    this.removeSpinners();
  },
  computed: {
    isStreamerLive() {
      // wait for twitch api to respond
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

#title {
  white-space: nowrap;
}

.spinner-wrapper {
  position: fixed;
  z-index: 999999;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: #121212;
}

.spinner {
  z-index: 5;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 6.75rem;
  height: 1.25rem;
  margin: -0.625rem 0 0 -1.875rem;
  text-align: center;
}

.spinner > div {
  display: inline-block;
  -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
  animation: sk-bouncedelay 1.4s infinite ease-in-out both;
}

.spinner .bounce2 {
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
  margin-right: 10px;
  margin-left: 10px;
}
.spinner .bounce3 {
  -webkit-animation-delay: -0.08s;
  animation-delay: -0.08s;
  margin-left: 10px;
}

@-webkit-keyframes sk-bouncedelay {
  0%,
  80%,
  100% {
    -webkit-transform: scale(1);
  }
  40% {
    -webkit-transform: scale(1);
  }
}

@keyframes sk-bouncedelay {
  0%,
  80%,
  100% {
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
  }
  40% {
    -webkit-transform: scale(1.9);
    -ms-transform: scale(1.9);
    transform: scale(1.9);
  }
}
</style>
