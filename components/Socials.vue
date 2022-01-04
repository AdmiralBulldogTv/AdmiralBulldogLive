<template>
  <v-row 
  class="d-flex align-end">
    <v-col v-for="(items, i) in socials" :key="i" :to="5">
      <v-card style="height: 8rem;" >
        <div class="icons">
          <div>
            <a :href="items.url" target="_blank">
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
}
.text {
  position: absolute;
  top: 85%;
  left: 50%;
  transform: translate(-50%, -15%);
  white-space: nowrap;
}

.icon:hover {
  box-shadow: 0px 0px 15px 5px #0b6636;
  border-radius: 15px 15px 15px 15px;
}

a {
  color: #ffffff;
  text-decoration: none;
}
</style>
