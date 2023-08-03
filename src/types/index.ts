export interface OptionLinkRoute {
  id: string
  nameIcon: string
  textLabel: string
  urlRoute: string
  size?: number
}

export interface CardData {
  imgSrc: string
  percentaje: number
  profit: boolean
  headTitle: string
  resultsStats: string | number
}

export interface userDetailType {
  category: string
  data: {
    type: string
    id: string
    value: string
    placeholder: string
    name: string
  }[]
}