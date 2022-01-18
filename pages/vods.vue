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
           <v-row>
          <v-col v-for="vod in user.vods" :key="vod.id">
          <v-card >
            <v-row>
              <v-col>
          <video style="border:1px red inset;"  width="300" height="200"/>
              </v-col>
          </v-row>
          <v-row>
            <v-col>
             {{vod.title}}
            </v-col>
          </v-row>
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
})
</script>