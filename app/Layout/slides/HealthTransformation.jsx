"use client";

import Image from "next/image";
import { Crown, Award, Star } from "lucide-react";

const HealthTransformation = () => {
  return (
    <div className="relative w-full h-full bg-[url('/Images/Home/slider/HealthTransformationBG.png')] bg-cover bg-center">
      <div className="relative z-10 w-full h-full flex items-center justify-center px-5 md:px-8 lg:px-14 overflow-y-auto">
        {/* Top Bar */}
        <div className="absolute top-30 w-full">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-1 pb-10 mb-1">
            <div className="flex items-center">
              <p className="text-xs text-blue-950 font-bold whitespace-nowrap">
                HPQL
              </p>

              <p className="text-xs text-blue-900 font-bold   ms-2 whitespace-nowrap">
                 HEALTH PROMOTION & QUALITY OF LIFE
              </p>
            </div>

            <p
              className="text-[10px] md:text-xs text-white/90 font-semibold tracking-[0.10em]"
              dir="rtl"
            >
              صحة • تمكين • توعية • عمر مديد
            </p>
          </div>
        </div>

        <div className="w-full max-w-7xl mx-auto py-3">
          {/* main  */}
          <div className="flex flex-col lg:flex-row gap-5 lg:gap-8">
            {/* left Side */}
            <div className="w-full lg:w-1/2 flex items-end justify-center">
              <div className="bg-gradient-to-br from-blue-100/30 to-cyan-100/20 rounded-full blur-3xl" />

              <div className="hidden text-7xl">Hi</div>
            </div>

            {/* right Side */}
            <div className="w-full lg:w-1/2 space-y-3">
              {/* Heading */}
              <div className="relative text-white space-y-1.5">
                <p
                  className="text-sm md:text-lg lg:text-[26px] font-extrabold text-center leading-[1.4] tracking-tight"
                  dir="rtl"
                >
                  التحـــــــول الصحـــــي كركيزة أساسيـة للاستثمــــــــار في
                  رأس المال البشـري
                </p>

                <p className="text-xs md:text-base lg:text-[22px] text-center font-medium leading-relaxed text-white/95">
                  Health Transformation as a Fundamental Pillar for Human
                  Capital Investment
                </p>
              </div>

              {/* Description */}
              <div className="rounded-xl px-2 py-1 space-y-2">
                <p
                  className="text-xs md:text-sm lg:text-[14px] leading-[1.8] text-white/95 text-center"
                  dir="rtl"
                >
                  يهـــدف مؤتمر ومعرض تعزيز الصحة ليكون أبرز المنصات الصحية
                  المتخصصة في المملكة العربية الســـعودية، ويأتي كحدث وطني رائد
                  يجمع بين المؤتمـــر العلمي المتخصص والمعرض الصحي التفاعلي، في
                  إطـــار متكامل يهدف إلى الارتقاء بمفاهيم تعزيز الصحـــة
                  وارتباطها بجودة الحياة على مستوى الفرد والمجتمع
                </p>

                <p className="text-xs md:text-sm lg:text-[14px] leading-[1.7] text-white/90 text-center">
                  The Health Promotion Conference and Exhibition aims to be the
                  Kingdom of Saudi Arabia's premier specialized health platform.
                  As a leading national event, it integrates a specialized
                  scientific conference with an interactive health exhibition,
                  creating a comprehensive framework to elevate health promotion
                  concepts and their vital link to the quality of life for both
                  individuals and society
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* bg Layer  Image */}
      <div className="absolute bottom-0 right-0">
        <Image
          src="/Images/Home/slider/HealthTransformationLayerBG.png"
          alt="Abstract Layer"
          width={1500}
          height={1200}
          className="object-contain drop-shadow-2xl"
          priority
        />
      </div>
    </div>
  );
};

export default HealthTransformation;
