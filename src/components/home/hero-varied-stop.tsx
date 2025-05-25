"use client"

import type React from "react"

import { useMemo } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

const HeroVariedStops = () => {
  // Generate droplets with more varied stopping points
  const droplets = useMemo(() => {
    return Array.from({ length: 18 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      startY: Math.random() * 50 - 30, // Start from -30vh to +20vh
      endY: Math.random() * 80 + 60, // Stop between 60vh to 140vh
      size: Math.random() * 5 + 2,
      duration: Math.random() * 5 + 5, // 5-10 seconds
      delay: Math.random() * 12,
      maxOpacity: Math.random() * 0.35 + 0.15,
    }))
  }, [])

  return (
    <section className="relative h-[500px] md:h-[600px] overflow-hidden">
      <Image src="/bg.jpg" alt="Background" fill priority className="object-cover object-center z-0" />

      {/* Droplets with Varied Stop Points */}
      <div className="absolute inset-0 z-5">
        {droplets.map((droplet) => (
          <div
            key={droplet.id}
            className="absolute animate-varied-fall"
            style={
              {
                left: `${droplet.left}%`,
                top: `${droplet.startY}%`,
                animationDuration: `${droplet.duration}s`,
                animationDelay: `${droplet.delay}s`,
                "--max-opacity": droplet.maxOpacity,
                "--start-y": `${droplet.startY}vh`,
                "--end-y": `${droplet.endY}vh`,
                "--travel-distance": `${droplet.endY - droplet.startY}vh`,
              } as React.CSSProperties
            }
          >
            <div
              className="bg-gradient-to-b from-blue-100/50 to-blue-300/70 rounded-full shadow-sm backdrop-blur-[0.5px]"
              style={{
                width: `${droplet.size}px`,
                height: `${droplet.size * 1.4}px`,
                borderRadius: "50% 50% 50% 50% / 65% 65% 35% 35%",
              }}
            />
          </div>
        ))}
      </div>

      {/* Foreground content */}
      <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16 z-20">
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="bg-black/30 backdrop-blur-sm p-6 md:p-8 rounded-lg max-w-2xl text-white"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Building a Sustainable Future for Asia</h1>
          <p className="text-lg md:text-xl opacity-90 mb-6">
            Advancing environmental governance, CSR excellence, and inclusive development across the Asian continent.
          </p>
        </motion.div>

        <div className="flex justify-center mt-10 px-4">
          <button className="w-full max-w-[300px] h-[44px] flex justify-center items-center text-white bg-[#2E7D32] font-bold text-[18px] leading-[100%] hover:bg-[#155c35] transition-colors">
            Explore More
          </button>
        </div>
      </div>
    </section>
  )
}

export default HeroVariedStops
