<template>
  <div
    v-motion-fade
    class="w-[240px] h-[147px] rounded-[9.41px] bg-[#fff] p-3 shadow-md flex flex-col justify-between hover:shadow-xl cursor-pointer flex-[1_0_180px] max-w-[265px]"
  >
    <div class="flex flex-row gap-4">
      <img
        :src="imgSrc ? imgSrc : '/user.jpg'"
        :alt="headTitle"
        class="rounded-full object-contain w-[48px] h-[48px]"
      />
      <div class="flex flex-col flex-1 justify-start">
        <h6 class="text-Head-UserGray capitalize">{{ headTitle }}</h6>
        <p class="text-Pallet-Purple">{{ resultsStats }}</p>
      </div>
    </div>
    <div class="w-full h-[8px] bg-[#ECEDF1] flex items-center rounded-[4px]">
      <div
        :class="props.profit ? 'bg-Pallet-Purple' : 'bg-[rgb(220_38_38)]'"
        class="h-1 mx-[2px] rounded-[4px]"
        :style="{ width: widthPersentaje }"
      ></div>
    </div>
    <div class="flex flex-row gap-2 items-center">
      <StatsCardIcon class="w-5 h-5" />
      <span
        :class="` flex-1 justify-start font-body-regular ${
          props.profit ? 'text-Pallet-Purple' : 'text-[rgb(220_38_38)]'
        }`"
      >
        {{ profit ? '+' : '-' }} {{ percentaje }}%
      </span>
      <BorderSolap class="w-4 h-4" />
    </div>
  </div>
</template>

<script setup lang="ts">
import StatsCardIcon from '@/assets/icons/bars-card.svg?component'
import BorderSolap from '@/assets/icons/border-solap-card.svg?component'
import type { CardData } from '@/types'
import { ref } from 'vue'
const props = defineProps<CardData>()
const widthPersentaje = ref<string>(`${props.percentaje}%`)
</script>
