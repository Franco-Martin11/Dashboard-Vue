<template>
  <div>
    <!-- <h1>
      {{ JSONdata }}
    </h1> -->
    <div>
      <button type="button" @click="handleClick">Esto es una prueba</button>
      <h1 className="text-xl font-black text-slate-200" v-if="!dataArray">Loading</h1>
      <template v-for="deportes in dataArray" v-bind:key="deportes.id">
        <h1>{{ deportes.deporte }}</h1>
        <p>{{ deportes.paragraph }}</p>
        <p>{{ deportes.additionalInfo.origen }}</p>
        <span>{{ deportes.numberPlayers }}</span>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { $axiosInstance } from '@/services/services.api'
import type { DeportesData } from '@/types/apiData'
import { onMounted, ref, type Ref } from 'vue'

const dataArray: Ref<null | DeportesData[]> = ref(null)
onMounted(async () => {
  dataArray.value = await $axiosInstance.getProject()
})
const handleClick = (): void => alert('esto es una prueba')
</script>
