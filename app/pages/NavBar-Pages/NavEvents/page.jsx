"use client";

import Image from "next/image";
import { Sparkles, Calendar, MapPin, Download, ArrowRight } from "lucide-react";
import BreadCrum from "../../../Components/BreadCrum";

const EventsSection = () => {
  const pastEvents = [
    {
      id: 1,
      image: "/Images/Events/GlobalHealthSaudi.jpg",
      title: "Healthcare Innovation Summit 2024",
      date: "September 2024",
      report: true,
    },
    {
      id: 2,
      image: "/Images/Events/Riyadh-2.webp",
      title: "Digital Health Forum",
      date: "April 2024",
      report: true,
    },
    {
      id: 3,
      image: "/Images/Events/Arabnews.jpg",
      title: "Medical Excellence Conference",
      date: "August 2019",
      report: true,
    },
    {
      id: 4,
      image: "/Images/Events/Meeting.jpg",
      title: "Global Health Assembly",
      date: "March 2024",
      report: true,
    },
  ];

  return (
    <>
      <BreadCrum
        title="Portals"
        backgroundImage="/Images/Home/Bread-crum-1.avif"
        path={["Home", "Pages", "Portals"]}
      />
      <section id="events" className="relative py-28 overflow-hidden">
        {/* Animated Background - Matching Services section */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-900">
          {/* Floating orbs */}
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>

          {/* Grid pattern */}
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          {/* HEADER - Matching Services section style */}
          <div className="text-center mb-20">
            {/* Top badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
              <Sparkles className="w-4 h-4 text-yellow-300" />
              <span className="text-sm font-medium text-gray-300">
                Events & Insights
              </span>
            </div>

            {/* Main title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-white">Shaping the Future of</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-300 bg-clip-text text-transparent">
                Healthcare
              </span>
            </h1>

            {/* Description with decorative line */}
            <div className="relative max-w-3xl mx-auto">
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-24 h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
                Bringing together healthcare leaders, innovators, and global
                experts to shape the future of medical excellence.
              </p>
            </div>
          </div>

          {/* FEATURED EVENT */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-40">
            {/* Image with enhanced effects */}
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition duration-700"></div>

              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] border border-white/10">
                <Image
                  src="/Images/Events/GlobalHealthSaudi.jpg"
                  alt="Global Health Exhibition"
                  width={800}
                  height={600}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-1000"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/60 via-transparent to-transparent"></div>

                {/* Shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
              </div>
            </div>

            {/* Content - Updated with dark theme */}
            <div className="space-y-8">
              <div>
                <span className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-semibold border border-blue-500/30">
                  <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
                  UPCOMING EVENT 2026
                </span>
              </div>

              <h2 className="text-4xl font-bold text-white leading-tight">
                Global Health
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent block">
                  Exhibition 2026
                </span>
              </h2>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="p-2 bg-blue-500/20 rounded-lg border border-blue-500/30">
                    <MapPin className="w-5 h-5 text-blue-400" />
                  </div>
                  <p className="text-lg">
                    Riyadh International Convention Center
                  </p>
                </div>

                <div className="flex items-center gap-3 text-gray-300">
                  <div className="p-2 bg-purple-500/20 rounded-lg border border-purple-500/30">
                    <Calendar className="w-5 h-5 text-purple-400" />
                  </div>
                  <p className="text-lg">October 26–29, 2026</p>
                </div>
              </div>

              {/* Stats - Updated with dark theme */}
              <div className="grid grid-cols-3 gap-6 py-6 border-y border-white/10">
                <div className="text-center">
                  <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                    500+
                  </p>
                  <p className="text-sm text-gray-400 mt-1">Speakers</p>
                </div>
                <div className="text-center border-x border-white/10">
                  <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                    100+
                  </p>
                  <p className="text-sm text-gray-400 mt-1">Exhibitors</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                    50+
                  </p>
                  <p className="text-sm text-gray-400 mt-1">Countries</p>
                </div>
              </div>

              {/* CTA Buttons - Updated with Services section style */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:shadow-blue-500/25 hover:-translate-y-1 transition-all duration-300 flex-1">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Register Now
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>

                <button className="group border-2 border-blue-500/50 text-blue-400 px-8 py-4 rounded-full font-semibold hover:bg-blue-500/10 hover:-translate-y-1 hover:border-blue-400 transition-all duration-300 flex-1 backdrop-blur-sm">
                  <span className="flex items-center justify-center gap-2">
                    Book Booth
                    <svg
                      className="w-5 h-5 group-hover:rotate-12 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* PAST EVENTS */}
          <div className="mb-20">
            <div className="flex items-center justify-between mb-14">
              <h3 className="text-3xl font-semibold text-white">Past Events</h3>
              <span className="text-sm text-blue-400 font-semibold hover:text-blue-300 cursor-pointer inline-flex items-center gap-2 group">
                View all reports
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {pastEvents.map((event) => (
                <div
                  key={event.id}
                  className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 transition-all duration-500"
                >
                  {/* Image */}
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <Image
                      src={event.image}
                      alt={event.title}
                      width={600}
                      height={400}
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                    />

                    {/* Overlay gradient on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-600/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Shine effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h4 className="text-white font-semibold line-clamp-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-300 transition-all duration-500">
                      {event.title}
                    </h4>
                    <div className="flex items-center gap-2 mt-2">
                      <Calendar className="w-4 h-4 text-gray-500" />
                      <p className="text-gray-400 text-sm">{event.date}</p>
                    </div>

                    <button className="mt-5 text-blue-400 text-sm font-semibold hover:gap-2 inline-flex items-center gap-1 transition-all group/btn">
                      View Report
                      <span className="group-hover/btn:translate-x-1 transition-transform">
                        →
                      </span>
                    </button>
                  </div>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>
              ))}
            </div>
          </div>

          {/* DOWNLOAD SECTION - Updated to match Services theme */}
          <div className="relative mt-32 overflow-hidden rounded-3xl">
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600"></div>

            {/* Floating orbs */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

            <div className="relative py-16 px-8 text-center backdrop-blur-sm">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
                <Download className="w-4 h-4 text-white" />
                <span className="text-sm font-medium text-white/90">
                  Resources
                </span>
              </div>

              <h4 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Download All Event Reports
              </h4>

              <p className="text-white/80 mb-8 max-w-xl mx-auto text-lg">
                Access full reports, presentations, and insights from previous
                events.
              </p>

              <button className="group inline-flex items-center gap-2 bg-white text-gray-900 px-10 py-4 rounded-full font-semibold hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                <span>Download Reports</span>
                <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent"></div>
      </section>
    </>
  );
};

export default EventsSection;
