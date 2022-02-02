<template>
  <client-only>
    <v-container-fluid>
      <v-row class="fill-height" justify="center" style="margin: 2px">
        <v-col style="flex-grow: 0">
          <v-img
            src="https://cdn.discordapp.com/attachments/902130515916783646/938466327956426762/altar.png"
            style="height: calc(70vh - 50px - 40px); margin-top: 8px"
            contain
          >
            <div class="book">
              <Flipbook
                id="ID_Flipbook"
                class="flipbook"
                :gloss="0.001"
                :pages="pages"
                :ambient="0.2"
                :nPolygons="8"
                :clickToZoom="true"
                centering
                v-slot="flipbook"
                ref="flipbook"
              >
                <v-row class="buttons">
                  <v-col>
                    <button @click="flipbook.flipLeft">Previous Page</button>
                  </v-col>
                  <v-col>
                    <button @click="flipbook.flipRight">Next Page</button>
                  </v-col>
                </v-row>
              </Flipbook>
            </div>
          </v-img>
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
        "https://cdn.discordapp.com/attachments/594922024946892831/938392348117860442/COVER2.png",
        "https://cdn.discordapp.com/attachments/594922024946892831/936006230974013500/pg2.png",
        "https://cdn.discordapp.com/attachments/594922024946892831/936006231305367602/pg3.png",
        "https://cdn.discordapp.com/attachments/594922024946892831/938389598378262568/angel_4.png",
        "https://cdn.discordapp.com/attachments/594922024946892831/938071099617452052/pg5.png",
        "https://cdn.discordapp.com/attachments/594922024946892831/938452102542405712/bulldogmesiah.png",
        "https://cdn.discordapp.com/attachments/594922024946892831/938071100389199872/pg7.png",
        "https://cdn.discordapp.com/attachments/594922024946892831/938452101720309821/angel1.png",
        "https://cdn.discordapp.com/attachments/594922024946892831/938071101047734314/pgviii.png",
        "https://cdn.discordapp.com/attachments/594922024946892831/938452102936690748/skull.png",
        "https://cdn.discordapp.com/attachments/594922024946892831/938084328351625226/pgX.png",
        "https://cdn.discordapp.com/attachments/594922024946892831/938452103377076224/sword.png",
        "https://cdn.discordapp.com/attachments/594922024946892831/938391759837335642/pgXI.png",
        "https://cdn.discordapp.com/attachments/594922024946892831/938452102135562330/bull_pg.png",
        "https://cdn.discordapp.com/attachments/594922024946892831/938443002676904056/pgXIV.png",
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
  height: calc(60vh - 50px - 40px);
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
