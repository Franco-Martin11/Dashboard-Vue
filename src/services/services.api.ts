import type { Transaction, TransactionsData } from '@/types/transactionData'
import $axios from './axios.api'
import paramsSerializer from '@/utils/paramsSerializer'

const path = {
  getProject: '/project',
  postProjectWithParams: '/updateDB'
}

export const $axiosInstance = {
  getProject: async (): Promise<TransactionsData> => {
    return (await $axios.get(path.getProject)).data
  },
  postProjectWithParams: async (params: Omit<Transaction, 'id' | 'date'>) => {
    return (await $axios.post(path.postProjectWithParams, params)).data
  }
}
