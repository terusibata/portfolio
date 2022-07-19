<script setup>
import Header from "./components/Header.vue"
import Footer from "./components/Footer.vue"
import { useRoute } from "vue-router"

</script>

<template>
    <Header :isLogin="isLogin" :icon="icon"/>
    <div class="main">
        <router-view />
    </div>
    <Footer />
</template>

<style scoped>
.main {
    min-height: 100vh;
}
* {
    -ms-user-select: none; /* IE 10+ */
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    user-select: none;
}
</style>
