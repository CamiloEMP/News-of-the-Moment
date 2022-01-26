import { API_KEY, URL_API } from '../constants/API'
import { getCountryNews } from '../services/getCountryNews'
import { formatDay } from '../utils/formatDay'

export default function Home ({ news }) {
  const { articles } = news.data

  const newsRender = articles
    .filter(item => item.source.name !== 'Google News')
    .map((newsItem, index) => (
      <article key={index} className="w-full border-b-4 border-rose-900 pb-2">
        <div className='w-full pr-2'>
          <a href={newsItem.url} target="_blank" className="text-2xl font-semibold w-full inline-block hover:text-rose-900 hover:underline" rel="noreferrer">{newsItem.title}</a>
        </div>
        <div className="flex flex-col justify-center gap-5 md:flex-row mt-5">
          <img className='md:w-72 md:h-48' src={newsItem.urlToImage} alt={newsItem.source.name} />
          <p className="text-xl">{newsItem.description}</p>
        </div>
        <div className="mt-2">
          <span className="mr-3 text-lg">{newsItem.author}</span>
          <span className="text-lg">{formatDay(newsItem.publishedAt)}</span>
        </div>
      </article>
    ))

  return (
    <section className="flex flex-col gap-12 w-4/5 m-auto">
      <h2 className="text-center text-4xl font-semibold">Top headlines of Colombia</h2>
      {newsRender}
    </section>
  )
}

export async function getServerSideProps () {
  try {
    const news = await getCountryNews(URL_API, API_KEY, 'de')
    return { props: { news } }
  } catch (err) {
    console.log(err)
  }
}
