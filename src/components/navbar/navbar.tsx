'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  const linkStyle =
    "text-[#537D5D] font-bold text-[18px] leading-[100%] hover:text-[#155c35] transition-colors";

  return (
    <>
      {/* Navigation */}
      <nav className="bg-white flex items-center justify-between px-4 md:px-8 py-3 border-b border-gray-100">
        <div className="flex items-center">
          <Link href="/">
            <Image src="/srasia_logo.png" alt="Sustainable Asia Logo" width={50} height={50} className="h-10 w-auto" />
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          {["About", "Our Work", "Resources", "Connect"].map((route) => (
            <Link key={route} href={`/${route.toLowerCase().replace(" ", "")}`} className={linkStyle}>
              {route}
            </Link>
          ))}
        </div>

        {/* Hamburger Icon */}
        <button onClick={toggleSidebar} className="md:hidden text-[#537D5D] focus:outline-none">
          <Menu className="w-6 h-6" />
        </button>
      </nav>

      {/* Sidebar for Mobile */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={closeSidebar}>
          <div
            className="fixed top-0 left-0 w-64 h-full bg-white shadow-md p-6 z-50"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <Image src="/srasia_logo.png" alt="Sustainable Asia Logo" width={40} height={40} />
              <button onClick={closeSidebar}>
                <X className="w-6 h-6 text-[#537D5D]" />
              </button>
            </div>
            <nav className="flex flex-col space-y-6">
              {["About", "Our Work", "Resources", "Connect"].map((route) => (
                <Link
                  key={route}
                  href={`/${route.toLowerCase().replace(" ", "")}`}
                  onClick={closeSidebar}
                  className={linkStyle}
                >
                  {route}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
