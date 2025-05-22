"use client"

import { motion } from "framer-motion"
import { stateData } from "@/utils/map-data"
import Image from "next/image"

interface MapProps {
  activeState: string | null
  onStateHover: (stateId: string) => void
  onStateLeave: () => void
}

export function Map({ activeState, onStateHover, onStateLeave }: MapProps) {
  return (
    <div className="relative w-full h-full">
      {/* The map image */}
      <Image src="/map.png" alt="Map of India" fill className="object-contain" priority />

      {/* SVG overlay with interactive regions */}
      <svg
        viewBox="0 0 800 1000"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-0 left-0 w-full h-full"
        style={{ pointerEvents: "none" }}
      >
        {Object.keys(stateData).map((stateId) => {
          const state = stateData[stateId]
          const isActive = activeState === stateId

          return (
            <motion.path
              key={stateId}
              d={state.path}
              initial={{ fill: "rgba(0, 0, 0, 0)" }}
              animate={{
                fill: isActive ? "rgba(249, 115, 22, 0.5)" : "rgba(0, 0, 0, 0)",
                stroke: isActive ? "rgba(249, 115, 22, 0.8)" : "rgba(255, 255, 255, 0)",
                strokeWidth: isActive ? 2 : 0,
              }}
              transition={{ duration: 0.3 }}
              onHoverStart={() => onStateHover(stateId)}
              onHoverEnd={onStateLeave}
              onClick={() => onStateHover(stateId)}
              style={{
                cursor: "pointer",
                pointerEvents: "all",
              }}
            />
          )
        })}
      </svg>

      {/* Optional: State labels that appear on hover */}
      {activeState && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="absolute bottom-4 left-4 bg-white/90 px-3 py-1.5 rounded shadow-sm border border-[#537D5D]"
        >
          <span className="text-[#537D5D] font-medium">{stateData[activeState]?.name}</span>
        </motion.div>
      )}
    </div>
  )
}
