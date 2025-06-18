import Link from "next/link"
import Image from "next/image"
import { MapPin, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Allianz Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
             <Image
                src="/srasia_logo.png"
                alt="SR Asia Logo"
                className="w-16 h-16"
                width={58}
                height={58}
              />
              <span className="text-2xl p-4 font-bold text-[#14444D]">SR Asia</span>
            </Link>
          </div>

          {/* Navigation Items */}
          <div className="flex items-center space-x-6">
            {/* Allianz Contacts */}
            <Link
              href="/contacts"
              className="flex items-center space-x-2 text-[#14444D] hover:text-blue-700 transition-colors"
            >
              <MapPin className="w-4 h-4" />
              <span className="font-medium">Allianz Contacts</span>
            </Link>

            {/* Language Selector */}
            <div className="flex items-center space-x-2">
              <Globe className="w-4 h-4 text-[#14444D]" />
              <div className="flex items-center space-x-1">
                <button className="px-2 py-1 text-[#14444D] font-medium hover:bg-blue-50 rounded transition-colors">
                  EN
                </button>
                <button className="px-2 py-1 text-[#14444D] font-medium hover:bg-blue-50 rounded transition-colors">
                  DE
                </button>
              </div>
            </div>

            {/* Products & Services Button */}
            <Button
              variant="outline"
              className="border-[#14444D] text-[#14444D] hover:bg-blue-50 hover:text-blue-700 hover:border-blue-700 font-medium"
            >
              Products & Services
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
