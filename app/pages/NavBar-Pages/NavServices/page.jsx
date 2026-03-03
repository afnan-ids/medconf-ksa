"use client";

import {
  Calendar,
  MapPin,
  UserCheck,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import BreadCrum from "../../../Components/BreadCrum";

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
    <BreadCrum
        title="Services"
        backgroundImage="/Images/Home/Bread-crum-1.avif"
        path={["Home", "Pages", "Services"]}
      />
    <section className="relative py-28 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-900">
        {/* Floating orbs */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>

        {/* Grid pattern */}
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section Header with decorative elements */}
        <div className="text-center mb-20">
          {/* Top badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
            <Sparkles className="w-4 h-4 text-yellow-300" />
            <span className="text-sm font-medium text-gray-300">
              Premium Healthcare Solutions
            </span>
          </div>

          {/* Main title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Comprehensive</span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-300 bg-clip-text text-transparent">
              Event Services
            </span>
          </h2>

          {/* Description with decorative line */}
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-24 h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
              Everything you need to deliver high-impact medical conferences,
              workshops, and compliant healthcare events in Saudi Arabia.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div key={index} className="group relative">
                {/* Card with glass effect */}
                <div className="relative h-full rounded-3xl p-8 bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                  {/* Gradient hover effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  ></div>

                  {/* Shine effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </div>

                  {/* Icon with animated background */}
                  <div className="relative mb-8">
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500`}
                    ></div>
                    <div className="relative w-16 h-16 rounded-2xl flex items-center justify-center border border-white/20 bg-white/10 group-hover:bg-white/20 transition-all duration-500">
                      <Icon className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-500" />
                    </div>

                    {/* Index number */}
                    <span className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-sm font-bold text-white/60">
                      {index + 1}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-500">
                    {service.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features list */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-3 text-gray-300 text-sm"
                      >
                        <div
                          className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color}`}
                        ></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Bottom accent line */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                  ></div>
                </div>

                {/* Floating button on hover */}
                <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:-bottom-6">
                  <button className="bg-white text-gray-900 rounded-full px-6 py-3 text-sm font-semibold shadow-xl hover:shadow-2xl flex items-center gap-2 group/btn">
                    Learn more
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 text-center">
          <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-8 py-4 hover:bg-white/10 transition-all duration-300 cursor-pointer group">
            <span className="text-gray-300">Need a custom solution?</span>
            <span className="text-white font-semibold group-hover:ml-2 transition-all">
              Talk to our team
            </span>
            <ArrowRight className="w-5 h-5 text-blue-400 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent"></div>
    </section></>
  );
}
