import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function AboutUsSection() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 bg-gray-50">
      {/* About Us Header */}
      <div className="flex items-center mb-8">
        <div className="w-4 h-4 rounded-full bg-green-800"></div>
        <div className="h-px bg-green-800 w-44"></div>
        <h2 className="text-2xl font-bold text-green-800 ml-4">About Us</h2>
      </div>

      {/* About Us Content */}
      <div className="flex flex-col md:flex-row gap-8 mb-16">
        <div className="md:w-1/3 flex justify-center">
          <Image
            src="/sr-asia-logo.png"
            alt="SR Asia Logo"
            width={220}
            height={220}
            className="object-contain"
          />
        </div>
        <div className="md:w-2/3">
          <p className="text-gray-700 mb-4 leading-relaxed">
            We are an international, not-for-profit organization registered in 2012 and ISO 9001 certified. SR Asia is a
            leading consulting firm with expertise in CSR impact assessment, ESG and sustainability reporting,
            socio-economic studies, and policy research. With over 10 years of experience, we have supported
            corporations, public sector units (PSUs), and government bodies in evaluating the effectiveness of their CSR
            initiatives.
          </p>
          <div className="flex justify-end">
            <Link href="#" className="text-blue-600 font-medium flex items-center hover:underline">
              Read more <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Countries Section */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl font-bold text-green-800">Countries We Operate in</h2>
          <div className="flex items-center">
            <div className="w-4 h-4 rounded-full bg-green-800"></div>
            <div className="h-px bg-green-800 w-44 ml-2"></div>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 justify-items-center">
          {/* India */}
          <div className="flex flex-col items-center">
            <div className="w-24 h-16 overflow-hidden rounded-lg mb-2">
              <Image
                src="/flags/india.png"
                alt="India Flag"
                width={96}
                height={64}
                className="object-cover w-full h-full"
              />
            </div>
            <span className="text-gray-700">India</span>
          </div>

          {/* Philippine */}
          <div className="flex flex-col items-center">
            <div className="w-24 h-16 overflow-hidden rounded-lg mb-2">
              <Image
                src="/flags/philipines.png"
                alt="Philippine Flag"
                width={96}
                height={64}
                className="object-cover w-full h-full"
              />
            </div>
            <span className="text-gray-700">Philippine</span>
          </div>

          {/* Vietnam */}
          <div className="flex flex-col items-center">
            <div className="w-24 h-16 overflow-hidden rounded-lg mb-2">
              <Image
                src="/flags/vietnam.png"
                alt="Vietnam Flag"
                width={96}
                height={64}
                className="object-cover w-full h-full"
              />
            </div>
            <span className="text-gray-700">Vietnam</span>
          </div>

          {/* Malaysia */}
          <div className="flex flex-col items-center">
            <div className="w-24 h-16 overflow-hidden rounded-lg mb-2">
              <Image
                src="/flags/malayasia.png"
                alt="Malaysia Flag"
                width={96}
                height={64}
                className="object-cover w-full h-full"
              />
            </div>
            <span className="text-gray-700">Malaysia</span>
          </div>

          {/* Indonesia */}
          <div className="flex flex-col items-center">
            <div className="w-24 h-16 overflow-hidden rounded-lg mb-2">
              <Image
                src="/flags/indonesia.png"
                alt="Indonesia Flag"
                width={96}
                height={64}
                className="object-cover w-full h-full"
              />
            </div>
            <span className="text-gray-700">Indonesia</span>
          </div>

          {/* Bangladesh */}
          <div className="flex flex-col items-center">
            <div className="w-24 h-16 overflow-hidden rounded-lg mb-2">
              <Image
                src="/flags/bangladesh.png"
                alt="Bangladesh Flag"
                width={96}
                height={64}
                className="object-cover w-full h-full"
              />
            </div>
            <span className="text-gray-700">Bangladesh</span>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full max-w-md mx-auto h-px bg-gray-300"></div>
    </div>
  )
}
