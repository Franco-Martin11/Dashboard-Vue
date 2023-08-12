export interface ProductItem {
  type: string
  status: 'pending' | 'success' | 'due'
  items: InvoiceItem[]
  subtotal: number
  taxes?: InvoiceTax[]
  discounts?: InvoiceDiscount[]
  total: number
}

export interface InvoiceItem {
  description: string
  timeOfHiring: number | string
  subtotal: number
}

export interface InvoiceTax {
  name: string
  rate: number
  acronym: string
}

export interface InvoiceDiscount {
  name: string
  amount: number
}

export const productArray: Record<string, ProductItem[]> = {
  'cliente-1': [
    {
      type: 'physical',
      status: 'pending',
      items: [
        {
          description: 'Product A',
          timeOfHiring: '2023-08-11',
          subtotal: 100
        },
        {
          description: 'Product B',
          timeOfHiring: '2023-08-12',
          subtotal: 150
        }
      ],
      subtotal: 250,
      taxes: [
        {
          name: 'VAT',
          rate: 0.2,
          acronym: 'VAT'
        }
      ],
      discounts: [
        {
          name: 'Promotion',
          amount: 50
        }
      ],
      total: 220
    },
    {
      type: 'physical',
      status: 'success',
      items: [
        {
          description: 'Product AB',
          timeOfHiring: '2023-08-11',
          subtotal: 1000
        },
        {
          description: 'Product BC',
          timeOfHiring: '2023-08-12',
          subtotal: 150
        },
        {
          description: 'Product BCD',
          timeOfHiring: '2023-08-12',
          subtotal: 150
        },
        {
          description: 'Product CD',
          timeOfHiring: '2023-08-12',
          subtotal: 150
        }
      ],
      subtotal: 250,
      taxes: [
        {
          name: 'VAT',
          rate: 0.2,
          acronym: 'VAT'
        }
      ],
      discounts: [
        {
          name: 'Promotion',
          amount: 50
        }
      ],
      total: 220
    }
  ],
  'cliente-2': [
    {
      type: 'digital',
      status: 'success',
      items: [
        {
          description: 'Software X',
          timeOfHiring: '2023-08-10',
          subtotal: 200
        }
      ],
      subtotal: 200,
      taxes: [
        {
          name: 'Sales Tax',
          rate: 0.1,
          acronym: 'ST'
        }
      ],
      total: 220
    }
  ],
  'cliente-3': [
    {
      type: 'physical',
      status: 'due',
      items: [
        {
          description: 'Product C',
          timeOfHiring: '2023-08-15',
          subtotal: 120
        }
      ],
      subtotal: 120,
      taxes: [
        {
          name: 'VAT',
          rate: 0.2,
          acronym: 'VAT'
        }
      ],
      discounts: [],
      total: 144
    }
  ],
  'cliente-4': [
    {
      type: 'digital',
      status: 'pending',
      items: [
        {
          description: 'Software Y',
          timeOfHiring: '2023-08-10',
          subtotal: 180
        }
      ],
      subtotal: 180,
      taxes: [
        {
          name: 'Sales Tax',
          rate: 0.1,
          acronym: 'ST'
        }
      ],
      total: 198
    }
  ],
  'cliente-5': [
    {
      type: 'physical',
      status: 'success',
      items: [
        {
          description: 'Product D',
          timeOfHiring: '2023-08-14',
          subtotal: 90
        },
        {
          description: 'Product E',
          timeOfHiring: '2023-08-15',
          subtotal: 110
        }
      ],
      subtotal: 200,
      taxes: [
        {
          name: 'VAT',
          rate: 0.2,
          acronym: 'VAT'
        }
      ],
      discounts: [
        {
          name: 'Promotion',
          amount: 30
        }
      ],
      total: 160
    }
  ],
  'cliente-6': [
    {
      type: 'digital',
      status: 'due',
      items: [
        {
          description: 'Software Z',
          timeOfHiring: '2023-08-09',
          subtotal: 150
        }
      ],
      subtotal: 150,
      taxes: [
        {
          name: 'Sales Tax',
          rate: 0.1,
          acronym: 'ST'
        }
      ],
      total: 165
    }
  ],
  'cliente-7': [
    {
      type: 'physical',
      status: 'pending',
      items: [
        {
          description: 'Product F',
          timeOfHiring: '2023-08-12',
          subtotal: 200
        }
      ],
      subtotal: 200,
      taxes: [
        {
          name: 'VAT',
          rate: 0.2,
          acronym: 'VAT'
        }
      ],
      discounts: [],
      total: 200
    }
  ]
}
