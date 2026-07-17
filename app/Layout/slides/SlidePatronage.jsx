"use client";

import Image from "next/image";
import { Crown, Award, Star } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../il18/translations";

const SlidePatronage = () => {
  const { language } = useLanguage();
  const t = translations[language];
  
  return (
    <div className="relative w-full min-h-screen  h-full bg-[url('/Images/Home/slider/healbkg.png')] bg-cover overflow-hidden">
      {/* Floating orbs background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-indigo-500/15 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/4 w-56 h-56 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Desktop Version */}
      <div className="hidden md:block relative w-full min-h-screen mt-20">
        <div className="relative z-10 w-full h-full flex items-center justify-center px-5 md:px-8 lg:px-14 overflow-y-auto py-10">
          <div className="w-full max-w-7xl mx-auto">
            {/* Top Bar */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-1 pb-8 mb-1 mt-10">
              <div>
                {language === "en" && (
                  <p className="text-[10px] flex md:text-xs text-white/90 font-medium items-center text-center">
                    <span className="font-extrabold pe-4 text-[#57bbdd]">HPQL</span> 
                    HEALTH PROMOTION & QUALITY OF LIFE
                  </p>
                )}
              </div>
              {language === "ar" && (
                <p
                  className="text-[16px] mt-2 text-white/90 font-medium tracking-[0.10em]"
                  dir="rtl"
                >
                  صحة • تمكين • توعية • عمر مديد
                </p>
              )}
            </div>

            <div className="flex flex-col lg:flex-row gap-5 lg:gap-8">
              {/* Left Side */}
              <div className="w-full lg:w-1/2 space-y-4">
                {/* Patronage Badge */}
                <div className="relative px-6 py-4 shadow-2xl bg-[#57bbdd]/20 backdrop-blur-md rounded-xl border border-white/20 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#57bbdd]/10 to-transparent"></div>
                  {language === "ar" && (
                    <p
                      className="text-sm md:text-base lg:text-2xl text-center text-white leading-snug relative z-10"
                      dir="rtl"
                    >
                      برعاية كريمة من صاحب السمو الملكي
                    </p>
                  )}
                  {language === "en" && (
                    <p className="text-sm md:text-base lg:text-xl text-center text-white font-medium relative z-10">
                      Under the gracious patronage of His Royal Highness
                    </p>
                  )}
                </div>

                {/* Name Section */}
                <div className="rounded-xl py-3 backdrop-blur-[2px]">
                  <div className="flex flex-col md:flex-row justify-between items-center gap-2">
                    <div>
                      {language === "en" && (
                        <p className="text-lg md:text-2xl lg:text-[1.7rem] font-extrabold text-white tracking-tight">
                          Prince Khalid AL Faisal
                        </p>
                      )}
                    </div>
                    <div>
                      {language === "ar" && (
                        <p
                          className="text-lg md:text-2xl lg:text-[28px] font-extrabold text-white tracking-tight"
                          dir="rtl"
                        >
                          الأمير خالد الفيصل
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row justify-between items-start gap-2 mt-2 pt-2 border-t border-white/10">
                    <div>
                      {language === "en" && (
                        <p className="text-xs md:text-sm lg:text-[0.9rem] text-white/90 leading-relaxed">
                          Advisor to the Custodian of the Two Holy
                          <br />
                          <span style={{ wordSpacing: "0.3rem" }}>Mosques, Governor of Makkah Region</span>
                        </p>
                      )}
                    </div>
                    <div>
                      {language === "ar" && (
                        <p
                          className="text-xs md:text-sm lg:text-[15px] text-white/90 text-right leading-relaxed"
                          dir="rtl"
                        >
                          مستشار خادم الحرمين
                          <br />
                          الشريفين أمير منطقة مكة المكرمة
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Conference Name */}
                <div className="text-right space-y-0.5">
                  {language === "ar" && (
                    <p
                      className="text-sm md:text-lg lg:text-2xl font-bold text-white leading-snug"
                      dir="rtl"
                      style={{ wordSpacing: "0.5rem" }}
                    >
                      مؤتمــــــــر ومعــــــــرض تعزيــــــــز الصحـــــــة
                      وجــــودة الحيــــاة
                    </p>
                  )}

                  {language === "en" && (
                    <p
                      className="text-xs md:text-sm lg:text-[1.2rem] text-white/90 tracking-wide text-start"
                      style={{ wordSpacing: "0.3rem" }}
                    >
                      Health Promotion & Quality of Life Conference and Exhibition
                    </p>
                  )}
                </div>

                {/* Description */}
                <div className="rounded-xl py-1 space-y-1">
                  {language === "ar" && (
                    <p
                      className="text-xs md:text-sm lg:text-[0.9rem] leading-relaxed text-white/95 text-right"
                      dir="rtl"
                      style={{ wordSpacing: "0.2rem" }}
                    >
                      يقام أضخــــم حــــدث من نوعه في المنطقة الغربية يهـدف إلى
                      تحسين جــــودة الحيــــاة تحــــت شعــــار
                    </p>
                  )}

                  {language === "en" && (
                    <p className="text-xs md:text-sm lg:text-[15px] leading-relaxed text-white/90 text-start">
                      The largest event of its kind in the Western Region is
                      being held, aiming to improve the quality of life under
                      the slogan
                    </p>
                  )}
                </div>

                {/* Slogan */}
                <div className="text-start py-2 rounded-xl">
                  {language === "ar" && (
                    <p
                      className="text-base md:text-xl lg:text-[2.9rem] text-white tracking-tight"
                      dir="rtl"
                      style={{ wordSpacing: "0.1rem" }}
                    >
                      صحة • تمكين • توعية • عمر مديد
                    </p>
                  )}

                  {language === "en" && (
                    <p
                      className="text-[1.2rem] font-semibold text-white/90 tracking-[0.10em] uppercase text-start"
                      style={{ wordSpacing: "0.2rem" }}
                    >
                      HEALTH. EMPOWERMENT. AWARENESS. LONGEVITY
                    </p>
                  )}
                </div>

                {/* HPQL Logo */}
                <div className="flex items-center gap-2 pt-2">
                  <div className="w-12 h-12 bg-[#57bbdd]/20 p-8 rounded-xl flex  items-center justify-center border border-white/20">
                    <span className="text-white font-bold text-lg ">HPQL</span>
                  </div>
                  <div>
                    <p className="text-xs text-white/70">Health Promotion & Quality of Life</p>
                    <p className="text-[10px] text-white/50">صحة. تمكين. توعية. عمر مديد</p>
                  </div>
                </div>
              </div>

              {/* Right Side - Prince Image */}
              <div className="w-full lg:w-1/2 flex items-end justify-center relative mt-18">
                <div className="absolute inset-0 bg-gradient-to-br from-[#57bbdd]/5 to-transparent rounded-full blur-3xl"></div>
                <Image
                  src="/Images/Home/PrinceKhalidAlFaisal.png"
                  alt="Prince Khalid AL Faisal"
                  width={400}
                  height={400}
                  className="object-contain drop-shadow-2xl relative z-10 w-auto max-h-[550px]"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="block md:hidden relative w-full min-h-screen">
        <div className="relative z-10 w-full h-full flex justify-center px-4 py-6 overflow-y-auto">
          <div className="w-full max-w-md mx-auto space-y-5 mt-16">
            {/* Top Bar */}
            <div className="text-center space-y-2">
              {language === "en" && (
                <p className="text-xs text-white/90 font-medium">
                  <span className="font-extrabold text-[#57bbdd] ">HPQL</span> HEALTH PROMOTION
                  & QUALITY OF LIFE
                </p>
              )}

              {language === "ar" && (
                <p
                  className="text-xs text-white/90 font-medium tracking-[0.10em]"
                  dir="rtl"
                >
                  صحة • تمكين • توعية • عمر مديد
                </p>
              )}
            </div>

            {/* Patronage Badge */}
            <div className="relative px-4 py-3 shadow-2xl bg-[#57bbdd]/20 backdrop-blur-md rounded-xl border border-white/20 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#57bbdd]/10 to-transparent"></div>
              {language === "ar" && (
                <p
                  className="text-sm font-extrabold text-center text-white leading-snug relative z-10"
                  dir="rtl"
                >
                  برعاية كريمة من صاحب السمو الملكي
                </p>
              )}
              {language === "en" && (
                <p className="text-xs text-center text-white mt-1 font-medium relative z-10">
                  Under the gracious patronage of His Royal Highness
                </p>
              )}
            </div>

            {/* Name Section */}
            <div className="rounded-xl px-4 py-3 backdrop-blur-[2px] space-y-3">
              <div className="text-center space-y-1">
                {language === "en" && (
                  <p className="text-lg font-extrabold text-white tracking-tight">
                    Prince Khalid AL Faisal
                  </p>
                )}
                {language === "ar" && (
                  <p
                    className="text-lg font-extrabold text-white tracking-tight"
                    dir="rtl"
                  >
                    الأمير خالد الفيصل
                  </p>
                )}
              </div>

              <div className="pt-2 border-t border-white/10 text-center space-y-1">
                {language === "en" && (
                  <p className="text-xs text-white/90 leading-relaxed">
                    Advisor to the Custodian of the Two Holy Mosques,
                    <br />
                    Governor of Makkah Region
                  </p>
                )}
                {language === "ar" && (
                  <p
                    className="text-xs text-white/90 leading-relaxed"
                    dir="rtl"
                  >
                    مستشار خادم الحرمين الشريفين
                    <br />
                    أمير منطقة مكة المكرمة
                  </p>
                )}
              </div>
            </div>

            {/* Conference Name */}
            <div className="text-center space-y-1.5">
              {language === "ar" && (
                <p
                  className="text-base font-bold text-white leading-snug"
                  dir="rtl"
                >
                  مؤتمر ومعرض تعزيز الصحة وجودة الحياة
                </p>
              )}
              {language === "en" && (
                <p className="text-xs text-white/90 tracking-wide">
                  Health Promotion & Quality of Life Conference and Exhibition
                </p>
              )}
            </div>

            {/* Description */}
            <div className="space-y-2">
              {language === "ar" && (
                <p
                  className="text-[20px] leading-relaxed text-white/95 text-right"
                  dir="rtl"
                >
                  يقام أضخم حدث من نوعه في المنطقة الغربية يهدف إلى تحسين جودة
                  الحياة تحت شعار
                </p>
              )}
              {language === "en" && (
                <p className="text-xs leading-relaxed text-white/90 text-center">
                  The largest event of its kind in the Western Region is being
                  held, aiming to improve the quality of life under the slogan
                </p>
              )}
            </div>

            {/* Slogan */}
            <div className="text-center space-y-1.5 py-2">
              {language === "ar" && (
                <p
                  className="text-[25px] text-white tracking-tight"
                  dir="rtl"
                >
                  صحـــة . تمكيــن . توعيـــة . عمـر مديـــد
                </p>
              )}
              {language === "en" && (
                <p className="text-[10px] font-semibold text-white/90 tracking-[0.10em] uppercase">
                  HEALTH. EMPOWERMENT. AWARENESS. LONGEVITY
                </p>
              )}
            </div>

            {/* HPQL Logo Mobile */}
            <div className="flex items-center justify-center gap-2 pt-2">
              <div className="w-10 h-10 bg-[#57bbdd]/20 rounded-xl flex items-center justify-center border border-white/20">
                <span className="text-white font-bold text-sm">HPQL</span>
              </div>
            </div>

            {/* Prince Image - Centered at bottom */}
            <div className="flex justify-center items-center pt-4">
              <Image
                src="/Images/Home/PrinceKhalidAlFaisal.png"
                alt="Prince Khalid AL Faisal"
                width={280}
                height={280}
                className="object-contain drop-shadow-2xl w-auto max-w-[70%] h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlidePatronage;