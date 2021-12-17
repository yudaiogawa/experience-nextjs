import { AppProps } from 'next/app'
import Layout from '../components/layout'

const MyApp = ({ Component, pageProps }: AppProps) => {

  // const getLayout = Component.getLayout || ((page) => page)
  // return getLayout(<Component {...pageProps} />)

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
