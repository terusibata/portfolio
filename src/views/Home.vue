<template>
    <Card>
        <div class="flex mobile-block">
            <div class="img-area">
                <img src="/images/terusibata.png">
            </div>
            <div class="text-area">
                <div class="text-area-padding">
                    <h1>terusibata</h1>
                    <h3>チームで勉強会やプロジェクトを行っています。</h3>
                    <div class="flex button-area">
                        <a href="https://twitter.com/Terusibata" target="_blank" rel="noopener noreferrer">
                            <Button class="Twitter-button"><font-awesome-icon icon="fa-brands fa-twitter" /> Twitter</Button>
                        </a>
                        <Button class="GitHub-button"><font-awesome-icon icon="fa-brands fa-github" /> GitHub</Button>
                        <Button class="Youtube-button"><font-awesome-icon icon="fa-brands fa-youtube" /> Youtube</Button>
                    </div>

                </div>
            </div>
        </div>
    
    </Card>
</template>

<script setup>
import Card from "../components/Card.vue"
import Button from "../components/Button.vue"

</script>

<style scoped>

h1,h3{
    font-family: "游ゴシック体", YuGothic, "YuGothic M", sans-serif;
	text-shadow: 
		0 0.05em 0.08em rgba(0,0,0,0.7);
    font-size:40px;
}
h1{
    margin:0;
}
h3{
    font-size:20px; 
}
.flex{
    display:flex;
    width:100%;
}
.img-area{
    width:40%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.img-area img{
    width:80%;
    border-radius:10px;
}
.text-area{
    width:60%;
}
.text-area-padding{
    padding:20px;
}

.Twitter-button{
    background-color:#329EFF;
    color:white;
    margin-right:5px;
}
.GitHub-button{
    background-color:#24292E;
    color:white;
    margin-right:5px;
}
.Youtube-button{
    background-color:#FF0000;
    color:white;
}

@media screen and (max-width: 770px){
    .mobile-block{
        display:block;
    }
    .img-area{
        width:100%;
    }
    .img-area img{
        width:150px;
    }
    .text-area{
        width:100%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align:center;
    }
    .button-area{
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>