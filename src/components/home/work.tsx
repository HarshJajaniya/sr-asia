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
    title: "Strategic Impact Services for Sustainable Development",
    description:
      "At SR Asia, we drive purpose-led transformation through end-to-end solutions in CSR, sustainability, and compliance. From need assessments to impact evaluation, we align your projects with national laws and global standards—delivering measurable results, meaningful engagement, and lasting value.",
    image: "/workk/1.jpg",
  },
 
   {
    title: "Trusted Assurance & Transparent Reporting",
    description:
      "SR Asia strengthens organizational credibility through independent third-party assessments, ESG disclosures, and integrated reporting. We help you build stakeholder trust by validating impact, enhancing transparency, and aligning with global sustainability standards.",
    image: "/workk/3.jpg",
  },
  // {
  //   title: "Insight-Driven Research for Smarter Decisions",
  //   description:
  //     "At SR Asia, we deliver high-impact Behavioral and Market Surveys powered by AI-ML, advanced analytics, and data visualization. From understanding human behavior to decoding market dynamics, our research unlocks actionable insights that help organizations innovate, compete, and grow with confidence.",
  //   image: "/workk/3.jpg",
  // },
    {
    title: "Precision Mapping for Smarter Decisions",
    description:
      "OAt SR Asia, we deliver advanced GIS mapping and remote sensing services to transform spatial data into strategic insights. From environmental monitoring to infrastructure planning, our geospatial solutions empower organizations to visualize, analyze, and act with clarity and confidence.",
    image: "/workk/8.PNG",
  },
  {
    title: "Policy Intelligence for Impactful Governance",
    description:
      "At SR Asia, we empower governments and organizations with data-driven insights, strategic policy research, and on-ground implementation support. From evaluating flagship programs like PMAY and NRLM to crafting actionable briefs and ensuring compliance, we turn policy into performance—delivering change that matters.",
    image: "/workk/2.jpg",
  },
   {
    title: "Enabling Responsible Land Development",
    description:
      "At SR Asia, we offer end-to-end land acquisition and impact assessment services under the RTFCLARR Act—spanning Land Survey, SIA, ESIA, EIA, and R&R. We blend precision, legal compliance, and community engagement to support development that is inclusive, sustainable, and conflict-free.",
    image: "/workk/9.jpg",
  },
  // {
  //   title: "Transparency That Inspires Trust",
  //   description:
  //     "From ESG and sustainability disclosures to third-party assurances and regulatory reporting, SR Asia delivers end-to-end solutions that turn data into credibility. We help organizations lead with transparency, compliance, and strategic impact.",
  //   image: "/workk/5.png",
  // },
  // {
  //   title: "Driving Impact Through Effective Implementation",
  //   description:
  //     "At SR Asia, we turn vision into action—delivering end-to-end implementation for CSR, development projects, and R&R programs. With strategic planning, stakeholder engagement, and impact-focused execution, we ensure every initiative is inclusive, measurable, and built to last.",
  //   image: "/workk/6.png",
  // },
  {
    title: "Expert Advisory Project Success and Feasibility",
    description:
      "At SR Asia, we deliver end-to-end PMC and advisory services—from DPRs and feasibility studies to M&E and strategic planning. With deep sectoral insight and robust execution support, we ensure your projects are viable, future-ready, and aligned for long-term impact.",
    image: "/workk/7.PNG",
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
            <h2 className="text-2xl font-bold text-[#072328] mx-auto bg-white px-4 z-10">
              Our Approach
            </h2>
            <div
              className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center space-x-2"
              style={{ width: "25vw", minWidth: "150px" }}
            >
              
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
            1280: { slidesPerView: 4 },
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
                    className="block text-center py-2 px-4 bg-[#072328] hover:bg-[#FDFCD6] text-white font-medium"
                  >
                    Read more
                  </Link>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>

    
      </div>

      {/* 🗺️ The SR Asia Footprint */}
      <div className="relative mt-8">
        <div className="flex items-center px-4 md:px-6">
          <div className="relative mr-4">
            
          </div>
         <div className="w-full text-center">
  <h2 className="text-3xl font-bold text-[#072328] weight-600 mb-8">The SR Asia Footprint</h2>
</div>

        </div>
      </div>
    </section>
  );
}