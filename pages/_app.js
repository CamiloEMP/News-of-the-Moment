import { NavBar } from '../components/NavBar'
import '../styles/globals.css'

function MyApp ({ Component, pageProps }) {
  return (
    <>
      <header className="flex px-4 pt-4 mb-12">
        <NavBar/>
      </header>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
