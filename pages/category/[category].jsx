import { useRouter } from 'next/router'
import { URL_API, API_KEY } from '../../constants/API'
import { getCategory } from '../../services/getCategory'

const categorys = () => {
  const router = useRouter()
  const { category } = router.query
  return <div>{category}</div>
}

export default categorys

// export async function getServerSideProps (context) {
//   try {
//     // Si funciona
//     const category = context.query.category
//     const data = await getCategory(URL_API, API_KEY, category)

//     return { props: { data } }
//   } catch (err) {
//     console.log(err)
//   }
// }
