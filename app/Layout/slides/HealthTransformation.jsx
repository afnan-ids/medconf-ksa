"use client";

import Image from "next/image";
import { Crown, Award, Star } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../il18/translations";

const HealthTransformation = () => {
  const { language } = useLanguage();
  const t = translations[language];
  return (
    <>
      <div className="hidden md:block relative w-full h-full bg-[url('/Images/Home/slider/HealthTransformationBG.png')] bg-cover" style={{backgroundPosition : "0px 80px ", backgroundRepeat : "no-repeat"}}>
        <div className="relative z-10 w-full h-full flex items-center justify-center px-5 md:px-8 lg:px-14 overflow-y-auto">
          {/* Top Bar */}
          <div className="absolute top-30 w-full mb-10">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-1 pb-10 mb-1">
              <div className="flex items-center">
                <p className="text-xs text-blue-950 mt-7  font-bold whitespace-nowrap">
                  HPQL
                </p>
                {language === "en" && (
                  <p className="text-sm text-blue-900 font-medium mt-7  ms-6 whitespace-nowrap">
                    HEALTH. EMPOWERMENT . AWARENESS . LONGEVITY
                  </p>
                )}
              </div>
              {language === "ar" && (
                <p
                  className="text-[10px] md:text-xs text-white/90 font-semibold tracking-[0.10em]"
                  dir="rtl"
                >
                  ﺻﺤﺔ . ﺗﻤﻜﻴﻦ . ﺗﻮﻋﻴﺔ . ﻋﻤﺮ ﻣﺪﻳﺪ
                </p>
              )}
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
              <div className="w-full lg:w-1/2  px-2 mt-10">
                {/* Heading */}
                <div className="relative text-white space-y-1.5 mt-50 ">
                  {language === "ar" && (
                    <p
                      className="text-sm md:text-lg lg:text-[36px] text-start leading-[1.4] tracking-tight"
                      dir="rtl"
                    >
                      التحـــــــول الصحـــــي كركيزة أساسيـة
                      <br />
                      <span style={{ wordSpacing: "1px" }}>
                        للاستثمــــــــار في رأس المال البشـري
                      </span>
                    </p>
                  )}
                  {language === "en" && (
                    <p
                      className="text-xs md:text-base lg:text-[2.5rem] text-start font-medium leading-relaxed text-white/95 mb-0"
                      style={{ lineHeight: "45px " }}
                    >
                      Health Transformation as
                      <br />
                      a Fundamental Pillar for Human
                      <br />
                      Capital Investment
                    </p>
                  )}
                </div>

                {/* Description */}
                <div className="rounded-xl py-1 space-y-2 mt-10">
                  {language === "ar" && (
                    <p
                      className="text-xs md:text-sm lg:text-[14px] leading-[1.8] text-white/95 text-start"
                      dir="rtl"
                    >
                      يهـــدف مؤتمر ومعرض تعزيز الصحة ليكون أبرز المنصات الصحية
                      المتخصصة في المملكة العربية
                      <br />
                      <span style={{ wordSpacing: "0.3px" }}>
                        الســـعودية، ويأتي كحدث وطني رائد يجمع بين المؤتمـــر
                        العلمي المتخصص والمعرض الصحي
                      </span>
                      <br />
                      <span style={{ wordSpacing: "0.4px" }}>
                        التفاعلي، في إطـــار متكامل يهدف إلى الارتقاء بمفاهيم
                        تعزيز الصحـــة وارتباطها بجودة الحياة
                      </span>
                      <br />
                      على مستوى الفرد والمجتمع{" "}
                    </p>
                  )}

                  {language === "en" && (
                    <p className="text-xs   md:text-sm lg:text-[0.98rem] leading-[1.7] text-white/90  text-justify">
                      <span style={{ wordSpacing: "0.25rem" }}>
                        The Health Promotion Conference and Exhibition Aims to
                        be The Kingdom of {" "}
                      </span>
                 
                      <span style={{wordSpacing : "0.1rem"}}>
                        Saudi Arabia's premier specialized health platform. As a
                        leading national event, it {" "}
                      </span>
              
                      <span style={{ wordSpacing: "0.7rem" }}>
                        integrates a specialized scientific conference with an
                        interactive health {" "}
                      </span>
                  
                      <span style={{ wordSpacing: "0.3rem" }}>
                        exhibition, creating a comprehensive framework to elevate
                        health promotion {" "}
                      </span>
                     
                      <span style={{ wordSpacing: "0.12rem" }}>
                        concepts and their vital link to the quality of life for
                        both individuals and society {" "}
                      </span>
                    </p>
                  )}
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

      {/* for mobile  */}
      <div className="block md:hidden relative  h-[700px]  bg-[url('/Images/Home/slider/HealthTransformationBG.png')]  bg-cover bg-no-repeat" style={{backgroundPosition: "-140px 0px"}}>
        {/* Abstract Layer Image */}
        <div className="absolute bottom-0 -left-90">
          <Image
            src="/Images/Home/slider/HealthTransformationLayerBG.png"
            alt="Abstract Layer"
            height={1800}
            width={1800}
            className="drop-shadow-2xl h-[760px] w-[800px]"
            priority
          />
        </div>
        <div className="relative z-10 w-full h-full flex items-center justify-center px-4 py-6 overflow-y-auto">
          <div className="w-full max-w-md mx-auto space-y-5">
            {/* Top Bar */}
            <div className="text-center space-y-2 pt-2">
              <div className="space-y-1">
                <p className="text-sm text-white font-bold">HPQL</p>
                {language === "en" && (
                  <p className="text-[10px] text-white font-semibold">
                    HEALTH PROMOTION & QUALITY OF LIFE
                  </p>
                )}
              </div>
              {language === "ar" && (
                <p
                  className="text-[10px] text-white/90 font-semibold tracking-[0.10em]"
                  dir="rtl"
                >
                  صحة • تمكين • توعية • عمر مديد
                </p>
              )}
            </div>

            {/* Heading */}
            <div className="text-center space-y-2">
              {language === "ar" && (
                <p
                  className="text-sm font-extrabold text-white leading-[1.4] tracking-tight"
                  dir="rtl"
                >
                  التحـــــــول الصحـــــي كركيزة أساسيـة للاستثمــــــــار في
                  رأس المال البشـري
                </p>
              )}
              {language === "en" && (
                <p className="text-xs font-medium leading-relaxed text-white/95">
                  Health Transformation as a Fundamental Pillar for Human
                  Capital Investment
                </p>
              )}
            </div>

            {/* Description */}
            <div className="space-y-3">
              {language === "ar" && (
                <p
                  className="text-[11px] leading-[1.6] text-white/95 text-center"
                  dir="rtl"
                >
                  يهـــدف مؤتمر ومعرض تعزيز الصحة ليكون أبرز المنصات الصحية
                  المتخصصة في المملكة العربية الســـعودية، ويأتي كحدث وطني رائد
                  يجمع بين المؤتمـــر العلمي المتخصص والمعرض الصحي التفاعلي، في
                  إطـــار متكامل يهدف إلى الارتقاء بمفاهيم تعزيز الصحـــة
                  وارتباطها بجودة الحياة على مستوى الفرد والمجتمع
                </p>
              )}
              {language === "en" && (
                <p className="text-[11px] leading-[1.6] text-white/90 text-center">
                  The Health Promotion Conference and Exhibition aims to be the
                  Kingdom of Saudi Arabia's premier specialized health platform.
                  As a leading national event, it integrates a specialized
                  scientific conference with an interactive health exhibition,
                  creating a comprehensive framework to elevate health promotion
                  concepts and their vital link to the quality of life for both
                  individuals and society
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HealthTransformation;
