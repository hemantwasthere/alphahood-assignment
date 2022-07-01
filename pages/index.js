import Head from 'next/head'
import Content from '../components/Content'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Posts from '../components/Posts'
export default function Home() {
  return (
    <div>
      <Head>
        <title>Alphahood</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.svg" />
      </Head>

      <Header/>
      <Posts/>
      <Content/>
      <Footer/>

    </div>
  )
}
