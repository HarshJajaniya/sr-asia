import React from 'react'
import Navbar from '@/components/navbar/navbar';
import Footer from '@/components/footer/footer';
import Hero from '@/components/about/hero';
import Mission from '@/components/home/vision';
import What from '@/components/about/what';
import Team from '@/components/about/team';
import Connect from '@/components/work/connect';
import Who from '@/components/about/who';
import Why from '@/components/about/why';
import Header from '@/components/navbar/header';

const page = () => {
  return (
    <div>
      <Header/>
        <Navbar/>
        <Hero/>
        <Who/>
       <Mission/>
       <What/>
       <Why/>
        <Team/>
       <Connect/>
        <Footer/>
    </div>
  )
}

export default page