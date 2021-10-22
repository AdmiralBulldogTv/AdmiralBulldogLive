<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          shaped
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
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
            <v-icon>mdi-repeat</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title />Store
          </v-list-item-content>
        </v-list-item>

        <v-list-item
          router
          shaped
          href="http://www.twitch.tv/subs/admiralbulldog"
          target="_blank"
        >
          <v-list-item-action>
            <v-icon>mdi-repeat</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title />Subscribe
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? "right" : "left"}` }}</v-icon>
      </v-btn>

      <v-toolbar-title v-text="title" />
      <v-spacer />
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <Nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
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
      clipped: true,
      drawer: true,
      fixed: false,
      items: [
        {
          icon: "mdi-apps",
          title: "News",
          to: "/",
        },
        {
          icon: "mdi-chart-bubble",
          title: "Vods",
          to: "/vods",
        },
        {
          icon: "mdi-chart-bubble",
          title: "Chat Bot",
          to: "/chatbot",
        },
        {
          icon: "mdi-chart-bubble",
          title: "FAQ",
          to: "/faq",
        },
        {
          icon: "mdi-chart-bubble",
          title: "About",
          to: "/about",
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Welcome to AdmiralBulldogs Website",
    };
  },
};
</script>
