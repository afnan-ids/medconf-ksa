"use client";

import {
  Users,
  TrendingUp,
  Lightbulb,
  Award,
  Heart,
  Star,
  Sparkles,
  ShieldCheck,
  Target,
  ArrowRight,
  GraduationCap,
  Microscope,
  Globe,
  Briefcase,
  Zap,
} from "lucide-react";
import Link from "next/link";

const colorVariants = {
  blue: {
    gradient: "from-blue-600 to-cyan-400",
    bgLight: "bg-blue-500/20",
    border: "border-blue-500/30",
    text: "text-blue-400",
    glow: "bg-blue-600/30",
  },
  purple: {
    gradient: "from-purple-600 to-pink-500",
    bgLight: "bg-purple-500/20",
    border: "border-purple-500/30",
    text: "text-purple-400",
    glow: "bg-purple-600/30",
  },
  cyan: {
    gradient: "from-cyan-500 to-blue-500",
    bgLight: "bg-cyan-500/20",
    border: "border-cyan-500/30",
    text: "text-cyan-400",
    glow: "bg-cyan-600/30",
  },
  emerald: {
    gradient: "from-emerald-600 to-teal-500",
    bgLight: "bg-emerald-500/20",
    border: "border-emerald-500/30",
    text: "text-emerald-400",
    glow: "bg-emerald-600/30",
  },
  amber: {
    gradient: "from-amber-600 to-orange-500",
    bgLight: "bg-amber-500/20",
    border: "border-amber-500/30",
    text: "text-amber-400",
    glow: "bg-amber-600/30",
  },
  rose: {
    gradient: "from-rose-600 to-pink-500",
    bgLight: "bg-rose-500/20",
    border: "border-rose-500/30",
    text: "text-rose-400",
    glow: "bg-rose-600/30",
  },
};

// Stats data for Area 1
const statsData = [
  {
    value: "200+",
    labelAr: "قياديـة سعودية في القطــاع الطبي",
    labelEn: "Female Leaders in Health",
    icon: Users,
    color: "blue",
  },
  {
    value: "35,000+",
    labelAr: "طبيبـــــة سعوديـــــة",
    labelEn: "Saudi Female Doctors",
    icon: Heart,
    color: "rose",
  },
  {
    value: "65%",
    labelAr: "نسبة الكوادر النسائية في قطاع التمريض",
    labelEn: "Percentage of Female Staff in Nursing",
    icon: Target,
    color: "purple",
  },
  {
    value: "200%",
    labelAr: "نمو في العيادات المتخصصة لصحة المرأة",
    labelEn: "Growth in Specialized Women's Health Clinics",
    icon: TrendingUp,
    color: "emerald",
  },
  {
    value: "15+",
    labelAr: "براءة اختـــــراع طبية مسجلـــــة عالميا لطبيبات سعــوديات",
    labelEn: "Global Medical Patents by Saudi Female Doctors",
    icon: Award,
    color: "cyan",
  },
];

// Key highlights data for Area 2
const highlightsData = [
  {
    titleAr: "تمكين المرأة في القطاع الصحي",
    titleEn: "Women Empowerment in Health Sector",
    icon: Briefcase,
    color: "blue",
  },
  {
    titleAr: "التمريض: ركائز الرعاية الطبية",
    titleEn: "Nursing: Pillars of Medical Care",
    icon: Heart,
    color: "rose",
  },
  {
    titleAr: "دور المرأة في التحول الرقمي بمجال الصحة",
    titleEn: "Women's Role in Digital Health Transformation",
    icon: Zap,
    color: "purple",
  },
  {
    titleAr: "المرأة في الأبحاث والابتكار الطبي",
    titleEn: "Women in Medical Research & Innovation",
    icon: Microscope,
    color: "emerald",
  },
  {
    titleAr: "المرأة السعودية في المنظمات الطبية الدولية",
    titleEn: "Saudi Women in International Medical Organizations",
    icon: Globe,
    color: "cyan",
  },
  {
    titleAr: "المرأة في التعليم الطبي والأكاديمي",
    titleEn: "Women in Medical Education & Academia",
    icon: GraduationCap,
    color: "amber",
  },
];

