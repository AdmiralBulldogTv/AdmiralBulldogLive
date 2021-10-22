<template>
  <div class="pa-md-4 mx-lg-auto">
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="6" justify-space-between>
        <v-card
          v-for="n in 1"
          :key="n"
          class="d-flex align-center justify-center"
          height="5vh"
          tile
        >
          <v-card-subtitle class="d-flex align-start flex-column"
            ><h4>Check out Admiralbulldogs Merchandise!</h4>
          </v-card-subtitle>
          <v-card
            v-for="n in 1"
            :key="n"
            class="d-flex align-end flex-column"
            outlined
            tile
          >
          </v-card>
        </v-card>
        <v-card
          v-for="n in 1"
          :key="n"
          class="d-flex align-center justify-center"
          tile
          height="15vh"
        >
          <v-card
            v-for="n in 1"
            :key="n"
            class="d-flex align-end flex-column"
            outlined
            tile
          >
            <Nuxtlink
              ><v-btn
                color="green"
                href="https://www.designbyhumans.com/shop/AdmiralBulldog/"
                >Buy now!</v-btn
              >
            </Nuxtlink>
          </v-card>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
