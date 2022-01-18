<template>
  <v-container-fluid>
    <v-row
      class="fill-height align-stretch"
      justify="center"
      style="margin: 2px"
    >
      <v-col>
        <v-card class="fill-height align-stretch">
     
        <h1> User </h1>
        <hr>
        <div>{{user}}</div>
        
        </v-card>
      </v-col>
    </v-row>
  </v-container-fluid>
</template>

<script>
import Vue from 'vue'
import gql from 'graphql-tag'

export default Vue.extend({
  data() {
    return {
      user: '',
    }
  },
  apollo: {
      user: gql`query {
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
  }
})
</script>