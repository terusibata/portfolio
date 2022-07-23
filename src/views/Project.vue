<template>
	<div>
		<cafepage v-if="id == 'cafe_page'"></cafepage>
		<jetOauth v-if="id == 'OECU_Project'"></jetOauth>
		<OECUProject v-if="id == 'jetOauth'"></OECUProject>
	</div>
</template>

<script setup>
import {useRouter, useRoute} from "vue-router";
import {onBeforeMount, ref, defineProps} from 'vue'
import projectCard from "../components/project/Project_card.vue"
import cafepage from "../components/project/cafe_page.vue"
import jetOauth from "../components/project/jetOauth.vue"
import OECUProject from "../components/project/OECU_Project.vue"

const router = useRouter()
const route = useRoute()
const props = defineProps({
    id: {
        type: String,
        default: ""
    }
})

onBeforeMount(()=>{
  console.log(props.id)
  switch(props.id){
	case "cafe_page":
		document.title = `3密ポイント | terusibata`
		break
	case "OECU_Project":
		document.title = `OECUプロジェクト | terusibata`
		break
	case "jetOauth":
		document.title = `jetOauth | terusibata`
		break
    default:
        router.push("/notFound");
  }
})
</script>

<style scoped>

</style>