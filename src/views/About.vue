<template>
	<div class="flex-area">
		<div class="about-area">
            <div>
                <h1>開発経験<span>Development Experience</span></h1>

                <div class="development-flex-area">
                    <div class="flex-area mobile-block">
                        <ul class="development-area">
                            <li class="development-text"><font-awesome-icon icon="fa-brands fa-python" /> Python</li>
                            <li class="development-text"><font-awesome-icon icon="fa-brands fa-js" /> JavaScript</li>
                            <li class="development-text">C++</li>
                        </ul>
                        <ul class="development-area">
                            <li class="development-text"><font-awesome-icon icon="fa-brands fa-html5" /> HTML</li>
                            <li class="development-text"><font-awesome-icon icon="fa-brands fa-css3-alt" /> CSS</li>
                            <li class="development-text"><font-awesome-icon icon="fa-brands fa-vuejs" /> Vue.js</li>
                        </ul>
                    </div>
                </div>

                <h1>学歴<span>Academic background</span></h1>
                <div class="academic-area">
                    <div class="timeline_item">
                        <div class="time_date">
                            <p class="time">2017</p>
                            <p class="flag">近畿大学泉州高等学校</p>
                        </div>
                        <a href="https://www.kindai-sensyu.ed.jp/" target="_blank" rel="noopener noreferrer">
                            <div class="homepage-button">
                                <Button><font-awesome-icon icon="fa-solid fa-arrow-up-right-from-square" /> ホームページ</Button>
                            </div>
                        </a>
                    </div>

                    <div class="timeline_item">
                        <div class="time_date">
                            <p class="time">2020</p>
                            <p class="flag">大阪電気通信大学 情報通信工学部 情報工学科</p>
                        </div>
                        <a href="https://www.osakac.ac.jp/" target="_blank" rel="noopener noreferrer">
                            <div class="homepage-button">
                                <Button><font-awesome-icon icon="fa-solid fa-arrow-up-right-from-square" /> ホームページ</Button>
                            </div>
                        </a>
                    </div>
                </div>
            
            </div>
		</div>
	</div>
	<div v-if="scrollHeader" @click="scrollTop" class="return-button-area">
		<img src="/images/mitukuma_top.png">
	</div>
</template>

<script setup>
import {useRouter, useRoute} from "vue-router";
import {onBeforeMount, ref, onMounted} from 'vue'
import Button from "../components/Button.vue"

const router = useRouter()
const route = useRoute()
const props = defineProps({
    id: {
        type: String,
        default: ""
    }
})

const scrollHeader = ref(false)
function showScrollTop() {
	if(window.scrollY >= 560) {
		scrollHeader.value = true
	} else {
		scrollHeader.value = false
	}
}

function scrollTop() {
	if(window.scrollY >= 560) {
		window.scrollTo({
			top: 0,
			behavior:'smooth'
		})
	}
}

onMounted(() => {
	window.addEventListener("scroll", showScrollTop, { passive: true })
})
</script>

<style scoped>
.flex-area{
    display: flex;
    justify-content: center;
    align-items: center;
}
.about-area{
	margin-top:100px;
	margin-bottom:60px;	
	width:700px;
	min-height:300px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    border-radius: 10px;
    backdrop-filter: blur(5px);
    background-color: rgba(0, 0, 0, 0.2);
    box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 8px;
    border: 2px rgba(255,255,255,0.4) solid;
    border-bottom: 2px rgba(40,40,40,0.35) solid;
    border-right: 2px rgba(40,40,40,0.35) solid;
}
.return-button-area{
	position: fixed;
	bottom:0;
	right:0;
	cursor: pointer;
    z-index:5;
}
.return-button-area img{
	width:100px;
}

h1 {
    font-size: 30px;
    font-weight: bold;
    text-align: center;
    position: relative;
    margin-bottom:40px;
    color:white;
    line-height:0.95em;
	text-shadow: 
		0 0.05em 0.08em rgba(0,0,0,0.7);
}
h1::before {
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    content: "";
    background-color: #034FBC;
}
h1 span {
    font-size: 17px;
    display: block;
    margin-top: 5px;
}


.development-flex-area{
    width:80%;
    margin:auto;
    gap: 20px;
    border-radius: 5px;
    backdrop-filter: blur(5px);
    background: rgba(0,0,0,0.3);
    box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 8px;
    border: 2px rgba(255,255,255,0.4) solid;
    border-bottom: 2px rgba(40,40,40,0.35) solid;
    border-right: 2px rgba(40,40,40,0.35) solid;
}
.development-area{
    padding: 0;
    width:50%;
    list-style: none;
    text-align:center;
}
.development-area li{
    position: relative;
    padding: 0.5em 1em 0.5em 2.3em;
    margin-bottom:5px;
    color: white;
    font-size: 18px;
    font-weight: bold;
	text-shadow: 
		0 0.05em 0.08em rgba(0,0,0,0.5);
}
.development-area li:after,
.development-area li:before{
    content: "";
    position: absolute;
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
}
.development-area li:before{
    top: 0.7em;
    left: 0.2em;
    width: 12px;
    height: 12px;
    border:2px solid rgb(255, 255, 255, 0.8);
}
.development-area li:after{
    top: 0.9em;
    left: 0.7em;
    width: 14px;
    height: 14px;
    background: rgb(255, 255, 255, 0.3);
    -webkit-transform: rotate(60deg);
    -moz-transform: rotate(60deg);
    -o-transform: rotate(60deg);
    -ms-transform: rotate(60deg);
    transform: rotate(60deg);
}
.development-text{
    white-space: nowrap;
    margin-left:20px;
}

.academic-area {
	position: relative;
	margin: 2em auto;
	padding-bottom: 2em;
    width:95%;
}
.academic-area:before {
	position: absolute;
	top: 0px;
	left: 45px;
	width: 3px;
	height: 100%;
	content: '';
	background: #034FBC;
}
.academic-area .timeline_item {
	margin: 0px 0px 0px 80px;
}
.academic-area .timeline_item .time_date .time {
	font-family: serif;
	font-size: 6em;
	font-weight: bold;
	position: relative;
	margin: 0;
	letter-spacing: 3px;
	color: rgb(3, 79, 188,0.3);
}
.academic-area .timeline_item .time_date .time:before {
	position: absolute;
	top: 50%;
	left: -42px;
	width: 10px;
	height: 10px;
	content: '';
	-webkit-transform: rotate(45deg);
	        transform: rotate(45deg);
	border: 3px solid #034FBC;
	background: #fff;
}
.academic-area .timeline_item .time_date .flag {
	font-size: 1.5em;
	font-weight: bold;
	margin: 0;
	margin-top: -60px;
	color: #338cf9;
    text-shadow: 1px 1px 1px black;
}
.academic-area .timeline_item .homepage-button{
    margin-top:15px;
}
.academic-area .timeline_item .homepage-button Button{
    background: rgba(255,255,255, 0.25);
    box-shadow: rgba(0, 0, 0, 0.7) 2px 4px 4px;
}
.academic-area .timeline_item .homepage-button Button:hover{
    background:#034FBC;
    color:white;
}
.academic-area .timeline_item .homepage-button Button:active{
    box-shadow:none;
}


@media screen and (max-width: 770px){
	.about-area{
		width:90vw;
	}
    .mobile-block{
        display:block;
    }
}
</style>