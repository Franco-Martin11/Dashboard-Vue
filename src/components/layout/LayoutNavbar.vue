<template>
  <div class="flex flex-row justify-between w-full items-center z-30 relative mt-2">
    <div class="flex flex-col gap-[5px] items-start justify-center shrink-0 relative">
      <h1 class="text-left relative text-Heading-Purple font-heading-bold text-[27px]">
        {{ titleHeading }}
      </h1>
      <p class="font-body-regular font-[15px] text-Subtitle-Gray">
        {{ descriptionHeading }}
      </p>
    </div>
    <nav
      class="flex flex-row gap-2 items-center text-Subtitle-Gray rounded-[7px] w-[313px] h-[48px] bg-[#F5F9FD] cursor-not-allowed"
    >
      <button class="m-auto cursor-not-allowed" type="submit">
        <SearchIcon></SearchIcon>
      </button>
      <input type="text" placeholder="Search Dashboard" class="bg-[#F5F9FD] h-[inherit]" />
      <button
        class="m-auto cursor-not-allowed"
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
      class="w-[48px] h-[48px] rounded-[10px] bg-[#FEFEFF] shadow-md cursor-not-allowed"
      :class="messageToggle ? 'bg-[#dfdfff]' : ''"
    >
      <MessageButtonIcon class="m-auto"></MessageButtonIcon>
    </button>
    <nav class="flex flex-row gap-4">
      <button
        @click="() => (notificationToggle = !notificationToggle)"
        type="button"
        class="w-[48px] h-[48px] rounded-[10px] bg-[#FEFEFF] shadow-md cursor-not-allowed"
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
  <div v-if="userTableToggle" v-motion-fade class="absolute top-24 z-50 right-[.35rem] w-[280px]">
    <UserTable />
  </div>
  <div v-if="notificationToggle" v-motion-fade class="absolute top-24 z-50 right-[5rem] w-[280px]">
    <UserTable />
  </div>
  <div v-if="messageToggle" v-motion-fade class="absolute top-24 z-50 right-[10rem] w-[280px]">
    <UserTable />
  </div>
  <div v-if="optionToggle" v-motion-fade class="absolute top-24 z-50 right-[25rem] w-[280px]">
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
interface definePropsValues {
  titleHeading: string
  descriptionHeading: string
}
defineProps<definePropsValues>()

const userTableToggle = ref<boolean>(false)
const optionToggle = ref<boolean>(false)
const notificationToggle = ref<boolean>(false)
const messageToggle = ref<boolean>(false)
</script>

<style scoped></style>
