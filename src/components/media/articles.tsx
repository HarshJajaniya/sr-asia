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
    title: "Ganga Express Way: एसआर एशिया के सर्वे के बाद होगा भूमि अधिग्रहण, किया गया एजेंसी का चयन",
    subtitle:"Aug 31,2021",
    description:
      "गंगा एक्सप्रेस-वे के लिए प्रशासन की ओर से पूरी कवायद जारी है। लेकिन मेरठ जनपद में 181 हेक्टेयर में से 28 हेक्टेयर जमीन की खरीद किसानों के विवाद के कारण नहीं हो सकी है। अब इस जमीन का अधिग्रहण करना होगा। प्रक्रिया शुरू हो चुकी है।",
    image: "/resources/1.png",
  },
   {
    title: "रैपिड के लिए सामाजिक अध्ययन करेगी एसआर एशिया",
    subtitle:"Apr 04,2024",
    description:
      "रैपिड रेल प्रोजेक्ट के तहत मेरठ शहर की सीमा क्षेत्र में विभिन्न स्टेशनों के निर्माण के लिए जमीन आपसी सहमति से नहीं मिल पा रही है। लिहाजा आठ स्थानों पर कुल 5.8982 हेक्टेयर भूमि का अधिग्रहण करने का निर्णय लिया गया है।",
    image: "/resources/3.png",
  },
   {
    title: "Ashshash Project, Social Responsibility (SR) Asia pledges solidarity for survivors of human trafficking",
    subtitle:"Feb 20,2022",
    description:
      "Winrock International's Ashshash Project supported by the Swiss Embassy and Social Responsibility Asia (SR ASIA) have teamed up to affirm the mobilisation of resources, exhibit advanced CSR practices, and enable sensitisation on Trafficking-in-Persons (TIP) issues amongst public and private sector organisations.",
    image: "/resources/4.png",
  }, {
    title: "Ashshash Project, Social Responsibility (SR) Asia pledges solidarity for survivors of human trafficking",
    subtitle:"Feb 20,2022",
    description:
      "Winrock International's Ashshash Project supported by the Swiss Embassy and Social Responsibility Asia (SR ASIA) have teamed up to affirm the mobilisation of resources, exhibit advanced CSR practices, and enable sensitisation on Trafficking-in-Persons (TIP) issues amongst public and private sector organisations.",
    image: "/resources/4.png",
  }, {
    title: "Ashshash Project, Social Responsibility (SR) Asia pledges solidarity for survivors of human trafficking",
    subtitle:"Feb 20,2022",
    description:
      "Winrock International's Ashshash Project supported by the Swiss Embassy and Social Responsibility Asia (SR ASIA) have teamed up to affirm the mobilisation of resources, exhibit advanced CSR practices, and enable sensitisation on Trafficking-in-Persons (TIP) issues amongst public and private sector organisations.",
    image: "/resources/4.png",
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
              Featured Insights
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
         
        </div>
      </div>
    </section>
  );
}