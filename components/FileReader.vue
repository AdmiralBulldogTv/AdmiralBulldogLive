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
        <v-card tile>
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

export default {
  data() {
    return {
      amas: [
        { title: "AMA from 22.12.2021", file: ama_211222 },
        { title: "AMA from 07.09.2021", file: ama_210907 },
        { title: "AMA from 08.08.2021", file: ama_210808 },
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
            "<div class='v-card v-sheet theme--light elevation-24' v-sheet--outlined v-sheet--shaped style='padding:5px; margin:8px;'>";
          firstcard = false;
        } else if (amaStr.split("\n")[i + 1].indexOf("—") > -1 && !firstcard) {
          returnString += "</div>";
          returnString +=
            "<div class='v-card v-sheet theme--light elevation-24' style='padding:5px; margin:8px;'>";
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
</style>
g