export default function WomenAndHealth() {
  return (
    <section className="relative w-full mx-auto overflow-hidden">
      {/* Dark themed background - matching Strategic Objectives */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-900">
        <div className="absolute top-10 left-10 w-32 h-32 sm:w-72 sm:h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 sm:w-80 sm:h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 left-1/3 w-48 h-48 sm:w-96 sm:h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-32 h-32 sm:w-64 sm:h-64 bg-amber-500/20 rounded-full blur-3xl animate-pulse delay-700 hidden sm:block"></div>
      </div>

      {/* Glass container */}
      <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-4 py-4">
        <div className="rounded-2xl sm:rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-2xl overflow-hidden hover:shadow-[0_30px_60px_-15px_rgba(79,70,229,0.3)] transition-all duration-700">
          {/* Top gradient line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>

          <div className="p-4 sm:p-8 lg:p-12 max-w-7xl mx-auto relative">
            {/* Decorative orbs inside */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl hidden sm:block"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl hidden sm:block"></div>

            {/* Header Section - Two Columns (English + Arabic) */}
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 mb-12 sm:mb-16 relative z-10">
              {/* English Column */}
              <div className="text-center md:text-left">
                <div className="relative inline-block group/badge mb-4 sm:mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-lg opacity-0 group-hover/badge:opacity-50 transition-opacity duration-500"></div>
                  <div className="relative inline-flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1 sm:py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl text-white text-[10px] sm:text-xs">
                    <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
                    <span>Women in Healthcare</span>
                    <span className="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-white/30 rounded-full"></span>
                    <Star className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400" />
                    <span>Vision 2030</span>
                  </div>
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
                  Woman & Health
                  <br />
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                    المرأة والصحة
                  </span>
                </h2>

                <div className="relative w-20 h-1 my-4 mx-auto md:mx-0">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-sm"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full"></div>
                </div>

                <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
                  Celebrating the remarkable contributions of Saudi women in
                  healthcare — from leadership to innovation.
                </p>
              </div>

              {/* Arabic Column - RTL */}
              <div className="text-center md:text-right" dir="rtl">
                <div className="relative inline-block group/badge mb-4 sm:mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-lg opacity-0 group-hover/badge:opacity-50 transition-opacity duration-500"></div>
                  <div className="relative inline-flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1 sm:py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl text-white text-[10px] sm:text-xs">
                    <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
                    <span>المرأة في القطاع الصحي</span>
                    <span className="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-white/30 rounded-full"></span>
                    <Star className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400" />
                    <span>رؤية 2030</span>
                  </div>
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
                  المرأة والصحة
                  <br />
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                    Woman & Health
                  </span>
                </h2>

                <div className="relative w-20 h-1 my-4 mx-auto md:mx-0 md:mr-0">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-sm"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full"></div>
                </div>

                <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
                  نحتفي بالإسهامات المذهلة للنساء السعوديات في القطاع الصحي —
                  من القيادة إلى الابتكار
                </p>
              </div>
            </div>

            {/* AREA 1: Stats Section - LARGER CARDS like Strategic Objectives */}
            <div className="mb-16 sm:mb-20 relative z-10">
              <div className="text-center mb-8 sm:mb-10">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                    Leading
                  </span>{" "}
                  Impact Numbers
                </h3>
                <p className="text-sm text-gray-400">أرقام مؤثرة</p>
                <div className="relative w-16 h-0.5 mx-auto mt-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7 lg:gap-8">
                {statsData.map((stat, index) => {
                  const Icon = stat.icon;
                  const colors = colorVariants[stat.color];

                  return (
                    <div
                      key={index}
                      className="group relative rounded-xl sm:rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 md:p-7 lg:p-8 hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 sm:hover:-translate-y-2 overflow-hidden text-center"
                    >
                      {/* Hover glow effect */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-700`}
                      />

                      {/* Corner accent */}
                      <div
                        className={`absolute top-0 right-0 w-24 h-24 sm:w-28 sm:h-28 ${colors.bgLight} rounded-bl-[60px] sm:rounded-bl-[80px] rounded-tr-xl sm:rounded-tr-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-50 group-hover:opacity-100`}
                      />

                      {/* Icon - LARGER like Strategic Objectives */}
                      <div className="relative mb-5 sm:mb-6 md:mb-7">
                        <div
                          className={`absolute inset-0 bg-gradient-to-r ${colors.gradient} blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-500 rounded-xl sm:rounded-2xl`}
                        />
                        <div
                          className={`relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br ${colors.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}
                        >
                          <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                        </div>
                      </div>

                      {/* Value - LARGER */}
                      <p
                        className={`text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r ${colors.gradient} bg-clip-text text-transparent mb-3 sm:mb-4`}
                      >
                        {stat.value}
                      </p>

                      {/* Divider */}
                      <div
                        className={`w-16 h-0.5 bg-gradient-to-r ${colors.gradient} mx-auto mb-4 sm:mb-5`}
                      ></div>

                      {/* Labels */}
                      <p
                        className="text-sm md:text-base text-gray-200 font-medium leading-relaxed mb-2"
                        dir="rtl"
                      >
                        {stat.labelAr}
                      </p>
                      <p className="text-xs text-gray-400">{stat.labelEn}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* AREA 2: Key Highlights Section */}
            <div className="relative z-10">
              <div className="text-center mb-8 sm:mb-10">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                    Key
                  </span>{" "}
                  Highlights
                </h3>
                <p className="text-sm text-gray-400">أبرز المواضيع</p>
                <div className="relative w-16 h-0.5 mx-auto mt-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7 lg:gap-8">
                {highlightsData.map((highlight, index) => {
                  const Icon = highlight.icon;
                  const colors = colorVariants[highlight.color];

                  return (
                    <div
                      key={index}
                      className="group relative rounded-xl sm:rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 md:p-7 lg:p-8 hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 sm:hover:-translate-y-2 overflow-hidden"
                    >
                      {/* Hover glow effect */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-700`}
                      />

                      {/* Corner accent */}
                      <div
                        className={`absolute top-0 right-0 w-24 h-24 sm:w-28 sm:h-28 ${colors.bgLight} rounded-bl-[60px] sm:rounded-bl-[80px] rounded-tr-xl sm:rounded-tr-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-50 group-hover:opacity-100`}
                      />

                      {/* Icon - LARGER */}
                      <div className="relative mb-5 sm:mb-6 md:mb-7">
                        <div
                          className={`absolute inset-0 bg-gradient-to-r ${colors.gradient} blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-500 rounded-xl sm:rounded-2xl`}
                        />
                        <div
                          className={`relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br ${colors.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}
                        >
                          <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                        </div>
                      </div>

                      {/* Divider */}
                      <div
                        className={`w-16 h-0.5 bg-gradient-to-r ${colors.gradient} mb-4 sm:mb-5`}
                      ></div>

                      {/* Arabic Title - LARGER */}
                      <p
                        className="text-base sm:text-lg text-gray-100 leading-relaxed mb-2 font-medium"
                        dir="rtl"
                      >
                        {highlight.titleAr}
                      </p>

                      {/* English Title */}
                      <p className="text-xs sm:text-sm text-gray-400">
                        {highlight.titleEn}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom CTA - Matching Strategic Objectives style */}
            <div className="text-center mt-12 sm:mt-16 relative z-10">
              <Link href="#" className="group relative inline-flex items-center">
                {/* Glow */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-50"></div>

                {/* Button */}
                <div className="relative flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span>Explore Women in Health Initiatives</span>
                  {/* <span className="hidden sm:inline mx-1 text-white/30">•</span> */}
                  {/* <span className="text-xs sm:text-sm">استكشف مبادرات المرأة في الصحة</span> */}
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </Link>
            </div>

            {/* Bottom decorative note */}
            <div className="text-center mt-6 sm:mt-8 relative z-10">
              <p className="text-[10px] sm:text-xs text-gray-500">
                * In alignment with Saudi Vision 2030's commitment to empowering
                women in the healthcare workforce
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}