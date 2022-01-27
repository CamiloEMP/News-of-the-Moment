import { formatDay } from '../utils/formatDay'

export const News = ({ data }) => {
  const { articles } = data.data
  return (
    <>
      {articles.filter(item => item.source.name !== 'Google News')
        .map((newsItem, index) => (
          <article key={index} className="w-full border-b-4 border-rose-900 pb-2">
            <div className='w-full pr-2'>
              <a href={newsItem.url} target="_blank" className="text-2xl font-semibold w-full inline-block hover:text-rose-900 hover:underline" rel="noreferrer">{newsItem.title}</a>
            </div>
            <div className="flex flex-col justify-center gap-5 md:flex-row mt-5">
              <img className='md:w-72 md:h-48' src={newsItem.urlToImage} alt={newsItem.source.name} />
              <p className="text-xl">{newsItem.description}</p>
            </div>
            <div className="flex flex-col overflow-auto mt-2">
              <span className="text-lg">{newsItem.author}</span>
              <span className="text-lg">{formatDay(newsItem.publishedAt)}</span>
            </div>
          </article>
        ))}
    </>
  )
}
