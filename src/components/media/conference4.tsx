"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Download } from "lucide-react";

export default function FullScreenNestedCarousel() {
  const slides = [
    {
      title: "Global Partnership for Sustainable Development Goals",
      subtitle: "Organized by Eco-Business",
      intro:
        "Join global leaders, policymakers, and innovators to forge strong partnerships and accelerate collective action on the UN Sustainable Development Goals. Gain valuable insights from panel discussions, real-world case studies, and networking.",
      date: "Date: September 15–16, 2024",
      pdfs: [
        { name: "Agenda.pdf", url: "/assets/agenda.pdf" },
        { name: "Speakers.pdf", url: "/assets/speakers.pdf" },
        { name: "Backgrounder.pdf", url: "/assets/backgrounder.pdf" },
      ],
      images: ["/insights/6.jpg"],
      link: "https://www.eco-business.com/events/global-partnership-for-sustainable-development-goals/register/",
    },
  ];

  return (
    <div className="w-full px-[20px] py-12">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={50}
        slidesPerView={1}
        className="w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col lg:flex-row-reverse min-h-[500px] bg-gray-50 rounded-lg shadow-md overflow-hidden">
              {/* Right - Image Carousel (now moved to right) */}
              <div className="w-full lg:w-1/2 h-full">
                <Swiper
                  modules={[Pagination, Autoplay]}
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
                        alt={`Slide ${idx + 1}`}
                        className="w-full h-[475px] object-cover"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* Left - Content */}
              <div className="w-full lg:w-1/2 h-full flex flex-col justify-between px-6 py-6 bg-white">
                <div>
                  <h1 className="text-3xl lg:text-4xl font-bold mb-2">
                    {slide.title}
                  </h1>
                  <h2 className="text-lg lg:text-xl text-gray-600 mb-2">
                    {slide.subtitle}
                  </h2>
                  <p className="text-md font-medium text-gray-800 mb-4">
                    {slide.date}
                  </p>
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
                  <a
                    href={slide.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white"
                  >
                    Register Now
                  </a>
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
