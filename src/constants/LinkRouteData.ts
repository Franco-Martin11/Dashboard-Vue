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
    textLabel: 'Calendar',
    urlRoute: '/calendar'
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
    imgSrc: '',
    percentaje: 7,
    profit: false,
    headTitle: 'Balance Sheet',
    resultsStats: '20,000'
  },
  {
    id: 3,
    imgSrc: '',
    percentaje: 10,
    profit: true,
    headTitle: 'Income Statement',
    resultsStats: '75,000'
  },
  {
    id: 4,
    imgSrc: '',
    percentaje: 3,
    profit: false,
    headTitle: 'Cash Flow Statement',
    resultsStats: '45,000'
  },
  {
    id: 5,
    imgSrc: '',
    percentaje: 22,
    profit: true,
    headTitle: 'Profit and Loss',
    resultsStats: '95,000'
  },
  {
    id: 6,
    imgSrc: '',
    percentaje: 80,
    profit: true,
    headTitle: 'Profit and Loss',
    resultsStats: '95,000'
  },
  {
    id: 7,
    imgSrc: '',
    percentaje: 100,
    profit: true,
    headTitle: 'Profit and Loss',
    resultsStats: '95,000'
  }
]
