import { ListCategorys } from './ListCategorys'

export const SideMenu = () => {
  return (
    <section
      className="fixed w-80 h-full top-0 right-0 bg-slate-200 z-10 pt-20 pl-8">
      <ListCategorys />
    </section>
  )
}
