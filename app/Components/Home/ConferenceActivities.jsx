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
    itemBg: "bg-blue-500/5",
    itemBorder: "border-blue-500/15",
  },
  purple: {
    bgLight: "bg-purple-500/10",
    border: "border-purple-500/20",
    text: "text-purple-400",
    gradient: "from-purple-600 to-pink-500",
    itemBg: "bg-purple-500/5",
    itemBorder: "border-purple-500/15",
  },
  emerald: {
    bgLight: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    text: "text-emerald-400",
    gradient: "from-emerald-600 to-teal-500",
    itemBg: "bg-emerald-500/5",
    itemBorder: "border-emerald-500/15",
  },
};

export default function ConferenceActivities() {
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
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-white"
                  dir="rtl"
                >
                  فعاليـــــــات المؤتمـــــــــــــر
                </h2>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
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

            {/* 3 Activity Cards - Clean & Elegant */}
            <div className="space-y-6 md:space-y-8 relative z-10">
              {activityGroups.map((activity) => {
                const colors = colorVariants[activity.color];
                const Icon = activity.icon;

                return (
                  <div
                    key={activity.id}
                    className="group relative rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    {/* Left accent border - using pseudo element instead */}
                    <div
                      className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${colors.gradient}`}
                    />

                    <div className="p-5 md:p-6">
                      {/* Header - Simple row */}
                      <div className="flex items-center gap-3 mb-5">
                        <div
                          className={`w-10 h-10 rounded-lg bg-gradient-to-br ${colors.gradient} flex items-center justify-center shadow-lg`}
                        >
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-400">
                            {activity.titleEn}
                          </p>
                          <p className="text-lg font-bold text-white" dir="rtl">
                            {activity.titleAr}
                          </p>
                        </div>
                      </div>

                      {/* Content - Two columns with equal height */}
                      <div className="grid md:grid-cols-2 gap-6 md:items-stretch">
                        {/* Left - List with simple dots */}
                        <div className="space-y-3">
                          {activity.listAr.map((item, idx) => (
                            <div key={idx} className="flex gap-3">
                              <div
                                className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${colors.gradient} mt-1.5 flex-shrink-0`}
                              />
                              <div>
                                <p
                                  className="text-sm text-white leading-relaxed"
                                  dir="rtl"
                                >
                                  {item}
                                </p>
                                <p className="text-xs text-gray-400 mt-0.5">
                                  {activity.listEn[idx]}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Right - Description box with fixed equal height */}
                        <div
                          className={`p-4 rounded-lg ${colors.bgLight} border ${colors.border} h-full flex flex-col justify-center`}
                        >
                          <p
                            className="text-xs text-gray-300 leading-relaxed mb-2"
                            dir="rtl"
                          >
                            {activity.descriptionAr}
                          </p>
                          <div
                            className={`w-8 h-px bg-gradient-to-r ${colors.gradient} my-2`}
                          />
                          <p className="text-xs text-gray-400 leading-relaxed">
                            {activity.descriptionEn}
                          </p>
                        </div>
                      </div>
                    </div>
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
                  <Briefcase className="w-4 h-4" />
                  <span>View Full Agenda</span>
                  <span className="text-white/30">•</span>
                  <span className="text-sm">عرض الجدول الكامل</span>
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
