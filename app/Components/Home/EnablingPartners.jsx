"use client";

import Image from "next/image";
import {
  Building2,
  Trophy,
  Users,
  Sparkles,
  Target,
  ArrowRight,
  Star,
  HeartPulse,
  Microscope,
  Cpu,
  ShieldCheck,
  Globe,
  BarChart3,
  Award,
  Zap,
  Layers,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";

export default function EnablingPartners() {
  return (
    <div className="relative">
      {/* Dark themed background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-900">
        <div className="absolute top-10 right-10 w-32 h-32 sm:w-72 sm:h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 sm:w-80 sm:h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-1/3 w-48 h-48 sm:w-96 sm:h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-32 h-32 sm:w-64 sm:h-64 bg-amber-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      {/* SECTION 1 */}
      <section className="relative w-full mx-auto overflow-hidden">
        {/* Glass container */}
        <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-4 py-4">
          <div className="rounded-2xl sm:rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-2xl overflow-hidden hover:shadow-[0_30px_60px_-15px_rgba(79,70,229,0.3)] transition-all duration-700">
            {/* Top gradient line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>

            <div className="py-4 px-3 sm:py-8 lg:py-12 lg:px-0 max-w-7xl mx-auto relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl hidden sm:block"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl hidden sm:block"></div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12 sm:mb-16 relative z-10">
                <div className="grid grid-cols-2 gap-4 rounded-[2.2rem] bg-white p-5 sm:p-6 border border-gray-200 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
                  {[
                    {
                      src: "/Images/Home/EnabalingPartners/kingAbdullaziz.png",
                      alt: "King Abdullah",
                    },
                    {
                      src: "/Images/Home/EnabalingPartners/imarat.png",
                      alt: "Imarat",
                    },
                    {
                      src: "/Images/Home/EnabalingPartners/aldaiyat.png",
                      alt: "Aldaiyat",
                    },
                    {
                      src: "/Images/Home/EnabalingPartners/jiddahChamber.png",
                      alt: "Jiddah Chamber",
                    },
                    {
                      src: "/Images/Home/EnabalingPartners/amanat.png",
                      alt: "Amanat",
                    },
                    {
                      src: "/Images/Home/EnabalingPartners/publicHealthAuthority.png",
                      alt: "Public Health Authority",
                    },
                  ].map((logo, index) => (
                    <div
                      key={index}
                      className="group relative overflow-hidden rounded-[1.6rem] border border-gray-200 bg-gradient-to-br from-white to-gray-50 px-4 py-7 sm:px-6 transition-all duration-500 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-[0_15px_40px_rgba(59,130,246,0.12)]"
                    >
                      {/* subtle top glow */}
                      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

                      {/* soft hover bg */}
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/0 via-blue-50/0 to-purple-50/0 group-hover:from-cyan-50/70 group-hover:to-purple-50/40 transition-all duration-500"></div>

                      {/* logo */}
                      <div className="relative flex items-center justify-center">
                        <Image
                          src={logo.src}
                          alt={logo.alt}
                          width={170}
                          height={90}
                          className="h-14 sm:h-16 w-auto object-contain opacity-90 saturate-[0.9] contrast-125 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100 group-hover:saturate-100"
                        />
                      </div>

                      {/* bottom sharp accent */}
                      <div className="absolute bottom-0 left-0 right-0 h-[3px] scale-x-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 transition-transform duration-500 group-hover:scale-x-100"></div>
                    </div>
                  ))}
                </div>

                {/* Right Column*/}
                <div className="flex flex-col justify-center">
                  <div className="relative group/badge mb-4 sm:mb-6 self-end">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-lg opacity-0 group-hover/badge:opacity-50 transition-opacity duration-500"></div>
                    <div className="relative inline-flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1 sm:py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl text-white text-[10px] sm:text-xs">
                      <Building2 className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
                      <span>Strategic Partners</span>
                      <span className="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-white/30 rounded-full"></span>
                      <Trophy className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400" />
                      <span>Enabling Entities</span>
                    </div>
                  </div>

                  <h2
                    className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4 text-right"
                    dir="rtl"
                  >
                    الجــــهات الممكــــنة للمؤتمر
                  </h2>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4 text-end">
                    Enabling Entities{" "}
                    <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                      of the Conference
                    </span>
                  </h2>
                  <div className="flex justify-end">
                    <div className="relative w-20 h-1 my-4">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-sm"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full"></div>
                    </div>
                  </div>
                  <p
                    className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed text-right"
                    dir="rtl"
                  >
                    يحظــــى مؤتمر تعزيز الصحة وجــــودة الحياة بدعم وتمكيــــن
                    نخبة من الجهات الحكومية والشــــركاء الاستراتيجيين، الذين
                    يســــخرون إمكاناتهم لتعزيز جودة الحيــــاة وتطويــــر
                    القطاع الصحــــي، بما يتماشــــى مع المســــتهدفات الوطنية
                    الطموحة.
                  </p>

                  <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed mt-4 text-end">
                    HEAL is empowered and supported by elite government entities
                    and strategic partners. They leverage their resources to
                    enhance quality of life and develop the healthcare sector,
                    in alignment with ambitious national objectives.
                  </p>

                  {/* Decorative stat */}
                  <div className="flex justify-end mt-6 gap-4">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                      <Users className="w-3.5 h-3.5 text-blue-400" />
                      <span className="text-xs text-gray-300">
                        Nationwide Impact
                      </span>
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

      {/* SECTION 2 */}
      <section className="relative w-full mx-auto overflow-hidden py-8 sm:py-12 ">
        
        <div className="relative z-10 px-4 sm:px-6 ">
          {/* Main Container */}
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white shadow-[0_10px_50px_rgba(0,0,0,0.06)] min-h-[600px]">
          <div className="absolute inset-0 bg-black/3"></div>
           
            {/* top glow line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
              {/* LOGO */}
              <div className="flex justify-center mb-10 sm:mb-12 lg:mb-25">
                <div className="relative group">
                 
                  {/* frame */}
                  <div className="relative rounded-[1.5rem] ">
                    <Image
                      src="/Images/Home/EnabalingPartners/EELogo.png"
                      alt="Enabling Entities Logo"
                      height={800}
                      width={800}
                      className="relative z-10 h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                      priority
                    />
                  </div>
                </div>
              </div>

              {/* CONTENT */}
              <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-20 max-w-5xl mx-auto items-center">
                {/* LEFT */}
                <div className="text-center lg:text-left">
                 
                  {/* title */}
                  <h2 className="text-5xl sm:text-6xl lg:text-8xl font-black tracking-[-0.05em] leading-none">
                    <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 bg-clip-text text-transparent">
                      HPQL
                    </span>
                  </h2>

                  {/* line */}
                  <div className="mt-4 flex justify-center lg:justify-start">
                    <div className="h-1 w-16 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"></div>
                  </div>
                </div>

                {/* RIGHT */}
                <div className="relative">
                  <div className="rounded-[1.8rem] border border-gray-200 bg-white/70 backdrop-blur-xl p-5 sm:p-6 lg:p-7 shadow-[0_8px_30px_rgba(0,0,0,0.05)]">
                    {/* top row */}
                    <div className="flex flex-col sm:flex-row justify-between gap-4 mb-5">
                      <div className="flex items-center gap-2">
                        <div className="h-5 w-1 rounded-full bg-gradient-to-b from-cyan-400 to-blue-600"></div>

                        <span className="text-xs sm:text-sm font-semibold tracking-wide text-blue-700">
                          Moving forward together towards
                        </span>
                      </div>

                      <div className="flex items-center gap-2 sm:justify-end">
                        <span
                          className="text-xs sm:text-sm font-semibold tracking-wide text-purple-700 text-right"
                          dir="rtl"
                        >
                          لننطلق معا نحو
                        </span>

                        <div className="h-5 w-1 rounded-full bg-gradient-to-b from-purple-500 to-pink-500"></div>
                      </div>
                    </div>

                    {/* divider */}
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-6"></div>

                    {/* titles */}
                    <div className="flex flex-col sm:flex-row justify-between gap-6">
                      {/* english */}
                      <div className="space-y-1">
                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold leading-tight text-gray-900">
                          Health Promotion
                        </h3>

                        <p className="text-md sm:text-lg lg:text-xl font-semibold text-cyan-700">
                          & Quality of Life
                        </p>
                      </div>

                      {/* arabic */}
                      <div className="space-y-1 text-right">
                        <h3
                          className="text-xl sm:text-2xl lg:text-3xl font-bold leading-tight text-gray-900"
                          dir="rtl"
                        >
                          تعزيز الصحة
                        </h3>

                        <p
                          className="text-md sm:text-lg lg:text-xl font-semibold text-purple-700"
                          dir="rtl"
                        >
                          وجودة الحياة
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 */}
      <section className="relative w-full overflow-hidden py-6 sm:py-10 bg-[url('/Images/Home/EnabalingPartners/EE-BG-3.png')] bg-cover bg-center">
        

        <div className="relative z-10 px-4 sm:px-6">
          {/* Main Glass Card */}
          <div className="relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
            {/* Top Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"></div>

            {/* subtle overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_25%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(168,85,247,0.08),transparent_25%)]"></div>

            <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-10 sm:py-14 lg:py-16">
              {/* TOP HEADER */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-white/10">
                {/* Left */}
                <div className="flex items-center gap-4">
                  <div className="h-10 w-1 rounded-full bg-gradient-to-b from-cyan-400 to-purple-500"></div>

                  <div>
                    <div className="flex items-center gap-3">
                      <span className="text-xl sm:text-2xl font-black tracking-tight bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                        HPQL
                      </span>

                      <div className="h-1 w-1 rounded-full bg-white/30"></div>

                      <span className="text-[11px] sm:text-xs tracking-[0.25em] text-gray-400 uppercase">
                        Health Promotion & Quality Of Life
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right Arabic */}
                <div
                  className="text-sm sm:text-base text-gray-300 tracking-wide"
                  dir="rtl"
                >
                  تعزيز الصحة وجودة الحياة
                </div>
              </div>

              {/* CONTENT */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mt-10">
                {/* LEFT CONTENT */}
                <div>
                  {/* Mini Label */}
                  <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-xs font-medium text-cyan-300 mb-6">
                    <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
                    <span>Organization & Operational Excellence</span>
                  </div>

                  {/* Heading */}
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.15] text-white">
                    Absolute precision for an experience befitting the Kingdom
                  </h3>

                 
                  {/* Description */}
                  <p className="mt-8 text-sm sm:text-base text-gray-300 leading-relaxed max-w-xl">
                    All operational facets of the conference are managed and
                    executed by{" "}
                    <span className="font-semibold text-cyan-300">
                      VEXORA SOLUTIONS
                    </span>
                  </p>

                  {/* bottom stat */}
                  <div className="mt-8 flex flex-wrap gap-3">
                    <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-gray-300 backdrop-blur-md">
                      Premium Conference Operations
                    </div>

                    <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-gray-300 backdrop-blur-md">
                      Kingdom Standard Experience
                    </div>
                  </div>
                </div>

                {/* RIGHT CONTENT */}
                <div className="lg:text-right" dir="rtl">
                  {/* Mini Label */}
                  <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-2 text-xs font-medium text-purple-300 mb-6">
                    <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></div>
                    <span>التنظيم والتميز التشغيلي</span>
                  </div>

                  {/* Heading */}
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.3] text-white">
                    التزام بالدقة المتناهيـــة لضـــمان تجـــربة تنظيمية تليق
                    بمكانة المملكة
                  </h3>

                

                  {/* Description */}
                  <p className="mt-8 text-sm sm:text-base text-gray-300 leading-loose max-w-xl lg:ml-auto">
                    يتم إدارة وتنفيذ كافة العمليات التشغيلية للمؤتمر بواسطة
                    <span className="font-semibold text-cyan-300">
                      {" "}
                      SOLUTIONS VEXORA
                    </span>
                    ، بما يضمن أعلى معايير الجودة والدقة
                  </p>
                </div>
              </div>

              {/* FOOTER LOGOS */}
              <div className="mt-14 pt-8 border-t border-white/10">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                  {/* Logo 1 */}
                  <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-xl transition-all duration-500 hover:border-cyan-400/30 hover:bg-white/10">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <Image
                      src="/Images/Home/EnabalingPartners/Logo.png"
                      alt="Logo"
                      width={170}
                      height={70}
                      className="relative z-10 w-36 sm:w-44 h-auto object-contain"
                    />
                  </div>

                  {/* Logo 2 */}
                  <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-xl transition-all duration-500 hover:border-purple-400/30 hover:bg-white/10">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <Image
                      src="/Images/Home/EnabalingPartners/WhiteLogo.png"
                      alt="White Logo"
                      height={70}
                      width={240}
                      className="relative z-10 w-44 sm:w-52 h-auto object-contain"
                    />
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
