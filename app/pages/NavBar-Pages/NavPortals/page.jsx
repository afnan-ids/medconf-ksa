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
} from "lucide-react";
import BreadCrum from "../../../Components/BreadCrum";

const portals = [
  {
    title: "Exhibitor & Sponsor Portal",
    description: "Account creation, space booking, contract management",
    icon: Building2,
    href: "/pages/ExhibitorSponsorPortal",
    features: ["Space booking", "Contract management", "Real-time updates"],
    color: "from-blue-500 to-cyan-400",
  },
  {
    title: "Visitor Portal",
    description: "Registration, agenda, live streaming",
    icon: Users,
    href: "/pages/VisitorPortal",
    features: ["Easy registration", "Live agenda", "Streaming access"],
    color: "from-purple-500 to-pink-400",
  },
  {
    title: "Healthcare Practitioners Portal",
    description: "License upload & SCFHS verification",
    icon: Stethoscope,
    href: "/pages/HealthcarePractitionersPortal",
    features: ["License upload", "SCFHS verification", "Credentialing"],
    color: "from-amber-500 to-orange-400",
  },
];

export default function Portals() {
  return (
   <>
    <BreadCrum
          title="Portals"
          backgroundImage="/Images/Home/Bread-crum-1.avif"
          path={["Home", "Pages", "Portals"]}
        />
    <section className="relative py-28 overflow-hidden">
      {/* Animated Background - Matching Services and Events sections */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-900">
        {/* Floating orbs */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        
        {/* Grid pattern */}
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header - Enhanced to match other sections */}
        <div className="text-center mb-20">
          {/* Top badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
            <Lock className="w-4 h-4 text-yellow-300" />
            <span className="text-sm font-medium text-gray-300">Secure Access</span>
          </div>

          {/* Main title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Secure</span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-300 bg-clip-text text-transparent">
              Portals
            </span>
          </h2>

          {/* Description with decorative line */}
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-24 h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8">
              All portals are encrypted, PDPL compliant, and securely hosted inside
              Saudi Arabia.
            </p>
          </div>

          {/* Enhanced Badge with glow effect */}
          <div className="relative inline-flex">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full blur-lg opacity-50"></div>
            <div className="relative inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl text-white text-sm">
              <ShieldCheck className="w-5 h-5 text-blue-400" />
              <span className="font-medium">Encrypted</span>
              <span className="w-1 h-1 bg-white/30 rounded-full"></span>
              <span className="font-medium">SCFHS Ready</span>
              <span className="w-1 h-1 bg-white/30 rounded-full"></span>
              <span className="font-medium">PDPL Compliant</span>
            </div>
          </div>
        </div>

        {/* Cards - Enhanced with feature lists and better hover effects */}
        <div className="grid md:grid-cols-3 gap-8">
          {portals.map((portal, index) => {
            const Icon = portal.icon;

            return (
              <div
                key={index}
                className="group relative"
              >
                {/* Card with glass effect */}
                <div className="relative h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                  
                  {/* Gradient hover effect - matches Services section */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${portal.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  {/* Shine effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </div>

                  {/* Icon with animated background */}
                  <div className="relative mb-8">
                    <div className={`absolute inset-0 bg-gradient-to-r ${portal.color} rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500`}></div>
                    <div className="relative w-16 h-16 rounded-2xl flex items-center justify-center border border-white/20 bg-white/10 group-hover:bg-white/20 group-hover:scale-110 transition-all duration-500">
                      <Icon className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    
                    {/* Index number */}
                    <span className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-sm font-bold text-white/60">
                      {index + 1}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-500">
                    {portal.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed mb-6">
                    {portal.description}
                  </p>

                  {/* Features list - matching Services section */}
                  <ul className="space-y-3 mb-8">
                    {portal.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-300 text-sm">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${portal.color}`}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Link with enhanced styling */}
                  <Link
                    href={portal.href}
                    className="relative inline-flex items-center gap-2 font-semibold text-blue-300 hover:text-cyan-300 transition-all group/link"
                  >
                    <span>Enter Portal</span>
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>

                  {/* Bottom accent line */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${portal.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                </div>

                {/* Floating button on hover - matching Services section */}
                <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:-bottom-6">
                  <Link
                    href={portal.href}
                    className="bg-white text-gray-900 rounded-full px-6 py-3 text-sm font-semibold shadow-xl hover:shadow-2xl flex items-center gap-2 group/btn"
                  >
                    Access Portal 
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA - matching Services section */}
        <div className="mt-24 text-center">
          <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-8 py-4 hover:bg-white/10 transition-all duration-300 cursor-pointer group">
            <span className="text-gray-300">Need help with portal access?</span>
            <span className="text-white font-semibold group-hover:ml-2 transition-all">Contact support</span>
            <ArrowRight className="w-5 h-5 text-blue-400 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent"></div>
    </section></>
  );
}