"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined" && gsap && ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ServicesSection() {
  const cardsRef = useRef<HTMLDivElement[]>([]);
const imagesRef = useRef<HTMLDivElement[]>([]);

  // Add ref function to push refs for each card
  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };
  const addToImagesRef = (el: HTMLDivElement | null) => {
    if (el && !imagesRef.current.includes(el)) {
      imagesRef.current.push(el);
    }
  };

  useEffect(() => {
    // Animate each card with ScrollTrigger
    cardsRef.current.forEach((card) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          delay: 0.5,
          duration: 2,
          stagger: 0.5,
          ease: "power3.out",
          scrollTrigger: {
              trigger: cardsRef.current[0].parentElement,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });
     imagesRef.current.forEach((image) => {
      gsap.fromTo(
        image,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.5,
          delay: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: image,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    // Cleanup ScrollTriggers on unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="w-full">
      {/* Key Services Section */}
      <div className="py-10 px-4 bg-white">
        <h2 className="text-center text-3xl font-semibold text-[#004D40] mb-8">
          Key Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {/* Service Card 1 */}
          <div
            ref={addToRefs}
            className="bg-[#FDFCD6] p-6 flex flex-col items-center justify-center aspect-square transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-1 cursor-pointer shadow-md hover:shadow-lg"
          >
            <div className="w-16 h-16 flex items-center justify-center mb-2">
              <Image
                src="/icons/research.png"
                alt="Research & Desk Studies icon"
                width={48}
                height={48}
                className="w-12 h-12"
              />
            </div>
            <p className="text-[#004D40] text-center font-medium text-base">
              Research & Desk
              <br />
              Studies
            </p>
          </div>

          {/* Service Card 2 */}
          <div
            ref={addToRefs}
            className="bg-[#FDFCD6] p-6 flex flex-col items-center justify-center aspect-square transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-1 cursor-pointer shadow-md hover:shadow-lg"
          >
            <div className="w-16 h-16 flex items-center justify-center mb-2">
              <Image
                src="/icons/third-party.png"
                alt="Third-Party Evaluations icon"
                width={48}
                height={48}
                className="w-12 h-12"
              />
            </div>
            <p className="text-[#004D40] text-center font-medium text-base">
              Third-Party
              <br />
              Evaluations
            </p>
          </div>

          {/* Service Card 3 */}
          <div
            ref={addToRefs}
            className="bg-[#FDFCD6] p-6 flex flex-col items-center justify-center aspect-square transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-1 cursor-pointer shadow-md hover:shadow-lg"
          >
            <div className="w-16 h-16 flex items-center justify-center mb-2">
              <Image
                src="/icons/esg.png"
                alt="ESG Reporting icon"
                width={48}
                height={48}
                className="w-12 h-12"
              />
            </div>
            <p className="text-[#004D40] text-center font-medium text-base">
              ESG Reporting
            </p>
          </div>

          {/* Service Card 4 */}
          <div
            ref={addToRefs}
            className="bg-[#FDFCD6] p-6 flex flex-col items-center justify-center aspect-square transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-1 cursor-pointer shadow-md hover:shadow-lg"
          >
            <div className="w-16 h-16 flex items-center justify-center mb-2">
              <Image
                src="/icons/socio.png"
                alt="Socio-Economic Studies icon"
                width={48}
                height={48}
                className="w-12 h-12"
              />
            </div>
            <p className="text-[#004D40] text-center font-medium text-base">
              Socio-Economic
              <br />
              Studies
            </p>
          </div>

          {/* Service Card 5 */}
          <div
            ref={addToRefs}
            className="bg-[#FDFCD6] p-6 flex flex-col items-center justify-center aspect-square transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-1 cursor-pointer shadow-md hover:shadow-lg"
          >
            <div className="w-16 h-16 flex items-center justify-center mb-2">
              <Image
                src="/icons/skill-development.png"
                alt="Skill Development icon"
                width={48}
                height={48}
                className="w-12 h-12"
              />
            </div>
            <p className="text-[#004D40] text-center font-medium text-base">
              Skill Development
            </p>
          </div>

          {/* Service Card 6 */}
          <div
            ref={addToRefs}
            className="bg-[#FDFCD6] p-6 flex flex-col items-center justify-center aspect-square transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-1 cursor-pointer shadow-md hover:shadow-lg"
          >
            <div className="w-16 h-16 flex items-center justify-center mb-2">
              <Image
                src="/icons/land.png"
                alt="Land Acquisition icon"
                width={48}
                height={48}
                className="w-12 h-12"
              />
            </div>
            <p className="text-[#004D40] text-center font-medium text-base">
              Land Acquisition
            </p>
          </div>

          {/* Service Card 7 */}
          <div
            ref={addToRefs}
            className="bg-[#FDFCD6] p-6 flex flex-col items-center justify-center aspect-square transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-1 cursor-pointer shadow-md hover:shadow-lg"
          >
            <div className="w-16 h-16 flex items-center justify-center mb-2">
              <Image
                src="/icons/policy.png"
                alt="Government policy & programs icon"
                width={48}
                height={48}
                className="w-12 h-12"
              />
            </div>
            <p className="text-[#004D40] text-center font-medium text-base">
              Govt. policy &<br />
              programs
            </p>
          </div>

          {/* Service Card 8 */}
          <div
            ref={addToRefs}
            className="bg-[#FDFCD6] p-6 flex flex-col items-center justify-center aspect-square transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-1 cursor-pointer shadow-md hover:shadow-lg"
          >
            <div className="w-16 h-16 flex items-center justify-center mb-2">
              <Image
                src="/icons/pmc.png"
                alt="PMC & advisory icon"
                width={48}
                height={48}
                className="w-12 h-12"
              />
            </div>
            <p className="text-[#004D40] text-center font-medium text-base">
              PMC & advisory
            </p>
          </div>
        </div>
      </div>

      {/* Our Focus Areas Section */}
      <div className="py-10 px-4 bg-[#537D5D]">
        <h2 className="text-center text-3xl font-semibold text-white mb-8">
          Our Focus Areas
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto mb-8">
          <div  ref={addToImagesRef} className="aspect-square overflow-hidden">
            <Image
              src="/3.png"
              alt="People in a meeting discussing charts"
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
          <div  ref={addToImagesRef} className="aspect-square overflow-hidden">
            <Image
              src="/4.png"
              alt="People reviewing documents"
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
          <div ref={addToImagesRef} className="aspect-square overflow-hidden">
            <Image
              src="/5.png"
              alt="People working with digital devices"
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
          <div  ref={addToImagesRef} className="aspect-square overflow-hidden">
            <Image
              src="/6.png"
              alt="Skills development whiteboard"
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="flex justify-center mt-10 px-4">
          <button className="w-full max-w-[300px] h-[44px] flex justify-center items-center text-[#537D5D] bg-[#FDFCD6] font-bold text-[18px] leading-[100%] hover:bg-[#155c35] transition-colors">
            Explore Our Work
          </button>
        </div>
      </div>
    </div>
  );
}
