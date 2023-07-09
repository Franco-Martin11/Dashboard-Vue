<template>
  <div v-html="svg"></div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
interface props {
  name: string
}
const props = defineProps<props>()

const svg = ref('')
onMounted(async () => {
  try {
    const { default: icon } = await import(`../assets/icons/${props.name}.svg`)
    svg.value = icon
  } catch (error) {
    console.error(error)
  }
})
</script>
