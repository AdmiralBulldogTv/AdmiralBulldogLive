<template>
  <client-only>
    <v-container fluid>
      <v-row>
        <v-col></v-col>
        <v-col>
          <div class="custom" style="height: 94%; margin-top: 8px">
            <span class="book" id="book">
              <div class="cover" id="cover">
                <Flipbook
                  id="ID_Flipbook"
                  class="flipbook"
                  :gloss="0.001"
                  :pages="pages"
                  :ambient="0.2"
                  :nPolygons="8"
                  :clickToZoom="false"
                  centering
                  v-slot="flipbook"
                  ref="flipbook"
                >
                  <v-row>
                    <v-col>
                      <button @click="flipbook.flipLeft">Previous Page</button>
                    </v-col>
                    <v-col>
                      <button @click="flipbook.flipRight">Next Page</button>
                    </v-col>
                  </v-row>
                </Flipbook>
              </div>

              <div class="back_cover"></div>
            </span>
          </div>
        </v-col>
        <v-col></v-col>
      </v-row>
    </v-container>
  </client-only>
</template>
g
<script>
export default {
  data() {
    return {
      pages: [
        null,
        "https://cdn.discordapp.com/attachments/594922024946892831/938204445114773504/1stcover.png",
        "https://cdn.discordapp.com/attachments/594922024946892831/936006230974013500/pg2.png",
        "https://cdn.discordapp.com/attachments/594922024946892831/936006231305367602/pg3.png",
        "https://cdn.discordapp.com/attachments/594922024946892831/938204445886533682/angel_2.png",
        "https://cdn.discordapp.com/attachments/594922024946892831/938071099617452052/pg5.png",
        "https://cdn.discordapp.com/attachments/594922024946892831/938204446628929628/sword.png",
        "https://cdn.discordapp.com/attachments/594922024946892831/938071100389199872/pg7.png",
        "https://cdn.discordapp.com/attachments/594922024946892831/938204445538386010/angel_1.png",
        "https://cdn.discordapp.com/attachments/594922024946892831/938071101047734314/pgviii.png",
        "https://cdn.discordapp.com/attachments/594922024946892831/938204446255640596/skull.png",
        "https://cdn.discordapp.com/attachments/594922024946892831/938084328351625226/pgX.png",
        "https://cdn.discordapp.com/attachments/594922024946892831/936006233624813648/pg9.png",
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
  height: 95vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cover {
  transition: all 1.5s;
  perspective: 700px;
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
</style>
