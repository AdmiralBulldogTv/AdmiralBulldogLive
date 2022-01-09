<template>
 <v-container>
    <v-row style="height:5rem; width:30rem;"> 
      <v-col>
          <v-select
          :items="amas"
          label="Choose discord AMAs for regulars and megacucks"
          outlined
          rounded
          item-text="title"
          item-value="file"
          @change="getAma" 
        ></v-select>
      </v-col>
    </v-row>
    <v-row>
       <v-col>
        <v-card>
          <v-card-text id="id_ama"> </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  
</template>

<script>
// AMA text files
const ama_211222 = require("raw-loader!../assets/amas/ama_211222.txt");
const ama_210907 = require("raw-loader!../assets/amas/ama_210907.txt");
const ama_210808 = require("raw-loader!../assets/amas/ama_210808.txt");

export default {
  data() {
    return {
      amas: [
              {title: 'AMA from 22.12.2021', file: ama_211222},
              {title: 'AMA from 07.09.2021', file: ama_210907},
              {title: 'AMA from 08.08.2021', file: ama_210808},
            ]             
    };
  },
  methods: {
    getAma(ama) {
      console.log("ama: " + ama);
      let ama_text = this.formatAma(ama.default);
      document.getElementById("id_ama").innerHTML = ama_text;
    },

    formatAma(amaStr) {
      let returnString = "";
      console.log(amaStr.split("\r\n"));
      for (let i = 0; i < amaStr.split("\r\n").length; i++) {
        returnString += "<p>" + amaStr.split("\r\n")[i] + "</p>";
      }
      return returnString;
    },
  },
  mounted() {
   // this.getAma(ama_211222);
  },
};
</script>
