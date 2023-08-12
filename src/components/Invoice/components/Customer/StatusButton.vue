<script setup lang="ts">
const typeBadgeProperties = {
  sucess: {
    bgColor: 'bg-[#acffc3]',
    text: 'Sucess'
  },
  pending: {
    bgColor: 'bg-[#ffa599]',
    text: 'Pending'
  }
}

interface typePropsBagde {
  sucess: string
}

defineProps<typePropsBagde>()
</script>

<template>
  <div
    :class="`rounded-[30px] pt-[5px] pr-2.5 pb-[5px] pl-2.5 flex flex-col gap-2.5 items-center justify-center min-w-[65px] relative overflow-hidden ${
      sucess ? typeBadgeProperties.sucess.bgColor : typeBadgeProperties.pending.bgColor
    }`"
  >
    <span
      class="text-[#000000] text-center relative"
      style="font: 500 12px/100% 'Product Sans', sans-serif"
    >
      {{ sucess ? typeBadgeProperties.sucess.text : typeBadgeProperties.pending.text }}
    </span>
  </div>
</template>

<style scoped></style>
