<template>
    <div class="detail-area">
        <div class="title-area">
            <h1>食堂の混雑度推定アプリ</h1>
        </div>
        <div class="title-area">
            <h2>- 3密ポイントとは -</h2>
        </div>
        <div class="body-area">
            <h3>１　食堂の混雑度推定アプリについて</h3>
            <p>オープンキャンパスの出し物として食堂内の混雑度を推定・予測するアプリを開発しました。</p>
            <p>iPhoneなどの端末から発せられるBluetooth信号から食堂内に何人が入店しているかを推定しています。Bluetooth信号を発する端末数には個人差があるため、実際の人数とずれないように統計的に推定しています。</p>
            <div class="img-area">
                <img src="/images/project/cafe_page/1_1.png">
            </div>
            <div class="img-area">
                <img src="/images/project/cafe_page/1_2.png">
            </div>
            <h4>混雑度予報プロジェクト　〜説明動画〜</h4>
            <div class="iframe-area">
                <iframe src="https://www.youtube.com/embed/arrfuXJt28c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

            <h3>２　混雑度を自主的に緩和するには</h3>
            <p>混雑度を表示するだけでは、自主的に混雑を避けようとする人は稀であると考えました。広告で「混雑を避けましょう」と書いてもほとんど意味を成しません。</p>
            <p><span class="span-pink">それはなぜか？</span></p>
            <p>答えは簡単です。</p>
            <p><span class="span-red">参加するメリットが感じられないからです。</span></p>
            <p>この課題を解決するための仕組みとして、<span class="span-pink">食堂が空いている時にカードリーダに学生証をタッチするとポイントが貯まるサービスを開発しました。</span>1回につき10ポイント(10円分)で100ポイント貯まると食堂で100円引きされるシステムです。予算は、教授に熱意を伝え、<span class="span-black">学長裁量経費</span>から捻出していただきました。</p>
            <div class="img-area">
                <img src="/images/project/cafe_page/2_1.jpeg">
            </div>
            <h4>3密ポイント「サービス紹介」</h4>
            <div class="iframe-area">
                <iframe src="https://www.youtube.com/embed/yXa9ohTSqAQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <p>本大学で初めて学部1・2年生(全24名)が自主的に大学で大規模に使われるシステムを作る前例を作りました。 </p>

            <h3>３　「3密ポイント」を命名しました</h3>
            <p>新型コロナウイルスにより、「3密」を避けることが大事だとニュースで報道されているのを見て、3密を避けたら得をするにはどうすればいいかを考えたときにポイントを付与すればいいという発想になったことから、<span class="span-pink">「3密ポイント」</span>と提案しました。</p>
            <p>ロゴはチームリーダーがオリンピックをインスパイアしており、略称「みつぽ」を組み合わせたデザインとなりました。</p>
            <div class="img-area">
                <img src="/images/project/cafe_page/3_1.png">
            </div>

            <h3>４　チームの一員として頑張ったこと</h3>
            <h4>デザイン</h4>
            <p>デザインを考えるの初めてのことで、最初はノリで作ればいい感じになるだろうといきなりHTMLを書き始めたのですが、もうそれは大変なデザインになってしまい、チームのみんなと話し合いながら<span class="span-pink">Figmaを使ってデザインを考えました。</span></p>
            <h4>GitHub</h4>
            <p>ソースコードの管理はGitHubを利用しました。チームのメンバーとプログラムを共有しながら作成し、少しずつ進んでいく過程が楽しかったです。大きなプロジェクトということもあり、最終的にはPull requestsが約200個ほどまで行きました！</p>
            <h4>モバイル画面</h4>
            <p>HTMLとCSSを本格的に触ったのもこのプロジェクトが初めてなのでコードもぐちゃぐちゃですがFigmaで作ったデザイン通りのモバイル画面ができたと思っています。</p>
            <p>特に<span class="span-pink">ユーザビリティを重視</span>して作ったのでシンプルで使いやすくなりました！</p>
            <p>Home画面ではJ号館とZ号館の混雑度を同時に見れ、詳細画面では5分後までの混雑度を一覧で見ることができます。</p>
            <div class="img-area">
                <img src="/images/project/cafe_page/4_1.png">
            </div>
            <p>MyPgaeでは、<span class="span-pink">Googleログイン</span>でユーザーを判定し、現在のポイントの確認や100円割引の予約を行うことができます。予約完了画面では、リアルタイムで利用状況を判断しています。</p>
            <div class="img-area">
                <img src="/images/project/cafe_page/4_2.png">
            </div>
            <p><span class="span-pink">ポイントを貯める楽しさをさらに向上させるため、ランキング機能を実装しました。</span>また、プロモーションコードを利用することでポイントを獲得できるようにしました！</p>
            <div class="img-area">
                <img src="/images/project/cafe_page/4_3.png">
            </div>

            <h3>５　キャラクターについて</h3>
            <p>このアプリの初期キャラは以下のキャラクターでした。しかし、学科主任からロリキャラがダメだと言われ泣く泣くキャラクターの作成を同学年の人に書いてもらいました。</p>
            <div class="img-area">
                <img src="/images/project/cafe_page/5_1.png">
            </div>
            <p class="title-area">「みつくま」(3密ポイント公式)</p>

            <h3>６　宣伝しました！</h3>
            <p>電ch! VTuber projectのOECU放送局にてVTuberの方と「3密ポイント」の紹介をYouTubeLIVE配信を行いました！</p>
            <p>スライドを使いプロジェクトについてより詳しく知ってもらえるように紹介しました。<span class="span-pink">モバイル画面の説明では自分も登場しています。</span></p>
            <div class="img-area">
                <img src="/images/project/cafe_page/6_1.png">
            </div>
            <h4>アーカイブはこちら</h4>
            <div class="iframe-area">
                <iframe src="https://www.youtube.com/embed/T9f9yqIoR-o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

            <h3>７　掲載されました</h3>
            <h4>【学報】 </h4>
            <p><font-awesome-icon icon="fa-solid fa-bookmark" /> 「NEWS & TOPICS」の02 </p>
            <a href="https://www.osakac.ac.jp/corp/univnews/pdf/gakuhou341.pdf" target="_blank" rel="noopener noreferrer">
                <div class="link-preview">
                    <font-awesome-icon icon="fa-solid fa-arrow-up-right-from-square" /> 情報工学科1・2年生が学内食堂の混雑予報システムを開発
                </div>
            </a>
            <p><font-awesome-icon icon="fa-solid fa-bookmark" /> 大阪電気通信大学 公式サイト プレスリリース </p>
            <a href="https://www.osakac.ac.jp/news/2021/2395" target="_blank" rel="noopener noreferrer">
                <div class="link-preview">
                    <font-awesome-icon icon="fa-solid fa-arrow-up-right-from-square" /> 情報工学科1・2年生の学生有志が学内食堂の混雑緩和を目的としたアプリを開発しました
                </div>
            </a>
            <h4>【新聞】</h4>
            <p><font-awesome-icon icon="fa-solid fa-bookmark" />  2021年10月13日教育学術新聞4面に掲載 </p>
            <h4>【ネットニュース】 </h4>
            <p><font-awesome-icon icon="fa-solid fa-bookmark" /> Digital PR Platform </p>
            <a href="http://digitalpr.jp/r/51825" target="_blank" rel="noopener noreferrer">
                <div class="link-preview">
                    <font-awesome-icon icon="fa-solid fa-arrow-up-right-from-square" /> 大阪電気通信大学 情報工学科1・2年生の学生有志が学内食堂の混雑緩和を目的としたアプリを開発！
                </div>
            </a>
            <p><font-awesome-icon icon="fa-solid fa-bookmark" /> 寝屋川つーしん </p>
            <a href="https://www.neyagawa-np.jp/topic/oecu-20211012.html" target="_blank" rel="noopener noreferrer">
                <div class="link-preview">
                    <font-awesome-icon icon="fa-solid fa-arrow-up-right-from-square" /> 電通大の学生らがコロナ感染対策として「学内食堂」の混雑緩和のためのアプリを開発したみたい
                </div>
            </a>
            <p><font-awesome-icon icon="fa-solid fa-bookmark" /> その他(リンク切れの可能性あり) </p>
            <a :href="link_URL" target="_blank" rel="noopener noreferrer" v-for="link_URL in link_list">
                <div class="link-preview">
                    <font-awesome-icon icon="fa-solid fa-arrow-up-right-from-square" /> {{link_URL}}
                </div>
            </a>
        </div>
    </div>
