<template>
  <LayoutContainer>
    <template #ContainerPages>
      <LayoutNavbar titleHeading="Customer" descriptionHeading="Customer dashboard" />
      <div class="my-4">
        <CustomerContainer />
      </div>
    </template>
  </LayoutContainer>
</template>

<script setup lang="ts">
import CustomerContainer from '@/components/Invoice/components/Customer/CustomerContainer.vue'
import LayoutContainer from '@/components/layout/LayoutContainer.vue'
import LayoutNavbar from '@/components/layout/LayoutNavbar.vue'
</script>

<style scoped></style>
