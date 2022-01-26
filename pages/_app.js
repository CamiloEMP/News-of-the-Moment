import { useState } from 'react'

import { NavBar } from '../components/NavBar'
import { ChangeCountry } from '../components/Country'
import { ListItems } from '../components/containers/ListItems'

import { categorys, sources } from '../constants'

import '../styles/globals.css'
import { Footer } from '../components/Footer'

function MyApp ({ Component, pageProps }) {
  const [country, setCountry] = useState('')

  return (
    <>
      <header
        className="flex justify-evenly items-center w-full h-36 mb-12 bg-rose-700 lg:justify-center px-6">
        <NavBar/>
      </header>
      <ChangeCountry/>
      <main className="px-4 lg:grid lg:grid-cols-[20%_60%_20%] relative">
        <aside className="hidden lg:block">
          <ListItems data={categorys} path='category'/>
        </aside>
        <Component {...pageProps} country={country} setCountry={setCountry} />
        <aside className="hidden lg:block">
          <ListItems data={sources} path='news'/>
        </aside>
      </main>
      <Footer/>
    </>
  )
}

export default MyApp
