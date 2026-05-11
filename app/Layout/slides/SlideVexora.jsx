"use client";

import Image from "next/image";
import { Calendar, MapPin, Sparkles } from "lucide-react";

const SlideVexora = () => {
  return (
    <div className="relative w-full h-full bg-[url('/Images/Home/VeroxaSliderBackground.png')] bg-cover bg-center">
      <div className="relative z-10 w-full max-w-7xl mx-auto h-full grid grid-cols-1 lg:grid-cols-2  text-white lg:mt-20 pt-10">
        {/* Left Column */}
        <div className="text-center lg:text-left mb-8 lg:mb-0">
          <Image
            src="/Images/Home/slider/MainLogo.png"
            alt="Logo"
            width={200}
            height={200}
            className="opacity-90"
          />
        </div>

        {/* Right Column - Streamlined content */}
        <div className="w-full max-w-xl mx-auto space-y-5 py-6 ">
          {/* HPQL Section - Tighter spacing */}
          <div className="text-right space-y-2.5">
            <div className="flex items-center justify-end">
              <Image
                src="/Images/Home/slider/Right-Side-Logo.png"
                alt="Logo"
                width={250}
                height={200}
                className="opacity-90"
              />
            </div>

            <div>
              <h2
                className="text-xl md:text-2xl lg:text-3xl font-bold text-white leading-tight lg:mt-15"
                dir="rtl"
              >
                مؤتمر ومعرض تعزيز الصحة وجودة الحياة
              </h2>
              <p className="text-xs md:text-sm text-gray-300 mt-1.5 tracking-wide">
                HEALTH PROMOTION & QUALITY OF LIFE CONFERENCE & EXHIBITION
              </p>
            </div>

            <div className="w-12 h-px bg-gradient-to-l from-blue-500 to-transparent ml-auto" />
          </div>

          {/* HEAL Section - More compact */}
          <div className="flex justify-end items-center gap-3 pt-1 lg:mt-15">
            <p className="text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              HEAL
            </p>
            <div className="text-right border-r border-white/20 pr-3">
              <p
                className="text-base md:text-lg lg:text-2xl font-bold text-white mb-0.5"
                dir="rtl"
              >
                صحــة <span className="text-blue-400">•</span> تمكين{" "}
                <span className="text-blue-400">•</span> توعية{" "}
                <span className="text-blue-400">•</span> عمر مديد
              </p>
              <p className="text-[11px] md:text-xs text-gray-400 tracking-wide">
                HEALTH • EMPOWERMENT • AWARENESS • LONGEVITY
              </p>
            </div>
          </div>

          {/* Info Card - Sleeker design */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 overflow-hidden">
            {/* Subtler accent bar */}
            <div className="h-px bg-gradient-to-r from-blue-500/50 via-purple-500/50 to-pink-500/50" />

            <div className="p-4">
              <div className="flex items-center justify-between gap-3">
                {/* Location */}
                <div className="flex-1 text-center">
                  <div className="w-7 h-7 rounded-full bg-blue-500/15 flex items-center justify-center mx-auto mb-1.5">
                    <MapPin className="w-3.5 h-3.5 text-blue-400" />
                  </div>
                  <p className="text-xs font-semibold text-white" dir="rtl">
                    مركز جدة للمعارض
                  </p>
                  <p className="text-[9px] text-gray-400 mt-0.5">
                    Jeddah Exhibition Center
                  </p>
                </div>

                <div className="w-px h-10 bg-white/15" />

                {/* Date - Arabic */}
                <div className="flex-1 text-center">
                  <div className="w-7 h-7 rounded-full bg-purple-500/15 flex items-center justify-center mx-auto mb-1.5">
                    <Calendar className="w-3.5 h-3.5 text-purple-400" />
                  </div>
                  <p className="text-xl font-bold text-white">9 - 11</p>
                  <p className="text-[10px] text-gray-300 mt-0.5" dir="rtl">
                    نوفمبر 2026
                  </p>
                </div>

                <div className="w-px h-10 bg-white/15" />

                {/* Date - English */}
                <div className="flex-1 text-center">
                  <div className="w-7 h-7 rounded-full bg-cyan-500/15 flex items-center justify-center mx-auto mb-1.5">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                  </div>
                  <p className="text-base font-bold text-white">November</p>
                  <p className="text-[10px] text-gray-300 mt-0.5">2026</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideVexora;
