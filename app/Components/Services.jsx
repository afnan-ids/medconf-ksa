"use client";

import { Calendar, MapPin, UserCheck } from "lucide-react";

const services = [
  {
    icon: Calendar,
    title: "Conference Organization",
    description: "Full planning, live workshops, international streaming",
  },
  {
    icon: MapPin,
    title: "Exhibition & Space Booking",
    description: "Interactive maps, dynamic pricing, PDF contracts",
  },
  {
    icon: UserCheck,
    title: "Practitioner Registration",
    description: "SCFHS license verification & compliance",
  },
];

export default function Services() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Theme (same colors as your BackgroundTheme component) */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-blue-950/80 to-black/90 -z-10" />
      <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-blue-600/25 blur-[140px] rounded-full -z-10 animate-pulse" />
      <div className="absolute bottom-[-250px] right-[-200px] w-[600px] h-[600px] bg-cyan-400/20 blur-[160px] rounded-full -z-10 animate-pulse" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        {/* Title */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Our{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Services
            </span>
          </h2>

          <p className="mt-4 text-gray-300 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Everything you need to deliver high-impact medical conferences,
            workshops, and compliant healthcare events in Saudi Arabia.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="group relative rounded-3xl p-8 border border-white/10 bg-white/5 backdrop-blur-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              >
                {/* Glow hover (same theme colors) */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-600/25 to-cyan-400/15 opacity-0 group-hover:opacity-100 blur-2xl transition duration-500" />

                {/* Icon */}
                <div className="relative w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border border-white/15 bg-white/10 group-hover:bg-white/15 transition duration-500">
                  <Icon className="w-8 h-8 text-blue-300 group-hover:text-cyan-200 transition duration-500" />
                </div>

                {/* Text */}
                <h3 className="relative text-xl font-bold text-white mb-3">
                  {service.title}
                </h3>

                <p className="relative text-gray-300 leading-relaxed text-sm md:text-base">
                  {service.description}
                </p>

                {/* Bottom accent line */}
                <div className="relative mt-6 w-12 h-[3px] rounded-full bg-gradient-to-r from-blue-500 to-cyan-300 group-hover:w-20 transition-all duration-500" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}