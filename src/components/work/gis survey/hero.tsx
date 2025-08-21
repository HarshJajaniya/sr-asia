"use client";

import type React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative h-[600px] md:h-[600px] overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/vedios/reporting.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Foreground content */}
      <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16 z-20">
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="bg-black/30 backdrop-blur-sm p-6 md:p-8 rounded-lg max-w-2xl text-white"
        >
          <div className="flex items-center mb-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">
                GIS & CSR Insights Report – SR Asia{" "}
              </h1>
              <p className="text-lg md:text-xl opacity-90 mb-6">
                Socio-Economic Survey (BLSES) and Resettlement Action Plan (RAP)
                – Sasti & Ramnagar Villages, Ballarpur, Maharashtra{" "}
              </p>
            </div>
            <div>
              <Image
                src={"/badge.svg"}
                alt="SR Asia Logo"
                width={150}
                height={150}
                className="mx-auto mb-4"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
