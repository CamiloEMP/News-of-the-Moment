import { URL_API, API_KEY } from '../constants/API'

export async function getCountryNews (country = 'co') {
  const res = await
  fetch(`${URL_API}/top-headlines?country=${country}&apikey=${API_KEY}`)

  const data = await res.json()
  return { data }
}
