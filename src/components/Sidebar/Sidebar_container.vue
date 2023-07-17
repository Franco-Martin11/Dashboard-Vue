<template>
  <div class="flex flex-col gap-4 pr-4 pl-8">
    <RouterLink to="/">
      <LogoTitle class="my-4"></LogoTitle>
    </RouterLink>
    <template v-for="{ id, nameIcon, textLabel, urlRoute, size } in OptionLinkRouteArr" :key="id">
      <OptionLink
        :name-icon="nameIcon"
        :id="id"
        :size="size"
        :text-label="textLabel"
        :url-route="urlRoute"
      ></OptionLink>
    </template>
    <div class="flex flex-col justify-center gap-2 relative shadow-sm mt-4">
      <figure class="bg-[#00ffff2e] rounded-[2.5rem]">
        <img src="/richie-image-1.png" alt="Richie the bot" />
      </figure>
      <button
        class="bg-[#fafafa] py-2 px-4 w-fit rounded-full shadow-xl text-Head-UserGray font-heading-bold absolute bottom-[-20px] left-0 right-0 mx-auto"
        type="button"
        @click="handleClick"
      >
        Let's talk ☺
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
/// <reference types="vite-svg-loader" />
import LogoTitle from '@/assets/icons/logoTitle.svg?component'
import { OptionLinkRouteArr } from '@/constants/LinkRouteData'
import OptionLink from './components/Option-Link.vue'
import { RouterLink } from 'vue-router'
const handleClick = () => alert('holis')
</script>

<style scoped></style>
