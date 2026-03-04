"use client"
import Link from "next/link";
import { Calendar, MapPin, ArrowRight, Sparkles, Eye, Compass, ShieldCheck, Globe } from "lucide-react";

const events = [
  {
    title: "Global Health Exhibition 2026",
    date: "October 26-29, 2026",
    venue: "Riyadh International Convention Center",
    type: "upcoming",
  },
  {
    title: "Cardiology Summit 2026",
    date: "November 15-18, 2026",
    venue: "Jeddah Superdome",
    type: "upcoming",
  },
];

export default function UpcomingEvents() {
  return (
    <section className="relative w-full mx-auto overflow-hidden">
      {/* Dark themed background - matching footer */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-900">
        {/* Floating orbs - exactly like footer */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Glass container - matching footer's glass effect */}
      <div className="relative z-10 mx-auto px-6 lg:px-4 py-4">
        <div className="rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-2xl overflow-hidden hover:shadow-[0_30px_60px_-15px_rgba(79,70,229,0.3)] transition-all duration-700">
          
          {/* Top gradient line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
          
          <div className="p-10 lg:p-12 max-w-7xl mx-auto relative">
            {/* Decorative orbs inside */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>

            {/* Header - matching footer typography */}
            <div className="max-w-3xl mx-auto text-center mb-16 relative z-10">
              {/* Trust badge - like footer */}
              <div className="relative inline-block group/badge mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-lg opacity-0 group-hover/badge:opacity-50 transition-opacity duration-500"></div>
                <div className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl text-white text-xs">
                  <Sparkles className="w-4 h-4 text-blue-400" />
                  <span>Upcoming Gatherings</span>
                  <span className="w-1 h-1 bg-white/30 rounded-full"></span>
                  <Compass className="w-4 h-4 text-cyan-400" />
                  <span>KSA 2026</span>
                </div>
              </div>

              {/* Title with gradient */}
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  Upcoming
                </span>{" "}
                Events
              </h2>

              {/* Decorative line - matching footer style */}
              <div className="relative w-32 h-1 mx-auto my-6">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-sm"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full"></div>
              </div>

              <p className="text-lg text-gray-300 mt-6 max-w-2xl mx-auto">
                Explore upcoming conferences, workshops, and exhibitions in Saudi Arabia.
              </p>
            </div>

            {/* Event Cards Grid */}
            <div className="grid md:grid-cols-2 gap-6 relative z-10">
              {events.map((event, index) => (
                <div
                  key={index}
                  className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 overflow-hidden"
                >
                  {/* Hover glow effect with gradient matching service page */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  {/* Corner accent - matching footer style */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/20 rounded-bl-[60px] rounded-tr-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-50 group-hover:opacity-100" />

                  {/* Icon container - matching footer brand icon style */}
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-400 blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-500 rounded-2xl" />
                    <div className="relative w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-400 shadow-lg group-hover:scale-110 transition-transform duration-500">
                      {index === 0 ? (
                        <Calendar className="w-8 h-8 text-white" />
                      ) : (
                        <Calendar className="w-8 h-8 text-white" />
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-blue-200 group-hover:bg-clip-text transition-all duration-300">
                    {event.title}
                  </h3>

                  {/* Date and venue badges - matching service page stats style */}
                  <div className="space-y-2 mb-6">
                    <div className="relative inline-block group/date mr-2">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full blur-md opacity-0 group-hover/date:opacity-50 transition-opacity duration-500"></div>
                      <div className="relative inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl text-xs">
                        <Calendar className="w-3 h-3 text-cyan-400" />
                        <span className="text-gray-300">{event.date}</span>
                      </div>
                    </div>
                    
                    <div className="relative inline-block group/venue">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full blur-md opacity-0 group-hover/venue:opacity-50 transition-opacity duration-500"></div>
                      <div className="relative inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl text-xs">
                        <MapPin className="w-3 h-3 text-purple-400" />
                        <span className="text-gray-300">{event.venue}</span>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced button - matching service page button style */}
                  <Link
                    href="#"
                    className="relative inline-flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl text-sm font-medium group/btn overflow-hidden transition-all duration-300 border border-blue-500/30 hover:border-transparent"
                  >
                    {/* Gradient background on hover */}
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-400 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
                    
                    {/* Glow effect */}
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-400 opacity-0 group-hover/btn:opacity-40 blur-xl transition-opacity duration-500" />
                    
                    {/* Button text */}
                    <span className="relative z-10 flex items-center gap-2 text-gray-300 group-hover/btn:text-white transition-colors duration-300">
                      View Details
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform duration-300" />
                    </span>
                    
                    {/* Bottom line animation */}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-400 group-hover/btn:w-full transition-all duration-500" />
                  </Link>
                </div>
              ))}
            </div>

            {/* Bottom CTA - matching footer style */}
            <div className="text-center mt-12 relative z-10">
              <Link
                href="#"
                className="relative inline-flex items-center gap-3 group/cta"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-xl opacity-0 group-hover/cta:opacity-60 transition-opacity duration-500"></div>
                <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-3">
                  <Eye className="w-5 h-5" />
                  <span>View All Events</span>
                  <ArrowRight className="w-5 h-5 group-hover/cta:translate-x-1 transition-transform" />
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