"use client";

import Image from "next/image";
import {
  Building2,
  Trophy,
  Users,
  Sparkles,
  // ShieldCheck,
  Target,
  ArrowRight,
  Star,
  ShieldCheckIcon,
  // ShieldCheckIcon,
} from "lucide-react";
import Link from "next/link";
import {
  HeartPulse,
  Microscope,
  Cpu,
  ShieldCheck,
  Globe,
  BarChart3,
} from "lucide-react";

const partnerLogos = [
  {
    id: 1,
    name: "Global Health",
    logo: "https://cdn.showmanonline.com/event739/Posts/logos25/Airbuslogo18.jpg",
  },
  {
    id: 2,
    name: "Future Labs",
    logo: "https://cdn.showmanonline.com/event739/Posts/Side_Events/ajinomoto.jpg",
  },
  {
    id: 3,
    name: "MediTech",
    logo: "https://cdn.showmanonline.com/event739/Posts/logos25/Aschendorff-CVC.png",
  },
  {
    id: 4,
    name: "Care Plus",
    logo: "https://cdn.showmanonline.com/event739/Posts/logos25/Bayer.png",
  },
  {
    id: 5,
    name: "LifeSphere",
    logo: "https://cdn.showmanonline.com/event739/Posts/Community%20Partner/Beiersdorflogo19.png",
  },
  {
    id: 6,
    name: "VisionX",
    logo: "https://cdn.showmanonline.com/event739/Posts/Meet-Fellow-Investors/BMW%20I%20ventures.jpeg",
  },
];
const partners = [
  { id: 1, name: "Healthcare", icon: HeartPulse },
  { id: 2, name: "Research", icon: Microscope },
  { id: 3, name: "Innovation", icon: Cpu },
  { id: 4, name: "Security", icon: ShieldCheckIcon },
  { id: 5, name: "Global Network", icon: Globe },
  { id: 6, name: "Analytics", icon: BarChart3 },
];

