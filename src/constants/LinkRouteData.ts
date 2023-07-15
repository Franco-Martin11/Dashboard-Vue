import type { CardData, OptionLinkRoute } from '@/types'

export const OptionLinkRouteArr: OptionLinkRoute[] = [
  {
    id: '123abc',
    nameIcon: 'home',
    textLabel: 'Home',
    urlRoute: '/',
    size: 24
  },
  {
    id: '456def',
    nameIcon: 'location',
    textLabel: 'Location',
    urlRoute: '/location'
  },
  {
    id: '789ghi',
    nameIcon: 'cloud',
    textLabel: 'cloud',
    urlRoute: '/cloud-storage'
  },
  {
    id: 'abc123',
    nameIcon: 'message',
    textLabel: 'Messages',
    urlRoute: '/messages'
  },
  {
    id: 'def456',
    nameIcon: 'calendar',
    textLabel: 'Dashboard',
    urlRoute: '/dashboard'
  },
  {
    id: 'ghi789',
    nameIcon: 'saved',
    textLabel: 'Saved',
    urlRoute: '/saved'
  },
  {
    id: 'xyz123',
    nameIcon: 'share',
    textLabel: 'Share',
    urlRoute: '/share'
  }
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
