type Params = Record<string, string[]>
const paramsSerializer = (params: Params): string => {
  const queryParameters: string[] = []

  for (const key in params) {
    const values = Array.isArray(params[key]) ? params[key] : [params[key]]
    const encodedValues = values.map((value) => encodeURIComponent(value))
    const queryString = encodedValues.map((value) => `${key}=${value}`).join('&')
    queryParameters.push(queryString)
  }

  return `?${queryParameters.join('&')}`
}

export default paramsSerializer
