<template>
  <div v-motion-fade>
    <AvatarImage :url="null" alt="prueba" />
    <UserProfile/>
  </div>
</template>

<script setup lang="ts">
import AvatarImage from '@/components/User/components/AvatarImage.vue'
import UserProfile from '@/components/UserProfile.vue';
</script>

<style scoped></style>
