"use client";

import Link from "next/link";
import {
  Stethoscope,
  Mail,
  Phone,
  MapPin,
  ShieldCheck,
  Linkedin,
  Twitter,
  Instagram,
  Youtube,
  ArrowRight,
  Sparkles,
  Heart,
  ChevronRight,
  Award,
  Globe,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/pages/NavBar-Links/NavServices" },
    { label: "Events", href: "/pages/NavBar-Links/NavEvents" },
    { label: "Portals", href: "/pages/NavBar-Links/NavPortals" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const services = [
    "Medical Conferences",
    "Workshops & Training",
    "CME Credit Management",
    "Exhibitions & Sponsorship",
    "Virtual & Hybrid Events",
  ];

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn", color: "from-blue-600 to-blue-400" },
    { icon: Twitter, href: "#", label: "Twitter", color: "from-sky-400 to-blue-500" },
    { icon: Instagram, href: "#", label: "Instagram", color: "from-pink-500 to-purple-500" },
    { icon: Youtube, href: "#", label: "YouTube", color: "from-red-600 to-red-500" },
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* Animated Background - Matching other pages */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-900">
        {/* Floating orbs - responsive sizes */}
        <div className="absolute top-10 left-10 w-32 h-32 sm:w-72 sm:h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 sm:w-80 sm:h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 left-1/3 w-48 h-48 sm:w-96 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="mx-auto px-4 sm:px-6 lg:px-4 py-4 relative z-10">
        {/* Footer Main Glass Container - Enhanced with better glass effect */}
        <div className="rounded-2xl sm:rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-2xl overflow-hidden hover:shadow-[0_30px_60px_-15px_rgba(79,70,229,0.3)] transition-all duration-700">
          
          {/* Top gradient line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
          
          {/* Inner padding - responsive */}
          <div className="p-4 sm:p-6 md:p-8 lg:p-10 relative">
            {/* Decorative orbs inside footer - hidden on mobile */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl hidden lg:block"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl hidden lg:block"></div>

            {/* Grid - responsive layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12 relative z-10">
              {/* Brand - Full width on mobile */}
              <div className="group col-span-1 md:col-span-2 lg:col-span-1">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 blur-xl opacity-50 rounded-xl sm:rounded-2xl group-hover:opacity-70 transition-opacity duration-500"></div>
                    <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-600 via-blue-500 to-purple-600 shadow-lg group-hover:scale-110 transition-transform duration-500">
                      <Stethoscope className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
                    </div>
                  </div>

                  <div>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-white">
                      MedConf 
                      <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent ml-1">
                        KSA
                      </span>
                    </h2>
                    <p className="text-xs sm:text-sm text-gray-400 -mt-1">
                      Conferences & Exhibitions
                    </p>
                  </div>
                </div>

                <p className="mt-4 sm:mt-5 md:mt-6 text-xs sm:text-sm text-gray-300 leading-relaxed">
                  Saudi Arabia's premium platform for secure medical conferences,
                  exhibitions, CME credits, and healthcare portals.
                </p>

                {/* Enhanced trust badge with glow - responsive */}
                <div className="relative mt-4 sm:mt-5 md:mt-6 inline-block group/badge">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-lg opacity-0 group-hover/badge:opacity-50 transition-opacity duration-500"></div>
                  <div className="relative inline-flex items-center gap-1 sm:gap-2 px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl text-white text-[10px] sm:text-xs">
                    <ShieldCheck className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
                    <span className="hidden xs:inline">SCFHS & PDPL Compliant</span>
                    <span className="inline xs:hidden">Compliant</span>
                    <span className="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-white/30 rounded-full"></span>
                    <Globe className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400" />
                    <span className="hidden xs:inline">Hosted in KSA</span>
                    <span className="inline xs:hidden">KSA</span>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-white font-bold text-base sm:text-lg mb-3 sm:mb-4 md:mb-5 flex items-center gap-2">
                  <span className="w-1 h-4 sm:h-5 bg-gradient-to-b from-blue-400 to-cyan-400 rounded-full"></span>
                  Quick Links
                </h3>

                <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-300">
                  {quickLinks.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="group flex items-center gap-1 sm:gap-2 hover:text-cyan-300 transition-all"
                      >
                        <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400/50 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                        <span className="group-hover:translate-x-1 transition-transform duration-300">
                          {item.label}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services */}
              <div>
                <h3 className="text-white font-bold text-base sm:text-lg mb-3 sm:mb-4 md:mb-5 flex items-center gap-2">
                  <span className="w-1 h-4 sm:h-5 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full"></span>
                  Services
                </h3>

                <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-300">
                  {services.map((service) => (
                    <li key={service}>
                      <Link
                        href="#"
                        className="group flex items-center gap-1 sm:gap-2 hover:text-cyan-300 transition-all"
                      >
                        <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400/50 group-hover:text-purple-400 group-hover:translate-x-1 transition-all" />
                        <span className="group-hover:translate-x-1 transition-transform duration-300 truncate max-w-[150px] sm:max-w-none">
                          {service}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Newsletter & Contact */}
              <div className="md:col-span-2 lg:col-span-1">
                <h3 className="text-white font-bold text-base sm:text-lg mb-3 sm:mb-4 md:mb-5 flex items-center gap-2">
                  <span className="w-1 h-4 sm:h-5 bg-gradient-to-b from-amber-400 to-orange-400 rounded-full"></span>
                  Newsletter
                </h3>

                <p className="text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4 md:mb-5 leading-relaxed">
                  Get the latest medical summit updates, CME programs, and
                  upcoming events across Saudi Arabia.
                </p>

                {/* Enhanced newsletter input - responsive */}
                <div className="relative group/input">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl sm:rounded-2xl blur-lg opacity-0 group-hover/input:opacity-30 transition-opacity duration-500"></div>
                  <div className="relative flex flex-col xs:flex-row items-stretch xs:items-center gap-2 rounded-xl sm:rounded-2xl px-3 sm:px-4 py-2 sm:py-3 bg-black/40 border border-white/20 backdrop-blur-xl group-hover/input:border-blue-500/50 transition-all">
                    <div className="flex items-center gap-2 w-full xs:w-auto">
                      <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-300 flex-shrink-0" />
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="bg-transparent outline-none flex-1 text-xs sm:text-sm text-white placeholder:text-gray-500 min-w-0"
                      />
                    </div>
                    <button className="relative overflow-hidden px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded-lg sm:rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-xs sm:text-sm font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 group/btn w-full xs:w-auto">
                      <span className="relative z-10">Join</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-700 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                    </button>
                  </div>
                </div>

                {/* Contact info with enhanced styling - responsive */}
                <div className="mt-4 sm:mt-5 md:mt-6 space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-300">
                  <Link href="tel:+966000000000" className="flex items-center gap-2 hover:text-white transition-colors group">
                    <div className="p-1.5 sm:p-2 bg-white/5 rounded-lg border border-white/10 group-hover:bg-white/10 transition-colors">
                      <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
                    </div>
                    <span className="truncate">+966 000 000 000</span>
                  </Link>
                  <Link href="mailto:info@medconfksa.com" className="flex items-center gap-2 hover:text-white transition-colors group">
                    <div className="p-1.5 sm:p-2 bg-white/5 rounded-lg border border-white/10 group-hover:bg-white/10 transition-colors">
                      <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
                    </div>
                    <span className="truncate">info@medconfksa.com</span>
                  </Link>
                  <div className="flex items-center gap-2 group">
                    <div className="p-1.5 sm:p-2 bg-white/5 rounded-lg border border-white/10 group-hover:bg-white/10 transition-colors">
                      <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
                    </div>
                    Riyadh, Saudi Arabia
                  </div>
                </div>
              </div>
            </div>

            {/* Divider with enhanced gradient */}
            <div className="relative my-6 sm:my-8 md:my-10 lg:my-12">
              <div className="inset-0 flex items-center">
                <div className="w-full border-t border-white/10"></div>
              </div>
            </div>

            {/* Bottom - Responsive stack */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-5 md:gap-6">
              <p className="text-xs sm:text-sm text-gray-400 text-center sm:text-left flex flex-wrap items-center justify-center gap-1 sm:gap-2">
                <span>© {currentYear} MedConf KSA.</span>
                <span className="hidden xs:inline">All rights reserved.</span>
                <span className="mx-1 text-gray-600 hidden xs:inline">•</span>
                <span className="inline-flex items-center gap-1">
                  Made with <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-red-500 fill-red-500" /> in KSA
                </span>
              </p>

              {/* Social links with enhanced hover effects - responsive */}
              <div className="flex items-center gap-2 sm:gap-3">
                {socialLinks.map((social, i) => {
                  const Icon = social.icon;
                  return (
                    <Link
                      key={i}
                      href={social.href}
                      className="group relative"
                      aria-label={social.label}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-r ${social.color} rounded-lg sm:rounded-xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500`}></div>
                      <div className="relative w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 flex items-center justify-center rounded-lg sm:rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 hover:scale-110 transition-all duration-300">
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300 group-hover:text-white transition-colors" />
                      </div>
                    </Link>
                  );
                })}
              </div>

              {/* Policies with enhanced styling - responsive */}
              <div className="flex items-center gap-2 sm:gap-3 md:gap-4 text-xs sm:text-sm">
                <Link href="#" className="text-gray-400 hover:text-white transition-colors relative group whitespace-nowrap">
                  <span className="hidden xs:inline">Privacy Policy</span>
                  <span className="inline xs:hidden">Privacy</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
                </Link>
                <span className="text-gray-600">|</span>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors relative group whitespace-nowrap">
                  <span className="hidden xs:inline">Terms</span>
                  <span className="inline xs:hidden">Terms</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
                </Link>
                <span className="text-gray-600">|</span>
                <div className="relative group/badge">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-lg opacity-0 group-hover/badge:opacity-30 transition-opacity"></div>
                  <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-2 sm:px-3 py-0.5 sm:py-1">
                    <span className="text-[10px] sm:text-xs text-gray-300">PDPL</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
    </footer>
  );
}