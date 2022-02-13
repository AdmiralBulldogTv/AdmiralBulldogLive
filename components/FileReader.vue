<template>
  <v-container-fluid>
            <div :class="isTop">
      <a
        v-if="!isTop"
        @click.prevent="scrollTop"
        class="back-to-top page-scroll"
        >Back to Top</a
      >
    </div>
    <v-row >
      <v-col>
        <v-select
          :items="amas"
          label="Choose discord AMAs for regulars and megacucks"
          outlined
          rounded
          color="#0b6636"
          item-text="title"
          item-value="file"
          @change="getAma"
          style="width: 450px"
        ></v-select>
      </v-col>
    </v-row>
    <v-row class="fill-height" justify="center" style="margin: 2px">
      <v-col v-if="this.$vuetify.breakpoint.width <= '1920'">
        <v-card tile shaped id="card_id" class="ama" style="height:70vh; margin-top: -16px; background-color:#1E1E1E;overflow-y:scroll">
          <v-card-text id="id_ama"> </v-card-text>
        </v-card>
      </v-col>
      <v-col v-else>
        <v-card tile shaped id="card_id" class="ama" style="height:78.5vh; margin-top: -16px; background-color:#1E1E1E;overflow-y:scroll">
          <v-card-text id="id_ama"> </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container-fluid>
</template>

<script lang="ts">
// AMA text files
const ama_220213: object = require("raw-loader!../assets/amas/ama_220213.txt");
const ama_211222: object = require("raw-loader!../assets/amas/ama_211222.txt");
const ama_210907: object = require("raw-loader!../assets/amas/ama_210907.txt");
const ama_210808: object = require("raw-loader!../assets/amas/ama_210808.txt");
const ama_211009: object = require("raw-loader!../assets/amas/ama_211009.txt");
const ama_210705: object = require("raw-loader!../assets/amas/ama_210705.txt");
const ama_210605: object = require("raw-loader!../assets/amas/ama_210605.txt");
const ama_210510: object = require("raw-loader!../assets/amas/ama_210510.txt");
const ama_210412: object = require("raw-loader!../assets/amas/ama_210412.txt");
const ama_210307: object = require("raw-loader!../assets/amas/ama_210307.txt");
const ama_210214: object = require("raw-loader!../assets/amas/ama_210214.txt");
const ama_210119: object = require("raw-loader!../assets/amas/ama_210119.txt");
const ama_210110: object = require("raw-loader!../assets/amas/ama_210110.txt");
const ama_201129: object = require("raw-loader!../assets/amas/ama_201129.txt");

import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      isTop: false,
      showNavBar: false,
      amas: [
        { title: "AMA of 13.02.2022", file: ama_220213 },
        { title: "AMA of 22.12.2021", file: ama_211222 },
        { title: "AMA of 09.10.2021", file: ama_211009 },
        { title: "AMA of 07.09.2021", file: ama_210907 },
        { title: "AMA of 08.08.2021", file: ama_210808 },
        { title: "AMA of 05.07.2021", file: ama_210705 },
        { title: "AMA of 05.06.2021", file: ama_210605 },
        { title: "AMA of 10.05.2021", file: ama_210510 },
        { title: "AMA of 12.04.2021", file: ama_210412 },
        { title: "AMA of 07.03.2021", file: ama_210307 },
        { title: "AMA of 14.02.2021", file: ama_210214 },
        { title: "AMA of 19.01.2021", file: ama_210119 },
        { title: "AMA of 10.01.2021", file: ama_210110 },
        { title: "AMA of 29.11.2020", file: ama_201129 },
      ],
    };
  },
  methods: {
    getAma(ama: any) {
      let ama_text: string = this.formatAma(ama.default);
      document.getElementById("id_ama").innerHTML = ama_text;
      this.scrollTop();
    },

    formatAma(amaStr: string) {
      let returnString = "";
      let firstcard = true;
      for (let i = 0; i < amaStr.split("\n").length - 1; i++) {
        if (amaStr.split("\n")[0].indexOf("—") > -1 && firstcard) {
          returnString +=
            "<div class='v-card v-sheet theme--dark elevation-24' v-sheet--outlined v-sheet--shaped style='padding:5px; margin:8px;font-size: large;>";
          firstcard = false;
        } else if (amaStr.split("\n")[i + 1].indexOf("—") > -1 && !firstcard) {
          returnString += "</div><hr>";
          returnString +=
            "<div class='v-card v-sheet theme--dark elevation-24' style='padding:5px; margin:8px;font-size: large;'>";
        }
        returnString +=
          "<p style=' text-align: justify; line-height: 1;'>" +
          amaStr.split("\n")[i] +
          "</p>";
        firstcard = false;
      }
      return returnString;
    },
     onScroll() {
      this.isTop = self.document.getElementById('card_id').scrollTop < 1000;
    },

    scrollTop() {
      self.document.getElementById('card_id').scrollTo({ top: 0, behavior: "smooth" });
    },
  },
  mounted() {
    this.getAma(ama_220213)
    self.document.getElementById('card_id').addEventListener("scroll", this.onScroll);
    this.onScroll();
  },
  beforeDestroy() {
    self.document.getElementById('card_id').removeEventListener("scroll", this.onScroll);
  },

});
</script>

<style lang="scss" scoped>
a.back-to-top {
  position: fixed;
  z-index: 999;
  right: 2rem;
  bottom: 4.5rem;
  width: 2.625rem;
  height: 2.625rem;
  border-radius: 1.875rem;
  background: #0b6636 url("@/static/emotes/WeCoo.png") no-repeat center 47%;
  background-size: 2rem 2rem;
  text-indent: -9999px;
  opacity: 1;
  transition: opacity 200ms ease;
}

a:hover.back-to-top {
  background: #0b6636 url("@/static/emotes/WeCoo.png") no-repeat center 47%;
  background-size: 2rem 2rem;
}

.isTop {
  .back-to-top {
    pointer-events: none;
    opacity: 0;
  }
}
</style>
g
