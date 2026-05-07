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
import Link from "next/link";

const targetSectors = [
  // Row 1
  {
    nameAr: "المراكـــــــــــــــز الطبيـــــــــــــة",
    nameEn: "Medical Centers",
    icon: Building2,
    color: "blue",
  },
  {
    nameAr: "الأدويــــة والصيـدلة",
    nameEn: "Pharmaceuticals & Pharmacy",
    icon: Pill,
    color: "purple",
  },
  {
    nameAr: "المستلزمـات الطبية",
    nameEn: "Medical Supplies",
    icon: Syringe,
    color: "cyan",
  },
  {
    nameAr: "الشركـــــات الطبيـــــــــة",
    nameEn: "Medical Companies",
    icon: Briefcase,
    color: "emerald",
  },
  {
    nameAr: "المستشفيـــــــــــــــات",
    nameEn: "Hospitals",
    icon: Hospital,
    color: "rose",
  },
  // Row 2
  {
    nameAr: "صحة الأشخاص ذوي الإعاقة",
    nameEn: "Health of People with Disabilities",
    icon: Heart,
    color: "indigo",
  },
  {
    nameAr: "صحـــــــــة المــــــــرأة",
    nameEn: "Women's Health",
    icon: Flower2,
    color: "pink",
  },
  {
    nameAr: "صحـــــــــة الطفــــــل",
    nameEn: "Child Health",
    icon: Baby,
    color: "blue",
  },
  {
    nameAr: "صحــــــة كــــــبار الســـن",
    nameEn: "Elderly Care",
    icon: Users,
    color: "purple",
  },
  {
    nameAr: "صحـــــــة المتطوعين",
    nameEn: "Health Education",
    icon: BookOpen,
    color: "cyan",
  },
  // Row 3
  {
    nameAr: "الصحـــــــــة الاجتماعيـــــــــة",
    nameEn: "Social Health",
    icon: Shield,
    color: "emerald",
  },
  {
    nameAr: "الصحـــة النفسيـة",
    nameEn: "Mental Health",
    icon: Brain,
    color: "rose",
  },
  {
    nameAr: "الرعايـــة الوقائيــــة",
    nameEn: "Preventive Care",
    icon: ShieldCheck,
    color: "amber",
  },
  {
    nameAr: "الرعايـــــــة الأوليــــــــة",
    nameEn: "Primary Care",
    icon: Stethoscope,
    color: "indigo",
  },
  {
    nameAr: "التقنيـــة والصحــــة",
    nameEn: "HealthTech",
    icon: Activity,
    color: "pink",
  },
  // Row 4
  {
    nameAr: "السياحــــــــــة العلاجيـــــــــة",
    nameEn: "Medical Tourism",
    icon: Plane,
    color: "blue",
  },
  {
    nameAr: "النـــوادي الصحيـــة",
    nameEn: "Health Gyms",
    icon: Dumbbell,
    color: "purple",
  },
  {
    nameAr: "الكتـــــــب الطبيـــة",
    nameEn: "Educational Medical Books",
    icon: BookOpen,
    color: "cyan",
  },
  {
    nameAr: "المستثمــــــــــــــــــرون",
    nameEn: "Investors",
    icon: TrendingUp,
    color: "emerald",
  },
  {
    nameAr: "الغـــــذاء الصحــــي",
    nameEn: "Healthy Food",
    icon: Apple,
    color: "rose",
  },
];

const colorVariants = {
  blue: {
    gradient: "from-blue-600 to-cyan-400",
    bgLight: "bg-blue-500/15",
    border: "border-blue-500/25",
    text: "text-blue-400",
    hoverBg: "hover:bg-blue-500/5",
    iconBg: "bg-blue-500/20",
  },
  purple: {
    gradient: "from-purple-600 to-pink-500",
    bgLight: "bg-purple-500/15",
    border: "border-purple-500/25",
    text: "text-purple-400",
    hoverBg: "hover:bg-purple-500/5",
    iconBg: "bg-purple-500/20",
  },
  cyan: {
    gradient: "from-cyan-500 to-blue-500",
    bgLight: "bg-cyan-500/15",
    border: "border-cyan-500/25",
    text: "text-cyan-400",
    hoverBg: "hover:bg-cyan-500/5",
    iconBg: "bg-cyan-500/20",
  },
  emerald: {
    gradient: "from-emerald-600 to-teal-500",
    bgLight: "bg-emerald-500/15",
    border: "border-emerald-500/25",
    text: "text-emerald-400",
    hoverBg: "hover:bg-emerald-500/5",
    iconBg: "bg-emerald-500/20",
  },
  rose: {
    gradient: "from-rose-600 to-pink-500",
    bgLight: "bg-rose-500/15",
    border: "border-rose-500/25",
    text: "text-rose-400",
    hoverBg: "hover:bg-rose-500/5",
    iconBg: "bg-rose-500/20",
  },
  indigo: {
    gradient: "from-indigo-600 to-purple-500",
    bgLight: "bg-indigo-500/15",
    border: "border-indigo-500/25",
    text: "text-indigo-400",
    hoverBg: "hover:bg-indigo-500/5",
    iconBg: "bg-indigo-500/20",
  },
  pink: {
    gradient: "from-pink-600 to-rose-500",
    bgLight: "bg-pink-500/15",
    border: "border-pink-500/25",
    text: "text-pink-400",
    hoverBg: "hover:bg-pink-500/5",
    iconBg: "bg-pink-500/20",
  },
  amber: {
    gradient: "from-amber-600 to-orange-500",
    bgLight: "bg-amber-500/15",
    border: "border-amber-500/25",
    text: "text-amber-400",
    hoverBg: "hover:bg-amber-500/5",
    iconBg: "bg-amber-500/20",
  },
};

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
          
          <div className="p-4 sm:p-8 lg:p-12 max-w-7xl mx-auto relative">
            
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
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white" dir="rtl">
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

            {/* Sectors Grid - 5 columns on desktop, responsive */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-5 relative z-10">
              {targetSectors.map((sector, index) => {
                const Icon = sector.icon;
                const colors = colorVariants[sector.color];

                return (
                  <div
                    key={index}
                    className={`group relative rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-4 md:p-5 transition-all duration-300 hover:border-white/20 ${colors.hoverBg} hover:-translate-y-1 overflow-hidden`}
                  >
                    {/* Hover gradient effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                    
                    {/* Icon container */}
                    <div className="relative mb-3 flex justify-center">
                      <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl ${colors.iconBg} border ${colors.border} flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg`}>
                        <Icon className={`w-5 h-5 md:w-6 md:h-6 ${colors.text}`} />
                      </div>
                    </div>

                    {/* Arabic Text */}
                    <p className="text-xs md:text-sm text-center text-gray-200 leading-relaxed mb-1 font-medium" dir="rtl">
                      {sector.nameAr}
                    </p>

                    {/* English Text */}
                    <p className="text-[10px] md:text-xs text-center text-gray-400">
                      {sector.nameEn}
                    </p>

                    {/* Bottom decorative line on hover */}
                    <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r ${colors.gradient} group-hover:w-12 transition-all duration-500 rounded-full`} />
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
                  <span className="text-white/30">•</span>
                  <span className="text-sm">استكشف القطاعات</span>
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