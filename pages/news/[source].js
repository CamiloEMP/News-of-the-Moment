import { useRouter } from 'next/router'

const source = () => {
  const router = useRouter()
  const { source } = router.query
  return (
    <div>{source}</div>
  )
}

export default source
