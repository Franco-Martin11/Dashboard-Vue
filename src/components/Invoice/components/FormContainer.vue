<template>
  <div
    v-motion-fade
    class="flex flex-col px-5 gap-[25px] items-start justify-start flex-[1.5_1_350px] relative"
  >
    <!-- invoice title -->
    <div
      class="py-2 flex flex-col gap-0.5 items-start justify-start self-stretch shrink-0 relative"
    >
      <div class="flex py-4 flex-row gap-1 items-center justify-start shrink-0 w-[206px] relative">
        <div
          class="text-[#979797] text-left relative"
          style="font: 400 14px 'Product Sans', sans-serif"
        >
          Invoice
        </div>

        <div
          class="text-[#000000] text-left relative"
          style="font: 700 20px 'Product Sans', sans-serif"
        >
          /
        </div>

        <div
          class="text-[#979797] text-left relative"
          style="font: 400 14px 'Product Sans', sans-serif"
        >
          Create New Invoice
        </div>
      </div>

      <div
        class="text-[#000000] text-left relative"
        style="font: 700 32px 'Product Sans', sans-serif"
      >
        Create New Invoice
      </div>
    </div>
    <form
      action=""
      @submit.prevent="emitirEvento"
      :v-model="dataForm"
      class="w-full flex flex-col gap-4"
    >
      <!-- Languaje dropdownd -->
      <div
        class="flex flex-row gap-2.5 items-start justify-center flex-wrap self-stretch shrink-0 relative"
      >
        <div
          class="border-solid border-[rgba(0,0,0,0.35)] border-t-[0.5px] border-b-[0.5px] pt-[30px] pb-[30px] flex flex-row gap-[25px] items-start justify-center self-stretch shrink-0 relative w-full"
        >
          <div
            class="bg-[#ffffff] rounded-[5px] border-solid border-[rgba(151,151,151,0.50)] border pt-[5px] pr-2.5 pb-[5px] pl-2.5 flex flex-row items-center justify-between flex-1 relative"
          >
            <div class="flex flex-col gap-[5px] items-start justify-start shrink-0 relative">
              <div
                class="text-[#979797] text-left relative"
                style="font: 400 12px 'Product Sans Medium', sans-serif"
              >
                Language
              </div>
              <select class="w-full" id="languages">
                <option
                  value="english"
                  selected
                  class="text-[#000000] text-left relative"
                  style="font: 400 16px 'Product Sans Medium', sans-serif"
                >
                  English
                </option>
                <option
                  value="english"
                  selected
                  class="text-[#000000] text-left relative"
                  style="font: 400 16px 'Product Sans Medium', sans-serif"
                >
                  Deutch
                </option>
                <option
                  value="english"
                  selected
                  class="text-[#000000] text-left relative"
                  style="font: 400 16px 'Product Sans Medium', sans-serif"
                >
                  France
                </option>
                <option
                  value="english"
                  selected
                  class="text-[#000000] text-left relative"
                  style="font: 400 16px 'Product Sans Medium', sans-serif"
                >
                  Spanish
                </option>
              </select>
            </div>
          </div>

          <div
            class="bg-[#ffffff] rounded-[5px] border-solid border-[rgba(151,151,151,0.50)] border pt-[5px] pr-2.5 pb-[5px] pl-2.5 flex flex-row items-center justify-between flex-1 relative"
          >
            <div class="flex flex-col gap-[5px] items-start justify-start shrink-0 relative">
              <div
                class="text-[#979797] text-left relative"
                style="font: 400 12px 'Product Sans Medium', sans-serif"
              >
                Currency
              </div>
              <select class="w-full" id="currency">
                <option
                  value="usd"
                  selected
                  class="text-[#000000] text-left relative"
                  style="font: 400 16px 'Product Sans Medium', sans-serif"
                >
                  $-USD
                </option>
                <option
                  value="euro"
                  class="text-[#000000] text-left relative"
                  style="font: 400 16px 'Product Sans Medium', sans-serif"
                >
                  $-EU
                </option>
                <option
                  value="rublo"
                  class="text-[#000000] text-left relative"
                  style="font: 400 16px 'Product Sans Medium', sans-serif"
                >
                  $-RUS
                </option>
                <option
                  value="pesoArgentino"
                  class="text-[#000000] text-left relative"
                  style="font: 400 16px 'Product Sans Medium', sans-serif"
                >
                  $-ARS
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-col gap-5 items-start justify-start self-stretch shrink-0 relative">
        <template v-for="formData in dataForm" :key="formData.category">
          <div
            class="flex flex-col gap-5 items-start justify-start self-stretch shrink-0 relative w-full"
          >
            <h3
              class="text-[#15161f] text-left relative"
              style="font: 400 18px 'Product Sans Medium', sans-serif"
            >
              {{ formData.category }}
            </h3>

            <template v-if="formData.data">
              <div
                v-for="data in formData.data"
                :key="data.id"
                class="pl-2.5 flex flex-col gap-5 items-start justify-start shrink-0 relative w-full"
              >
                <FormFields
                  :input-type="data.type"
                  :id="data.id"
                  :value="data.value"
                  :name="data.name"
                  :placeholder="data.placeholder"
                  v-model="data.value"
                  @update:value="(newValue) => (data.value = newValue)"
                />
              </div>
            </template>
          </div>
        </template>
      </div>
      <button type="submit" @click="emitirEvento">Prueba</button>
    </form>
  </div>
</template>

<script setup lang="ts">
// import { getCurrentInstance, ref, type ComponentInternalInstance, onMounted } from 'vue'
// import { initialFormValue } from '@/constants/InitialFormState'
import FormFields from './FormFields.vue'
import { userDetailsInvoices } from '@/composables/useDetailInvoice'
const { setDataInvoice, data: dataForm } = userDetailsInvoices()
// defineEmits(['mi-evento', 'on-function'])

// Obtén la instancia actual del componente
// const instance: ComponentInternalInstance | null = getCurrentInstance()

// Función para emitir el evento hacia el componente padre
// const emitirEvento = () => {
//     instance?.emit('mi-evento', formDataRef.value)
// }

// const handleClick = () => (formDataRef.value = initialFormValue)
// const createInvoceToggle = ref<boolean>(false)
// const handleToggle = () => (createInvoceToggle.value = !createInvoceToggle.value)
const emitirEvento = () => {
  setDataInvoice(dataForm.value)
}
</script>

<style scoped></style>
