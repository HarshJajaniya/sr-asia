
import Navbar from "@/components/navbar/navbar"
import Hero from "@/components/home/hero"
import AboutUs from "@/components/home/about-us"
import Service from "@/components/home/services"

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <AboutUs/>
      <Service/>
    </>
  );
}
