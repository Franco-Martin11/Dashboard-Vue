<template>
  <div class="flex flex-col gap-4 items-start justify-start relative">
    <div class="flex flex-row items-center justify-between self-stretch shrink-0 relative">
      <div
        class="text-[#505887] text-left relative"
        style="font: 700 20px 'Product Sans', sans-serif"
      >
        Latest Customers
      </div>
      <button
        type="button"
        title="view all latest customers"
        class="text-[#000] text-right relative w-[40.83px] hover:text-Pallet-Purple"
        style="font: 400 14px/100% 'Product Sans Medium', sans-serif"
      >
        View All
      </button>
    </div>
    <div
      v-for="{ customerName, due, imgAlt, imgUrl, likes, purchases, id } in computedArray"
      :key="id"
    >
      <CustomerCard
        :customer-name="customerName"
        :purchases="purchases"
        :due="due"
        :img-alt="imgAlt"
        :img-url="imgUrl"
        :id="id"
        :likes="likes"
      />
    </div>
    <TabChartButton />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import CustomerCard from './CustomerCard.vue'
import TabChartButton from './TabChartButton.vue'
import { generateUniqueId } from '@/utils/createUniqueId'
import { customerCards } from '@/constants/CustomerCard'

const computedArray = computed(() => {
  return customerCards.map((card) => ({
    id: generateUniqueId(),
    ...card
  }))
})
</script>
