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
        <h2
          className="text-3xl font-bold text-center text-[#072328] "
          id="about-us"
        >
          ABOUT US
        </h2>
      </div>

      {/* Main Content */}
      <div className="max-w-full mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="relative h-100 lg:h-[500px] w-full overflow-hidden">
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
              Research,{" "}
              <span className="font-semibold">
                We are an international not-for-profit organization registered
                in 2012 with a vision of working for Sustainable Asia. The
                founders are subject experts and certified on subjects by APO
                Japan, CBI the Netherlands Govt. The ambition of the
                organization is to promote Responsible Business Conduct (RBG)
                and Sustainable Development Goals (SDGs) by involving private
                sectors and government. The activities of SR Asia focus on two
                major operational frameworks: (1) Innovation Development and (2)
                Knowledge Management. We are in six Asian countries (Bangladesh,
                India, Indonesia, Malaysia, Vietnam, and the Philippines)
              </span>
            </p>
            {/* Read More Button */}
            <div className="pt-0 pb-4">
              <Link href="/srasia">
                <Button
                  variant="link"
                  className="text-blue-800 hover:text-blue-800 p-0 h-auto font-normal"
                >
                  Read more →
                </Button>
              </Link>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">International offices:</h3>
              <p className="text-muted-foreground">
                Bangladesh, Indonesia, India, Malaysia, Philippines, Singapore,
                Vietnam
              </p>

              {/* Country flag images */}
              <div className="flex flex-wrap gap-4 justify-start">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 w-full">
                  <div className="flex flex-col items-center">
                    <Image
                      src="/flags/16.png"
                      alt="Bangladesh flag"
                      width={80}
                      height={40}
                      className="rounded shadow-sm border"
                    />
                  </div>
                  <div className="flex flex-col items-center">
                    <Image
                      src="/flags/20.png"
                      alt="Indonesia flag"
                      width={80}
                      height={40}
                      className="rounded shadow-sm border"
                    />
                  </div>
                  <div className="flex flex-col items-center">
                    <Image
                      src="/flags/19.png"
                      alt="India flag"
                      width={80}
                      height={40}
                      className="rounded shadow-sm border"
                    />
                  </div>
                  <div className="flex flex-col items-center">
                    <Image
                      src="/flags/15.png"
                      alt="Malaysia flag"
                      width={85}
                      height={45}
                      className="rounded shadow-sm border"
                    />
                  </div>
                  <div className="flex flex-col items-center">
                    <Image
                      src="/flags/17.png"
                      alt="Philippines flag"
                      width={120}
                      height={100}
                      className="rounded shadow-sm border"
                    />
                  </div>
                  <div className="flex flex-col items-center">
                    <Image
                      src="/flags/18.png"
                      alt="Vietnam flag"
                      width={120}
                      height={100}
                      className="rounded shadow-sm border"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="px-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
