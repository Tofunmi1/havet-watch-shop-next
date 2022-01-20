import Layout from '../components/layout'
import '../styles/globals.css'
import Fonts from '../components/fonts'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Fonts />
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
