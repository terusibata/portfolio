<template>
    <div class="detail-area">
        <div class="title-area">
            <h1>募集プラットフォーム</h1>
        </div>
        <div class="body-area">
            <h3>１　なぜ作ったのか</h3>
            <p>大学のホームページには、現在進行中のプロジェクトが一覧で見れる場所がなく、プロジェクトに参加しようとしても探すことが困難であることに気が付きました。</p>
            <p>今からプロジェクトを始めようとしているチームやメンバーを募集したいチームに向けてのプラットフォームを作成しました。</p>

            <h3>２　Webサイトについて</h3>
            <p>フレームワークは<span class="span-pink">Vue.js</span>を使いました。大学の学生のみが利用できるようにGoogleログイン方式にしました。</p>
            <div class="img-area">
                <img src="/images/project/OECU_Project/2_1.png">
            </div>
            <p>プロジェクト募集は、プロジェクト作成から簡単に行うことができます。</p>
            <div class="img-area">
                <img src="/images/project/OECU_Project/2_2.png">
            </div>
            <p>プロジェクトの詳細情報の入力は、エディタ画面で自由に編集できます。オリジナルの紹介をすることができます！</p>
            <div class="img-area">
                <img src="/images/project/OECU_Project/2_3.png">
            </div>
            <p>MyPageで参加プロジェクトを確認できます。</p>
            <div class="img-area">
                <img src="/images/project/OECU_Project/2_4.png">
            </div>
        </div>
    </div>
</template>

<script setup>
import Button from "../Button.vue"
import {onBeforeMount, ref, defineProps} from 'vue'

</script>

<style scoped>
.detail-area{
    width:90%;
}
.title-area,
.img-area{
    display: flex;
    justify-content: center;
    align-items: center;
}
h1{
    font-size:30px;
    padding:0 20px;
    margin-top:20px;
    color: #6cb4e4;
    border-top: solid 2px #6cb4e4;
    border-bottom: solid 2px #6cb4e4;
    background: -webkit-repeating-linear-gradient(-45deg, #f0f8ff, #f0f8ff 3px,#e9f4ff 3px, #e9f4ff 7px);
    background: repeating-linear-gradient(-45deg, #f0f8ff, #f0f8ff 3px,#e9f4ff 3px, #e9f4ff 7px);
}
h2{
    margin:0;
    color:white;
}
h3 {
    position: relative;
    color: #333;
    text-shadow: 0 0 2px white;
    background: #e0f3ff;
    z-index: -4;
    border-radius: 0 10px 10px;
}

h3:before {
    content: "";
    position: absolute;
    background: #9de5ff;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    top: 50%;
    left: -15px;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    z-index: -1;
}
p{
    color:white;
    font-family: "游ゴシック体", YuGothic, "YuGothic M", sans-serif;
    text-shadow: 1px 1px 0 rgba(0,0,0,.8);
    margin-bottom:10px;
}
.span-pink{
    background: linear-gradient(transparent 70%, #ff99ff 60%);
}
.span-red{
    background-color: #ffff66;
    color: #ff3333;
    text-shadow: none;
    font-weight:900;
}
.span-black{
    background: linear-gradient(transparent 90%, black 60%);
}
.img-area{
    margin-bottom:10px;
}
.img-area img{
    object-fit: contain;
    width: 85%;
    height: 85%;
}

h4 {
    position: relative;
    padding-left: 25px;
    color:white;
    margin-bottom:10px;
}
h4:before {
    position: absolute;
    content: '';
    bottom: -3px;
    left: 0;
    width: 0;
    height: 0;
    border: none;
    border-left: solid 15px transparent;
    border-bottom: solid 15px rgb(119, 195, 223);
}
h4:after {
    position: absolute;
    content: '';
    bottom: -3px;
    left: 10px;
    width: 100%;
    border-bottom: solid 3px rgb(119, 195, 223);
}
a{
    text-decoration: none; 
}
.link-preview{
    background-color:#4285F4;
    color:white;
    padding:5px 15px;
    border-radius:3px;
    box-shadow: rgba(0, 0, 0, 0.5) 2px 1px 1px;
    margin-bottom:10px;
}
.link-preview:hover{
    background-color:#1a73e8;
}
.link-preview:active{
    box-shadow: none;
}
</style>