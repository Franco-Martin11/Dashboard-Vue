import { initialFormValue } from '@/constants/InitialFormState'
import type { userDetailType } from '@/types'
import { defineStore } from 'pinia'

export const userDetails = defineStore('userDetails', {
  state: (): { data: userDetailType[] } => {
    return { data: initialFormValue }
  },
  actions: { setFormValues: () => 'asd' }
})
