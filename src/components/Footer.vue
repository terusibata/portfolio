<template>
    <footer>
        <div class="copyright flex">
            <p>©️2022 terusibata All Rights Reserved</p>
        </div>
    </footer>
</template>

<style scoped>
footer{
    width: 100%;
    height: 25px;
    color:white;
    margin-bottom:5px;
}
.flex{
    display: flex;
    justify-content: center;
    align-items: center;
}
.copyright p{
    margin:0;
    padding:0 10px;
    gap: 20px;
    border-radius: 5px;
    backdrop-filter: blur(5px);
    background-color: rgba(255,255,255, 0.075);
    box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 8px;
    border: 2px rgba(255,255,255,0.4) solid;
    border-bottom: 2px rgba(40,40,40,0.35) solid;
    border-right: 2px rgba(40,40,40,0.35) solid;
	text-shadow: 
		0 0.05em 0.08em rgba(0,0,0,0.7);
}
</style>