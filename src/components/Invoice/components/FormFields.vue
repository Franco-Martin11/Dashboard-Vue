<template>
  <div v-if="inputType === 'date'"
    class="bg-[#ffffff] rounded-[5px] border-solid border-[rgba(151,151,151,0.50)] border pt-[5px] pr-5 pb-[5px] pl-5 flex-1 flex flex-col gap-[5px] items-start justify-start shrink-0 relative">
    <label :for="name" class="text-[#979797] text-left relative" style="font: 400 12px 'Product Sans Medium', sans-serif">
      {{ name }}
    </label>

    <input :name="name" :id="id" placeholder="..." :value="value" @input="handleInput" :type="inputType"
      class="text-[#000000] text-left relative" style="font: 400 16px 'Product Sans Medium', sans-serif" />
  </div>
  <div v-else-if="inputType === 'currency'"
    class="bg-[#ffffff] rounded-[5px] border-solid border-[rgba(151,151,151,0.50)] border pt-[5px] pr-5 pb-[5px] pl-5 flex-1 flex flex-col gap-[5px] items-start justify-start shrink-0 relative w-[182px]">
    <div class="flex flex-col w-full flex-1 gap-[5px] items-start justify-start shrink-0 relative">
      <div class="text-[#979797] text-left relative" style="font: 400 12px 'Product Sans Medium', sans-serif">
        Currency
      </div>
      <select :name="name" :id="id" :v-model="value" @change="handleInput" class="w-full flex-1">
        <option value="USD" class="text-[#000000] text-left relative"
          style="font: 400 16px 'Product Sans Medium', sans-serif">
          $-USD
        </option>
        <option value="EU" class="text-[#000000] text-left relative"
          style="font: 400 16px 'Product Sans Medium', sans-serif">
          $-EU
        </option>
        <option value="RS" class="text-[#000000] text-left relative"
          style="font: 400 16px 'Product Sans Medium', sans-serif">
          $-RUS
        </option>
        <option value="ARS" class="text-[#000000] text-left relative"
          style="font: 400 16px 'Product Sans Medium', sans-serif">
          $-ARS
        </option>
      </select>
    </div>
  </div>
  <div v-else class="flex flex-col gap-[5px] items-start justify-start self-stretch shrink-0 relative">
    <label :for="name" class="text-[#979797] text-left relative" style="font: 400 14px 'Product Sans Medium', sans-serif">
      {{ name }}
    </label>

    <input :name="name" :id="id" :placeholder="placeholder" :value="value" @input="handleInput" :type="inputType"
      class="text-[#000000] text-left relative w-full" style="font: 400 18px 'Product Sans Medium', sans-serif" />
  </div>
</template>

<script setup lang="ts">
import { getCurrentInstance, type ComponentInternalInstance } from 'vue'

interface propsData {
  inputType: string
  name: string
  id?: string
  value: string
  placeholder: string
}
const props = defineProps<propsData>()

const instance: ComponentInternalInstance | null = getCurrentInstance()

const handleInput = (event: Event) => {
  if (props.inputType === 'currency') {
    const value = event?.target instanceof HTMLSelectElement ? event.target.value : null
    instance?.emit('update:value', value)
    return
  }
  const value = event?.target instanceof HTMLInputElement ? event.target.value : null
  instance?.emit('update:value', value)
}
</script>
