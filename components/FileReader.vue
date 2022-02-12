<template>
  <v-container-fluid>
    <v-row>
      <v-col>
        <v-select
          :items="amas"
          label="Choose discord AMAs for regulars and megacucks"
          outlined
          rounded
          item-text="title"
          item-value="file"
          @change="getAma"
          style="width: 450px"
        ></v-select>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card tile shaped class="ama" style=" background-color:#1E1E1E;'">
          <v-card-text id="id_ama"> </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container-fluid>
</template>

<script lang="ts">
// AMA text files
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

export default {
  data() {
    return {
      amas: [
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
  },
  mounted() {
    // this.getAma(ama_211222);
  },
};
</script>

<style lang="scss" scoped>
p {
  text-align: justify;
  color: blue;
}

.ama {
  margin-top: -24px;
}
</style>
g
