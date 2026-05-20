"use client";

import {
  Users,
  FileText,
  MessageCircle,
  Building2,
  Landmark,
  Plane,
  Hospital,
  Dumbbell,
  Cpu,
  Heart,
  Eye,
  Lightbulb,
  Microscope,
  Stethoscope,
  Sparkles,
  ShieldCheck,
  Target,
  ArrowRight,
  Calendar,
  Mic2,
  Briefcase,
} from "lucide-react";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

const activityGroups = [
  {
    id: 1,
    icon: Mic2,
    titleAr: "المؤتمر العلمي",
    titleEn: "Scientific Conference",
    listAr: [
      "جلســــــــــــات حواريــــــــــــة",
      "أوراق علميــة وتجــارب تطبيقيــة",
      "نقاشــات تفاعليــة مــع الخبــراء",
    ],
    listEn: [
      "Panel Discussions",
      "Academic Papers and Applied Case Studies",
      "Interactive Discussions with Experts",
    ],
    descriptionAr:
      "منصـــة معرفية تجمع نخبة من الخبراء لاســـتعراض أحدث البحـــوث والابتكارات الطبيـــة بالإضافة إلى تبادل الـــرؤى العلمية لرفع كفـــاءة الرعاية الصحية بما يتماشى مع المعايير العالمية",
    descriptionEn:
      "A knowledge platform bringing together elite experts to showcase the latest medical research and innovations, while exchanging scientific insights to enhance healthcare efficiency in line with global standards",
    color: "blue",
    gradient: "from-blue-600 to-cyan-400",
    stats: "50+ Speakers | 30+ Sessions",
  },
  {
    id: 2,
    icon: Building2,
    titleAr: "المعرض الصحي",
    titleEn: "Health Exhibition",
    listAr: [
      "المراكز الطبية",
      "الجهات الحكومية",
      "السياحة العلاجية",
      "شركات الرعاية الصحية",
      "النوادي الصحية",
      "شركات التقنية الصحية",
    ],
    listEn: [
      "Medical Centers",
      "Government Entities",
      "Medical Tourism",
      "Healthcare Companies",
      "Wellness Centers",
      "HealthTech Companies",
    ],
    descriptionAr:
      "يجمع كافة الشـــركات لاستعراض أحدث التقنيات والحلول في الرعاية الصحية. يمثل المعرض بيئة تفاعلية لتعزيز الشراكات، والاطلاع على مستقبل الصناعة الطبية.",
    descriptionEn:
      "Bringing all companies to showcase the latest healthcare technologies and solutions. The exhibition serves as an interactive environment to foster partnerships and explore the future of the medical industry.",
    color: "purple",
    gradient: "from-purple-600 to-pink-500",
    stats: "100+ Exhibitors | 20+ Countries",
  },
  {
    id: 3,
    icon: Heart,
    titleAr: "الأنشطة التفاعلية",
    titleEn: "Interactive Activities",
    listAr: [
      "تجـــــــارب صحيـــــــة مباشـــــــرة",
      "أجنحـــــــة توعويـــــــة",
      "عـــــــروض ابتكاريـــــــة",
    ],
    listEn: [
      "Live Health Experiences",
      "Awareness Pavilions",
      "Innovation Showcases",
    ],
    descriptionAr:
      "تهـــدف هـــذه الفعاليات إلى إثـــراء تجربة الـــزوار مـــن خلال ورش العمل الحية، والأنشـــطة الصحية، والعـــروض التجريبية التي تلامس واقـــع الرعاية الصحية الحديثة.",
    descriptionEn:
      "These activities aim to enrich the visitor experience through live workshops, wellness activities, and hands-on demonstrations that reflect the reality of modern healthcare.",
    color: "emerald",
    gradient: "from-emerald-600 to-teal-500",
    stats: "15+ Workshops | 2000+ Visitors",
  },
];

