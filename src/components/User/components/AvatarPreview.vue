<template>
  <div class="flex flex-row gap-4 justify-between">
    <div class="flex flex-col items-center">
      <strong class="text-Heading-Purple font-heading-bold">{{ stats }}</strong>
      <span class="text-Head-UserGray font-body-regular">{{ name }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
interface definePropsStats {
  name: string
  stats: string
}
defineProps<definePropsStats>()
</script>

<style scoped></style>
