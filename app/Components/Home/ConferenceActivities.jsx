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
      "أوراق علميــــــة وتجـــــــارب تطبيقيــــــة",
      "نقاشــــــات تفاعليــــــة مــــــع الخبــــــراء",
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
    <section className="relative w-full mx-auto overflow-hidden" ref={containerRef}>
      {/* Dark themed background - optimized with will-change */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-900">
        <div className="absolute top-10 left-10 w-32 h-32 sm:w-72 sm:h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse will-change-transform"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 sm:w-80 sm:h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000 will-change-transform"></div>
        <div className="absolute top-1/3 left-1/3 w-48 h-48 sm:w-96 sm:h-96 bg-emerald-500/10 rounded-full blur-3xl will-change-transform"></div>
      </div>

      {/* Glass container */}
      <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-4 py-4 sm:py-8">
        <div className="rounded-2xl sm:rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-2xl overflow-hidden">
          <div className="p-4 sm:p-8 lg:p-12 max-w-7xl mx-auto relative">
            {/* Header Section */}
            <div className="text-center mb-12 sm:mb-16 relative z-10">
              <div className="relative inline-block group/badge mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-lg opacity-0 group-hover/badge:opacity-50 transition-opacity duration-500"></div>
                <div className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl text-white text-xs sm:text-sm">
                  <Calendar className="w-4 h-4 text-blue-400" />
                  <span>Event Highlights</span>
                  <span className="w-0.5 h-0.5 bg-white/30 rounded-full"></span>
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  <span>3-in-1 Experience</span>
                </div>
              </div>

              {/* Bilingual Headers */}
              <div className="space-y-3 mb-6">
                <h2
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white"
                  dir="rtl"
                >
                  فعاليـــــــات المؤتمـــــــــــــر
                </h2>
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                    Conference Activities
                  </span>
                </h2>
              </div>

              <div className="relative w-20 h-1 mx-auto my-6">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-sm"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full"></div>
              </div>
            </div>

            {/* Activities Grid */}
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row gap-4 min-h-[500px] md:h-[480px]">
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
                        overflow-hidden rounded-2xl sm:rounded-3xl
                        border border-white/10
                        bg-white/[0.03]
                        backdrop-blur-xl
                        cursor-pointer
                        ${isMobile ? 'min-h-[80px]' : 'hover:md:flex-[4]'}
                        ${isMobile && isHovered ? 'flex-[4] min-h-[400px]' : ''}
                      `}
                      onMouseEnter={() => !isMobile && setHoveredIndex(idx)}
                      onMouseLeave={() => !isMobile && setHoveredIndex(null)}
                      onClick={() => isMobile && handleTouchStart(idx)}
                    >
                      {/* Background Glow */}
                      <div
                        className={`absolute inset-0 opacity-0 transition-opacity duration-700 ${
                          isHovered ? 'opacity-20' : 'opacity-0'
                        } bg-gradient-to-br ${colors.gradient}`}
                      />

                      {/* Persistent subtle gradient */}
                      <div className={`absolute inset-0 opacity-5 bg-gradient-to-br ${colors.gradient}`} />

                      {/* CLOSED STATE */}
                      <div
                        className={`
                          absolute inset-0
                          flex items-center justify-center
                          transition-all duration-500 ease-out
                          ${!isMobile && 'group-hover:opacity-0 group-hover:scale-95'}
                          ${isMobile && !isHovered ? 'opacity-100' : 'opacity-0 scale-95'}
                        `}
                      >
                        <div className="flex flex-col items-center gap-4 sm:gap-6">
                          {/* Icon */}
                          <div
                            className={`flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${colors.gradient} shadow-lg`}
                          >
                            <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                          </div>

                          {/* Rotated Text - Hidden on mobile */}
                          {!isMobile && (
                            <div className="-rotate-90 whitespace-nowrap">
                              <h3
                                className="text-lg sm:text-xl font-semibold text-white tracking-widest"
                                dir="rtl"
                              >
                                {activity.titleAr}
                              </h3>
                            </div>
                          )}

                          {/* Simple title for mobile collapsed state */}
                          {isMobile && !isHovered && (
                            <h3 className="text-base font-semibold text-white text-center px-2">
                              {activity.titleAr}
                            </h3>
                          )}
                        </div>
                      </div>

                      {/* OPEN STATE  */}
                      <div
                        className={`
                          absolute inset-0 py-4 px-1
                          overflow-y-auto
                          transition-all duration-500 ease-out
                          ${!isMobile 
                            ? 'opacity-0 translate-x-8 group-hover:opacity-100 group-hover:translate-x-0' 
                            : isHovered 
                              ? 'opacity-100 translate-x-0' 
                              : 'opacity-0 translate-x-8 pointer-events-none'
                          }
                        `}
                      >
                        {/* Scrollable content with custom scrollbar */}
                        <div className="h-full overflow-y-auto custom-scrollbar px-3">
                          {/* Header */}
                          <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                            <div
                              className={`flex h-12 w-12 sm:h-14 sm:w-14 flex-shrink-0 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-br ${colors.gradient} shadow-lg`}
                            >
                              <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                            </div>

                            <div className="min-w-0 flex justify-between items-center w-full">
                              <span className="text-lg sm:text-2xl lg:text-3xl font-bold text-white mt-0.5 sm:mt-1 truncate">
                                {activity.titleEn}
                              </span>
                              <span
                                className="text-lg sm:text-2xl lg:text-3xl font-bold text-white truncate"
                                dir="rtl"
                              >
                                {activity.titleAr}
                              </span>
                              
                            </div>
                          </div>

                          {/* List Items */}
                          <div className="space-y-3 sm:space-y-4">
                            {activity.listAr.map((item, listIdx) => (
                              <div
                                key={listIdx}
                                className="flex items-start gap-2 sm:gap-3 rounded-xl border border-white/5 bg-black/20 p-2 sm:p-3 hover:bg-black/30 transition-colors"
                              >
                                <div
                                  className={`mt-1.5 sm:mt-2 h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full flex-shrink-0 bg-gradient-to-r ${colors.gradient}`}
                                />
                                <div className="w-full flex justify-between items-center min-w-0">
                                  <span className="text-[11px] sm:text-xs text-gray-100 mt-0.5 sm:mt-1 break-words">
                                    {activity.listEn[listIdx]}
                                  </span>
                                  <span
                                    className="text-xs sm:text-sm font-medium text-gray-100 break-words"
                                    dir="rtl"
                                  >
                                    {item}
                                  </span>
                                  
                                </div>
                              </div>
                            ))}
                          </div>

                          {/* Description */}
                          <div className="mt-4 sm:mt-6 rounded-xl sm:rounded-2xl border border-white/10 bg-black/20 p-3 sm:p-5">
                            <p
                              className="text-xs sm:text-sm leading-6 sm:leading-7 text-gray-300 break-words"
                              dir="rtl"
                            >
                              {activity.descriptionAr}
                            </p>
                            <div className="my-3 sm:my-4 h-px bg-white/10" />
                            <p className="text-[11px] sm:text-xs leading-5 sm:leading-6 text-gray-300 break-words">
                              {activity.descriptionEn}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="text-center mt-10 sm:mt-12 relative z-10">
              <Link
                href="#"
                className="group relative inline-flex items-center gap-2 sm:gap-3"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
                <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-medium hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2 sm:gap-3">
                  <Briefcase className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span className="hidden xs:inline">View Full Agenda</span>
                  <span className="inline xs:hidden">Agenda</span>
                  {/* <span className="text-white/30">•</span>
                  <span className="text-xs sm:text-sm">عرض الجدول الكامل</span> */}
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
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