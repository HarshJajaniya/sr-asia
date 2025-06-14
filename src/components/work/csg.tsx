import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CSRConsultingPage() {
  return (
    <div className="min-h-screen bg-[#FDFCD6]">
      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-6 py-10 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-start">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            {/* Heading */}
            <div>
              <div className="flex items-center mb-6 md:mb-8">
                <div className="h-px bg-[#537D5D] w-5 md:w-14"></div>
                <div className="w-3 h-3 md:w-4 md:h-4 rounded-lg bg-[#537D5D] ml-2"></div>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#537D5D] ml-4">
                  CSR Consulting & Impact Assessment
                </h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4 md:mb-6 px-1 sm:px-4">
                <span className="font-semibold">Strategic CSR That Delivers Measurable Impact.</span>
              </p>

              <p className="text-gray-700 leading-relaxed px-1 sm:px-4 mb-6 md:mb-8">
                We help organizations plan, implement, and evaluate CSR projects that make a real difference. From
                policy formulation to impact reporting, we ensure your CSR investments are meaningful, compliant, and
                aligned with India's Companies Act and global sustainability goals.
              </p>
            </div>

            {/* Key Services */}
            <div className="px-1 sm:px-4">
              <h2 className="text-lg md:text-xl font-semibold text-[#537D5D] mb-3">Key Services</h2>

              <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
                {[
                  "CSR strategy & policy support",
                  "Project planning and design",
                  "Third-party evaluations",
                  "Impact and financial assessments",
                  "CSR reporting and documentation",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-teal-600 mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Button */}
            <div className="pt-2 px-1 sm:px-4">
              <Link href="/connect">
                <Button className="bg-[#00966E] hover:bg-teal-700 w-full sm:w-auto h-10 text-white px-6 py-2 text-base sm:text-lg">
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
