'use client';

import { useState, useRef } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import gsap from "gsap";

// Submenus
const AboutSubmenu = [
  { label: "Who we are", href: "/about/who-we-are" },
  { label: "What we do", href: "/about/what-we-do" },
  { label: "Our Mission & Vision", href: "/about/our-mission-vision" },
  { label: "Certification & Monitoring", href: "/about/certification-monitoring" },
  { label: "Team", href: "/about/team" },
  { label: "Why Choose us", href: "/about/why-choose-us" },
];

const servicesSubmenu = [
  { label: "Assurance Services", href: "/services/assurance" },
  { label: "Reporting Services", href: "/services/reporting" },
  { label: "CSR Project Management", href: "/services/csr" },
  { label: "Monitoring & Evaluation", href: "/services/monitoring" },
  { label: "Impact Assessment", href: "/services/impact" },
  { label: "Survey", href: "/services/survey" },
  { label: "Project Implementation", href: "/services/project" },
];

const reportSubmenu = [
  { label: "NSE", href: "/report/nse" },
  { label: "Dabur", href: "/report/dabur" },
  { label: "Nayra", href: "/report/nayra" },
  { label: "SEWA-THDC", href: "/report/sewa-thdc" },
  { label: "SEIL", href: "/report/seil" },
  { label: "Etc", href: "/report/etc" },
];

const mediaSubmenu = [
  { label: "Blogs & Articles", href: "/media/blogs" },
  { label: "Conference", href: "/media/conference" },
  { label: "Webinar", href: "/media/webinar" },
];

const careersSubmenu = [
  { label: "Current Opening", href: "/careers/current-opening" },
  { label: "Internship", href: "/careers/internship" },
  { label: "Volunteer", href: "/careers/volunteer" },
  { label: "Empanelment", href: "/careers/empanelment" },
];

const navItems = [
  { label: "ABOUT", href: "/about" },
  { label: "SERVICES", href: "/services" },
  { label: "REPORT", href: "/report" },
  { label: "MEDIA", href: "/media" },
  
  { label: "CONNECT", href: "/connect" },
];

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

  const linkStyle =
    "text-[#14444D] font-bold text-[18px] leading-[100%] transition-colors";

  return (
    <>
      {/* Desktop Navbar */}
      <div className="relative group">
        <nav className="bg-[#EEFAFE] flex items-center justify-center px-4 md:px-8 py-3 border-b border-gray-100 z-50">
          <div className="p-4 hidden md:flex space-x-10">
            {navItems.map((item, index) => (
              <Link key={index} href={item.href} className={linkStyle}>
                {item.label}
              </Link>
            ))}
          </div>
          {/* Mobile Menu Button */}
          <button
            onClick={toggleSidebar}
            className="md:hidden text-[#14444D] focus:outline-none"
          >
            <Menu className="w-6 h-6" />
          </button>
        </nav>

        {/* Full Width Dropdown on Hover */}
        <div className="absolute left-0 w-full hidden group-hover:flex bg-[#EEFAFE] border-t shadow-lg z-40 py-6 px-10">
          <div className="max-w-7xl w-full mx-auto grid grid-cols-5 gap-8">
            {/* ABOUT */}
            <div>
              <h3 className="text-lg font-semibold text-[#14444D] mb-2">About</h3>
              <ul className="space-y-2">
                {AboutSubmenu.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      href={item.href}
                      className="text-gray-700 hover:text-blue-600 block text-sm"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* SERVICES */}
            <div>
              <h3 className="text-lg font-semibold text-[#14444D] mb-2">Services</h3>
              <ul className="space-y-2">
                {servicesSubmenu.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      href={item.href}
                      className="text-gray-700 hover:text-blue-600 block text-sm"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* REPORT */}
            <div>
              <h3 className="text-lg font-semibold text-[#14444D] mb-2">Reports</h3>
              <ul className="space-y-2">
                {reportSubmenu.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      href={item.href}
                      className="text-gray-700 hover:text-blue-600 block text-sm"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* MEDIA */}
            <div>
              <h3 className="text-lg font-semibold text-[#14444D] mb-2">Media</h3>
              <ul className="space-y-2">
                {mediaSubmenu.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      href={item.href}
                      className="text-gray-700 block text-sm"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* CAREERS */}
            <div>
              <h3 className="text-lg font-semibold text-[#14444D] mb-2">Connect</h3>
              <ul className="space-y-2">
                {careersSubmenu.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      href={item.href}
                      className="text-gray-700 hover:text-blue-600 block text-sm"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
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
              {navItems.map((item, index) => (
                <div key={index}>
                  <Link
                    href={item.href}
                    onClick={closeSidebar}
                    className={linkStyle}
                  >
                    {item.label}
                  </Link>
                  {/* Mobile submenus */}
                  {item.label === "ABOUT" && (
                    <ul className="ml-4 mt-2 space-y-2">
                      {AboutSubmenu.map((sub, subIdx) => (
                        <li key={subIdx}>
                          <Link
                            href={sub.href}
                            onClick={closeSidebar}
                            className="text-sm text-gray-700 hover:text-blue-600"
                          >
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                  {item.label === "SERVICES" && (
                    <ul className="ml-4 mt-2 space-y-2">
                      {servicesSubmenu.map((sub, subIdx) => (
                        <li key={subIdx}>
                          <Link
                            href={sub.href}
                            onClick={closeSidebar}
                            className="text-sm text-gray-700 hover:text-blue-600"
                          >
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                  {item.label === "REPORT" && (
                    <ul className="ml-4 mt-2 space-y-2">
                      {reportSubmenu.map((sub, subIdx) => (
                        <li key={subIdx}>
                          <Link
                            href={sub.href}
                            onClick={closeSidebar}
                            className="text-sm text-gray-700 hover:text-blue-600"
                          >
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                  {item.label === "MEDIA" && (
                    <ul className="ml-4 mt-2 space-y-2">
                      {mediaSubmenu.map((sub, subIdx) => (
                        <li key={subIdx}>
                          <Link
                            href={sub.href}
                            onClick={closeSidebar}
                            className="text-sm text-gray-700 hover:text-blue-600"
                          >
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                  {item.label === "CAREERS" && (
                    <ul className="ml-4 mt-2 space-y-2">
                      {careersSubmenu.map((sub, subIdx) => (
                        <li key={subIdx}>
                          <Link
                            href={sub.href}
                            onClick={closeSidebar}
                            className="text-sm text-gray-700 hover:text-blue-600"
                          >
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
