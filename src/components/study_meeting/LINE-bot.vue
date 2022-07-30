<template>
    <div class="detail-area">
        <div class="title-area">
            <h1>LINE bot 勉強会</h1>
        </div>
        <div class="body-area">
            <h3>１　どんな勉強会？</h3>
            <p>しりとりを遊べるLINE Botを作る<span class="span-pink">ハンズオン勉強会</span>を開催しました。</p>
            <p>本勉強会は、本学学生のみに囚われず、社会人の方々にも参加頂きました。</p>

            <h3>２　開催概要について</h3>
            <p>気軽に参加できるようにmeetを利用しました。</p>
            <p>画面共有で、最初は用語の説明や作成の流れの説明を行いました。その後、参加者と一緒にLINE botの作成を行い実際に動作する所までを勉強会中に行いました。</p>
            <p></p>

            <h4>勉強会で使用した資料</h4>
            <div style="position: relative; width: 100%; height: 0; padding-top: 56.2500%;
    padding-bottom: 48px; box-shadow: 0 2px 8px 0 rgba(63,69,81,0.16); margin-top: 1.6em; margin-bottom: 0.9em; overflow: hidden;
    border-radius: 8px; will-change: transform;">
                <iframe loading="lazy"
                    style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0;margin: 0;"
                    src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAEvVpOL3z0&#x2F;view?embed"
                    allowfullscreen="allowfullscreen" allow="fullscreen">
                </iframe>
            </div>

            <a href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAEvVpOL3z0&#x2F;view?utm_content=DAEvVpOL3z0&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link" target="_blank" rel="noopener noreferrer">
                <div class="link-preview">
                    <font-awesome-icon icon="fa-solid fa-arrow-up-right-from-square" /> 「LINE bot 勉強会」新規タブで開く
                </div>
            </a>
            
            <h3>３　工夫したこと</h3>
            <p>勉強会中に、もっと早く進めたい人やスライド資料だけではどうしてもついていけない人がいることを踏まえ、資料には載せきれなかったもっと詳しい内容をNotionに全部載せました。</p>
            <a href="https://terusibata.notion.site/LINE-BOT-1c6cdf3310054d148da0f3415877f280" target="_blank" rel="noopener noreferrer">
                <div class="link-preview">
                    <font-awesome-icon icon="fa-solid fa-arrow-up-right-from-square" /> 「LINE bot 勉強会」Notion 公開ページ
                </div>
            </a>
            
            <h3>４　高評価を頂きました</h3>
            <p>勉強会終了後に参加者にアンケート調査を行ったところ、プログラムの説明が分かりやすく初心者でも実際に動作することが出来たとコメントを頂きました。</p>
        </div>
    </div>
</template>

<script setup>
    import Button from "../Button.vue"
    import {
        onBeforeMount,
        ref
    } from 'vue'
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
    color: #ffa500;
    border-top: solid 2px #ffa500;
    border-bottom: solid 2px #ffa500;
    background: -webkit-repeating-linear-gradient(-45deg, #FFDEA3, #FFDEA3 3px, #FFF3DE 3px, #FFF3DE 7px);
    background: repeating-linear-gradient(-45deg, #FFDEA3, #FFDEA3 3px, #FFF3DE 3px, #FFF3DE 7px);
}

h2 {
    margin: 0;
    color: white;
}

h3 {
    position: relative;
    color: #333;
    text-shadow: 0 0 2px white;
    background: #FFF3DE;
    z-index: -4;
    border-radius: 0 10px 10px;
}

h3:before {
    content: "";
    position: absolute;
    background: #FFDEA3;
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
    border-bottom: solid 15px #ffa500;
}

h4:after {
    position: absolute;
    content: '';
    bottom: -3px;
    left: 10px;
    width: 100%;
    border-bottom: solid 3px #ffa500;
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