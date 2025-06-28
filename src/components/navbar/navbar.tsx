'use client';

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import gsap from "gsap";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);
  const overlayRef = useRef(null);



  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const closeSidebar = () => {
    if (sidebarRef.current && overlayRef.current) {
      gsap.to(sidebarRef.current, {
        x: "-100%",
        duration: 1,
        ease: "power2.in",
      });
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 1,
        ease: "power2.in",
        onComplete: () => setIsSidebarOpen(false),
      });
    } else {
      setIsSidebarOpen(false);
    }
  };

  // 🟩 Animate sidebar nav links when opened


  // 🟩 Animate desktop nav links on page load


  const linkStyle =
    "text-[#14444D] font-bold text-[18px] leading-[100%] hover:text-blue-700 transition-colors";

  return (
    <>
      {/* Navigation */}
      <nav className="relative bg-[#EEFAFE] flex items-center justify-center px-4 md:px-8 py-3 border-b border-gray-100">
  {/* Desktop Links */}
  <div className="p-4 hidden md:flex space-x-10">
    {["About","Services", "Our Work", "Resources", "Connect"].map((route, index) => (
      <Link
        key={route}
        href={`/${route.toLowerCase().replace(" ", "")}`}
        className={linkStyle}
        
      >
        {route}
      </Link>
    ))}
  </div>

  {/* Hamburger Icon */}
  <button onClick={toggleSidebar} className="md:hidden text-[#14444D] focus:outline-none">
    <Menu className="w-6 h-6" />
  </button>
</nav>


      {/* Sidebar for Mobile */}
      {isSidebarOpen && (
        <div
          ref={overlayRef}
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={closeSidebar}
        >
          <div
            ref={sidebarRef}
            className="fixed top-0 left-0 w-64 h-full bg-white shadow-md p-6 z-50"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <button onClick={closeSidebar}>
                <X className="w-6 h-6 text-[#14444D]" />
              </button>
            </div>
            <nav className="flex flex-col space-y-6">
              {["About","Services", "Our Work", "Resources", "Connect"].map((route, index) => (
                <Link
                  key={route}
                  href={`/${route.toLowerCase().replace(" ", "")}`}
                  onClick={closeSidebar}
                  className={linkStyle}
                 // ⬅️ Store each ref
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
