"use client";

import {
  Activity,
  ArrowRight,
  Brain,
  Building2,
  Heart,
  Microscope,
  Shield,
  Sparkles,
  Stethoscope,
  Syringe,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import Link from "next/link";

const healthSectors = [
  {
    name: "Digital Health & AI",
    description: "AI-powered diagnostics, telemedicine platforms, and digital therapeutics transforming patient care.",
    icon: Brain,
    trend: "+245% Growth",
    color: "blue",
    stats: "45+ Exhibitors",
    tags: ["AI Diagnostics", "Telehealth", "Wearables"],
  },
  {
    name: "Medical Devices & Equipment",
    description: "Cutting-edge surgical instruments, imaging systems, and patient monitoring solutions.",
    icon: Microscope,
    trend: "Market Leader",
    color: "purple",
    stats: "120+ Brands",
    tags: ["Surgical", "Imaging", "Monitoring"],
  },
  {
    name: "Pharmaceuticals & Biotech",
    description: "Breakthrough therapies, vaccine development, and precision medicine innovations.",
    icon: Syringe,
    trend: "Pipeline Focus",
    color: "cyan",
    stats: "80+ Companies",
    tags: ["Biologics", "Gene Therapy", "Clinical Trials"],
  },
  {
    name: "Healthcare Infrastructure",
    description: "Smart hospital design, facility management, and medical real estate solutions.",
    icon: Building2,
    trend: "$2.5B Market",
    color: "emerald",
    stats: "30+ Projects",
    tags: ["Smart Hospitals", "Facilities", "Planning"],
  },
  {
    name: "Preventive & Wellness",
    description: "Early detection programs, wellness centers, and lifestyle medicine platforms.",
    icon: Heart,
    trend: "Fastest Growing",
    color: "rose",
    stats: "60+ Providers",
    tags: ["Screening", "Wellness", "Lifestyle"],
  },
  {
    name: "Laboratory & Diagnostics",
    description: "High-throughput testing, genomic sequencing, and point-of-care diagnostics.",
    icon: Activity,
    trend: "ISO Certified",
    color: "amber",
    stats: "25+ Labs",
    tags: ["Genomics", "Pathology", "Rapid Testing"],
  },
];

const colorVariants = {
  blue: {
    bg: "bg-blue-600",
    bgLight: "bg-blue-500/20",
    border: "border-blue-500/30",
    text: "text-blue-400",
    textHover: "group-hover:text-blue-300",
    gradient: "from-blue-600 to-cyan-400",
    shadow: "shadow-blue-600/30",
    glow: "bg-blue-600/30",
    tagBg: "bg-blue-500/10",
    tagBorder: "border-blue-500/20",
  },
  purple: {
    bg: "bg-purple-600",
    bgLight: "bg-purple-500/20",
    border: "border-purple-500/30",
    text: "text-purple-400",
    textHover: "group-hover:text-purple-300",
    gradient: "from-purple-600 to-pink-500",
    shadow: "shadow-purple-600/30",
    glow: "bg-purple-600/30",
    tagBg: "bg-purple-500/10",
    tagBorder: "border-purple-500/20",
  },
  cyan: {
    bg: "bg-cyan-600",
    bgLight: "bg-cyan-500/20",
    border: "border-cyan-500/30",
    text: "text-cyan-400",
    textHover: "group-hover:text-cyan-300",
    gradient: "from-cyan-500 to-blue-500",
    shadow: "shadow-cyan-600/30",
    glow: "bg-cyan-600/30",
    tagBg: "bg-cyan-500/10",
    tagBorder: "border-cyan-500/20",
  },
  emerald: {
    bg: "bg-emerald-600",
    bgLight: "bg-emerald-500/20",
    border: "border-emerald-500/30",
    text: "text-emerald-400",
    textHover: "group-hover:text-emerald-300",
    gradient: "from-emerald-600 to-teal-500",
    shadow: "shadow-emerald-600/30",
    glow: "bg-emerald-600/30",
    tagBg: "bg-emerald-500/10",
    tagBorder: "border-emerald-500/20",
  },
  rose: {
    bg: "bg-rose-600",
    bgLight: "bg-rose-500/20",
    border: "border-rose-500/30",
    text: "text-rose-400",
    textHover: "group-hover:text-rose-300",
    gradient: "from-rose-600 to-pink-500",
    shadow: "shadow-rose-600/30",
    glow: "bg-rose-600/30",
    tagBg: "bg-rose-500/10",
    tagBorder: "border-rose-500/20",
  },
  amber: {
    bg: "bg-amber-600",
    bgLight: "bg-amber-500/20",
    border: "border-amber-500/30",
    text: "text-amber-400",
    textHover: "group-hover:text-amber-300",
    gradient: "from-amber-600 to-orange-500",
    shadow: "shadow-amber-600/30",
    glow: "bg-amber-600/30",
    tagBg: "bg-amber-500/10",
    tagBorder: "border-amber-500/20",
  },
};

export default function HealthSectors() {
  return (
    <section className="relative w-full mx-auto overflow-hidden">
      {/* Dark themed background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-900">
        <div className="absolute top-10 left-10 w-32 h-32 sm:w-72 sm:h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 sm:w-80 sm:h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 left-1/3 w-48 h-48 sm:w-96 sm:h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-32 h-32 sm:w-64 sm:h-64 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-700 hidden sm:block"></div>
      </div>

      {/* Glass container */}
      <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-4 py-4">
        <div className="rounded-2xl sm:rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-2xl overflow-hidden hover:shadow-[0_30px_60px_-15px_rgba(79,70,229,0.3)] transition-all duration-700">
          
          {/* Top gradient line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
          
          <div className="p-4 sm:p-8 lg:p-12 max-w-7xl mx-auto relative">
            {/* Decorative orbs inside */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl hidden sm:block"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl hidden sm:block"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl hidden sm:block"></div>

            {/* Header */}
            <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 md:mb-16 relative z-10">
              {/* Trust badge */}
              <div className="relative inline-block group/badge mb-4 sm:mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-lg opacity-0 group-hover/badge:opacity-50 transition-opacity duration-500"></div>
                <div className="relative inline-flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1 sm:py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl text-white text-[10px] sm:text-xs">
                  <Stethoscope className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
                  <span>Medical Exhibition</span>
                  <span className="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-white/30 rounded-full"></span>
                  <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400" />
                  <span>Healthcare Focus</span>
                </div>
              </div>

              {/* Title with gradient */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-4 px-2">
                <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  Health
                </span>{" "}
                <span className="text-white">Sectors</span>
              </h2>

              {/* Decorative line */}
              <div className="relative w-20 sm:w-32 h-1 mx-auto my-3 sm:my-6">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full blur-sm"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-emerald-300 rounded-full"></div>
              </div>

              <p className="text-xs sm:text-sm md:text-lg text-gray-300 mt-3 sm:mt-6 max-w-2xl mx-auto px-4">
                Explore the key sectors driving innovation in healthcare. From AI diagnostics to pharmaceutical breakthroughs.
              </p>
            </div>

            {/* Sectors grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 relative z-10">
              {healthSectors.map((sector, index) => {
                const Icon = sector.icon;
                const colors = colorVariants[sector.color];

                return (
                  <div
                    key={index}
                    className="group relative rounded-xl sm:rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-4 sm:p-6 md:p-8 hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 sm:hover:-translate-y-2 overflow-hidden"
                  >
                    {/* Hover glow effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-700`} />
                    
                    {/* Corner accent */}
                    <div className={`absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 ${colors.bgLight} rounded-bl-[40px] sm:rounded-bl-[60px] rounded-tr-xl sm:rounded-tr-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-50 group-hover:opacity-100`} />

                    {/* Trending badge */}
                    <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10">
                      <div className={`flex items-center gap-1 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full ${colors.tagBg} border ${colors.tagBorder} backdrop-blur-sm`}>
                        <TrendingUp className={`w-2.5 h-2.5 sm:w-3 sm:h-3 ${colors.text}`} />
                        <span className="text-[8px] sm:text-[10px] font-medium text-gray-300">{sector.trend}</span>
                      </div>
                    </div>

                    {/* Icon container */}
                    <div className="relative mb-4 sm:mb-5 md:mb-6">
                      <div className={`absolute inset-0 bg-gradient-to-r ${colors.gradient} blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-500 rounded-xl sm:rounded-2xl`} />
                      <div className={`relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-br ${colors.gradient} shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                        <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-2 sm:mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-blue-200 group-hover:bg-clip-text transition-all duration-300">
                      {sector.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-3 sm:mb-4">
                      {sector.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-5">
                      {sector.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className={`text-[9px] sm:text-[10px] px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full ${colors.tagBg} border ${colors.tagBorder} text-gray-300`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Stats badge */}
                    <div className="relative inline-block group/stat mb-4 sm:mb-5 md:mb-6">
                      <div className={`absolute inset-0 bg-gradient-to-r ${colors.gradient} rounded-full blur-md opacity-0 group-hover/stat:opacity-50 transition-opacity duration-500`}></div>
                      <div className="relative inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl text-[10px] sm:text-xs">
                        <Users className={`w-2 h-2 sm:w-3 sm:h-3 ${colors.text}`} />
                        <span className="text-gray-300">{sector.stats}</span>
                      </div>
                    </div>

                    {/* Button */}
                    <Link
                      href="#"
                      className={`relative inline-flex items-center justify-center gap-1 sm:gap-2 w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl text-[10px] sm:text-xs md:text-sm font-medium group/btn overflow-hidden transition-all duration-300 border ${colors.border} hover:border-transparent`}
                    >
                      <span className={`absolute inset-0 bg-gradient-to-r ${colors.gradient} opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500`} />
                      <span className={`absolute inset-0 bg-gradient-to-r ${colors.gradient} opacity-0 group-hover/btn:opacity-40 blur-xl transition-opacity duration-500`} />
                      <span className="relative z-10 flex items-center gap-1 sm:gap-2 text-gray-300 group-hover/btn:text-white transition-colors duration-300">
                        Explore sector
                        <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover/btn:translate-x-1 sm:group-hover/btn:translate-x-2 transition-transform duration-300" />
                      </span>
                      <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r ${colors.gradient} group-hover/btn:w-full transition-all duration-500`} />
                    </Link>
                  </div>
                );
              })}
            </div>

            {/* Bottom CTA */}
            <div className="text-center mt-8 sm:mt-10 md:mt-12 relative z-10">
              <Link
                href="#"
                className="relative inline-flex items-center gap-2 sm:gap-3 group/cta"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full blur-xl opacity-0 group-hover/cta:opacity-60 transition-opacity duration-500"></div>
                <div className="relative bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-full text-sm sm:text-base md:text-lg font-medium hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2 sm:gap-3">
                  <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>View All Health Sectors</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover/cta:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover/cta:opacity-20 transition-opacity"></div>
                </div>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}