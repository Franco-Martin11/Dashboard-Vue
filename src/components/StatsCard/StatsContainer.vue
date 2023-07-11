<template>
  <div v-motion-fade class="flex flex-row flex-wrap gap-5 w-full h-auto content-end justify-between p-2">
    <template
      v-for="{ headTitle, id, imgSrc, percentaje, profit, resultsStats } in cardDataArr"
      :key="id"
    >
      <StatsCard
        :imgSrc="imgSrc"
        :headTitle="headTitle"
        :percentaje="percentaje"
        :profit="profit"
        :resultsStats="resultsStats"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
import { cardDataArr } from '@/constants/LinkRouteData'
import StatsCard from './components/StatsCard.vue'
</script>

<style>
.gridContainer {
  display: grid;
}
</style>
