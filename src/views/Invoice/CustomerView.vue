<template>
  <LayoutContainer>
    <template #ContainerPages>
      <LayoutNavbar titleHeading="Invoice" descriptionHeading="Create new invoice, upload and download" />
      <div class="flex flex-col gap-5 w-full ">

        <div class="flex flex-row gap-4">
          <RouterLink :to="currentRoute.path + '?q=asdasd'"> Prueba a ver si funciona </RouterLink>
          <button type="button" @click="back">Go Back</button>
        </div>

        <template v-if="currentRoute.query.q">
          <CreateInvoice />
        </template>
      </div>
    </template>
  </LayoutContainer>
</template>

<script setup lang="ts">
import CreateInvoice from '@/components/Invoice/CreateInvoice.vue'
import LayoutContainer from '@/components/layout/LayoutContainer.vue'
import LayoutNavbar from '@/components/layout/LayoutNavbar.vue'
import { RouterLink, useRouter } from 'vue-router'
const { currentRoute, back } = useRouter()
</script>

<style scoped></style>
