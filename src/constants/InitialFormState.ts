interface initialState {
  type: string
  id: string
  value: string
  name: string
}

export const initialFormValue: initialState[] = [
  {
    type: 'text',
    id: '7890QRST',
    value: '',
    name: 'Suplier'
  },
  {
    type: 'date',
    id: '5678EFGH',
    value: '',
    name: 'Issuance Date'
  },
  {
    type: 'date',
    id: '1234ABCD',
    value: '',
    name: 'Due Date'
  },
  {
    type: 'number',
    id: '9012IJKL',
    value: '',
    name: 'Amount'
  },
  {
    type: 'text',
    id: '7890QRST',
    value: '',
    name: 'Currency'
  },
  {
    type: 'text',
    id: '9012IJKL',
    value: '',
    name: 'Category'
  },

  {
    type: 'text',
    id: '2345BCDE',
    value: '',
    name: 'Description'
  }
]
