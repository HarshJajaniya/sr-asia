import React from 'react'
import Navbar from '@/components/navbar/navbar'
import Hero from '@/components/connect/hero'  
import Footer from '@/components/footer/footer'
import { Sidebar } from '@/components/reports/sidebar'
import Reports from '@/components/reports/reports'
import Contact from '@/components/connect/partner'
import Header from '@/components/navbar/header'

const page = () => {
  return (
    <div>
      <Header/>
        <Navbar/>
        <Hero/>
       
        <Reports/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default page