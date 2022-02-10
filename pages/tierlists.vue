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

    <v-card elevation="4">      
      <v-carousel show-arrows-on-hover hide-delimiters id="caro"  height="60vh">
        <v-carousel-item
         id="test"
          v-for="(item, index) in returnedList"
          :key="item.src"
          :src="item.src"
          contain
          style="margin-top:70px;overflow-y:inherit"
        >
          <v-system-bar lights-out style="margin-top:-5px;"> {{ item.title }} Tierlist</v-system-bar>
        </v-carousel-item>
      </v-carousel>
      <v-list two-line>
        <v-list-item> </v-list-item>
      </v-list>
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
      tierListTitle: "",
      returnedList: [],
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
    };
  },
  mounted() {},
  beforeDestroy() {},
  computed: {
    returnTitle() {},
  },
  methods: {
    returnTierlist(theme: String) {
      var tempTierlists: Array<String | any> = [];
      for (let i = 0; i < this.tierLists.length; i++) {
        if (this.tierLists[i].theme == theme) {
          tempTierlists.push(this.tierLists[i]);
        }
      }
      this.returnedList = tempTierlists;
    },
  },
});
</script>
