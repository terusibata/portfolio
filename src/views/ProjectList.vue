<template>
    <div class="project-list-area">
      <div class="Card-area">
	  	<div v-for="project in project_list">
			<projectCard :data="project"></projectCard>
		</div>
		<div v-for="qiita in Qiita_list">
			<Qiitacard :data="qiita"></Qiitacard>
		</div>
      </div>
    </div>
	<div v-if="scrollHeader" @click="scrollTop" class="return-button-area">
		<img src="/images/mitukuma_top.png">
	</div>
</template>

<script setup>
import {onBeforeMount, ref, defineProps, onMounted} from 'vue'
import projectCard from "../components/project/Project_card.vue"
import Qiitacard from "../components/project/Qiita-card.vue"

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
	},
	{
		title:"ugoiita-code",
		img:"/images/project/list/ugoiita-code.jpg",
		charge:"フロントエンド",
		technology:"HTML, CSS, JavaScript",
		detail:"有名な技術サイトであるQiitaをターゲットに実際に「うごいた」記事を共有できる Chrome 拡張機能を開発した。",
		id:"ugoiita-code"
	},
	{
		title:"∞ピクチャ",
		img:"/images/project/list/unlimit-picture.png",
		charge:"フロントエンド",
		technology:"Vue.js",
		detail:"画像を無限にアップロードできるWebアプリ",
		id:"unlimit-picture"
	}
])

const Qiita_list = ref([
	{
		title:"notion-py 使ってみた",
		img:"/images/project/list/notion-py.png",
		detail:"notion-py（非公式）についての記事を調べても日本語で書かれていることが少ないんですよね。自分が使ってみたことをまとめて置きます！",
		link:"https://qiita.com/terusibata/items/aef67a87a5dd2bb3f7f6"
	},
	{
		title:"Notion API 使ってみた",
		img:"/images/project/list/notion_API.png",
		detail:"Notion API(公式のもの)を使って何か作りたいということで、Twitterのトレンドを取得して、トレンドのキーワードに関連するツイートを保存するプログラムを作りました。",
		link:"https://qiita.com/terusibata/items/57fbacf522e101b6a264"
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