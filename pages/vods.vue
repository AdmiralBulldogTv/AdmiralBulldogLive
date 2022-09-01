<template>
  <v-container-fluid>
    <v-row
      class="fill-height"
      justify="center"
      style="
        margin-left: 2px;
        margin-right: 2px; 
        padding-top:10px 
        padding-bottom:8px;"
    >
      <v-col>
        <v-card class="" style="height: 95%; overflow-y: none">
          <v-alert
            border="bottom"
            color="orange"
            dense
            type="info"
            style="text-align: center"
          >
            Bulldogs OBS plugin that recoded the VODs broke :-( There wont be
            any <b>new</b> VODs for a bit...
          </v-alert>
          <iframe
            frameBorder="0"
            style="width: 100%; height: 93%"
            src="https://vods.admiralbulldog.live/"
            allowfullscreen="true"
          >
            <p>Your browser does not support iframes.</p>
          </iframe>
        </v-card>
      </v-col>
    </v-row>
  </v-container-fluid>
</template>
