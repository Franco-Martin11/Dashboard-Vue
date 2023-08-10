<template>
  <div
    v-if="title === 'phoneNumber' || title === 'personalEmail'"
    class="text-[#363636] text-left relative"
    style="font: 400 12px 'Product Sans', sans-serif"
  >
    {{ value }}
  </div>
  <div v-else class="flex flex-row gap-[5px] items-start justify-start shrink-0 relative">
    <div
      class="text-[#000000] text-left relative"
      style="font: 700 12px 'Product Sans', sans-serif"
    >
      {{ title }}
    </div>

    <div
      class="text-[#363636] text-left relative"
      style="font: 400 12px 'Product Sans', sans-serif"
    >
      {{ value }}
    </div>
  </div>
</template>

<script setup lang="ts">
interface definePropsValues {
  title: string
  value: string | number
}

defineProps<definePropsValues>()
</script>

<style lang="scss" scoped></style>
