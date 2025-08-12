import Navbar from "@/components/navbar/navbar";
import Hero from "@/components/home/hero";
import AboutUs from "@/components/home/about-us";
import Work from "@/components/home/work";
import Stats from "@/components/home/stats";
import Insights from "@/components/home/insights";
import Footer from "@/components/footer/footer";
import Header from "@/components/navbar/header";
import PartnerLogosScroll from "@/components/home/logos";
import Vision from "@/components/home/vision";
import Touch from "@/components/home/touch";
import CookieConsent from "@/components/home/CookiesAndThankYou";


export default function Home() {
  return (
    <>
      <Header />
      
      <Navbar />
      <Hero />
      <AboutUs />
      <Vision />
      {/* <Service/> */}
      <Work />
      <Stats />
      <Insights />
      <PartnerLogosScroll />
      <Touch />
       <CookieConsent />
      <Footer />
    </>
  );
}
