<template>
  <div class="flex flex-1 flex-col items-center gap-[8px] justify-start text-[#fafafa]">
    <h4>{{ title }}</h4>
    <div class="font-heading-bold text-[18px] flex flex-row gap-1 items-center">
      <p>{{ amount }}</p>
      <span
        class="text-[14px] font-body-regular"
        :class="change > 0  ? 'text-[#3AD866]' : 'text-[#ff3939]'"
        >{{ `${change > 0 ? '+' : ''} ${change}` }}</span
      >
    </div>
  </div>
</template>

<script setup lang="ts">
interface propsData {
  title: String
  amount: String
  change: number
}
defineProps<propsData>()
</script>

<style scoped></style>
