"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { MapPin, Globe, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="w-full bg-gray-100 border-b border-gray-200">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/flags/8.jpg"
                alt="SR Asia Logo"
                className="w-12 h-12 md:w-16 md:h-16"
                width={64}
                height={64}
              />
              <span className="text-xl md:text-2xl p-2 md:p-4 font-bold text-[#14444D]">SR Asia</span>
            </Link>
          </div>

          {/* Hamburger Button */}
          <button
            className="md:hidden text-[#14444D]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="/contacts"
              className="flex items-center space-x-2 text-[#14444D] hover:text-blue-700 transition-colors"
            >
              <MapPin className="w-4 h-4" />
              <span className="font-medium">SR Asia Contacts</span>
            </Link>

            <div className="flex items-center space-x-2">
              <Globe className="w-4 h-4 text-[#14444D]" />
              <div className="flex items-center space-x-1">
                <button className="px-2 py-1 text-[#14444D] font-medium hover:bg-blue-50 rounded transition-colors">
                  EN/
                </button>
                <button className="px-2 py-1 text-[#14444D] font-medium hover:bg-blue-50 rounded transition-colors">
                  DE
                </button>
              </div>
            </div>

            <Button
              variant="outline"
              className="border-[#14444D] text-[#14444D] hover:bg-blue-50 hover:text-blue-700 hover:border-blue-700 font-medium"
            ><a href="/services">
              Products & Services
              </a>
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <Link
              href="/contacts"
              className="flex items-center space-x-2 text-[#14444D] hover:text-blue-700 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <MapPin className="w-4 h-4" />
              <span className="font-medium">SR Asia Contacts</span>
            </Link>

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

            <Button
              variant="outline"
              className="w-full border-[#14444D] text-[#14444D] hover:bg-blue-50 hover:text-blue-700 hover:border-blue-700 font-medium"
            >
              Products & Services
            </Button>
          </div>
        )}
      </div>
    </header>
  )
}
