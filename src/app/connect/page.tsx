import React from 'react'
import Navbar from '@/components/navbar/navbar'
import Hero from '@/components/connect/hero'  
import Partner from '@/components/connect/partner'
import Footer from '@/components/footer/footer'
import { JobListings } from '@/components/connect/connect'
import Contact from '@/components/connect/partner'

const page = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <JobListings/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default page