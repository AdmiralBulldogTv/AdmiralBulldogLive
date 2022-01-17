<template>
 <v-container-fluid>
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
  </v-container-fluid>
  
</template>

<script lang="ts">
// AMA text files
const ama_211222:object = require("raw-loader!../assets/amas/ama_211222.txt");
const ama_210907:object = require("raw-loader!../assets/amas/ama_210907.txt");
const ama_210808:object = require("raw-loader!../assets/amas/ama_210808.txt");

interface ama {
  default:string
}

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
    getAma(ama:any) {
        let ama_text:string = this.formatAma(ama.default);
        document.getElementById("id_ama").innerHTML = ama_text;
    },

    formatAma(amaStr:string) {
      let returnString = "";
      console.log(amaStr.split("\n"));
      for (let i = 0; i < amaStr.split("\n").length; i++) {
        returnString += "<p>" + amaStr.split("\n")[i] + "</p>";
      }
      return returnString;
    },
  },
  mounted() {
   // this.getAma(ama_211222);
  },
};
</script>
