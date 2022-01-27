import { useEffect, useState } from 'react'
import { ListNews } from '../components/ListNews'
import { News } from '../components/News'
import { IsoNameCountries } from '../constants/IsoNameCountries'

import { getCountryNews } from '../services/getCountryNews'

export default function Home ({ news, city }) {
  const [defaultNews, setDefaultNews] = useState(news)
  const nameOfCity = IsoNameCountries.filter(iso => city === '' ? 'Colombia' : iso.value === city)
  useEffect(() => {
    if (city === '') return
    getCountryNews(city)
      .then(data => {
        setDefaultNews(data)
      })
  }, [city])

  return (
    <ListNews>
      <h2 className="text-center text-4xl font-semibold">Top headlines of {nameOfCity[0].label}</h2>
      <News data={defaultNews} />
    </ListNews>
  )
}

export async function getServerSideProps () {
  try {
    const news = await getCountryNews()
    return { props: { news } }
  } catch (err) {
    console.log(err)
  }
}
