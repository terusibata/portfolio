<template>
    <div class="project-list-area">
      <div class="Card-area">
		<div class="img-area" id="team">
			<div class="img-area-div">
	  			<img src="/images/project/team.png">
			</div>
		</div>
	  	<div v-for="project in project_list">
			<projectCard :data="project"></projectCard>
		</div>
		<div class="img-area" id="posting">
			<div class="img-area-div">
	  			<img src="/images/project/posting.png">
			</div>
		</div>
		<div v-for="qiita in Qiita_list">
			<Qiitacard :data="qiita"></Qiitacard>
		</div>
		<div class="img-area" id="study_meeting">
			<div class="img-area-div">
	  			<img src="/images/project/study_meeting.png">
			</div>
		</div>
		<div v-for="study_meeting in study_meeting_list">
			<studymeetingcard :data="study_meeting"></studymeetingcard>
		</div>
		<div class="img-area" id="original">
			<div class="img-area-div">
	  			<img src="/images/project/original.png">
			</div>
		</div>
		<div v-for="original in original_list">
			<originalcard :data="original"></originalcard>
		</div>
      </div>
    </div>
	<div v-if="scrollHeader" @click="scrollTop" class="return-button-area">
		<img src="/images/mitukuma_top.png">
	</div>
	<div class="Table-of-Contents-area">
		<div>
			<div class="Table-of-Contents-img">
				<img src="/images/mitukuma_table.png">
			</div>
			<div class="Table-of-Contents-list" @click="clickScroll('team')">
				<img src="/images/project/team.png">
			</div>
			<div class="Table-of-Contents-list" @click="clickScroll('posting')">
				<img src="/images/project/posting.png">
			</div>
			<div class="Table-of-Contents-list" @click="clickScroll('study_meeting')">
				<img src="/images/project/study_meeting.png">
			</div>
			<div class="Table-of-Contents-list" @click="clickScroll('original')">
				<img src="/images/project/original.png">
			</div>
		</div>
	</div>
</template>

<script setup>
import {onBeforeMount, ref, onMounted} from 'vue'
import projectCard from "../components/Card/Project_card.vue"
import Qiitacard from "../components/Card/Qiita_card.vue"
import studymeetingcard from "../components/Card/study_meeting_card.vue"
import originalcard from "../components/Card/original_card.vue"

const props = defineProps({
    id: {
        type: String,
        default: ""
    }
})

function clickScroll(id){
	switch(id){
		case "team":
			var clientRect = document.getElementById('team').getBoundingClientRect() ;
			break
		case "posting":
			var clientRect = document.getElementById('posting').getBoundingClientRect() ;
			break
		case "study_meeting":
			var clientRect = document.getElementById('study_meeting').getBoundingClientRect() ;
			break
		case "original":
			var clientRect = document.getElementById('original').getBoundingClientRect() ;
			break
		default:
			console.log("その要素は存在しません")
	}
	var py = window.pageYOffset + clientRect.top - 100;
	window.scrollTo({
		top: py,
		behavior:'smooth'
	})
}

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

const study_meeting_list = ref([
	{
		title:"LINE bot 勉強会",
		img:"/images/project/list/LINE_bot.png",
		detail:"LINE Bot を作るハンズオン勉強会を開催しました。今回は、しりとりを遊べるLINE Botを作りました。学生のみに囚われず、社会人の方々にもご参加頂きました。",
		id:"LINE-bot"
	},
	// {
	// 	title:"Python 勉強会",
	// 	img:"/images/project/list/Python.png",
	// 	detail:"Pythonの基礎的な文法を演習形式で行った勉強会です。今回は、問題の進捗が主催者にすぐ分かるオリジナルアプリで「何が分からないかが分からない」初心者に手厚く迅速なサポートができました。",
	// 	id:"Python"
	// }
])

const original_list = ref([
	{
		title:"ポートフォリオ",
		img:"/images/project/list/portfolio.png",
		detail:"チーム開発、投稿記事、勉強会などを紹介するWebページをVue.jsを使い作成しました。",
		id:"portfolio"
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
	z-index:5;
}
.return-button-area img{
	width:100px;
}
.img-area{
	max-width:700px;
	margin-bottom:30px;
}
.img-area img{
	width:100%;
}

.Table-of-Contents-area{
	position: fixed;
	top:140px;
	left:40px;
    width: 300px;
    height: 500px;
    color: white;
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
.Table-of-Contents-img img{
	width:100%;
}
.Table-of-Contents-list{
    display: flex;
    justify-content: center;
    align-items: center;
	margin-bottom:10px;
	cursor: pointer;
}
.Table-of-Contents-list:active{
	transform: scale(0.9);
}
.Table-of-Contents-list img{
	width:90%;	
}

@media screen and (max-width: 770px){
	.img-area{
		display:flex;
		justify-content: center;
		align-items: center;
	}
	.img-area-div{
		width:90vw;
	}
}
@media screen and (max-width: 1480px){
	.Table-of-Contents-area{
		display:none;
	}
}
</style>