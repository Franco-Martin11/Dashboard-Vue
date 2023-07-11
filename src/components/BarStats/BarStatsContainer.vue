<template>
  <div class="container">
    <div class="heading-chart flex flex-row justify-start gap-[90px]">
      <div class="flex flex-col gap-1 items-center justify-center">
        <h4 class="font-body-regular text-Head-UserGray capitalize text-[12px]">Total Earnings</h4>
        <p class="text-Pallet-Purple font-heading-bold text-[16px]">500k</p>
      </div>

      <div class="flex flex-col gap-1 items-center justify-center">
        <h4 class="font-body-regular text-Head-UserGray capitalize text-[12px]">Period</h4>
        <p class="text-Pallet-Purple font-heading-bold text-[16px]">1 Month</p>
      </div>

      <div class="flex flex-col gap-1 items-center justify-center">
        <h4 class="font-body-regular text-Head-UserGray capitalize text-[12px]">
          Upcoming Projects
        </h4>
        <p class="text-Pallet-Purple font-heading-bold text-[16px]">245</p>
      </div>
    </div>

    <div class="slices-data gap-[15px] flex flex-col justify-evenly">
      <div
        class="flex flex-col gap-4 bg-[#fafafa] items-center justify-center rounded-[10px] w-[168px] h-[79px] shadow-lg"
      >
        <h4 class="font-body-regular text-Head-UserGray capitalize text-[12px]">Personal Loans</h4>
        <p class="text-Pallet-Purple font-heading-bold text-[16px]">$45,000</p>
      </div>
      <div
        class="flex flex-col gap-4 bg-[#fafafa] items-center justify-center rounded-[10px] w-[168px] h-[79px] shadow-lg"
      >
        <h4 class="font-body-regular text-Head-UserGray capitalize text-[12px]">Personal Loans</h4>
        <p class="text-Pallet-Purple font-heading-bold text-[16px]">$45,000</p>
      </div>
      <div
        class="flex flex-col gap-4 bg-[#fafafa] items-center justify-center rounded-[10px] w-[168px] h-[79px] shadow-lg"
      >
        <h4 class="font-body-regular text-Head-UserGray capitalize text-[12px]">Personal Loans</h4>
        <p class="text-Pallet-Purple font-heading-bold text-[16px]">$45,000</p>
      </div>
    </div>
    <ColumnBarChart />
  </div>
</template>

<script setup lang="ts">
import ColumnBarChart from '../StatsCard/components/ColumnBarChart.vue'
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: repeat(2, 1fr) 170px;
  /* grid-template-rows: repeat(3, 1fr); */
  gap: 2rem;
  place-content: center;
  width: 100%;
  height: auto;
  grid-template-areas:
    'heading-chart heading-chart .'
    'columbar-chart columbar-chart slices-data'
    'columbar-chart columbar-chart slices-data';
}
.slices-data {
  grid-area: slices-data;
}
.heading-chart {
  grid-area: heading-chart;
}
</style>
