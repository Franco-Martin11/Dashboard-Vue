<template>
  <div
    v-motion-fade
    class="rounded-[30px] bg-Pallet-Purple w-[276px] h-[632px] shrink-0 flex flex-col justify-between items-center relative overflow-hidden p-4"
  >
    <div class="flex flex-row justify-between gap-2 w-full">
      <h4 class="text-[#fff] font-heading-bold text-[16px]">Campaing Earning</h4>
      <div>
        <button
          class="w-[27px] h-[27px] bg-[transparent] cursor-pointer"
          type="button"
          @click="console.log('prueba')"
        >
          <KebabOption />
        </button>
        <div
          class="w-[221px] h-[221px] rounded-full bg-[#fff] opacity-[0.30] absolute top-[-125px] right-[-100px]"
        />
      </div>
    </div>

    <div class="w-[244px] h-[131px]">
      <VueApexCharts type="donut" :options="chart" :series="series" />
    </div>

    <div class="flex flex-row gap-4 justify-between w-full">
      <div class="flex flex-1 flex-col gap-[8px] justify-start text-[#fafafa]">
        <h4>Earning</h4>
        <div class="font-heading-bold text-[18px] flex flex-row gap-0 items-center">
          <p>$15.5k</p>
          <span class="text-[#3AD866] text-[12px] font-body-regular">⬆17%</span>
        </div>
      </div>

      <div class="flex flex-col gap-[8px] justify-start text-[#fafafa] flex-1">
        <h4>Expenses</h4>
        <div class="font-heading-bold text-[18px] flex flex-row gap-0 items-center">
          <p>$15.5k</p>
          <span class="text-[#3AD866] text-[12px] font-body-regular">⬆17%</span>
        </div>
      </div>
    </div>

    <BarsDecoration class="w-[222px] h-[38px] shrink-0 opacity-[0.40]" />

    <div class="bg-[#EA5A47] rounded-[10px] w-[222px] h-[107px]">
      <div
        class="flex flex-col gap-2 justify-start bg-card-pattern w-full h-full p-4 text-[#fff] relative"
      >
        <h4 class="text-[16px] font-heading-bold">Need More Ideas</h4>
        <p class="text-[12px] font-body-regular leading-[18px]">
          Upgrade to pro max for added benefits.
        </p>
        <button
          class="self-end text-[9px] font-body-regular absolute right-[15px] bottom-[7px]"
          type="button"
        >
          Upgrade Now!
        </button>
      </div>
    </div>

    <OvalMaskBottom class="absolute bottom-[-65px] left-[-50px]" />
  </div>
</template>

<script setup lang="ts">
import KebabOption from '@/assets/icons/vector-kebab.svg?component'
import BarsDecoration from '@/assets/icons/bars.svg?component'
import OvalMaskBottom from '@/assets/icons/oval-mask-card.svg?component'
import VueApexCharts from 'vue3-apexcharts'

const series = [60, 40]
const chart = {
  chart: {
    width: 300,
    type: 'pie'
  },
  labels: ['Stonk', 'Sales'],
  fill: {
    colors: ['#84E8F4', '#F9896B']
  },
  responsive: [
    {
      breakpoint: 280,
      options: {
        chart: {
          width: 120
        },
        legend: {
          position: 'top'
        }
      }
    }
  ],
  legends: {
    colors: ['#84E8F4', '#F9896B']
  }
}
</script>
