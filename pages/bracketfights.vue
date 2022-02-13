<template>
  <v-container fluid class="mt-5">
    <v-row justify="center">
      <v-col>
        <v-select
          :items="tierLists"
          label="Choose Tierlists theme"
          outlined
          rounded
          color="#0b6636"
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
    <span v-if="this.$vuetify.breakpoint.width <= '1920'">
    <v-card elevation="4"  height="auto" >
      <v-system-bar lights-out style="margin-top: -5px; text-align: justify">
      </v-system-bar>
      <v-carousel hide-delimiters id="caro" v-model="currentIndex" height="590" > 
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
    </span>
    <span v-else>
       <v-card elevation="4"  height="auto" >
      <v-system-bar lights-out style="margin-top: -5px; text-align: justify">
      </v-system-bar>
      <v-carousel hide-delimiters id="caro" v-model="currentIndex" height="950" > 
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
    </span>
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
          theme: "Memes",
        },
      ],

      tierLists: [
        {
          title: "McDonalds Menu",
          src: require("../static/bracketfights/mcd_menu.png"),
          theme: "Food",
        },
         {
          title: "Animal Battle Royal",
          src: require("../static/bracketfights/animal_battle_royal.png"),
          theme: "Memes",
        },
         {
          title: "Best South Park Character",
          src: require("../static/bracketfights/Best South Park Character.png"),
          theme: "Movies",
        },
         {
          title: "Top 50 Memes",
          src: require("../static/bracketfights/top50memes.png"),
          theme: "Memes",
        },
           {
          title: "Best Historical Dinner Guests",
          src: require("../static/bracketfights/Best_Historical_Dinner_Guests.png"),
          theme: "Memes",
        },
           {
          title: "Hottest Female Celeb",
          src: require("../static/bracketfights/hottest_female_celeb.png"),
          theme: "Movies",
        },
           {
          title: "Hottest Female Celeb",
          src: require("../static/bracketfights/hottest_female_celeb.png"),
          theme: "Movies",
        },
           {
          title: "Movie Franchise",
          src: require("../static/bracketfights/movie_franchise.png"),
          theme: "Movies",
        },
          {
          title: "Movies That Made Billions",
          src: require("../static/bracketfights/movies_that_made_billion.png"),
          theme: "Movies",
        },
      ],
      };
  },
  mounted() {
    this.returnTierlist("Food");
  },
  beforeDestroy() {},
  computed: {
    currentTitle: function (): string {
      if (this.returnedList[this.currentIndex] !== undefined) {
        return this.returnedList[this.currentIndex].title + " ";
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
