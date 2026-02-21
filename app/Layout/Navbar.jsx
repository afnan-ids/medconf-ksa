"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const navlinks = [
  { label: "Home", href: "#" },
  {
    label: "Services",
    href: "#",
    dropdown: [
      { label: "Medical Conferences", href: "#" },
      { label: "Workshops", href: "#" },
      { label: "CME Credits", href: "#" },
      { label: "Virtual Events", href: "#" },
    ],
  },
  { label: "Events", href: "#" },
  { label: "Portals", href: "#" },
  { label: "About", href: "#" },
  { label: "Contact", href: "#" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 15);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
        setMobileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const baseText = scrolled ? "text-gray-700" : "text-white/90";
  const hoverText = scrolled ? "hover:text-[#0066FF]" : "hover:text-white";
  const hoverBg = scrolled ? "hover:bg-gray-50" : "hover:bg-white/10";

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/70 backdrop-blur-xl border-b border-gray-200/60 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1300px] mx-auto px-5">
        <div
          className="flex items-center justify-between h-20"
          ref={dropdownRef}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span
              className={`text-3xl font-black tracking-tight ${
                scrolled ? "text-gray-900" : "text-white"
              }`}
            >
              Medconf
              <span className="bg-gradient-to-br from-blue-900 via-blue-600 to-purple-900 bg-clip-text text-transparent ps-2">
                KSA
              </span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navlinks.map((link) => (
              <div key={link.label} className="relative">
                <button
                  onClick={() =>
                    link.dropdown
                      ? setActiveDropdown(
                          activeDropdown === link.label ? null : link.label,
                        )
                      : null
                  }
                  onMouseEnter={() =>
                    link.dropdown && setActiveDropdown(link.label)
                  }
                  className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-200 ${baseText} ${hoverText} ${hoverBg}`}
                >
                 <span className="flex items-center gap-2">
  {link.label}
  {link.dropdown && (
    <svg
      className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 9l-7 7-7-7"
      />
    </svg>
  )}
</span>
                </button>

                {/* Dropdown */}
                {link.dropdown && activeDropdown === link.label && (
                  <div className="absolute left-1/2 -translate-x-1/2 mt-5 w-[420px]">
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
                          >
                            {/* Left Color Bar */}
                            <div className="absolute left-0 top-0 h-full w-1 bg-white opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-l-xl" />

                            <div className="text-sm font-semibold text-white">
                              {item.label}
                            </div>

                            <div className="text-xs text-white/70 mt-1">
                              Discover more details
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              className={`px-3 py-2 text-sm font-semibold rounded-lg transition-all duration-200 ${baseText} ${hoverText} ${hoverBg}`}
            >
              EN/AR
            </button>

            <button className="bg-gradient-to-br from-blue-900 via-blue-600 to-purple-900 hover:cursor-pointer hover:bg-[#0052CC] text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg">
              Sign In
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 rounded-xl transition-all duration-200 ${
              scrolled
                ? "text-gray-800 hover:bg-gray-100"
                : "text-white hover:bg-white/10"
            }`}
          >
            {mobileOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
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
        {mobileOpen && (
          <div className="lg:hidden pb-6 animate-[fadeIn_0.2s_ease-out]">
            <div className="bg-white/90 backdrop-blur-xl rounded-2xl border border-gray-200 shadow-lg overflow-hidden">
              <div className="flex flex-col p-3">
                {navlinks.map((link) => (
                  <div key={link.label}>
                    <Link
                      href={link.href}
                      className="block px-4 py-3 rounded-xl text-gray-800 font-semibold hover:bg-gray-100 transition"
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </Link>

                    {link.dropdown && (
                      <div className="pl-4 pb-2">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            className="block px-4 py-2 text-sm text-gray-600 rounded-xl hover:bg-gray-100 hover:text-[#0066FF] transition"
                            onClick={() => setMobileOpen(false)}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                <div className="flex gap-2 mt-3">
                  <button className="flex-1 px-4 py-3 rounded-xl font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 transition">
                    EN/AR
                  </button>

                  <button className="flex-1 px-4 py-3 rounded-xl font-semibold text-white bg-[#0066FF] hover:bg-[#0052CC] transition shadow-md">
                    Sign In
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* animation */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </nav>
  );
}