export default function EnablingPartners() {
  return (
    <section className="relative w-full mx-auto overflow-hidden">
      {/* Dark themed background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-900">
        <div className="absolute top-10 right-10 w-32 h-32 sm:w-72 sm:h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 sm:w-80 sm:h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-1/3 w-48 h-48 sm:w-96 sm:h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-32 h-32 sm:w-64 sm:h-64 bg-amber-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>
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

            {/* First Section - Enabling Entities Header */}
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 mb-12 sm:mb-16 relative z-10">
              {/* English Column */}
              <div className="text-center md:text-left">
                <div className="relative inline-block group/badge mb-4 sm:mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-lg opacity-0 group-hover/badge:opacity-50 transition-opacity duration-500"></div>
                  <div className="relative inline-flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1 sm:py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl text-white text-[10px] sm:text-xs">
                    <Building2 className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
                    <span>Strategic Partners</span>
                    <span className="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-white/30 rounded-full"></span>
                    <Trophy className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400" />
                    <span>Enabling Entities</span>
                  </div>
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
                  Enabling Entities
                  <br />
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                    of the Conference
                  </span>
                </h2>

                <div className="relative w-20 h-1 my-4 mx-auto md:mx-0">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-sm"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full"></div>
                </div>

                <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
                  HEAL is empowered and supported by elite government entities
                  and strategic partners. They leverage their resources to
                  enhance quality of life and develop the healthcare sector, in
                  alignment with ambitious national objectives.
                </p>
              </div>

              {/* Arabic Column - RTL */}
              <div className="text-center md:text-right" dir="rtl">
                <div className="relative inline-block group/badge mb-4 sm:mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-lg opacity-0 group-hover/badge:opacity-50 transition-opacity duration-500"></div>
                  <div className="relative inline-flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1 sm:py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl text-white text-[10px] sm:text-xs">
                    <Building2 className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
                    <span>الشركاء الاستراتيجيون</span>
                    <span className="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-white/30 rounded-full"></span>
                    <Trophy className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400" />
                    <span>الجهات الممكنة</span>
                  </div>
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
                  الجــــهات الممكــــنة
                  <br />
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                    للمؤتمر
                  </span>
                </h2>

                <div className="relative w-20 h-1 my-4 mx-auto md:mx-0 md:mr-0">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-sm"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full"></div>
                </div>

                <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
                  يحظــــى مؤتمر تعزيز الصحة وجــــودة الحياة بدعم وتمكيــــن
                  نخبة من الجهات الحكومية والشــــركاء الاستراتيجيين، الذين
                  يســــخرون إمكاناتهم لتعزيز جودة الحيــــاة وتطويــــر القطاع
                  الصحــــي، بما يتماشــــى مع المســــتهدفات الوطنية الطموحة.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 relative z-10 mb-4">
              {partners.map((partner) => {
                const Icon = partner.icon;

                return (
                  <div
                    key={partner.id}
                    className="group relative flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/[0.05]"
                  >
                    {/* Glow */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    {/* Icon */}
                    <div className="relative mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 text-blue-400">
                      <Icon className="h-6 w-6" />
                    </div>

                    {/* Label */}
                    <span className="text-xs sm:text-sm text-white/80 font-medium text-center">
                      {partner.name}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Second Section - HEAL Branding */}
            <div className="relative mb-16 sm:mb-20">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-cyan-600/10 rounded-3xl blur-3xl"></div>
              <div className="relative rounded-2xl sm:rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-6 sm:p-8 md:p-12 overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl"></div>

                <div className="text-center">
                  {/* Main HEAL Logo Text */}
                  <div className="relative inline-block mb-6 sm:mb-8">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-2xl opacity-50"></div>
                    <div className="relative">
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold pb-2 bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
                        تعزيز الصحة • وجودة الحياة
                      </h3>
                      <p className="text-xl sm:text-2xl md:text-3xl font-bold text-white mt-2">
                        HEAL
                      </p>
                    </div>
                  </div>

                  {/* Tagline */}
                  <div className="space-y-4">
                    <p
                      className="text-lg sm:text-xl md:text-2xl text-white"
                      dir="rtl"
                    >
                      لننطلق معا نحو
                      <br />
                      <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent font-semibold">
                        صحة . تمكين . توعية . عمر مديد
                      </span>
                    </p>

                    <p className="text-base sm:text-lg md:text-xl text-gray-300">
                      Moving forward together towards —
                      <br />
                      <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent font-semibold">
                        Health . Empowerment . Awareness . Longevity
                      </span>
                    </p>
                  </div>

                  {/* Decorative line */}
                  <div className="relative w-24 h-1 mx-auto mt-6 sm:mt-8">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-sm"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Third Section - Operational Excellence */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/5 via-teal-600/5 to-cyan-600/5 rounded-3xl blur-3xl"></div>

              <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                {/* Left Column - Header */}
                <div className="text-center md:text-left">
                  <div className="relative inline-block group/badge mb-4 sm:mb-6">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full blur-lg opacity-0 group-hover/badge:opacity-50 transition-opacity duration-500"></div>
                    <div className="relative inline-flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1 sm:py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl text-white text-[10px] sm:text-xs">
                      <ShieldCheck className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-400" />
                      <span>Excellence</span>
                      <span className="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-white/30 rounded-full"></span>
                      <Target className="w-3 h-3 sm:w-4 sm:h-4 text-teal-400" />
                      <span>Precision</span>
                    </div>
                  </div>

                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
                    Organization and
                    <br />
                    <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
                      Operational Excellence
                    </span>
                  </h3>

                  <div className="relative w-20 h-1 my-4 mx-auto md:mx-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full blur-sm"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-300 rounded-full"></div>
                  </div>

                  <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed mt-4">
                    Absolute precision for an experience befitting the Kingdom
                  </p>

                  {/* Arabic Version */}
                  <div className="mt-6" dir="rtl">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
                      التنظيم والتميز التشغيلي
                    </h3>
                    <div className="relative w-20 h-1 my-4 mx-auto md:mx-0 md:mr-0">
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full blur-sm"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-300 rounded-full"></div>
                    </div>
                    <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
                      التزام بالدقة المتناهيـــة لضـــمان تجـــربة
                      <br />
                      تنظيمية تليق بمكانة المملكة
                    </p>
                  </div>
                </div>

                {/* Right Column - Solutions Card */}
                <div>
                  <div className="group relative rounded-2xl sm:rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-6 sm:p-8 hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 overflow-hidden">
                    {/* Hover glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-cyan-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                    {/* Corner accent */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 rounded-bl-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />

                    <div className="relative">
                      {/* Solutions Text - Arabic */}
                      <p
                        className="text-base sm:text-lg text-gray-200 leading-relaxed mb-6"
                        dir="rtl"
                      >
                        يتم إدارة وتنفيذ كافة العمليات التشغيلية للمؤتمر بواسطة
                        <br />
                        <strong className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent text-xl sm:text-2xl">
                          SOLUTIONS VEXORA
                        </strong>
                        ، بما يضمن أعلى معايير الجودة والدقة.
                      </p>

                      {/* Solutions Text - English */}
                      <p className="text-base sm:text-lg text-gray-200 leading-relaxed mb-8">
                        All operational facets of the conference are managed and
                        executed by{" "}
                        <strong className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent text-xl sm:text-2xl">
                          VEXORA SOLUTIONS
                        </strong>
                      </p>

                      {/* VEXORA Logo Placeholder */}
                      <div className="flex justify-center items-center p-6 sm:p-8 rounded-xl bg-white/5 border border-white/10 group-hover:border-emerald-500/30 transition-all duration-500">
                        <div className="text-center">
                          <Star className="w-12 h-12 sm:w-16 sm:h-16 text-emerald-400 mx-auto mb-3 opacity-60 group-hover:opacity-100 transition-all duration-500" />
                          <p className="text-xs text-gray-400">
                            VEXORA SOLUTIONS
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            Premium Event Management
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom decorative note */}
            <div className="text-center mt-12 sm:mt-16 relative z-10">
              <p className="text-[10px] sm:text-xs text-gray-500">
                * Strategic partners committed to healthcare excellence and
                quality of life enhancement
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
