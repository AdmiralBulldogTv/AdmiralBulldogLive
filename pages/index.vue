<template>

  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
    <v-card-title class="headline">
          Welcome to AdmiralBulldogs Website
        </v-card-title>
      <v-card>
       
        <v-card-text>
          <p>Sample Descirption about the Website, whats it doing and what not </p>          
          <p>
           Perhaps any news?
          </p>
          <p>
            Find a bug? Report it on the github <a
              href="https://github.com/vuetifyjs/vuetify/issues"
              target="_blank"
              rel="noopener noreferrer"
              title="contribute"
            >
              issue board
            </a>.
          </p>
          <p>Thank you for developing with Vuetify and I look forward to bringing more exciting features in the future.</p>
          <div class="text-xs-right">
            <em><small>&mdash; John Leider</small></em>
          </div>
          <hr class="my-3">
          <a
            href="https://nuxtjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nuxt Documentation
          </a>
          <br>
          <a
            href="https://github.com/nuxt/nuxt.js"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nuxt GitHub
          </a>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            nuxt
            to="/inspire"
          >
            Continue
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>

 <v-col cols="12" sm="8" md="6">
    <v-card-title class="headline"> Latest Tweet </v-card-title>
      <v-card class=" py-4 d-flex justify-center">
        <a class="twitter-timeline" href="https://twitter.com/AdmiralBulldog" data-tweet-limit="1" data-width="500" data-theme='light' ></a>
        <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>  
      </v-card>   
      
        <v-card-title class="headline"> Latest VOD </v-card-title>  
      <v-card class=" py-4 d-flex justify-center">
       <v-card-text>Latest VOD playable from here (or just the link to  <a src="https://admiralbulldog.streamervods.live/">https://admiralbulldog.streamervods.live/</a>)</v-card-text>
       <video></video>
      </v-card>      
    </v-col>

  </v-row>

  
    
  
</template>
