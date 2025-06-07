import React from 'react'
import Navbar from '@/components/navbar/navbar';
import Footer from '@/components/footer/footer';   
import Work from '@/components/work/hero';

const page = () => {
  return (
    <div>
        <Navbar/>
        <Work/>
        <Footer/>
    </div>
  )
}

export default page