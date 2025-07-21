'use client';

import { useState, useRef } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import gsap from "gsap";

// Submenus
const HomeSubmenu = [
  { label: "Who we are", href: "/" },
  
  { label: "Our Mission & Vision", href: "/" },
  { label: "Approach", href: "/" },
  { label: "Footprints", href: "/" },
  { label: "Insights", href: "/" },
];
const AboutSubmenu = [
  { label: "Who we are", href: "/about" },
  { label: "What we do", href: "/about" },
  { label: "Our Mission & Vision", href: "/about" },
  { label: "Certification & Monitoring", href: "/about" },
  { label: "Team", href: "/about" },
  { label: "Why Choose us", href: "/about" },
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
  { label: "NSE", href: "/report" },
  { label: "Dabur", href: "/report" },
  { label: "Nayra", href: "/report" },
  { label: "SEWA-THDC", href: "/report" },
  { label: "SEIL", href: "/report" },
  { label: "Etc", href: "/report" },
];

const mediaSubmenu = [
  { label: "Blogs & Articles", href: "/media" },
  { label: "Conference", href: "/media" },
  { label: "Webinar", href: "/media" },
];

const careersSubmenu = [
  { label: "Current Opening", href: "/career" },
  { label: "Internship", href: "/career" },
  { label: "Volunteer", href: "/career" },
  { label: "Empanelment", href: "/career" },
];
const networkSubmenu = [
  { label: "Country Network", href: "/network" },
  { label: "Institutional", href: "/network" },
  { label: "Industrial", href: "/network" },
  { label: "Membership", href: "/network" },
  { label: "Partners", href: "/network" },
];

const navItems = [
  { label: "HOME", href: "/" },
  { label: "ABOUT", href: "/about" },
  { label: "SERVICES", href: "/services/assurance" },
  { label: "PROJECTS", href: "/report" },
  { label: "NETWORK", href: "/network" },
  { label: "EVENTS", href: "/media" },
  { label: "CAREERS", href: "/career" },
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
     <div className="bg-[#EEFAFE] border-b border-gray-100 z-50">
  <nav className="flex items-center justify-center px-4 md:px-8 py-3">
    <div className="p-4 hidden md:flex space-x-10 relative z-50">
  {navItems.map((item, index) => {
    const submenu =
      item.label === "HOME" ? HomeSubmenu :
      item.label === "ABOUT" ? AboutSubmenu :
      item.label === "SERVICES" ? servicesSubmenu :
      item.label === "PROJECTS" ? reportSubmenu :
      item.label === "NETWORK" ? networkSubmenu :
      item.label === "EVENTS" ? mediaSubmenu :
      item.label === "CAREERS" ? careersSubmenu :
      null;

    return (
      <div key={index} className="relative group">
        <Link
          href={item.href}
          className="text-[#14444D] font-bold text-[18px] leading-[100%] transition-colors"
        >
          {item.label}
        </Link>

        {/* Submenu */}
        {submenu && (
          <div className="absolute top-full left-0 mt-2 bg-[#EEFAFE] border rounded-md shadow-md p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-[250px] z-50">
            <ul className="space-y-2">
              {submenu.map((sub, idx) => (
                <li key={idx}>
                  <Link
                    href={sub.href}
                    className="text-xl text-gray-700 hover:text-blue-600 block"
                  >
                    {sub.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  })}
</div>


    {/* Mobile menu button */}
    <button
      onClick={toggleSidebar}
      className="md:hidden text-[#14444D] focus:outline-none"
    >
      <Menu className="w-6 h-6" />
    </button>
  </nav>
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
