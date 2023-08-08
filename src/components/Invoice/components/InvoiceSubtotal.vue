<template>
  <div class="flex flex-row items-end justify-between self-stretch shrink-0 relative">
    <div class="flex flex-col gap-1">
      <h6 class="text-[#363636] text-left font-thin text-[12px]">{{ name }}</h6>

      <h5
        class="text-[#000000] text-left relative"
        style="font: 700 14px 'Product Sans', sans-serif"
      >
        {{ acronym }}
      </h5>
    </div>

    <span
      class="text-[#363636] text-left relative"
      style="font: 700 14px 'Product Sans', sans-serif"
    >
      {{ dataComputed }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { userDetails } from '@/stores/userDetails'
import type { InvoiceTax } from '@/types/InvoiceType'
import { computed } from 'vue'
const { useDataEmpty } = userDetails()
const props = defineProps<InvoiceTax>()
const percentaje = useDataEmpty.product.subtotal
  ? (useDataEmpty.product.subtotal * props.rate) / 100
  : 0
useDataEmpty.product.total += percentaje + useDataEmpty.product.subtotal
const dataComputed = computed(() =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(percentaje)
)
</script>

<style scoped></style>
