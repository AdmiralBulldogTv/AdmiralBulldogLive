<template>
  <v-container fluid>
    <v-row>
      <v-col></v-col>
      <v-col>
        <div class="custom" @click="setWidth()">
          <span class="book" id="book">
            <div class="cover" id="cover">
              <Flipbook
                class="flipbook"
                :gloss="0.001"
                :nPolygons="7"
                :pages="pages"
                :ambient="10"
                :perspective="perspective"
                :clickToZoom="false"
                v-slot="flipbook"
                :canZoomin="false"
                ref="flipbook"
              >
              </Flipbook>
            </div>
            <div class="back_cover"></div>
          </span>
        </div>
      </v-col>
      <v-col></v-col>
    </v-row>
  </v-container>
</template>

<script>
import Flipbook from "flipbook-vue";
export default {
  methods: {
    setWidth: function (event) {
      setTimeout(function () {
        document.getElementsByClassName("bounding-box").style.boxShadow = "2px 2px 2px white";
      }, 999);
    },
  },
  components: {
    Flipbook,
  },
  data: () => {
    return {

      pageNum: null,
      perspective: 700,
      pages: [
        null,
        "https://cdn.discordapp.com/attachments/594922024946892831/903231294505369660/unknown.png",
        "https://cdn.discordapp.com/attachments/594922024946892831/903241427788644412/blank_1.png",
        "https://cdn.discordapp.com/attachments/594922024946892831/903238330622279760/unknown.png",
        "https://cdn.discordapp.com/attachments/594922024946892831/903241427788644412/blank_1.png",
        "https://cdn.discordapp.com/attachments/594922024946892831/903241428375846932/blank_2.png",
        "https://cdn.discordapp.com/attachments/594922024946892831/903242033471291402/backcover.png",
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
  height: calc(85vh - 50px - 40px);
  
}
.flipbook .bounding-box{
  box-shadow: 2px 2px 2px 15px red !important;
}

.book .cover .flipbook .bounding-box{
  box-shadow: 2px 2px 2px 15px red !important;
}

.book {
  
  perspective: 700px !important;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: center;
}

.cover {
  z-index: 0;
  transition: all 1.5s;
  perspective: 1200px;
  
}

.back_cover {
  z-index: -3;
}

.cover,
.back_cover {
  padding-top: 20px;
  height: 100vh;
  width: 50vw;
  background: rgb(0, 0, 0);
  border-radius: 2px 2px 2px 2px;
  position: absolute;
  transform: rotateX(10deg);
  transform-origin: center left;
}
</style>
