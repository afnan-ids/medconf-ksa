"use client";

import Link from "next/link";
import {
  Building2,
  Users,
  Stethoscope,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Lock,
  Globe,
} from "lucide-react";

const portals = [
  {
    title: "Exhibitor & Sponsor Portal",
    description: "Account creation, space booking, contract management",
    icon: Building2,
    href: "/pages/ExhibitorSponsorPortal",
    gradient: "from-blue-600 to-cyan-400",
    color: "blue",
  },
  {
    title: "Visitor Portal",
    description: "Registration, agenda, live streaming",
    icon: Users,
    href: "/pages/VisitorPortal",
    gradient: "from-purple-600 to-pink-500",
    color: "purple",
  },
  {
    title: "Healthcare Practitioners Portal",
    description: "License upload & SCFHS verification",
    icon: Stethoscope,
    href: "/pages/HealthcarePractitionersPortal",
    gradient: "from-amber-600 to-orange-500",
    color: "amber",
  },
];

const colorVariants = {
  blue: {
    bgLight: "bg-blue-500/20",
    border: "border-blue-500/30",
    text: "text-blue-400",
    shadow: "shadow-blue-600/30",
  },
  purple: {
    bgLight: "bg-purple-500/20",
    border: "border-purple-500/30",
    text: "text-purple-400",
    shadow: "shadow-purple-600/30",
  },
  amber: {
    bgLight: "bg-amber-500/20",
    border: "border-amber-500/30",
    text: "text-amber-400",
    shadow: "shadow-amber-600/30",
  },
};

export default function Portals() {
  return (
    <section className="relative w-full overflow-hidden py-20">
      {/* Dark themed background - matching other pages */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-900">
        {/* Floating orbs - colorful */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-40 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute bottom-40 left-40 w-72 h-72 bg-amber-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 mx-auto px-6 lg:px-4">
        <div className="rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-2xl overflow-hidden hover:shadow-[0_30px_60px_-15px_rgba(79,70,229,0.3)] transition-all duration-700">
          
          {/* Top gradient line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
          
          <div className="p-10 lg:p-14 max-w-7xl mx-auto relative">
            {/* Decorative orbs inside */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>

            {/* Title with badge */}
            <div className="text-center mb-16 relative z-10">
              {/* Badge - matching other pages */}
              <div className="relative inline-block group/badge mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-lg opacity-0 group-hover/badge:opacity-50 transition-opacity duration-500"></div>
                <div className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl text-white text-xs">
                  <Lock className="w-4 h-4 text-blue-400" />
                  <span>Secure Access</span>
                  <span className="w-1 h-1 bg-white/30 rounded-full"></span>
                  <ShieldCheck className="w-4 h-4 text-cyan-400" />
                  <span>PDPL Compliant</span>
                </div>
              </div>

              {/* Gradient title */}
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
                  Secure
                </span>{" "}
                <span className="text-white">Portals</span>
              </h2>

              {/* Decorative line */}
              <div className="relative w-32 h-1 mx-auto my-6">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full blur-sm"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 rounded-full"></div>
              </div>

              <p className="text-gray-300 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
                All portals are encrypted, PDPL compliant, and securely hosted inside
                Saudi Arabia.
              </p>

              {/* Enhanced badge */}
              <div className="mt-8 inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl text-white text-sm">
                <ShieldCheck className="w-4 h-4 text-blue-400" />
                <span>Encrypted</span>
                <span className="w-1 h-1 bg-white/30 rounded-full"></span>
                <span className="text-cyan-300">SCFHS Ready</span>
                <span className="w-1 h-1 bg-white/30 rounded-full"></span>
                <span className="text-purple-300">PDPL Compliant</span>
              </div>
            </div>

            {/* Cards */}
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8 relative z-10">
              {portals.map((portal, index) => {
                const Icon = portal.icon;
                const colors = colorVariants[portal.color];

                return (
                  <div
                    key={index}
                    className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-[2rem] p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl overflow-hidden"
                  >
                    {/* Gradient hover effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${portal.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-700`} />
                    
                    {/* Shine effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    </div>
                    
                    {/* Corner accent */}
                    <div className={`absolute top-0 right-0 w-20 h-20 ${colors.bgLight} rounded-bl-[40px] rounded-tr-[2rem] blur-xl group-hover:blur-2xl transition-all duration-500 opacity-50 group-hover:opacity-100`} />

                    {/* Icon with gradient background */}
                    <div className="relative mb-6">
                      <div className={`absolute inset-0 bg-gradient-to-r ${portal.gradient} blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-500 rounded-2xl`} />
                      <div className={`relative w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br ${portal.gradient} shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Text */}
                    <h3 className="relative text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-blue-200 transition-all duration-500">
                      {portal.title}
                    </h3>

                    <p className="relative text-gray-300 mb-6 leading-relaxed text-sm">
                      {portal.description}
                    </p>

                     <Link
                      href="#"
                      className={`relative inline-flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl text-sm font-medium group/btn overflow-hidden transition-all duration-300 border ${colors.border} hover:border-transparent`}
                    >
                      {/* Gradient background on hover */}
                      <span className={`absolute inset-0 bg-gradient-to-r ${portal.gradient} opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500`} />
                      
                      {/* Glow effect */}
                      <span className={`absolute inset-0 bg-gradient-to-r ${portal.gradient} opacity-0 group-hover/btn:opacity-40 blur-xl transition-opacity duration-500`} />
                      
                      {/* Button text */}
                      <span className="relative z-10 flex items-center gap-2 text-gray-300 group-hover/btn:text-white transition-colors duration-300">
                        Explore service
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform duration-300" />
                      </span>
                      
                      {/* Bottom line animation */}
                      <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r ${colors.gradient} group-hover/btn:w-full transition-all duration-500`} />
                    </Link>
                  </div>
                );
              })}
            </div>

            {/* Bottom CTA - matching other pages */}
            <div className="text-center mt-16 relative z-10">
              <Link
                href="#"
                className="group relative inline-flex items-center gap-3"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
                <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:scale-105 transition-all duration-300 flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5" />
                  <span>Access All Portals</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
                </div>
              </Link>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
}