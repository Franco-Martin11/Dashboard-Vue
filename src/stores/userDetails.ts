import { initialFormValue } from '@/constants/InitialFormState'
import type { userDetailType } from '@/types'
import { defineStore } from 'pinia'
interface initialUserData {
  phoneNumber: string
  personalEmail: string
  'Tax ID': number
  GSTIN: string
  'NRIC/FIN/ID/DNI': string
}

const initialUserData = {
  phoneNumber: '+1 646 980 4741',
  personalEmail: 'main.francomartin.gmail.com',
  'Tax ID': 886655122551155,
  GSTIN: '12AAS1255SADW',
  'NRIC/FIN/ID/DNI': 'A22558AB'
}

export const userDetails = defineStore('userDetails', {
  state: (): { data: userDetailType[]; userData: initialUserData } => ({
    data: initialFormValue,
    userData: initialUserData
  }),
  actions: {
    setFormValues(newValue: userDetailType[]) {
      this.data = newValue
    }
  }
})
