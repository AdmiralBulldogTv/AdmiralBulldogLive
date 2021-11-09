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
        "https://cdn.discordapp.com/attachments/594922024946892831/903231294505369660/unknown.png",
        "https://cdn.discordapp.com/attachments/594922024946892831/903316745144639538/blank_1.png",
        "https://cdn.discordapp.com/attachments/594922024946892831/904834751066673273/test_angel.png",
        "https://media.discordapp.net/attachments/594922024946892831/904833289586618428/unknown.png?width=449&height=676",
        "https://cdn.discordapp.com/attachments/594922024946892831/903720781366853632/page_text_1_2.png",        
        "https://cdn.discordapp.com/attachments/594922024946892831/903316745144639538/blank_1.png",
        "https://cdn.discordapp.com/attachments/594922024946892831/903316748932087858/blank_2.png",
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
