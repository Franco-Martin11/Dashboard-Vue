<template>
  <LayoutContainer>
    <template #ContainerPages>
      <LayoutNavbar
        titleHeading="Invoice"
        descriptionHeading="Create new invoice, upload and download"
      />
      <div class="flex flex-col gap-5 w-full mt-10">
        <template v-if="!currentRoute.query.q">
          <div class="flex flex-wrap gap-4 justify-around">
            <CustomerDetailsProduct />
          </div>
        </template>

        <template v-if="currentRoute.query.q">
          <button type="button" @click="back">Go Back</button>
          <CreateInvoice />
        </template>
      </div>
    </template>
  </LayoutContainer>
</template>

<script setup lang="ts">
import CreateInvoice from '@/components/Invoice/CreateInvoice.vue'
import CustomerDetailsProduct from '@/components/Invoice/components/Customer/CustomerDetailsProduct.vue'
import LayoutContainer from '@/components/layout/LayoutContainer.vue'
import LayoutNavbar from '@/components/layout/LayoutNavbar.vue'
import { useRouter } from 'vue-router'
const { currentRoute, back } = useRouter()
</script>

<style scoped></style>
