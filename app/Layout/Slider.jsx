"use client";
import { useState } from "react";
import SlidePatronage from "./slides/SlidePatronage";
import SlideVexora from "./slides/SlideVexora";
import SlideVideo from "./slides/vedio"; 

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

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
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const CurrentSlideComponent = slides[currentSlide].component;

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Slide Content */}
      <CurrentSlideComponent />

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-all duration-300 text-gray-800 text-2xl"
      >
        ❮
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-all duration-300 text-gray-800 text-2xl"
      >
        ❯
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-300 ${
              index === currentSlide
                ? "w-8 h-2 bg-white rounded-full"
                : "w-2 h-2 bg-white/50 rounded-full hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;