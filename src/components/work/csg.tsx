import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CSRConsultingPage() {
  return (
    <div className="min-h-screen bg-[#FDFCD6]">
      

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div>
               <div className="flex items-center mb-8">
      <div className="h-px bg-[#537D5D] w-5 md:w-14"></div>
      <div className="w-10 h-3 md:w-4 md:h-4 rounded-lg bg-[#537D5D]"></div>
       <h2 className="text-xl w-100 md:text-2xl font-bold text-[#537D5D] ml-4">CSR Consulting & Impact Assessment</h2>
          </div>
              <p className="px-8 text-gray-700 leading-relaxed mb-6">
                <span className="font-semibold">Strategic CSR That Delivers Measurable Impact.</span>
              </p>

              <p className="px-8 text-gray-700 leading-relaxed mb-8">
                We help organizations plan, implement, and evaluate CSR projects that make a real difference. From
                policy formulation to impact reporting, we ensure your CSR investments are meaningful, compliant, and
                aligned with India's Companies Act and global sustainability goals.
              </p>
            </div>

            {/* Key Services Section */}
            <div className="px-8">
              <h2 className=" text-xl font-semibold text-[#537D5D] mb-4">Key Services</h2>

              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">•</span>
                  CSR strategy & policy support
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">•</span>
                  Project planning and design
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">•</span>
                  Third-party evaluations
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">•</span>
                  Impact and financial assessments
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">•</span>
                  CSR reporting and documentation
                </li>
              </ul>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Link href="/connect">
                <Button className="bg-[#00966E] hover:bg-teal-700 w-lg h-10 pl-8 text-white px-8 py-3 text-xl font-large">
                  Consult With Us
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column - Image */}
        
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/csr.png"
                alt="Professional team meeting discussing CSR strategy"
                width={500}
                height={400}
                className="w-3/4 h-70 rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
  
  )
}
