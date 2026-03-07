"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Shield, Sparkles, LogIn } from "lucide-react";

const navlinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/pages/NavBar-Links/NavServices" },
  { label: "Events", href: "/pages/NavBar-Links/NavEvents" },
  { label: "Portals", href: "/pages/NavBar-Links/NavPortals" },
  { label: "About", href: "/pages/AboutUs" },
  { label: "Admin Dashboard", href: "/pages/AdminDashboard" },
  { label: "Contact", href: "/pages/ContactUs" },
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
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
          scrolled
            ? "bg-gray-900/95 backdrop-blur-xl border-b border-white/10 shadow-2xl"
            : "bg-transparent"
        }`}
      >
        {/* Gradient line at bottom when scrolled */}
        {scrolled && (
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
        )}

        <div className="max-w-[1300px] mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* ---------------- LOGO ---------------- */}
            <Link
              href="/"
              className="group relative"
            >
              {/* Glow effect on hover */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              
              <span className={`relative text-3xl font-black tracking-tight transition-all duration-500 ${
                scrolled ? "text-white" : "text-white"
              }`}>
                Medconf
                <span
                  className="
                  bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 
                  bg-clip-text text-transparent stroke-text
                  ml-1
                  "
                >
                  KSA
                </span>
              </span>
            </Link>

            {/* ---------------- DESKTOP NAV ---------------- */}
            <div className="hidden lg:flex items-center gap-1">
              {navlinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-semibold rounded-xl transition-all duration-300 group ${
                    isActive(link.href)
                      ? "text-blue-400"
                      : scrolled
                        ? "text-gray-300 hover:text-white"
                        : "text-gray-200 hover:text-white"
                  }`}
                >
                  {/* Active indicator */}
                  {isActive(link.href) && (
                    <span className="absolute inset-0 bg-blue-500/10 rounded-xl border border-blue-500/30"></span>
                  )}
                  
                  {/* Hover background */}
                  <span className={`absolute inset-0 rounded-xl transition-opacity duration-300 ${
                    scrolled 
                      ? "bg-white/5 opacity-0 group-hover:opacity-100" 
                      : "bg-white/10 opacity-0 group-hover:opacity-100"
                  }`}></span>
                  
                  {/* Text */}
                  <span className="relative z-10">{link.label}</span>
                  
                  {/* Bottom dot for active */}
                  {isActive(link.href) && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-400 rounded-full"></span>
                  )}
                </Link>
              ))}
            </div>

            {/* ---------------- DESKTOP BUTTONS ---------------- */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/signin"
                className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2.5 rounded-xl font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/25 hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <LogIn className="w-4 h-4" />
                  Sign In
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
              </Link>
            </div>

            {/* ---------------- MOBILE MENU BUTTON ---------------- */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 rounded-lg transition-all duration-300 ${
                scrolled 
                  ? "text-white bg-white/10 hover:bg-white/20" 
                  : "text-white bg-white/10 hover:bg-white/20"
              }`}
              aria-label="Toggle Menu"
            >
              {mobileOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Gradient line animation on scroll */}
        {scrolled && (
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
        )}
      </nav>

      {/* ---------------- MOBILE MENU ---------------- */}
      <div
        className={`lg:hidden fixed inset-x-0 top-20 z-50 transition-all duration-500 ${
          mobileOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="mx-6">
          {/* Glass morphism menu */}
          <div className="relative overflow-hidden bg-gray-900/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl">
            {/* Gradient orbs */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"></div>
            
            <div className="relative p-4 space-y-2">
              {navlinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-4 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    isActive(link.href)
                      ? "text-blue-400 bg-blue-500/10 border border-blue-500/30"
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <span>{link.label}</span>
                  </span>
                </Link>
              ))}

              {/* Divider with gradient */}
              <div className="relative my-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/10"></div>
                </div>
              </div>

              {/* Mobile Sign In button */}
              <Link
                href="/signin"
                onClick={() => setMobileOpen(false)}
                className="group relative overflow-hidden block w-full text-center px-4 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:shadow-xl transition-all duration-300"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <LogIn className="w-4 h-4" />
                  Sign In
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ---------------- OVERLAY ---------------- */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </>
  );
}