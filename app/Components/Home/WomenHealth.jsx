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
} from "lucide-react";

import Image from "next/image";
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
    titleEn: "Women’s Role in Digital Health Transformation",
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
    <div className="relative isolate overflow-hidden py-10 sm:py-14 lg:py-20">
      {/* GLOBAL BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-indigo-950 to-black" />

      {/* ambient floating lights */}
      <div className="pointer-events-none absolute top-[1%] left-[5%] h-96 w-96 bg-emerald-400/30 blur-[140px] rounded-full" />

      <div className="pointer-events-none absolute bottom-[10%] right-[5%] h-[30rem] w-[30rem] bg-green-300/60 blur-[160px] rounded-full" />

      <div className="pointer-events-none absolute top-1/3 left-1/3 h-[28rem] w-[28rem] bg-lime-500/10 blur-[150px] rounded-full" />

      {/* subtle blur */}
      <div className="relative z-10 backdrop-blur-[2px]">
        {/* HEADER */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14 md:mb-20 relative z-10 px-4">
          {/* Badge */}
          <div className="relative inline-block group/badge mb-5 sm:mb-7">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full blur-xl opacity-0 group-hover/badge:opacity-50 transition-opacity duration-500" />

            <div className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl text-white text-xs shadow-lg shadow-cyan-500/10">
              <Sparkles className="w-4 h-4 text-cyan-300" />

              <span>Women Empowerment</span>

              <span className="w-1 h-1 bg-white/30 rounded-full" />

              <ShieldCheck className="w-4 h-4 text-purple-300" />

              <span>Healthcare Excellence</span>
            </div>
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Woman &{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
              Health
            </span>
          </h2>

          {/* Decorative line */}
          <div className="relative w-24 sm:w-32 h-1 mx-auto my-5 sm:my-6">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full blur-sm" />
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-300 to-green-400 rounded-full" />
          </div>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
            Highlighting the role of women in advancing healthcare, innovation,
            medical research, and community well-being
          </p>
        </div>

        {/* SECTION 1 */}
        <section className="relative overflow-hidden">
          <div className="relative z-10 max-w-8xl mx-auto px-4 sm:px-6 lg:px-4">
            <div
              className="
                relative
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                shadow-[0_25px_120px_rgba(0,0,0,0.75)]
                transition-all
                duration-700
                hover:scale-[1.002]
              "
            >
              {/* edge glow */}
              <div className="absolute inset-0 rounded-3xl ring-1 ring-white/10 pointer-events-none" />

              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src="/Images/Home/WomenAndHealth/womenandHealthBG.png"
                  alt="Women and Health Background"
                  fill
                  priority
                  className="object-cover object-center"
                />

                <div className="absolute inset-0 bg-black/20" />

                <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 blur-3xl rounded-full" />
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-80 h-80 bg-pink-500/10 blur-3xl rounded-full" />
              </div>

              {/* top line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

              <div className="relative flex flex-col justify-between p-6 sm:p-8 lg:p-10 min-h-[600px] lg:min-h-[700px]">
                {/* Top bar */}
                <div className="max-w-7xl mx-auto w-full flex items-center justify-between text-white/80 text-[10px] sm:text-xs mb-10">
                  <span>
                    <span className="font-semibold text-white">HPQL</span>{" "}
                    HEALTH PROMOTION & QUALITY OF LIFE
                  </span>

                  <span dir="rtl">تعزيز الصحة وجودة الحياة</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] max-w-7xl mx-auto flex-1 w-full mt-6">
                  {/* LEFT */}
                  <div className="relative z-10">
                    <div className="grid grid-cols-2 gap-4">
                      {statsData.map((stat, index) => (
                        <div
                          key={index}
                          className="
                            group
                            relative
                            overflow-hidden
                            rounded-2xl
                            border
                            border-white/10
                            bg-white/[0.06]
                            backdrop-blur-xl
                            p-3.5 sm:p-4
                            transition-all
                            duration-500
                            hover:bg-white/[0.09]
                            hover:-translate-y-1
                          "
                        >
                          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-500/20 blur-3xl rounded-full" />
                          </div>

                          <div className="relative mb-3">
                            <div className="relative rounded-2xl border border-white/20 bg-blue-900 px-4 py-2.5 text-center shadow-xl">
                              <h3 className="text-xl sm:text-2xl lg:text-[28px] font-bold text-white">
                                {stat.value}
                              </h3>
                            </div>
                          </div>

                          <p
                            dir="rtl"
                            className="text-white text-sm leading-relaxed"
                          >
                            {stat.labelAr}
                          </p>

                          <p className="text-white/60 text-xs sm:text-sm mt-1.5">
                            {stat.labelEn}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* RIGHT */}
                  <div className="relative flex items-start justify-end mt-3">
                    <div className="absolute w-64 h-64 bg-cyan-500/20 blur-3xl rounded-full" />

                    <div className="relative text-center lg:text-right">
                      <h2 className="text-2xl sm:text-3xl lg:text-[35px] font-bold text-white leading-tight">
                        المــــــرأة والصحــــــة
                      </h2>

                      <p className="text-2xl sm:text-3xl lg:text-[30px] text-white">
                        Woman & Health
                      </p>
                    </div>
                  </div>
                </div>

                {/* Woman Image */}
                <div className="pointer-events-none absolute bottom-0 right-0 lg:right-[-40px]">
                  <div className="absolute bottom-10 right-10 w-72 h-72 bg-green-500/20 blur-3xl rounded-full" />

                  <Image
                    src="/Images/Home/WomenAndHealth/women.png"
                    alt="Women"
                    width={900}
                    height={900}
                    className="relative object-contain object-bottom opacity-95"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION DIVIDER */}
        <div className="relative z-20 py-4 sm:py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="relative h-px overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

              <div className="absolute left-1/2 top-1/2 h-20 w-40 -translate-x-1/2 -translate-y-1/2 bg-cyan-500/20 blur-3xl rounded-full" />

              <div className="absolute left-1/2 top-1/2 h-20 w-40 -translate-x-1/2 -translate-y-1/2 bg-purple-500/20 blur-3xl rounded-full" />
            </div>
          </div>
        </div>

        {/* SECTION 2 */}
        <section className="relative overflow-hidden">
          <div className="relative z-20 max-w-8xl mx-auto px-4 sm:px-6 lg:px-4">
            <div
              className="
                relative
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                shadow-[0_25px_120px_rgba(0,0,0,0.75)]
                transition-all
                duration-700
                hover:scale-[1.002]
              "
            >
              {/* edge glow */}
              <div className="absolute inset-0 rounded-3xl ring-1 ring-white/10 pointer-events-none" />

              {/* FULL BACKGROUND IMAGE */}
              <div className="absolute inset-0">
                <Image
                  src="/Images/Home/WomenAndHealth/womenBG-2.png"
                  alt="Women Empowerment"
                  fill
                  priority
                  className="object-cover object-center"
                />

                <div className="absolute inset-0 bg-black/10" />

                <div className="absolute top-0 left-0 w-80 h-80 bg-purple-500/20 blur-3xl rounded-full" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/20 blur-3xl rounded-full" />
              </div>

              {/* top glow line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

              <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] min-h-[600px] lg:min-h-[700px]">
                {/* LEFT PANEL */}
                <div className="relative z-10 flex flex-col">
                  <div className="w-full max-w-4xl mx-auto h-full flex flex-col">
                    {/* top text */}
                    <div className="px-6 sm:px-8 lg:px-10 pt-8">
                      <div
                        className="flex items-center text-white/80 text-[10px] sm:text-xs tracking-[0.2em] inline-flex
                        px-4
                        py-2
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
                        height={1000}
                        width={1100}
                        className="object-cover object-center opacity-90"
                      />
                    </div>

                    {/* CENTER CONTENT */}
                    <div className="flex flex-1 items-end px-6 sm:px-10 lg:px-14 py-10">
                      <div className="w-full py-6 sm:py-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          {highlightsData.map((highlight, index) => (
                            <div
                              key={index}
                              className="
                                group
                                relative
                                overflow-hidden
                                rounded-2xl
                                px-4
                                py-4
                              "
                            >
                              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-400/10 blur-3xl rounded-full" />
                              </div>

                              <h3
                                className="
                                  relative
                                  z-10
                                  text-white
                                  text-end
                                  font-semibold
                                  text-sm
                                  md:text-lg
                                  leading-relaxed
                                "
                              >
                                {highlight.titleAr}
                              </h3>

                              <p
                                className="
                                  relative
                                  z-10
                                  text-white
                                  text-end
                                  text-sm
                                  md:text-md
                                  leading-relaxed
                                  tracking-wide
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

                {/* RIGHT PANEL */}
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
                  <div className="absolute inset-0 bg-black/20" />

                  <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" />

                  <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full" />

                  <div className="relative z-10 w-full max-w-7xl mx-auto h-full flex flex-col">
                    {/* top arabic text */}
                    <div className="flex justify-end pt-8 max-w-2xl mx-auto lg:ps-23">
                      <span
                        dir="rtl"
                        className="
                        text-white
                        text-[10px]
                        sm:text-xs
                        tracking-[0.2em]
                      "
                      >
                        تعزيز الصحة وجودة الحياة
                      </span>
                    </div>

                    {/* CENTER CONTENT */}
                    <div className="flex-1 flex items-center justify-center px-6 py-12 lg:pe-30">
                      <div className="w-full text-center lg:text-right">
                        <h2
                          className="
                            text-xl
                            sm:text-2xl
                            lg:text-[30px]
                            font-bold
                            text-white
                            leading-[1.1]
                            tracking-tight
                          "
                        >
                          المــــــرأة والصحــــــة
                        </h2>

                        <p className="text-xl sm:text-2xl font-medium tracking-wide text-white">
                          Woman & Health
                        </p>

                        <div className="mt-8 flex justify-between items-center">
                          {/* Modern Glass Indicator */}
                          <div className="relative flex items-center justify-center h-10 w-10">
                            
                            {/* inner glass circle */}
                            <div
                              className="
                                relative
                                h-7
                                w-7
                                rounded-full
                                backdrop-blur-xl
                                flex
                                items-center
                                justify-center
                                shadow-[0_0_25px_rgba(34,211,238,0.25)]
                                transition-all
                                duration-500
                                hover:scale-110
                              "
                            >
                              <FaCaretLeft className="h-6 w-6 text-cyan-300" />
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-white text-lg font-semibold">
                              أبرز المواضيع
                            </p>

                            <span className="text-white/70 text-sm tracking-wide">
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

        {/* bottom fade */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/40 to-transparent" />
      </div>
    </div>
  );
}
