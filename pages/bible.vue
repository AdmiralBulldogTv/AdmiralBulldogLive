<template>
  <client-only>
    <v-container fluid>
      <v-row>
        <v-col></v-col>
        <v-col>          
          <div class="custom" style="height:94%; margin-top: 8px;">
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
        "https://cdn.discordapp.com/attachments/594922024946892831/936006230596546580/pg1.png",
        "https://cdn.discordapp.com/attachments/594922024946892831/936006230974013500/pg2.png",
        "https://cdn.discordapp.com/attachments/594922024946892831/936006231305367602/pg3.png",
        "https://cdn.discordapp.com/attachments/594922024946892831/936613342682959912/pgI.png",
        "https://cdn.discordapp.com/attachments/594922024946892831/936006232014209034/pg5.png",
        "https://cdn.discordapp.com/attachments/594922024946892831/936613343064629268/pgVII.png",
        "https://cdn.discordapp.com/attachments/594922024946892831/936006686173433886/unknown.png",
        "https://cdn.discordapp.com/attachments/594922024946892831/936613343442112602/pgXI.png",
        "https://cdn.discordapp.com/attachments/594922024946892831/936006233188626442/pg8.png",
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
