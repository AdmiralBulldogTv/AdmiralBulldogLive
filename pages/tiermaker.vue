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
    <div style="margin-top:-32px;">
    <v-row>
      <v-col></v-col>
      <v-col>
        <div class="headline" justify="center" align="center">
          {{ currentTitle }}
        </div>
      </v-col>
      <v-col></v-col>
    </v-row>
    <v-card elevation="4"  height="auto">
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
    </div>
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
      returnedList: [
        {
          title: "",
          src: "",
          theme: "memes",
        },
      ],

      tierLists: [
        {
          title: "Gachi",
          src: require("../static/tierlists/gachi.png"),
          theme: "memes",
        },
        {
          title: "Dictator",
          src: require("../static/tierlists/dictator.png"),
          theme: "memes",
        },
        {
          title: "Worst Ways to Die",
          src: require("../static/tierlists/worstwaystodie.png"),
          theme: "memes",
        },
        {
          title: "Best Actors",
          src: require("../static/tierlists/actors.png"),
          theme: "movies",
        },
         {
          title: "Marvel movie",
          src: require("../static/tierlists/marvel.png"),
          theme: "movies",
        },
         {
          title: "Star Wars",
          src: require("../static/tierlists/starwars.png"),
          theme: "movies",
        },
         {
          title: "Lord of the Rings",
          src: require("../static/tierlists/lotr.png"),
          theme: "movies",
        },
         {
          title: "Spiderman movie",
          src: require("../static/tierlists/spidermanmovie.png"),
          theme: "movies",
        },
         {
          title: "Avenger Power List",
          src: require("../static/tierlists/avengerpower.png"),
          theme: "movies",
        },
         {
          title: "Game of Thrones",
          src: require("../static/tierlists/got.png"),
          theme: "movies",
        },
         {
          title: "Horror Movie Villains",
          src: require("../static/tierlists/horrormovie_villains.png"),
          theme: "movies",
        },
        {
          title: "Best animated Disney movies",
          src: require("../static/tierlists/disneymovies.png"),
          theme: "movies",
        },
         {
          title: "Pixar Movies",
          src: require("../static/tierlists/movies_pixar.png"),
          theme: "movies",
        },
         {
          title: "IMDB Top 100",
          src: require("../static/tierlists/imdb.png"),
          theme: "movies",
        },
         {
          title: "Dota 2 Waifus",
          src: require("../static/tierlists/dotawaifu.png"),
          theme: "Dota",
        },
         {
          title: "TI Finals",
          src: require("../static/tierlists/TI_final.png"),
          theme: "Dota",
        },
        {
          title: "Nuts",
          src: require("../static/tierlists/nuts.png"),
          theme: "food",
        },
         {
          title: "Breakfast",
          src: require("../static/tierlists/breakfast.png"),
          theme: "food",
        },
         {
          title: "Dessert",
          src: require("../static/tierlists/dessert.png"),
          theme: "food",
        },
         {
          title: "Pizza Toppings",
          src: require("../static/tierlists/pizzatopping.png"),
          theme: "food",
        },
         {
          title: "Vegetables",
          src: require("../static/tierlists/vegetables.png"),
          theme: "food",
        },
         {
          title: "Fruit",
          src: require("../static/tierlists/fruit.png"),
          theme: "food",
        },
         {
          title: "Animals I could fight",
          src: require("../static/tierlists/animals_fight.png"),
          theme: "memes",
        },
         {
          title: "Season 5 Contenstants",
          src: require("../static/tierlists/masterchef_s5.png"),
          theme: "Masterchef",
        },
          {
          title: "Season 6 Contenstants",
          src: require("../static/tierlists/masterchef_s6.png"),
          theme: "Masterchef",
        },
          {
          title: "Season 7 Contenstants",
          src: require("../static/tierlists/masterchef_s7.png"),
          theme: "Masterchef",
        },
         {
          title: "Megacucks",
          src: require("../static/tierlists/megacucks.png"),
          theme: "Stream Content",
        },
         {
          title: "Free Content",
          src: require("../static/tierlists/free_content.png"),
          theme: "Stream Content",
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
      if (this.returnedList[this.currentIndex] !== undefined) {
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
      return (this.returnedList = tempTierlists);
    },
  },
});
</script>
