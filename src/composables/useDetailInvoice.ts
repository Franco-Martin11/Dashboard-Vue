import { userDetails } from '@/stores/userDetails'
import { storeToRefs } from 'pinia'
export const userDetailsInvoices = () => {
  const state = userDetails()
  const { data } = storeToRefs(state)

  const setDataInvoice = () => state.setFormValues()

  return { data, setDataInvoice }
}
