<template>
  <v-row
    class="fill-height"
    justify="center"
    v-if="this.$vuetify.breakpoint.width > '500'"
  >
    <v-col
      cols="3"
      xs="5"
      sm="3"
      md="3"
      lg="3"
      xl="3"
      v-for="(items, i) in socials"
      :key="i"
      :to="5"
    >
      <v-card :href="items.url" class="card" style="height: 8rem">
        <div class="icons">
          <div>
            <a target="_blank">
              <v-icon size="100" color="#0b6636" class="icon">{{
                items.icon
              }}</v-icon>
            </a>
          </div>

          <div class="text">
            {{ items.name }}
          </div>
        </div>
      </v-card>
    </v-col>
  </v-row>
  <v-row class="fill-height" justify="center" v-else>
    <v-col
      cols="6"
      xs="5"
      sm="3"
      md="3"
      lg="3"
      xl="3"
      v-for="(items, i) in socials"
      :key="i"
      :to="5"
    >
      <v-card class="card" :href="items.url" style="height: 8rem">
        <div class="icons">
          <div>
            <a target="_blank">
              <v-icon size="100" color="#0b6636" class="icon">{{
                items.icon
              }}</v-icon>
            </a>
          </div>

          <div class="text">
            {{ items.name }}
          </div>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import Vue from "vue";
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
          name: "/r/Admiralbulldog",
          url: "https://www.reddit.com/r/AdmiralBulldog",
          icon: "mdi-reddit",
        },
        {
          name: "Discord Invite Link",
          url: "https://discord.com/invite/wnPsCUm",
          icon: "mdi-discord",
        },
      ],
    };
  },
});
</script>

<style scoped>
.icons {
  position: relative;
  height: 100%;
  width: 100%;
}

.icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
}

.card {
  z-index: 0;
}

.text {
  z-index: 1;
  width: 100%;
  opacity: 0;
  position: absolute;
  top: 85%;
  text-align: center;
}

.card:hover .text {
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-name: fadeInBottom;
}

.card:hover {
  box-shadow: 0px 0px 15px 5px #0b6636;
}

a {
  color: #ffffff;
  text-decoration: none;
}

@keyframes fadeInBottom {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
