"use client";

import Image from "next/image";
import { Crown, Award, Star } from "lucide-react";

const SlidePatronage = () => {
  return (
    <div className="relative w-full h-full bg-[url('/Images/Home/slider/healbkg.png')] bg-cover bg-center mt-8">
      {/* Enhanced overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/85 to-white/90" /> */}
      
      {/* Decorative subtle elements */}
      <div className="absolute top-10 right-20 w-56 h-56 bg-blue-100/40 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-20 w-64 h-64 bg-cyan-100/30 rounded-full blur-3xl" />

      {/* Content Wrapper */}
      <div className="relative z-10 w-full h-full flex items-center justify-center px-6 md:px-12 lg:px-20 overflow-y-auto">
        <div className="w-full max-w-7xl mx-auto py-6">
          
          {/* Top Bar - Compact */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-2 pb-4 mb-2 border-b border-blue-100">
            <p className="text-[10px] md:text-[11px] text-blue-800/50 font-medium tracking-wider">
              HEALTH • EMPOWERMENT • AWARENESS • LONGEVITY
            </p>
            <p className="text-[10px] md:text-[11px] text-blue-800/50 font-medium tracking-wider" dir="rtl">
              صحة • تمكين • توعية • عمر مديد
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
            
            {/* Left Side - Content */}
            <div className="w-full lg:w-1/2 space-y-4">
              
              {/* Patronage Badge - Compact */}
              <div className="relative bg-gradient-to-r from-blue-900 to-blue-800 rounded-xl p-3 text-white shadow-lg">
                <Crown className="absolute top-2 right-2 w-6 h-6 opacity-20" />
                <p className="text-sm md:text-base lg:text-lg font-bold text-center" dir="rtl">
                  برعاية كريمة من صاحب السمو الملكي
                </p>
                <p className="text-xs md:text-sm text-center text-blue-200">
                  Under the gracious patronage of His Royal Highness
                </p>
              </div>

              {/* Name Section - Compact */}
              <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-blue-100">
                <div className="flex flex-col md:flex-row justify-between items-center gap-3">
                  <p className="text-lg md:text-xl lg:text-2xl font-bold text-blue-900">
                    Prince Khalid AL Faisal
                  </p>
                  <div className="w-px h-6 bg-blue-200 hidden md:block" />
                  <p className="text-lg md:text-xl lg:text-2xl font-bold text-blue-900" dir="rtl">
                    الأمير خالد الفيصل
                  </p>
                </div>
                
                <div className="flex flex-col md:flex-row justify-between items-start gap-2 mt-3 pt-2 border-t border-blue-100">
                  <p className="text-xs md:text-sm text-gray-600">
                    Advisor to the Custodian of the Two Holy Mosques,
                    <br />
                    Governor of Makkah Region
                  </p>
                  <p className="text-xs md:text-sm text-gray-600 text-right" dir="rtl">
                    مستشار خادم الحرمين الشريفين
                    <br />
                    أمير منطقة مكة المكرمة
                  </p>
                </div>
              </div>

              {/* Conference Name */}
              <div className="text-center">
                <p className="text-sm md:text-base lg:text-xl font-bold text-gray-800" dir="rtl">
                  مؤتمر ومعرض تعزيز الصحة وجودة الحياة
                </p>
                <p className="text-xs md:text-sm lg:text-base text-gray-600">
                  Health Promotion & Quality of Life Conference and Exhibition
                </p>
              </div>

              {/* Description - Compact */}
              <div className="bg-blue-50/50 rounded-lg p-3 space-y-1">
                <p className="text-xs md:text-sm lg:text-base leading-relaxed text-gray-700 text-center" dir="rtl">
                  يقام أضخم حدث من نوعه في المنطقة الغربية يهدف إلى تحسين جودة الحياة تحت شعار
                </p>
                <p className="text-xs md:text-sm leading-relaxed text-gray-600 text-center">
                  The largest event of its kind in the Western Region is being held, aiming to improve the quality of life under the slogan
                </p>
              </div>

              {/* Slogan - Compact Highlight */}
              <div className="text-center py-2 px-4 bg-gradient-to-r from-blue-100 via-white to-blue-100 rounded-lg border border-blue-200">
                <p className="text-base md:text-lg lg:text-2xl font-bold text-blue-900" dir="rtl">
                  صحـــة . تمكيـــن . توعيـــة . عمـر مديـــد
                </p>
                <p className="text-xs md:text-sm lg:text-base font-semibold text-blue-700">
                  HEALTH. EMPOWERMENT . AWARENESS . LONGEVITY
                </p>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="w-full lg:w-1/2 flex items-end justify-center lg:justify-end ">
              <div className=" bg-gradient-to-br from-blue-100/40 to-cyan-100/30 rounded-full blur-2xl" />
              
              <div className="abosolute bottom-0 flex justify-center lg:justify-end">
                <Image
                  src="/Images/Home/PrinceKhalidAlFaisal.png"
                  alt="Prince Khalid AL Faisal"
                  width={450}
                  height={450}
                  className="object-contain drop-shadow-xl"
                  priority
                />
                
              </div>
            </div>
          </div>
          
          {/* Bottom decoration - Minimal */}
          <div className="mt-4 pt-3 text-center">
            <div className="inline-flex items-center gap-2">
              <div className="w-6 h-px bg-gradient-to-r from-transparent to-blue-300" />
              <Award className="w-3 h-3 text-blue-400" />
              <div className="w-6 h-px bg-gradient-to-l from-transparent to-blue-300" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlidePatronage;