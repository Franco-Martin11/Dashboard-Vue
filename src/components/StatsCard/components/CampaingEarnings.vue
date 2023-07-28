<template>
  <div
    class="rounded-[30px] bg-Pallet-Purple w-[276px] h-[632px] p-6 flex flex-col justify-between items-center relative overflow-hidden shrink-0"
  >
    <div class="flex justify-between w-full">
      <h4 class="text-[#fff] font-heading-bold text-[16px]">Campaign Earning</h4>
      <div class="relative">
        <div
          class="w-[221px] h-[221px] rounded-full bg-[#fff] opacity-[0.30] absolute top-[-9rem] left-[-2rem] z-10"
        />
        <button
          class="w-[48px] h-[48px] bg-transparent cursor-pointer z-20 relative flex items-center justify-end"
          type="button"
          @click="console.log('prueba')"
        >
          <KebabOption />
        </button>
      </div>
    </div>

    <div class="w-[244px] h-[131px]">
      <VueApexCharts type="donut" :options="chartOptions" :series="chartSeries" />
    </div>

    <div class="flex gap-1 justify-between w-full">
      <StatBlock title="Earning" :amount="chartSeries[0]" :change="17" />
      <StatBlock title="Expenses" :amount="chartSeries[1]" :change="-7" />
    </div>

    <BarsDecoration v-motion-slide-bottom class="w-[222px] h-[38px] shrink-0 opacity-[0.40]" />

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
import StatBlock from './StatBlock.vue'

const chartSeries = [15000, 4000]
const chartOptions = {
  chart: {
    width: 300,
    type: 'pie'
  },
  labels: ['Earning', 'Expenses'],
  colors: ['#F9896B', '#0091a1'],
  stroke: {
    show: false
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

  legend: {
    position: 'bottom',
    colors: ['#0091a1', '#F9896B'],
    fontSize: '18px',
    fontFamily: '"Google Sans Regular", Arial',
    labels: {
      colors: '#fff',
      useSeriesColors: false
    }
  }
}
</script>
