export interface customerCardProps {
  imgUrl: string
  imgAlt: string
  customerName: string
  purchases: string
  likes?: string
  due?: string
  id?: string
}
export const customerCards: customerCardProps[] = [
  {
    imgUrl: 'image-1.png',
    imgAlt: 'Cliente 1',
    customerName: 'Cliente 1',
    purchases: '10 Compras',
    likes: '50 Me gusta',
    due: 'Due $100'
  },
  {
    imgUrl: 'image-2.png',
    imgAlt: 'Cliente 2',
    customerName: 'Cliente 2',
    purchases: '5 Compras',
    likes: '20 Me gusta',
    due: 'Due $50'
  },
  {
    imgUrl: 'image-3.png',
    imgAlt: 'Cliente 3',
    customerName: 'Cliente 3',
    purchases: '8 Compras',
    likes: '30 Me gusta',
    due: 'Due $80'
  },
  {
    imgUrl: 'image-4.png',
    imgAlt: 'Cliente 4',
    customerName: 'Cliente 4',
    purchases: '3 Compras',
    likes: '15 Me gusta',
    due: 'Due $30'
  }
  // {
  //   imgUrl: 'image-5.png',
  //   imgAlt: 'Cliente 5',
  //   customerName: 'Cliente 5',
  //   purchases: '12 Compras',
  //   likes: '60 Me gusta',
  //   due: 'Due $150'
  // },
  // {
  //   imgUrl: 'image-6.png',
  //   imgAlt: 'Cliente 6',
  //   customerName: 'Cliente 6',
  //   purchases: '6 Compras',
  //   likes: '25 Me gusta',
  //   due: 'Due $60'
  // },
  // {
  //   imgUrl: 'image-7.png',
  //   imgAlt: 'Cliente 7',
  //   customerName: 'Cliente 7',
  //   purchases: '9 Compras',
  //   likes: '40 Me gusta',
  //   due: 'Due $90'
  // }
]
