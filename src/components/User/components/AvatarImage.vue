<template>
  <div class="w-[68px] h-[78px] relative rounded-full flex items-center pt-[5px]">
    <span
      class="absolute w-3 h-3 z-20 rounded-full bg-[#fd7a00] border-2 border-[#fff] top-[12px] left-[3px]"
    ></span>
    <img
      :src="url || data"
      :alt="alt"
      class="rounded-full object-contain bg-Pallet-Orange z-10 w-[58px] h-[58px]"
    />
    <Elipse class="absolute inset-0 z-0"></Elipse>
  </div>
</template>

<script setup lang="ts">
import Elipse from '@/assets/icons/ellipse-chart.svg?component'
import { onMounted, ref } from 'vue'
interface definePropsImage {
  url: string | null
  alt: string
}
defineProps<definePropsImage>()

const data = ref('')

onMounted(() => {
  data.value = '/richie-image-1.png'
})
</script>
