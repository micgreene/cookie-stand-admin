import type { NextPage } from 'next'
import Image from 'next/image'
import { useState } from 'react'
import Head from '../components/head'
import Header from '../components/header'
import Main from '../components/main'
import CreateForm from '../components/create-form'
import ReportTable from '../components/report-table'
import Footer from '../components/footer'
import { hours } from '../public/data'
import type { NextPage } from 'next'
import Heads from 'next/head'

const CookieStandAdmin: NextPage = () => {
  const [storeInfos, setStoreInfo] = useState([])

  function handleSubmit(event){
    event.preventDefault();
    
    let hrly_sales = []
    for (var i = 0; i < hours.length; i++){
      let salesForHour = Math.ceil(rndmCustomers(event.target.min_cph.value, event.target.max_cph.value) * event.target.avg_sales.value);
      hrly_sales.push(salesForHour)
    }
    const newStore = {
      location: event.target.location.value,
      min_cph: event.target.min_cph.value,
      max_cph: event.target.max_cph.value,
      avg_sales: event.target.avg_sales.value,
      hourly_sales: hrly_sales,
      id: storeInfos.length,
    }  
    setStoreInfo([...storeInfos, newStore]);
  }
  
  function rndmCustomers(minCust, maxCust) {
    minCust = Math.ceil(minCust);
    maxCust = Math.floor(maxCust);
    return Math.floor(Math.random() * (maxCust - minCust + 1) + minCust);
  }

  function latestStore(){
    if (storeInfos.length == 0){
      return 'No Cookie Stands Available'
    }
    else {
      return (
        <ReportTable storeInfo={ storeInfos }/>
      )
    }
  }  
  
  return (
    <div className="bg-black h-screen grid place-items-center">
      <Head />
      <div className="w-8/12">
      <Header />
      
      <Main handleSubmit={ handleSubmit } latestStore={ latestStore }/>

      <Footer storeCount={storeInfos.length}/>
      </div>     
    </div>
  )
}

export default CookieStandAdmin
