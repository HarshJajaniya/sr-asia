"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function Component() {
  const images = [
    {
      src: "/flags/india.png",
      alt: "View of Indian city through ornate Mughal archway",
      title: "INDIA",
    },
    {
      src: "/flags/bangladesh.png",
      alt: "Taj Mahal at sunrise",
      title: "BANGLADESH",
    },
    {
      src: "/flags/indonesia.png",
      alt: "Kerala backwaters",
      title: "INDONESIA",
    },
    {
      src: "/flags/Malysia.png",
      alt: "Rajasthan desert landscape",
      title: "MALAYSIA",
    },
    {
      src: "/flags/PHILLIPPINES.png",
      alt: "Himalayan mountain range",
      title: "PHILLIPPINES",
    },
    {
      src: "/flags/japan.jpg",
      alt: "Japan image tree",
      title: "JAPAN",
    },
    {
      src: "/flags/singapore.jpg",
      alt: "famous fountain",
      title: "SINGAPORE",
    },
  ];

  return (
    <div className="w-full mb-[75px]">
      <div className="w-full text-2xl mb-[75px] md:text-[40px] font-bold flex items-center justify-center text-[40px]" id="country-network">
        PRESENCE WITH ASIA
      </div>
      <Carousel className="w-full" opts={{ align: "start", loop: true }}>
        <CarouselContent className="-ml-0">
          {images.map((image, index) => (
            <CarouselItem key={index} className="pl-0">
              <Card className="border-0 rounded-none">
                <CardContent className="p-0 relative">
                  <div className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh]">
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                    <div className="absolute top-8 left-8 z-10">
                      <div className="bg-sky-400 text-white px-6 py-3 rounded-full text-lg md:text-xl font-bold tracking-wider">
                        {image.title}
                      </div>
                    </div>
                    {/* Overlay gradient for better text readability */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20" />
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 h-12 w-12 bg-white/80 hover:bg-white border-0 shadow-lg" />
        <CarouselNext className="right-4 h-12 w-12 bg-white/80 hover:bg-white border-0 shadow-lg" />
      </Carousel>

      {/* Optional: Carousel indicators */}
      <div className="flex justify-center mt-6 space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className="w-2 h-2 rounded-full bg-gray-300 hover:bg-gray-500 cursor-pointer transition-colors"
          />
        ))}
      </div>
    </div>
  );
}
