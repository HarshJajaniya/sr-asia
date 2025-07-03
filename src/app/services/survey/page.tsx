import Footer from '@/components/footer/footer'
import Navbar from '@/components/navbar/navbar'
import Header from '@/components/navbar/header'
import Hero from '@/components/work/survey/hero'
import Intro from '@/components/work/survey/intro'
import Services from '@/components/work/survey/service'
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