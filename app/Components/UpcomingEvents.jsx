"use client";

import Link from "next/link";
import { Calendar, ChevronRight, MapPin } from "lucide-react";

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
    <section className="relative py-20 overflow-hidden">
      {/* Background Theme (same as BackgroundTheme component) */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-blue-950/80 to-black/90 -z-10" />
      <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-blue-600/25 blur-[140px] rounded-full -z-10 animate-pulse" />
      <div className="absolute bottom-[-250px] right-[-200px] w-[600px] h-[600px] bg-cyan-400/20 blur-[160px] rounded-full -z-10 animate-pulse" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        {/* Title */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Upcoming{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Events
            </span>
          </h2>

          <p className="mt-4 text-gray-300 text-base md:text-lg leading-relaxed">
            Explore upcoming conferences, workshops, and exhibitions in KSA.
          </p>
        </div>

        {/* Event Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="group relative bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              {/* Hover Glow (theme colors) */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-600/25 to-cyan-400/15 opacity-0 group-hover:opacity-100 blur-2xl transition duration-500" />

              <div className="relative flex items-start gap-5">
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-white/10 border border-white/15 group-hover:bg-white/15 transition duration-500">
                  <Calendar className="w-7 h-7 text-blue-300 group-hover:text-cyan-200 transition duration-500" />
                </div>

                {/* Info */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {event.title}
                  </h3>

                  <p className="text-gray-300 mb-1">{event.date}</p>

                  <div className="flex items-center gap-2 text-gray-400 text-sm mb-5">
                    <MapPin className="w-4 h-4 text-cyan-300" />
                    {event.venue}
                  </div>

                  <Link
                    href="#"
                    className="inline-flex items-center gap-1 font-semibold text-blue-300 hover:text-cyan-300 transition-all group/link"
                  >
                    View Details
                    <ChevronRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Bottom Accent Line */}
              <div className="relative mt-7 w-14 h-[3px] rounded-full bg-gradient-to-r from-blue-400 to-cyan-300 group-hover:w-24 transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <Link
            href="#"
            className="inline-flex items-center justify-center px-8 py-4 rounded-2xl font-semibold text-white shadow-lg hover:shadow-2xl transition duration-300 bg-gradient-to-r from-blue-600 to-cyan-500"
          >
            View All Events
            <ChevronRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}