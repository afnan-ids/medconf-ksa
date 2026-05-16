"use client";

import {
  Heart,
  GraduationCap,
  Microscope,
  Globe,
  Briefcase,
  Zap,
  Sparkles,
  ShieldCheck,
  Leaf,
} from "lucide-react";

import Image from "next/image";
import { Activity } from "react";
import { FaArrowAltCircleLeft, FaCaretLeft } from "react-icons/fa";

// DATA

const statsData = [
  {
    value: "200+",
    labelAr: "قياديـة سعودية في القطــاع الطبي",
    labelEn: "Female Leaders in Health",
  },
  {
    value: "35,000+",
    labelAr: "طبيبـــــة سعوديـــــة",
    labelEn: "Saudi Female Doctors",
  },
  {
    value: "65%",
    labelAr: "نسبة الكوادر النسائية في قطاع التمريض",
    labelEn: "Female Staff in Nursing",
  },
  {
    value: "200%",
    labelAr: "نمو في العيادات المتخصصة لصحة المرأة",
    labelEn: "Women's Health Clinics Growth",
  },
  {
    value: "15+",
    labelAr: "براءة اختـــــراع طبية مسجلـــــة عالميا لطبيبات سعــوديات",
    labelEn: "Global Medical Patents",
  },
];

const highlightsData = [
  {
    titleAr: "تمكين المرأة في القطاع الصحي",
    titleEn: "Women Empowerment in Health Sector",
    icon: Briefcase,
  },
  {
    titleAr: "التمريض: ركائز الرعاية الطبية",
    titleEn: "Nursing: Pillars of Medical Care",
    icon: Heart,
  },
  {
    titleAr: "دور المرأة في التحول الرقمي بمجال الصحة",
    titleEn: "Women's Role in Digital Health Transformation",
    icon: Zap,
  },
  {
    titleAr: "المرأة في الأبحاث والابتكار الطبي",
    titleEn: "Women in Medical Research & Innovation",
    icon: Microscope,
  },
  {
    titleAr: "المرأة السعودية في المنظمات الطبية الدولية",
    titleEn: "Saudi Women in International Medical Organizations",
    icon: Globe,
  },
  {
    titleAr: "المرأة في التعليم الطبي والأكاديمي",
    titleEn: "Women in Medical Education & Academia",
    icon: GraduationCap,
  },
];

