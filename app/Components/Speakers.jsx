"use client";
import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { ChevronRight, Sparkles, Mic, Star, MapPin, Calendar } from "lucide-react";

const SpeakersSection = () => {
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const scrollContainerRef = useRef(null);

  const speakers = [
    {
      name: "Jensen Huang",
      title: "Co-founder & CEO",
      company: "NVIDIA",
      image:
        "https://storage.googleapis.com/cdn.vivatechnology.com/_vt-prd/medias/Frame_333_and_and_and_d5012c953b/Frame_333_and_and_and_d5012c953b.png",
      gradient: "from-blue-600 to-cyan-400",
      bgLight: "bg-blue-500/20",
      text: "text-blue-400",
      topic: "AI Revolution",
    },
    {
      name: "Joe Tsai",
      title: "Co-founder and Chairman",
      company: "Alibaba",
      image:
        "https://storage.googleapis.com/cdn.vivatechnology.com/_vt-prd/medias/joe_tsai_0b94ffa2f6/joe_tsai_0b94ffa2f6.png",
      gradient: "from-purple-600 to-pink-500",
      bgLight: "bg-purple-500/20",
      text: "text-purple-400",
      topic: "Global Commerce",
    },
    {
      name: "Arthur Mensch",
      title: "CEO",
      company: "Mistral AI",
      image:
        "https://storage.googleapis.com/cdn.vivatechnology.com/_vt-prd/medias/Arthur_Menschaaa_Viva_Tech_2025_74eca00b14/Arthur_Menschaaa_Viva_Tech_2025_74eca00b14.png",
      gradient: "from-amber-600 to-orange-500",
      bgLight: "bg-amber-500/20",
      text: "text-amber-400",
      topic: "AI Innovation",
    },
    {
      name: "Vanessa Wyche",
      title: "Acting Associate Administrator",
      company: "NASA",
      image:
        "https://storage.googleapis.com/cdn.vivatechnology.com/_vt-prd/medias/vanessa_e_wyche_77a47ef319/vanessa_e_wyche_77a47ef319.png",
      gradient: "from-green-600 to-emerald-500",
      bgLight: "bg-green-500/20",
      text: "text-green-400",
      topic: "Space Exploration",
    },
    {
      name: "Thomas Wolf",
      title: "Co-Founder & Chief Science Officer",
      company: "Hugging Face",
      image:
        "https://storage.googleapis.com/cdn.vivatechnology.com/_vt-prd/medias/wolff_caa0d5fdc5/wolff_caa0d5fdc5.png",
      gradient: "from-red-600 to-rose-500",
      bgLight: "bg-red-500/20",
      text: "text-red-400",
      topic: "Open Source AI",
    },
    {
      name: "Yann LeCun",
      title: "Chief AI Scientist",
      company: "Meta & NYU",
      image:
        "https://storage.googleapis.com/cdn.vivatechnology.com/_vt-prd/medias/c3748248a8e7a0a46e08c5aa0b8e9903f9a9ea36_6b3020f68f/c3748248a8e7a0a46e08c5aa0b8e9903f9a9ea36_6b3020f68f.png",
      gradient: "from-indigo-600 to-blue-500",
      bgLight: "bg-indigo-500/20",
      text: "text-indigo-400",
      topic: "Deep Learning",
    },
    {
      name: "Bernard Arnault",
      title: "Chairman & CEO",
      company: "LVMH",
      image:
        "https://storage.googleapis.com/cdn.vivatechnology.com/_vt-prd/medias/Bernard_Arnault21aaa_06ba042edf/Bernard_Arnault21aaa_06ba042edf.png",
      gradient: "from-yellow-600 to-amber-500",
      bgLight: "bg-yellow-500/20",
      text: "text-yellow-400",
      topic: "Luxury & Innovation",
    },
    {
      name: "Ami Badani",
      title: "Chief Marketing Officer",
      company: "ARM Holdings",
      image:
        "https://storage.googleapis.com/cdn.vivatechnology.com/_vt-prd/medias/ami_badani_cfe3c8e3df/ami_badani_cfe3c8e3df.png",
      gradient: "from-teal-600 to-cyan-500",
      bgLight: "bg-teal-500/20",
      text: "text-teal-400",
      topic: "Semiconductors",
    },
  ];

  const checkScroll = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(
        container.scrollLeft < container.scrollWidth - container.clientWidth - 10
      );
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      checkScroll();
      container.addEventListener("scroll", checkScroll);
      window.addEventListener("resize", checkScroll);
      return () => {
        container.removeEventListener("scroll", checkScroll);
        window.removeEventListener("resize", checkScroll);
      };
    }
  }, []);

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = window.innerWidth < 640 ? 280 : 400;
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative w-full mx-auto overflow-hidden">
      {/* Dark themed background - matching footer */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-900">
        {/* Floating orbs - reduced size and blur for mobile */}
        <div className="absolute top-10 left-10 w-32 h-32 sm:w-72 sm:h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 sm:w-80 sm:h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 left-1/3 w-48 h-48 sm:w-96 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Glass container - matching footer style */}
      <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-4 py-4">
        <div className="rounded-2xl sm:rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-2xl overflow-hidden hover:shadow-[0_30px_60px_-15px_rgba(79,70,229,0.3)] transition-all duration-700">
          
          {/* Top gradient line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
          
          <div className="p-4 sm:p-8 lg:p-12 relative">
            {/* Decorative orbs inside - hidden on mobile */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl hidden sm:block"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl hidden sm:block"></div>

            {/* Header with badge */}
            <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-16 relative z-10">
              {/* Trust badge - like footer */}
              <div className="relative inline-block group/badge mb-4 sm:mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-lg opacity-0 group-hover/badge:opacity-50 transition-opacity duration-500"></div>
                <div className="relative inline-flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1 sm:py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl text-white text-[10px] sm:text-xs">
                  <Mic className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
                  <span>Featured Speakers</span>
                  <span className="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-white/30 rounded-full"></span>
                  <Star className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400" />
                  <span>2026 Lineup</span>
                </div>
              </div>

              {/* Title with gradient */}
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-2 sm:mb-4 px-2">
                <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  Visionary
                </span>{" "}
                Speakers
              </h2>

              {/* Decorative line */}
              <div className="relative w-20 sm:w-32 h-1 mx-auto my-3 sm:my-6">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-sm"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full"></div>
              </div>

              <p className="text-xs sm:text-sm md:text-lg text-gray-300 mt-3 sm:mt-6 max-w-2xl mx-auto px-4">
                Industry leaders shaping the future of technology and innovation.
              </p>
            </div>

            {/* Horizontal Scroll Container with Navigation */}
            <div className="relative px-1 sm:px-0">
              {/* Left Navigation Button - hidden on mobile */}
              {canScrollLeft && (
                <button
                  onClick={() => scroll("left")}
                  className="hidden sm:flex absolute -left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 group shadow-xl"
                >
                  <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6 rotate-180 group-hover:-translate-x-1 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
                </button>
              )}

              {/* Right Navigation Button - hidden on mobile */}
              {canScrollRight && (
                <button
                  onClick={() => scroll("right")}
                  className="hidden sm:flex absolute -right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 group shadow-xl"
                >
                  <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6 group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
                </button>
              )}

              {/* Horizontal Scrolling Container - NEW CARD DESIGN */}
              <div
                ref={scrollContainerRef}
                className="flex overflow-x-auto scrollbar-hide gap-3 sm:gap-4 md:gap-6 pb-4 sm:pb-8 px-1 sm:px-2"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {speakers.map((speaker, index) => (
                  <div
                    key={index}
                    className="flex-none w-[240px] sm:w-72 md:w-80 group relative"
                  >
                    {/* Card with glass effect - NEW DESIGN */}
                    <div className="relative h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 sm:hover:-translate-y-2">
                      
                      {/* Gradient overlay on hover */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${speaker.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-700`}></div>
                      
                      {/* Top colored bar */}
                      <div className={`absolute top-0 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r ${speaker.gradient}`}></div>

                      {/* Image container - circular design */}
                      <div className="relative pt-4 sm:pt-8 px-4 sm:px-8 pb-2 sm:pb-4">
                        {/* Glow effect behind image */}
                        <div className={`absolute top-8 sm:top-12 left-1/2 -translate-x-1/2 w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-gradient-to-r ${speaker.gradient} rounded-full blur-xl sm:blur-2xl opacity-30 group-hover:opacity-60 transition-opacity duration-500`}></div>
                        
                        {/* Circular image */}
                        <div className="relative w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 mx-auto rounded-full overflow-hidden border-2 sm:border-4 border-white/10 group-hover:border-white/20 transition-all duration-500 ring-1 sm:ring-2 ring-transparent group-hover:ring-blue-500/50">
                          <img
                            src={speaker.image}
                            alt={speaker.name}
                            className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                          />
                        </div>
                        
                        {/* Speaker number badge - smaller on mobile */}
                        <div className={`absolute top-2 right-2 sm:top-6 sm:right-6 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-r ${speaker.gradient} flex items-center justify-center text-[10px] sm:text-xs md:text-sm font-bold text-white shadow-lg`}>
                          #{index + 1}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-3 sm:p-4 md:p-6 text-center">
                        {/* Name with gradient on hover */}
                        <h3 className="text-sm sm:text-base md:text-xl font-bold text-white mb-0.5 sm:mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-300 transition-all duration-500">
                          {speaker.name}
                        </h3>

                        {/* Title - hidden on very small screens */}
                        <p className="hidden sm:block text-xs md:text-sm text-gray-400 mb-1 sm:mb-2">
                          {speaker.title}
                        </p>

                        {/* Company badge */}
                        <div className={`inline-block px-2 sm:px-3 md:px-4 py-0.5 sm:py-1 md:py-1.5 rounded-full bg-white/5 border border-white/10 mb-2 sm:mb-3 md:mb-4 group-hover:border-${speaker.gradient.split(' ')[0].replace('from-', '')}/30 transition-all duration-300`}>
                          <span className="text-[10px] sm:text-xs font-medium text-gray-300">
                            {speaker.company}
                          </span>
                        </div>

                        {/* Topic chip */}
                        <div className="flex items-center justify-center gap-0.5 sm:gap-1 text-[10px] sm:text-xs text-cyan-300">
                          <Mic className="w-2 h-2 sm:w-3 sm:h-3" />
                          <span className="truncate max-w-[120px] sm:max-w-none">{speaker.topic}</span>
                        </div>
                      </div>

                      {/* Bottom shine effect */}
                      <div className="absolute bottom-0 left-0 right-0 h-10 sm:h-20 bg-gradient-to-t from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>

                    {/* Floating dots indicator - hidden on mobile */}
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 gap-1 opacity-0 group-hover:opacity-100 transition-all duration-500 hidden sm:flex">
                      {[0, 1, 2].map((i) => (
                        <div
                          key={i}
                          className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${speaker.gradient} animate-pulse`}
                          style={{ animationDelay: `${i * 200}ms` }}
                        ></div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Scroll indicator dots for mobile */}
              <div className="flex justify-center gap-1 mt-2 sm:hidden">
                {speakers.map((_, index) => (
                  <div
                    key={index}
                    className="w-1 h-1 rounded-full bg-white/30"
                  ></div>
                ))}
              </div>
            </div>

            {/* Bottom CTA - matching footer style */}
            <div className="text-center mt-6 sm:mt-8 md:mt-12 relative z-10">
              <Link
                href="#"
                className="relative inline-flex items-center gap-2 sm:gap-3 group/cta"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-xl opacity-0 group-hover/cta:opacity-60 transition-opacity duration-500"></div>
                <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full text-sm sm:text-base md:text-lg font-medium hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2 sm:gap-3">
                  <span>View All Speakers</span>
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover/cta:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover/cta:opacity-20 transition-opacity"></div>
                </div>
              </Link>
            </div>

          </div>
        </div>
      </div>

      {/* Hide scrollbar */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default SpeakersSection;