"use client";

import {
  Clock,
  Mic2,
  Building2,
  Eye,
  Users,
  Globe,
  TrendingUp,
  Sparkles,
  ShieldCheck,
  Target,
  Zap,
  BarChart3,
  Radio,
  Share2,
} from "lucide-react";
import Link from "next/link";

export default function EventIndicators() {
  const mainMetrics = [
    {
      value: "100+",
      labelAr: "ساعــــــة تدريــــــب",
      labelEn: "CME Hours",
      icon: Clock,
      color: "blue",
    },
    {
      value: "100+",
      labelAr: "متحـــــــدث",
      labelEn: "Speakers",
      icon: Mic2,
      color: "purple",
    },
    {
      value: "300+",
      labelAr: "جهــــــــة عارضـــــــة",
      labelEn: "Exhibitors",
      icon: Building2,
      color: "cyan",
    },
  ];

  const audienceMetrics = [
    {
      value: "500K+",
      labelAr: "مشاهد للبث الحي",
      labelEn: "Livestream Views",
      icon: Radio,
      color: "emerald",
    },
    {
      value: "25K+",
      labelAr: "زائــــر مستهــــدف",
      labelEn: "Target Visitors",
      icon: Users,
      color: "amber",
    },
    {
      value: "20M+",
      labelAr: "مشاهدة للمحتوى الرقمي",
      labelEn: "Digital Content Views",
      icon: Share2,
      color: "rose",
    },
  ];

  const colorVariants = {
    blue: {
      gradient: "from-blue-600 to-cyan-400",
      bgLight: "bg-blue-500/20",
      border: "border-blue-500/30",
      text: "text-blue-400",
      numberBg: "bg-blue-500/10",
    },
    purple: {
      gradient: "from-purple-600 to-pink-500",
      bgLight: "bg-purple-500/20",
      border: "border-purple-500/30",
      text: "text-purple-400",
      numberBg: "bg-purple-500/10",
    },
    cyan: {
      gradient: "from-cyan-500 to-blue-500",
      bgLight: "bg-cyan-500/20",
      border: "border-cyan-500/30",
      text: "text-cyan-400",
      numberBg: "bg-cyan-500/10",
    },
    emerald: {
      gradient: "from-emerald-600 to-teal-500",
      bgLight: "bg-emerald-500/20",
      border: "border-emerald-500/30",
      text: "text-emerald-400",
      numberBg: "bg-emerald-500/10",
    },
    amber: {
      gradient: "from-amber-600 to-orange-500",
      bgLight: "bg-amber-500/20",
      border: "border-amber-500/30",
      text: "text-amber-400",
      numberBg: "bg-amber-500/10",
    },
    rose: {
      gradient: "from-rose-600 to-pink-500",
      bgLight: "bg-rose-500/20",
      border: "border-rose-500/30",
      text: "text-rose-400",
      numberBg: "bg-rose-500/10",
    },
  };

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
                  <TrendingUp className="w-4 h-4 text-blue-400" />
                  <span>Event Scale</span>
                  <span className="w-0.5 h-0.5 bg-white/30 rounded-full"></span>
                  <BarChart3 className="w-4 h-4 text-cyan-400" />
                  <span>Impact Metrics</span>
                </div>
              </div>

              {/* Bilingual Headers */}
              <div className="space-y-3 mb-6">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white" dir="rtl">
                  مؤشـــــرات التأثيـــــر في المؤتمر
                </h2>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                    Event Scale Indicators
                  </span>
                </h2>
              </div>

              <div className="relative w-20 h-1 mx-auto my-6">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-sm"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full"></div>
              </div>

              <div className="max-w-2xl mx-auto space-y-3">
                <p className="text-base md:text-lg text-gray-300 leading-relaxed" dir="rtl">
                  يهـــدف المؤتمر والمعـــرض المصاحب له
                  إلى حضور استثنائي في قلــــب اقتصاد
                  صحـــــي واعـــــد.
                </p>
                <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                  The conference and exhibition aim
                  for an exceptional presence in a
                  promising health economy
                </p>
              </div>
            </div>

            {/* Main Metrics Row - 3 Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-6 mb-12 sm:mb-16 relative z-10">
              {mainMetrics.map((metric) => {
                const Icon = metric.icon;
                const colors = colorVariants[metric.color];

                return (
                  <div
                    key={metric.labelEn}
                    className="group relative rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 md:p-8 hover:border-white/20 transition-all duration-500 hover:-translate-y-1 overflow-hidden text-center"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-700`} />
                    <div className={`absolute top-0 right-0 w-20 h-20 ${colors.bgLight} rounded-bl-[50px] rounded-tr-xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-50 group-hover:opacity-100`} />

                    {/* Icon */}
                    <div className="relative mb-4 flex justify-center">
                      <div className={`absolute inset-0 bg-gradient-to-r ${colors.gradient} blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-500 rounded-full`} />
                      <div className={`relative w-14 h-14 rounded-full bg-gradient-to-br ${colors.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                    </div>

                    {/* Value */}
                    <div className="space-y-2">
                      <p className={`text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r ${colors.gradient} bg-clip-text text-transparent`}>
                        {metric.value}
                      </p>
                      <p className="text-sm md:text-base text-gray-300" dir="rtl">
                        {metric.labelAr}
                      </p>
                      <p className="text-xs text-gray-400">
                        {metric.labelEn}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Audience Reach Section */}
            <div className="relative z-10 mb-8">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/20 backdrop-blur-xl mb-4">
                  <Globe className="w-4 h-4 text-blue-400" />
                  <span className="text-xs text-gray-300">Digital Reach</span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2" dir="rtl">
                  وصـــــول عالـــــي للجـــــمهور
                </h3>
                <h3 className="text-xl md:text-2xl font-bold">
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                    High reach to audiences
                  </span>
                </h3>
              </div>

              {/* Description */}
              <div className="max-w-3xl mx-auto text-center mb-10 space-y-3">
                <p className="text-base md:text-lg text-gray-300 leading-relaxed" dir="rtl">
                  مـــن خلال المحتـــوى الرقمـــــي للمؤتمر
                  نهدف للوصـــول إلى كافـــة الجمهور عبر
                  النشر على وسائــــــل الإعـلام الرقمي
                </p>
                <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                  Our digital strategy ensures
                  maximum reach to all audiences
                  through targeted content across
                  all digital media channels
                </p>
              </div>

              {/* Audience Metrics - 3 Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-6">
                {audienceMetrics.map((metric) => {
                  const Icon = metric.icon;
                  const colors = colorVariants[metric.color];

                  return (
                    <div
                      key={metric.labelEn}
                      className="group relative rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 md:p-8 hover:border-white/20 transition-all duration-500 hover:-translate-y-1 overflow-hidden text-center"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-700`} />
                      <div className={`absolute bottom-0 left-0 w-20 h-20 ${colors.bgLight} rounded-tr-[50px] rounded-bl-xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-50 group-hover:opacity-100`} />

                      {/* Icon */}
                      <div className="relative mb-4 flex justify-center">
                        <div className={`relative w-12 h-12 rounded-xl bg-gradient-to-br ${colors.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                      </div>

                      {/* Value */}
                      <div className="space-y-2">
                        <p className={`text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r ${colors.gradient} bg-clip-text text-transparent`}>
                          {metric.value}
                        </p>
                        <p className="text-sm md:text-base text-gray-300" dir="rtl">
                          {metric.labelAr}
                        </p>
                        <p className="text-xs text-gray-400">
                          {metric.labelEn}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Decorative Note */}
            <div className="text-center mt-12 relative z-10">
              <p className="text-xs text-gray-500">
                * Based on projected metrics for 2026 conference season
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}