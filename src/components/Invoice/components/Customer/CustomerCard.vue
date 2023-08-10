<script setup lang="ts">
import type { customerCardProps } from '@/constants/CustomerCard'
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps<customerCardProps>()
const customerNamerQuery = computed(() => props.customerName.replace(/ /g, '-').toLowerCase())
</script>

<template>
  <RouterLink :to="`/invoices/customer/${customerNamerQuery}`">
    <div
      class="bg-[#f9f9f9] rounded-[9.45px] p-2.5 flex flex-row gap-2.5 items-center justify-start w-[350.23px] relative"
    >
      <img
        class="rounded-[4.71px] shrink-0 w-[47.66px] h-[47.66px] relative"
        :src="`/images/${imgUrl}`"
        :alt="imgAlt"
      />
      <div class="flex flex-col gap-1 items-center justify-center self-stretch flex-1 relative">
        <h3
          class="text-[#5b5b5b] text-left relative self-stretch h-[16.95px] flex items-center justify-start"
          style="font: 400 16.18px 'Product Sans Medium', sans-serif"
        >
          {{ customerName }}
        </h3>
        <span
          class="text-[#9698ab] text-left relative self-stretch h-[12.24px]"
          style="font: 400 12.41px 'Product Sans Medium', sans-serif"
        >
          {{ purchases }} | {{ likes }} | {{ due }}
        </span>
      </div>
      <svg
        class="shrink-0 relative overflow-visible hover:shadow-lg"
        style=""
        width="33"
        height="33"
        viewBox="0 0 33 33"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_240_882)">
          <path
            d="M32.0553 16.185C32.0553 25.0241 24.8897 32.1897 16.0506 32.1897C7.21144 32.1897 0.0458984 25.0241 0.0458984 16.185C0.0458984 7.34585 7.21144 0.180313 16.0506 0.180313C24.8897 0.180313 32.0553 7.34585 32.0553 16.185Z"
            fill="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M19.1888 11.4777H12.5986C11.3854 11.4777 10.4019 12.4612 10.4019 13.6745V18.6171C10.4019 19.8303 11.3854 20.8138 12.5986 20.8138H19.1888C20.402 20.8138 21.3855 19.8303 21.3855 18.6171V13.6745C21.3855 12.4612 20.402 11.4777 19.1888 11.4777ZM12.5992 12.3512H19.1894C19.7746 12.3523 20.2891 12.7393 20.4525 13.3013L16.3117 16.3712C16.1982 16.4822 16.0443 16.542 15.8857 16.5368C15.727 16.5316 15.5774 16.4619 15.4714 16.3438L11.3471 13.3068C11.5073 12.7465 12.0165 12.3579 12.5992 12.3512ZM11.2754 18.6173C11.2754 19.3483 11.8679 19.9408 12.5989 19.9408H19.189C19.9179 19.9378 20.5071 19.3461 20.5071 18.6173V14.2074L16.7726 16.9533C16.534 17.1755 16.22 17.2991 15.894 17.2993C15.555 17.2939 15.2301 17.1627 14.9823 16.9313L11.2754 14.1854V18.6173Z"
            fill="#5B5B5B"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_240_882"
            x="-3.9541"
            y="0.180313"
            width="40.0094"
            height="40.0094"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_240_882" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_240_882"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  </RouterLink>
</template>

<style scoped></style>
