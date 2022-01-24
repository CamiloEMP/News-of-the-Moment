import { IoArrowDownSharp, IoArrowForwardSharp } from 'react-icons/io5'
export const ListCategorys = () => {
  return (
    <section className="flex flex-col gap-y-3">
      <div className="flex flex-col">
        <div className="flex items-center">
          <span className="text-2xl mr-2">Categorys</span>
          <IoArrowForwardSharp className="text-xl" />
        </div>
        <ul className="text-xl pl-6 my-4">
          <li><a href="">Science</a></li>
          <li><a href="">Science</a></li>
          <li><a href="">Science</a></li>
          <li><a href="">Science</a></li>
          <li><a href="">Science</a></li>
          <li><a href="">Science</a></li>
          <li><a href="">Science</a></li>
        </ul>
      </div>
      <div className="flex flex-col">
        <div className="flex items-center">
          <span className="text-2xl mr-2">Source from</span>
          <IoArrowForwardSharp className="text-xl" />
        </div>
        <ul className="text-xl pl-6 my-4">
          <li><a href="">Noticiero</a></li>
          <li><a href="">Noticiero</a></li>
          <li><a href="">Noticiero</a></li>
          <li><a href="">Noticiero</a></li>
          <li><a href="">Noticiero</a></li>
          <li><a href="">Noticiero</a></li>
          <li><a href="">Noticiero</a></li>
        </ul>
      </div>
    </section>
  )
}
