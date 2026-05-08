"use client";

import Image from "next/image";
import { Calendar, MapPin, Sparkles } from "lucide-react";

const SlideVexora = () => {
  return (
    <div className="relative w-full h-full bg-[url('/Images/Home/VeroxaSliderBackground.png')] bg-cover bg-center bg-fixed">
      {/* Enhanced Overlay for better contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60" />
      
      {/* Decorative animated elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

      {/* Content Wrapper */}
      <div className="relative z-10 w-full h-full grid grid-cols-1 lg:grid-cols-2 items-center text-white px-6 md:px-12 lg:px-20 overflow-y-auto">
        
        {/* Left Column - VEXORA */}
        <div className="text-center lg:text-left mb-12 lg:mb-0">
          <div className="relative inline-block lg:block">
           
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold mb-3 tracking-wide bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
              VEXORA
            </h1>
            <p className="text-2xl md:text-3xl lg:text-4xl tracking-wide text-blue-300 font-light">
              SOLUTIONS
            </p>
            
            {/* Decorative line */}
            <div className="w-24 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mt-8 mx-auto lg:mx-0" />
          </div>
        </div>

        {/* Right Column - All Content - Balanced size */}
        <div className="w-full max-w-2xl mx-auto space-y-7 py-8">
          
          {/* HPQL Section */}
          <div className="text-right space-y-4">
            <div className="flex items-center justify-end gap-3">
              <Image 
                src="/Images/Footer-Logo.png" 
                alt="Logo" 
                width={48} 
                height={48} 
                className="opacity-90"
              />
              <p className="text-xl md:text-2xl font-bold text-white" dir="rtl">
                تعزيز الصحة <span className="text-blue-400">•</span> وجودة الحياة
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight" dir="rtl">
                مؤتمر ومعرض تعزيز الصحة وجودة الحياة
              </h2>
              <p className="text-sm md:text-base text-gray-300 mt-2 tracking-wide">
                HEALTH PROMOTION & QUALITY OF LIFE CONFERENCE & EXHIBITION
              </p>
            </div>
            
            <div className="w-16 h-px bg-gradient-to-l from-blue-500 to-transparent ml-auto" />
          </div>

          {/* HEAL Section */}
          <div className="flex justify-end items-center gap-4 pt-2">
            <p className="text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              HEAL
            </p>
            <div className="text-right border-r border-white/20 pr-4">
              <p className="text-lg md:text-xl lg:text-2xl font-bold text-white mb-1" dir="rtl">
                صحــة <span className="text-blue-400">•</span> تمكين <span className="text-blue-400">•</span> توعية <span className="text-blue-400">•</span> عمر مديد
              </p>
              <p className="text-xs md:text-sm text-gray-400 tracking-wide">
                HEALTH • EMPOWERMENT • AWARENESS • LONGEVITY
              </p>
            </div>
          </div>

          {/* Info Card - Balanced, not too compact */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 overflow-hidden hover:border-white/30 transition-all duration-300">
            {/* Top accent bar */}
            <div className="h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600" />
            
            <div className="p-5">
              <div className="flex items-center justify-between gap-4">
                {/* Location */}
                <div className="flex-1 text-center">
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-2">
                    <MapPin className="w-4 h-4 text-blue-400" />
                  </div>
                  <p className="text-sm font-semibold text-white" dir="rtl">
                    مركز جدة للمعارض
                  </p>
                  <p className="text-[10px] text-gray-400 mt-0.5">
                    Jeddah Exhibition Center
                  </p>
                </div>
                
                <div className="w-px h-12 bg-white/20" />
                
                {/* Date - Arabic */}
                <div className="flex-1 text-center">
                  <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center mx-auto mb-2">
                    <Calendar className="w-4 h-4 text-purple-400" />
                  </div>
                  <p className="text-2xl font-bold text-white">9 - 11</p>
                  <p className="text-xs text-gray-300 mt-0.5" dir="rtl">
                    نوفمبر 2026
                  </p>
                </div>
                
                <div className="w-px h-12 bg-white/20" />
                
                {/* Date - English */}
                <div className="flex-1 text-center">
                  <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center mx-auto mb-2">
                    <Calendar className="w-4 h-4 text-cyan-400" />
                  </div>
                  <p className="text-lg font-bold text-white">November</p>
                  <p className="text-xs text-gray-300 mt-0.5">2026</p>
                </div>
              </div>
            </div>
          </div>

          {/* Optional subtle CTA hint */}
          <div className="text-center pt-2">
            <p className="text-[10px] text-gray-500 tracking-wider">
              MARK YOUR CALENDAR • SAVE THE DATE
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideVexora;