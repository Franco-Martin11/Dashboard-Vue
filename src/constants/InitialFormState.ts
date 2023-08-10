import type { userDetailType } from '@/types'

export const initialFormValue: userDetailType[] = [
  {
    category: 'client',
    data: [
      {
        type: 'text',
        id: 'name',
        value: '',
        placeholder: 'Franc Martin.inc',
        name: 'Company name'
      },
      {
        type: 'text',
        id: 'address',
        value: '',
        placeholder: 'Berutti 2262 Buenos Aires, Argentina ST.199/B',
        name: 'Address'
      },
      {
        type: 'text',
        id: 'taxID',
        value: '',
        placeholder: '22-112-112-456-C',
        name: 'Tax Id'
      },
      {
        type: 'email',
        id: 'personalEmail',
        value: '',
        placeholder: 'main.francomartin@gmail.com',
        name: 'Email'
      }
    ]
  },
  // {
  //   category: 'Due Date',
  //   data: [
  //     {
  //       type: 'date',
  //       id: '7890QRST',
  //       value: '',
  //       placeholder: '',
  //       name: 'Company name'
  //     }
  //   ]
  // },
  {
    category: 'product',
    data: [
      {
        type: 'text',
        id: '7890Q12',
        value: '',
        placeholder: 'Product A',
        name: 'Description'
      },
      {
        type: 'number',
        id: '7890Q12',
        value: '',
        placeholder: '12 hrs',
        name: 'Time Of Hiring'
      },
      {
        type: 'currency',
        id: '7890Q12',
        value: 'usd',
        placeholder: '',
        name: 'Currency'
      }
    ]
  }
]
