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
       
        <div>Query result: |{{vods}} | </div>
        
        <v-row>
          <v-col v-for="(vod, index) in vods" :key="index">
          <v-card >
          <video  width="300" height="200">  </video>
             Troy elp
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
import VueApollo from 'vue-apollo'
import gql from 'graphql-tag'

export default Vue.extend({
  data() {
    return {
      length: 10,
      vods: '',
    }
  },
  apollo: {
      vods: gql`query {
        GetVods {
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
        }
    }`,
    result(result) { console.log(result)},
    error(error) { console.log(error); },
  },
  mounted() {
  },  
})
</script>