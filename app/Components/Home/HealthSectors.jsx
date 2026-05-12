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
    <section className="relative w-full mx-auto overflow-hidden">
      {/* Dark themed background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-900">
        <div className="absolute top-10 left-10 w-32 h-32 sm:w-72 sm:h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 sm:w-80 sm:h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 left-1/3 w-48 h-48 sm:w-96 sm:h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Glass container */}
      <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-4 py-4">
        <div className="rounded-2xl sm:rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-2xl overflow-hidden">
          <div className="py-4 px-3 sm:py-8 lg:py-12 lg:px-0 max-w-7xl mx-auto relative">
            {/* Header Section */}
            <div className="text-center mb-12 sm:mb-16 relative z-10">
              <div className="relative inline-block group/badge mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-lg opacity-0 group-hover/badge:opacity-50 transition-opacity duration-500"></div>
                <div className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl text-white text-xs">
                  <Target className="w-4 h-4 text-blue-400" />
                  <span>Our Focus</span>
                  <span className="w-0.5 h-0.5 bg-white/30 rounded-full"></span>
                  <Globe className="w-4 h-4 text-cyan-400" />
                  <span>Healthcare Ecosystem</span>
                </div>
              </div>

              {/* Bilingual Headers */}
              <div className="space-y-3 mb-6">
                <h2
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-white"
                  dir="rtl"
                >
                  القطاعات المستهدفة
                </h2>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                    Target Sectors
                  </span>
                </h2>
              </div>

              <div className="relative w-20 h-1 mx-auto my-6">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-sm"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full"></div>
              </div>

              <p className="text-sm md:text-base text-gray-400 max-w-2xl mx-auto">
                Connecting key players across the healthcare ecosystem
              </p>
            </div>

            {/* Sectors Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-5 lg:gap-6">
              {targetSectors.map((sector, index) => {
                return (
                  <div
                    key={index}
                    className={`
                      group relative rounded-2xl p-5 transition-all duration-300
                      backdrop-blur-sm border
                      border-green-500/30
                      hover:bg-green-500/5
                      hover:-translate-y-2 hover:shadow-xl
                      'bg-white/5' 
                    `}
                  >
                    {/* Hover Gradient Overlay */}
                    <div
                      className={`
                        absolute inset-0 rounded-2xl bg-gradient-to-br from-green-500 to-cyan-400 
                        opacity-0 group-hover:opacity-10 transition-opacity duration-500
                      `}
                    />

                    {/* Content Container  */}
                    <div className="relative flex items-center  gap-3">
                      {/* Text Content */}
                      <div className="space-y-1.5">
                        <p
                          className="text-xs sm:text-sm text-gray-200 font-medium leading-relaxed"
                          dir="rtl"
                        >
                          {sector.nameAr}
                        </p>
                        <p className="text-[11px] sm:text-xs text-gray-400 text-end">
                          {sector.nameEn}
                        </p>
                      </div>

                      {/* Icon Container */}
                      <div
                        className={`
                          w-14 h-14 md:w-16 md:h-16 rounded-2xl
                          flex items-center justify-center
                          transition-all duration-300
                          group-hover:scale-110 group-hover:rotate-3
                           bg-white/15 border-white/30 border
                          backdrop-blur-sm
                        `}
                      >
                        <div className="relative w-8 h-8 md:w-9 md:h-9">
                          <Image
                            src={sector.icon}
                            alt={sector.nameEn}
                            fill
                            className="object-contain"
                            
                          />
                        </div>
                      </div>
                    </div>

                    {/* Bottom Hover Indicator */}
                    <div
                      className={`
                        absolute bottom-0 left-1/2 -translate-x-1/2
                        w-0 h-0.5 bg-gradient-to-r from-green-500 to-cyan-400
                        group-hover:w-12 transition-all duration-500 rounded-full
                      `}
                    />
                  </div>
                );
              })}
            </div>

            {/* Bottom CTA */}
            <div className="text-center mt-10 sm:mt-12 relative z-10">
              <Link
                href="#"
                className="group relative inline-flex items-center gap-3"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
                <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 md:px-8 py-3 rounded-full text-sm font-medium hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-3">
                  <Sparkles className="w-4 h-4" />
                  <span>Explore All Sectors</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
