export interface Invoice {
  invoiceNumber: string
  issueDate: Date
  dueDate?: Date
  paymentTerms?: string
  provider: InvoicePartyProvider
  client: InvoiceParty
  product: {
    items: InvoiceItem[]
    subtotal: number
    taxes?: InvoiceTax[]
    discounts?: InvoiceDiscount[]
    total: number
  }
  additionalInfo?: string
}

export interface InvoiceParty {
  name: string
  address?: string
  taxID?: string
  personalEmail: string
}
export interface InvoicePartyProvider extends InvoiceParty {
  product: string
  phoneNumber: string
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

// Usage example:
export const exampleInvoice: Invoice = {
  invoiceNumber: 'INV-001',
  issueDate: new Date('2023-08-04'),
  dueDate: new Date('2023-09-04'),
  paymentTerms: 'Net 30',
  provider: {
    name: 'Your Company Name',
    address: '123 Main St, Anytown, USA',
    taxID: '123456789', // EIN in the US, CUIT in Argentina, etc.
    product: 'Product Desing',
    phoneNumber: '+1 646 980 4741',
    personalEmail: 'main.francomartin.gmail.com'
  },
  client: {
    name: 'Client Company Name',
    address: '456 Client Ave, City, Country',
    taxID: '987654321', // EIN in the US, CUIT in Argentina, etc.
    personalEmail: 'main.monsterInc.gmail.com'
  },
  product: {
    items: [
      {
        description: 'Product A',
        timeOfHiring: 100,
        subtotal: 100
      },
      {
        description: 'Product B',
        timeOfHiring: 1000,
        subtotal: 10
      },
      {
        description: 'Product c',
        timeOfHiring: 10,
        subtotal: 10
      }
    ],
    subtotal: 0,
    taxes: [
      {
        name: 'Sales Tax',
        rate: 0.9,
        acronym: 'COST/IVA/ST @ 9%'
      },
      {
        name: 'Use Tax',
        rate: 0.5,
        acronym: 'UT @ 5%'
      },
      {
        name: 'Transaction Tax',
        rate: 0.39,
        acronym: 'IC/SD(Stamp-Duty)/VAT @ 3.9%'
      }
    ],
    total: 0
  },
  additionalInfo: 'Thank you for your business!'
}

export const exampleInvoiceEmpty: Invoice = {
  invoiceNumber: 'INV-001',
  issueDate: new Date(),
  dueDate: new Date(),
  paymentTerms: '',
  provider: {
    name: 'Franco Martin',
    address: '123 Main St, Anytown, USA',
    taxID: '123456789', // EIN in the US, CUIT in Argentina, etc.
    product: 'Product Desing',
    phoneNumber: '+1 646 980 4741',
    personalEmail: 'main.francomartin.gmail.com'
  },
  client: {
    name: '',
    address: '',
    taxID: '',
    personalEmail: ''
  },
  product: {
    items: [],
    subtotal: 10,
    taxes: [
      {
        name: 'Sales Tax',
        rate: 9,
        acronym: 'COST/IVA/ST @ 9%'
      },
      {
        name: 'Use Tax',
        rate: 5,
        acronym: 'UT @ 5%'
      },
      {
        name: 'Transaction Tax',
        rate: 3.9,
        acronym: 'IC/SD(Stamp-Duty)/VAT @ 3.9%'
      }
    ],
    total: 0
  },
  additionalInfo: ''
}
