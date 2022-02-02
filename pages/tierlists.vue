<template>
  <v-container class="mt-5" fluid>
    <v-row>
      <v-col>
        <v-select
          :items="tierlists"
          label="Choose Tierlists"
          outlined
          rounded
          item-text="title"
        ></v-select>
      </v-col>
    </v-row>
    <v-card elevation="4" justify="center" align="center">
      <v-carousel hide-delimiters max-height="800">
        <v-carousel-item
          v-for="(item, i) in tierlists"
          :key="i"
          :src="item.src"
          contain
          max-width="600"
          :aspect-ratio="16 / 9"
        >
          {{ item.title }} Tierlist
        </v-carousel-item>
      </v-carousel>
    </v-card>
  </v-container>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      isTop: false,
      showNavBar: false,
      tierlists: [
        { title: "Gachi", src: require("../static/tierlists/gachi.png") },
        { title: "Actors ", src: require("../static/tierlists/actors.png") },
        {
          title: "Disney ",
          src: require("../static/tierlists/disneymovies.png"),
        },
        { title: "Nuts ", src: require("../static/tierlists/nuts.png") },
      ],
    };
  },
  mounted() {},

  beforeDestroy() {},

  methods: {},
});
</script>
