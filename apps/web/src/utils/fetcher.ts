export const fetcher = (url: URL, ...others: any) => {
  const defaultUrl = process.env.NEXT_PUBLIC_BLITONER_API

  return fetch(`${defaultUrl}${url}`)
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      return data
    })
    .catch((error) => {
      console.error('🚨->', error)
      /** TODO - configurar alerta de error general */

      return Promise.reject(error)
    })
}
