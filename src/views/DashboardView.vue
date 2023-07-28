<template>
  <LayoutNavbar>
    <template #headingNavigation>
      <div v-motion-fade class="flex flex-col">
        <h1 class="text-Heading-Purple font-heading-bold text-[27px]">Analytics</h1>
        <h4 class="text-[15px] font-body-regular text-Subtitle-Gray">
          Welcome back. Let's get back to work.
        </h4>
      </div>
    </template>
  </LayoutNavbar>
  <div class="flex flex-row justify-between gap-4 mt-4">
    <div class="flex gap-4 flex-col my-6 flex-1">
      <BarStatsContainer />
      <StatsContainer />
    </div>
    <div v-motion-fade class="flex flex-col items-center gap-4">
      <CampaingEarnings />
    </div>
  </div>
</template>

<script setup lang="ts">
import StatsContainer from '@/components/StatsCard/StatsContainer.vue'
import CampaingEarnings from '@/components/StatsCard/components/CampaingEarnings.vue'
import BarStatsContainer from '@/components/BarStats/BarStatsContainer.vue'
import LayoutNavbar from '@/components/layout/LayoutNavbar.vue'
</script>
