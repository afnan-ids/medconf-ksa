"use client";

import Image from "next/image";
import { Sparkles, Calendar, MapPin, Download, ArrowRight } from "lucide-react";
import BreadCrumb from "../../../Components/BreadCrum";
import { MdEmojiEvents } from "react-icons/md";

const EventsSection = () => {
  const pastEvents = [
    {
      id: 1,
      image: "/Images/Events/GlobalHealthSaudi.jpg",
      title: "Healthcare Innovation 2024",
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
      <BreadCrumb
        title="Events"
        backgroundImage="/Images/Home/Bread-crum-1.avif"
        path={[{ label: "Events" }]}
      />
      <section id="events" className="relative py-8 sm:py-10 md:py-12 lg:py-16 overflow-hidden">
        {/* Animated Background - Matching Services section */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-900">
          {/* Floating orbs - responsive sizes */}
          <div className="absolute top-10 left-10 w-32 h-32 sm:w-72 sm:h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 sm:w-80 sm:h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-96 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          {/* HEADER - Matching Services section style */}
          <div className="text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20">
            {/* Top badge */}
            <div className="inline-flex items-center gap-1 sm:gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6 md:mb-8">
              <MdEmojiEvents className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-300" />
              <span className="text-xs sm:text-sm font-medium text-gray-300">
                Events & Insights
              </span>
            </div>

            {/* Main title */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 px-2">
              <span className="text-white">Shaping the Future of</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-300 bg-clip-text text-transparent">
                Healthcare
              </span>
            </h1>

            {/* Description with decorative line */}
            <div className="relative max-w-3xl mx-auto">
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-16 sm:w-20 md:w-24 h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed px-4">
                Bringing together healthcare leaders, innovators, and global
                experts to shape the future of medical excellence.
              </p>
            </div>
          </div>

          {/* FEATURED EVENT */}
          <div className="relative mb-24 sm:mb-28 md:mb-32 lg:mb-40">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
             
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center rounded-2xl p-3 sm:p-4 inset-0 bg-[url('/Images/Home/Bread-crum-1.avif')] bg-cover bg-center">
              {/* Image Section */}
              <div className="relative group">
                {/* Glow effect */}
                <div className="absolute -inset-1 rounded-2xl sm:rounded-3xl opacity-20 group-hover:opacity-30 transition duration-700"></div>

                <div className="relative rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden aspect-[4/3] border border-white/10">
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
              <div className="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8">
                <div className="mb-2 sm:mb-3">
                  <span className="inline-flex items-center gap-1 sm:gap-2 bg-blue-500/20 text-blue-300 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-semibold border border-blue-500/30">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full animate-pulse"></span>
                    UPCOMING EVENT 2026
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
                  Global Health
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent block mt-1">
                    Exhibition 2026
                  </span>
                </h2>

                <div className="space-y-2 sm:space-y-3 md:space-y-4">
                  <div className="flex items-center gap-2 sm:gap-3 text-gray-300">
                    <div className="p-1.5 sm:p-2 bg-blue-500/20 rounded-lg border border-blue-500/30">
                      <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                    </div>
                    <p className="text-sm sm:text-base md:text-lg">
                      Riyadh International Convention Center
                    </p>
                  </div>

                  <div className="flex items-center gap-2 sm:gap-3 text-gray-300">
                    <div className="p-1.5 sm:p-2 bg-purple-500/20 rounded-lg border border-purple-500/30">
                      <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
                    </div>
                    <p className="text-sm sm:text-base md:text-lg">26-03-2026</p>
                  </div>
                </div>

                {/* Stats - Updated with dark theme */}
                <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 border-y border-white/10 py-3 sm:py-4">
                  <div className="text-center">
                    <p className="text-xl sm:text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                      500+
                    </p>
                    <p className="text-xs sm:text-sm text-gray-400 mt-0.5 sm:mt-1">Speakers</p>
                  </div>
                  <div className="text-center border-x border-white/10">
                    <p className="text-xl sm:text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                      100+
                    </p>
                    <p className="text-xs sm:text-sm text-gray-400 mt-0.5 sm:mt-1">Exhibitors</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xl sm:text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                      50+
                    </p>
                    <p className="text-xs sm:text-sm text-gray-400 mt-0.5 sm:mt-1">Countries</p>
                  </div>
                </div>

                {/* CTA Buttons - Updated with Services section style */}
                <div className="flex flex-col xs:flex-row gap-2 sm:gap-3 md:gap-4 pt-2 sm:pt-3 md:pt-4">
                  <button className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 sm:px-5 md:px-6 lg:px-8 py-3 sm:py-4 rounded-full text-xs sm:text-sm md:text-base font-semibold hover:shadow-xl hover:shadow-blue-500/25 hover:-translate-y-1 transition-all duration-300 flex-1">
                    <span className="relative z-10 flex items-center justify-center gap-1 sm:gap-2">
                      Register Now
                      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>

                  <button className="group border-2 border-blue-500/50 text-blue-400 px-4 sm:px-5 md:px-6 lg:px-8 py-3 sm:py-4 rounded-full text-xs sm:text-sm md:text-base font-semibold hover:bg-blue-500/10 hover:-translate-y-1 hover:border-blue-400 transition-all duration-300 flex-1 backdrop-blur-sm">
                    <span className="flex items-center justify-center gap-1 sm:gap-2">
                      Book Booth
                      <svg
                        className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 group-hover:rotate-12 transition-transform"
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
          </div>

          {/* PAST EVENTS */}
          <div className="mb-12 sm:mb-14 md:mb-16 lg:mb-20">
            <div className="flex flex-col xs:flex-row items-center justify-between gap-3 sm:gap-4 mb-8 sm:mb-10 md:mb-12 lg:mb-14">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white">Past Events</h3>
              <span className="text-xs sm:text-sm text-blue-400 font-semibold hover:text-blue-300 cursor-pointer inline-flex items-center gap-1 sm:gap-2 group">
                View all reports
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
              {pastEvents.map((event) => (
                <div
                  key={event.id}
                  className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl sm:rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-500"
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
                  <div className="p-3 sm:p-4 md:p-5 lg:p-6">
                    <h4 className="text-sm sm:text-base md:text-lg font-semibold text-white line-clamp-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-300 transition-all duration-500">
                      {event.title}
                    </h4>
                    <div className="flex items-center gap-1 sm:gap-2 mt-1 sm:mt-2">
                      <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500" />
                      <p className="text-gray-400 text-xs sm:text-sm">{event.date}</p>
                    </div>

                    <button className="mt-3 sm:mt-4 md:mt-5 text-blue-400 text-xs sm:text-sm font-semibold hover:gap-2 inline-flex items-center gap-1 transition-all group/btn">
                      View Report
                      <span className="group-hover/btn:translate-x-1 transition-transform">
                        →
                      </span>
                    </button>
                  </div>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-blue-500 to-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>
              ))}
            </div>
          </div>

          {/* DOWNLOAD SECTION - Updated to match Services theme */}
          <div className="relative mt-16 sm:mt-20 md:mt-24 lg:mt-32 overflow-hidden rounded-xl sm:rounded-2xl lg:rounded-3xl">
            {/* Animated background */}
            <div className="absolute inset-0 bg-[url('/Images/Home/Bread-crum-1.avif')] bg-cover bg-center"></div>

            {/* Floating orbs - responsive */}
            <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

            <div className="relative py-8 sm:py-10 md:py-12 lg:py-16 px-4 sm:px-6 md:px-8 text-center backdrop-blur-sm">
              <div className="inline-flex items-center gap-1 sm:gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-5 md:mb-6 lg:mb-8">
                <Download className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                <span className="text-xs sm:text-sm font-medium text-white/90">
                  Resources
                </span>
              </div>

              <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-3 md:mb-4">
                Download All Event Reports
              </h4>

              <p className="text-white/80 text-xs sm:text-sm md:text-base lg:text-lg mb-4 sm:mb-5 md:mb-6 lg:mb-8 max-w-xl mx-auto px-4">
                Access full reports, presentations, and insights from previous
                events.
              </p>

              <button className="group inline-flex items-center gap-1 sm:gap-2 bg-white text-gray-900 px-5 sm:px-6 md:px-8 lg:px-10 py-3 sm:py-4 rounded-full text-xs sm:text-sm md:text-base font-semibold hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                <span>Download Reports</span>
                <Download className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 group-hover:translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-20 md:h-24 lg:h-32 bg-gradient-to-t from-gray-900 to-transparent"></div>
      </section>
    </>
  );
};

export default EventsSection;