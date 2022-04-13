import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'

const Home: NextPage = () => {
  const [storeInfos, setStoreInfo] = useState([])

  function handleSubmit(event){
    event.preventDefault();

    const newStore = {
      location: event.target.location.value,
      min_cph: event.target.min_cph.value,
      max_cph: event.target.max_cph.value,
      avg_sales: event.target.avg_sales.value,
      id: storeInfos.length,
    }

    setStoreInfo([...storeInfos, newStore]);
  }

  function lastestStore(){
    if (storeInfos.length == 0){
      return 'Make a store!'
    }
    let ret_str = `{\"location\": "${storeInfos[storeInfos.length - 1].location}", \"minCustomers\": ${storeInfos[storeInfos.length - 1].min_cph}, \"maxCustomers\": ${storeInfos[storeInfos.length - 1].max_cph}, \"avgCookies\": ${storeInfos[storeInfos.length - 1].avg_sales},`
    return ret_str;
  }
  
  return (
    <div className="bg-black">
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="grid place-items-center h-screen">        
        <div className="bg-slate-100 w-3/5">
          <header>
            <h1 className ="p-3 bg-emerald-500 font-semibold text-black text-2xl">Cookie Stand Admin</h1>
          </header>

          <div className=" grid place-items-center h-2/5 flex"> 
            <form onSubmit={ handleSubmit } className="w-4/6 my-4 bg-emerald-300 rounded-lg">        
              <h3 className ="p-3 text-center font-semibold text-2.5xl ">Create Cookie Stand</h3>
              <label className="p-2.5 flex-auto font-semibold text-xs" htmlFor="forms-labelLeftInputCode">Location</label>
              <input name='location' className="flex-auto w-10/12 h-full mb-5 "></input>
          
              <div className="flex">
                <label className="p-2 text-center">
                  <span className="block text-xs font-medium text-slate-700 font-bold truncate">
                    Minimum Customers per Hour 
                  </span>
                  <input name='min_cph' className="w-full h-2/6 flex-auto pl-1"></input>
                </label>

                <label className="p-2 text-center">
                  <span className="block text-xs font-medium text-slate-700 font-bold truncate">
                    Maximum Customers per Hour
                  </span>
                  <input name='max_cph' className="w-full h-2/6 flex-auto pl-1"></input>
                </label>

                <label className="p-2 text-center">
                  <span className="block text-xs font-medium text-slate-700 font-bold truncate">
                    Average Cookies per Sale
                  </span>
                  <input name='avg_sales' className="w-full h-2/6 flex-auto pl-1"></input>
                </label>   
              
                <button className="m-3 w-1/4 h-11 flex-auto bg-emerald-500 font-bold text-black text-xs">Create</button>
              </div>
            </form>

            <div className='text-center text-xs font-semibold'>
              <p className='pb-4'>Report Table Coming Soon...</p>
              <p className='pb-4'>{ lastestStore() }</p>
            </div>
          </div>

          <footer className="mb-6 p-4 bg-emerald-500 text-black text-xs font-semibold">
            <p>©2022</p>
          </footer> 
          
        </div>
      </main>     
    </div>
  )
}

export default Home
