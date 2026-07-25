"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../il18/translations";

const SlideVideo = () => {
  const [mounted, setMounted] = useState(false);
  const videoRef = useRef(null);

   const { language } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    setMounted(true);
    videoRef.current?.play().catch(() => {});
  }, []);

  if (!mounted) return null;

  return (
   <div className="relative w-full h-full">
  {/* Video Background */}
  <video
    ref={videoRef}
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover"
  >
    <source src="/Vedeos/sliderdemovedeo-trimed.mp4" type="video/mp4" />
  </video>

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/20" />

  {/* Content Wrapper */}
  <div className="relative w-full max-w-7xl  mx-auto h-full flex pt-30 md:pt-0 md:items-center">
    <div className="container mx-auto pt-30 px-4 md:pt-0">
      <div className="max-w-2xl sm:max-w-3xl pt-10 md:pt-0">
        <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-7xl font-medium drop-shadow-xl">
          <span
            className="block xs:inline font-bold mt-1 xs:mt-0 tracking-tight transition-all duration-500 bg-gradient-to-r from-cyan-400 via-purple-500 to-purple-600 bg-clip-text text-transparent"
          >
            HPQL
          </span>
        </h1>

        <div className="w-16 sm:w-20 h-0.5 sm:h-1 bg-gradient-to-r from-blue-400 to-cyan-300 mt-4 sm:mt-6 mb-4 sm:mb-8 rounded-full"></div>

        <p className="text-sm xs:text-base mt-10 lg:mt-0 sm:text-lg lg:text-xl text-white/90 max-w-xl leading-relaxed mb-6 sm:mb-8 md:mb-10">
        {t.leadingMedicalConferences}
          
        </p>
      </div>
    </div>
  </div>

  {/* Stats Bar at Bottom - Mobile optimized */}
  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full px-2 xs:px-3 sm:px-4 md:px-6">
    <div className="max-w-6xl mx-auto bg-gradient-to-r from-blue-600 to-purple-600 border border-white/10 rounded-t-lg xs:rounded-t-xl sm:rounded-t-2xl">
      <div className="grid grid-cols-2 md:grid-cols-4 text-center divide-x divide-white/20 [&>*:nth-child(1)]:border-r [&>*:nth-child(2)]:border-r [&>*:nth-child(3)]:border-r md:[&>*:nth-child(2)]:border-r-0 [&>*:nth-child(4)]:border-r-0 border-b border-white/20 md:border-b-0">
        <div className="px-2 xs:px-3 sm:px-4 lg:px-6 py-2 xs:py-3 sm:py-4 md:py-5 lg:py-6">
          <div className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white">250+</div>
          <div className="text-[8px] xs:text-[10px] sm:text-xs md:text-sm text-white/70 mt-0.5 sm:mt-1">{t.globalSpeakers}</div>
        </div>
        <div className="px-2 xs:px-3 sm:px-4 lg:px-6 py-2 xs:py-3 sm:py-4 md:py-5 lg:py-6">
          <div className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white">3 {t.days}</div>
          <div className="text-[8px] xs:text-[10px] sm:text-xs md:text-sm text-white/70 mt-0.5 sm:mt-1">{t.exhibition}</div>
        </div>
        <div className="px-2 xs:px-3 sm:px-4 lg:px-6 py-2 xs:py-3 sm:py-4 md:py-5 lg:py-6">
          <div className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white">15K+</div>
          <div className="text-[8px] xs:text-[10px] sm:text-xs md:text-sm text-white/70 mt-0.5 sm:mt-1">{t.expectedVisitors}</div>
        </div>
        <div className="px-2 xs:px-3 sm:px-4 lg:px-6 py-2 xs:py-3 sm:py-4 md:py-5 lg:py-6">
          <div className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white">12+</div>
          <div className="text-[8px] xs:text-[10px] sm:text-xs md:text-sm text-white/70 mt-0.5 sm:mt-1">
          {t.yearsExperience}</div>
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
</div>
  );
};

export default SlideVideo;