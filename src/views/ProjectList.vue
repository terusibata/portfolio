<template>
    <div class="project-list-area">
      <div class="Card-area">
	  	<div v-for="project in project_list">
			<projectCard :data="project"></projectCard>
		</div>
      </div>
    </div>
	<div v-if="scrollHeader" @click="scrollTop" class="return-button-area">
		<img src="/public/images/mitukuma_top.png">
	</div>
</template>

<script setup>
import {onBeforeMount, ref, defineProps, onMounted} from 'vue'
import projectCard from "../components/project/Project_card.vue"

const props = defineProps({
    id: {
        type: String,
        default: ""
    }
})

const project_list = ref([
	{
		title:"3密ポイント",
		img:"/images/project/list/cafe_page.png",
		charge:"フロントエンド(モバイル画面)",
		technology:"HTML, CSS, JavaScript",
		detail:"IoTで食堂の混雑度を推定し表示するシステムに、混雑していない場合ポイントが貰え、食堂で使えるサービスを提案。フロントエンドの開発に携わりました。",
		id:"cafe_page"
	},
	{
		title:"募集プラットフォーム",
		img:"/images/project/list/OECU_Project.png",
		charge:"フロントエンド",
		technology:"HTML, CSS, JavaScript",
		detail:"学内専用のプロジェクトメンバー募集用プラットフォーム",
		id:"OECU_Project"
	},
	{
		title:"jetOauth",
		img:"/images/project/list/jetOauth.png",
		charge:"フロントエンド",
		technology:"Node.js, Express",
		detail:"OAuth2.0ログインを簡単に実装できるExpress用のミドルウェア",
		id:"jetOauth"
	}
])

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
.project-list-area{
	display:flex;
	justify-content: center;
    align-items: center;
}
.Card-area{
	margin-top:100px;
}
.return-button-area{
	position: fixed;
	bottom:0;
	right:0;
	cursor: pointer;
}
.return-button-area img{
	width:100px;
}
</style>