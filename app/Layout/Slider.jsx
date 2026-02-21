"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import { useState, useEffect, useRef } from "react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const slide = {
  title: "Medconf",
  subtitle: "KSA",
  desc: "Leading Medical Conferences & Exhibitions in the kingdom of Saudi Aribia Compliant with SCFSH & PDPL | Data Hosted in KSA ",
  video: "/Vedeos/sliderdemovedeo-trimed.mp4",
  cta: "Discover More",
};

export default function HeroSlider() {
  const [mounted, setMounted] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    setMounted(true);

    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Video autoplay failed:", error);
      });
    }
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-1/2 left-1/2 bottom-1/2 min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 object-cover"
        >
          <source src={slide.video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Enhanced Gradient */}
      {/* <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/30 to-black/10" /> */}

      {/* Soft Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

      {/* Content */}
      <div className=" z-10 container mx-auto h-full flex items-center px-6 lg:px-12 ">
        <div className="max-w-3xl text-white bg-transparent p-6 lg:p-10 lg:mb-16">
          <div className="max-w-2xl">
            <h1 className="text-5xl lg:text-7xl font-black mb-6 leading-tight tracking-tight animate-slide-up">
              <span className="block drop-shadow-lg ">
                {slide.title} <span className="text-transparent [-webkit-text-stroke:2px_white]">{slide.subtitle}</span>
              </span>
              <span className="block w-24 h-1 mt-4 bg-blue-500 rounded-full" />
            </h1>
            <span className="text-transparent [-webkit-text-stroke:2px_white]">
                {slide.subtitle}
              </span>
            <p className="text-lg lg:text-xl text-white mb-8 max-w-2xl leading-relaxed font-medium animate-slide-up animation-delay-200">
              {slide.desc}
            </p>
          </div>
        </div>
        <div></div>
      </div>

      {/* Stats Box */}
      <div className="absolute lg:bottom-0 lg:right-72 flex gap-10 px-10 py-6 bg-gradient-to-br from-blue-900 via-blue-600 to-purple-900  border border-white/20 rounded-t-2xl shadow-2xl">
        <div className="flex flex-col">
          <span className="text-4xl font-extrabold text-white mb-2">250+</span>
          <span className="text-lg text-gray-200 tracking-wide">
            Global Speakers
          </span>
        </div>

        <div className="w-px bg-white/30 hidden sm:block" />

        <div className="flex flex-col">
          <span className="text-4xl font-extrabold text-white mb-2">
            3 Days
          </span>
          <span className="text-lg text-gray-200 tracking-wide">
            Exhibition & Workshops
          </span>
        </div>

        <div className="w-px bg-white/30 hidden sm:block" />

        <div className="flex flex-col">
          <span className="text-4xl font-extrabold text-white mb-2">15K+</span>
          <span className="text-lg text-gray-200 tracking-wide">
            Expected Visitors
          </span>
        </div>

        <div className="w-px bg-white/30 hidden sm:block" />

        <div className="flex flex-col">
          <span className="text-4xl font-extrabold text-white mb-2">12+</span>
          <span className="text-lg text-gray-200 tracking-wide">
            Years experience
          </span>
        </div>
      </div>
    </div>
  );
}
