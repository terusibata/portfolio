<script setup>
import Header from "./components/Header.vue"
import Footer from "./components/Footer.vue"
import { useRoute } from "vue-router"

</script>

<template>
    <Header :isLogin="isLogin" :icon="icon"/>
    <div class="main">

        <iframe id="youtube" src="https://www.youtube.com/embed/arrfuXJt28c?controls=0&autoplay=1&mute=1&loop=1&rel=0&
modestbranding=1&iv_load_policy=3&disablekb=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <div class="notclick"></div>
        <router-view />
    </div>
    <Footer />
</template>

<style scoped>
.main {
    min-height: 100vh;
}
#youtube{
    position: fixed;
    inset: 0;
    margin: auto;
    width:100vw;
    height:100vh;
    z-index:-2;
}
.notclick{
    z-index:-1;
    position: fixed;
    inset: 0;
    margin: auto;
    width:100vw;
    height:100vh;
}
* {
    -ms-user-select: none; /* IE 10+ */
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    user-select: none;
}
</style>
