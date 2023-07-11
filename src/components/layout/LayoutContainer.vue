<template>
  <div class="flex flex-row gap-4 w-full min-h-screen p-2 bg-[#fff] relative overflow-hidden z-10">
    <Oval class="absolute top-0 right-[-20px]"></Oval>
    <Sidebar_container></Sidebar_container>
    <main class="flex-1">
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
