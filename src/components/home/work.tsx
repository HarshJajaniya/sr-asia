"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const workCards = [
  {
    title: "Need‑Assessment of IREDA's CSR initiative, Himachal",
    description:
      "Advisory, monitoring & evaluation (M&E) – impact assessment for renewable‑energy initiatives in mountain regions.",
    image: "/work1.png",
  },
  {
    title: "Skill Development & Women Empowerment, Bihar",
    description:
      "Rural women artisans trained in sustainable crafts and market linkages established for income generation.",
    image: "/work2.png",
  },
  {
    title: "Project Jal‑Suraksha, Rajasthan",
    description:
      "Ensuring safe drinking water via solar‑powered filtration systems across desert districts.",
    image: "/work3.png",
  },
  {
    title: "Green Schools Programme, Delhi‑NCR",
    description:
      "Eco‑clubs, waste segregation drives and rooftop solar install in 25 government schools.",
    image: "/work4.png",
  },
  {
    title: "Healthcare on Wheels, Odisha",
    description:
      "Mobile diagnostic vans delivering primary healthcare to tribal villages in Koraput district.",
    image: "/work5.png",
  },
  {
    title: "Agri‑Tech for Small Farmers, Uttar Pradesh",
    description:
      "IoT soil‑sensor deployment & advisory app boosting crop yield by 18% in pilot clusters.",
    image: "/work6.png",
  },
  {
    title: "River Rejuvenation Campaign, Madhya Pradesh",
    description:
      "Community‑led desilting and afforestation restoring perennial flow in 42 km stretch.",
    image: "/work7.png",
  },
  {
    title: "Renewable Micro‑grids, North‑East",
    description:
      "Off‑grid solar micro‑plants electrifying 600+ households in remote hills.",
    image: "/work8.png",
  },
];

// ----------------------------------------------------
// 🏗️  COMPONENT
// ----------------------------------------------------
export default function SrAsiaWorkCarousel() {
  return (
    <section className="max-w-full">
      {/* ⭕ Outer Card Section */}
      <div className="bg-gray-50 shadow-xl rounded-2xl my-12 px-4 md:px-6 py-10">
        {/* 🔖 Section Header */}
        <div className="relative mb-12 max-w-5xl mx-auto">
          <div className="relative flex items-center mb-10 max-w-screen-xl">
            <h2 className="text-2xl font-bold text-[#004D40] mx-auto bg-white px-4 z-10">
              Our Work on the Ground
            </h2>
            <div
              className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center space-x-2"
              style={{ width: "25vw", minWidth: "150px" }}
            >
              <div className="w-4 h-4 rounded-full bg-[#004D40] z-20" />
              <div className="h-px bg-[#004D40] flex-grow" />
            </div>
          </div>
        </div>

        {/* 🖼️ Swiper Carousel */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          className="max-w-6xl mx-auto"
        >
          {workCards.map((card, idx) => (
            <SwiperSlide key={idx} className="pb-12 h-full">
             <article className="h-full flex flex-col justify-between bg-white shadow-lg border border-gray-200 overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-xl rounded-lg">

                {/* Image */}
                <div className="overflow-hidden h-40 sm:h-48 md:h-56 lg:h-64 xl:h-72">
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={500}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Text */}
                <div className="p-6 flex flex-col justify-between flex-grow">

                  <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-800 line-clamp-2">
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                    {card.description}
                  </p>
                  <Link
                    href="#"
                    className="block text-center py-2 px-4 bg-[#00966E] hover:bg-[#FDFCD6] hover:text-[#00966E] text-white font-medium rounded"
                  >
                    Read more
                  </Link>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* 📄 View All Projects Button */}
        <div className="flex justify-center mt-12">
          <Link
            href="#"
            className="py-3 px-8 bg-[#537D5D] hover:bg-green-950 text-white text-lg font-medium transition rounded"
          >
            View All Projects
          </Link>
        </div>
      </div>

      {/* 🗺️ The SR Asia Footprint */}
      <div className="relative mt-16">
        <div className="flex items-center px-4 md:px-6">
          <div className="relative mr-4">
            <div className="ml-[40vw] w-5 h-5 rounded-full bg-[#004D40] z-10 relative" />
            <div className="absolute top-1/2 right-5 h-0.5 bg-[#004D40] w-[100vw]" />
          </div>
          <h2 className="text-2xl font-semibold text-[#004D40]">The SR Asia Footprint</h2>
        </div>
      </div>
    </section>
  );
}