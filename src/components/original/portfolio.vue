<template>
    <div class="detail-area">
        <div class="title-area">
            <h1>ポートフォリオ</h1>
        </div>
        <div class="body-area">
            <h3>★　作ったきっかけ</h3>
            <p>チームで様々なプロジェクトや勉強会を行い、過去のプロジェクトについてまとめて置きたかったからです。</p>
            <h3>★　使ったフレームワーク</h3>
            <p><spna class="span-pink">Vue.js</spna></p>
            <h3>★　こだわりポイント</h3>
            <h4>ガラス感のあるデザインにしました！</h4>
            <p>Glass Morphismを用いました。</p>
            <h4>PC画面の際に目次を表示しました！</h4>
            <p>目次をクリックするとスクロールされます。</p>
            <div class="img-area">
                <img src="/images/project/portfolio/1.png">
            </div>
            <h4>「みくつま」を取り入れました！</h4>
            <p>キャラクター画像を使うことでデザインをより良くしました。</p>
            <div class="img-area">
                <img src="/images/project/portfolio/2.png">
            </div>
        </div>
    </div>
</template>

<script setup>
import Button from "../Button.vue"
import {onBeforeMount, ref} from 'vue'

</script>

<style scoped>
.detail-area {
    width: 90%;
}

.title-area,
.img-area {
    display: flex;
    justify-content: center;
    align-items: center;
}

h1 {
    font-size: 30px;
    padding: 0 20px;
    margin-top: 20px;
    color: #FF8294;
    border-top: solid 2px #FF8294;
    border-bottom: solid 2px #FF8294;
    background: -webkit-repeating-linear-gradient(-45deg, #FFD1D8, #FFD1D8 3px, #FFEBEE 3px, #FFEBEE 7px);
    background: repeating-linear-gradient(-45deg, #FFD1D8, #FFD1D8 3px, #FFEBEE 3px, #FFEBEE 7px);
}

h2 {
    margin: 0;
    color: white;
}

h3 {
    position: relative;
    color: #333;
    text-shadow: 0 0 2px white;
    background: #FFEBEE;
    z-index: -4;
    border-radius: 0 10px 10px;
}

h3:before {
    content: "";
    position: absolute;
    background: #FFD1D8;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    top: 50%;
    left: -15px;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    z-index: -1;
}

p {
    color: white;
    font-family: "游ゴシック体", YuGothic, "YuGothic M", sans-serif;
    text-shadow: 1px 1px 0 rgba(0, 0, 0, .8);
    margin-bottom: 10px;
}

.span-pink {
    background: linear-gradient(transparent 70%, #ff99ff 60%);
}

.span-red {
    background-color: #ffff66;
    color: #ff3333;
    text-shadow: none;
    font-weight: 900;
}

.span-black {
    background: linear-gradient(transparent 90%, black 60%);
}

.img-area {
    margin-bottom: 10px;
}

.img-area img {
    object-fit: contain;
    width: 85%;
    height: 85%;
}

h4 {
    position: relative;
    padding-left: 25px;
    color: white;
    margin-bottom: 10px;
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
    border-bottom: solid 15px #FF8294;
}

h4:after {
    position: absolute;
    content: '';
    bottom: -3px;
    left: 10px;
    width: 100%;
    border-bottom: solid 3px #FF8294;
}

a {
    text-decoration: none;
}

.link-preview {
    background-color: #4285F4;
    color: white;
    padding: 5px 15px;
    border-radius: 3px;
    box-shadow: rgba(0, 0, 0, 0.5) 2px 1px 1px;
    margin-bottom: 10px;
}

.link-preview:hover {
    background-color: #1a73e8;
}

.link-preview:active {
    box-shadow: none;
}
</style>