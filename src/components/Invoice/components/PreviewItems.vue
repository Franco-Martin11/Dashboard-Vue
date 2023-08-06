<template>
  <div
    class="flex border-t border-dashed py-2 flex-col gap-2.5 items-start justify-start self-stretch shrink-0 relative"
  >
    <div class="flex flex-row items-start justify-between self-stretch shrink-0 relative">
      <div
        class="text-[#363636] text-left relative"
        style="font: 700 14px 'Product Sans', sans-serif"
      >
        {{ description }}
      </div>

      <div
        class="text-[#363636] text-left relative"
        style="font: 400 14px 'Product Sans', sans-serif"
      >
        {{
          new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(subtotal)
        }}
      </div>
    </div>

    <div
      class="text-[#000000] text-left relative self-stretch"
      style="font: 400 14px 'Product Sans', sans-serif"
    >
      {{ timeOfHiring }}
    </div>
  </div>
</template>

<script setup lang="ts">
import type { InvoiceItem } from '@/types/InvoiceType'

defineProps<InvoiceItem>()
</script>

<style scoped></style>
