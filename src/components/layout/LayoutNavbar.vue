<template>
  <div class="flex flex-row justify-between items-center z-30 relative mt-2">
    <slot name="headingNavigation"></slot>
    <nav
      class="flex flex-row gap-2 items-center text-Subtitle-Gray rounded-[7px] w-[313px] h-[48px] bg-[#F5F9FD]"
    >
      <button class="m-auto" type="submit">
        <SearchIcon></SearchIcon>
      </button>
      <input type="text" placeholder="Search Dashboard" class="bg-[#F5F9FD] h-[inherit]" />
      <button class="m-auto" type="button">
        <OptionIcon></OptionIcon>
      </button>
    </nav>
    <button type="button" class="w-[48px] h-[48px] rounded-[10px] bg-[#FEFEFF] shadow-md">
      <MessageButtonIcon class="m-auto"></MessageButtonIcon>
    </button>
    <nav class="flex flex-row gap-4">
      <button type="button" class="w-[48px] h-[48px] rounded-[10px] bg-[#FEFEFF] shadow-md">
        <NotificationIcon class="m-auto"></NotificationIcon>
      </button>
      <button
        type="button"
        class="w-[48px] h-[48px] rounded-[10px] bg-[#FEFEFF] shadow-md"
        :onclick="handleToggle"
      >
        <UserPersonIcon class="m-auto"></UserPersonIcon>
      </button>
    </nav>
  </div>
  <div v-if="toggle" class="absolute top-24 right-[.35rem] w-[280px]">
    <UserTable />
  </div>
</template>

<script setup lang="ts">
import SearchIcon from '@/assets/icons/search.svg?component'
import OptionIcon from '@/assets/icons/tune.svg?component'
import MessageButtonIcon from '@/assets/icons/messageButton.svg?component'
import NotificationIcon from '@/assets/icons/notification.svg?component'
import UserPersonIcon from '@/assets/icons/user-person.svg?component'
import { ref } from 'vue'
import UserTable from '../User/UserTable.vue'

const toggle = ref<boolean>(false)
const handleToggle = () => (toggle.value = !toggle.value)
</script>

<style scoped></style>
