import React from 'react'
import Navbar from '@/components/navbar/navbar'
import Hero from '@/components/resources/hero'
import Blog from '@/components/resources/blog'
import Insights from '@/components/resources/insights'
import Footer from '@/components/footer/footer'
import CaseStudies from '@/components/resources/case'

const page = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Blog/>
        <Insights/>
        <CaseStudies/>
        <Footer/>
    </div>
  )
}

export default page