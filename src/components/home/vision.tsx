"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState, useEffect } from "react"

export default function Component() {
  const [visionGearSize, setVisionGearSize] = useState(580)
  const [missionGearSize, setMissionGearSize] = useState(400)

  // Responsive sizing
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisionGearSize(300)
        setMissionGearSize(200)
      } else {
        setVisionGearSize(580)
        setMissionGearSize(400)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className="flex items-center justify-center min-h-screen p-4 md:p-8">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
        {/* Vision Gear */}
        <div className="relative" style={{ width: visionGearSize, height: visionGearSize }}>
          {/* Rotating Gear Image */}
          <motion.div
            className="absolute inset-0"
            animate={{ rotate: 360 }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            <Image
              src="/vision/3.png"
              alt="Vision Gear"
              width={visionGearSize}
              height={visionGearSize}
              className="object-contain"
            />
          </motion.div>

          {/* Static Content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="rounded-full bg-sky-100/80 w-3/5 h-3/5 flex items-center justify-center">
              <div className="text-center p-4">
                <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-2 md:mb-4">Vision</h2>
                <p className="text-xs md:text-sm text-slate-700 leading-tight md:leading-relaxed italic">
                  "A leading networking organization contributing to the sustainable development of a prosperous Asia"
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Gear */}
        <div className="relative" style={{ width: missionGearSize, height: missionGearSize }}>
          {/* Rotating Gear Image */}
          <motion.div
            className="absolute inset-0"
            animate={{ rotate: -360 }}
            transition={{
              duration: 15,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            <Image
              src="/vision/4.png"
              alt="Mission Gear"
              width={missionGearSize}
              height={missionGearSize}
              className="object-contain"
            />
          </motion.div>

          {/* Static Content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="rounded-full bg-sky-100/80 w-3/5 h-3/5 flex items-center justify-center">
              <div className="text-center p-3 md:p-4">
                <h2 className="text-lg md:text-xl font-bold text-slate-800 mb-1 md:mb-2">Mission</h2>
                <p className="text-xs md:text-sm text-slate-700 leading-tight md:leading-relaxed italic">
                  "To make true a green, healthy and prosperous Asia"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
