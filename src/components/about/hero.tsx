"use client";

import type React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden mb-[75px]">

      {/* Video Background */}
     <div className="w-full h-[720px]">
  <video
    autoPlay
    muted
    loop
    playsInline
    className="w-full h-full object-cover"
  >
    <source src="/vedios/5.mp4" type="video/mp4" />
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
              <h1 className="text-3xl md:text-3xl font-bold mb-2">
                Empowering Impact Through Responsibility and Innovation
              </h1>
              <p className="text-lg md:text-1rem opacity-90 mb-6">
                A not-for-profit organization committed to sustainable development, ESG leadership, and inclusive growth across Asia.
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

