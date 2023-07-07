import { $axiosInstance } from '@/services/services.api'
import { defineStore } from 'pinia'
import type { Transaction, TransactionsData } from '@/types/transactionData'

interface UserDataState {
  data: TransactionsData | null
  prueba: string | undefined
}

export const useUser = defineStore('userData', {
  state: (): UserDataState => ({
    data: null,
    prueba: ''
  }),

  actions: {
    async setUserData(): Promise<void> {
      try {
        const responseData = await $axiosInstance.getProject()
        this.data = responseData
      } catch (error) {
        console.error('Error while setting user data:', error)
      }
    },

    async setElement(params: Omit<Transaction, 'id' | 'date'>): Promise<void> {
      try {
        const responseData = await $axiosInstance.postProjectWithParams(params)
        this.data = responseData
      } catch (error) {
        console.error('Error while setting element:', error)
      }
    }
  }
})
