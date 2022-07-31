<template>
    <div class="detail-area">
        <div class="title-area">
            <h1>jetOauth</h1>
        </div>
        <div class="body-area">
            <h3>１　jetOauthとは</h3>
            <p>OAuth2.0ログインを簡単に実装できるExpress用のミドルウェアです。以下のリンクから実際に利用できます。</p>
            <div class="title-area" style="margin-bottom:10px;">
                <a href="https://github.com/OECU-Developer/jetOauth" target="_blank" rel="noopener noreferrer">
                    <Button class="GitHub-button"><font-awesome-icon icon="fa-brands fa-github" /> GitHub</Button>
                </a>
                <a href="https://www.npmjs.com/package/jetoauth" target="_blank" rel="noopener noreferrer">
                    <Button class="npm-button"><font-awesome-icon icon="fa-brands fa-npm" /> npmjs</Button>
                </a>
            </div>
            <p>複数のAuth認証をスピーディーに実装できる利点があります。</p>
            <div class="img-area">
                <img src="/images/project/jetOauth/1_1.png">
            </div>
            <div class="img-area">
                <img src="/images/project/jetOauth/1_2.png">
            </div>

            <h3>２　対応プロバイダーについて</h3>
            <p>GoogleやTwitterなど様々なプロバイダーに対応しました！<span class="span-pink">私はLINEとGitHubを担当しました。</span></p>
            <div class="img-area">
                <img src="/images/project/jetOauth/2_1.png">
            </div>

            <h3>３　導入ツールについて</h3>
            <p>GitHubとVScodeを利用し開発しました。</p>
            <div class="img-area">
                <img src="/images/project/jetOauth/3_1.png">
            </div>
        </div>
    </div>
</template>

<script setup>
import Button from "../Button.vue"
import {onBeforeMount, ref} from 'vue'

</script>

<style scoped>
.GitHub-button{
    background-color:#24292E;
    color:white;
    margin-right:5px;
}
.npm-button{
    background-color:#CB3837;
    color:white;
    margin-right:5px;
}


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