import React from 'react'
import Navbar from '@/components/navbar/navbar'
import Hero from '@/components/network/hero'  
import Footer from '@/components/footer/footer'
import Countries from '@/components/network/countries'
import Institutions from '@/components/network/institutions'
import Industry from '@/components/network/industry'
import Mous from '@/components/network/mous'
import Partners from '@/components/network/partners'
import Connect from '@/components/work/connect'
import Header from '@/components/navbar/header'

const page = () => {
  return (
    <div>
      <Header/>
        <Navbar/>
        <Hero/>
        <Countries/>
       <Institutions/>
       <Industry/>
       <Mous/>
       <Partners/>
      
       <Connect/>
        <Footer/>
    </div>
  )
}

export default page