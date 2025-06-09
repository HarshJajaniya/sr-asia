"use client";

import Image from "next/image";

// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

export default function NewsletterImpactSection() {
  

  return (
    <div className="w-full">
      {/* Newsletter Section */}
      <div
        // ref={newsletterRef}
        className="mt-4 mb-4 py-4 border-t border-b border-gray-200 shadow-2xl text-[#537D5D] p-8 md:p-12 flex flex-col md:flex-row items-center justify-center gap-8"
      >
        <div className="w-full max-w-[250px]">
          <Image
            src="/9.png"
            alt="Email newsletter illustration"
            width={250}
            height={250}
            className="rounded-md"
          />
        </div>
        <div className="w-full max-w-md space-y-6">
          <h2 className="text-2xl md:text-3xl font-medium">
            Subscribe to our newsletter
          </h2>
          <div className="space-y-4">
            <input
              type="email"
              placeholder="enter your email"
              className="w-full px-4 py-3 rounded border border-gray-300 text-black"
            />
            <button className="w-full bg-[#4c9c2e] hover:bg-[#3d7d24] text-white py-3 rounded transition-colors">
              Subscribe
            </button>
            <div className="flex items-start gap-2">
              <input type="checkbox" id="newsletter-consent" className="mt-1" />
              <label htmlFor="newsletter-consent" className="text-sm">
                I agree to receive communications from SR Asia
              </label>
            </div>
          </div>
        </div>
      </div>

    


        
        
    </div>
  );
}
