import { initialFormValue } from '@/constants/InitialFormState'
import type { userDetailType } from '@/types'
import {
  exampleInvoice,
  // exampleInvoiceEmpty,
  type Invoice as InvoiceStandar
} from '@/types/InvoiceType'
import { defineStore } from 'pinia'

// Define tipos para la estructura del objeto useDataEmpty
// type InvoiceDetails = {
//   invoiceNumber: string
//   issueDate: Date
//   // Otras propiedades relevantes...
// }

type ProductDetails = {
  description: string
  timeOfHiring: number
  // Otras propiedades relevantes...
}

export type ClientDetails = {
  name: string
  address: string
  // Otras propiedades relevantes...
}

export interface Invoice {
  invoiceNumber: string
  issueDate: Date
  // Otras propiedades relevantes...
  provider: ClientDetails & ProductDetails
  client: ClientDetails
  product: {
    items: ProductDetails[]
    // Otras propiedades relevantes...
  }
  [key: string]: any
  // Otras propiedades relevantes...
}

export const FormDetails = defineStore('FormDetails', {
  state: (): { initialFormValue: userDetailType[]; useDataEmpty: InvoiceStandar } => ({
    initialFormValue,
    useDataEmpty: exampleInvoice
  }),
  actions: {
    updateForm(newValue: userDetailType[]) {
      newValue.forEach((category) => {
        category.data.forEach((data) => {
          if (
            category.category in this.useDataEmpty &&
            data.id in this.useDataEmpty[category.category]
          ) {
            this.useDataEmpty[category.category][data.id] = data.value
          }
        })
      })
    }
  }
})
