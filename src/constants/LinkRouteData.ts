import type { CardData, OptionLinkRoute } from '@/types'

export const OptionLinkRouteArr: OptionLinkRoute[] = [
  {
    id: '123abc',
    nameIcon: 'dashboard',
    textLabel: 'Dashboard',
    urlRoute: '/dashboard',
    size: 24
  },
  // {
  //   id: '456def',
  //   nameIcon: 'transaction',
  //   textLabel: 'Transactions',
  //   urlRoute: '/transactions'
  // },
  // {
  //   id: '789ghi',
  //   nameIcon: 'expenses',
  //   textLabel: 'Expenses',
  //   urlRoute: '/expenses'
  // },
  {
    id: 'abc123',
    nameIcon: 'invoices',
    textLabel: 'Invoices',
    urlRoute: '/invoices'
  }
  // {
  //   id: 'ghi789',
  //   nameIcon: 'credits',
  //   textLabel: 'Credits',
  //   urlRoute: '/credits'
  // },
  // {
  //   id: 'ghi689',
  //   nameIcon: 'subscription',
  //   textLabel: 'Subscriptions',
  //   urlRoute: '/subscriptions'
  // },
  // {
  //   id: 'xyz123',
  //   nameIcon: 'share',
  //   textLabel: 'Share',
  //   urlRoute: '/share'
  // }
]
interface ExtendedCardData extends CardData {
  id: number
}
export const cardDataArr: ExtendedCardData[] = [
  {
    id: 1,
    imgSrc: '/user.jpg',
    percentaje: 15,
    profit: true,
    headTitle: 'Financial Statements',
    resultsStats: '125,000'
  },
  {
    id: 2,
    imgSrc: '/security.jpg',
    percentaje: 55,
    profit: true,
    headTitle: 'Security',
    resultsStats: '100%'
  },
  {
    id: 3,
    imgSrc: '/total-items.jpg',
    percentaje: 15,
    profit: true,
    headTitle: 'Total Items',
    resultsStats: '140'
  }
]
