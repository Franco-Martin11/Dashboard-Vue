<template>
    <div v-motion-fade
        class="bg-[rgba(201,201,201,0.15)] rounded-[3px] pt-[5px] pr-2.5 pb-[5px] pl-2.5 flex flex-row gap-2.5 items-center justify-between relative">
        <h4 class="text-left relative flex items-center justify-start "
            :class="type === 'Transaction' ? 'text-[#047857]' : 'text-[#1d4ed8]'"
            style="font: 400 13.18px 'Product Sans Medium', sans-serif">
            {{ type }}
        </h4>
        <span class="text-[#555555] text-right relative"
            style="font: 400 15.06px/100% 'Product Sans Medium', sans-serif">
            {{ currencyNumberFormater(price) }}
        </span>
    </div>
</template>

<script setup lang="ts">
import { currencyNumberFormater } from '@/utils/currencyNumberFormater';


interface listChartProps { price: number, type: string }
defineProps<listChartProps>()
</script>

<style scoped></style>