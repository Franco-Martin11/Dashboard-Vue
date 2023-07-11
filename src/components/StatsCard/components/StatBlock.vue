<template>
  <div class="flex flex-1 flex-col items-center gap-[8px] justify-start text-[#fafafa]">
    <h4>{{ title }}</h4>
    <div class="font-heading-bold text-[18px] flex flex-row gap-1 items-center">
      <p>{{ amount }}</p>
      <span class="text-[#3AD866] text-[12px] font-body-regular">{{ change }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
interface propsData {
  title: String
  amount: String
  change: String
}
defineProps<propsData>()
</script>

<style scoped></style>
