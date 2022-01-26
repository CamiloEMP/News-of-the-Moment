export async function getCategory (url, apiKey, category, country = 'co') {
  const res =
    await fetch(`${url}/top-headlines/sources?country=${country}&category=${category}&apiKey=${apiKey}`)
  const data = await res.json()
  return data
}
