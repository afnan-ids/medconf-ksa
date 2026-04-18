"use client";

import Link from "next/link";
import {
  Stethoscope,
  Mail,
  Phone,
  MapPin,
  ShieldCheck,
  ArrowRight,
  Heart,
  ChevronRight,
  Globe,
  LogIn,
} from "lucide-react";
import { FaInstagram, FaYoutube, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Column 1: Quick Links
  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/Services" },
    { label: "Events", href: "/pages/NavBar-Links/NavEvents" },
    { label: "Portals", href: "/pages/Portals" },
    // { label: "Whats On ?", href: "#" },
    { label: "About", href: "/pages/AboutUs" },
    { label: "Contact", href: "/pages/ContactUs" },
    { label: "News & Blogs", href: "/pages/NewsBlogPage" },
    { label: "FAQ", href: "/pages/FAQ" },
  ];

  // Column 2: Services
  const services = [
    {
      label: "Conference Organization",
      href: "/Services/conferenceorganization",
    },
    {
      label: "Exhibition & Space Booking",
      href: "/Services/exhibitionspacebooking",
    },
    {
      label: "Practitioner Registration",
      href: "/Services/practitionerregistration",
    },
    { label: "View All Services", href: "/Services", isViewAll: true },
  ];

  // Column 3: Portals
  const portals = [
    { label: "Sponsor Portal", href: "/pages/Portals/SponcerPortal/dashboard" },
    {
      label: "Exhibitor Portal",
      href: "/pages/Portals/ExhibitorPortal/dashboard",
    },
    { label: "Visitor Portal", href: "/pages/Portals/VisitorPortal/dashboard" },
    {
      label: "Health Care Portal",
      href: "/pages/Portals/HealthcarePractitionersPortal/dashboard",
    },
    { label: "View All Portals", href: "/pages/Portals", isViewAll: true },
  ];

  // Column 4: What's On
  const whatsOn = [
    {
      label: "Medical Innovation Arena",
      href: "/pages/WhatsOn/MedicalInnovationArena",
    },
    {
      label: "Healthcare Innovation Hub",
      href: "/pages/WhatsOn/HealthcareInnovationHub",
    },
    {
      label: "Medical Technology Zone",
      href: "/pages/WhatsOn/MedicalTechnologyZone",
    },
    {
      label: "Clinical Knowledge Forum",
      href: "/pages/WhatsOn/ClinicalKnowledgeForum",
    },
    {
      label: "Industry Collaboration Exchange",
      href: "/pages/WhatsOn/IndustryCollaborationExchange",
    },
    {
      label: "Guided Exhibition Tours",
      href: "/pages/WhatsOn/GuidedExhibitionTours",
    },
    { label: "View All Events", href: "#", isViewAll: true },
  ];

  // Column 5: Resources
  const resources = [
    { label: "CME Credits", href: "#" },
    { label: "Become a Speaker", href: "#" },
    { label: "Become a Sponsor", href: "#" },
    { label: "Download Brochure", href: "#" },
    { label: "Floor Plan", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Privacy Policy", href: "#" },
  ];

  const socialLinks = [
    {
      icon: FaLinkedin,
      href: "#",
      label: "LinkedIn",
      color: "from-blue-600 to-blue-400",
    },
    {
      icon: FaTwitter,
      href: "#",
      label: "Twitter",
      color: "from-sky-400 to-blue-500",
    },
    {
      icon: FaInstagram,
      href: "#",
      label: "Instagram",
      color: "from-pink-500 to-purple-500",
    },
    {
      icon: FaYoutube,
      href: "#",
      label: "YouTube",
      color: "from-red-600 to-red-500",
    },
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-900">
        <div className="absolute top-10 left-10 w-32 h-32 sm:w-72 sm:h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 sm:w-80 sm:h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 left-1/3 w-48 h-48 sm:w-96 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-4 relative z-10">
        <div className="rounded-2xl sm:rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-2xl overflow-hidden hover:shadow-[0_30px_60px_-15px_rgba(79,70,229,0.3)] transition-all duration-700">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>

          <div className="p-6 sm:p-8 lg:p-12 relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl hidden lg:block"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl hidden lg:block"></div>

            {/* 6 Column Grid - Desktop: 6 cols, Tablet: 3 cols, Mobile: 1 col */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-x-6 gap-y-8 relative z-10">
              {/* Column 1 - Brand */}
              <div className="group lg:w-62">
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 blur-xl opacity-50 rounded-xl group-hover:opacity-70 transition-opacity duration-500"></div>
                    <div className="relative w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 shadow-lg group-hover:scale-110 transition-transform duration-500">
                      <Stethoscope className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h2 className="text-xl font-extrabold text-white">
                      MedConf
                      <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent ml-1">
                        KSA
                      </span>
                    </h2>
                    <p className="text-xs text-gray-400 -mt-1">
                      Conferences & Exhibitions
                    </p>
                  </div>
                </div>

                <p className="text-sm text-gray-300 leading-relaxed mb-4">
                  Saudi Arabia's premium platform for secure medical
                  conferences, exhibitions, CME credits, and healthcare portals.
                </p>

                <div className="relative inline-block group/badge mb-4">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-lg opacity-0 group-hover/badge:opacity-50 transition-opacity duration-500"></div>
                  <div className="relative inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl text-white text-xs">
                    <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                    <span>SCFHS & PDPL Compliant</span>
                    <span className="w-0.5 h-0.5 bg-white/30 rounded-full"></span>
                    <Globe className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Hosted in KSA</span>
                  </div>
                </div>
              </div>

              {/* Column 2 - Quick Links */}
              <div className="lg:ps-12 relative">
                <h3 className="text-white font-bold text-lg mb-4 pb-2 inline-block">
                  Quick Links
                </h3>
                <div className="w-15 h-px bg-gradient-to-r from-blue-400 to bg-purple-400 absolute top-10"></div>
                <ul className="space-y-2.5">
                  {quickLinks.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="group flex items-center gap-2 text-sm text-gray-300 hover:text-cyan-300 transition-all"
                      >
                        <ChevronRight className="w-3.5 h-3.5 text-blue-400/50 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                        <span className="group-hover:translate-x-1 transition-transform duration-300">
                          {item.label}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 3 - Services */}
              <div className="relative">
                <h3 className="text-white font-bold text-lg mb-4 pb-2 inline-block">
                  Our Services
                </h3>
                <div className="w-15 h-px bg-gradient-to-r from-blue-400 to bg-purple-400 absolute top-10"></div>
                <ul className="space-y-2.5">
                  {services.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className={`group flex items-center gap-2 text-sm transition-all ${
                          item.isViewAll
                            ? "text-blue-400 hover:text-blue-300"
                            : "text-gray-300 hover:text-cyan-300"
                        }`}
                      >
                        <ChevronRight
                          className={`w-3.5 h-3.5 transition-all ${
                            item.isViewAll
                              ? "text-blue-400/50 group-hover:text-blue-400"
                              : "text-blue-400/50 group-hover:text-blue-400"
                          } group-hover:translate-x-1`}
                        />
                        <span className="group-hover:translate-x-1 transition-transform duration-300">
                          {item.label}
                        </span>
                        {item.isViewAll && (
                          <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 4 - Portals */}
              <div className="relative">
                <h3 className="text-white font-bold text-lg mb-4 pb-2 inline-block">
                  Portals
                </h3>
                <div className="w-15 h-px bg-gradient-to-r from-blue-400 to bg-purple-400 absolute top-10"></div>
                <ul className="space-y-2.5">
                  {portals.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className={`group flex items-center gap-2 text-sm transition-all ${
                          item.isViewAll
                            ? "text-blue-400 hover:text-blue-300"
                            : "text-gray-300 hover:text-cyan-300"
                        }`}
                      >
                        <ChevronRight
                          className={`w-3.5 h-3.5 transition-all ${
                            item.isViewAll
                              ? "text-blue-400/50 group-hover:text-blue-400"
                              : "text-blue-400/50 group-hover:text-blue-400"
                          } group-hover:translate-x-1`}
                        />
                        <span className="group-hover:translate-x-1 transition-transform duration-300">
                          {item.label}
                        </span>
                        {item.isViewAll && (
                          <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 5 - What's On */}
              <div className="relative">
                <h3 className="text-white font-bold text-lg mb-4 pb-2 inline-block">
                  What's On?
                </h3>
                <div className="w-15 h-px bg-gradient-to-r from-blue-400 to bg-purple-400 absolute top-10"></div>
                <ul className="space-y-2.5">
                  {whatsOn.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className={`group flex items-center gap-2 text-sm transition-all ${
                          item.isViewAll
                            ? "text-blue-400 hover:text-blue-300"
                            : "text-gray-300 hover:text-cyan-300"
                        }`}
                      >
                        <ChevronRight
                          className={`w-3.5 h-3.5 transition-all ${
                            item.isViewAll
                              ? "text-blue-400/50 group-hover:text-blue-400"
                              : "text-blue-400/50 group-hover:text-blue-400"
                          } group-hover:translate-x-1`}
                        />
                        <span className="group-hover:translate-x-1 transition-transform duration-300 truncate">
                          {item.label}
                        </span>
                        {item.isViewAll && (
                          <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 6 - Contact & Newsletter */}
              <div className="relative">
                <h3 className="text-white font-bold text-lg mb-4 pb-2 inline-block">
                  Connect
                </h3>
                <div className="w-15 h-px bg-gradient-to-r from-blue-400 to bg-purple-400 absolute top-10"></div>
                {/* Contact Info */}
                <div className="space-y-3 mb-5">
                  <Link
                    href="tel:+966000000000"
                    className="flex items-center gap-3 text-sm text-gray-300 hover:text-white transition-colors group"
                  >
                    <div className="p-1.5 bg-white/5 rounded-lg border border-white/10 group-hover:bg-white/10 transition-colors">
                      <Phone className="w-3.5 h-3.5 text-blue-400" />
                    </div>
                    <span>+966 000 000 000</span>
                  </Link>
                  <Link
                    href="mailto:info@medconfksa.com"
                    className="flex items-center gap-3 text-sm text-gray-300 hover:text-white transition-colors group"
                  >
                    <div className="p-1.5 bg-white/5 rounded-lg border border-white/10 group-hover:bg-white/10 transition-colors">
                      <Mail className="w-3.5 h-3.5 text-blue-400" />
                    </div>
                    <span className="truncate">info@medconfksa.com</span>
                  </Link>
                  <div className="flex items-center gap-3 text-sm text-gray-300 group">
                    <div className="p-1.5 bg-white/5 rounded-lg border border-white/10 group-hover:bg-white/10 transition-colors">
                      <MapPin className="w-3.5 h-3.5 text-blue-400" />
                    </div>
                    <span>Riyadh, Saudi Arabia</span>
                  </div>
                </div>

                {/* Newsletter */}
                <div>
                  <p className="text-gray-400 text-sm mb-2">
                    Subscribe to Newsletter
                  </p>
                  <div className="relative group/input">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg blur-lg opacity-0 group-hover/input:opacity-30 transition-opacity duration-500"></div>
                    <div className="relative flex items-stretch gap-2 rounded-lg px-3 py-2 bg-black/40 border border-white/20">
                      <Mail className="w-4 h-4 text-cyan-300 flex-shrink-0 mt-0.5" />
                      <input
                        type="email"
                        placeholder="Your email address"
                        className="bg-transparent outline-none flex-1 text-sm text-white placeholder:text-gray-500 min-w-0"
                      />
                      <button className="px-3 py-1 rounded-md bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-xs font-medium hover:scale-105 transition">
                        Subscribe
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="relative my-8 md:my-10">
              <div className="w-full border-t border-white/10"></div>
            </div>

            {/* Bottom Bar */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-gray-400 text-center md:text-left">
                © {currentYear} MedConf KSA. All rights reserved <br />
                Made with{" "}
                <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 inline" />{" "}
                in Saudi Arabia
              </p>

              {/* Social Links */}
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
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${social.color} rounded-lg blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500`}
                      ></div>
                      <div className="relative w-9 h-9 flex items-center justify-center rounded-lg bg-white/10 border border-white/20 hover:bg-white/20 hover:scale-110 transition-all duration-300">
                        <Icon className="w-4 h-4 text-gray-300 group-hover:text-white transition-colors" />
                      </div>
                    </Link>
                  );
                })}
              </div>

              {/* Legal */}
              <div className="flex items-center gap-3 text-sm">
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors relative group"
                >
                  Privacy Policy
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
                </Link>
                <span className="text-gray-600">|</span>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors relative group"
                >
                  Terms
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
                </Link>
                <span className="text-gray-600">|</span>
                <div className="relative group/badge">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-lg opacity-0 group-hover/badge:opacity-30 transition-opacity"></div>
                  <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-3 py-0.5">
                    <span className="text-xs text-gray-300">PDPL</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
    </footer>
  );
}
