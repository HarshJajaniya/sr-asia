"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Download } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";

interface Slide {
  title: string;
  subtitle: string;
  intro: string;
  pdfs: { name: string; url: string }[];
  images: string[];
  link: string;
}

export default function SRAsia5thConferenceSection() {
  const [slide, setSlide] = useState<Slide | null>(null);

  useEffect(() => {
    const fetchConference = async () => {
      const res = await fetch("https://srasia-backend.onrender.com/api/conference/api/conferences");
      const data = await res.json();
      setSlide(data.data[0]); // you can map through data.data for multiple entries
    };
    fetchConference();
  }, []);

  if (!slide) return <div>Loading...</div>;

  return (
    <div className="w-full px-[20px] py-12">
      <div className="flex flex-col lg:flex-row-reverse bg-gray-50 rounded-lg shadow-md overflow-hidden min-h-[500px]">
        {/* Right Side - Text Content */}
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

        {/* Left Side - Image Carousel */}
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
