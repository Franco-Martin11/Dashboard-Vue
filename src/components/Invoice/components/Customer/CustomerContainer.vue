<template>
  <div class="flex flex-row gap-5 mt-10 flex-wrap justify-center lg:justify-start px-2">
    <div class="hidden md:flex">
      <UserTable />
    </div>
    <TabChartButton />
    <div class="flex flex-col gap-4 items-start justify-start relative flex-1">

      <div class="flex flex-row items-center justify-between self-stretch flex-1 relative max-w-[350px]">
        <div class="text-[#505887] text-left relative" style="font: 700 20px 'Product Sans', sans-serif">
          Latest Customers
        </div>
        <button type="button" title="view all latest customers"
          class="text-[#000] text-right relative w-[40.83px] hover:text-Pallet-Purple"
          style="font: 400 14px/100% 'Product Sans Medium', sans-serif">
          View All
        </button>
      </div>

      <div v-for="{ customerName, due, imgAlt, imgUrl, likes, purchases, id } in computedArray" :key="id">
        <CustomerCard :customer-name="customerName" :purchases="purchases" :due="due" :img-alt="imgAlt" :img-url="imgUrl"
          :id="id" :likes="likes" />
      </div>

    </div>

  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import CustomerCard from './CustomerCard.vue'
import { generateUniqueId } from '@/utils/createUniqueId'
import { customerCards } from '@/constants/CustomerCard'
import TabChartButton from './TabChart/TabChartButton.vue';
import UserTable from '@/components/User/UserTable.vue';

const computedArray = computed(() => {
  return customerCards.map((card) => ({
    id: generateUniqueId(),
    ...card
  }))
})
</script>
