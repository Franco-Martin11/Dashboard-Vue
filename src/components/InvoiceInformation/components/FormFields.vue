<template>
  <div class="flex flex-col gap-1 justify-start">
    <label class="text-Head-UserGray font-body-regular text-[14px] capitalize" :for="name">{{
      name
    }}</label>
    <input
      :type="inputType"
      class="py-1 px-2 pl-3 rounded-md border border-Heading-Purple bg-[#e9e9e9]"
      :name="name"
      :id="id"
      :value="value"
      @input="handleInput"
    />
  </div>
</template>

<script setup lang="ts">
import { getCurrentInstance, type ComponentInternalInstance } from 'vue'

interface propsData {
  inputType: string
  name: string
  id: string
  value: string
}
defineProps<propsData>()

const instance: ComponentInternalInstance | null = getCurrentInstance()

const handleInput = (event: Event) => {
  const value = event?.target instanceof HTMLInputElement ? event.target.value : null
  instance?.emit('update:value', value)
}
</script>
