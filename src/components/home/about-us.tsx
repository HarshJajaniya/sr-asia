"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function AboutUsSection() {
  const aboutHeaderRef = useRef(null)
  const aboutTextRef = useRef(null)
  const countriesTitleRef = useRef(null)
  const flagRefs = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    gsap.from(aboutHeaderRef.current, {
      scrollTrigger: {
        trigger: aboutHeaderRef.current,
        start: "top 80%",
      },
      opacity: 0,
      y: -20,
      duration: 1,
      ease: "power3.out",
    })

    gsap.from(aboutTextRef.current, {
      scrollTrigger: {
        trigger: aboutTextRef.current,
        start: "top 80%",
      },
      opacity: 0,
      y: 20,
      duration: 1,
      ease: "power3.out",
    })

    gsap.from(countriesTitleRef.current, {
      scrollTrigger: {
        trigger: countriesTitleRef.current,
        start: "top 85%",
      },
      opacity: 0,
      y: -20,
      duration: 1,
      ease: "power3.out",
    })

    flagRefs.current.forEach((ref, index) => {
      if (!ref) return
      gsap.from(ref, {
        scrollTrigger: {
          trigger: ref,
          start: "top 90%",
        },
        opacity: 0,
        y: 20,
        duration: 1,
        delay: index * 0.2,
        ease: "power3.out",
      })
    })
  }, [])

  return (
    <div className="py-12 bg-gray-50">
      {/* About Us Header */}
     <div className="flex items-center mb-8" ref={aboutHeaderRef}>
  <div className="h-px bg-green-800 w-44"></div>
  <div className="w-4 h-4 rounded-full bg-green-800 ml-2"></div>
  <h2 className="text-2xl font-bold text-green-800 ml-4">About Us</h2>
</div>

      {/* About Us Content */}
      <div className="w-[1155px] mx-auto">
      <div className="flex flex-col md:flex-row gap-0 mb-16">
        <div className="flex justify-center mx-auto">
          <Image
            src="/sr-asia-logo.png"
            alt="SR Asia Logo"
            width={220}
            height={220}
            className="object-contain"
          />
        </div>
        <div className="px-6 mr-4 md:w-2/3" ref={aboutTextRef}>
          <p className="text-gray-700 px-4 mr-2 mb-4 leading-relaxed">
            We are an international, not-for-profit organization registered in 2012 and ISO 9001 certified. SR Asia is a
            leading consulting firm with expertise in CSR impact assessment, ESG and sustainability reporting,
            socio-economic studies, and policy research. With over 10 years of experience, we have supported
            corporations, public sector units (PSUs), and government bodies in evaluating the effectiveness of their CSR
            initiatives.
          </p>
          <div className="mt-2 pr-4 flex justify-end">
            <Link href="#" className="text-blue-600 font-medium flex items-center hover:underline">
              Read more <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
      </div>

      {/* Countries Section */}
      <div className="mb-12">
        <div className="relative flex items-center mb-10 max-w-screen-xl mx-auto px-4" ref={countriesTitleRef}>
          <h2 className="text-2xl font-bold text-[#004D40] mx-auto bg-white px-4 z-10">
            Countries We Operate in
          </h2>
          <div
            className="absolute right-0 top-1/2 transform -translate-y-1/2 flex items-center space-x-2"
            style={{ width: '30vw', minWidth: '150px' }}
          >
            <div className="w-4 h-4 rounded-full bg-[#004D40] z-20"></div>
            <div className="h-px bg-[#004D40] flex-grow"></div>
          </div>
        </div>

        <div className="w-[1155px] mx-auto">

        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 justify-items-center">
          {[
            { country: "India", flag: "india.png" },
            { country: "Philippine", flag: "philipines.png" },
            { country: "Vietnam", flag: "vietnam.png" },
            { country: "Malaysia", flag: "malayasia.png" },
            { country: "Indonesia", flag: "indonesia.png" },
            { country: "Bangladesh", flag: "bangladesh.png" },
          ].map((item, index) => (
            <div
              key={item.country}
              className="flex flex-col items-center"
              ref={(el) => {
                if (el) flagRefs.current[index] = el
              }}
            >
              <div className="w-24 h-16 overflow-hidden rounded-lg mb-2">
                <Image
                  src={`/flags/${item.flag}`}
                  alt={`${item.country} Flag`}
                  width={96}
                  height={64}
                  className="object-cover w-full h-full"
                />
              </div>
              <span className="text-gray-700">{item.country}</span>
            </div>
          ))}
        </div>
      </div>
        </div>
      {/* Divider */}
      <div className="w-full max-w-md mx-auto h-px bg-[#004D40]"></div>
    </div>
  )
}
