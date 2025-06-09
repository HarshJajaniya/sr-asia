import React from 'react'
import Navbar from '@/components/navbar/navbar';
import Footer from '@/components/footer/footer';   
import Work from '@/components/work/hero';
import Csg from '@/components/work/csg';
import Esg from '@/components/work/esg';

const page = () => {
  return (
    <div>
        <Navbar/>
        <Work/>
        <Csg/>
        <Esg/>
        <Footer/>
    </div>
  )
}

export default page