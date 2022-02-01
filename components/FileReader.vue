<template>
  <v-container-fluid>
    <v-row style="height: 5rem; width: 30rem">
      <v-col>
        <v-select
          :items="amas"
          label="Choose Tierlist"
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
        <v-card-text id="id_tierlist"> </v-card-text>
      </v-col>
    </v-row>
  </v-container-fluid>
</template>

<script lang="ts">

export default {
  data() {
    return {
      tierlists: [
        { title: "AMA from 22.12.2021", url: "" },
      ],
    };
  },
  methods: {
    
  },
  mounted() {

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