"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const navlinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/pages/Services-Nav" },
  { label: "Events", href: "#" },
  { label: "Portals", href: "/pages/Portals-Nav" },
  { label: "About", href: "#" },
  { label: "Admin Dashboard", href: "/pages/AdminDashboard" },
  { label: "Contact", href: "#" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const pathname = usePathname();
  const lastScrollY = useRef(0);

  /* ---------------- MOUNT FIX ---------------- */
  useEffect(() => {
    setMounted(true);
  }, []);

  /* ---------------- SCROLL EFFECT ---------------- */
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setScrolled(currentScroll > 20);
      lastScrollY.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ---------------- CLOSE MOBILE ON ROUTE CHANGE ---------------- */
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  /* ---------------- PREVENT BODY SCROLL WHEN MOBILE OPEN ---------------- */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileOpen]);

  if (!mounted) return null;

  /* ---------------- ACTIVE LINK ---------------- */
  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname?.startsWith(href);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1300px] mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* ---------------- LOGO ---------------- */}
          <Link
            href="/"
            className={`text-3xl font-black tracking-tight transition-all duration-500 ${
              scrolled ? "text-gray-900" : "text-white"
            }`}
          >
            Medconf
            <span className="bg-gradient-to-br from-blue-900 via-blue-600 to-purple-900 bg-clip-text text-transparent ps-2">
              KSA
            </span>
          </Link>

          {/* ---------------- DESKTOP NAV ---------------- */}
          <div className="hidden lg:flex items-center gap-2">
            {navlinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`px-4 py-2 text-sm font-semibold rounded-xl transition-all duration-300 ${
                  isActive(link.href)
                    ? "text-[#0066FF] bg-blue-50"
                    : scrolled
                    ? "text-gray-700 hover:text-[#0066FF] hover:bg-gray-100"
                    : "text-white hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* ---------------- DESKTOP BUTTONS ---------------- */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/signin"
              className="bg-gradient-to-br from-blue-900 via-blue-600 to-purple-900 hover:from-blue-800 hover:via-blue-500 hover:to-purple-800 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all duration-300 shadow-md hover:shadow-xl hover:scale-105"
            >
              Sign In
            </Link>
          </div>

          {/* ---------------- MOBILE MENU BUTTON ---------------- */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 rounded-lg transition ${
              scrolled
                ? "text-gray-800"
                : "text-white"
            }`}
            aria-label="Toggle Menu"
          >
            {mobileOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
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
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* ---------------- MOBILE MENU ---------------- */}
      <div
        className={`lg:hidden fixed inset-x-0 top-20 transition-all duration-500 ${
          mobileOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="mx-6 bg-white rounded-2xl shadow-xl p-4 space-y-2">
          {navlinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`block px-4 py-3 rounded-xl font-semibold transition ${
                isActive(link.href)
                  ? "text-[#0066FF] bg-blue-50"
                  : "text-gray-800 hover:bg-gray-100"
              }`}
            >
              {link.label}
            </Link>
          ))}

          <div className="border-t pt-3">
            <Link
              href="/signin"
              onClick={() => setMobileOpen(false)}
              className="block w-full text-center px-4 py-3 rounded-xl font-semibold text-white bg-gradient-to-br from-blue-900 via-blue-600 to-purple-900"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>

      {/* ---------------- OVERLAY ---------------- */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </nav>
  );
}