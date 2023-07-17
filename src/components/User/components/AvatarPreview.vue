<template>
  <div class="flex flex-col items-center">
    <strong class="text-Heading-Purple font-heading-bold">{{ stats }}</strong>
    <span class="text-Head-UserGray font-body-regular text-[14px]">{{ name }}</span>
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
