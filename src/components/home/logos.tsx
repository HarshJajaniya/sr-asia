"use client";

import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function PartnerLogosScroll() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.8; // 80% of visible width
      scrollRef.current.scrollTo({
        left:
          direction === "left"
            ? scrollLeft - scrollAmount
            : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const partners = [
    { src: "/l1.png", alt: "UNGC", name: "UNGC" },
    { src: "/l2.jpg", alt: "CII", name: "CII" },
    { src: "/l3.png", alt: "APO", name: "APO" },
    { src: "/l4.png", alt: "Coal India", name: "Coal India" },
    { src: "/l5.png", alt: "Dabur", name: "Dabur" },
    { src: "/l6.png", alt: "GAIL", name: "GAIL" },
    { src: "/l7.png", alt: "HINDZINC", name: "HINDZINC" },
    { src: "/l8.png", alt: "IGL", name: "IGL" },
    { src: "/l9.png", alt: "ILO", name: "ILO" },
  ];

  return (
    <div className="relative max-w-full mx-auto px-6 mt-[35px]">
      <div className="flex items-center justify-center mb-[15px]">
        <h1 className="text-3xl font-bold text-gray-900 text-center mt-4">
          OUR CLIENTS
        </h1>
      </div>

      {/* Left Arrow */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow p-2 hover:bg-gray-100"
      >
        <ChevronLeft className="w-6 h-6 text-[#004D40]" />
      </button>

      {/* Scrollable Partner Logos */}
      <div ref={scrollRef} className="overflow-x-scroll">
        <div className="flex gap-8 py-4 w-max">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="p-6 flex flex-col items-center h-[128px]"
            >
              <div
                className={`relative ${
                  partner.name === "Coal India" ? "w-40 h-40" : "w-32 h-32"
                }`}
              >
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Arrow */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow p-2 hover:bg-gray-100"
      >
        <ChevronRight className="w-6 h-6 text-[#004D40]" />
      </button>
    </div>
  );
}
