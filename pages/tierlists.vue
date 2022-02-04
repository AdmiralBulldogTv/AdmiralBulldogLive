<template>
  <v-container fluid class="mt-5"  >
    <v-row  justify="center" >
      <v-col>
        <v-select
          :items="tierLists"
          label="Choose Tierlists theme"
          outlined
          rounded
          item-text="theme"
          item-value="theme"
          @change="returnTierlist"
          style="width:250px;"
        ></v-select>
      </v-col>
    </v-row>

    <v-card elevation="4" style="height: 90vh;max-height:660px">
      <v-carousel  hide-delimiters>
        <v-carousel-item
          v-for="(item, i) in returnedList"
          :key="i"
          :src="item.src"
          contain
        >
           <div>{{item.title}} Tierlist </div>
        </v-carousel-item>
      </v-carousel>
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
      carouselHeight: '',
      returnedList: [],
      tierLists: [
        {
          title: "Gachi",
          src: require("../static/tierlists/gachi.png"),
          theme: "memes",
        },
        {
          title: "Actors ",
          src: require("../static/tierlists/actors.png"),
          theme: "movies",
        },
        {
          title: "Disney ",
          src: require("../static/tierlists/disneymovies.png"),
          theme: "movies",
        },
        {
          title: "Nuts ",
          src: require("../static/tierlists/nuts.png"),
          theme: "food",
        },
      ],
    };
  },
  mounted() {
  },
  beforeDestroy() {},

  methods: {
     returnTierlist(theme: String) {
       var tempTierlists: Array<String | any> = [];
       for(let i=0;i<this.tierLists.length;i++)
       {
          if (this.tierLists[i].theme == theme)
          {
              tempTierlists.push(this.tierLists[i]);
          }
       }
       this.returnedList = tempTierlists;
    },
   },
});
</script>
