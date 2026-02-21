"use client";

import Link from "next/link";
import {
  Building2,
  Users,
  Stethoscope,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

const portals = [
  {
    title: "Exhibitor & Sponsor Portal",
    description: "Account creation, space booking, contract management",
    icon: Building2,
    href: "/pages/ExhibitorSponsorPortal",
  },
  {
    title: "Visitor Portal",
    description: "Registration, agenda, live streaming",
    icon: Users,
    href: "/pages/VisitorPortal",
  },
  {
    title: "Healthcare Practitioners Portal",
    description: "License upload & SCFHS verification",
    icon: Stethoscope,
    href: "/pages/HealthcarePractitionersPortal",
  },
];

export default function Portals() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-blue-950/80 to-black/90 -z-10" />
      <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-blue-600/25 blur-[140px] rounded-full -z-10 animate-pulse" />
      <div className="absolute bottom-[-250px] right-[-200px] w-[600px] h-[600px] bg-cyan-400/20 blur-[160px] rounded-full -z-10 animate-pulse" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        {/* Title */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Secure
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Portals
            </span>
          </h2>

          <p className="mt-4 text-gray-300 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            All portals are encrypted, PDPL compliant, and securely hosted inside
            Saudi Arabia.
          </p>

          {/* Badge */}
          <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 backdrop-blur-xl text-white text-sm">
            <ShieldCheck className="w-4 h-4 text-blue-400" />
            Encrypted • SCFHS Ready • PDPL Compliant
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {portals.map((portal, index) => {
            const Icon = portal.icon;

            return (
              <div
                key={index}
                className="group relative bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              >
                {/* Hover Glow (theme colors) */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-600/25 to-cyan-400/15 opacity-0 group-hover:opacity-100 blur-2xl transition duration-500" />

                {/* Icon */}
                <div className="relative w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-white/10 border border-white/15 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-blue-300 group-hover:text-cyan-200 transition duration-500" />
                </div>

                {/* Text */}
                <h3 className="relative text-xl font-bold text-white mb-3">
                  {portal.title}
                </h3>

                <p className="relative text-gray-300 mb-6 leading-relaxed text-sm md:text-base">
                  {portal.description}
                </p>

                {/* Link */}
                <Link
                  href={portal.href}
                  className="relative inline-flex items-center gap-2 font-semibold text-blue-300 hover:text-cyan-300 transition-all group/link"
                >
                  Enter Portal
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>

                {/* Accent Line */}
                <div className="relative mt-7 w-14 h-[3px] rounded-full bg-gradient-to-r from-blue-400 to-cyan-300 group-hover:w-24 transition-all duration-500" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}