import { defineStore } from 'pinia'

type initialUser = {
  phoneNumber: string
  personalEmail: string
  'Tax ID': number
  GSTIN: string
  'NRIC/FIN/ID/DNI': string
}

const initialUserData: initialUser = {
  phoneNumber: '+1 646 980 4741',
  personalEmail: 'main.francomartin.gmail.com',
  'Tax ID': 886655122551155,
  GSTIN: '12AAS1255SADW',
  'NRIC/FIN/ID/DNI': 'A22558AB'
}

export const userDetails = defineStore('userDetails', {
  state: (): { userData: initialUser } => ({
    userData: initialUserData
  })
})
