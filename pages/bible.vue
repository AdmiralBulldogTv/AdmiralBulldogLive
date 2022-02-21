<template>
  <client-only>
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
          <v-card class="table">
            <div class="book">
              <Flipbook
                id="ID_Flipbook"
                class="flipbook"
                :gloss="0.001"
                :pages="pages"
                :ambient="0.2"
                :nPolygons="8"
                centering
                v-slot="flipbook"
                ref="flipbook"
              >
                <v-row class="buttons">
                  <v-col>
                    <button @click="flipbook.flipLeft"></button>
                  </v-col>
                  <v-col>
                    <button @click="flipbook.flipRight"></button>
                  </v-col>
                </v-row>
              </Flipbook>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container-fluid>
  </client-only>
</template>
<script>
export default {
  data() {
    return {
      pages: [
        null,
        "../bible/COVER2.png",
        "../bible/pg2.png",
        "../bible/thygod.png",
        "../bible/angel_4.png",
        "../bible/pg5.png",
        "../bible/bulldogmesiah.png",
        "../bible/pg7.png",
        "../bible/angel1.png",
        "../bible/pgviii.png",
        "../bible/skull.png",
        "../bible/pgX.png",
        "../bible/sword.png",
        "../bible/pgXI.png",
        "../bible/bullpg.png",
        "../bible/pgXIV.png",
        "../bible/pg9.png",
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
html,
body {
  margin: 5;
  padding: 5;
}

.flipbook {
  width: 50vw;
  height: calc(75vh - 50px - 40px);
}
.flipbook .bounding-box {
  box-shadow: 2px 2px 2px 15px red !important;
}

.book {
  margin-top: 8px;
  display: flex;
  justify-content: center;
}

.buttons {
  display: flex;
  justify-content: center;
  padding-bottom: 25px;
}

.back_cover {
  z-index: -3;
  opacity: 1;
  background: rgb(0, 0, 0);
}

.cover,
.back_cover {
  padding-top: 20px;
  height: 100vh;
  width: 50vw;
  border-radius: 2px 2px 2px 2px;
  position: absolute;
  transform: rotateX(0);
  transform-origin: center left;
}

.table {
  height: 94%;
  margin-top: 8px;
  background-image: url("https://cdn.discordapp.com/attachments/902130515916783646/938466327956426762/altar.png");
  background-size: cover;
}
</style>
