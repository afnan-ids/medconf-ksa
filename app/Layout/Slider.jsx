"use client";

import { useState, useEffect, useCallback } from "react";
import SlidePatronage from "./slides/SlidePatronage";
import SlideVexora from "./slides/SlideVexora";
import HealthTransformation from "./slides/HealthTransformation";
import SlideVideo from "./slides/vedio";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(3);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slides = [
    {
      id: 1,
      component: SlideVideo,
    },
    {
      id: 2,
      component: SlideVexora,
    },
    {
      id: 3,
      component: SlidePatronage,
    },
    {
      id: 4,
      component: HealthTransformation,
    },
  ];

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;

    setIsTransitioning(true);

    setCurrentSlide((prev) => (prev + 1) % slides.length);

    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning, slides.length]);

  const prevSlide = useCallback(() => {
    if (isTransitioning) return;

    setIsTransitioning(true);

    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning, slides.length]);

  // Auto Slide
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     nextSlide();
  //   }, 8000);

  //   return () => clearInterval(interval);
  // }, [nextSlide]);

  const CurrentSlideComponent = slides[currentSlide].component;

  return (
    <div className="relative w-full h-[700px] overflow-hidden">
      <motion.div
        key={currentSlide}
        initial={{
          opacity: 0,
          scale: 1.03,
          backdropFilter: "blur(20px)",
        }}
        animate={{
          opacity: 1,
          scale: 1,
          backdropFilter: "blur(0px)",
        }}
        exit={{
          opacity: 0,
          scale: 0.97,
          backdropFilter: "blur(10px)",
        }}
        transition={{
          duration: 0.9,
          ease: "easeOut",
        }}
        className="absolute inset-0 w-full h-full"
      >
        <CurrentSlideComponent />
      </motion.div>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 -translate-y-1/2 z-20 
        w-10 h-10 md:w-12 md:h-12 rounded-full 
        flex items-center justify-center 
        bg-white/20 hover:bg-white/30 text-white 
        backdrop-blur-sm shadow-lg 
        transition-all duration-300 hover:scale-105"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 -translate-y-1/2 z-20 
        w-10 h-10 md:w-12 md:h-12 rounded-full 
        flex items-center justify-center 
        bg-white/20 hover:bg-white/30 text-white 
        backdrop-blur-sm shadow-lg 
        transition-all duration-300 hover:scale-105"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3 px-4 py-2 rounded-full">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (isTransitioning) return;

              setIsTransitioning(true);

              setCurrentSlide(index);

              setTimeout(() => setIsTransitioning(false), 500);
            }}
            className={`transition-all duration-300 ${
              index === currentSlide
                ? "w-8 h-2 rounded-full bg-white shadow-md"
                : "w-2 h-2 rounded-full bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute bottom-8 right-8 z-20 text-xs font-medium px-3 py-1.5 rounded-full bg-black/30 text-white backdrop-blur-md">
        {String(currentSlide + 1).padStart(2, "0")} /{" "}
        {String(slides.length).padStart(2, "0")}
      </div>
    </div>
  );
};

export default HeroSlider;
