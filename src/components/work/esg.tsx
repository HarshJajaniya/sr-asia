import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CSRConsultingPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 md:px-6 py-10 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-start">
          {/* Left Column - Text */}
          <div className="space-y-8">
            {/* Header */}
            <div>
              <div className="flex items-center mb-6 md:mb-8">
                <div className="h-px bg-[#537D5D] w-5 md:w-14"></div>
                <div className="w-3 h-3 md:w-4 md:h-4 rounded-lg bg-[#537D5D] ml-2"></div>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#537D5D] ml-4">
                  ESG & Sustainability Reporting
                </h2>
              </div>

              <p className="text-gray-700 leading-relaxed px-1 sm:px-4 mb-6 md:mb-8">
                Make Your Sustainability Journey Credible. Our ESG services help companies report responsibly and transparently. We align your reporting with global frameworks like BRSR, TCFD, GRI, and CDP, while helping you meet compliance and investor expectations.
              </p>
            </div>

            {/* Key Services */}
            <div className="px-1 sm:px-4">
              <h3 className="text-lg md:text-xl font-semibold text-[#537D5D] mb-4">Key Services</h3>
              <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
                {[
                  "CSR strategy & policy support",
                  "Project planning and design",
                  "Third-party evaluations",
                  "Impact and financial assessments",
                  "CSR reporting and documentation",
                ].map((service, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-teal-600 mr-2">•</span>
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Button */}
            <div className="pt-2 px-1 sm:px-4">
              <Link href="/connect">
                <Button className="bg-[#00966E] hover:bg-teal-700 w-full sm:w-auto text-white text-base sm:text-lg px-6 py-3 font-medium">
                  Consult With Us
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/csr.png"
              alt="Professional team meeting discussing CSR strategy"
              width={500}
              height={400}
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
