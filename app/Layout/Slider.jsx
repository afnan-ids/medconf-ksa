"use client";
import { useState } from 'react';
import SlidePatronage from './slides/SlidePatronage';
import SlideVexora from './slides/SlideVexora';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      component: SlidePatronage,
    },
    {
      id: 2,
      component: SlideVexora,
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
    <div className="relative w-full h-screen">
      <CurrentSlideComponent 
        currentSlide={currentSlide}
        totalSlides={slides.length}
        onNext={nextSlide}
        onPrev={prevSlide}
        onDotClick={(index) => setCurrentSlide(index)}
      />
    </div>
  );
};

export default HeroSlider;