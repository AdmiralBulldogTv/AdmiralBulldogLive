<template>
<v-row>
      <v-col v-for="(items, i) in socials" :key="i" :to="5">
        <v-card style="height: 10rem"
          ><v-row>
            <v-col></v-col
            ><v-col>
              <a :href="items.url" target="_blank">
                <v-icon size="125" color="#0b6636" class="icons">{{
                  items.icon
                }}</v-icon>
              </a>
            </v-col>
            <v-col></v-col>
          </v-row>
        </v-card>
      </v-col>
</v-row>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  props: {},
  data() {
    return {
      socials: [
        {
          name: "Facebook",
          url: "https://www.facebook.com/AdmiralBulldog",
          icon: "mdi-facebook",
        },
        {
          name: "Instagram",
          url: "https://www.instagram.com/theadmiralbulldog",
          icon: "mdi-instagram",
        },
        {
          name: "Reddit",
          url: "https://www.reddit.com/r/AdmiralBulldog",
          icon: "mdi-reddit",
        },
        {
          name: "Discord",
          url: "https://discord.com/invite/wnPsCUm",
          icon: "mdi-discord",
        },
      ],
    };
  },
});

</script>

<style scoped>
.icons .discord_icon {
  position: relative;
  align-items: center;
  margin-left: 1rem;
  margin-top: 0.5rem;
}
.icons:hover {
  box-shadow: 0px 0px 15px 5px #0b6636;
  border-radius: 15px 15px 15px 15px;
}

a {
  color: #ffffff;
  text-decoration: none;
}
</style>