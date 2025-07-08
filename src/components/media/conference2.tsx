"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Download } from "lucide-react";

export default function FullScreenNestedCarousel() {
  const slides = [
    {
      title: "SR Asia Bangladesh – 2nd National Conference",
      subtitle: "BEF Auditorium, Dhaka, Bangladesh | 17th January 2013",
      intro:
        "The 2nd National Conference organized by SR Asia Bangladesh brought together corporate leaders, policymakers, and development experts to discuss the future of sustainable business practices in South Asia. The event featured panel discussions on CSR integration, the relevance of ISO 26000, and policy alignment with the Sustainable Development Goals. Inaugurated by the Honourable Minister of Industries, Government of Bangladesh, the conference served as a dynamic platform for cross-sector collaboration, capacity building, and the launch of new CSR initiatives.",
      pdfs: [
        { name: "Report.pdf", url: "/pdfs/report1.pdf" },
        { name: "Summary.pdf", url: "/pdfs/summary1.pdf" },
        { name: "Presentation.pdf", url: "/pdfs/presentation1.pdf" },
        { name: "Research.pdf", url: "/pdfs/research1.pdf" },
      ],
      images: ["/insights/3.png", "/img/2b.jpg"],
    },

    {
      title: "SR Asia Bangladesh – 2nd National Conference",
      subtitle: "BEF Auditorium, Dhaka, Bangladesh | 17th January 2013",
      intro:
        "The 2nd National Conference organized by SR Asia Bangladesh brought together corporate leaders, policymakers, and development experts to discuss the future of sustainable business practices in South Asia. The event featured panel discussions on CSR integration, the relevance of ISO 26000, and policy alignment with the Sustainable Development Goals. Inaugurated by the Honourable Minister of Industries, Government of Bangladesh, the conference served as a dynamic platform for cross-sector collaboration, capacity building, and the launch of new CSR initiatives.",
      pdfUrl: "/sample2.pdf",
      images: ["/i/2a.jpg", "/img/2b.jpg"],
    },

    {
      title: "SR Asia Bangladesh – 2nd National Conference",
      subtitle: "BEF Auditorium, Dhaka, Bangladesh | 17th January 2013",
      intro:
        "The 2nd National Conference organized by SR Asia Bangladesh brought together corporate leaders, policymakers, and development experts to discuss the future of sustainable business practices in South Asia. The event featured panel discussions on CSR integration, the relevance of ISO 26000, and policy alignment with the Sustainable Development Goals. Inaugurated by the Honourable Minister of Industries, Government of Bangladesh, the conference served as a dynamic platform for cross-sector collaboration, capacity building, and the launch of new CSR initiatives.",
      pdfUrl: "/sample2.pdf",
      images: ["/i/2a.jpg", "/img/2b.jpg"],
    },
    // Add more outer slides as needed
  ];

  return (
    <div className="mb-4 mt-4 w-full bg-white p-4">
      <Swiper
        modules={[Navigation, Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={50}
        slidesPerView={1}
        className="w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col lg:flex-row min-h-[500px] bg-white rounded-md shadow-md overflow-hidden">
              {/* Left - Text Content */}
              <div className="w-full lg:w-1/2 h-full flex flex-col justify-between px-10 py-8 bg-white">
                <div>
                  <h1 className="text-3xl lg:text-4xl font-bold mb-2">
                    {slide.title}
                  </h1>
                  <h2 className="text-lg lg:text-xl text-gray-600 mb-4">
                    {slide.subtitle}
                  </h2>
                  <p className="text-gray-700 mb-6">{slide.intro}</p>

                  {slide.pdfs && (
                    <div className="mb-4">
                      <h3 className="text-lg font-semibold mb-2">Downloads:</h3>
                      <div className="flex flex-wrap gap-y-3">
                        {slide.pdfs.map((pdf, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-2 w-1/2 list-none pr-4"
                          >
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
                  )}
                </div>

                <button className="w-full bg-[#072328] text-white py-3 mt-4">
                  Highlight
                </button>
              </div>

              {/* Right - Inner Image Carousel */}
              <div className="w-full lg:w-1/2 h-full">
                <Swiper
                  modules={[Pagination]}
                  pagination={{ clickable: true }}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  spaceBetween={10}
                  className="h-full"
                >
                  {slide.images.map((imgSrc, idx) => (
                    <SwiperSlide key={idx}>
                      <img
                        src={imgSrc}
                        alt={`Inner ${idx + 1}`}
                        className="w-full h-[300px] object-cover"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
