<template>

  <v-row justify="center" align="center" >
    <v-col cols="12" sm="8" md="6" justify-space-between
>
    <v-card-title class="headline"  justify="center" align="center">
         Latest News
        </v-card-title>
      <v-card
  elevation="5"
  outlined
  shaped justify="center" align="center">
        <v-card-text>
          <p>Sample Descirption about the Website, whats it is doing and what not </p>          
          <p>
           Perhaps any news?
          </p>
          <p>
           Perhaps a schedule? Something like upcoming events (Mediashare, Point rewards, Movie Night, Setup Reviews) See example below
          </p>
        </v-card-text>
        
    <!--    <Calender /> -->
       
        
      </v-card>
    </v-col>
  <v-spacer></v-spacer>
 <v-col cols="12" sm="8" md="6" justify-space-between
>
    <v-card-title class="headline"> Latest Tweet </v-card-title>
      <v-card 
  elevation="5"
  outlined
  shaped justify="center" align="center" >
        <a class="twitter-timeline" href="https://twitter.com/AdmiralBulldog" data-tweet-limit="1" data-width="399" data-theme='light' ></a>
        <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>  
      </v-card>   
      <v-card-title class="headline"> Latest VOD </v-card-title>  
      <v-card   elevation="5"
  outlined
  shaped justify="center" align="center">
       <v-card-text>Latest VOD could be playable from here (or just the link to  <a src="https://admiralbulldog.streamervods.live/">https://admiralbulldog.streamervods.live/</a>)</v-card-text>
       <video style="border-style: solid; border-color:grey; border-radius: 5px;" width="420" height="240" type="video/mp4"></video>
      </v-card>      
    </v-col>
  </v-row>  
</template>
