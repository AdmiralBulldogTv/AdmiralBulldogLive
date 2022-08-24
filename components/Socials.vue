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
    <v-col>
         <v-card class="card" href="https://discord.com/invite/wnPsCUm" style="height: 8rem">
        <div class="icons">
          <div class="icon" >
           <font-awesome-icon icon="fa-brands fa-discord" style="font-size:5em; color:#0b6636" />
          </div>

          <div class="text">
            Discord Invite Link
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
     <v-col>
         <v-card class="card" href="https://discord.com/invite/wnPsCUm" style="height: 8rem">
        <div class="icons">
          <div>
            <a target="_blank">
                <svg role="img" style="fill:#0b6636" viewBox="-10 -5 45 40" xmlns="http://www.w3.org/2000/svg"><title>Discord</title><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/></svg>
            </a>
          </div>
          <div class="text">
            Discord Invite Link
          </div>
        </div>
      </v-card>
      </v-col>
  </v-row>
</template>

<script>
import Vue from "vue";
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faDiscord } from '@fortawesome/free-brands-svg-icons'
/* add icons to the library */
library.add(faDiscord)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
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
