"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import axios from "axios";

// Static Work Cards
const staticWorkCards = [
  {
    title: "Ganga Express Way: एसआर एशिया के सर्वे के बाद होगा भूमि अधिग्रहण, किया गया एजेंसी का चयन",
    subtitle: "Aug 31,2021",
    description: "गंगा एक्सप्रेस-वे के लिए प्रशासन की ओर से पूरी कवायद जारी है...",
    image: "/resources/1.png",
    link: "https://www.jagran.com/uttar-pradesh/meerut-city-ganga-express-way-after-survey-of-sr-asia-land-acquisition-will-be-done-agency-selected-22009866.html",
  },
  {
    title: "रैपिड के लिए सामाजिक अध्ययन करेगी एसआर एशिया",
    subtitle: "Apr 04,2024",
    description: "रैपिड रेल प्रोजेक्ट के तहत मेरठ शहर की सीमा क्षेत्र में...",
    image: "/resources/3.png",
    link: "https://www.newindianexpress.com/nation/2022/feb/20/ashshash-project-social-responsibility-sr-asia-pledges-solidarity-for-survivors-of-human-trafficking-2428850.html",
  },
  {
    title: "Ashshash Project, Social Responsibility (SR) Asia pledges solidarity for survivors of human trafficking",
    subtitle: "Feb 20,2022",
    description: "Winrock International's Ashshash Project supported by the Swiss Embassy...",
    image: "/resources/4.png",
    link: "https://www.jagran.com/uttar-pradesh/meerut-city-rapid-asia-will-do-social-study-for-rapid-rail-project-23009866.html",
  },
  {
    title: "Coca-Cola Foundation funds SR Asia to improve DSCC waste management",
    subtitle: "01 Jun 2022",
    description: "The core objective is to develop an efficient waste management system...",
    image: "/insights/5.png",
    link: "https://www.dhakatribune.com/bangladesh/289106/coca-cola-foundation-funds-sr-asia-to-improve-dscc",
  },
  {
    title: "Blog About SR Asia-The Economic Times",
    subtitle: "01 Jun 2022",
    description: "SR Asia (Social Responsibility Asia) is a private, non-governmental organization...",
    image: "/resources/blogs.jpeg",
    link: "https://economictimes.indiatimes.com/company/sr-asia/U93000DL2012NPL231376",
  },
];

interface EventType {
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  link: string;
}

export default function SrAsiaWorkCarousel() {
  const [combinedCards, setCombinedCards] = useState<EventType[]>(staticWorkCards);

  useEffect(() => {
    const fetchBackendEvents = async () => {
      try {
        const res = await axios.get("https://srasia-backend.onrender.com/api/events"); // or your hosted URL
        const backendCards: EventType[] = res.data.map((item: any) => ({
          title: item.title,
          subtitle: item.subtitle || "Latest", // fallback
          description: item.description,
          image: `https://srasia-backend.onrender.com${item.image}`, // ensure full URL
          link: item.link || "#",
        }));
        setCombinedCards(prev => [...prev, ...backendCards]);
      } catch (err) {
        console.error("Failed to fetch events", err);
      }
    };

    fetchBackendEvents();
  }, []);

  return (
    <section className="max-w-full">
      <div className="bg-white shadow-xl rounded-2xl my-12 px-4 md:px-6 py-10">
        <div className="relative mb-12 max-w-5xl mx-auto">
          <div className="relative flex items-center mb-10 max-w-screen-xl">
            <h2 className="text-[32px] font-bold text-[#072328] mx-auto bg-white px-4 z-10" id="blogs">
              BLOGS & ARTICLES
            </h2>
          </div>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          className="max-w-full mx-auto"
        >
          {combinedCards.map((card, idx) => (
            <SwiperSlide key={idx} className="pb-12 h-full">
              <article className="h-full flex flex-col justify-between bg-white overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-xl rounded-lg">
                <div className="overflow-hidden h-40 sm:h-48 md:h-56 lg:h-64 xl:h-72">
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={500}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <h3 className="text-lg md:text-xl font-semibold mb-1 text-gray-800 line-clamp-2">
                    {card.title}
                  </h3>
                  <p className="text-xs text-gray-500 mb-1">{card.subtitle}</p>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">{card.description}</p>
                  <Link
                    href={card.link}
                    className="block text-center py-2 px-4 bg-[#072328] text-white font-medium hover:bg-[#A1E3F9] hover:text-[#072328]"
                  >
                    Read more
                  </Link>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