const colorVariants = {
  blue: {
    bgLight: "bg-blue-500/10",
    border: "border-blue-500/20",
    text: "text-blue-400",
    gradient: "from-blue-600 to-cyan-400",
    gradientLight: "from-blue-500/20 to-cyan-500/20",
    itemBg: "bg-blue-500/5",
    itemBorder: "border-blue-500/15",
  },
  purple: {
    bgLight: "bg-purple-500/10",
    border: "border-purple-500/20",
    text: "text-purple-400",
    gradient: "from-purple-600 to-pink-500",
    gradientLight: "from-purple-500/20 to-pink-500/20",
    itemBg: "bg-purple-500/5",
    itemBorder: "border-purple-500/15",
  },
  emerald: {
    bgLight: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    text: "text-emerald-400",
    gradient: "from-emerald-600 to-teal-500",
    gradientLight: "from-emerald-500/20 to-teal-500/20",
    itemBg: "bg-emerald-500/5",
    itemBorder: "border-emerald-500/15",
  },
};

export default function ConferenceActivities() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);

  // Check for mobile view
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Handle touch events for mobile
  const handleTouchStart = (index) => {
    if (isMobile) {
      setHoveredIndex(hoveredIndex === index ? null : index);
    }
  };

  return (
    <section
      className="relative w-full mx-auto overflow-hidden"
      ref={containerRef}
    >
      {/* Dark themed background - optimized with will-change */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-900">
        <div className="absolute top-10 left-10 w-32 h-32 sm:w-72 sm:h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse will-change-transform"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 sm:w-80 sm:h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000 will-change-transform"></div>
        <div className="absolute top-1/3 left-1/3 w-48 h-48 sm:w-96 sm:h-96 bg-emerald-500/10 rounded-full blur-3xl will-change-transform"></div>
      </div>

      {/* Glass container - Mobile optimized */}
      <div className="relative z-10 mx-auto px-3 xs:px-4 sm:px-6 lg:px-4 py-3 xs:py-4 sm:py-8">
        <div className="rounded-xl xs:rounded-2xl sm:rounded-[2rem] md:rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-2xl overflow-hidden">
          <div className="py-3 xs:py-4 sm:py-6 md:py-8 lg:py-12  max-w-7xl mx-auto relative">
            
            {/* Header Section - Mobile optimized */}
            <div className="text-center mb-8 xs:mb-10 sm:mb-12 md:mb-16 relative z-10">
              <div className="relative inline-block group/badge mb-4 xs:mb-5 sm:mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-lg opacity-0 group-hover/badge:opacity-50 transition-opacity duration-500"></div>
                <div className="relative inline-flex items-center gap-1.5 xs:gap-2 px-3 xs:px-4 py-1.5 xs:py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl text-white text-[10px] xs:text-xs sm:text-sm">
                  <Calendar className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 text-blue-400" />
                  <span className="hidden xs:inline">Event Highlights</span>
                  <span className="inline xs:hidden">Highlights</span>
                  <span className="w-0.5 h-0.5 bg-white/30 rounded-full hidden xs:block"></span>
                  <Sparkles className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 text-cyan-400 hidden xs:block" />
                  <span className="hidden xs:inline">3-in-1 Experience</span>
                </div>
              </div>

              {/* Bilingual Headers - Mobile optimized */}
              <div className="space-y-2 xs:space-y-3 mb-4 xs:mb-6">
                <h2
                  className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white px-2"
                  dir="rtl"
                >
                  فعاليـــــــات المؤتمـــــــــــــر
                </h2>
                <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold px-2">
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                    Conference Activities
                  </span>
                </h2>
              </div>

              <div className="relative w-16 xs:w-20 h-0.5 xs:h-1 mx-auto my-4 xs:my-6">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-sm"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full"></div>
              </div>
            </div>

            {/* Activities Grid - Mobile Optimized */}
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row gap-3 xs:gap-4 min-h-[400px] md:min-h-[500px] md:h-[480px]">
                {activityGroups.map((activity, idx) => {
                  const colors = colorVariants[activity.color];
                  const Icon = activity.icon;
                  const isHovered = hoveredIndex === idx;
                  const shouldShowOpen = isMobile ? isHovered : true;

                  return (
                    <div
                      key={activity.id}
                      className={`
                        relative group
                        w-full md:flex-1
                        transition-all duration-500 ease-out
                        overflow-hidden rounded-xl xs:rounded-2xl sm:rounded-3xl
                        border border-white/10
                        bg-white/[0.03]
                        backdrop-blur-xl
                        cursor-pointer
                        ${isMobile ? "min-h-[80px]" : "hover:md:flex-[4]"}
                        ${isMobile && isHovered ? "flex-[4] min-h-[420px] xs:min-h-[400px] sm:min-h-[380px]" : ""}
                      `}
                      onMouseEnter={() => !isMobile && setHoveredIndex(idx)}
                      onMouseLeave={() => !isMobile && setHoveredIndex(null)}
                      onClick={() => isMobile && handleTouchStart(idx)}
                    >
                      {/* Background Glow */}
                      <div
                        className={`absolute inset-0 opacity-0 transition-opacity duration-700 ${
                          isHovered ? "opacity-20" : "opacity-0"
                        } bg-gradient-to-br ${colors.gradient}`}
                      />

                      {/* Persistent subtle gradient */}
                      <div
                        className={`absolute inset-0 opacity-5 bg-gradient-to-br ${colors.gradient}`}
                      />

                      {/* CLOSED STATE - Mobile Optimized */}
                      <div
                        className={`
                        absolute inset-0
                        flex flex-col items-center justify-center
                        transition-all duration-500 ease-out
                        ${!isMobile ? "opacity-100 scale-100 group-hover:opacity-0 group-hover:scale-95" : ""}
                        ${isMobile && !isHovered ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}
                      `}
                      >
                        {/* Main content container - Mobile optimized */}
                        <div className="flex flex-col items-center gap-3 xs:gap-4 sm:gap-6 p-4 xs:p-5 sm:p-6 md:p-8 w-full max-w-[260px] xs:max-w-[280px] sm:max-w-[300px] mx-auto">
                          {/* Glass card background effect */}
                          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-xl xs:rounded-2xl border border-white/10 -z-10"></div>

                          {/* Icon with premium styling - Mobile optimized */}
                          <div className="relative">
                            {/* Animated rings - scaled for mobile */}
                            <div
                              className={`absolute -inset-2 xs:-inset-3 rounded-full border border-${activity.color}-500/20 animate-pulse`}
                            ></div>
                            <div
                              className={`absolute -inset-1 xs:-inset-2 rounded-full border border-${activity.color}-500/30`}
                            ></div>

                            <div
                              className={`relative flex h-14 w-14 xs:h-16 xs:w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 items-center justify-center rounded-xl xs:rounded-2xl bg-gradient-to-br ${colors.gradient} shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}
                            >
                              <Icon className="w-6 h-6 xs:w-7 xs:h-7 sm:w-9 sm:h-9 md:w-11 md:h-11 text-white" />
                            </div>
                          </div>

                          {/* Title section - Mobile optimized */}
                          <div className="text-center space-y-1 xs:space-y-2 sm:space-y-3">
                            <h3
                              className="text-base xs:text-lg sm:text-xl md:text-2xl font-black text-white tracking-wide px-1"
                              dir="rtl"
                            >
                              {activity.titleAr}
                            </h3>

                            <div className="flex items-center justify-center gap-1.5 xs:gap-2 sm:gap-3">
                              <div
                                className={`h-px w-4 xs:w-5 sm:w-8 bg-gradient-to-r ${colors.gradient}`}
                              ></div>
                              <p className="text-[10px] xs:text-xs sm:text-sm md:text-base text-gray-200 font-semibold">
                                {activity.titleEn}
                              </p>
                              <div
                                className={`h-px w-4 xs:w-5 sm:w-8 bg-gradient-to-l ${colors.gradient}`}
                              ></div>
                            </div>

                            <div
                              className={`h-0.5 w-12 xs:w-14 sm:w-20 mx-auto bg-gradient-to-r ${colors.gradient} rounded-full`}
                            ></div>
                          </div>

                          {/* Stats - Mobile optimized */}
                          <div className="w-full mt-1 xs:mt-2">
                            <div
                              className={`text-center p-1.5 xs:p-2 sm:p-3 rounded-lg xs:rounded-xl bg-gradient-to-r ${colors.gradientLight} backdrop-blur-sm border ${colors.border}`}
                            >
                              <p
                                className={`text-[10px] xs:text-xs sm:text-sm md:text-base font-bold text-white drop-shadow-md`}
                              >
                                {activity.stats}
                              </p>
                            </div>
                          </div>

                          {/* Mobile hint with style */}
                          {isMobile && !isHovered && (
                            <div className="absolute -bottom-6 xs:-bottom-7 left-0 right-0 flex justify-center">
                              <div className="bg-white/15 backdrop-blur-md px-3 xs:px-4 py-1 xs:py-1.5 rounded-full border border-white/20 shadow-lg">
                                <div className="flex items-center gap-1.5 xs:gap-2">
                                  <span className="text-[8px] xs:text-[10px] text-gray-200 font-medium">
                                    اضغط للتفاصيل
                                  </span>
                                  <ArrowRight className="w-2.5 h-2.5 xs:w-3 xs:h-3 text-gray-200 rotate-90" />
                                </div>
                              </div>
                            </div>
                          )}

                          {/* Decorative elements - scaled for mobile */}
                          <div
                            className={`absolute top-3 xs:top-5 right-3 xs:right-5 w-4 xs:w-6 sm:w-8 h-4 xs:h-6 sm:h-8 opacity-40`}
                          >
                            <div
                              className={`absolute top-0 right-0 w-1 xs:w-1.5 sm:w-2 h-1 xs:h-1.5 sm:h-2 border-t border-r ${colors.border}`}
                            ></div>
                          </div>
                          <div
                            className={`absolute bottom-3 xs:bottom-5 left-3 xs:left-5 w-4 xs:w-6 sm:w-8 h-4 xs:h-6 sm:h-8 opacity-40`}
                          >
                            <div
                              className={`absolute bottom-0 left-0 w-1 xs:w-1.5 sm:w-2 h-1 xs:h-1.5 sm:h-2 border-b border-l ${colors.border}`}
                            ></div>
                          </div>

                          {/* Background decorative circles */}
                          <div
                            className={`absolute -bottom-8 xs:-bottom-10 -left-8 xs:-left-10 w-24 xs:w-28 sm:w-32 h-24 xs:h-28 sm:h-32 rounded-full bg-gradient-to-br ${colors.gradient} opacity-10 blur-2xl -z-20`}
                          ></div>
                          <div
                            className={`absolute -top-8 xs:-top-10 -right-8 xs:-right-10 w-24 xs:w-28 sm:w-32 h-24 xs:h-28 sm:h-32 rounded-full bg-gradient-to-br ${colors.gradient} opacity-10 blur-2xl -z-20`}
                          ></div>
                        </div>
                      </div>

                      {/* OPEN STATE - Mobile Optimized */}
                      <div
                        className={`
                          absolute inset-0 py-3 xs:py-4 px-2 xs:px-3
                          overflow-y-auto
                          transition-all duration-500 ease-out
                          ${
                            !isMobile
                              ? "opacity-0 translate-x-8 group-hover:opacity-100 group-hover:translate-x-0"
                              : isHovered
                                ? "opacity-100 translate-x-0"
                                : "opacity-0 translate-x-8 pointer-events-none"
                          }
                        `}
                      >
                        {/* Scrollable content with custom scrollbar */}
                        <div className="h-full overflow-y-auto custom-scrollbar px-2 xs:px-3">
                          {/* Header - Mobile optimized */}
                          <div className="flex items-center gap-2 xs:gap-3 sm:gap-4 mb-3 xs:mb-4 sm:mb-6">
                            <div
                              className={`flex h-10 w-10 xs:h-12 xs:w-12 sm:h-14 sm:w-14 flex-shrink-0 items-center justify-center rounded-lg xs:rounded-xl sm:rounded-2xl bg-gradient-to-br ${colors.gradient} shadow-lg`}
                            >
                              <Icon className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-white" />
                            </div>

                            <div className="min-w-0 flex justify-between items-center w-full gap-2 xs:gap-3">
                              <span className="text-xs xs:text-sm sm:text-lg md:text-2xl lg:text-3xl font-bold text-white mt-0.5 truncate">
                                {activity.titleEn}
                              </span>
                              <span
                                className="text-xs xs:text-sm sm:text-lg md:text-2xl lg:text-3xl font-bold text-white truncate"
                                dir="rtl"
                              >
                                {activity.titleAr}
                              </span>
                            </div>
                          </div>

                          {/* List Items - Mobile optimized */}
                          <div className="space-y-2 xs:space-y-3 sm:space-y-4">
                            {activity.listAr.map((item, listIdx) => (
                              <div
                                key={listIdx}
                                className="flex items-start gap-1.5 xs:gap-2 sm:gap-3 rounded-lg xs:rounded-xl border border-white/5 bg-black/20 p-1.5 xs:p-2 sm:p-3 hover:bg-black/30 transition-colors"
                              >
                                <div
                                  className={`mt-1 xs:mt-1.5 sm:mt-2 h-1 w-1 xs:h-1.5 xs:w-1.5 sm:h-2 sm:w-2 rounded-full flex-shrink-0 bg-gradient-to-r ${colors.gradient}`}
                                />
                                <div className="w-full flex justify-between items-center min-w-0 gap-1 xs:gap-2">
                                  <span className="text-[9px] xs:text-[10px] sm:text-xs text-gray-100 mt-0.5 break-words flex-1">
                                    {activity.listEn[listIdx]}
                                  </span>
                                  <span
                                    className="text-[10px] xs:text-xs sm:text-sm font-medium text-gray-100 break-words text-right"
                                    dir="rtl"
                                  >
                                    {item}
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>

                          {/* Description - Mobile optimized */}
                          <div className="mt-3 xs:mt-4 sm:mt-6 rounded-lg xs:rounded-xl sm:rounded-2xl border border-white/10 bg-black/20 p-2 xs:p-3 sm:p-5">
                            <p
                              className="text-[10px] xs:text-xs sm:text-sm leading-5 xs:leading-6 sm:leading-7 text-gray-300 break-words"
                              dir="rtl"
                            >
                              {activity.descriptionAr}
                            </p>
                            <div className="my-2 xs:my-3 sm:my-4 h-px bg-white/10" />
                            <p className="text-[9px] xs:text-[10px] sm:text-xs leading-4 xs:leading-5 sm:leading-6 text-gray-300 break-words">
                              {activity.descriptionEn}
                            </p>
                          </div>

                          {/* Stats badge in open state - Mobile optimized */}
                          <div className="mt-3 xs:mt-4 text-center">
                            <span className="inline-block px-2 xs:px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[8px] xs:text-[10px] sm:text-xs text-gray-400">
                              {activity.stats}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom CTA - Mobile optimized */}
            <div className="text-center mt-8 xs:mt-10 sm:mt-12 relative z-10">
              <Link
                href="#"
                className="group relative inline-flex items-center gap-1.5 xs:gap-2 sm:gap-3"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>

                <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 xs:px-5 sm:px-6 md:px-8 py-2 xs:py-2.5 sm:py-3 rounded-full text-[10px] xs:text-xs sm:text-sm font-medium hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-1.5 xs:gap-2 sm:gap-3">
                  <Briefcase className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4" />
                  <span className="hidden xs:inline">View Full Agenda</span>
                  <span className="inline xs:hidden">Agenda</span>
                  <ArrowRight className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 3px;
        }
        @media (min-width: 640px) {
          .custom-scrollbar::-webkit-scrollbar {
            width: 4px;
          }
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.3);
        }
      `}</style>
    </section>
  );
}