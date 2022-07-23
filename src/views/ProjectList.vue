<template>
    <div class="project-list-area">
      <div class="Card-area">
	  	<div v-for="project in project_list">
			<projectCard :data="project"></projectCard>
		</div>
      </div>
    </div>
</template>

<script setup>
import {onBeforeMount, ref, defineProps} from 'vue'
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
		img:"/images/river_00006.jpg",
		charge:"フロントエンド(モバイル画面)",
		technology:"HTML, CSS, JavaScript",
		detail:"IoTで食堂の混雑度を推定し、混雑していない場合に食堂で使えるポイントが貰えるサービスを提案。フロントエンドの開発に携わりました。",
		id:"cafe_page"
	},
	{
		title:"募集プラットフォーム",
		img:"/images/river_00006.jpg",
		charge:"フロントエンド",
		technology:"HTML, CSS, JavaScript",
		detail:"学内専用のプロジェクトメンバー募集用プラットフォーム",
		id:"OECU_Project"
	},
	{
		title:"jetOauth",
		img:"/images/river_00006.jpg",
		charge:"フロントエンド",
		technology:"Node.js, Express",
		detail:"OAuth2.0ログインを簡単に実装できるExpress用のミドルウェア",
		id:"jetOauth"
	}
])

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
</style>