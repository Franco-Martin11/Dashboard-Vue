<template>
  <div class="flex flex-col gap-1 flex-1 items-center justify-center">
    <h4 class="font-body-regular text-Head-UserGray capitalize text-[12px]">{{ labelTitle }}</h4>
    <p class="text-Pallet-Purple font-heading-bold text-[16px]">{{ valueText }}</p>
  </div>
</template>

<script setup lang="ts">
interface definePropsComponent {
  labelTitle: string
  valueText: string
}
defineProps<definePropsComponent>()
</script>

<style scoped></style>
