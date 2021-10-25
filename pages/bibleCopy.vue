<template>
  <v-container fluid>
    <v-row>
      <v-col></v-col>
      <v-col>
        <div class="custom" v-on:click="setWidth">
        <span class="book" id="book">         
         <div class="cover" id="cover">  </div>
         <Flipbook
            class="flipbook"
            :gloss="0"
            :pages="pages"
            :perspective="1000"
            v-slot="flipbook"
            :canZoomin="false"
            ref="flipbook"
            >
             
          </Flipbook>
         <div class="back_cover"></div>
          </span> 
        </div>
      </v-col>
      <v-col></v-col>
    </v-row>
  </v-container>
</template>

<script>

 function setWidth() {
    var two = document.getElementById("book");
    var one = document.querySelector('.bounding-box')
     document.getElementById("book").width = one;
  }

import Flipbook from "flipbook-vue";
export default {
 methods: {
     setWidth: function (event) {
         setTimeout(function(){ 
        var two = document.getElementById("cover").offsetWidth;
         var one = document.querySelector('.bounding-box').offsetWidth;
         document.getElementById("cover").style.width = one+20+"px";
         ocument.getElementById("cover").style.height = 8005+"px";            
         }, 999);
         
        
        }
     },
  components: {
    Flipbook,
  },
  data: () => {
    return {
      pageNum: null,
      pages: [
        null,
        "https://c8.alamy.com/comp/BM6X08/cover-page-of-the-koran-BM6X08.jpg",
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
.flipbook .bounding-box {
  box-shadow: 0 0 40px #000;
}

.custom {
  
}

.click-to-flip:active .cover
{ 
    
    height: calc(85vh - 50px - 15px);
    width:51vw;
}

.book{
    height:100vh;
    width:100%;
    display:flex;
    align-items: center;
    cursor: pointer;
    justify-content: center;
}

.cover{
    z-index: 0;
    transition:all 1.5s;
     
}

.back_cover {
    z-index: -3;
}

.cover,
.back_cover{
    height: calc(85vh - 50px - 40px);
    width: 25vw;
    background: rgb(27, 133, 27);
    border-radius: 2px 2px 2px 2px;
    position: absolute;
    box-shadow: 1px 1px 5px gray;
    transform: rotateX(10deg);
    transform-origin: center left;
}


.cover img {
    width:150px;
    display:block;
    border-radius: 50%;
    margin: 20px auto;
    position: relative;
}

</style>
