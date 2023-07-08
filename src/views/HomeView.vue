<template>
  <div>
    <h1 className="font-heading-bold">
Prueba sera que esto funciona
    </h1>
    <h2 className="font-body-regular text-Pallet-Purple">
Prueba sera que esto funciona regular
    </h2>
    <div>
      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        @click="
          postElementData({
            amount: 22000,
            category: 'Food',
            description: 'cucumber,corn,orange,apple,meet,rabits,colliflower'
          })
        "
      >
        postData
      </button>
      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        @click="handleDataInformation"
      >
        dataInformation
      </button>
      <h1 className="text-xl font-black text-slate-200" v-if="!dataArray">Loading</h1>
      <template v-for="data in dataArray?.transaction" v-bind:key="data.id">
        <h1>{{ data.category }}</h1>
        <p>{{ data.description }}</p>
        <p>{{ data.amount }}</p>
        <span>{{ data.date }}</span>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUserComposable } from '@/composables/useUserComposable'

const { postElementData, data: dataArray } = useUserComposable()

const handleDataInformation = () => alert(JSON.stringify(dataArray.value))
</script>
