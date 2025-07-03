"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { Download } from "lucide-react"

export default function FullScreenNestedCarousel() {
  const slides = [
    {
      title: "SR Asia – 1st International Conference (2012)",
      subtitle: "October 18–19, 2012 | India International Centre, New Delhi",
      intro: "SR Asia’s inaugural international conference brought together thought leaders, policymakers, industry experts, and global organizations to discuss the emerging role of socially responsible products and services in sustainable development. This two-day event featured sessions on CSR....",
      pdfs: [
        { name: "Report.pdf", url: "/pdfs/report1.pdf" },
        { name: "Summary.pdf", url: "/pdfs/summary1.pdf" },
        { name: "Presentation.pdf", url: "/pdfs/presentation1.pdf" },
        { name: "Research.pdf", url: "/pdfs/research1.pdf" },
      ],
      images: ["/insights/4.png", "/img/1b.jpg", "/img/1c.jpg"], // inner carousel images
    },
    {
      title: "SR Asia Bangladesh – 2nd National Conference",
      subtitle: "BEF Auditorium, Dhaka, Bangladesh | 17th January 2013",
      intro: "The 2nd National Conference organized by SR Asia Bangladesh brought together corporate leaders, policymakers, and development experts to discuss the future of sustainable business practices in South Asia. The event featured panel discussions on CSR integration, the relevance of ISO 26000, and policy alignment with the Sustainable Development Goals. Inaugurated by the Honourable Minister of Industries, Government of Bangladesh, the conference served as a dynamic platform for cross-sector collaboration, capacity building, and the launch of new CSR initiatives.",
      pdfUrl: "/sample2.pdf",
      images: ["/i/2a.jpg", "/img/2b.jpg"],
    },
    // Add more outer slides as needed
  ]

  return (
   <div className="w-full h-screen">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={50}
        slidesPerView={1}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="flex h-screen">
              {/* Left - Inner Image Carousel */}
              <div className="w-1/2 h-full">
                <Swiper
                  modules={[Pagination, Navigation]}
                  pagination={{ clickable: true }}
                  navigation
                  spaceBetween={10}
                  className="h-full"
                >
                  {slide.images.map((imgSrc, idx) => (
                    <SwiperSlide key={idx}>
                      <img
                        src={imgSrc}
                        alt={`Inner ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* Right - Content */}
              <div className="w-1/2 flex flex-col justify-center px-10 py-8 bg-white">
                <h1 className="text-4xl font-bold mb-2">{slide.title}</h1>
                <h2 className="text-xl text-gray-600 mb-4">{slide.subtitle}</h2>
                <p className="text-gray-700 mb-6">{slide.intro}</p>

                {/* Download Section */}
               <div className="mb-6">
  <h3 className="text-lg font-semibold mb-2">Downloads:</h3>
  <div className="flex flex-wrap gap-y-3">
    {slide.pdfs?.map((pdf, i) => (
      <li key={i} className="flex items-center gap-2 w-1/2 list-none pr-4">
        <Download className="w-4 h-4 text-gray-600" />
        <a
          href={pdf.url}
          download
          className="text-[#072328] hover:underline"
        >
          {pdf.name}
        </a>
      </li>
    ))}
  </div>
</div>


                {/* Highlight Button (Full width) */}
                <button className="w-full bg-[#072328] text-white py-3 ">
                  Highlight
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
