<template>
  <div class="example bg-slate-200 text-black">
    <h1>{{ $route.params.id }}</h1>
  </div>
  <CampaingEarnings />
</template>

<script lang="ts" setup>
import CampaingEarnings from '@/components/StatsCard/components/CampaingEarnings.vue'
</script>
