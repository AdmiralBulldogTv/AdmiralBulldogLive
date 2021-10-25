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
        "https://cdn.discordapp.com/attachments/902130515916783646/902273693982556160/unknown.png",
        "https://media.istockphoto.com/photos/the-book-of-genesis-01-picture-id115866619?k=20&m=115866619&s=612x612&w=0&h=al9xBHQZOCujcYesfC9SkMRREgBUxXfLKcWuopwFkWg=",
        "https://i.redd.it/msfn7qozjye51.png",
        "https://sm.ign.com/t/ign_ap/screenshot/default/69006_vtyq.1200.jpg",
        "https://dmarket.com/blog/dota2-ranks/62106_hu00f58b95d5cc19d972e728ce635b22ce_303640_675x0_resize_q75_lanczos.jpg",
        "https://dmarket.com/blog/dota2-ranks/62106_hu00f58b95d5cc19d972e728ce635b22ce_303640_675x0_resize_q75_lanczos.jpg",
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
