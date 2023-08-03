<template>
  <LayoutContainer>
    <template #ContainerPages>
      <LayoutNavbar descriptionHeading="Welcome back. Let's get back to work." titleHeading="Analytics" />
      <section class="flex flex-row justify-between gap-4 mt-4 flex-wrap">
        <div class="flex gap-4 flex-col my-6 flex-[1_0_350px] md:flex-[1_0_650px]">
          <BarStatsContainer />
          <StatsContainer />
        </div>
        <div v-motion-fade class="flex flex-col items-center gap-4">
          <CampaingEarnings />
        </div>
      </section>
    </template>
  </LayoutContainer>
</template>

<script setup lang="ts">
import StatsContainer from '@/components/StatsCard/StatsContainer.vue'
import CampaingEarnings from '@/components/StatsCard/components/CampaingEarnings.vue'
import BarStatsContainer from '@/components/BarStats/BarStatsContainer.vue'
import LayoutNavbar from '@/components/layout/LayoutNavbar.vue'
import LayoutContainer from '@/components/layout/LayoutContainer.vue'
</script>
