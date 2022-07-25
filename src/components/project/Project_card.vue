<template>
    <div class="glass-container">
        <div class="card-area">
            <div class="title-area">
                <h1>{{data.title}}</h1>
            </div>
            <div class="flex body-area">
                <div class="img-area">
                    <div class="img-div">
                        <img :src="data.img">
                    </div>
                </div>
                <div class="comment-area">
                    <div class="comment-area-padding">
                        <div class="charge-area">
                            <h3>　<font-awesome-icon icon="fa-solid fa-people-line" /> 担当</h3>
                            <p>{{data.charge}}</p>
                        </div>
                        <div class="margin-top-10px">
                            <h3>　<font-awesome-icon icon="fa-solid fa-gears" /> 使用技術</h3>
                            <p>{{data.technology}}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="detail-area">
                <h3>　<font-awesome-icon icon="fa-solid fa-book-bookmark" /> 概要</h3>
                <p>{{data.detail}}</p>
            </div>
            <div class="button-area">
                <Button @click="goProject(data.id)"><font-awesome-icon icon="fa-solid fa-arrow-trend-up" /> 詳しく見る</Button>
            </div>
        </div>
    </div>
</template>

<script setup>
import Button from "../../components/Button.vue"
import { reactive, ref, defineProps} from "vue";
import {useRouter, useRoute} from "vue-router";
const router = useRouter()

const props = defineProps({
    data: {
        type: Object,
        default: []
    },
})

function goProject(link){
    setTimeout(function(){
        router.push({
            name: "project",
            params:{
                id: link
            },
        })
    }
    ,400);
}

</script>

<style scoped>
p{
    font-family: "游ゴシック体", YuGothic, "YuGothic M", sans-serif;
    text-shadow: 1px 2px 0 rgba(0,0,0,.8);
}
.glass-container{
    width: 700px;
    height: 460px;
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
.flex{
    display:flex;
}
.card-area{
    padding:8px;
}
.title-area{
    display:flex;
    justify-content: center;
    align-items: center;
}
h1{
    font-size:30px;
    padding:0 20px;
    margin-top:0;
    color: #6cb4e4;
    border-top: solid 2px #6cb4e4;
    border-bottom: solid 2px #6cb4e4;
    background: -webkit-repeating-linear-gradient(-45deg, #f0f8ff, #f0f8ff 3px,#e9f4ff 3px, #e9f4ff 7px);
    background: repeating-linear-gradient(-45deg, #f0f8ff, #f0f8ff 3px,#e9f4ff 3px, #e9f4ff 7px);
}
h3{
    color:white;
    font-size:20px;
    border-left: solid 5px white;
}
.body-area{
    width:100%;
}
.img-area{
    width:50%;
    display:flex;
    justify-content: center;
    align-items: center;
}
.img-div{
    width:275px;
    height:190px;
}
.img-div img{
    object-fit: contain;
    width: 100%;
    height: 100%;
}
.comment-area{
    width:50%;
}
.comment-area-padding{
    padding-right:15px;
}
.charge-area{
    max-height:105px;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
.margin-top-10px{
    margin-top:10px;
}
p,h3{
    margin:0;
}
.detail-area{
    padding:0 35px;
    margin:10px 0;
    width:614px;
    height:80px;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
.button-area{
    display:flex;
    justify-content: center;
    align-items: center;
}
.button-area Button{
    background-color:#034FBC;
    color:white;
}
</style>