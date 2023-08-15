<template>
  <div
    class="flex flex-col gap-4 items-center shadow-md rounded-[20px] flex-1 bg-[rgb(253,253,253)] p-8 w-full relative z-50"
  >
    <div class="flex flex-col gap-4 items-center">
      <AvatarImage :url="null" :alt="'Image'" />
      <div class="text-center">
        <h3 class="text-Pallet-Purple text-[16px] font-heading-bold">Franc Martin</h3>
        <span class="text-Head-UserGray text-[14px]">Frontend Developer / UI</span>
      </div>
    </div>
    <div class="flex flex-row gap-4 justify-between">
      <AvatarPreview name="Project" stats="29" />
      <AvatarPreview name="Complete" stats="21" />
      <AvatarPreview name="Customers" stats="7" />
    </div>
  </div>
</template>

<script setup lang="ts">
import AvatarImage from './components/AvatarImage.vue'
import AvatarPreview from './components/AvatarPreview.vue'
</script>

<style scoped></style>
