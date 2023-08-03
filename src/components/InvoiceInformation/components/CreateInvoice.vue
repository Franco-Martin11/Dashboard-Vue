<!-- <template>
  <button
    type="button"
    class="text-base h-fit w-fit font-heading-bold text-[#fff] px-4 py-1 rounded-md bg-Pallet-Purple border border-transparent hover:shadow-xl"
    title="Create new invoice"
    @click="handleToggle"
  >
    New +
  </button>
  <template v-if="createInvoceToggle">
    <div
      v-motion-fade
      class="flex flex-col gap-4 justify-start bg-[#fbfbfb] rounded-lg shadow-md p-6 z-50 relative w-fit"
    >
      <div class="flex shrink-0 flex-row gap-4 justify-between text-[27px]">
        <h2 class="font-heading-bold text-[#111] capitalize">Create new invoice</h2>
        <button type="button" title="Prueba X" @click="handleToggle">✕</button>
      </div>

      <h4 class="shrink-0 text-[#333] font-body-regular text-[22px]" for="">
        Invoice Number <span class="text-Pallet-Purple">#4444444</span>
      </h4>
      <form
        action=""
        @submit.prevent="handleClick"
        :v-model="formDataRef"
        class="grid-cols-formFields gap-4 grid h-full w-128"
      >
        <template v-for="formData in formDataRef" :key="formData.id">
          <FormFields
            :input-type="formData.type"
            :id="formData.id"
            :value="formData.value"
            :name="formData.name"
            v-model="formData.value"
            @update:value="(newValue) => (formData.value = newValue)"
          />
        </template>
        <div class="flex flex-row gap-2 justify-start items-end">
          <button
            class="text-lg h-fit w-fit font-heading-bold px-2 py-1 rounded-md bg-[#fafafa] border border-[#ccc] hover:bg-[#e7e7e7] hover:shadow-lg"
            type="button"
            @click="handleToggle"
          >
            Cancel
          </button>
          <button
            class="text-lg h-fit w-fit font-heading-bold text-[#fff] px-2 py-1 rounded-md bg-Pallet-Purple border border-transparent hover:shadow-xl"
            type="submit"
            @click="emitirEvento"
          >
            Create Invoice
          </button>
        </div>
      </form>
    </div>
  </template>
</template>

<script setup lang="ts">
import { getCurrentInstance, ref, type ComponentInternalInstance } from 'vue'
import FormFields from './FormFields.vue'
import { initialFormValue } from '@/constants/InitialFormState'
let formDataRef = ref(initialFormValue)

defineEmits(['mi-evento', 'on-function'])

// Obtén la instancia actual del componente
const instance: ComponentInternalInstance | null = getCurrentInstance()

// Función para emitir el evento hacia el componente padre
const emitirEvento = () => {
  instance?.emit('on-function', 'Datos del evento funtion')
  instance?.emit('mi-evento', 'Datos del evento')

  console.log(formDataRef.value)
}

const handleClick = () => (formDataRef.value = initialFormValue)
const createInvoceToggle = ref<boolean>(false)
const handleToggle = () => (createInvoceToggle.value = !createInvoceToggle.value)
</script>

<style scoped></style> -->
