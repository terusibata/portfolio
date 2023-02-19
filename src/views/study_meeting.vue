<template>
	<div class="flex-area">
		<div v-if="!NotFound" class="project-area">
			<LINEbot v-if="id == 'LINE-bot'"></LINEbot>
			<Python v-if="id == 'Python'"></Python>
		</div>
		<NotFoundcard v-else :comment="'勉強会の記事'"></NotFoundcard>
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
import LINEbot from "../components/study_meeting/LINE-bot.vue"
import Python from "../components/study_meeting/Python.vue"
import NotFoundcard from "../components/Card/NotFound_card.vue"

const router = useRouter()
const route = useRoute()
const props = defineProps({
    id: {
        type: String,
        default: ""
    }
})
const NotFound = ref(false)

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
		case "LINE-bot":
			document.title = `LINE bot 勉強会 | terusibata`
			break
		case "Python":
			document.title = `Python 勉強会 | terusibata`
			break
		default:
			document.title = `勉強会の記事が見つかりません`
			NotFound.value = true
			break
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

</style>