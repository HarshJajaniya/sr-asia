import React from 'react'
import Header from '@/components/navbar/header'
import Main from '@/app/work/[slug]/main'
import Footer from '@/components/footer/footer'


const page = () => {
  return (
    <div>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  )
}

export default page
