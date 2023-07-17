<template>
  <div>
    <template v-if="nameIcon === 'credits'">
      <svg
        class="my-5"
        width="153"
        height="1"
        viewBox="0 0 153 1"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect opacity="0.2" width="153" height="1" fill="#C4C4C4" />
      </svg>
    </template>

    <div class="relative">
      <template v-if="isActive(urlRoute)">
        <MaskGroup class="absolute top-[-18px] bottom-0 left-[-25px]" />
      </template>
      <RouterLink :to="urlRoute" :class="linkClasses">
        <SvgIconDinamic :name="nameIcon" />
        <h4
          class="`text-Subtitle-Gray capitalize text-sm hover:text-Pallet-Purple hover:font-bold ${}`"
        >
          {{ textLabel }}
        </h4>
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
/// <reference types="vite-svg-loader" />
import MaskGroup from '@/assets/icons/mask-group.svg?component'
import SvgIconDinamic from '@/components/SvgIconDinamic.vue'
import type { OptionLinkRoute } from '@/types'
import { useRoute } from 'vue-router'
defineProps<OptionLinkRoute>()

const linkClasses = [
  'flex',
  'flex-row',
  'gap-4',
  'items-center',
  'p-1',
  'classActive',
  'relative',
  'w-full'
]

const route = useRoute()
function isActive(url: string): boolean {
  return route.path === url
}
</script>
