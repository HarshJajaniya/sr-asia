import React from 'react'
import Navbar from '@/components/navbar/navbar'
import Hero from '@/components/connect/hero'  
import Footer from '@/components/footer/footer'
import { JobListings } from '@/components/connect/connect'
import Contact from '@/components/connect/partner'
import Header from '@/components/navbar/header'

const page = () => {
  return (
    <div>
      <Header/>
        <Navbar/>
        <Hero/>
        <JobListings/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default page