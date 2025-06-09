import React from 'react'
import Navbar from '@/components/navbar/navbar'
import Hero from '@/components/connect/hero'  
import News from '@/components/connect/news'
import Footer from '@/components/footer/footer'
import Connect from '@/components/connect/connect'
import Contact from '@/components/connect/partner'

const page = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Connect/>
        <Contact/>
        <News/>
        
        <Footer/>
    </div>
  )
}

export default page