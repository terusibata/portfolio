<template>

</template>

<script setup>
import {useRouter, useRoute} from "vue-router";
import {onBeforeMount, ref, defineProps} from 'vue'
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

</style>