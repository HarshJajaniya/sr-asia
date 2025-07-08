"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Button } from "@/components/ui/button"


gsap.registerPlugin(ScrollTrigger)

export default function AboutUsSection() {
  const aboutHeaderRef = useRef(null)
  const aboutTextRef = useRef(null)
  const countriesTitleRef = useRef(null)
  const flagRefs = useRef<HTMLDivElement[]>([])

  useEffect(() => {
  // Create animation timeline or individual tweens
  const triggers: gsap.core.Tween[] = []

  if (aboutHeaderRef.current) {
    triggers.push(
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
    )
  }

  if (aboutTextRef.current) {
    triggers.push(
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
    )
  }

  if (countriesTitleRef.current) {
    triggers.push(
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
    )
  }

  flagRefs.current.forEach((ref, index) => {
    if (!ref) return
    triggers.push(
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
    )
  })

  // Refresh ScrollTrigger
  ScrollTrigger.refresh()

  // Cleanup to prevent duplicated triggers
  return () => {
    triggers.forEach(tween => tween.scrollTrigger?.kill())
  }
}, [])


  return (
    <div className="w-full py-12 px-4">
      {/* Header */}
      <div className="max-w-full mx-auto mb-[75px]" ref={aboutHeaderRef}>
        <h2 className="text-2xl font-bold text-center text-[#072328] py-4">
          ABOUT US
        </h2>
      </div>

      {/* Main Content */}
<div className="max-w-full mx-auto px-5">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
    {/* Left Column - Image */}
    <div className="relative">
      <div className="relative h-64 lg:h-[344px] w-full overflow-hidden">
        <Image
          src="/36.png"
          alt="Forest background representing sustainable development"
          fill
          className="object-cover"
        />
      </div>
    </div>

    {/* Right Column - Text Content */}
    <div className="space-y-4 text-sm text-gray-700 leading-relaxed" ref={aboutTextRef}>
      <p>
        We are an international not-for-profit organization registered in 2012 with a vision of working for
        Sustainable Asia. The founders are subject experts and certified on subjects by APO Japan, CBI the
        Netherlands Govt. The ambition of the organization is to promote Responsible Business Conduct (RBG) and
        Sustainable Development Goals (SDGs) by involving private sectors and government. The activities of SR
        Asia focus on two major operational frameworks: (1) Innovation Development and (2) Knowledge Management.
      </p>

      <p>
        We are in six Asian countries (Bangladesh, India, Indonesia, Malaysia, Vietnam, and the Philippines). We
        work with the Ministries, the Public and private sector, Inter-Governmental, and NGO sectors in India and
        overseas.
      </p>

      <p>
        We are a member of UNGC, IPLA Japan, and Confederation of Indian Industry (CII) No.N7559P and the Alumni
        of the Asian Productivity Organisation Japan. At SR Asia, we are committed to helping organizations like
        yours navigate these changes seamlessly.
      </p>

      {/* Read More Button */}
      <div className="pt-4">
        <Button variant="link" className="text-blue-600 hover:text-blue-800 p-0 h-auto font-normal">
          Read more →
        </Button>
      </div>
    </div>
  </div>
</div>

    </div>
  )
      
    
  
}
