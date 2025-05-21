
import Navbar from "@/components/navbar/navbar"
import Hero from "@/components/home/hero"
import AboutUs from "@/components/home/about-us"
import Service from "@/components/home/services"
import Work from "@/components/home/work"
import Stats from "@/components/home/stats"
import Insights from "@/components/home/insights"


export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <AboutUs/>
      <Service/>
      <Work/>
      <Stats/>
      <Insights/>
    </>
  );
}
