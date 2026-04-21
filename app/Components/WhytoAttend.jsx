"use client";

import {
  Users,
  Award,
  Globe,
  Sparkles,
  ShieldCheck,
  Clock,
  Handshake,
  Lightbulb,
  Star,
  ArrowRight,
  Calendar,
  MapPin,
  TrendingUp,
  CheckCircle2,
  Mic2,
  Briefcase,
  Network,
  Ticket,
  Video,
  FileText,
  Headphones,
  Coffee,
  Wifi,
  Smartphone,
  Zap,
} from "lucide-react";
import Link from "next/link";

// Key highlights - split into two columns
const leftHighlights = [
  {
    icon: Award,
    title: "Earn CME Credits",
    description:
      "Accredited sessions providing SCFHS-approved Continuing Medical Education hours.",
    highlight: "24+ CME Hours Available",
    color: "blue",
  },
  {
    icon: Users,
    title: "Network with Leaders",
    description:
      "Connect with 5,000+ healthcare professionals and key opinion leaders.",
    highlight: "5,000+ Attendees Expected",
    color: "purple",
  },
  {
    icon: Lightbulb,
    title: "Cutting-Edge Insights",
    description:
      "Discover breakthrough research and emerging healthcare technologies.",
    highlight: "100+ Expert Speakers",
    color: "cyan",
  },
];

const rightHighlights = [
  {
    icon: Handshake,
    title: "Strategic Partnerships",
    description:
      "Meet potential collaborators and sponsors to accelerate growth.",
    highlight: "150+ Exhibitors",
    color: "emerald",
  },
  {
    icon: TrendingUp,
    title: "Career Advancement",
    description:
      "Gain competitive advantage through workshops and certifications.",
    highlight: "90% Career Growth Rate",
    color: "amber",
  },
  {
    icon: Globe,
    title: "Global Perspective",
    description: "Learn from international experts and global best practices.",
    highlight: "35+ Countries Represented",
    color: "rose",
  },
];

// Quick stats for the top banner
const quickStats = [
  { icon: Calendar, label: "Date", value: "Dec 10-12, 2024", color: "blue" },
  {
    icon: MapPin,
    label: "Venue",
    value: "Riyadh International Convention Center",
    color: "purple",
  },
  { icon: Ticket, label: "Early Bird", value: "Save 30%", color: "cyan" },
  { icon: Clock, label: "Registration", value: "Limited Seats", color: "emerald" },
];

// Perks/Benefits list
const perks = [
  "Certificate of Attendance",
  "Lunch & Coffee Breaks",
  "Networking Reception",
  "Conference Kit",
  "Access to Recordings",
  "Exhibition Hall Access",
];

// Session tracks
const sessionTracks = [
  { name: "Digital Health", icon: Smartphone, sessions: 12, color: "blue" },
  { name: "Clinical Excellence", icon: Award, sessions: 18, color: "purple" },
  { name: "Healthcare Leadership", icon: Briefcase, sessions: 10, color: "cyan" },
  { name: "Medical Research", icon: FileText, sessions: 15, color: "emerald" },
];

const colorVariants = {
  blue: {
    bg: "bg-blue-600",
    bgLight: "bg-blue-500/20",
    border: "border-blue-500/30",
    text: "text-blue-400",
    gradient: "from-blue-600 to-cyan-400",
    shadow: "shadow-blue-600/30",
  },
  purple: {
    bg: "bg-purple-600",
    bgLight: "bg-purple-500/20",
    border: "border-purple-500/30",
    text: "text-purple-400",
    gradient: "from-purple-600 to-pink-500",
    shadow: "shadow-purple-600/30",
  },
  cyan: {
    bg: "bg-cyan-600",
    bgLight: "bg-cyan-500/20",
    border: "border-cyan-500/30",
    text: "text-cyan-400",
    gradient: "from-cyan-500 to-blue-500",
    shadow: "shadow-cyan-600/30",
  },
  emerald: {
    bg: "bg-emerald-600",
    bgLight: "bg-emerald-500/20",
    border: "border-emerald-500/30",
    text: "text-emerald-400",
    gradient: "from-emerald-600 to-teal-500",
    shadow: "shadow-emerald-600/30",
  },
  amber: {
    bg: "bg-amber-600",
    bgLight: "bg-amber-500/20",
    border: "border-amber-500/30",
    text: "text-amber-400",
    gradient: "from-amber-600 to-orange-500",
    shadow: "shadow-amber-600/30",
  },
  rose: {
    bg: "bg-rose-600",
    bgLight: "bg-rose-500/20",
    border: "border-rose-500/30",
    text: "text-rose-400",
    gradient: "from-rose-600 to-pink-500",
    shadow: "shadow-rose-600/30",
  },
};

