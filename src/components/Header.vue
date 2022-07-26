<template>
    <div class="background-img">
        <img src="/images/background.jpeg">
    </div>
    <div :class="isLoading? 'loading': ''"></div>
    <header>
        <div @click="openMenu" class="openbtn6 left">
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div class="left center title-text">
            <a @click="goPage('home')">
                <h1>ポートフォリオ</h1>
            </a>
        </div>
        <div class="right menu">
            <div @click="goPage('home')" class="button">
                <p><font-awesome-icon icon="house" /> ホーム</p>
            </div>
            <div @click="goPage('about')" class="button">
                <p><font-awesome-icon icon="user" /> 私について</p>
            </div>
            <div @click="goPage('projectlist')" class="button">
                <p><font-awesome-icon icon="book" /> プロジェクト</p>
            </div>
        </div>
    </header>
    <div v-if="mobile_menu" class="mobile-menu-area">
        <div>
            <div class="mobile-img-area">
                <img src="/images/mobile_menu.png">
            </div>

            <div class="mobile-button-area">
                <Button @click="closeMenu">閉じる</Button>
            </div>
        </div>
    </div>
</template>

<script setup>
import Button from "./Button.vue"
import { ref, defineProps } from "vue";
import {useRouter, useRoute} from "vue-router";
const isLoading = ref(true)
const router = useRouter()
const route = useRoute()
const mobile_menu = ref(false)

router.beforeEach((to, from, next)=>{
    isLoading.value = true
    next()
})
router.afterEach(()=>{
    isLoading.value = false
})

function openMenu(e){
    if(e.currentTarget.classList.contains('active')){
        e.currentTarget.classList.remove('active');
        mobile_menu.value = false
    }else{
        e.currentTarget.classList.add('active');
        mobile_menu.value = true
    }
}
function closeMenu(){
    setTimeout(function(){
        let elements = document.getElementsByClassName('active');
        elements[0].classList.remove('active');
        mobile_menu.value = false
    }
    ,400);
}

function goPage(page){
    console.log(page)
    switch(page){
        case "home":
            router.push("/");
            break;
        case "about":
            router.push("/about");
            break;
        case "projectlist":
            router.push("/projectlist");
            break;
        default:
            router.push("/notFound");
    }
}

</script>
<style scoped>
.background-img{
    z-index:-1;
    position: fixed;
    inset: 0;
    margin: auto;
    width:100vw;
    height:100vh;
}
.background-img img{
    position:absolute ;
    width:100vw;
    height:100vh;
    overflow: hidden;
    object-fit: cover;
}
.link-style{
    color: black;
    text-decoration: none;
}
div{
    height: 100%;
}
.title-text{
    margin-left: 15px;
}
.left{
    float: left;
}
.right{
    float: right;
}
.menu{
    display: flex;
    margin-right: 10px;
}
.createProject{
    height: 45px;
    width: 150px;
}
header{
    height: 60px;
    user-select: none;
    position: fixed;
    top:5px;
    left:0;
    width:95%;
    z-index: 9997;
    border-radius: 0 10px 10px 0;
    backdrop-filter: blur(5px);
    background-color: rgba(255,255,255, 0.25);
    box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 8px;
    border: 2px rgba(255,255,255,0.2) solid;
    border-bottom: 2px rgba(40,40,40,0.2) solid;
    border-right: 2px rgba(40,40,40,0.2) solid;
    color: white;
    gap: 20px;
}
a{
    font-family: "游ゴシック体", YuGothic, "YuGothic M", sans-serif;
    text-decoration: none;
    color: white;
    text-shadow: 3px 3px 3px black;
}
.flex{
    display: flex;
}
.center{
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
.button{
    width:135px;
    height:40px;
    margin:auto 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    background: rgba(255,255,255, 0.25);
    box-shadow: rgba(0, 0, 0, 0.7) 2px 4px 4px;
    cursor: pointer;
    transform: skew(-10deg)
}
.button:active{
    box-shadow:none
}
.button p{
    color:black;
    transform: none
}
.button:hover{
    background: #034FBC;
}
.button:hover p{
    color:white;
}

.loading { 
  position: fixed;
  border-radius:10px;
  top:0px;
  height: 4px;
  right:100%;
  background:#7B35E2; 
  width:95%;
  animation:borealisBar 3s linear infinite;
  z-index: 9998;
  box-shadow: inset 2px 2px 6px #489dcf,
            inset -2px -2px 6px #62d5ff;
}
@keyframes borealisBar {
  0% {
    left:0%;
    right:100%;
    width:0%;
  }
  10% {
    left:0%;
    right:75%;
    width:20%;
  }
  90% {
    right:0%;
    left:75%;
    width:20%;
  }
  100% {
    left:100%;
    right:0%;
    width:0%;
  }
}

.openbtn6{
    position: relative;/*ボタン内側の基点となるためrelativeを指定*/
    cursor: pointer;
    display:none;
    width: 50px;
    height:50px;
    border-radius: 5px;
    top:0;
}

/*ボタン内側*/
.openbtn6 span{
    display: inline-block;
    transition: all .4s;/*アニメーションの設定*/
    position: absolute;
    left: 14px;
    height: 3px;
    border-radius: 2px;
    background: #fff;
}


.openbtn6 span:nth-of-type(1) {
    top:15px; 
    width: 45%;
}

.openbtn6 span:nth-of-type(2) {
    top:23px;
    width: 35%;
}

.openbtn6 span:nth-of-type(3) {
    top:31px;
    width: 20%;
}

/*activeクラスが付与されると線が回転して×になる*/

.openbtn6.active span:nth-of-type(1) {
    top: 18px;
    left: 18px;
    transform: translateY(6px) rotate(-135deg);
    width: 30%;
}

.openbtn6.active span:nth-of-type(2) {
    opacity: 0;
}

.openbtn6.active span:nth-of-type(3){
    top: 30px;
    left: 18px;
    transform: translateY(-6px) rotate(135deg);
    width: 30%;
}

.mobile-menu-area{
    position: fixed;
    inset: 0;
    margin: auto;
    z-index:10000;
    width: 90vw;
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    border-radius: 10px;
    backdrop-filter: blur(5px);
    background-color: rgba(255,255,255, 0.075);
    box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 8px;
    border: 2px rgba(255,255,255,0.4) solid;
    border-bottom: 2px rgba(40,40,40,0.35) solid;
    border-right: 2px rgba(40,40,40,0.35) solid;
}
.mobile-img-area{
    height:auto;
}
.mobile-img-area img{
    width:250px;
}
.mobile-button-area{
    display: flex;
    justify-content: center;
    align-items: center;
    height:auto;
}

@media screen and (max-width: 770px){
    .menu{
        display:none;
    }
    .openbtn6{
        display:inline;
    }
    header{
        height:50px;
    }
    h1{
        margin:0;
    }
}
</style>