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
      <button
        class="m-auto"
        type="button"
        @click="() => (optionToggle = !optionToggle)"
        :class="optionToggle ? 'bg-[#dfdfff]' : ''"
      >
        <OptionIcon></OptionIcon>
      </button>
    </nav>
    <button
      type="button"
      @click="() => (messageToggle = !messageToggle)"
      class="w-[48px] h-[48px] rounded-[10px] bg-[#FEFEFF] shadow-md"
      :class="messageToggle ? 'bg-[#dfdfff]' : ''"
    >
      <MessageButtonIcon class="m-auto"></MessageButtonIcon>
    </button>
    <nav class="flex flex-row gap-4">
      <button
        @click="() => (notificationToggle = !notificationToggle)"
        type="button"
        class="w-[48px] h-[48px] rounded-[10px] bg-[#FEFEFF] shadow-md"
        :class="notificationToggle ? 'bg-[#dfdfff]' : ''"
      >
        <NotificationIcon class="m-auto"></NotificationIcon>
      </button>
      <button
        type="button"
        class="w-[48px] h-[48px] rounded-[10px] bg-[#FEFEFF] shadow-md"
        @click="() => (userTableToggle = !userTableToggle)"
        :class="userTableToggle ? 'bg-[#dfdfff]' : ''"
      >
        <UserPersonIcon class="m-auto"></UserPersonIcon>
      </button>
    </nav>
  </div>
  <div v-if="userTableToggle" v-motion-fade class="absolute top-24 right-[.35rem] w-[280px]">
    <UserTable />
  </div>
  <div v-if="notificationToggle" v-motion-fade class="absolute top-24 right-[5rem] w-[280px]">
    <UserTable />
  </div>
  <div v-if="messageToggle" v-motion-fade class="absolute top-24 right-[10rem] w-[280px]">
    <UserTable />
  </div>
  <div v-if="optionToggle" v-motion-fade class="absolute top-24 right-[25rem] w-[280px]">
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

const userTableToggle = ref<boolean>(false)
const optionToggle = ref<boolean>(false)
const notificationToggle = ref<boolean>(false)
const messageToggle = ref<boolean>(false)
</script>

<style scoped></style>
