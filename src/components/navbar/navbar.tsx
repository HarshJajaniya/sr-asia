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
  const mobileNavLinksRef = useRef<(HTMLAnchorElement | null)[]>([]);
const desktopNavLinksRef = useRef<(HTMLAnchorElement | null)[]>([]);


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
  useEffect(() => {
    if (isSidebarOpen && sidebarRef.current && overlayRef.current) {
      gsap.fromTo(
        overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: "power2.out" }
      );

      gsap.fromTo(
        sidebarRef.current,
        { x: "-100%" },
        {
          x: "0%",
          duration: 1,
          ease: "power3.out",
          onComplete: () => {
            gsap.fromTo(
              mobileNavLinksRef.current,
              { opacity: 0, y: -20 },
              {
                opacity: 1,
                y: 0,
                stagger: 0.5,
                duration: 1,
                delay: 0.5,
                ease: "power2.out",
              }
            );
          },
        }
      );
    }
  }, [isSidebarOpen]);

  // 🟩 Animate desktop nav links on page load
  useEffect(() => {
    gsap.fromTo(
      desktopNavLinksRef.current,
      { opacity: 0, y: -20 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.5,
        duration: 1,
        ease: "power2.out",
      }
    );
  }, []);

  const linkStyle =
    "text-[#537D5D] font-bold text-[18px] leading-[100%] hover:text-[#155c35] transition-colors";

  return (
    <>
      {/* Navigation */}
      <nav className="bg-white flex items-center justify-between px-4 md:px-8 py-3 border-b border-gray-100">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/srasia_logo.png"
              alt="Sustainable Asia Logo"
              width={50}
              height={50}
              className="h-10 w-auto"
            />
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          {["About", "Our Work", "Resources", "Connect"].map((route, index) => (
            <Link
              key={route}
              href={`/${route.toLowerCase().replace(" ", "")}`}
              className={linkStyle}
         ref={(el) => { desktopNavLinksRef.current[index] = el; }}

            >
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
              <Image
                src="/srasia_logo.png"
                alt="Sustainable Asia Logo"
                width={40}
                height={40}
              />
              <button onClick={closeSidebar}>
                <X className="w-6 h-6 text-[#537D5D]" />
              </button>
            </div>
            <nav className="flex flex-col space-y-6">
              {["About", "Our Work", "Resources", "Connect"].map((route, index) => (
                <Link
                  key={route}
                  href={`/${route.toLowerCase().replace(" ", "")}`}
                  onClick={closeSidebar}
                  className={linkStyle}
                  ref={(el) => {mobileNavLinksRef.current[index] = el}} // ⬅️ Store each ref
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
