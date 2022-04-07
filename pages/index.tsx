import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Cookie Stand</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <header className="flex items-center justify-between p-4 bg-black text-gray-50">
          <h1 className ="text-4xl">Cookie Stand Admin</h1>
        </header>
      <main className="">
        <form>
          <input name='location'></input>
          <input name='min_cph'></input>
          <input name='max_cph'></input>
          <input name='avg_sales'></input>
          <button>Create</button>
        </form>
      </main>

      <footer className="mt-8 p-4 bg-black text-gray-50">
        <p>©2022</p>
      </footer>
    </div>
  )
}

export default Home
