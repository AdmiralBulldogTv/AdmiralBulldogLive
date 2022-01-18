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
        "https://cdn.discordapp.com/attachments/594922024946892831/907718173900562472/FRONT_COVER_CHNG.png",
        "https://cdn.discordapp.com/attachments/594922024946892831/911235300498493481/LEFT_PAGE_GOD.png",
        "https://cdn.discordapp.com/attachments/594922024946892831/910626482823503923/PAGE_1.png",
        "https://cdn.discordapp.com/attachments/594922024946892831/907729651047206912/LEFT_PAGE_2.png",
        "https://cdn.discordapp.com/attachments/594922024946892831/910626484782243840/PAGE_2.png",
        "https://cdn.discordapp.com/attachments/594922024946892831/907729654729809920/LEFT_PAGE_3.png",
        "https://cdn.discordapp.com/attachments/594922024946892831/910626488263520276/PAGE_3.png",
        "https://cdn.discordapp.com/attachments/594922024946892831/910617926887936000/LEFT_PAGE_4.png",
        "https://cdn.discordapp.com/attachments/594922024946892831/910626486455779379/PAGE_4.png",
        "https://cdn.discordapp.com/attachments/594922024946892831/907718163091845141/BACK_COVER.png",
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
