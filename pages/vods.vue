<template>
  <v-container-fluid>
    <v-row
      class="fill-height align-stretch"
      justify="center"
      style="margin: 2px"
    >
      <v-col>
      <h1> Latest Vods    </h1>  <input type="text" placeholder="Search Input ..."/>      
        <div class="fill-height align-stretch">
       
        <div>Query: {{query}} || </div>
        
        <v-row>
          <v-col v-for="i in 10">
        <v-card >
          <video > </video>
            {{i}}
        </v-card>
          </v-col>
        </v-row>
        </div>
      </v-col>
    </v-row>
  </v-container-fluid>
</template>

<script>
import Vue from 'vue'
import gql from 'graphql-tag'
import index from './index.vue'

export default Vue.extend({
  components: { index },
  data() {
    return {
      query: '',
      length: 10,
    }
  },
  apollo: {
      query: gql`query {
            user(id: "61e33d2940bb32eb56745580") {
              vods(limit: 10, page: 0) {
                title
                started_at
                ended_at
                vod_visibility
                vod_state
                categories {
                  name
                  timestamp
                }
                variants {
                  name
                }
              }
            }
    }`,
  },
  mounted() {
  },  
})
</script>