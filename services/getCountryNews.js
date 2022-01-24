export async function getCountryNews (url, apiKey, country = 'co') {
  const res = await
  fetch(`${url}/top-headlines?country=${country}&apikey=${apiKey}`)

  const data = await res.json()
  return data
}
