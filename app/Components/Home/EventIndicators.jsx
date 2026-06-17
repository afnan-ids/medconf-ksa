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
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../il18/translations";
export default function EventIndicators() {
  const { language } = useLanguage();
  const t = translations[language];
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
      labelAr: "ائــــر مستهــــدف",
      labelEn: "CME Hours",
      icon: Clock,
      color: "amber",
    },
    {
      value: "20M+",
      labelAr: "مشاهدة للمحتوى رقمي",
      labelEn: "Exhibitors",
      icon: Building2,
      color: "rose",
    },
  ];

  const colorVariants = {
    blue: {
      gradient: "from-blue-500 to-indigo-500",
      gradientLight: "from-blue-400 to-indigo-400",
      bgLight: "bg-blue-500/10",
      border: "border-blue-500/20",
      text: "text-blue-400",
      numberBg: "bg-blue-500/10",
      glow: "shadow-blue-500/20",
    },
    purple: {
      gradient: "from-purple-500 to-pink-500",
      gradientLight: "from-purple-400 to-pink-400",
      bgLight: "bg-purple-500/10",
      border: "border-purple-500/20",
      text: "text-purple-400",
      numberBg: "bg-purple-500/10",
      glow: "shadow-purple-500/20",
    },
    cyan: {
      gradient: "from-cyan-500 to-blue-500",
      gradientLight: "from-cyan-400 to-blue-400",
      bgLight: "bg-cyan-500/10",
      border: "border-cyan-500/20",
      text: "text-cyan-400",
      numberBg: "bg-cyan-500/10",
      glow: "shadow-cyan-500/20",
    },
    emerald: {
      gradient: "from-emerald-500 to-teal-500",
      gradientLight: "from-emerald-400 to-teal-400",
      bgLight: "bg-emerald-500/10",
      border: "border-emerald-500/20",
      text: "text-emerald-400",
      numberBg: "bg-emerald-500/10",
      glow: "shadow-emerald-500/20",
    },
    amber: {
      gradient: "from-amber-500 to-orange-500",
      gradientLight: "from-amber-400 to-orange-400",
      bgLight: "bg-amber-500/10",
      border: "border-amber-500/20",
      text: "text-amber-400",
      numberBg: "bg-amber-500/10",
      glow: "shadow-amber-500/20",
    },
    rose: {
      gradient: "from-rose-500 to-pink-500",
      gradientLight: "from-rose-400 to-pink-400",
      bgLight: "bg-rose-500/10",
      border: "border-rose-500/20",
      text: "text-rose-400",
      numberBg: "bg-rose-500/10",
      glow: "shadow-rose-500/20",
    },
  };

  return (
    <section className="relative w-full mx-auto overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a2a] via-[#1a1a4a] to-[#0a0a2a]">
        {/* Animated glowing orbs */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl animate-pulse-slower"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-1/4 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>

        {/* Grid pattern overlay */}
      </div>

      {/* Main glass container with enhanced blur */}
      <div className="relative z-10 mx-auto px-4 sm:px-6 py-6 md:py-10">
        <div className="rounded-3xl sm:rounded-[3rem] border border-white/15 bg-white/5 backdrop-blur-xl shadow-2xl overflow-hidden">
          {/* Inner gradient border highlight */}
          <div className="absolute inset-0 rounded-3xl sm:rounded-[3rem] pointer-events-none bg-gradient-to-r from-white/5 via-transparent to-white/5"></div>

          <div className="px-3 md:px-0 py-6 sm:py-10 lg:py-16 max-w-7xl mx-auto relative">
            {/* Header Section with enhanced typography */}
            <div className="text-center mb-12 sm:mb-20 relative z-10">
              <div className="relative inline-block group/badge mb-8">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-lg opacity-0 group-hover/badge:opacity-50 transition-opacity duration-500"></div>
                <div className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl text-white text-xs">
                  <TrendingUp className="w-4 h-4 text-blue-400" />
                  <span>{t.eventScale}</span>
                  <span className="w-0.5 h-0.5 bg-white/30 rounded-full"></span>
                  <BarChart3 className="w-4 h-4 text-cyan-400" />
                  <span>{t.impactMatricx}</span>
                </div>
              </div>

              {/* Bilingual Headers with enhanced gradients */}
              <div className="space-y-4 mb-8">
                {language === "ar" && (
                  <h2
                    className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight"
                    dir="rtl"
                  >
                    مؤشـــــرات التأثيـــــر في المؤتمر
                  </h2>
                )}
                {language === "en" && (
                  <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                    <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent animate-gradient">
                      Event Scale Indicators
                    </span>
                  </h2>
                )}
              </div>

              {/* Decorative divider with enhanced animation */}
              <div className="relative w-24 h-1 mx-auto my-8">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full blur-sm animate-pulse"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 rounded-full"></div>
              </div>

              {/* Description text with improved readability */}
              <div className="max-w-3xl mx-auto space-y-4">
                {language === "ar" && (
                  <p
                    className="text-base md:text-lg text-gray-200/90 leading-relaxed font-light"
                    dir="rtl"
                  >
                    يهـــدف المؤتمر والمعـــرض المصاحب له إلى حضور استثنائي في
                    قلــــب اقتصاد صحـــــي واعـــــد
                  </p>
                )}

                {language === "en" && (
                  <p className="text-base md:text-lg text-gray-300/80 leading-relaxed font-light">
                    The conference and exhibition aim for an exceptional
                    presence in a promising health economy
                  </p>
                )}
              </div>
            </div>

            {/* Main Metrics with enhanced glass morphism cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-20">
              {mainMetrics.map((metric, index) => {
                const Icon = metric.icon;
                const colors = colorVariants[metric.color];

                return (
                  <div
                    key={metric.labelEn}
                    className="relative group animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Floating element */}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                      <div className="flex flex-col items-center">
                        {/* Number bubble with enhanced glass effect */}
                        <div
                          className={`
                            px-6 py-2.5 rounded-2xl
                            border border-white/20
                            bg-white backdrop-blur-md
                            shadow-lg
                            transition-all duration-300
                            group-hover:scale-105
                            group-hover:shadow-xl
                          `}
                        >
                          <p
                            className={`
                              text-2xl md:text-3xl lg:text-4xl
                              font-bold
                              bg-gradient-to-r ${colors.gradient}
                              bg-clip-text text-transparent
                            `}
                          >
                            {metric.value}
                          </p>
                        </div>
                        <div className="w-px h-5 bg-gradient-to-b from-white/40 to-transparent" />
                      </div>
                    </div>

                    {/* Main Card with enhanced glass morphism */}
                    <div
                      className={`
                        relative overflow-hidden
                        rounded-2xl lg:rounded-3xl
                        border border-white/15
                        bg-white/5 backdrop-blur-xl
                        p-6 pt-20
                        text-center
                        transition-all duration-500
                        group-hover:-translate-y-2
                        group-hover:border-white/30
                        group-hover:shadow-2xl
                        group-hover:shadow-${metric.color}-500/10
                      `}
                    >
                      {/* Animated gradient background on hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                      {/* Icon orb with  */}
                      <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full blur-2xl bg-gradient-to-br from-white/5 to-transparent"></div>
                      <div
                        className={`
                          absolute top-4 right-4
                          w-20 h-20 rounded-full
                          blur-2xl opacity-30
                          bg-gradient-to-br ${colors.gradient}
                          transition-all duration-500
                          group-hover:opacity-50
                          group-hover:scale-150
                        `}
                      ></div>

                      {/* Content */}
                      <div className="relative z-10 flex flex-col items-center">
                        {/* Icon container with enhanced gradient */}
                        <div
                          className={`
                            w-16 h-16 lg:w-20 lg:h-20
                            rounded-2xl
                            bg-gradient-to-br ${colors.gradient}
                            flex items-center justify-center
                            shadow-lg
                            mb-5
                            transition-all duration-300
                            group-hover:scale-110
                            group-hover:shadow-xl
                             group-hover:rotate-3
                          `}
                        >
                          <Icon className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
                        </div>

                        {/* Labels with improved typography */}
                        {language === "ar" ? (
                          <p
                            className="text-lg lg:text-xl font-semibold text-white mb-1.5"
                            dir="rtl"
                          >
                            {metric.labelAr}
                          </p>
                        ) : (
                          <p className="text-sm text-gray-300/80 font-medium tracking-wide">
                            {metric.labelEn}
                          </p>
                        )}
                      </div>

                      {/* Bottom decorative line */}
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-white/50 to-transparent group-hover:w-3/4 transition-all duration-500"></div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Audience Reach Section with enhanced design */}
            <div className="relative z-10 mb-12">
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-white/15 backdrop-blur-xl mb-6 shadow-lg">
                  <Globe className="w-4 h-4 text-blue-400" />
                  <span className="text-xs md:text-sm text-gray-200 font-medium">
                    {t.digitalReach}
                  </span>
                </div>
                {language === "ar" && (
                  <h3
                    className="text-2xl md:text-4xl font-bold text-white mb-3"
                    dir="rtl"
                  >
                    وصـــــول عالـــــي للجـــــمهور
                  </h3>
                )}
                {language === "en" && (
                  <h3 className="text-xl md:text-3xl font-bold">
                    <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent animate-gradient">
                      High reach to audiences
                    </span>
                  </h3>
                )}
              </div>

              {/* Description with improved styling */}
              <div className="max-w-3xl mx-auto text-center mb-12 space-y-4">
                {language === "ar" && (
                  <p
                    className="text-base md:text-lg text-gray-200/90 leading-relaxed font-light"
                    dir="rtl"
                  >
                    مـــن خلال المحتـــوى الرقمـــــي للمؤتمر نهدف للوصـــول إلى
                    كافـــة الجمهور عبر النشر على وسائــــــل الإعـلام الرقمي
                  </p>
                )}
                {language === "en" && (
                  <p className="text-base md:text-lg text-gray-300/80 leading-relaxed font-light">
                    Our digital strategy ensures maximum reach to all audiences
                    through targeted content across all digital media channels
                  </p>
                )}
              </div>

              {/* Audience Metrics - Enhanced 3 Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                {audienceMetrics.map((metric, index) => {
                  const Icon = metric.icon;
                  const colors = colorVariants[metric.color];

                  return (
                    <div
                      key={metric.labelEn}
                      className="relative group animate-fade-in-up"
                      style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                    >
                      {/* Floating header */}
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                        <div className="flex flex-col items-center">
                          <div
                            className={`
                              px-6 py-2.5 rounded-2xl
                              border border-white/20
                              bg-white backdrop-blur-md
                              shadow-lg
                              transition-all duration-300
                              group-hover:scale-105
                            `}
                          >
                            <p
                              className={`
                                text-2xl md:text-3xl lg:text-4xl
                                font-bold
                                bg-gradient-to-r ${colors.gradient}
                                bg-clip-text text-transparent
                              `}
                            >
                              {metric.value}
                            </p>
                          </div>
                          <div className="w-px h-5 bg-gradient-to-b from-white/40 to-transparent" />
                        </div>
                      </div>

                      {/* Main Card with enhanced glass effect */}
                      <div
                        className={`
                          relative overflow-hidden
                          rounded-2xl lg:rounded-3xl
                          border border-white/15
                          bg-white/5 backdrop-blur-xl
                          p-6 pt-20
                          text-center
                          transition-all duration-500
                          group-hover:-translate-y-2
                          group-hover:border-white/30
                          group-hover:shadow-2xl
                        `}
                      >
                        {/* Glow effect */}
                        <div
                          className={`
                            absolute -top-10 -right-10
                            w-40 h-40 rounded-full
                            blur-3xl opacity-20
                            bg-gradient-to-br ${colors.gradient}
                            transition-all duration-500
                            group-hover:opacity-40
                            group-hover:scale-150
                          `}
                        ></div>

                        <div className="relative z-10 flex flex-col items-center">
                          {/* Icon with enhanced styling */}
                          <div
                            className={`
                              w-16 h-16 lg:w-20 lg:h-20
                              rounded-2xl
                              bg-gradient-to-br ${colors.gradient}
                              flex items-center justify-center
                              shadow-lg
                              mb-5
                              transition-all duration-300
                              group-hover:scale-110
                              group-hover:rotate-3
                            `}
                          >
                            <Icon className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
                          </div>
                          {language === "ar" ? (
                            <p
                              className="text-lg lg:text-xl font-semibold text-white mb-1.5"
                              dir="rtl"
                            >
                              {metric.labelAr}
                            </p>
                          ) : (
                            <p className="text-sm text-gray-300/80 font-medium tracking-wide">
                              {metric.labelEn}
                            </p>
                          )}
                        </div>

                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-white/50 to-transparent group-hover:w-3/4 transition-all duration-500"></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Enhanced Bottom Decorative Note */}
            <div className="text-center mt-16 relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                <p className="text-xs text-gray-400">
                  {t.BasedOnProjected}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s linear infinite;
        }
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.05);
          }
        }
        @keyframes pulse-slower {
          0%,
          100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.35;
            transform: scale(1.1);
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        .animate-pulse-slower {
          animation: pulse-slower 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
