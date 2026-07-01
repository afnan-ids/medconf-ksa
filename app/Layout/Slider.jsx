"use client";

import { useState, useEffect, useCallback } from "react";
import SlidePatronage from "./slides/SlidePatronage";
import SlideVexora from "./slides/SlideVexora";
import HealthTransformation from "./slides/HealthTransformation";
import SlideVideo from "./slides/vedio";
import { fetchHomeLabels } from "../api/exhibition";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const HeroSlider = ({ data }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [labelsBySection, setLabelsBySection] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadLabels = async () => {
      try {
        // const data = await fetchHomeLabels();
        // Group labels by sectionName
        const grouped = {};
        if (Array.isArray(data)) {
          data.forEach((item) => {
            if (!grouped[item.sectionName]) {
              grouped[item.sectionName] = {};
            }
            grouped[item.sectionName][item.resourceKey] = {
              en: item.englishText,
              ar: item.arabicText,
            };
          });
        }
        setLabelsBySection(grouped);
      } catch (error) {
        console.error("Failed to load labels:", error);
      } finally {
        setLoading(false);
      }
    };
    loadLabels();
  }, []);

  const slides = [
    {
      id: 1,
      component: SlideVideo,
      sectionName: "Slider1",
    },
    {
      id: 2,
      component: SlideVexora,
      sectionName: "Slider2",
    },
    {
      id: 3,
      component: SlidePatronage,
      sectionName: "Slider3",
    },
    {
      id: 4,
      component: HealthTransformation,
      sectionName: "Slider4",
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
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 8000);

    return () => clearInterval(interval);
  }, [nextSlide]);

  const CurrentSlideComponent = slides[currentSlide].component;
  const currentSectionLabels = labelsBySection[slides[currentSlide].sectionName] || {};

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <AnimatePresence mode="wait">
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
          <CurrentSlideComponent labels={currentSectionLabels} />
        </motion.div>
      </AnimatePresence>

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
