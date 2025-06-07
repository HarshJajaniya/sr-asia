import React from 'react'
import Navbar from '@/components/navbar/navbar';
import Footer from '@/components/footer/footer';
import Hero from '@/components/about/hero';
import News from '@/components/about/news';

const page = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <News/>
        <Footer/>
    </div>
  )
}

export default page