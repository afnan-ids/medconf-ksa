"use client";

import {
  Building2,
  Pill,
  Syringe,
  Hospital,
  Heart,
  Baby,
  Users,
  Brain,
  Shield,
  Activity,
  Stethoscope,
  Plane,
  Dumbbell,
  BookOpen,
  TrendingUp,
  Globe,
  Sparkles,
  ShieldCheck,
  Target,
  ArrowRight,
  Briefcase,
  Apple,
  Flower2,
  Wind,
  Smile,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
  return (
    <section className="relative w-full overflow-hidden py-6 sm:py-10 bg-white/70">
      <div className="relative z-10 px-4 sm:px-6">
        {/* Main Glass Card */}
        <div className="relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] border border-white/20 bg-white/80 backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.15)]">
          {/* Top Accent Line - Green */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent"></div>

          {/* Subtle overlays for depth - Green tones */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.06),transparent_25%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(5,150,105,0.06),transparent_25%)]"></div>

          <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-8 sm:py-10 lg:py-12  bg-[url('/Images/Home/HealthCareSectors/WhiteBackground.jpg')] bg-cover bg-center">
            
            {/* Header Section */}
            <div className="text-center mb-10 sm:mb-12 relative z-10">
              
              {/* Enhanced Badge - Green Glass Style */}
              <div className="relative inline-block group/badge mb-5">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full blur-xl opacity-0 group-hover/badge:opacity-40 transition-opacity duration-500"></div>

                <div
                  className="
                    relative inline-flex items-center gap-2
                    px-5 py-2 rounded-full
                    border border-emerald-200/50
                    bg-white/80
                    backdrop-blur-xl
                    text-emerald-700
                    text-xs sm:text-sm
                    shadow-md
                    hover:shadow-emerald-500/20
                    transition-all
                    duration-300
                  "
                >
                  <Target className="w-4 h-4 text-emerald-600" />

                  <span className="font-medium">Our Focus</span>

                  <span className="w-1 h-1 rounded-full bg-emerald-400"></span>

                  <Globe className="w-4 h-4 text-emerald-600" />

                  <span className="font-medium">Healthcare Ecosystem</span>
                </div>
              </div>

              {/* Bilingual Headers - Green tones */}
              <div className="space-y-2 mb-5">
                <h2
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 tracking-tight"
                  dir="rtl"
                >
                  القطاعات المستهدفة
                </h2>

                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                  <span className="bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 bg-clip-text text-transparent">
                    Target Sectors
                  </span>
                </h2>
              </div>

              {/* Enhanced Divider - Green */}
              <div className="relative w-24 h-0.5 mx-auto my-5">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 rounded-full blur-sm"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 rounded-full"></div>
              </div>

              {/* Description */}
              <p className="text-sm md:text-base text-slate-500 max-w-2xl mx-auto font-light">
                Connecting key players across the healthcare ecosystem
              </p>
            </div>

            {/* Sectors Grid - Green Glass Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-5 lg:gap-6">
              {targetSectors.map((sector, index) => {
                return (
                  <div
                    key={index}
                    className="
                      group relative rounded-2xl p-5
                      transition-all duration-500
                      border border-emerald-100/30
                      bg-white/90
                      backdrop-blur-sm
                      shadow-[0_4px_15px_rgba(0,0,0,0.04)]
                      hover:border-emerald-300/50
                      hover:bg-white
                      hover:-translate-y-2
                      hover:shadow-[0_15px_35px_rgba(16,185,129,0.12)]
                      cursor-pointer
                      overflow-hidden
                    "
                  >
                    {/* Hover  */}
                    <div
                      className="
                        absolute inset-0 rounded-2xl
                        bg-gradient-to-br from-emerald-500/10 via-green-500/10 to-teal-500/10
                        opacity-0 group-hover:opacity-100
                        transition-opacity duration-500
                      "
                    />
                    
                    {/* Inner */}
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                      <div className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-500/20 blur-2xl rounded-full" />
                      <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-teal-500/20 blur-2xl rounded-full" />
                    </div>

                    {/* Top accent line on hover - Green */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400 group-hover:w-12 transition-all duration-500 rounded-full" />

                    {/* Content Container */}
                    <div className="relative flex items-center gap-3">
                      
                      {/* Text Content */}
                      <div className="space-y-1.5 flex-1">
                        <p
                          className="
                            text-xs sm:text-sm
                            text-slate-700
                            
                            leading-relaxed
                            group-hover:text-slate-800
                            transition-colors
                          "
                          dir="rtl"
                        >
                          {sector.nameAr}
                        </p>

                        <p className="text-[11px] sm:text-xs text-slate-500 text-end group-hover:text-slate-600 transition-colors">
                          {sector.nameEn}
                        </p>
                      </div>

                      {/* Icon Container - White/Green Glass Style */}
                      <div
                        className="
                          w-14 h-14 md:w-16 md:h-16 rounded-2xl
                          flex items-center justify-center
                          transition-all duration-500
                          group-hover:scale-110
                          group-hover:rotate-3
                          border border-emerald-100
                          bg-gradient-to-br from-white to-emerald-50/50
                          shadow-sm
                          group-hover:shadow-md
                          group-hover:border-emerald-200
                        "
                      >
                        <div className="relative w-8 h-8 md:w-9 md:h-9 transition-transform duration-500 group-hover:scale-110">
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

            {/* Bottom CTA - Green Glass Button */}
            <div className="text-center mt-10 sm:mt-12 relative z-10">
              <Link
                href="#"
                className="group relative inline-flex items-center gap-3"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-all duration-500 group-hover:scale-110"></div>

                <div
                  className="
                    relative
                    border border-emerald-200/50
                    bg-gradient-to-r from-emerald-500/10 via-green-500/10 to-teal-500/10
                    backdrop-blur-sm
                    text-slate-700
                    px-6 md:px-8 py-3
                    rounded-full
                    text-sm font-medium
                    hover:shadow-xl
                    hover:scale-105
                    hover:text-slate-800
                    transition-all
                    duration-300
                    flex items-center gap-3
                    overflow-hidden
                  "
                >
                  {/* Shine effect on hover */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/60 to-transparent skew-x-12" />
                  
                  <Sparkles className="w-4 h-4 text-emerald-600 group-hover:rotate-12 transition-transform duration-300" />

                  <span>Explore All Sectors</span>

                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 text-emerald-600" />
                </div>
              </Link>
            </div>

            {/* Bottom Decorative Line - Green */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}