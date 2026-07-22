"use client";

import {
  Quote,
  Star,
  Sparkles,
  ShieldCheck,
  ChevronRight,
  ChevronLeft,
  ChevronRight,
  User,
  Briefcase,
  GraduationCap,
  Heart,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const testimonials = [
  {
    name: "Dr. Sarah Al-Hassan",
    title: "CEO, Riyadh Cardiology Center",
    quote:
      "HPQL transformed our event engagement — registrations skyrocketed and feedback has been outstanding.",
    rating: 5,
    role: "Organizer",
    yearsAttended: "5 years",
    color: "from-green-500 to-blue-400",
    icon: Briefcase,
  },
  {
    name: "Ahmed Al-Jabri",
    title: "Head of Exhibitors, Global Health Expo",
    quote:
      "The dashboard and portals made management seamless. Our exhibitors love the clarity and control.",
    rating: 5,
    role: "Exhibitor",
    yearsAttended: "3 years",
    color: "from-purple-500 to-pink-400",
    icon: User,
  },
  {
    name: "Fatima Al-Omari",
    title: "Healthcare Practitioner",
    quote:
      "The practitioner portal's SCFHS verification saved us so much time — truly secure and efficient.",
    rating: 5,
    role: "Attendee",
    yearsAttended: "4 years",
    color: "from-blue-800 to-cyan-600",
    icon: Heart,
  },
  {
    name: "Dr. Khalid Al-Mansour",
    title: "Director of Medical Education, KSU",
    quote:
      "The CME accreditation process was seamless. Our team received their hours within days.",
    rating: 5,
    role: "Speaker",
    yearsAttended: "6 years",
    color: "from-amber-500 to-orange-400",
    icon: GraduationCap,
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  const current = testimonials[activeIndex];
  const Icon = current.icon;

  return (
    <section className="relative w-full mx-auto overflow-hidden">
      {/* Dark themed background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-900">
        <div className="absolute top-10 left-10 w-32 h-32 sm:w-72 sm:h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 sm:w-80 sm:h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-1/3 w-48 h-48 sm:w-96 sm:h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Glass container */}
      <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-4 py-4">
        <div className="rounded-2xl sm:rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-2xl overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-blue-500/50"></div>

          <div className="p-4 sm:p-8 lg:p-12 max-w-7xl mx-auto relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl hidden sm:block"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl hidden sm:block"></div>

            {/* Header */}
            <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 md:mb-16 relative z-10">
              <div className="relative inline-block group/badge mb-4 sm:mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-lg opacity-0 group-hover/badge:opacity-50 transition-opacity duration-500"></div>
                <div className="relative inline-flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1 sm:py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl text-white text-[10px] sm:text-xs">
                  <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400" />
                  <span>Trusted Since 2014</span>
                  <span className="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-white/30 rounded-full"></span>
                  <ShieldCheck className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
                  <span>500+ Events</span>
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-4 px-2">
                Testi
                <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  monials
                </span>
              </h2>

              <div className="relative w-20 sm:w-32 h-1 mx-auto my-3 sm:my-6">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-sm"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full"></div>
              </div>

              <p className="text-xs sm:text-sm md:text-lg text-gray-300 mt-3 sm:mt-6 max-w-2xl mx-auto px-4">
                Real feedback from healthcare professionals who trust our events
              </p>
            </div>

            {/* Main Creative Testimonial Display - Glassy Style */}
            <div className="relative z-10 max-w-5xl mx-auto">
              {/* Main Glass Card */}
              <div
                className="relative group overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-lg hover:shadow-2xl transition-all duration-500"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {/* Gradient hover effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${current.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                ></div>

                {/* Shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>

                {/* Icon with animated background */}
                <div className="relative mb-6 sm:mb-8">
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${current.color} rounded-xl sm:rounded-2xl blur-md sm:blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500`}
                  ></div>
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl flex items-center justify-center border border-white/20 bg-white/10 group-hover:bg-white/20 group-hover:scale-110 transition-all duration-500">
                    <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-white group-hover:scale-110 transition-transform duration-500" />
                  </div>

                  {/* Role Badge */}
                  <div
                    className={`absolute -top-3 -right-3 sm:-top-4 sm:-right-4 bg-gradient-to-r ${current.color} rounded-full px-3 py-1`}
                  >
                    <span className="text-[10px] sm:text-xs font-bold text-white">
                      {current.role}
                    </span>
                  </div>
                </div>

                {/* Quote Text */}
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white leading-relaxed font-medium mb-6 sm:mb-8">
                  "{current.quote}"
                </p>

                {/* Rating Stars with gradient line */}
                <div className="flex items-center gap-4 mb-6 sm:mb-8">
                  <div className="flex gap-1">
                    {[...Array(current.rating)].map((_, idx) => (
                      <Star
                        key={idx}
                        className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <div
                    className={`w-px h-6 bg-gradient-to-b ${current.color}`}
                  ></div>
                  <div
                    className={`text-xs sm:text-sm text-transparent bg-clip-text bg-gradient-to-r ${current.color} font-medium`}
                  >
                    {current.yearsAttended} attending
                  </div>
                </div>

                {/* Author Divider */}
                <div
                  className={`w-16 h-0.5 bg-gradient-to-r ${current.color} mb-5 sm:mb-6`}
                ></div>

                {/* Author Info */}
                <div>
                  <p className="text-lg sm:text-xl font-bold text-white">
                    {current.name}
                  </p>
                  <p className="text-sm text-gray-400">{current.title}</p>
                </div>
              </div>

              {/* Navigation - Creative circular buttons */}
              <div className="flex justify-center gap-4 mt-8 sm:mt-10">
                <button
                  onClick={prevTestimonial}
                  className="group w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all duration-300 hover:scale-110"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                </button>

                {/* Creative Dots with gradient colors */}
                <div className="flex gap-2 items-center">
                  {testimonials.map((t, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveIndex(idx)}
                      className={`relative h-2 rounded-full transition-all duration-500 ${
                        activeIndex === idx
                          ? `w-8 bg-gradient-to-r ${t.color}`
                          : "w-2 bg-white/30 hover:bg-white/50"
                      }`}
                    >
                      {activeIndex === idx && (
                        <span
                          className={`absolute -top-4 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-gradient-to-r ${t.color}`}
                        ></span>
                      )}
                    </button>
                  ))}
                </div>

                <button
                  onClick={nextTestimonial}
                  className="group w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all duration-300 hover:scale-110"
                >
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                </button>
              </div>
            </div>

            {/* Mini Testimonials Strip - Clean Active State */}
            <div className="mt-12 sm:mt-16 relative z-10">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                {testimonials.map((t, idx) => {
                  const IconMini = t.icon;
                  const isActive = activeIndex === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => setActiveIndex(idx)}
                      className={`group relative text-left p-3 sm:p-4 rounded-xl sm:rounded-2xl transition-all duration-500 ${
                        isActive
                          ? "bg-white/10 border border-white/20 shadow-lg"
                          : "bg-white/5 border border-white/10 hover:bg-white/10"
                      }`}
                    >
                      {/* Mini glass effect - only on hover, not on active */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${t.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                      ></div>

                      {/* Active glow effect - subtle */}
                      {isActive && (
                        <div
                          className={`absolute inset-0 bg-gradient-to-r ${t.color} opacity-5 rounded-xl sm:rounded-2xl`}
                        ></div>
                      )}

                      <div className="flex items-center gap-2 mb-2 relative z-10">
                        <div
                          className={`w-6 h-6 rounded-full bg-gradient-to-r ${t.color} flex items-center justify-center ${isActive ? "ring-1 ring-white/30" : ""}`}
                        >
                          <IconMini className="w-3 h-3 text-white" />
                        </div>
                        <div className="flex gap-0.5">
                          {[...Array(t.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-2 h-2 fill-yellow-400 text-yellow-400"
                            />
                          ))}
                        </div>
                      </div>

                      <p
                        className={`text-xs line-clamp-2 transition-colors duration-300 relative z-10 ${
                          isActive
                            ? "text-gray-200"
                            : "text-gray-400 group-hover:text-gray-300"
                        }`}
                      >
                        "{t.quote.slice(0, 55)}..."
                      </p>

                      <p
                        className={`text-[10px] mt-2 transition-colors duration-300 relative z-10 ${
                          isActive ? "text-gray-300" : "text-gray-500"
                        }`}
                      >
                        {t.name}
                      </p>

                      {/* Active indicator - elegant top line instead of bottom */}
                      {isActive && (
                        <div
                          className={`absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r ${t.color} rounded-full`}
                        ></div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
