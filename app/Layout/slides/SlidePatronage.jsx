"use client";

import Image from "next/image";
import { Crown, Award, Star } from "lucide-react";

import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../il18/translations";

const SlidePatronage = () => {
  const { language } = useLanguage();
  const t = translations[language];
  return (
    <>
      <div className="hidden md:block relative w-full h-full bg-[url('/Images/Home/slider/healbkg.png')] bg-cover bg-center">
        <div className="relative z-10 w-full h-full flex items-center justify-center px-5 md:px-8 lg:px-14 overflow-y-auto">
          <div className="w-full max-w-7xl mx-auto py-3">
            {/* Top Bar */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-1 pb-10 mb-1 ">
              <div>
              {language == "en" && (
                <p className="text-[10px] flex md:text-xs text-white/90 font-medium items-center ms-3 text-center">
                  <span className="font-extrabold me-3 p-4">HPQL</span> HEALTH
                  PROMOTION & QUALITY OF LIFE
                </p>
              )}
              </div>
              {language === "ar" && (
                <p
                  className="text-[10px] md:text-xs text-white/90 font-medium tracking-[0.10em]"
                  dir="rtl"
                >
                  صحة • تمكين • توعية • عمر مديد
                </p>
              )}
            </div>

            <div className="flex flex-col lg:flex-row gap-5 lg:gap-8">
              {/* Left Side */}
              <div className="w-full lg:w-1/2 space-y-3">
                {/* Patronage Badge */}
                <div className="relative px-4 py-3 shadow-2xl  bg-cyan-500 backdrop-blur-md rounded-xl border border-white/20 overflow-hidden">
                  {language === "ar" && (
                    <p
                      className="text-sm md:text-base lg:text-xl font-extrabold text-center text-blue-900 leading-snug"
                      dir="rtl"
                    >
                      برعاية كريمة من صاحب السمو الملكي
                    </p>
                  )}
                  {language === "en" && (
                    <p className="text-xs md:text-sm lg:text-base text-center text-blue-900 mt-1 font-medium">
                      Under the gracious patronage of His Royal Highness
                    </p>
                  )}
                </div>

                {/* Name Section */}
                <div className="rounded-xl py-2 backdrop-blur-[2px]">
                  <div className="flex flex-col md:flex-row justify-between items-center gap-2">
                    <div>
                      {language === "en" && (
                        <p className="text-lg md:text-2xl lg:text-[28px] font-extrabold text-white tracking-tight">
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
                        <p className="text-xs md:text-sm lg:text-[15px] text-white/90 leading-relaxed">
                          Advisor to the Custodian of the Two Holy Mosques,
                          <br />
                          Governor of Makkah Region
                        </p>
                      )}
                    </div>
                    <div>
                      {language === "ar" && (
                        <p
                          className="text-xs md:text-sm lg:text-[15px] text-white/90 text-right leading-relaxed"
                          dir="rtl"
                        >
                          مستشار خادم الحرمين الشريفين
                          <br />
                          أمير منطقة مكة المكرمة
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Conference Name */}
                <div className="text-center space-y-0.5">
                  {language === "ar" && (
                    <p
                      className="text-sm md:text-lg lg:text-2xl font-bold text-white leading-snug"
                      dir="rtl"
                      style={{ wordSpacing: "0.2rem" }}
                    >
                      مؤتمــــــــر ومعــــــــرض تعزيــــــــز الصحـــــــة
                      وجــــودة الحيــــاة
                    </p>
                  )}

                  {language === "en" && (
                    <p className="text-xs md:text-sm lg:text-xl text-white/90 tracking-wide">
                      Health Promotion & Quality of Life Conference and
                      Exhibition
                    </p>
                  )}
                </div>

                {/* Description */}
                <div className="rounded-xl px-2 py-1 space-y-1">
                  {language === "ar" && (
                    <p
                      className="text-xs md:text-sm lg:text-[15px] leading-relaxed text-white/95 text-center"
                      dir="rtl"
                    >
                      يقام أضخــــم حــــدث من نوعة في المنطقة الغربية يهـدف إلى
                      تحسين جــــودة الحياة تحــــت شعــــار
                    </p>
                  )}

                  {language === "en" && (
                    <p className="text-xs md:text-sm lg:text-[15px] leading-relaxed text-white/90 text-center">
                      The largest event of its kind in the Western Region is
                      being held, aiming to improve the quality of life under
                      the slogan
                    </p>
                  )}
                </div>

                {/* Slogan */}
                <div className="text-center py-1 px-2 rounded-xl">
                  {language === "ar" && (
                    <p
                      className="text-base md:text-xl lg:text-2xl font-extrabold text-white tracking-tight"
                      dir="rtl"
                    >
                      تعزيز الصحة وجودة الحياة{" "}
                    </p>
                  )}

                  {language === "en" && (
                    <p className="text-xs md:text-sm lg:text-base font-semibold text-white/90 tracking-[0.10em] uppercase mt-1">
                      HEALTH PROMOTION & QUALITY OF LIFE
                    </p>
                  )}
                </div>
              </div>

              {/* Right Side */}
              <div className="w-full lg:w-1/2 flex items-end justify-center">
                <div className="bg-gradient-to-br from-blue-100/30 to-cyan-100/20 rounded-full blur-3xl" />

                <div className="hidden text-7xl">Hi</div>
              </div>
            </div>
          </div>
        </div>

        {/* Prince Image */}
        <div className="absolute bottom-0 right-24">
          <Image
            src="/Images/Home/PrinceKhalidAlFaisal.png"
            alt="Prince Khalid AL Faisal"
            width={560}
            height={560}
            className="object-contain drop-shadow-2xl"
            priority
          />
        </div>
      </div>
      {/* for mobile  */}
      <div className="block md:hidden relative w-full  h-[700px]  bg-[url('/Images/Home/slider/healbkg.png')] bg-cover bg-center">
        <div className="relative z-10 w-full h-full flex  justify-center px-4 py-6 overflow-y-auto">
          <div className="w-full max-w-md mx-auto space-y-5 mt-20">
            {/* Top Bar */}
            <div className="text-center space-y-2">
              {language === "en" && (
                <p className="text-xs text-white/90 font-medium">
                  <span className="font-extrabold">HPQL</span> HEALTH PROMOTION
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
            <div className="relative px-4 py-3 shadow-2xl bg-cyan-500 backdrop-blur-md rounded-xl border border-white/20 overflow-hidden">
              {language === "ar" && (
                <p
                  className="text-sm font-extrabold text-center text-blue-900 leading-snug"
                  dir="rtl"
                >
                  برعاية كريمة من صاحب السمو الملكي
                </p>
              )}
              {language === "en" && (
                <p className="text-xs text-center text-blue-900 mt-1 font-medium">
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
                  className="text-xs leading-relaxed text-white/95 text-center"
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
                  className="text-base font-extrabold text-white tracking-tight"
                  dir="rtl"
                >
                  صحـــة . تمكيــن . توعيـــة . عمـر مديـــد
                </p>
              )}
              {language === "en" && (
                <p className="text-[10px] font-semibold text-white/90 tracking-[0.10em] uppercase">
                  HEALTH PROMOTION & QUALITY OF LIFE
                </p>
              )}
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
    </>
  );
};

export default SlidePatronage;
