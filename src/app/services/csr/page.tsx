import Footer from '@/components/footer/footer'
import Navbar from '@/components/navbar/navbar'
import Header from '@/components/navbar/header'
import Hero from '@/components/work/csr/hero'
import Intro from '@/components/work/csr/intro'
import Services from '@/components/work/csr/services'
import Impact from '@/components/work/impact'
import Insights from '@/components/work/insights'
import Connect from '@/components/work/connect'


const assurance = () => {
  return (
    <div>
        <Header/>
        <Navbar/>
        <Hero/>
        <Intro/>
        <Services/>
        <Impact/>
        <Insights/>
        <Connect/>
        <Footer/>
    </div>
  )
}

export default assurance