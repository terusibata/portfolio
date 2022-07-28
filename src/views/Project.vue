<template>
	<div class="flex-area">
		<div class="project-area">
			<cafepage v-if="id == 'cafe_page'"></cafepage>
			<jetOauth v-if="id == 'jetOauth'"></jetOauth>
			<OECUProject v-if="id == 'OECU_Project'"></OECUProject>
			<ugoiitacode v-if="id == 'ugoiita-code'"></ugoiitacode>
			<unlimitpicture v-if="id == 'unlimit-picture'"></unlimitpicture>
		</div>
	</div>
	<div v-if="scrollHeader" @click="scrollTop" class="return-button-area">
		<img src="/images/mitukuma_top.png">
	</div>
	<div v-else @click="goProject" class="return-button-area">
		<img src="/images/mitukuma_return.png">
	</div>
</template>

<script setup>
import {useRouter, useRoute} from "vue-router";
import {onBeforeMount, ref, onMounted} from 'vue'
import projectCard from "../components/project/Project_card.vue"
import cafepage from "../components/project/cafe_page.vue"
import jetOauth from "../components/project/jetOauth.vue"
import OECUProject from "../components/project/OECU_Project.vue"
import ugoiitacode from "../components/project/ugoiita-code.vue"
import unlimitpicture from "../components/project/unlimitpicture.vue"

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

function goProject(){
	router.push("/projectlist");
}

onBeforeMount(()=>{
	scrollTop()
	console.log(props.id)
	switch(props.id){
		case "cafe_page":
			document.title = `3密ポイント | terusibata`
			break
		case "OECU_Project":
			document.title = `OECUプロジェクト | terusibata`
			break
		case "jetOauth":
			document.title = `jetOauth | terusibata`
			break
		case "ugoiita-code":
			document.title = `ugoiita-code | terusibata`
			break
		case "unlimit-picture":
			document.title = `∞ピクチャ | terusibata`
			break
		default:
			router.push("/notFound");
	}
})
</script>

<style scoped>
.flex-area{
    display: flex;
    justify-content: center;
    align-items: center;
}
.project-area{
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
    background-color: rgba(255,255,255, 0.075);
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

</style>