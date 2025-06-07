import React from 'react'
import Navbar from '@/components/navbar/navbar';
import Footer from '@/components/footer/footer';
import Hero from '@/components/about/hero';
import News from '@/components/about/news';
import Team from '@/components/about/team';
import Work from '@/components/about/work';

const page = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <News/>
        <Team/>
        <Work/>
        <Footer/>
    </div>
  )
}

export default page