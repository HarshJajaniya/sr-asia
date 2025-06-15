import React from 'react'
import Navbar from '@/components/navbar/navbar';
import Footer from '@/components/footer/footer';   
import Work from '@/components/work/hero';
import Csg from '@/components/work/csg';

const page = () => {
  return (
    <div>
        <Navbar/>
        <Work/>
        <Csg/>
        <Footer/>
    </div>
  )
}

export default page