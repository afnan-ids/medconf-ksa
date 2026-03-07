"use client";
import {
  Calendar,
  MapPin,
  UserCheck,
  ArrowRight,
  Zap,
  Globe,
  Award,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Calendar,
    title: "Conference Organization",
    description: "Full planning, live workshops, international streaming",
    stats: "50+ events yearly",
    color: "blue",
  },
  {
    icon: MapPin,
    title: "Exhibition & Space Booking",
    description: "Interactive maps, dynamic pricing, PDF contracts",
    stats: "100k+ sqm managed",
    color: "purple",
  },
  {
    icon: UserCheck,
    title: "Practitioner Registration",
    description: "SCFHS license verification & compliance",
    stats: "15k+ verified",
    color: "cyan",
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
  },
};

export default function Services() {
  return (
    <section className="relative w-full mx-auto overflow-hidden">
      {/* Dark themed background*/}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-900">
        {/* Floating orbs  */}
        <div className="absolute top-10 left-10 w-32 h-32 sm:w-72 sm:h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 sm:w-80 sm:h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 left-1/3 w-48 h-48 sm:w-96 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Glass container */}
      <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-4 py-4">
        <div className="rounded-2xl sm:rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-2xl overflow-hidden hover:shadow-[0_30px_60px_-15px_rgba(79,70,229,0.3)] transition-all duration-700">
          
          {/* Top gradient line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
          
          <div className="p-4 sm:p-8 lg:p-12 max-w-7xl mx-auto relative">
            {/* Decorative orbs inside - hidden on mobile */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl hidden sm:block"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl hidden sm:block"></div>

            {/* Header  */}
            <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 md:mb-16 relative z-10">
              {/* Trust badge  */}
              <div className="relative inline-block group/badge mb-4 sm:mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-lg opacity-0 group-hover/badge:opacity-50 transition-opacity duration-500"></div>
                <div className="relative inline-flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1 sm:py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl text-white text-[10px] sm:text-xs">
                  <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
                  <span>Our Expertise</span>
                  <span className="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-white/30 rounded-full"></span>
                  <ShieldCheck className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400" />
                  <span>Healthcare Focused</span>
                </div>
              </div>

              {/* Title with gradient */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-4 px-2">
                Our{" "}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  Services
                </span>
              </h2>

              {/* Decorative line  */}
              <div className="relative w-20 sm:w-32 h-1 mx-auto my-3 sm:my-6">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-sm"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full"></div>
              </div>

              <p className="text-xs sm:text-sm md:text-lg text-gray-300 mt-3 sm:mt-6 max-w-2xl mx-auto px-4">
                Streamlined solutions for healthcare events, backed by data and
                decades of experience.
              </p>
            </div>

            {/* Services grid - responsive grid layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 relative z-10">
              {services.map((service, index) => {
                const Icon = service.icon;
                const colors = colorVariants[service.color];

                return (
                  <div
                    key={index}
                    className="group relative rounded-xl sm:rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-4 sm:p-6 md:p-8 hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 sm:hover:-translate-y-2 overflow-hidden"
                  >
                    {/* Hover glow effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-700`} />
                    
                    {/* Corner accent  */}
                    <div className={`absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 ${colors.bgLight} rounded-bl-[40px] sm:rounded-bl-[60px] rounded-tr-xl sm:rounded-tr-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-50 group-hover:opacity-100`} />

                    {/* Icon container  */}
                    <div className="relative mb-4 sm:mb-5 md:mb-6">
                      <div className={`absolute inset-0 bg-gradient-to-r ${colors.gradient} blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-500 rounded-xl sm:rounded-2xl`} />
                      <div className={`relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-br ${colors.gradient} shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                        <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-2 sm:mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-blue-200 group-hover:bg-clip-text transition-all duration-300">
                      {service.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-4 sm:mb-5 md:mb-6">
                      {service.description}
                    </p>

                    {/* Stats badge  */}
                    <div className="relative inline-block group/stat mb-4 sm:mb-5 md:mb-6">
                      <div className={`absolute inset-0 bg-gradient-to-r ${colors.gradient} rounded-full blur-md opacity-0 group-hover/stat:opacity-50 transition-opacity duration-500`}></div>
                      <div className="relative inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl text-[10px] sm:text-xs">
                        <Zap className={`w-2 h-2 sm:w-3 sm:h-3 ${colors.text}`} />
                        <span className="text-gray-300">{service.stats}</span>
                      </div>
                    </div>

                    {/* Button - responsive sizing */}
                    <Link
                      href="#"
                      className={`relative inline-flex items-center justify-center gap-1 sm:gap-2 w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl text-[10px] sm:text-xs md:text-sm font-medium group/btn overflow-hidden transition-all duration-300 border ${colors.border} hover:border-transparent`}
                    >
                      {/* Gradient background on hover */}
                      <span className={`absolute inset-0 bg-gradient-to-r ${colors.gradient} opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500`} />
                      
                      {/* Glow effect */}
                      <span className={`absolute inset-0 bg-gradient-to-r ${colors.gradient} opacity-0 group-hover/btn:opacity-40 blur-xl transition-opacity duration-500`} />
                      
                      {/* Button text */}
                      <span className="relative z-10 flex items-center gap-1 sm:gap-2 text-gray-300 group-hover/btn:text-white transition-colors duration-300">
                        Explore service
                        <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover/btn:translate-x-1 sm:group-hover/btn:translate-x-2 transition-transform duration-300" />
                      </span>
                      
                      {/* Bottom line animation */}
                      <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r ${colors.gradient} group-hover/btn:w-full transition-all duration-500`} />
                    </Link>
                  </div>
                );
              })}
            </div>

            {/* Bottom CTA  */}
            <div className="text-center mt-8 sm:mt-10 md:mt-12 relative z-10">
              <Link
                href="#"
                className="relative inline-flex items-center gap-2 sm:gap-3 group/cta"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-xl opacity-0 group-hover/cta:opacity-60 transition-opacity duration-500"></div>
                <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-full text-sm sm:text-base md:text-lg font-medium hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2 sm:gap-3">
                  <span>View all services</span>
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