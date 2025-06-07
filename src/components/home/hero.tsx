"use client"

import type React from "react"

import { useMemo } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

const Hero = () => {
  // Generate realistic droplets with varied starting and ending positions
  const droplets = useMemo(() => {
    return Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      startY: Math.random() * 40 - 20, // Start from different Y positions
      endY: Math.random() * 60 + 80, // Stop at different positions (80vh to 140vh)
      size: Math.random() * 6 + 3,
      duration: Math.random() * 4 + 6, // Slower, more realistic
      delay: Math.random() * 8,
      maxOpacity: Math.random() * 0.4 + 0.2, // Lower opacity for realism
    }))
  }, [])

  // Generate subtle floating particles
  const particles = useMemo(() => {
    return Array.from({ length: 10 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 8 + 12, // Very slow movement
      delay: Math.random() * 10,
      opacity: Math.random() * 0.3 + 0.1,
    }))
  }, [])

  return (
    <section className="relative h-[500px] md:h-[600px] overflow-hidden">
      <Image src="/bg.jpg" alt="Background" fill priority className="object-cover object-center z-0" />

      {/* Realistic Water Droplets */}
      <div className="absolute inset-0 z-5">
        {droplets.map((droplet) => (
          <div
            key={droplet.id}
            className="absolute animate-realistic-fall"
            style={
              {
                left: `${droplet.left}%`,
                top: `${droplet.startY}%`,
                animationDuration: `${droplet.duration}s`,
                animationDelay: `${droplet.delay}s`,
                "--max-opacity": droplet.maxOpacity,
                "--start-y": `${droplet.startY}vh`,
                "--end-y": `${droplet.endY}vh`,
              } as React.CSSProperties
            }
          >
            <div
              className="bg-gradient-to-b from-blue-200/60 to-blue-400/80 rounded-full shadow-sm"
              style={{
                width: `${droplet.size}px`,
                height: `${droplet.size * 1.3}px`,
                borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
              }}
            />
          </div>
        ))}
      </div>

      {/* Subtle Floating Elements */}
      <div className="absolute inset-0 z-5">
        {particles.map((particle) => (
          <div
            key={`particle-${particle.id}`}
            className="absolute animate-gentle-float"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDuration: `${particle.duration}s`,
              animationDelay: `${particle.delay}s`,
              opacity: particle.opacity,
            }}
            >
            <div
              className="bg-gradient-to-br from-green-300/40 to-green-500/60 rounded-full"
              style={{
                width: `${particle.size}px`,
                height: `${particle.size}px`,
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

export default Hero
