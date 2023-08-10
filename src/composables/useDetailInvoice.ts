import { userDetails } from '@/stores/userDetails'
import type { userDetailType } from '@/types'
import { storeToRefs } from 'pinia'
export const userDetailsInvoices = () => {
  const state = userDetails()
  const { initialFormValue, userData, useDataEmpty } = storeToRefs(state)

  const setDataInvoice = (newValue: userDetailType[]) => state.setFormValues(newValue)

  return { initialFormValue, setDataInvoice, userData, useDataEmpty }
}
