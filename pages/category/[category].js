import { useRouter } from 'next/router'

const categorys = () => {
  const router = useRouter()
  const { category } = router.query
  return <div>{category}</div>
}

export default categorys
