// renders all the pages 
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  console.log('Developer Nmaes:\nRitik Sharma\nShivani Shimpi')
  return <Component {...pageProps} />
}

export default MyApp

