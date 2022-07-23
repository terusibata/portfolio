<template>
    <div class="background-img">
        <img src="/images/background.jpeg">
    </div>
    <div :class="isLoading? 'loading': ''"></div>
    <header>
        <div class="left center logo">
            <div class="hamburger"></div>
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
</template>

<script setup>
//import Button from "./Button.vue"
import { ref, defineProps } from "vue";
import {useRouter, useRoute} from "vue-router";
const isLoading = ref(true)
const router = useRouter()
const route = useRoute()

router.beforeEach((to, from, next)=>{
    isLoading.value = true
    next()
})
router.afterEach(()=>{
    isLoading.value = false
})


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
.logo{
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
</style>