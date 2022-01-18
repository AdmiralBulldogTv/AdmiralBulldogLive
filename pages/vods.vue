<template>
  <v-container-fluid>
    <v-row
      class="fill-height"
      justify="center"
      style="margin: 2px;"
    >
      <v-col>
        <v-card class="" style="height:94%; margin-top: 8px;">
          <iframe
            frameBorder="0"
            style="width: 100%; height: 100%"
            src="https://vods.admiralbulldog.live/"
          >
            <p>Your browser does not support iframes.</p>
          </iframe>
        </v-card>
      </v-col>
    </v-row>
  </v-container-fluid>
</template>

<script>
/*import Vue from 'vue'
import gql from 'graphql-tag'

const ALL_VODS_QUERY = gql`
 query ALL_VODS_QUERY {
   user(id: "61e33d2940bb32eb56745580") {
              vods(limit: 10, page: 0) {
                id
                title	
								started_at
      					ended_at
      					vod_state
      					vod_visibility
                categories {
                  name
                  timestamp
                }
              }
            }
        }
`;

export default Vue.extend({
  data() {
    return {
      length: 10,
    }
  },
  apollo: {
    user: {
      query: ALL_VODS_QUERY,
      prefetch: true,
    },
  },
  mounted() {
  },  
})*/
</script>