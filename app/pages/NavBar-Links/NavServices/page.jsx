"use client";

import {
  Calendar,
  MapPin,
  UserCheck,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import BreadCrumb from "../../../Components/BreadCrum";
import { GrServices } from "react-icons/gr";

const services = [
  {
    icon: Calendar,
    title: "Conference Organization",
    description: "Full planning, live workshops, international streaming",
    features: ["End-to-end planning", "Live streaming", "Workshop management"],
    color: "from-blue-500 to-cyan-400",
  },
  {
    icon: MapPin,
    title: "Exhibition & Space Booking",
    description: "Interactive maps, dynamic pricing, PDF contracts",
    features: [
      "Interactive floor plans",
      "Real-time pricing",
      "Automated contracts",
    ],
    color: "from-purple-500 to-pink-400",
  },
  {
    icon: UserCheck,
    title: "Practitioner Registration",
    description: "SCFHS license verification & compliance",
    features: ["License verification", "Compliance checks", "Credentialing"],
    color: "from-amber-500 to-orange-400",
  },
];

export default function Services() {
  return (
    <>
      <BreadCrumb
        title="Services"
        backgroundImage="/Images/Home/Bread-crum-1.avif"
        path={[{ label: "Services" }]}
      />
      <section className="relative py-8 sm:py-10 md:py-12 lg:py-16 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-900">
          {/* Floating orbs - responsive sizes */}
          <div className="absolute top-10 left-10 w-32 h-32 sm:w-72 sm:h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 sm:w-80 sm:h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-96 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          {/* Section Header with decorative elements */}
          <div className="text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20">
            {/* Top badge */}
            <div className="inline-flex items-center gap-1 sm:gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6 md:mb-8">
              <GrServices className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
              <span className="text-xs sm:text-sm font-medium text-gray-300">
                Premium Healthcare Solutions
              </span>
            </div>

            {/* Main title */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 px-2">
              <span className="text-white">Comprehensive</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-300 bg-clip-text text-transparent">
                Event Services
              </span>
            </h2>

            {/* Description with decorative line */}
            <div className="relative max-w-3xl mx-auto">
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-16 sm:w-20 md:w-24 h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed px-4">
                Everything you need to deliver high-impact medical conferences,
                workshops, and compliant healthcare events in Saudi Arabia.
              </p>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <div key={index} className="group relative">
                  {/* Card with glass effect */}
                  <div className="relative h-full rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-5 md:p-6 lg:p-8 bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 sm:hover:-translate-y-2 overflow-hidden">
                    {/* Gradient hover effect */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    ></div>

                    {/* Shine effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    </div>

                    {/* Icon with animated background */}
                    <div className="relative mb-4 sm:mb-5 md:mb-6 lg:mb-8">
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-lg sm:rounded-xl md:rounded-2xl blur-md sm:blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500`}
                      ></div>
                      <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center border border-white/20 bg-white/10 group-hover:bg-white/20 transition-all duration-500">
                        <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white group-hover:scale-110 transition-transform duration-500" />
                      </div>

                      {/* Index number */}
                      <span className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-xs sm:text-sm font-bold text-white/60">
                        {index + 1}
                      </span>
                    </div>

                    {/* Content */}
                    <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white mb-1 sm:mb-2 md:mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-500">
                      {service.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-3 sm:mb-4 md:mb-5 lg:mb-6">
                      {service.description}
                    </p>

                    {/* Features list */}
                    <ul className="space-y-1.5 sm:space-y-2 md:space-y-2.5 lg:space-y-3 mb-4 sm:mb-5 md:mb-6 lg:mb-8">
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-1.5 sm:gap-2 md:gap-3 text-gray-300 text-xs sm:text-sm"
                        >
                          <div
                            className={`w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-gradient-to-r ${service.color}`}
                          ></div>
                          {feature}
                        </li>
                      ))}
                    </ul>

                     {/* Mobile button - always visible */}
                  <div className="md:hidden mt-3">
                    <button className={`inline-flex items-center justify-center gap-1 sm:gap-2 w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg sm:rounded-xl bg-gradient-to-r ${service.color} text-white text-xs sm:text-sm font-semibold hover:shadow-lg transition-all duration-300 group/btn`}>
                      Learn more
                      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>

                    {/* Bottom accent line */}
                    <div
                      className={`absolute bottom-0 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r ${service.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                    ></div>
                  </div>

                  {/* Floating button on hover - hidden on mobile, shown on desktop hover */}
                  <div className=" md:block absolute -bottom-5 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:-bottom-6">
                    <button className="bg-white text-gray-900 rounded-full px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm font-semibold shadow-xl hover:shadow-2xl flex items-center gap-1 sm:gap-2 group/btn whitespace-nowrap">
                      Learn more
                      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>

                 
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 sm:mt-16 md:mt-20 lg:mt-24 text-center"></div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-20 md:h-24 lg:h-32 bg-gradient-to-t from-gray-900 to-transparent"></div>
      </section>
    </>
  );
}