<template>
    <div class="glass-container">
        <div>
            <div>
                <h1>3密ポイント</h1>
            </div>
            <div class="flex">
                <div class="img-area">
                    <img src="/images/river_00006.jpg">
                </div>
                <div>
                    <div>
                        <h3>--概要--</h3>
                        <p>IoTで食堂の混雑度を推定し、混雑していない場合に食堂で使えるポイントが貰えるサービス。チームリーダとして基盤技術を開発</p>
                    </div>
                    <div>
                        <h3>--担当--</h3>
                        <p>フロントエンド(モバイル画面)</p>
                    </div>
                    <div>
                        <h3>--使用技術--</h3>
                        <p>HTML, CSS, JavaScript</p>
                    </div>
                </div>
            </div>
            <div class="button-area">
                <Button>詳しく見る</Button>
            </div>
        </div>
    </div>
</template>

<script setup>
import Button from "../../components/Button.vue"


</script>

<style scoped>
.glass-container{
    width: 700px;
    height: 450px;
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
    margin-bottom:40px;
}
h1{
    font-size:30px;
}
.flex{
    display:flex;
}
.img-area{

}
.img-area img{ 
    width:200px;

}
</style>