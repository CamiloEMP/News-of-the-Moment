import Link from 'next/link'

export const ListItems = ({ data, path }) => {
  const valuesOfData = Object.entries(data)
  return (
    <ul className="text-xl pl-6 my-4">
      {valuesOfData.map((value, index) => (
        <li key={index}>
          <Link href={`/${path}/${value[0]}`}>
            <a>{value[1]}</a>
          </Link>
        </li>
      ))}
    </ul>
  )
}
