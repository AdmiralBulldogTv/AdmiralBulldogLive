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
          href="https://www.designbyhumans.com/shop/AdmiralBulldog/"
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

      <v-toolbar-title v-text="title"></v-toolbar-title>
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
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light> mdi-repeat </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
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
      clipped: false,
      drawer: true,
      fixed: false,
      items: [
        {
          icon: "mdi-home",
          title: "News",
          to: "/",
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
          icon: "mdi-book-cross",
          title: "Bible",
          to: "/bible",
        },
      ],
      miniVariant: false,
      right: false,
      rightDrawer: false,
      title: "Welcome to AdmiralBulldogs Website",
    };
  },
};
</script>

<style lang="scss" scoped>
.drawer {
  height: 0px;
}
</style>
