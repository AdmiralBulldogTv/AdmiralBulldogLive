<template>
  <v-container fluid class="mt-5">
    <v-row justify="center">
      <v-col>
        <v-select
          :items="tierLists"
          label="Choose Tierlists theme"
          outlined
          rounded
          item-text="theme"
          item-value="theme"
          @change="returnTierlist"
          style="width: 250px"
        ></v-select>
      </v-col>
    </v-row>
    <v-row>
      <v-col></v-col>
      <v-col>
        <div class="headline" justify="center" align="center" >
          {{ currentTitle }}
        </div>
      </v-col>
      <v-col></v-col>
    </v-row>
    <v-card elevation="4">
      <v-system-bar lights-out style="margin-top: -5px; text-align: justify">
      </v-system-bar>
      <v-carousel hide-delimiters id="caro" v-model="currentIndex">
        <v-carousel-item
          id="test"
          v-for="item in returnedList"
          :key="item.src"
          :src="item.src"
          contain
        >
        </v-carousel-item>
      </v-carousel>
      <v-system-bar lights-out> </v-system-bar>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      isTop: false,
      showNavBar: false,
      currentIndex: 0,
      tierListTitle: "",
      returnedList: [ {
          title: "",
          src: '',
          theme: "memes",
        },],

      tierLists: [
        {
          title: "Gachi",
          src: require("../static/tierlists/gachi.png"),
          theme: "memes",
        },
        {
          title: "Best Actors",
          src: require("../static/tierlists/actors.png"),
          theme: "movies",
        },
        {
          title: "Best animated Disney movies",
          src: require("../static/tierlists/disneymovies.png"),
          theme: "movies",
        },
        {
          title: "Nuts",
          src: require("../static/tierlists/nuts.png"),
          theme: "food",
        },
      ],
      tempLength: 0,
    };
  },
  mounted() {
    this.returnTierlist("memes");
  },
  beforeDestroy() {},
  computed: {
    currentTitle: function (): string {
        if(this.returnedList[this.currentIndex] !== undefined)
        {
          return this.returnedList[this.currentIndex].title + " Tierlist";
        }
    },
  },
  methods: {
    returnTierlist(theme: String) {
      this.currentIndex = 0;
      var tempTierlists: Array<String | any> = [];
      for (let i = 0; i < this.tierLists.length; i++) {
        if (this.tierLists[i].theme == theme) {
          tempTierlists.push(this.tierLists[i]);
        }
      }
      return this.returnedList = tempTierlists;
    },
  },
});
</script>
