<template>
  <v-container fluid>
    <v-row>
      <v-col></v-col>
      <v-col>
        <div class="custom" @click="setWidth()">
          <span class="book" id="book">
            
            <div class="cover" id="cover">
              <client-only>
              <Flipbook
                class="flipbook"
                :gloss="0.001"
                :pages="pages"
                :ambient="0.2"              
                :clickToZoom="false"
                v-slot="flipbook"
                ref="flipbook"
              >
               <button @click="flipbook.flipLeft">Previous Page</button>
                <button @click="flipbook.flipRight">Next Page</button>
              </Flipbook>
              </client-only>
            </div>
            <div class="back_cover">ALLO</div>
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

      pages: [
        null,
        "https://cdn.discordapp.com/attachments/594922024946892831/907718173900562472/FRONT_COVER_CHNG.png",
        "https://cdn.discordapp.com/attachments/594922024946892831/907718180498186261/LEFT_PAGE.png",
        "https://cdn.discordapp.com/attachments/594922024946892831/907718182880550912/RIGHT_PAGE_1.png",
        "https://cdn.discordapp.com/attachments/594922024946892831/907718180498186261/LEFT_PAGE.png",
        "https://cdn.discordapp.com/attachments/594922024946892831/907718183518093353/RIGHT_PAGE_2.png",        
        "https://cdn.discordapp.com/attachments/594922024946892831/907718180498186261/LEFT_PAGE.png",
        "https://cdn.discordapp.com/attachments/594922024946892831/907718181353832468/RIGHT_PAGE.png",
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
  height: calc(85vh - 50px - 40px);
  
}
.flipbook .bounding-box{
  box-shadow: 2px 2px 2px 15px red !important;
}



.book {
  perspective: 700px !important;
  height: 100vh;
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
  opacity: 0;
  background: rgb(0, 0, 0);
}

.cover,
.back_cover {
  padding-top: 20px;
  height: 100vh;
  width: 50vw;
  border-radius: 2px 2px 2px 2px;
  position: absolute;
  transform: rotateX(10deg);
  transform-origin: center left;
}
</style>
