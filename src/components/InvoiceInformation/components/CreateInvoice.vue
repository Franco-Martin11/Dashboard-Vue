<template>
  <div class="flex flex-col gap-4 justify-start bg-[#ececec] rounded-lg shadow-md p-6">
    <div class="flex shrink-0 flex-row gap-4 justify-between text-[27px]">
      <h2 class="font-heading-bold text-Pallet-Purple capitalize">Create new invoice</h2>
      <span> ✕ </span>
    </div>

    <h4 class="shrink-0 text-Head-UserGray font-body-regular text-[22px]" for="">
      Invoice Number <span class="text-Pallet-Purple">#4444444</span>
    </h4>

    <form action="" :v-model="formData" class="grid-cols-formFields gap-4 grid h-full w-full">
      <div class="flex flex-col gap-1 justify-start">
        <label class="text-Head-UserGray font-body-regular text-[14px]" for="">Supplier</label>
        <input
          type="text"
          class="py-1 px-2 pl-3 rounded-md border border-Heading-Purple bg-[#e9e9e9]"
          name=""
          id=""
        />
      </div>
      <FormFields
        :input-type="formData.suplier.type"
        :id="formData.suplier.id"
        :value="formData.suplier.value"
        :name="formData.suplier.name"
        v-model="formData.suplier.value"
        @update:value="(newValue) => (formData.suplier.value = newValue)"
      />
      <div class="flex flex-col gap-1 justify-start">
        <label class="text-Head-UserGray font-body-regular text-[14px]" for="">Issuance Date</label>
        <input
          type="text"
          class="py-1 px-2 pl-3 rounded-md border border-Heading-Purple bg-[#e9e9e9]"
          name=""
          id=""
        />
      </div>
      <div class="flex flex-col gap-1 justify-start flex[1_0_140px]">
        <label class="text-Head-UserGray font-body-regular text-[14px]" for="">Issuance Date</label>
        <input
          type="text"
          class="py-1 px-2 pl-3 rounded-md border border-Heading-Purple bg-[#e9e9e9]"
          name=""
          id=""
        />
      </div>

      <div class="flex flex-col gap-1 justify-start">
        <label class="text-Head-UserGray font-body-regular text-[14px]" for="">Issuance Date</label>
        <input
          type="text"
          class="py-1 px-2 pl-3 rounded-md border border-Heading-Purple bg-[#e9e9e9]"
          name=""
          id=""
        />
      </div>

      <div class="flex flex-col gap-1 justify-start">
        <label class="text-Head-UserGray font-body-regular text-[14px]" for="">Currency</label>
        <input
          type="text"
          class="py-1 px-2 pl-3 rounded-md border border-Heading-Purple bg-[#e9e9e9]"
          name=""
          id=""
        />
      </div>
      <div class="flex flex-col gap-1 justify-start">
        <label class="text-Head-UserGray font-body-regular text-[14px]" for="">Category</label>
        <input
          type="text"
          class="py-1 px-2 pl-3 rounded-md border border-Heading-Purple bg-[#e9e9e9]"
          name=""
          id=""
        />
      </div>
      <div class="flex flex-col gap-1 justify-start">
        <label class="text-Head-UserGray font-body-regular text-[14px]" for="">Description</label>
        <input
          type="text"
          class="py-1 px-2 pl-3 rounded-md border border-Heading-Purple bg-[#e9e9e9]"
          name=""
          id=""
        />
      </div>
    </form>
    <div class="flex flex-row gap-1 justify-start">
      <button
        class="text-lg font-heading-bold px-2 py-1 rounded-md border-[transparent] border hover:bg-[#f73030] hover:text-[#fff] border-Pallet-Purple hover:border-[transparent] hover:shadow-lg"
        type="submit"
      >
        Cancel
      </button>
      <button
        class="text-lg font-body-regular text-[#fff] px-2 py-1 rounded-md border-[transparent] border hover:border-Pallet-Purple bg-Pallet-Purple hover:border-[transparent] hover:bg-[#0c9e13] hover:text-[#000] hover:shadow-lg"
        type="submit"
        @click="handleClick"
      >
        Create Invoice
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import FormFields from './FormFields.vue'

const formData = ref({
  suplier: {
    type: 'text',
    id: '12asd',
    value: '',
    name: 'suplier'
  }
})

const handleClick = () => console.log(formData.value)
</script>

<style scoped></style>
