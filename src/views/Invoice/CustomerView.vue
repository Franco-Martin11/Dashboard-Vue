<template>
  <LayoutContainer>
    <template #ContainerPages>
      <LayoutNavbar
        titleHeading="Invoice"
        descriptionHeading="Create new invoice, upload and download"
      />
      <div class="flex flex-col gap-5 w-full mt-10">
        <template v-if="!currentRoute.query.q">
          <button
            class="hover:bg-Heading-Purple transition-colors px-4 py-2 rounded-md bg-Pallet-Purple text-[#fff] w-fit"
            type="button"
            @click="back"
          >
            Go Back
          </button>
          <div class="grid grid-cols-invoiceCardContainer gap-4 justify-start">
            <CustomerDetailsProduct />
          </div>
        </template>

        <template v-if="currentRoute.query.q">
          <button
            class="hover:bg-Heading-Purple transition-colors px-4 py-2 rounded-md bg-Pallet-Purple text-[#fff] w-fit"
            type="button"
            @click="back"
          >
            Go Back
          </button>
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
