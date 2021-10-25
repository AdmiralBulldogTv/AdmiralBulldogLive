<template>
<v-container fluid
    <div class="book">
        <div class="cover"> <img src="https://i.redd.it/msfn7qozjye51.png" alt=""></img><h1>The God Gamer Bible</h1></div>
        <div class="page"><h1>Arch is racist</h1></div>
    
        <div class="last_page">
            <h1>God Gamer commandments</h1>
           <ul>
               <li>thou shall not lie</li>
                <li>thou shall not doubt the god gamer</li>
           </ul>
        </div>
        <div class="back_cover"></div>
    </div> 
</v-container>
</template>

<style lang="scss" scoped >

*{
    margin:0px;
    padding:0px;
    font-family: sans-serif;    
}

.book{
    height:100vh;
    display:flex;
    align-items: center;
    cursor: pointer;
    justify-content: center;
    perspective: 1000px;
}

.book:hover .cover{
    transform: rotateX(10deg) rotateY(-180deg);
}

.book:hover .page{
    transform: rotateX(10deg) rotateY(-180deg);
    z-index: 2;
}

.cover{
    z-index: 1;
    transition:all 3s;
}

.back_cover {
    z-index: -2;
}

.cover,
.back_cover{
    height:55vh;
    width:55vh;
    background: #323232;
    border-radius: 2px 20px 20px 2px;
    position: absolute;
    box-shadow: 1px 1px 5px gray;
    transform: rotateX(10deg);
    transform-origin: center left;
}

.page,
.last_page {
    color:black;
     height:55vh;
    width:55vh;
    background:white;
    position: absolute;
    border-radius: 2px 20px 20px 2px;
    transform-origin: center left;
    transform: rotateX(10deg);
    z-index: -1;
     
}

.page:nth-child(2){
    transition-duration: 3s;
}

.page:nth-child(3){
    transition-duration: 3s;
}

.page:nth-child(4){
    transition-duration: 3s;
}

.page:nth-child(5){
    transition-duration: 3s;
}

.page:nth-child(6){
    transition-duration: 3s;
}

.book:hover .page:nth-child(2) {
    transition-duration: 5.6s;
}

.book:hover .page:nth-child(3) {
    transition-duration: 5.6s;
}
.book:hover .page:nth-child(4) {
    transition-duration: 5.6s;
}
.book:hover .page:nth-child(5) {
    transition-duration: 5.6s;
}
.book:hover .page:nth-child(6) {
    transition-duration: 5.6s;
}

.cover img {
    width:150px;
    display:block;
    border-radius: 50%;
    margin: 20px auto;
    position: relative;
}

.cover h1 {
    text-align:center;
    font-size: 32px;
    color:black;
}
</style>