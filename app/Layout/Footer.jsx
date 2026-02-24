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
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative  overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-blue-950/80 to-black/90 -z-20" />
      <div className="absolute top-[-200px] left-[-200px] w-[520px] h-[520px] bg-blue-600/25 blur-[160px] rounded-full -z-10 animate-pulse" />
      <div className="absolute bottom-[-250px] right-[-200px] w-[650px] h-[650px] bg-cyan-400/20 blur-[190px] rounded-full -z-10 animate-pulse" />

      <div className="mx-auto px-6 lg:px-4 py-4 relative z-10">
        {/* Footer Main Glass Container */}
        <div className="rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-2xl overflow-hidden">
          {/* Inner padding */}
          <div className="p-10 lg:p-10">
            <div className="grid lg:grid-cols-4 gap-12">
              {/* Brand */}
              <div>
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="absolute inset-0 bg-blue-600 blur-lg opacity-50 rounded-2xl" />
                    <div className="relative w-12 h-12 flex items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 shadow-lg">
                      <Stethoscope className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  <div>
                    <h2 className="text-xl font-extrabold text-white">
                      MedConf KSA
                    </h2>
                    <p className="text-sm text-gray-400 -mt-1">
                      Conferences & Exhibitions
                    </p>
                  </div>
                </div>

                <p className="mt-6 text-sm text-gray-300 leading-relaxed">
                  Saudi Arabia’s premium platform for secure medical conferences,
                  exhibitions, CME credits, and healthcare portals.
                </p>

                <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl text-white text-xs">
                  <ShieldCheck className="w-4 h-4 text-blue-400" />
                  SCFHS & PDPL Compliant • Hosted in KSA
                </div>
              </div>

              {/* Links */}
              <div>
                <h3 className="text-white font-bold text-lg mb-5">
                  Quick Links
                </h3>

                <ul className="space-y-3 text-gray-300 text-sm">
                  {["Home", "Services", "Events", "Portals", "About", "Contact"].map(
                    (item) => (
                      <li key={item}>
                        <Link
                          href="#"
                          className="group flex items-center gap-2 hover:text-cyan-300 transition"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-400/60 group-hover:bg-cyan-300 transition" />
                          {item}
                        </Link>
                      </li>
                    )
                  )}
                </ul>
              </div>

              {/* Services */}
              <div>
                <h3 className="text-white font-bold text-lg mb-5">Services</h3>

                <ul className="space-y-3 text-gray-300 text-sm">
                  {[
                    "Medical Conferences",
                    "Workshops & Training",
                    "CME Credit Management",
                    "Exhibitions & Sponsorship",
                    "Virtual & Hybrid Events",
                  ].map((service) => (
                    <li key={service}>
                      <Link
                        href="#"
                        className="group flex items-center gap-2 hover:text-cyan-300 transition"
                      >
                        <ArrowRight className="w-4 h-4 text-blue-400/70 group-hover:translate-x-1 transition-transform" />
                        {service}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Newsletter */}
              <div>
                <h3 className="text-white font-bold text-lg mb-5">
                  Newsletter
                </h3>

                <p className="text-gray-300 text-sm mb-5 leading-relaxed">
                  Get the latest medical summit updates, CME programs, and
                  upcoming events across Saudi Arabia.
                </p>

                <div className="flex items-center gap-2 rounded-2xl px-4 py-3 bg-black/30 border border-white/10 backdrop-blur-xl">
                  <Mail className="w-5 h-5 text-cyan-300" />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-transparent outline-none flex-1 text-sm text-white placeholder:text-gray-500"
                  />
                  <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-900 via-blue-600 to-purple-900 text-white text-sm font-semibold hover:opacity-90 transition">
                    Join
                  </button>
                </div>

                {/* Contact */}
                <div className="mt-6 space-y-3 text-sm text-gray-300">
                  <p className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-blue-300" />
                    +966 000 000 000
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-blue-300" />
                    info@medconfksa.com
                  </p>
                  <p className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-blue-300" />
                    Riyadh, Saudi Arabia
                  </p>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="my-12 h-[1px] w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />

            {/* Bottom */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <p className="text-sm text-gray-400 text-center md:text-left">
                © {new Date().getFullYear()} MedConf KSA. All rights reserved.
              </p>

              {/* Social */}
              <div className="flex items-center gap-3">
                {[
                  { icon: Linkedin, href: "#" },
                  { icon: Twitter, href: "#" },
                  { icon: Instagram, href: "#" },
                  { icon: Youtube, href: "#" },
                ].map((social, i) => {
                  const Icon = social.icon;

                  return (
                    <Link
                      key={i}
                      href={social.href}
                      className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:scale-105 transition"
                    >
                      <Icon className="w-5 h-5 text-cyan-200" />
                    </Link>
                  );
                })}
              </div>

              {/* Policies */}
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <Link href="#" className="hover:text-white transition">
                  Privacy Policy
                </Link>
                <span className="text-gray-600">|</span>
                <Link href="#" className="hover:text-white transition">
                  Terms
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}