<script setup lang="ts">
import { onMounted } from 'vue'
import { useUserComposable } from './composables/useUserComposable'
import LayoutContainer from './components/layout/LayoutContainer.vue'
import { RouterView } from 'vue-router'
const { setUserData } = useUserComposable()
onMounted(() => setUserData())
</script>
<template>
  <LayoutContainer>
    <template #ContainerPages>
      <RouterView />
    </template>
  </LayoutContainer>
</template>
