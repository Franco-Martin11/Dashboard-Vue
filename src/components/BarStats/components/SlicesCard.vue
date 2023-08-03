<template>
  <div
    class="flex flex-col flex-[1_0_168px] md:flex-1 gap-4 bg-[#fafafa] items-center justify-center rounded-[10px] w-full h-[79px] shadow-lg"
  >
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
