"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../il18/translations";

const targetSectors = [
  // Row 1
  {
    nameAr: "المراكـــــــــــــــز الطبيـــــــــــــة",
    nameEn: "Medical Centers",
    icon: "/Images/Home/HealthCareSectors/medicalCenter.png",
    color: "green",
  },
  {
    nameAr: "الأدويــــة والصيـدلة",
    nameEn: "Pharmaceuticals & Pharmacy",
    icon: "/Images/Home/HealthCareSectors/Pharmaceuticals.png",
    color: "white",
  },
  {
    nameAr: "المستلزمـات الطبية",
    nameEn: "Medical Supplies",
    icon: "/Images/Home/HealthCareSectors/medicalsupplies.png",
    color: "green",
  },
  {
    nameAr: "الشركـــــات الطبيـــــــــة",
    nameEn: "Medical Companies",
    icon: "/Images/Home/HealthCareSectors/medicalCompines.png",
    color: "white",
  },
  {
    nameAr: "المستشفيـــــــــــــــات",
    nameEn: "Hospitals",
    icon: "/Images/Home/HealthCareSectors/hospitals.png",
    color: "green",
  },
  // Row 2
  {
    nameAr: "صحة الأشخاص ذوي الإعاقة",
    nameEn: "Health of People with Disabilities",
    icon: "/Images/Home/HealthCareSectors/Disabilities.png",
    color: "white",
  },
  {
    nameAr: "صحـــــــــة المــــــــرأة",
    nameEn: "Women's Health",
    icon: "/Images/Home/HealthCareSectors/Womenhealth.png",
    color: "green",
  },
  {
    nameAr: "صحـــــــــة الطفــــــل",
    nameEn: "Child Health",
    icon: "/Images/Home/HealthCareSectors/Childhealth.png",
    color: "white",
  },
  {
    nameAr: "صحــــــة كــــــبار الســـن",
    nameEn: "Elderly Care",
    icon: "/Images/Home/HealthCareSectors/ElderlyCare.png",
    color: "green",
  },
  {
    nameAr: "صحـــــــة المتطوعين",
    nameEn: "Health Education",
    icon: "/Images/Home/HealthCareSectors/Healtheducation.png",
    color: "white",
  },
  // Row 3
  {
    nameAr: "الصحـــــــــة الاجتماعيـــــــــة",
    nameEn: "Social Health",
    icon: "/Images/Home/HealthCareSectors/Socialhelath.png",
    color: "green",
  },
  {
    nameAr: "الصحـــة النفسيـة",
    nameEn: "Mental Health",
    icon: "/Images/Home/HealthCareSectors/Mentalhelath.png",
    color: "white",
  },
  {
    nameAr: "الرعايـــة الوقائيــــة",
    nameEn: "Preventive Care",
    icon: "/Images/Home/HealthCareSectors/Preventivecare.png",
    color: "green",
  },
  {
    nameAr: "الرعايـــــــة الأوليــــــــة",
    nameEn: "Primary Care",
    icon: "/Images/Home/HealthCareSectors/Primarycare.png",
    color: "white",
  },
  {
    nameAr: "التقنيـــة والصحــــة",
    nameEn: "HealthTech",
    icon: "/Images/Home/HealthCareSectors/HealthTech.png",
    color: "green",
  },
  // Row 4
  {
    nameAr: "السياحــــــــــة العلاجيـــــــــة",
    nameEn: "Medical Tourism",
    icon: "/Images/Home/HealthCareSectors/Medicaltourisim.png",
    color: "white",
  },
  {
    nameAr: "النـــوادي الصحيـــة",
    nameEn: "Health Gyms",
    icon: "/Images/Home/HealthCareSectors/GymsHealth.png",
    color: "green",
  },
  {
    nameAr: "الكتـــــــب الطبيـــة",
    nameEn: "Educational Medical Books",
    icon: "/Images/Home/HealthCareSectors/Medicalbooks.png",
    color: "white",
  },
  {
    nameAr: "المستثمــــــــــــــــــرون",
    nameEn: "Investors",
    icon: "/Images/Home/HealthCareSectors/Investors.png",
    color: "green",
  },
  {
    nameAr: "الغـــــذاء الصحــــي",
    nameEn: "Healthy Food",
    icon: "/Images/Home/HealthCareSectors/Healthyfood.png",
    color: "white",
  },
];
export default function TargetedSectors() {
  const { language } = useLanguage();
  const t = translations[language];
  return (
    <section className="relative w-full overflow-hidden py-6 sm:py-10 bg-[url('/Images/Home/HealthCareSectors/WhiteBackground.jpg')] bg-cover bg-center">
      <div className="relative z-10 px-4 sm:px-6">
        {/* Main Glass Card */}
        <div className="relative overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] border border-white/20 bg-white/80 backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.15)]">
          {/* Top Accent Line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent"></div>

          <div className="relative max-w-7xl mx-auto py-6 sm:py-8 md:py-10 lg:py-12 ">
            {/* Header Section - Mobile Optimized */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-white/20">
              <div className="flex items-center gap-3 justify-center w-full sm:w-auto">
                {language === "en" && (
                  <div className="flex items-center gap-3">
                    <div className="h-6 sm:h-8 w-0.5 rounded-full bg-gradient-to-b from-blue-900 to-blue-700"></div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-base sm:text-lg md:text-xl font-black tracking-tight bg-gradient-to-r from-blue-800 to-blue-800 bg-clip-text text-transparent">
                        HPQL
                      </span>
                      <div className="h-1 w-1 rounded-full bg-gray-400 hidden xs:block"></div>
                      <span className="text-[8px] xs:text-[10px] sm:text-xs tracking-[0.15em] sm:tracking-[0.2em] text-gray-600 uppercase">
                        Health Promotion & Quality of Life
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {language === "ar" && (
                <div
                  className="text-[10px] xs:text-xs sm:text-sm text-gray-600 tracking-wide text-center w-full sm:w-auto"
                  dir="rtl"
                >
                  تعزيز الصحة وجودة الحياة
                </div>
              )}
            </div>

            {/* Bilingual Headers - Mobile Optimized */}
            <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 mt-4 sm:mt-6 relative z-10">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
                {language === "en" && (
                  <h2 className="text-xl xs:text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-800 to-blue-800 bg-clip-text text-transparent">
                    Target Sectors
                  </h2>
                )}
                <div className="h-6 w-px bg-gradient-to-b from-transparent via-emerald-400/30 to-transparent hidden sm:block"></div>
                {language === "ar" && (
                  <h2
                    className="text-xl xs:text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-800 to-blue-800 bg-clip-text text-transparent"
                    dir="rtl"
                  >
                    القطاعات المستهدفة
                  </h2>
                )}
              </div>
              {/* Decorative underline - Mobile optimized */}
              <div className="mt-3 sm:mt-4 flex items-center justify-center gap-3 sm:gap-4">
                <div className="h-px w-8 sm:w-12 bg-blue-900/20" />
                <div className="h-1 w-1 sm:h-1.5 sm:w-1.5 rounded-full bg-green-500" />
                <div className="h-px w-8 sm:w-12 bg-blue-900/20" />
              </div>
            </div>

            {/* Sectors Grid - Mobile Responsive */}
            <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
              {targetSectors.map((sector, index) => {
                return (
                  <div
                    key={index}
                    className="
                  group relative rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5
                  transition-all duration-500
                  border border-emerald-100/30
                  bg-white/90
                  backdrop-blur-sm
                  shadow-[0_4px_15px_rgba(0,0,0,0.04)]
                  hover:border-emerald-300/50
                  hover:bg-white
                  hover:-translate-y-1 sm:hover:-translate-y-2
                  hover:shadow-[0_15px_35px_rgba(16,185,129,0.12)]
                  cursor-pointer
                  overflow-hidden
                "
                  >
                    {/* Hover gradient overlay */}
                    <div
                      className="
                    absolute inset-0 rounded-xl sm:rounded-2xl
                    bg-gradient-to-br from-emerald-500/10 via-green-500/10 to-teal-500/10
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-500
                  "
                    />

                    {/* Inner glow effects */}
                    <div className="absolute inset-0 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                      <div className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-500/20 blur-2xl rounded-full" />
                      <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-teal-500/20 blur-2xl rounded-full" />
                    </div>

                    {/* Top accent line on hover - Green */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400 group-hover:w-8 sm:group-hover:w-12 transition-all duration-500 rounded-full" />

                    {/* Content Container - Mobile Optimized */}
                    <div className="relative flex items-center gap-2 sm:gap-3">
                      {/* Text Content */}
                      <div className="space-y-1 flex-1">
                        {language === "ar" ? (
                          <p
                            className="
                        text-[11px] xs:text-xs sm:text-xs md:text-sm
                        text-blue-900
                        leading-relaxed
                        group-hover:text-slate-800
                        transition-colors
                        font-medium
                      "
                            dir="rtl"
                          >
                            {sector.nameAr}
                          </p>
                        ) : (
                          <p className="text-[9px] xs:text-[10px] sm:text-[11px] md:text-xs text-blue-900 text-end group-hover:text-slate-600 transition-colors">
                            {sector.nameEn}
                          </p>
                        )}
                      </div>

                      {/* Icon Container - Mobile Optimized */}
                      <div
                        className="
                      w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 
                      rounded-xl sm:rounded-2xl
                      flex items-center justify-center
                      transition-all duration-500
                      group-hover:scale-105 sm:group-hover:scale-110
                      group-hover:rotate-2 sm:group-hover:rotate-3
                      border border-emerald-100
                      bg-gradient-to-br from-white to-emerald-50/50
                      shadow-sm
                      group-hover:shadow-md
                      group-hover:border-emerald-200
                    "
                      >
                        <div className="relative w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 transition-transform duration-500 group-hover:scale-105 sm:group-hover:scale-110">
                          <Image
                            src={sector.icon}
                            alt={sector.nameEn}
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom CTA - Mobile Optimized */}
            <div className="text-center mt-8 sm:mt-10 md:mt-12 relative z-10">
              <Link href="#" className="group inline-flex items-center">
                <div
                  className="
                relative
                inline-flex
                items-center
                gap-2 sm:gap-2.5
                overflow-hidden
                rounded-full
                border border-emerald-100
                bg-white/80
                backdrop-blur-md
                px-4 sm:px-5 md:px-6
                py-2 sm:py-2.5 md:py-3
                text-xs sm:text-sm
                font-medium text-slate-700
                shadow-[0_4px_20px_rgba(16,185,129,0.08)]
                transition-all duration-300
                hover:-translate-y-0.5
                hover:border-emerald-200
                hover:shadow-[0_8px_30px_rgba(16,185,129,0.14)]
                hover:text-slate-900
              "
                >
                  {/* Soft gradient accent */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-emerald-50 via-green-50 to-teal-50" />

                  {/* Small accent dot */}
                  <div className="relative h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-emerald-500" />

                  <span className="relative">{t.exploreAllSectors}</span>

                  <ArrowRight
                    className="
                  relative
                  h-3 w-3 sm:h-4 sm:w-4
                  text-emerald-600
                  transition-transform duration-300
                  group-hover:translate-x-1
                "
                  />
                </div>
              </Link>
            </div>

            {/* Bottom Decorative Line */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