</template>

<script setup>
import Button from "../Button.vue"
import {onBeforeMount, ref, defineProps} from 'vue'
const link_list = ref([
    "https://japan.cnet.com/release/30601347/",
    "https://japan.zdnet.com/release/30601347/",
    "https://www.u-presscenter.jp/article/post-46780.html",
    "https://www.afpbb.com/articles/-/3370387",
    "https://www.sankeibiz.jp/business/news/211012/prl2110120913014-n1.htm",
    "https://www.asahi.com/and/pressrelease/410029517/",
    "https://www.zaikei.co.jp/releases/1442695",
    "https://mainichi.jp/articles/20211012/pls/00m/020/255000c",
    "https://news.toremaga.com/computer/internet/2016980.html",
    "https://yab.yomiuri.co.jp/adv/local/release/detail/51825.html",
    "https://www.excite.co.jp/news/article/Dprp_51825?p=2",
    "https://news.biglobe.ne.jp/economy/1012/prp_211012_0116958990.html",
    "https://www.agara.co.jp/article/154218 https://kahoku.news/release/dpr51825.html",
    "https://www.mapion.co.jp/news/release/dgpr51825-all",
    "https://www.niigata-nippo.co.jp/release/detail.php?id=51825",
    "https://www.excite.co.jp/news/article/Dprp_51825",
    "https://www.excite.co.jp/news/article/Dprp_51825?p=3",
    "https://www.okinawatimes.co.jp/articles/-/845544"
])

</script>

<style scoped>
.iframe-area{
    display: flex;
    justify-content: center;
    align-items: center;
}
.iframe-area iframe{
    width:90%;
    aspect-ratio:16/9;
    margin-bottom:10px;
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
    word-break: break-all;
}
.link-preview:hover{
    background-color:#1a73e8;
}
.link-preview:active{
    box-shadow: none;
}
</style>