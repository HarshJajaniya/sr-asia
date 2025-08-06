"use client";

import Image from "next/image";
import Link from "next/link";
import { workCards } from "@/components/home/data"; // adjust import path to named export

export default function SrAsiaWorkGrid() {
  return (
    <section className="max-w-full bg-gray-50 py-16 px-4 md:px-6 lg:px-8 mb-[35px] border-b border-gray-200 shadow-lg">
      <div className="max-w-full mx-auto">
        {/* Section Heading */}
        <h2 className="text-3xl font-bold text-[#072328] text-center mb-[35px]" id="approach">OUR APPROACH</h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 border-t border-gray-200 pt-4">
          {workCards.map((card, idx) => (
            <article
              key={idx}
              className="flex flex-col justify-between bg-white overflow-hidden transition-transform hover-translate-y-1 shadow-xl"
            >
              {/* Image */}
              <div className="overflow-hidden h-58">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={500}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-800 line-clamp-2">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                  {card.description}
                </p>
               <Link
                  href={`/work/${card.slug}`}
                  className="block text-center py-2 px-4 bg-[#072328] hover:bg-[#A1E3F9] hover:text-[#072328] text-white font-medium"
                >
                  Read more
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
