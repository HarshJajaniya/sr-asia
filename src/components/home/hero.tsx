'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'

const Hero = () => {
  const particlesInit = async (main: any) => {
    await loadFull(main)
  }

  return (
    <section className="relative h-[500px] md:h-[600px] overflow-hidden">

      {/* Static Background */}
      <Image
        src="/hero.png"
        alt="Background"
        fill
        priority
        className="object-cover z-0"
      />

      {/* Rotating globe in center */}
      <motion.div
        className="absolute ml-4 left-1/2 top-1/2 md:w-[450px] md:h-[450px] z-10 -translate-x-1/2 -translate-y-1/2"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
      >
        <Image
          src="/Mask.svg"
          alt="Rotating Globe"
          fill
          className="object-contain"
        />
      </motion.div>

      {/* Leaf particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          particles: {
            number: { value: 15 },
            shape: {
              type: 'image',
              image: { src: '/leaf.png', width: 20, height: 20 },
            },
            move: {
              direction: 'bottom',
              speed: 0.6,
              outModes: 'out',
              straight: false,
            },
            opacity: { value: 0.8 },
            size: { value: 20 },
          },
          detectRetina: true,
        }}
        className="absolute w-full h-full z-5"
      />

      {/* Foreground content */}
      <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16 z-20">
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="bg-black/30 backdrop-blur-sm p-6 md:p-8 rounded-lg max-w-2xl text-white"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            Building a Sustainable Future for Asia
          </h1>
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
