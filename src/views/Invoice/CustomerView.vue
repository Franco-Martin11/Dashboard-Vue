<template>
  <LayoutContainer>
    <template #ContainerPages>
      <!-- <button type="button" @click="queryValue"> -->
      <RouterLink :to="currentRoute.path + '?q=asdasd'"> Prueba a ver si funciona </RouterLink>
      <button type="button" @click="back">Go Back</button>
      <!-- </button> -->
      <template v-if="currentRoute.query.q">
        <div class="flex flex-col gap-[25px] items-start justify-start w-full relative">
          <LayoutNavbar
            titleHeading="Invoice"
            descriptionHeading="Create new invoice and download"
          />

          <div
            class="bg-[#ffffff] min-w-[350px] w-full min-h-screen h-fit border-dashed border-[#000000] border lg:border-t lg:border-b flex flex-row gap-2.5 items-start justify-start flex-wrap self-stretch shrink-0 relative"
          >
            <CreateInvoice />
          </div>
        </div>
      </template>
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
