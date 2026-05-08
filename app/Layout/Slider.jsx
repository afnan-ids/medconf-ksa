"use client";
import { useState, useEffect, useCallback } from "react";
import SlidePatronage from "./slides/SlidePatronage";
import SlideVexora from "./slides/SlideVexora";
import SlideVideo from "./slides/vedio"; 
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      id: 1,
      component: SlideVideo,
      bgColor: "dark",
    },
    {
      id: 2,
      component: SlideVexora,
      bgColor: "dark",
    },
    {
      id: 3,
      component: SlidePatronage,
      bgColor: "light",
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

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  // Pause auto-slide when user interacts
  const handleManualNavigation = (callback) => {
    setIsAutoPlaying(false);
    callback();
    // Resume auto-slide after 10 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const CurrentSlideComponent = slides[currentSlide].component;
  const currentBgType = slides[currentSlide].bgColor;

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Slide Content */}
      <div className="w-full h-full transition-opacity duration-500">
        <CurrentSlideComponent />
      </div>

      {/* Play/Pause Button */}
      <button
        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
        className={`
          absolute left-5 bottom-8 z-20 
          w-8 h-8 md:w-10 md:h-10 rounded-full 
          flex items-center justify-center 
          shadow-lg hover:scale-105 transition-all duration-300
          ${currentBgType === 'light' 
            ? 'bg-white/80 hover:bg-white text-gray-800 backdrop-blur-sm border border-gray-200' 
            : 'bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm'
          }
        `}
      >
        {isAutoPlaying ? <Pause className="w-3 h-3 md:w-4 md:h-4" /> : <Play className="w-3 h-3 md:w-4 md:h-4" />}
      </button>

      {/* Left Arrow */}
      <button
        onClick={() => handleManualNavigation(prevSlide)}
        className={`
          absolute left-5 top-1/2 -translate-y-1/2 z-20 
          w-10 h-10 md:w-12 md:h-12 rounded-full 
          flex items-center justify-center 
          shadow-lg hover:scale-105 transition-all duration-300 
          ${currentBgType === 'light' 
            ? 'bg-white/80 hover:bg-white text-gray-800 backdrop-blur-sm border border-gray-200' 
            : 'bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm'
          }
        `}
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={() => handleManualNavigation(nextSlide)}
        className={`
          absolute right-5 top-1/2 -translate-y-1/2 z-20 
          w-10 h-10 md:w-12 md:h-12 rounded-full 
          flex items-center justify-center 
          shadow-lg hover:scale-105 transition-all duration-300 
          ${currentBgType === 'light' 
            ? 'bg-white/80 hover:bg-white text-gray-800 backdrop-blur-sm border border-gray-200' 
            : 'bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm'
          }
        `}
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3 px-4 py-2 rounded-full">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleManualNavigation(() => {
              if (isTransitioning) return;
              setIsTransitioning(true);
              setCurrentSlide(index);
              setTimeout(() => setIsTransitioning(false), 500);
            })}
            className={`
              transition-all duration-300 
              ${index === currentSlide 
                ? `w-8 h-2 rounded-full ${currentBgType === 'light' ? 'bg-blue-600' : 'bg-white'} shadow-md` 
                : `w-2 h-2 rounded-full ${currentBgType === 'light' ? 'bg-gray-400/60 hover:bg-gray-500' : 'bg-white/40 hover:bg-white/60'}`
              }
            `}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className={`
        absolute bottom-8 right-8 z-20 
        text-xs font-medium px-3 py-1.5 rounded-full 
        backdrop-blur-md transition-all duration-300
        ${currentBgType === 'light' 
          ? 'bg-white/70 text-gray-700 border border-gray-200' 
          : 'bg-black/30 text-white'
        }
      `}>
        {String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
      </div>


      {/* Inactive progress bar when paused */}
      {!isAutoPlaying && (
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <div 
            className="h-1 bg-gray-500/50"
            style={{ width: '100%' }}
          />
        </div>
      )}

    </div>
  );
};

export default HeroSlider;