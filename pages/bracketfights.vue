<template>
  <v-container fluid class="mt-5">
    <v-row justify="center">
      <v-col>
        <v-select
          :items="tierLists"
          label="Choose Theme"
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
    <div style="margin-top: -32px">
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
        <v-card elevation="4" height="auto">
          <v-system-bar
            lights-out
            style="margin-top: -5px; text-align: justify"
          >
          </v-system-bar>

          <v-carousel
            hide-delimiters
            id="caro"
            v-model="currentIndex"
            height="590"
          >
            <v-carousel-item
              id="test"
              v-for="item in returnedList"
              :key="item.src"
              :src="item.src"
              contain
            >
              <v-dialog v-model="dialog" scrollable>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    dark
                    v-bind="attrs"
                    v-on="on"
                    id="btn_img"
                    @click="zoom"
                    ref="myBtn"
                    style="display: none"
                  >
                    Open Dialog
                  </v-btn>
                </template>
                <v-card>
                  <v-card-title>{{ currentTitle }}</v-card-title>
                  <v-divider></v-divider>
                  <v-img v-model="dialogm1" :src="item.src"> </v-img>
                </v-card>
              </v-dialog>
            </v-carousel-item>
          </v-carousel>
          <v-system-bar lights-out> </v-system-bar>
        </v-card>
      </span>
      <span v-else>
        <v-card elevation="4" height="auto">
          <v-system-bar
            lights-out
            style="margin-top: -5px; text-align: justify"
          >
          </v-system-bar>

          <v-carousel
            hide-delimiters
            id="caro"
            v-model="currentIndex"
            height="950"
          >
            <v-carousel-item
              id="test"
              v-for="item in returnedList"
              :key="item.src"
              :src="item.src"
              contain
            >
              <v-dialog v-model="dialog" scrollable>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    dark
                    v-bind="attrs"
                    v-on="on"
                    id="btn_img"
                    @click="zoom"
                    ref="myBtn"
                    style="display: none"
                  >
                    Open Dialog
                  </v-btn>
                </template>
                <v-card>
                  <v-card-title>{{ currentTitle }}</v-card-title>
                  <v-divider></v-divider>
                  <v-img v-model="dialogm1" :src="item.src" contain> </v-img>
                </v-card>
              </v-dialog>
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
      selectedImage: null,
      isTop: false,
      showNavBar: false,
      currentIndex: 0,
      tierListTitle: "",
      dialogm1: "",
      dialog: false,
      isMobile: false,
      returnedList: [
        {
          title: "",
          src: "",
          theme: "Memes",
        },
      ],

      tierLists: [
        {
          title: "",
          src: "",
          theme: "All",
        },
        {
          title: "McDonalds Menu",
          src: require("../static/bracketfights/mcd_menu.png"),
          theme: "Food",
        },
        {
          title: "Pizza Toppings",
          src: require("../static/bracketfights/Pizza_Toppings.png"),
          theme: "Food",
        },
        {
          title: "Animal Battle Royal",
          src: require("../static/bracketfights/animal_battle_royal.png"),
          theme: "Memes",
        },
        {
          title: "Horror Icons",
          src: require("../static/bracketfights/Horror_Icons.png"),
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
          title: "Hololive Members",
          src: require("../static/bracketfights/hololive_Members.png"),
          theme: "Memes",
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
        {
          title: "Games Played By Admiralbulldog",
          src: require("../static/bracketfights/Games_Played_By_Admiralbulldog.png"),
          theme: "Games",
        },
        {
          title: "Games Played By Admiralbulldog 2",
          src: require("../static/bracketfights/Games_Played_By_Admiralbulldog2.png"),
          theme: "Games",
        },
        {
          title: "Videogame Companies",
          src: require("../static/bracketfights/Videogame_Companies.png"),
          theme: "Games",
        },
      ],
    };
  },

  beforeDestroy() {
    if (typeof window !== "undefined") {
      // @ts-ignore
      window.removeEventListener("resize", this.onResize, { passive: true });
    }
  },
  mounted() {
    this.returnTierlist("All");
    this.onResize();

    window.addEventListener("resize", this.onResize, { passive: true });

    if (!this.isMobile) {
      document.getElementById("caro").addEventListener("click", this.zoom);
    }
  },
  computed: {
    currentTitle: function (): String {
      if (this.returnedList[this.currentIndex] !== undefined) {
        return this.returnedList[this.currentIndex].title + " ";
      }
    },
  },
  methods: {
    returnTierlist(theme: String) {
      this.currentIndex = 0;
      var tempTierlists: Array<String | any> = [];
      if (theme === "All")
      {
         for (let i = 1; i < this.tierLists.length; i++) {
           tempTierlists.push(this.tierLists[i]);
         }
      }
      else 
      {
        for (let i = 0; i < this.tierLists.length; i++) {       
          if (this.tierLists[i].theme == theme) {
            tempTierlists.push(this.tierLists[i]);
          }
        }
      }
      return (this.returnedList = tempTierlists);
    },
    zoom() {
      document.getElementById("btn_img").click();
    },
    onResize() {
      this.isMobile = window.innerWidth < 600;

      if (!this.isMobile) {
        document.getElementById("caro").addEventListener("click", this.zoom);
      } else {
        document.getElementById("caro").removeEventListener("click", this.zoom);
      }
    },
  },
});
</script>

<style lang="scss" scoped>
#caro {
  cursor: pointer;
}
</style>
