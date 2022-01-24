import { SideMenu } from './SideMenu'

import { IoMenu } from 'react-icons/io5'
import { useState } from 'react'

export const NavBar = () => {
  const [sideMenu, setSideMenu] = useState(true)
  return (
    <>
      <h1 className="text-4xl font-bold lg:text-5xl">NEWS OF THE MOMENT</h1>
      <nav>
        <IoMenu
          className="text-4xl z-20 relative"
          onClick={() => setSideMenu(!sideMenu)} />
      </nav>
      {sideMenu && (
        <SideMenu/>
      )}
    </>
  )
}
