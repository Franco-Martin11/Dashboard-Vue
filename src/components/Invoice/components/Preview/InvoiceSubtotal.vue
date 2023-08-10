<template>
  <div class="flex flex-row items-end justify-between self-stretch shrink-0 relative">
    <div class="flex flex-col">
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
import { FormDetails } from '@/stores/FormDetails'
import type { InvoiceTax } from '@/types/InvoiceType'
import { onMounted, ref } from 'vue'

const props = defineProps<InvoiceTax>()
const { useDataEmpty } = FormDetails()

onMounted(() => {
  const calculatePercentage = (subtotal: number, rate: number) =>
    subtotal ? (subtotal * rate) / 100 : 0

  const subtotal = useDataEmpty.product.subtotal
  const percentage = calculatePercentage(subtotal, props.rate)

  useDataEmpty.product.total += percentage

  const formattedPercentage = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(percentage)

  dataComputed.value = formattedPercentage
})

const dataComputed = ref<string | null>(null)
</script>

<style scoped></style>
