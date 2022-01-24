import { getCountryNews } from '../services/getCountryNews'

// export async function getServerSideProps () {
//   try {
//     const URL_API = process.env.NEXT_PUBLIC_URL_API
//     const API_KEY = process.env.API_KEY
//     const data = await getCountryNews(URL_API, API_KEY)
//     return { props: { data } }
//   } catch (err) {
//     console.log(err)
//   }
// }

export default function Home ({ data }) {
  // console.log(data)
  return (
    <div>
      hola
    </div>
  )
}
