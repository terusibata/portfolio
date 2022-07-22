<template>
    <div class="project-list-area">
		<div class="Card-area">
			<projectCard></projectCard>
			<projectCard></projectCard>
			<projectCard></projectCard>
			<projectCard></projectCard>
		</div>
    </div>
</template>

<script setup>
import {useRouter, useRoute} from "vue-router";
import {onBeforeMount, ref, defineProps} from 'vue'
import projectCard from "../components/project/Project_card.vue"

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
    case "all":
      document.title = `プロジェクト一覧 | terusibata`
      break
    default:
      router.push("/notFound");
  }
})
</script>

<style scoped>
.project-list-area{
	display:flex;
	justify-content: center;
    align-items: center;
}
.Card-area{
	margin-top:100px;
}
</style>