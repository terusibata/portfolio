<template>
  <div class="detail-area">
      <div class="title-area">
          <h1>Python 勉強会</h1>
      </div>
      <div class="body-area">
          <h3>１　どんな勉強会？</h3>
          <p>Pythonを学ぶWebアプリを開発し、勉強会を開催しました</p>
					<div class="title-area" style="margin-bottom:10px;">
                <a href="https://www.osakac.ac.jp/project_now/ei/1059" target="_blank" rel="noopener noreferrer">
                    <Button>OECUの掲載記事</Button>
                </a>
            </div>
					<h4>従来のプログラミング言語の勉強会では、以下のような問題点がありました。</h4>
					<p>《 主催者側の問題点 》</p>
					<ul>
							<li>参加者がプログラムを実行しているかどうかの進捗を把握できない</li>
							<li>参加者の間違いが分からないため、事前に間違いを予測して資料を作成する必要がある</li>
					</ul>
					<p>《 参加者側の問題点 》</p>
					<ul>
							<li>Pythonを各自のPCで実行するには、環境を構築する必要がある</li>
							<li>資料通りの回答に制限されるため、プログラムの自由さを学べない</li>
							<li>書いたプログラムの正誤がすぐに確認できない</li>
					</ul>
					<p>これらの問題点を解決するために、独自のWebアプリの提案・開発を行いました。</p>

          <h3>２　開催概要について</h3>
          <p>担当箇所は、独自のWebアプリのデザインの提案と資料作成です。</p>

					<div class="img-area">
          		<img src="/images/project/python/1.png">
          </div>

					<p>プログラムを入力し実行すると結果が自動で判定され、正誤を確認できる点が参加者から好評。勉強会後のアンケートでは「ソースコードを実行した際に、正解か不正解かをすぐに確認することができてとても分かりやすく、良かったです」「自分で環境構築を行わなくても通常通りに動作し、答え合わせも自動でされて便利でした」との声がありました。</p>

					<h4>独自のWebアプリのメリットは以下の通りです。</h4>
					<p>《 主催者側のメリット 》</p>
					<ul>
							<li>参加者の進捗をリアルタイムで把握できる</li>
							<li>参加者の間違いをすぐに確認できる</li>
					</ul>
					<p>《 参加者側のメリット 》</p>
					<ul>
							<li>各自のPCに、環境の構築を行う必要がない</li>
							<li>実行ボタンを押すだけで、正誤がすぐに確認できる</li>
					</ul>

					<div class="img-area">
          		<img src="/images/project/python/2.png">
          </div>
					<div class="img-area">
          		<img src="/images/project/python/3.png">
          </div>
					<div class="img-area">
          		<img src="/images/project/python/4.png">
          </div>

          <h4>勉強会で使用した資料</h4>
          <div class="canva-iframe">
              <iframe loading="lazy"
                  style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0;margin: 0;"
                  src="https://www.canva.com/design/DAFa_R5H9fI/view?embed"
                  allowfullscreen="allowfullscreen" allow="fullscreen" onload="document.getElementById('loader-area').remove();">
              </iframe>
							
              <div id="loader-area">
                  <p>Canvaを読み込んでいます...</p>
                  <div class="loader"><span></span><span></span><span></span></div>
              </div>
          </div>

          <a href="https://www.canva.com/design/DAFa_R5H9fI/view?utm_content=DAFa_R5H9fI&utm_campaign=designshare&utm_medium=embeds&utm_source=link" target="_blank" rel="noopener noreferrer">
              <div class="link-preview">
                  <font-awesome-icon icon="fa-solid fa-arrow-up-right-from-square" /> 「[公開用]Python勉強会」新規タブで開く
              </div>
          </a>
          
          <h3>３　工夫したこと</h3>
          <p>Webアプリでは参加者が実行したプログラムを管理者がすべて確認することができるため、リアルタイムでの資料作成も可能。犯しやすいミスをリアルタイムで解説する資料や、模範解答とは違うが正解であるプログラムを紹介する資料を作成し使用することで、勉強会をより効率的に進行できるようになりました。</p>
          
          <h3>４　大学のホームページに掲載されたとのメンバー写真</h3>
					<div class="img-area">
							<img src="/images/project/python/5.jpg">
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

p , ul{
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

.canva-iframe{
  position: relative; 
  width: 100%; 
  height: 0; 
  padding-top: 56.2500%;
  padding-bottom: 48px; 
  box-shadow: 0 2px 8px 0 rgba(63,69,81,0.16); 
  margin-top: 1.6em; 
  margin-bottom: 0.9em; 
  overflow: hidden;
  border-radius: 8px; 
  will-change: transform;
}

#loader-area{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}
.loader span{
  width: 16px;
  height: 16px;
  border-radius: 50%;
  display: inline-block;
  position: absolute;
  left: 40%;
  -webkit-animation: 3s infinite linear;
  -moz-animation: 3s infinite linear;
  -o-animation: 3s infinite linear;
}
.loader span:nth-child(2){
  background:#E84C3D;
  -webkit-animation:kiri 1.2s infinite linear;
  -moz-animation:kiri 1.2s infinite linear;
  -o-animation:kiri 1.2s infinite linear;
}
.loader span:nth-child(3){
  background:#F1C40F;
  z-index:100;
}
.loader span:nth-child(1){
  background:#2FCC71;
  -webkit-animation:kanan 1.2s infinite linear;
  -moz-animation:kanan 1.2s infinite linear;
  -o-animation:kanan 1.2s infinite linear;
}
@-webkit-keyframes kanan {
  0% {-webkit-transform:translateX(20px);
  }
  50%{-webkit-transform:translateX(-20px);
  }
  100%{-webkit-transform:translateX(20px);
  z-index:200;
  }
}
@-moz-keyframes kanan {
  0% {-moz-transform:translateX(20px);
  }
  50%{-moz-transform:translateX(-20px);
  }
  100%{-moz-transform:translateX(20px);
  z-index:200;
  }
}
@-o-keyframes kanan {
  0% {-o-transform:translateX(20px);
  }

  50%{-o-transform:translateX(-20px);
  }
  100%{-o-transform:translateX(20px);
  z-index:200;
  }
}
@-webkit-keyframes kiri {
  0% {-webkit-transform:translateX(-20px);
  z-index:200;
  }
  50%{-webkit-transform:translateX(20px);
  }
  100%{-webkit-transform:translateX(-20px);
  }
}
@-moz-keyframes kiri {
  0% {-moz-transform:translateX(-20px);
  z-index:200;
  }
  50%{-moz-transform:translateX(20px);
  }
  100%{-moz-transform:translateX(-20px);
  }
}
@-o-keyframes kiri {
  0% {-o-transform:translateX(-20px);
  z-index:200;
  }
  50%{-o-transform:translateX(20px);
  }
  100%{-o-transform:translateX(-20px);
  }
}
</style>