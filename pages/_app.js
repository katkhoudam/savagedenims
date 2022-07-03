import Navbar from '../component/Navbar'
import Socialmedia from '../component/socialmedia'
import '../styles/globals.css'
import Footer from '../component/Footer'

function MyApp({ Component, pageProps }) {
  return(
    <>
    <Navbar />
    <Socialmedia />
    <Component {...pageProps} />
    <Footer />
    </>
  )
}

export default MyApp
