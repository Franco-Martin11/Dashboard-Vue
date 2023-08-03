<template>
  <LayoutContainer>
    <template #ContainerPages>
      <CreateInvoice />
    </template>
  </LayoutContainer>
</template>

<script setup lang="ts">
import CreateInvoice from '@/components/Invoice/CreateInvoice.vue';
import LayoutContainer from '@/components/layout/LayoutContainer.vue'
</script>

<style scoped></style>