export default function WhyAttend() {
  return (
    <section className="relative w-full mx-auto overflow-hidden">
      {/* Dark themed background - matching other components */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-900">
        <div className="absolute top-10 left-10 w-32 h-32 sm:w-72 sm:h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 sm:w-80 sm:h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 left-1/3 w-48 h-48 sm:w-96 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-32 h-32 sm:w-64 sm:h-64 bg-emerald-500/20 rounded-full blur-3xl animate-pulse delay-700 hidden sm:block"></div>
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
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl hidden sm:block"></div>

            {/* Header */}
            <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 md:mb-16 relative z-10">
              <div className="relative inline-block group/badge mb-4 sm:mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-lg opacity-0 group-hover/badge:opacity-50 transition-opacity duration-500"></div>
                <div className="relative inline-flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1 sm:py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl text-white text-[10px] sm:text-xs">
                  <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
                  <span>Don't Miss Out</span>
                  <span className="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-white/30 rounded-full"></span>
                  <ShieldCheck className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400" />
                  <span>Limited Seats Available</span>
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-4 px-2">
                Why{" "}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  Attend?
                </span>
              </h2>

              <div className="relative w-20 sm:w-32 h-1 mx-auto my-3 sm:my-6">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-sm"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full"></div>
              </div>

              <p className="text-xs sm:text-sm md:text-lg text-gray-300 mt-3 sm:mt-6 max-w-2xl mx-auto px-4">
                Join thousands of healthcare professionals at the region's most
                impactful medical conference. Here's why you can't afford to
                miss it
              </p>
            </div>

            {/* Quick Stats Banner - Enhanced with colors */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-12 sm:mb-16 relative z-10">
              {quickStats.map((stat, index) => {
                const Icon = stat.icon;
                const colors = colorVariants[stat.color];
                return (
                  <div
                    key={index}
                    className="group flex items-center gap-3 sm:gap-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-3 sm:p-4 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br ${colors.gradient} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-[10px] sm:text-xs text-gray-400">
                        {stat.label}
                      </p>
                      <p className="text-xs sm:text-sm font-semibold text-white">
                        {stat.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Highlights Section - Two Column Layout */}
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16 relative z-10">
              {/* Left Column Highlights */}
              <div className="space-y-4 sm:space-y-5">
                {leftHighlights.map((highlight, index) => {
                  const Icon = highlight.icon;
                  const colors = colorVariants[highlight.color];
                  return (
                    <div
                      key={index}
                      className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-5 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-1 overflow-hidden"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-r ${colors.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-700`} />
                      <div className="relative flex gap-3 sm:gap-4">
                        <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${colors.gradient} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-base sm:text-lg font-semibold text-white mb-1">
                            {highlight.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-gray-300 mb-2">
                            {highlight.description}
                          </p>
                          <span className={`inline-flex items-center gap-1 text-[10px] sm:text-xs ${colors.text} font-medium`}>
                            <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                            {highlight.highlight}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Right Column Highlights */}
              <div className="space-y-4 sm:space-y-5">
                {rightHighlights.map((highlight, index) => {
                  const Icon = highlight.icon;
                  const colors = colorVariants[highlight.color];
                  return (
                    <div
                      key={index}
                      className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-5 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-1 overflow-hidden"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-r ${colors.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-700`} />
                      <div className="relative flex gap-3 sm:gap-4">
                        <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${colors.gradient} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-base sm:text-lg font-semibold text-white mb-1">
                            {highlight.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-gray-300 mb-2">
                            {highlight.description}
                          </p>
                          <span className={`inline-flex items-center gap-1 text-[10px] sm:text-xs ${colors.text} font-medium`}>
                            <TrendingUp className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                            {highlight.highlight}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Session Tracks Section */}
            <div className="mb-12 sm:mb-16 relative z-10">
              <div className="text-center mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">
                  Conference{" "}
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                    Tracks
                  </span>
                </h3>
                <p className="text-xs sm:text-sm text-gray-400">
                  Choose from 55+ sessions across 4 specialized tracks
                </p>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                {sessionTracks.map((track, index) => {
                  const Icon = track.icon;
                  const colors = colorVariants[track.color];
                  return (
                    <div
                      key={index}
                      className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-3 sm:p-4 text-center hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${colors.gradient} flex items-center justify-center mx-auto mb-2 sm:mb-3 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <h4 className="text-sm sm:text-base font-semibold text-white mb-1">
                        {track.name}
                      </h4>
                      <p className={`text-[10px] sm:text-xs ${colors.text} font-medium`}>
                        {track.sessions} Sessions
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Why Different Section */}
            <div className="mb-12 sm:mb-16 relative z-10">
              <div className="bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-cyan-600/5 border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 backdrop-blur-xl">
                <div className="text-center mb-6 sm:mb-8">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">
                    Why This Conference is{" "}
                    <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                      Different
                    </span>
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 max-w-2xl mx-auto">
                    Not just another event — a practical, real-world experience
                    designed for impact
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    {[
                      "Most conferences give you presentations and coffee breaks. We give you a transformative experience that stays with you long after you leave.",
                      "Every session is built for actionable knowledge — something you can apply immediately in real clinical settings.",
                      "Connect naturally with professionals — no awkward networking, just meaningful conversations."
                    ].map((text, idx) => (
                      <div
                        key={idx}
                        className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300 hover:-translate-y-0.5"
                      >
                        <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                          {text.split("—").map((part, i) => (
                            <span key={i}>
                              {i === 0 ? part : ""}
                              {i === 1 && (
                                <span className="text-blue-400 font-medium">
                                  {part.split(" ")[0]}
                                </span>
                              )}
                              {i === 1 && " " + part.split(" ").slice(1).join(" ")}
                            </span>
                          ))}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="relative">
                    <div className="h-full bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-cyan-600/20 border border-white/10 rounded-xl p-5 sm:p-6 flex flex-col justify-between hover:border-white/20 transition-all duration-300">
                      <div>
                        <div className="flex gap-1 mb-3">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-yellow-400" />
                          ))}
                        </div>
                        <p className="text-sm sm:text-base italic text-gray-200 leading-relaxed">
                          "What sets Medconf apart isn't just the quality of
                          speakers — it's how they make complex topics
                          practical. I left with protocols I implemented the
                          very next week."
                        </p>
                      </div>
                      <div className="mt-4 pt-4 border-t border-white/10">
                        <p className="text-sm text-white font-medium">
                          Dr. Fatima Al-Zahrani
                        </p>
                        <p className="text-xs text-gray-400">
                          Previous Attendee
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 sm:mt-8 text-center">
                  <p className="text-xs sm:text-sm text-gray-400 max-w-2xl mx-auto">
                    Whether attending in Riyadh or virtually, you get the same{" "}
                    <span className="text-blue-400 font-medium">
                      high-quality experience and resources
                    </span>{" "}
                    designed for real growth.
                  </p>
                </div>
              </div>
            </div>

            {/* Perks/Benefits Row */}
            <div className="mb-10 sm:mb-12 md:mb-16 relative z-10">
              <div className="text-center mb-5 sm:mb-6 md:mb-8">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
                  What's{" "}
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                    Included?
                  </span>
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 mt-1">
                  Your registration includes everything you need for a seamless
                  experience
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                {perks.map((perk, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm text-gray-300 hover:bg-white/10 hover:border-blue-500/30 hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
                    {perk}
                  </span>
                ))}
              </div>
            </div>

            {/* Countdown / Urgency Section */}
            <div className="relative z-10 mb-8 sm:mb-10">
              <div className="bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-cyan-600/10 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 text-center hover:border-white/20 transition-all duration-500">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
                  <div className="text-center sm:text-left">
                    <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-yellow-500/20 border border-yellow-500/30 mb-2">
                      <Zap className="w-3 h-3 text-yellow-400" />
                      <span className="text-[10px] text-yellow-400 font-medium">Limited Time Offer</span>
                    </div>
                    <p className="text-base sm:text-lg md:text-xl font-bold text-white">
                      Early Bird Registration Ends Soon!
                    </p>
                  </div>

                  <div className="flex gap-2 sm:gap-3 md:gap-4">
                    {[
                      { value: "15", label: "Days", color: "blue" },
                      { value: "08", label: "Hours", color: "purple" },
                      { value: "45", label: "Mins", color: "cyan" },
                      { value: "22", label: "Secs", color: "emerald" },
                    ].map((item, idx) => {
                      const colors = colorVariants[item.color];
                      return (
                        <div key={idx} className="text-center">
                          <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br ${colors.gradient} flex items-center justify-center shadow-lg`}>
                            <span className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                              {item.value}
                            </span>
                          </div>
                          <p className="text-[10px] sm:text-xs text-gray-400 mt-1">
                            {item.label}
                          </p>
                        </div>
                      );
                    })}
                  </div>

                  <Link
                    href="#"
                    className="relative inline-flex items-center gap-2 group/btn"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-xl opacity-0 group-hover/btn:opacity-60 transition-opacity duration-500"></div>
                    <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-medium hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2">
                      Register Now
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover/btn:opacity-20 transition-opacity"></div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Bottom Note */}
            <div className="text-center relative z-10">
              <p className="text-[10px] sm:text-xs text-gray-500">
                * Group discounts available for 5+ registrations • Contact us
                for corporate packages
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}