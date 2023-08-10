<template>
  <LayoutContainer>
    <template #ContainerPages>
      <CustomerContainer />
    </template>
  </LayoutContainer>
</template>

<script setup lang="ts">
import CustomerContainer from '@/components/Invoice/components/Customer/CustomerContainer.vue'
import LayoutContainer from '@/components/layout/LayoutContainer.vue'
</script>

<style scoped></style>
