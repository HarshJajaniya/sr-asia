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
    <div className="w-full px-[20px] mb-[75px]">
      {/* Header */}
      <div className="max-w-full mx-auto mb-8" ref={aboutHeaderRef}>
        <h2 className="text-[32px] font-bold text-center text-[#072328] py-4" id="who-we-are">
          WHO WE ARE
        </h2>
      </div>

      {/* Main Content */}
      <div className="max-w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="relative h-64 lg:h-80 w-full overflow-hidden ">
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
            className="space-y-4 text-sm text-gray-700 leading-relaxed"
            ref={aboutTextRef}
          >
            <p>
              SR Asia (Social Responsibility Asia) is an ISO 9001-certified,
              not-for-profit organization established in 2012. With a presence
              across six Asian countries and projects in over 26 Indian states,
              we work at the intersection of sustainability, governance, and
              social equity. We partner with corporates, PSUs, governments, and
              development institutions to drive evidence-based development, ESG
              integration, and inclusive impact. Our approach blends policy
              expertise, ground-level execution, and innovation to build a more
              sustainable and equitable future for Asia.
            </p>

            <p></p>

            {/* Read More Button */}
            <div className="pt-4">
              <Link href="/srasia">
                <Button
                  variant="link"
                  className="text-blue-600 hover:text-blue-800 p-0 h-auto font-normal"
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
