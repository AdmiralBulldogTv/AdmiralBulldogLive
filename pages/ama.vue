<template>
<v-container fluid>
  <v-row>
    <v-col>
    <v-card>
     <div id="app">
    <textarea rows="10" v-model="text"></textarea>
    <br>
    <text-reader @load="text = $event"></text-reader>
  </div>
      </v-card>  
    </v-col>  
  </v-row>
</v-container>


</template>

<script>
export default {
  name: "app",
  data: () => ({ text: "" }),
  components: {
    FileReader
  }
};
</script>

<style lang="scss" scoped>
/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 2px grey;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #0b6636;
  border-radius: 10px;
}

</style>