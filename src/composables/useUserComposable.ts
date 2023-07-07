import { useUser } from '@/stores/useUser'
import type { Transaction } from '@/types/transactionData'
import { storeToRefs } from 'pinia'

export const useUserComposable = () => {
  const storeUser = useUser()
  const { data, prueba } = storeToRefs(storeUser)

  const setUserData = (): void => {
    storeUser.setUserData()
  }

  const postElementData = (params: Omit<Transaction, 'id' | 'date'>): void => {
    storeUser.setElement(params)
  }

  return {
    data,
    prueba,
    setUserData,
    postElementData
  }
}
