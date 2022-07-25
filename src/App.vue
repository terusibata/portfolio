<script setup>
import Header from "./components/Header.vue"
import Footer from "./components/Footer.vue"
import { useRoute } from "vue-router"

</script>

<template>
    <Header/>
    <div class="main">
        <router-view />
    </div>
    <Footer />
</template>

<style scoped>
.main {
    min-height: calc(100vh - 30px);;
}
* {
    -ms-user-select: none; /* IE 10+ */
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    user-select: none;
}
@font-face {
  font-family: "YuGothic M";
  src: local("Yu Gothic Medium"),
       local("Yu Gothic");
  font-weight: 500;
       /*
         Chrome 58.0.3029.110 (64-bit) では
         "Yu Gothic Medium" を認識しないバグあるため
         "Yu Gothic" と font-weight も併せて指定。
       */
}
</style>
