export interface DataAPI {
  additionalInfo: AdditionalInfo
  deporte: string
  id: number
  numberPlayers: number | string
  paragraph: string
  principleStars: string[]
  rules: string
}

export interface AdditionalInfo {
  alturaAro?: string
  disciplinas?: string[]
  estilosNatacion?: string[]
  grandSlams?: number
  mundialmentePopular?: boolean
  origen?: string
  piscinas?: string[]
  posiciones?: string[]
  superficies?: string[]
}
