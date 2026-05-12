"use client";

import Image from "next/image";
import { Calendar, MapPin, Sparkles } from "lucide-react";

const SlideVexora = () => {
  return (
    <div className="relative w-full h-full bg-[url('/Images/Home/VeroxaSliderBackground.png')] bg-cover bg-center">
      <div className="relative z-10 w-full max-w-7xl mx-auto h-full grid grid-cols-1 lg:grid-cols-[45%_55%]  text-white lg:mt-20 pt-10">
        {/* Left Column */}
        <div className="text-center lg:text-left mb-8 lg:mb-0">
          <Image
            src="/Images/Home/slider/MainLogo.png"
            alt="Logo"
            width={180}
            height={150}
            className="opacity-90"
          />
        </div>

        {/* Right Column */}
        <div className="w-full max-w-4xl mx-auto space-y-5 py-6 ">
          {/* HPQL Section  */}
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
                className="text-xl md:text-2xl lg:text-3xl font-bold text-white leading-tight lg:mt-20"
                dir="rtl"
              >
                مؤتمـــر ومعرض تعزيز الصحة وجودة الحياة
              </h2>
              <p className="text-xs md:text-sm text-white mt-1.5 tracking-wide">
                HEALTH PROMOTION & QUALITY OF LIFE CONFERENCE & EXHIBITION
              </p>
            </div>
          </div>

          {/* HEAL Section - More compact */}
          <div className="flex justify-end items-center gap-3 pt-1 lg:mt-15">
            <p className="text-4xl md:text-5xl lg:text-6xl font-black ">HPQL</p>
            <div className="text-right">
              <p
                className="text-base md:text-lg lg:text-2xl font-bold text-white mb-0.5"
                dir="rtl"
              >
                صحـــة . تمكيـــن . توعيـــة . عمـر مديـــد
              </p>
              <p className="text-xs md:text-sm text-white tracking-wide">
                HEALTH PROMOTION  •  QUALITY OF LIFE
              </p>
            </div>
          </div>

          {/* Info Card  */}
          <div className="flex justify-end">
          <div className="bg-cyan-500 backdrop-blur-md rounded-xl border border-white/20 overflow-hidden w-full max-w-150">
            <div className="p-4">
              <div className="flex items-center justify-between gap-3">
                {/* Location */}
                <div className="text-center">
                  <p className="text-md font-bold text-blue-900" dir="rtl">
                    مركــــز جـــــدة للمعـــــارض والفعـــــــاليات
                  </p>
                  <p className="text-md font-bold text-blue-900 mt-0.5">
                    Exhibition & trade center in Jeddah
                  </p>
                </div>

                <div className="w-px h-10 bg-white/15" />

                {/* 2026  - Arabic */}
                <div className=" text-center">
                  <p className="text-md font-bold text-blue-900">نوفمبر</p>
                  <p className="text-md font-bold text-blue-900">2026</p>
                </div>

                <div className="w-px h-10 bg-white/15" />

                {/* Date - Arabic */}
                <div className="flex text-center">
                  <p className="text-2xl font-bold text-blue-900">9 - 11</p>
                </div>

                <div className="w-px h-10 bg-white/15" />

                {/* Date */}
                <div className="text-start text-lg ">
                  <p className=" font-bold text-blue-900">November</p>
                  <p className="font-bold text-blue-900 mt-0.5">2026</p>
                </div>
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
