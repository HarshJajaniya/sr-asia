import React from 'react'
import Navbar from '@/components/navbar/navbar'
import Hero from '@/components/connect/hero'  
import Footer from '@/components/footer/footer'
import { Sidebar } from '@/components/reports/sidebar'
import Cirtificates from '@/components/reports/certifications'
import Reports from '@/components/reports/reports'
import Connect from '@/components/work/connect'
import Header from '@/components/navbar/header'

const page = () => {
  return (
    <div>
      <Header/>
        <Navbar/>
        <Hero/>
       
        <Reports/>
        <Cirtificates/>
       <Connect/>
        <Footer/>
    </div>
  )
}

export default page