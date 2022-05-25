import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Jobs from '../components/Jobs'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Northam HR</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
    <div className='grid  grid-cols-1 lg:grid-cols-2 gap-4'>
      <Jobs/>
      <div>
        something will be here
      </div>
    </div>
      
    </div>
  )
}

export default Home
