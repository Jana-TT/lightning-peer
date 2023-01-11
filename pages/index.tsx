import type { NextPage } from 'next'
import Head from 'next/head'
import BottomBar from '../components/bottomBar'
import BottomBarScreen from '../components/bottonBarScreen'
import ChatBar from '../components/chatBar'
import Meeting from '../components/meeting'
import TopBar from '../components/topBar'

const Home: NextPage = () => {
  return (
    <div className = "text-3xl h-screen text-white">
      <Head>
        <title>Lightning</title>
      </Head>
      <Meeting/>
    </div>
  )
}

export default Home
