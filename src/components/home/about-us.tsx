"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

export default function AboutUsSection() {
  const aboutHeaderRef = useRef(null);
  const aboutTextRef = useRef(null);
  const countriesTitleRef = useRef(null);
  const flagRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // Create animation timeline or individual tweens
    const triggers: gsap.core.Tween[] = [];

    if (aboutHeaderRef.current) {
      triggers.push(
        gsap.from(aboutHeaderRef.current, {
          scrollTrigger: {
            trigger: aboutHeaderRef.current,
            start: "top 80%",
          },
          opacity: 0,
          y: -20,
          duration: 1,
          ease: "power3.out",
        })
      );
    }

    if (aboutTextRef.current) {
      triggers.push(
        gsap.from(aboutTextRef.current, {
          scrollTrigger: {
            trigger: aboutTextRef.current,
            start: "top 80%",
          },
          opacity: 0,
          y: 20,
          duration: 1,
          ease: "power3.out",
        })
      );
    }

    if (countriesTitleRef.current) {
      triggers.push(
        gsap.from(countriesTitleRef.current, {
          scrollTrigger: {
            trigger: countriesTitleRef.current,
            start: "top 85%",
          },
          opacity: 0,
          y: -20,
          duration: 1,
          ease: "power3.out",
        })
      );
    }

    flagRefs.current.forEach((ref, index) => {
      if (!ref) return;
      triggers.push(
        gsap.from(ref, {
          scrollTrigger: {
            trigger: ref,
            start: "top 90%",
          },
          opacity: 0,
          y: 20,
          duration: 1,
          delay: index * 0.2,
          ease: "power3.out",
        })
      );
    });

    // Refresh ScrollTrigger
    ScrollTrigger.refresh();

    // Cleanup to prevent duplicated triggers
    return () => {
      triggers.forEach((tween) => tween.scrollTrigger?.kill());
    };
  }, []);

  return (
    <div className="w-full py-12 px-4 border-b border-gray-200 shadow-lg mb-[75px]">
      {/* Header */}
      <div className="max-w-full mx-auto mb-[40px]" ref={aboutHeaderRef}>
        <h2 className="text-3xl font-bold text-center text-[#072328] " id="about-us">
          ABOUT US
        </h2>
      </div>

      {/* Main Content */}
      <div className="max-w-full mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="relative h-100 lg:h-[544px] w-full overflow-hidden">
              <Image
                src="/36.png"
                alt="Forest background representing sustainable development"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div
            className="space-y-4 text-3sm text-gray-700 leading-relaxed"
            ref={aboutTextRef}
          >
            <p>
             An International organization promoting sustainability through
Research, CSR Project Implementation, Development projects,

Project Management, International and National Conferences,

Integrated and Sustainability Reporting, ESG Reporting,

Capacity Building, and Third-Party Assurance Services.
            </p>
 <div className="space-y-4">
              <h3 className="text-xl font-semibold">International offices:</h3>
              <p className="text-muted-foreground">
                Bangladesh, Indonesia, India, Malaysia, Philippines, Singapore, Vietnam
              </p>
              
              {/* Country flag images */}
              <div className="flex flex-wrap gap-4 justify-start">
               <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 w-full">
  <div className="flex flex-col items-center">
    <Image
      src="/flags/9.png"
      alt="Bangladesh flag"
      width={80}
      height={40}
      className="rounded shadow-sm border"
    />
  </div>
  <div className="flex flex-col items-center">
    <Image
      src="/flags/10.png"
      alt="Indonesia flag"
      width={80}
      height={40}
      className="rounded shadow-sm border"
    />
  </div>
  <div className="flex flex-col items-center">
    <Image
      src="/flags/11.png"
      alt="India flag"
      width={80}
      height={40}
      className="rounded shadow-sm border"
    />
  </div>
  <div className="flex flex-col items-center">
    <Image
      src="/flags/12.png"
      alt="Malaysia flag"
      width={80}
      height={40}
      className="rounded shadow-sm border"
    />
  </div>
  <div className="flex flex-col items-center">
    <Image
      src="/flags/13.png"
      alt="Philippines flag"
      width={80}
      height={40}
      className="rounded shadow-sm border"
    />
  </div>
  <div className="flex flex-col items-center">
    <Image
      src="/flags/14.png"
      alt="Vietnam flag"
      width={80}
      height={40}
      className="rounded shadow-sm border"
    />
  </div>
</div>

              </div>
              
            </div>
           <div className="px-8">
                <div className="flex items-center space-x-2 text-gray-600">
                  <Image
                    src="/ukas.webp"
                    alt="UKAS logo"
                    width={180}
                    height={80}
                    className="rounded shadow-sm border"
                  />
                   <Image
                    src="/iso.png"
                    alt="ISO logo"
                    width={180}
                    height={80}
                    className="rounded shadow-sm border"
                  />
                </div>
              
  

              </div>

           

            {/* Read More Button */}
            <div className="pt-4">
              <Link href="/srasia">
                <Button
                  variant="link"
                  className="text-blue-800 hover:text-blue-800 p-0 h-auto font-normal"
                >
                  Read more →
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
