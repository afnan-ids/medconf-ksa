"use client";

import { useEffect, useRef, useState } from "react";


const slide = {
  title: "Medconf",
  subtitle: "KSA",
  desc: "Leading Medical Conferences & Exhibitions in the Kingdom of Saudi Arabia",
  video: "/Vedeos/sliderdemovedeo-trimed.mp4",
  cta: "Discover More",
};

export default function HeroSlider() {
  const [mounted, setMounted] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    setMounted(true);
    videoRef.current?.play().catch(() => {});
  }, []);

  if (!mounted) return null;

  return (
    <section className="relative w-full h-[100dvh] overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={slide.video} type="video/mp4" />
      </video>

      {/* Clean Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative lg:left-22 z-10 h-full flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          {/* HERO TEXT */}
          <div className="max-w-2xl sm:max-w-3xl">
            <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-7xl font-medium text-white leading-tight tracking-tight drop-shadow-xl">
              {slide.title}{" "}
              <span
                className="block xs:inline font-bold mt-1 xs:mt-0 bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 
                  bg-clip-text text-transparent stroke-text"
              >
                {slide.subtitle}
              </span>
            </h1>

            <div className="w-16 sm:w-20 h-0.5 sm:h-1 bg-gradient-to-r from-blue-400 to-cyan-300 mt-4 sm:mt-6 mb-4 sm:mb-8 rounded-full"></div>

            <p className="text-sm xs:text-base sm:text-lg lg:text-xl text-white/90 max-w-xl leading-relaxed mb-6 sm:mb-8 md:mb-10">
              {slide.desc}
            </p>
          </div>
        </div>
      </div>

      {/* STATS SECTION */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full px-3 sm:px-4 md:px-6">
        <div className="max-w-6xl mx-auto bg-gradient-to-r from-blue-600 to-purple-600 border border-white/10 rounded-t-xl sm:rounded-t-2xl">
          <div
            className="
              grid grid-cols-2 md:grid-cols-4 text-center
              divide-x divide-white/20
              [&>*:nth-child(1)]:border-r
              [&>*:nth-child(2)]:border-r
              md:[&>*:nth-child(2)]:border-r-0
              [&>*:nth-child(3)]:border-r
              [&>*:nth-child(4)]:border-r-0
              border-b border-white/20 md:border-b-0
            "
          >
            {/* Item 1 */}
            <div className="px-2 sm:px-3 md:px-4 lg:px-6 py-3 sm:py-4 md:py-5 lg:py-6">
              <div className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-white">250+</div>
              <div className="text-[10px] xs:text-xs sm:text-sm text-white/70 mt-0.5 sm:mt-1">
                Global Speakers
              </div>
            </div>

            {/* Item 2 */}
            <div className="px-2 sm:px-3 md:px-4 lg:px-6 py-3 sm:py-4 md:py-5 lg:py-6">
              <div className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-white">3 Days</div>
              <div className="text-[10px] xs:text-xs sm:text-sm text-white/70 mt-0.5 sm:mt-1">
                Exhibition
              </div>
            </div>

            {/* Item 3 */}
            <div className="px-2 sm:px-3 md:px-4 lg:px-6 py-3 sm:py-4 md:py-5 lg:py-6">
              <div className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-white">15K+</div>
              <div className="text-[10px] xs:text-xs sm:text-sm text-white/70 mt-0.5 sm:mt-1">
                Expected Visitors
              </div>
            </div>

            {/* Item 4 */}
            <div className="px-2 sm:px-3 md:px-4 lg:px-6 py-3 sm:py-4 md:py-5 lg:py-6">
              <div className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-white">12+</div>
              <div className="text-[10px] xs:text-xs sm:text-sm text-white/70 mt-0.5 sm:mt-1">
                Years Experience
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .stroke-text {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.5);
        }
        @media (max-width: 640px) {
          .stroke-text {
            -webkit-text-stroke: 0.5px rgba(255, 255, 255, 0.5);
          }
        }
      `}</style>
    </section>
  );
}