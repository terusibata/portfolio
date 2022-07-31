<template>
    <div class="glass-container" id="glass">
        <div class="padding-area">
            <div class="text-area">
                <p>{{comment}}<br>が見つかりませんでした</p>
            </div>
            <div class="img-area">
                <img v-if="comment != 'お探しのページ'" src="/images/mitukuma_NotFound_card.png">
                <img v-else src="/images/mitukuma_NotFound.png">
            </div>
            <div class="button-area">
                <Button @click="goHome"><font-awesome-icon icon="house" /> ホームへ</Button>
            </div>
        </div>
    </div>
</template>

<script setup>
import Button from "../../components/Button.vue"
import { reactive, ref} from "vue";
import {useRouter, useRoute} from "vue-router";
const router = useRouter()

const props = defineProps({
    comment: {
        type: String,
        default: "お探しのページ"
    },
})

function goHome(){
    setTimeout(function(){
        router.push("/");
    }
    ,400);
}
</script>

<style scoped>
.glass-container{
    position: fixed;
    inset: 0;
    margin: auto;
    width: 350px;
    height: 500px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    border-radius: 10px;
    backdrop-filter: blur(5px);
    background-color: rgba(255,0,0, 0.075);
    box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 8px;
    border: 2px rgba(255,255,255,0.4) solid;
    border-bottom: 2px rgba(40,40,40,0.35) solid;
    border-right: 2px rgba(40,40,40,0.35) solid;
}
.padding-area{
    padding:10px;
}
.text-area{
    text-align:center;
}
.text-area p{
    font-family: "游ゴシック体", YuGothic, "YuGothic M", sans-serif;
    text-shadow: 1px 2px 0 rgba(0,0,0,.8);
    font-size:25px;
    margin:0;
}
.img-area{
    display: flex;
    justify-content: center;
    align-items: center;
}
.img-area img{
    width:90%;
}
.button-area{
    margin-top:20px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.button-area Button{
    background-color:#24292E;
    color:white;
}
</style>