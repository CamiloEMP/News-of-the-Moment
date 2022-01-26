import { ListCategorys } from './ListCategorys'

export const SideMenu = () => {
  return (
    <section
      className="fixed w-80 h-full top-0 right-0 bg-rose-900 z-10 pt-20 pl-8 lg:hidden">
      <ListCategorys />
    </section>
  )
}
