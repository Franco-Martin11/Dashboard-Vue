<template>
  <div class="flex flex-row gap-1 p-2 w-full bg-[#fff] relative overflow-x-hidden z-10">
    <Oval class="absolute top-0 right-[-20px]"></Oval>
    <Sidebar_container></Sidebar_container>
    <main class="flex-1 mt-1 w-full h-full overflow-hidden">
      <slot name="ContainerPages" />
    </main>
  </div>
</template>

<script setup lang="ts">
/// <reference types="vite-svg-loader" />
import Sidebar_container from '@/components/Sidebar/Sidebar_container.vue'
import Oval from '@/assets/icons/oval.svg?component'
</script>

<style scoped></style>
