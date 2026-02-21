"use client";

import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Dr. Sarah Al-Hassan",
    title: "CEO, Riyadh Cardiology Center",
    quote:
      "MedConf KSA transformed our event engagement — registrations skyrocketed and feedback has been outstanding.",
  },
  {
    name: "Ahmed Al-Jabri",
    title: "Head of Exhibitors, Global Health Expo",
    quote:
      "The dashboard and portals made management seamless. Our exhibitors love the clarity and control.",
  },
  {
    name: "Fatima Al-Omari",
    title: "Healthcare Practitioner",
    quote:
      "The practitioner portal’s SCFHS verification saved us so much time — truly secure and efficient.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-24 overflow-hidden text-white">
      
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-800 to-purple-950 -z-20" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 -z-10" />

      {/* Glow Orbs */}
      <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-blue-600/30 blur-[140px] rounded-full -z-10 animate-pulse" />
      <div className="absolute bottom-[-250px] right-[-200px] w-[600px] h-[600px] bg-purple-500/30 blur-[160px] rounded-full -z-10 animate-pulse" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">

        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            What Our{" "}
            <span className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>

          <p className="mt-4 text-blue-200 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Real feedback from professionals who trust our conferences, portals & events.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="relative bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              <Quote className="w-8 h-8 text-purple-300 mb-4" />

              <p className="text-blue-200 leading-relaxed text-base mb-6">
                “{t.quote}”
              </p>

              <div className="font-semibold text-white">
                {t.name}
              </div>
              <div className="text-sm text-blue-300">
                {t.title}
              </div>

              <div className="absolute bottom-6 left-6 w-14 h-[3px] rounded-full bg-gradient-to-r from-blue-400 to-purple-400" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}