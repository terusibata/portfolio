<template>
    <div class="glass-container" id="glass">
        <slot/>
    </div>
</template>


<style scoped>
.glass-container{
    position: fixed;
    inset: 0;
    margin: auto;
    width: 700px;
    height: 375px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    border-radius: 10px;
    backdrop-filter: blur(5px);
    background-color: rgba(0, 0, 0, 0.2);
    box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 8px;
    border: 2px rgba(255,255,255,0.4) solid;
    border-bottom: 2px rgba(40,40,40,0.35) solid;
    border-right: 2px rgba(40,40,40,0.35) solid;
}

@media screen and (max-width: 770px){
    .glass-container{
        width: 90vw;
        height: 500px;
    }
}
</style>