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
        {/* Floating orbs */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        
        {/* Grid pattern */}
      </div>

      <div className="mx-auto px-6 lg:px-4 py-4 relative z-10">
        {/* Footer Main Glass Container - Enhanced with better glass effect */}
        <div className="rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-2xl overflow-hidden hover:shadow-[0_30px_60px_-15px_rgba(79,70,229,0.3)] transition-all duration-700">
          
          {/* Top gradient line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
          
          {/* Inner padding */}
          <div className="p-10 lg:p-10 relative">
            {/* Decorative orbs inside footer */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>

            <div className="grid lg:grid-cols-4 gap-12 relative z-10">
              {/* Brand - Enhanced */}
              <div className="group">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 blur-xl opacity-50 rounded-2xl group-hover:opacity-70 transition-opacity duration-500" />
                    <div className="relative w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 via-blue-500 to-purple-600 shadow-lg group-hover:scale-110 transition-transform duration-500">
                      <Stethoscope className="w-7 h-7 text-white" />
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-extrabold text-white">
                      MedConf 
                      <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent ml-1">
                        KSA
                      </span>
                    </h2>
                    <p className="text-sm text-gray-400 -mt-1">
                      Conferences & Exhibitions
                    </p>
                  </div>
                </div>

                <p className="mt-6 text-sm text-gray-300 leading-relaxed">
                  Saudi Arabia's premium platform for secure medical conferences,
                  exhibitions, CME credits, and healthcare portals.
                </p>

                {/* Enhanced trust badge with glow */}
                <div className="relative mt-6 inline-block group/badge">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-lg opacity-0 group-hover/badge:opacity-50 transition-opacity duration-500"></div>
                  <div className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl text-white text-xs">
                    <ShieldCheck className="w-4 h-4 text-blue-400" />
                    <span>SCFHS & PDPL Compliant</span>
                    <span className="w-1 h-1 bg-white/30 rounded-full"></span>
                    <Globe className="w-4 h-4 text-cyan-400" />
                    <span>Hosted in KSA</span>
                  </div>
                </div>
              </div>

              {/* Quick Links - Enhanced with icons */}
              <div>
                <h3 className="text-white font-bold text-lg mb-5 flex items-center gap-2">
                  <span className="w-1 h-5 bg-gradient-to-b from-blue-400 to-cyan-400 rounded-full"></span>
                  Quick Links
                </h3>

                <ul className="space-y-3 text-gray-300 text-sm">
                  {quickLinks.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="group flex items-center gap-2 hover:text-cyan-300 transition-all"
                      >
                        <ChevronRight className="w-4 h-4 text-blue-400/50 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                        <span className="group-hover:translate-x-1 transition-transform duration-300">
                          {item.label}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services - Enhanced with arrow animation */}
              <div>
                <h3 className="text-white font-bold text-lg mb-5 flex items-center gap-2">
                  <span className="w-1 h-5 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full"></span>
                  Services
                </h3>

                <ul className="space-y-3 text-gray-300 text-sm">
                  {services.map((service) => (
                    <li key={service}>
                      <Link
                        href="#"
                        className="group flex items-center gap-2 hover:text-cyan-300 transition-all"
                      >
                        <ArrowRight className="w-4 h-4 text-purple-400/50 group-hover:text-purple-400 group-hover:translate-x-1 transition-all" />
                        <span className="group-hover:translate-x-1 transition-transform duration-300">
                          {service}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Newsletter & Contact - Enhanced */}
              <div>
                <h3 className="text-white font-bold text-lg mb-5 flex items-center gap-2">
                  <span className="w-1 h-5 bg-gradient-to-b from-amber-400 to-orange-400 rounded-full"></span>
                  Newsletter
                </h3>

                <p className="text-gray-300 text-sm mb-5 leading-relaxed">
                  Get the latest medical summit updates, CME programs, and
                  upcoming events across Saudi Arabia.
                </p>

                {/* Enhanced newsletter input */}
                <div className="relative group/input">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur-lg opacity-0 group-hover/input:opacity-30 transition-opacity duration-500"></div>
                  <div className="relative flex items-center gap-2 rounded-2xl px-4 py-3 bg-black/40 border border-white/20 backdrop-blur-xl group-hover/input:border-blue-500/50 transition-all">
                    <Mail className="w-5 h-5 text-cyan-300" />
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="bg-transparent outline-none flex-1 text-sm text-white placeholder:text-gray-500"
                    />
                    <button className="relative overflow-hidden px-5 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-sm font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 group/btn">
                      <span className="relative z-10">Join</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-700 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                    </button>
                  </div>
                </div>

                {/* Contact info with enhanced styling */}
                <div className="mt-6 space-y-3 text-sm text-gray-300">
                  <Link href="tel:+966000000000" className="flex items-center gap-2 hover:text-white transition-colors group">
                    <div className="p-2 bg-white/5 rounded-lg border border-white/10 group-hover:bg-white/10 transition-colors">
                      <Phone className="w-4 h-4 text-blue-400" />
                    </div>
                    +966 000 000 000
                  </Link>
                  <Link href="mailto:info@medconfksa.com" className="flex items-center gap-2 hover:text-white transition-colors group">
                    <div className="p-2 bg-white/5 rounded-lg border border-white/10 group-hover:bg-white/10 transition-colors">
                      <Mail className="w-4 h-4 text-blue-400" />
                    </div>
                    info@medconfksa.com
                  </Link>
                  <div className="flex items-center gap-2 group">
                    <div className="p-2 bg-white/5 rounded-lg border border-white/10 group-hover:bg-white/10 transition-colors">
                      <MapPin className="w-4 h-4 text-blue-400" />
                    </div>
                    Riyadh, Saudi Arabia
                  </div>
                </div>
              </div>
            </div>

            {/* Divider with enhanced gradient */}
            <div className="relative my-12">
              <div className=" inset-0 flex items-center">
                <div className="w-full border-t border-white/10"></div>
              </div>
            </div>

            {/* Bottom - Enhanced */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <p className="text-sm text-gray-400 text-center md:text-left flex items-center gap-2">
                © {currentYear} MedConf KSA. All rights reserved.
                <span className="mx-2 text-gray-600">•</span>
                <span className="inline-flex items-center gap-1">
                  Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> in KSA
                </span>
              </p>

              {/* Social links with enhanced hover effects */}
              <div className="flex items-center gap-3">
                {socialLinks.map((social, i) => {
                  const Icon = social.icon;
                  return (
                    <Link
                      key={i}
                      href={social.href}
                      className="group relative"
                      aria-label={social.label}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-r ${social.color} rounded-xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500`}></div>
                      <div className="relative w-10 h-10 flex items-center justify-center rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 hover:scale-110 transition-all duration-300">
                        <Icon className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
                      </div>
                    </Link>
                  );
                })}
              </div>

              {/* Policies with enhanced styling */}
              <div className="flex items-center gap-4 text-sm">
                <Link href="#" className="text-gray-400 hover:text-white transition-colors relative group">
                  Privacy Policy
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
                </Link>
                <span className="text-gray-600">|</span>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors relative group">
                  Terms
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
                </Link>
                <span className="text-gray-600">|</span>
                <div className="relative group/badge">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-lg opacity-0 group-hover/badge:opacity-30 transition-opacity"></div>
                  <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-3 py-1">
                    <span className="text-xs text-gray-300">PDPL</span>
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