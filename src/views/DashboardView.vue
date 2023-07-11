<template>
  <div class="flex flex-row justify-between items-center z-30 relative mt-2">
    <div v-motion-fade class="flex flex-col h-[55px]">
      <h1 class="text-Heading-Purple font-heading-bold text-[27px]">Analytics</h1>
      <h4 class="text-[15px] font-body-regular text-Subtitle-Gray">
        Welcome back. Let's get back to work.
      </h4>
    </div>
    <div
      class="flex flex-row gap-2 items-center text-Subtitle-Gray rounded-[7px] w-[313px] h-[48px] bg-[#F5F9FD]"
    >
      <button class="m-auto" type="submit">
        <SearchIcon></SearchIcon>
      </button>
      <input type="text" placeholder="Search Dashboard" class="bg-[#F5F9FD] h-[inherit]" />
      <button class="m-auto" type="button">
        <OptionIcon></OptionIcon>
      </button>
    </div>
    <button type="button" class="w-[48px] h-[48px] rounded-[10px] bg-[#FEFEFF] shadow-md">
      <MessageButtonIcon class="m-auto"></MessageButtonIcon>
    </button>
    <div class="flex flex-row gap-4">
      <button type="button" class="w-[48px] h-[48px] rounded-[10px] bg-[#FEFEFF] shadow-md">
        <NotificationIcon class="m-auto"></NotificationIcon>
      </button>
      <button type="button" class="w-[48px] h-[48px] rounded-[10px] bg-[#FEFEFF] shadow-md">
        <UserPersonIcon class="m-auto"></UserPersonIcon>
      </button>
    </div>
  </div>
  <StatsContainer />
</template>

<script setup lang="ts">
import SearchIcon from '@/assets/icons/search.svg?component'
import OptionIcon from '@/assets/icons/tune.svg?component'
import MessageButtonIcon from '@/assets/icons/messageButton.svg?component'
import NotificationIcon from '@/assets/icons/notification.svg?component'
import UserPersonIcon from '@/assets/icons/user-person.svg?component'
import StatsContainer from '@/components/StatsCard/StatsContainer.vue'
</script>
