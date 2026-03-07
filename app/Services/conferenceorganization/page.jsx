"use client";

import {
  Calendar,
  MapPin,
  UserCheck,
  Sparkles,
  ArrowRight,
  Users,
  Mic,
  Target,
  Award,
  Clock,
  Globe,
  CheckCircle,
  Download,
  Phone,
} from "lucide-react";
import BreadCrumb from "../../Components/BreadCrum";
import Link from "next/link";

export default function ConferenceOrganization() {
  const benefits = [
    {
      icon: Users,
      title: "Expert Planning",
      description:
        "Professional planning and coordination to ensure every detail of your conference runs smoothly.",
      color: "from-blue-500 to-cyan-400",
    },
    {
      icon: Mic,
      title: "Speaker Management",
      description:
        "Coordination with keynote speakers, medical experts, and industry leaders.",
      color: "from-purple-500 to-pink-400",
    },
    {
      icon: Target,
      title: "Attendee Engagement",
      description:
        "Interactive sessions, workshops, and networking opportunities for participants.",
      color: "from-amber-500 to-orange-400",
    },
    {
      icon: Award,
      title: "End-to-End Management",
      description:
        "From venue booking to event execution, we handle everything professionally.",
      color: "from-blue-500 to-cyan-400",
    },
  ];

  const process = [
    {
      number: "01",
      title: "Planning",
      description: "Understanding event goals and planning strategy.",
      color: "from-blue-500 to-cyan-400",
    },
    {
      number: "02",
      title: "Venue Selection",
      description: "Choosing the best venue and infrastructure.",
      color: "from-purple-500 to-pink-400",
    },
    {
      number: "03",
      title: "Speaker Coordination",
      description: "Inviting and managing keynote speakers.",
      color: "from-amber-500 to-orange-400",
    },
    {
      number: "04",
      title: "Registration",
      description: "Managing attendee registrations smoothly.",
      color: "from-blue-500 to-cyan-400",
    },
    {
      number: "05",
      title: "Execution",
      description: "Delivering a successful conference experience.",
      color: "from-purple-500 to-pink-400",
    },
  ];

  const features = [
    "Full conference planning & strategy",
    "Venue selection & management",
    "Speaker coordination & management",
    "Attendee registration system",
    "Live streaming & hybrid options",
    "Workshop & breakout sessions",
    "Networking event planning",
    "Post-event reporting & analytics",
  ];

  return (
    <>
      <BreadCrumb
        title="Conference Organization"
        backgroundImage="/Images/Home/Bread-crum-1.avif"
        path={[{ label: "Services" ,href:'/pages/NavBar-Links/NavServices'}, { label: "Conference Organization" }]}
      />

      <section className="relative py-8 sm:py-10 md:py-12 lg:py-16 overflow-hidden">
        {/* Animated Background - matching services page */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-900">
          {/* Floating orbs */}
          <div className="absolute top-10 left-10 w-32 h-32 sm:w-72 sm:h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 sm:w-80 sm:h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-96 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          {/* Hero Section */}
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            {/* Top badge */}
            <div className="inline-flex items-center gap-1 sm:gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6 md:mb-8">
              <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
              <span className="text-xs sm:text-sm font-medium text-gray-300">
                Professional Conference Management
              </span>
            </div>

            {/* Main title */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 px-2">
              <span className="text-white">Conference</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-300 bg-clip-text text-transparent">
                Organization
              </span>
            </h2>
            

            {/* Description */}
            <div className="relative max-w-3xl mx-auto">
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-16 sm:w-20 md:w-24 h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed px-4">
                We plan and manage professional medical conferences, summits,
                and industry events that connect healthcare leaders, innovators,
                and professionals from around the world.
              </p>
            </div>
          </div>

          {/* Service Explanation */}
          <div className="relative mb-16 sm:mb-20 md:mb-24">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12">
              <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4">
                    Professional Conference Management
                  </h3>
                  <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                    Our team specializes in organizing high-quality conferences
                    that bring together healthcare professionals, researchers,
                    innovators, and industry leaders. From planning to
                    execution, we handle every aspect of conference management
                    to ensure a successful and impactful event.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    {[
                      "Medical Conferences",
                      "Industry Summits",
                      "Scientific Meetings",
                    ].map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs sm:text-sm text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-2xl blur-2xl opacity-20"></div>
                  <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 bg-gradient-to-br from-blue-500/20 to-cyan-400/20 rounded-2xl border border-white/20 flex items-center justify-center">
                    <Calendar className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-white/80" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-16 sm:mb-20 md:mb-24">
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
                Why Choose Our
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  {" "}
                  Conference Services
                </span>
              </h3>
              <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
                Comprehensive solutions tailored to your conference needs
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="group relative">
                    <div className="relative h-full rounded-xl sm:rounded-2xl p-5 sm:p-6 bg-white/5 backdrop-blur-xl border border-white/10 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 overflow-hidden">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                      ></div>

                      <div className="relative mb-4">
                        <div
                          className={`absolute inset-0 bg-gradient-to-r ${benefit.color} rounded-lg blur-md opacity-20`}
                        ></div>
                        <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center border border-white/20 bg-white/10">
                          <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </div>
                      </div>

                      <h4 className="text-base sm:text-lg font-bold text-white mb-2">
                        {benefit.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Process Section */}
          <div className="mb-16 sm:mb-20 md:mb-24">
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
                Our
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {" "}
                  Conference Process
                </span>
              </h3>
              <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
                A systematic approach to delivering exceptional conferences
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {process.map((step, index) => (
                <div key={index} className="relative group">
                  <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-4 sm:p-5 text-center hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                    <div
                      className={`inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r ${step.color} mb-3 text-sm sm:text-base font-bold text-white`}
                    >
                      {step.number}
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-white mb-1">
                      {step.title}
                    </h4>
                    <p className="text-xs text-gray-400">{step.description}</p>
                  </div>

                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                      <ArrowRight className="w-4 h-4 text-white/30" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Features Grid */}
          <div className="mb-16 sm:mb-20 md:mb-24">
            <div className="bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white text-center mb-8">
                Everything Included in Our
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  {" "}
                  Conference Package
                </span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-2 group">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform">
                      <CheckCircle className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-xs sm:text-sm text-gray-300">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="relative mt-16 sm:mt-20 md:mt-24 lg:mt-32 overflow-hidden rounded-xl sm:rounded-2xl lg:rounded-3xl">
              {/* Animated background */}
              <div className="absolute inset-0 bg-[url('/Images/Home/Bread-crum-1.avif')] bg-cover bg-center"></div>

              {/* Floating orbs - responsive */}
              <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

              <div className="relative py-8 sm:py-10 md:py-12 lg:py-16 px-4 sm:px-6 md:px-8 text-center backdrop-blur-sm">
                <div className="inline-flex items-center gap-1 sm:gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-5 md:mb-6 lg:mb-8">
                  <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                  <span className="text-xs sm:text-sm font-medium text-white/90">
                    Contact Us
                  </span>
                </div>

                <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-3 md:mb-4">
                  Ready to Organize Your Conference?
                </h4>

                <p className="text-white/80 text-xs sm:text-sm md:text-base lg:text-lg mb-4 sm:mb-5 md:mb-6 lg:mb-8 max-w-xl mx-auto px-4">
                  Partner with us to organize impactful medical conferences that
                  connect professionals and drive innovation.
                </p>

                <button className="group inline-flex items-center gap-1 sm:gap-2 bg-white text-gray-900 px-5 sm:px-6 md:px-8 lg:px-10 py-3 sm:py-4 rounded-full text-xs sm:text-sm md:text-base font-semibold hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                  Contact Our Team
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-20 md:h-24 lg:h-32 bg-gradient-to-t from-gray-900 to-transparent"></div>
      </section>
    </>
  );
}
