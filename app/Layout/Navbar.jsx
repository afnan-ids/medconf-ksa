"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const navlinks = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href:"/pages/Services-Nav",
    // dropdown: [
    //   { label: "Medical Conferences", href: "#" },
    //   { label: "Workshops", href: "#" },
    //   { label: "CME Credits", href: "#" },
    //   { label: "Virtual Events", href: "/pages/Services" },
    // ],
  },
  { label: "Events", href: "#" },
  { label: "Portals", href: "/pages/Portals-Nav" },
  { label: "About", href: "#" },
  { label: "Admin Dashboard", href: "/pages/AdminDashboard" },
  { label: "Contact", href: "#" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  const dropdownRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 15);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileOpen]);

  const baseText = scrolled ? "text-gray-700" : "text-gray/90";
  const hoverText = scrolled ? "hover:text-[#0066FF]" : "hover:text-[#0066FF]";
  const hoverBg = scrolled ? "hover:bg-gray-50" : "hover:bg-white/10";

  if (!mounted) {
    return null;
  }

  const isActiveLink = (href) => {
    if (href === "/") {
      return pathname === href;
    }
    return pathname?.startsWith(href);
  };

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white backdrop-blur-xl border-b border-gray-200/60 shadow-sm text-black"
       
    >
      <div className="max-w-[1300px] mx-auto px-5">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center gap-2 group"
            aria-label="Medconf KSA Home"
          >
            <span
              className={`text-3xl font-black tracking-tight transition-colors duration-300 ${
                scrolled ? "text-gray-900" : "text-gray-900"
              }`}
            >
              Medconf
              <span className="bg-gradient-to-br from-blue-900 via-blue-600 to-purple-900 bg-clip-text text-transparent ps-2">
                KSA
              </span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div 
            className="hidden lg:flex items-center gap-1" 
            ref={dropdownRef}
          >
            {navlinks.map((link) => (
              <div key={link.label} className="relative">
                {link.dropdown ? ( 
                  <>
                    <button
                      onClick={() =>
                        setActiveDropdown(
                          activeDropdown === link.label ? null : link.label
                        )
                      }
                      onMouseEnter={() => setActiveDropdown(link.label)}
                      className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-200 flex items-center gap-2 ${
                        isActiveLink(link.href) 
                          ? scrolled 
                            ? "text-[#0066FF] bg-blue-50" 
                            : "text-gray-900 bg-white/20"
                          : `${baseText} ${hoverText} ${hoverBg}`
                      }`}
                      aria-expanded={activeDropdown === link.label}
                      aria-haspopup="true"
                    >
                      {link.label}
                      <svg
                        className={`w-4 h-4 transition-transform duration-300 ${
                          activeDropdown === link.label ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    {/* Dropdown Menu */}
                    {activeDropdown === link.label && (
                      <div 
                        className="absolute left-1/2 -translate-x-1/2 mt-2 w-[420px]"
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl animate-[fadeScale_0.25s_ease-out]">
                          {/* Gradient Background */}
                          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-600 to-purple-700" />

                          {/* Content */}
                          <div className="relative grid grid-cols-2 gap-3 p-5">
                            {link.dropdown.map((item) => (
                              <Link
                                key={item.label}
                                href={item.href}
                                className="group relative p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 transition-all duration-300 hover:bg-white/20 hover:scale-[1.03]"
                                onClick={() => setActiveDropdown(null)}
                              >
                                {/* Left Color Bar */}
                                <div className="absolute left-0 top-0 h-full w-1 bg-white opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-l-xl" />

                                <div className="text-sm font-semibold text-white">
                                  {item.label}
                                </div>

                                <div className="text-xs text-white/70 mt-1">
                                  Learn more →
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-200 inline-block ${
                      isActiveLink(link.href)
                        ? scrolled 
                          ? "text-[#0066FF] bg-blue-50" 
                          : "text-[#0066FF] bg-blue-50"
                        : `${baseText} ${hoverText} ${hoverBg}`
                    }`}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              className={`px-3 py-2 text-sm font-semibold rounded-lg transition-all duration-200 flex items-center gap-1 ${baseText} ${hoverText} ${hoverBg}`}
              aria-label="Change language"
            >
              <span>EN</span>
              <span className="text-gray-400">/</span>
              <span>AR</span>
            </button>

            <Link
              href="/signin"
              className="bg-gradient-to-br from-blue-900 via-blue-600 to-purple-900 hover:from-blue-800 hover:via-blue-500 hover:to-purple-800 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
            >
              Sign In
            </Link>

           
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 ${
              scrolled
                ? "text-gray-800 hover:bg-gray-100 focus:ring-gray-400"
                : "text-white hover:bg-white/10 focus:ring-white"
            }`}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed inset-x-0 top-20 transition-all duration-300 transform ${
            mobileOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <div className="mx-5 max-h-[calc(100vh-6rem)] overflow-y-auto">
            <div className="bg-white/95 backdrop-blur-xl rounded-2xl border border-gray-200 shadow-xl overflow-hidden">
              <div className="flex flex-col p-3">
                {navlinks.map((link) => (
                  <div key={link.label}>
                    {link.dropdown ? (
                      <>
                        <div className="px-4 py-3 text-gray-800 font-semibold">
                          {link.label}
                        </div>
                        <div className="pl-4 pb-2 space-y-1">
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.label}
                              href={item.href}
                              className="block px-4 py-2.5 text-sm text-gray-600 rounded-xl hover:bg-gray-100 hover:text-[#0066FF] transition-all"
                              onClick={() => setMobileOpen(false)}
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </>
                    ) : (
                      <Link
                        href={link.href}
                        className={`block px-4 py-3 rounded-xl font-semibold transition-all ${
                          isActiveLink(link.href)
                            ? "text-[#0066FF] bg-blue-50"
                            : "text-gray-800 hover:bg-gray-100"
                        }`}
                        onClick={() => setMobileOpen(false)}
                      >
                        {link.label}
                      </Link>
                    )}
                  </div>
                ))}

                <div className="border-t border-gray-200 my-3"></div>

                <div className="flex flex-col gap-2">
                  <button className="w-full px-4 py-3 rounded-xl font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 transition flex items-center justify-center gap-2">
                    <span>English</span>
                    <span>|</span>
                    <span>العربية</span>
                  </button>

                  <Link
                    href="/signin"
                    className="w-full px-4 py-3 rounded-xl font-semibold text-white bg-gradient-to-br from-blue-900 via-blue-600 to-purple-900 hover:from-blue-800 hover:via-blue-500 hover:to-purple-800 transition text-center"
                    onClick={() => setMobileOpen(false)}
                  >
                    Sign In
                  </Link>

                  <Link
                    href="/register"
                    className="w-full px-4 py-3 rounded-xl font-semibold text-gray-700 border border-gray-300 hover:border-[#0066FF] hover:text-[#0066FF] transition text-center"
                    onClick={() => setMobileOpen(false)}
                  >
                    Register
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Styles for animations */}
      <style jsx>{`
        @keyframes fadeScale {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(-10px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>
    </nav>
  );
}