export default function WomenAndHealth() {
  return (
    <div className="relative isolate overflow-hidden py-8 sm:py-12 lg:py-16">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a2a] via-[#1a1a4a] to-[#0a0a2a]">
        {/* Animated glowing orbs */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl animate-pulse-slower"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-1/4 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
      </div>
      <div className="relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16 px-4">
          {/* Header Section */}
          <div className="text-center relative z-10">
            {/* Badge */}
            <div className="relative inline-block group/badge mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full blur-lg opacity-0 group-hover/badge:opacity-50 transition-opacity duration-500"></div>

              <div className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl text-white text-xs sm:text-sm">
                <div className="w-2 h-2 rounded-full bg-emerald-300" />

                <span>Women Empowerment</span>
              </div>
            </div>

            {/* Bilingual Headers */}
            <div className="space-y-3 mb-6">
              <h2
                dir="rtl"
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white"
              >
                المرأة والصحــــــــــة
              </h2>

              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
                <span className="bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent">
                  Women & Health
                </span>
              </h2>
            </div>

            {/* Divider */}
            <div className="relative w-20 h-1 mx-auto my-6">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full blur-sm"></div>

              <div className="absolute inset-0 bg-gradient-to-r from-emerald-300 to-cyan-300 rounded-full"></div>
            </div>

            {/* Description */}
            <p
              className="
              max-w-2xl mx-auto
              text-neutral-300/80
              text-base
              leading-relaxed
              font-light
            "
            >
              Highlighting the role of women in advancing healthcare,
              innovation, medical research, and community well-being.
            </p>
          </div>
        </div>
      </div>
      {/* SECTION 1 - More compact */}
      <section className="relative overflow-hidden">
        <div className="relative z-10 max-w-8xl mx-auto px-4 py-4 lg:py-6 sm:px-6 lg:px-4 ">
          <div
            className="
                relative
                overflow-hidden
                rounded-2xl
                border
                border-white/15
                
                transition-all
                duration-500
                hover:scale-[1.001]
                 hover:shadow-[0_0_80px_rgba(110,255,200,0.45)]
              "
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src="/Images/Home/WomenAndHealth/womenandHealthBG.png"
                alt="Women and Health Background"
                fill
                priority
                className="object-cover object-center"
              />

              {/* Enhanced overlay gradients */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/20" />
              <div className="absolute top-0 left-0 w-80 h-80 bg-emerald-500/15 blur-3xl rounded-full" />
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500/15 blur-3xl rounded-full" />
              <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-80 h-80 bg-cyan-500/10 blur-3xl rounded-full" />
            </div>

            <div className="relative flex flex-col justify-between p-5 sm:p-6 lg:p-8 min-h-[520px] lg:min-h-[600px]">
              {/* Top bar - more compact */}
              <div className="max-w-7xl mx-auto w-full flex items-center justify-between text-white/80 text-[10px] sm:text-xs mb-6">
                <span className="backdrop-blur-sm bg-white/5 px-3 py-1 rounded-full">
                  <span className="font-semibold text-white">HPQL</span> HEALTH
                  PROMOTION & QUALITY OF LIFE
                </span>

                <span
                  dir="rtl"
                  className="backdrop-blur-sm bg-white/5 px-3 py-1 rounded-full"
                >
                  تعزيز الصحة وجودة الحياة
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] max-w-7xl mx-auto flex-1 w-full mt-4 gap-4">
                {/* LEFT - Stats Grid */}
                <div className="relative z-10">
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    {statsData.map((stat, index) => (
                      <div
                        key={index}
                        className="
                            group
                            relative
                            overflow-hidden
                            rounded-xl
                            border
                            border-white/15
                            bg-white/[0.08]
                            backdrop-blur-xl
                            p-3 sm:p-3.5
                            transition-all
                            duration-400
                            hover:bg-white/[0.12]
                            hover:-translate-y-0.5
                            hover:border-emerald-400/30
                          "
                      >
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                          <div className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-500/20 blur-3xl rounded-full" />
                        </div>

                        <div className="relative mb-2">
                          <div className="relative rounded-xl border border-white/25 bg-blue-900 px-3 py-2 text-center shadow-lg backdrop-blur-sm">
                            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">
                              {stat.value}
                            </h3>
                          </div>
                        </div>

                        <p
                          dir="rtl"
                          className="text-white text-xs sm:text-sm md:text-lg text-center leading-relaxed"
                        >
                          {stat.labelAr}
                        </p>

                        <p className="text-white/90 text-[11px] md:text-sm text-center sm:text-xs mt-1">
                          {stat.labelEn}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* RIGHT - Title Section */}
                <div className="relative flex items-start justify-end mt-2">
                  <div className="absolute w-64 h-64 bg-emerald-500/15 blur-3xl rounded-full" />

                  <div className="relative text-center lg:text-right backdrop-blur-sm bg-white/5 rounded-2xl p-4 border border-white/10">
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-tight">
                      المــــــرأة والصحــــــة
                    </h2>

                    <p className="text-xl sm:text-2xl lg:text-2xl text-white/90 mt-1">
                      Woman & Health
                    </p>
                  </div>
                </div>
              </div>

              {/* Woman Image - slightly adjusted position */}
              <div className="pointer-events-none absolute bottom-0 right-0 lg:right-[-20px]">
                <div className="absolute bottom-10 right-10 w-72 h-72 bg-emerald-500/15 blur-3xl rounded-full" />

                <Image
                  src="/Images/Home/WomenAndHealth/women.png"
                  alt="Women"
                  width={700}
                  height={700}
                  className="relative object-contain object-bottom opacity-95"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* SECTION DIVIDER - Enhanced */}
      <div className="relative z-20 py-3 sm:py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="relative h-px overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent" />
            <div className="absolute left-1/2 top-1/2 h-16 w-32 -translate-x-1/2 -translate-y-1/2 bg-emerald-500/20 blur-2xl rounded-full" />
            <div className="absolute left-1/2 top-1/2 h-16 w-32 -translate-x-1/2 -translate-y-1/2 bg-teal-500/20 blur-2xl rounded-full" />

            {/* Decorative diamond */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="w-2 h-2 rotate-45 bg-emerald-400/40" />
            </div>
          </div>
        </div>
      </div>
      {/* SECTION 2 - More compact */}
      <section className="relative overflow-hidden">
        <div className="relative z-20 max-w-8xl mx-auto px-4 sm:px-6 lg:px-4">
          <div
            className="
                relative
                overflow-hidden
                rounded-2xl
                border
                border-white/15
                shadow-[0_20px_80px_rgba(0,0,0,0.6)]
                transition-all
                duration-500
                hover:scale-[1.001]
                hover:shadow-[0_25px_100px_rgba(0,0,0,0.7)]
              "
          >
            {/* Enhanced edge glow */}
            <div className="absolute inset-0 rounded-2xl ring-1 ring-white/15 pointer-events-none" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent" />

            {/* FULL BACKGROUND IMAGE */}
            <div className="absolute inset-0">
              <Image
                src="/Images/Home/WomenAndHealth/womenBG-2.png"
                alt="Women Empowerment"
                fill
                priority
                className="object-cover object-center"
              />

              <div className="absolute inset-0 bg-gradient-to-l from-black/20 via-transparent to-black/10" />
              <div className="absolute top-0 left-0 w-80 h-80 bg-emerald-500/15 blur-3xl rounded-full" />
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500/15 blur-3xl rounded-full" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] min-h-[520px] lg:min-h-[600px]">
              {/* LEFT PANEL */}
              <div className="relative z-10 flex flex-col">
                <div className="w-full max-w-4xl mx-auto h-full flex flex-col">
                  {/* top text - more compact */}
                  <div className="px-5 sm:px-6 lg:px-8 pt-5">
                    <div
                      className="flex items-center text-white/80 text-[10px] sm:text-xs tracking-[0.2em] inline-flex
                        px-3
                        py-1.5
                        bg-white/5
                        backdrop-blur-sm
                        rounded-full
                      "
                    >
                      <span>
                        <span className="font-semibold text-white">HPQL</span>{" "}
                        HEALTH PROMOTION & QUALITY OF LIFE
                      </span>
                    </div>
                  </div>

                  {/* gradient image */}
                  <div className="absolute bottom-0 right-0 pointer-events-none">
                    <Image
                      src="/Images/Home/WomenAndHealth/womenempowerBGgradient.png"
                      alt="Women Empowerment background"
                      height={900}
                      width={1000}
                      className="object-cover object-center opacity-85"
                    />
                  </div>

                  {/* CENTER CONTENT - More compact */}
                  <div className="flex flex-1 items-end px-5 sm:px-8 lg:px-10 py-6">
                    <div className="w-full py-4 sm:py-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {highlightsData.map((highlight, index) => (
                          <div
                            key={index}
                            className="
                                group
                                relative
                                overflow-hidden
                                rounded-xl
                                px-3
                                py-3
                                transition-all
                                duration-300
                                hover:bg-white/5
                              "
                          >
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <div className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-400/10 blur-3xl rounded-full" />
                            </div>

                            <h3
                              className="
                                  relative
                                  z-10
                                  text-white
                                  text-end
                                  font-semibold
                                  text-sm
                                  md:text-base
                                  leading-relaxed
                                "
                            >
                              {highlight.titleAr}
                            </h3>

                            <p
                              className="
                                  relative
                                  z-10
                                  text-white/80
                                  text-end
                                  text-xs
                                  md:text-sm
                                  leading-relaxed
                                  tracking-wide
                                  mt-0.5
                                "
                            >
                              {highlight.titleEn}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT PANEL - Enhanced */}
              <div
                className="
                  relative
                  z-20
                  bg-[url('/Images/Home/WomenAndHealth/womenandHealthBG.png')]
                  bg-center
                  bg-cover
                  overflow-hidden
                "
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />
                <div className="absolute inset-0 backdrop-blur-[1px]" />
                <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-500/10 blur-3xl rounded-full" />
                <div className="absolute bottom-0 left-0 w-56 h-56 bg-teal-500/10 blur-3xl rounded-full" />

                <div className="relative z-10 w-full max-w-7xl mx-auto h-full flex flex-col">
                  {/* top arabic text - more compact */}
                  <div className="flex justify-end pt-5 max-w-2xl mx-auto lg:ps-20">
                    <span
                      dir="rtl"
                      className="
                        text-white/80
                        text-[10px]
                        sm:text-xs
                        tracking-[0.2em]
                        bg-white/5
                        px-3
                        py-1
                        rounded-full
                      "
                    >
                      تعزيز الصحة وجودة الحياة
                    </span>
                  </div>

                  {/* CENTER CONTENT - More compact */}
                  <div className="flex-1 flex items-center justify-center px-5 py-8 lg:pe-24">
                    <div className="w-full text-center lg:text-right backdrop-blur-sm bg-white/5 rounded-2xl p-5 border border-white/10">
                      <h2
                        className="
                            text-lg
                            sm:text-xl
                            lg:text-3xl
                            font-bold
                            text-white
                            leading-[1.2]
                            tracking-tight
                          "
                      >
                        المــــــرأة والصحــــــة
                      </h2>

                      <p className="text-lg sm:text-xl md:text-2xl font-medium tracking-wide text-white/90 mt-1">
                        Woman & Health
                      </p>

                      <div className="mt-6 flex justify-between items-center">
                        {/* Enhanced Glass Indicator */}
                        <div className="relative flex items-center justify-center h-10 w-10">
                          <div
                            className="
                                relative
                                h-7
                                w-7
                                rounded-full
                                backdrop-blur-xl
                                bg-white/10
                                flex
                                items-center
                                justify-center
                                shadow-[0_0_25px_rgba(16,185,129,0.3)]
                                transition-all
                                duration-300
                                hover:scale-110
                                hover:shadow-[0_0_35px_rgba(16,185,129,0.5)]
                                cursor-pointer
                              "
                          >
                            <FaCaretLeft className="h-5 w-5 text-emerald-300" />
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-white text-base font-semibold">
                            أبرز المواضيع
                          </p>

                          <span className="text-white/60 text-xs tracking-wide">
                            Key Highlights
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
