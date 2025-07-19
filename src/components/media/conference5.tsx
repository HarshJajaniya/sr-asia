"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Download } from "lucide-react";

export default function SRAsia5thConferenceSection() {
  const slide = {
    title: "SR Asia – 5th International Conference (2016)",
    subtitle: "12–13 November 2016 | Kathmandu, Nepal",
    intro:
      "The 5th SR Asia International Conference focused on aligning responsible business practices with the Sustainable Development Goals (SDGs), bringing together international stakeholders, experts, and policy influencers to promote sustainable growth in South Asia.",
    pdfs: [
      { name: "Press Report.pdf", url: "/pdfs/sr-asia-5th-press.pdf" },
      { name: "Conference Agenda.pdf", url: "/pdfs/sr-asia-5th-agenda.pdf" },
    ],
    images: ["/insights/7.jpeg"],
    link: "https://www.linkedin.com/pulse/press-report-5th-sr-asia-international-conference-birendra-raturi/",
  };

  return (
    <div className="w-full px-[20px] py-12">
      <div className="flex flex-col lg:flex-row-reverse bg-gray-50 rounded-lg shadow-md overflow-hidden min-h-[500px]">
        {/* Right Side - Image Carousel */}
        <div className="w-full lg:w-1/2 flex flex-col justify-between px-6 py-6 bg-white">
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold mb-2">
              {slide.title}
            </h1>
            <h2 className="text-lg lg:text-xl text-gray-600 mb-2">
              {slide.subtitle}
            </h2>
            <p className="text-gray-700 mb-6">{slide.intro}</p>

            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Downloads:</h3>
              <ul className="flex flex-wrap gap-y-3">
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
              </ul>
            </div>
          </div>

          <button className="w-full bg-[#072328] text-white py-3 mt-4">
            <a
              href={slide.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              View Report
            </a>
          </button>
        </div>

        {/* Left Side - Text Content */}
        <div className="w-full lg:w-1/2 h-full">
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            className="h-full"
          >
            {slide.images.map((imgSrc, idx) => (
              <SwiperSlide key={idx}>
                <img
                  src={imgSrc}
                  alt={`Slide ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
