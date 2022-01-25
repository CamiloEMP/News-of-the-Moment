import { IoArrowDownSharp, IoArrowForwardSharp } from 'react-icons/io5'
import { categorys, sources } from '../constants'
import { ListItems } from './containers/ListItems'

export const ListCategorys = () => {
  return (
    <section className="flex flex-col gap-y-3">
      <div className="flex flex-col">
        <div className="flex items-center">
          <span className="text-2xl mr-2">Categorys</span>
          <IoArrowForwardSharp className="text-xl" />
        </div>
        <ListItems data={categorys} path='category' />
      </div>
      <div className="flex flex-col">
        <div className="flex items-center">
          <span className="text-2xl mr-2">Source from</span>
          <IoArrowForwardSharp className="text-xl" />
        </div>
        <ListItems data={sources} path='news' />
      </div>
    </section>
  )
}
