"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useMemo } from "react"
import { stateData } from "@/utils/map-data"
import Image from "next/image"

interface MapProps {
  activeState: string | null
  onStateHover: (stateId: string) => void
  onStateLeave: () => void
}

export function Map({ activeState, onStateHover, onStateLeave }: MapProps) {
  const statePaths = useMemo(() => {
    return Object.keys(stateData).map((stateId) => {
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
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") onStateHover(stateId)
          }}
          tabIndex={0}
          role="button"
          aria-label={`State: ${state.name}`}
          style={{
            cursor: "pointer",
            pointerEvents: "all",
            outline: "none",
          }}
        />
      )
    })
  }, [activeState, onStateHover, onStateLeave])

  const activeStateData = activeState ? stateData[activeState] : null

  return (
    <div className="relative w-full h-[600px]">
      {/* Background map image */}
      <Image
        src="/map.png"
        alt="Map of India"
        fill
        className="object-contain"
        priority
      />

      {/* Interactive SVG overlay */}
      <svg
        viewBox="0 0 800 1000"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-0 left-0 w-full h-full"
        style={{ pointerEvents: "none" }}
      >
        {statePaths}
      </svg>

      {/* State label */}
      <AnimatePresence>
        {activeStateData && (
          <motion.div
            key={activeState}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-4 left-4 bg-white/90 px-3 py-1.5 rounded shadow-sm border border-[#537D5D]"
          >
            <span className="text-[#537D5D] font-medium">
              {activeStateData.name}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
