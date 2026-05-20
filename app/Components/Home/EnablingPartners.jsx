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
        {/* Glass container - Mobile optimized */}
        <div className="relative z-10 mx-auto px-3 xs:px-4 sm:px-6 lg:px-4 py-3 xs:py-4">
          <div className="rounded-xl xs:rounded-2xl sm:rounded-[2rem] md:rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-2xl overflow-hidden hover:shadow-[0_30px_60px_-15px_rgba(79,70,229,0.3)] transition-all duration-700">
            {/* Top gradient line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>

            <div className="py-3 xs:py-4 sm:py-6 md:py-8 lg:py-12 px-3 xs:px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
              <div className="absolute top-0 right-0 w-32 h-32 xs:w-48 xs:h-48 sm:w-64 sm:h-64 bg-blue-500/10 rounded-full blur-3xl hidden sm:block"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 xs:w-48 xs:h-48 sm:w-64 sm:h-64 bg-purple-500/10 rounded-full blur-3xl hidden sm:block"></div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 xs:gap-6 sm:gap-8 lg:gap-12 mb-8 xs:mb-10 sm:mb-12 md:mb-16 relative z-10">
                {/* Left Column - Logo Grid - Mobile optimized */}
                <div className="order-2 md:order-1 grid grid-cols-2 gap-2 xs:gap-3 sm:gap-4 rounded-xl xs:rounded-2xl sm:rounded-[2rem] md:rounded-[2.2rem] bg-white p-3 xs:p-4 sm:p-5 md:p-6 border border-gray-200 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
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
                      className="group relative overflow-hidden rounded-xl xs:rounded-2xl sm:rounded-[1.6rem] border border-gray-200 bg-gradient-to-br from-white to-gray-50 px-2 xs:px-3 sm:px-4 md:px-6 py-4 xs:py-5 sm:py-6 md:py-7 transition-all duration-500 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-[0_15px_40px_rgba(59,130,246,0.12)]"
                    >
                      {/* subtle top glow */}
                      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

                      {/* soft hover bg */}
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/0 via-blue-50/0 to-purple-50/0 group-hover:from-cyan-50/70 group-hover:to-purple-50/40 transition-all duration-500"></div>

                      {/* logo - Mobile optimized */}
                      <div className="relative flex items-center justify-center">
                        <Image
                          src={logo.src}
                          alt={logo.alt}
                          width={170}
                          height={90}
                          className="h-10 xs:h-12 sm:h-14 md:h-16 w-auto object-contain opacity-90 saturate-[0.9] contrast-125 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100 group-hover:saturate-100"
                        />
                      </div>

                      {/* bottom sharp accent */}
                      <div className="absolute bottom-0 left-0 right-0 h-[2px] xs:h-[3px] scale-x-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 transition-transform duration-500 group-hover:scale-x-100"></div>
                    </div>
                  ))}
                </div>

                {/* Right Column - Mobile optimized */}
                <div className="order-1 md:order-2 flex flex-col justify-center">
                  <div className="relative group/badge mb-3 xs:mb-4 sm:mb-6 self-center lg:self-end">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-lg opacity-0 group-hover/badge:opacity-50 transition-opacity duration-500"></div>

                    <div className="relative inline-flex items-center gap-1 xs:gap-2 px-2 xs:px-3 sm:px-4 py-1 xs:py-1.5 sm:py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl text-white text-[8px] xs:text-[10px] sm:text-xs">
                      <Building2 className="w-2.5 h-2.5 xs:w-3 xs:h-3 sm:w-4 sm:h-4 text-blue-400" />
                      <span className="">Strategic Partners</span>
                      {/* <span className="inline xs:hidden">Partners</span> */}
                      <span className="w-0.5 h-0.5 bg-white/30 rounded-full hidden xs:block"></span>
                      <Trophy className="w-2.5 h-2.5 xs:w-3 xs:h-3 sm:w-4 sm:h-4 text-cyan-400" />
                      <span className="">Enabling Entities</span>
                    </div>
                  </div>

                  <h2
                    className="text-lg xs:text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 xs:mb-3 sm:mb-4 text-center lg:text-right"
                    dir="rtl"
                  >
                    الجــــهات الممكــــنة للمؤتمر
                  </h2>

                  <h2 className="text-lg xs:text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 xs:mb-3 sm:mb-4 text-center lg:text-end">
                    Enabling Entities{" "}
                    <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                      of the Conference
                    </span>
                  </h2>

                  <div className="flex justify-center lg:justify-end">
                    <div className="relative w-16 xs:w-20 h-0.5 xs:h-1 my-3 xs:my-4">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-sm"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full"></div>
                    </div>
                  </div>

                  <p
                    className="text-xs xs:text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed text-center lg:text-right px-2 xs:px-0"
                    dir="rtl"
                  >
                    يحظــــى مؤتمر تعزيز الصحة وجــــودة الحياة بدعم وتمكيــــن
                    نخبة من الجهات الحكومية والشــــركاء الاستراتيجيين، الذين
                    يســــخرون إمكاناتهم لتعزيز جودة الحيــــاة وتطويــــر
                    القطاع الصحــــي، بما يتماشــــى مع المســــتهدفات الوطنية
                    الطموحة.
                  </p>

                  <p className="text-xs xs:text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed mt-3 xs:mt-4 text-center lg:text-end px-2 xs:px-0">
                    HEAL is empowered and supported by elite government entities
                    and strategic partners. They leverage their resources to
                    enhance quality of life and develop the healthcare sector,
                    in alignment with ambitious national objectives.
                  </p>

                  {/* Decorative stat - Mobile optimized */}
                  <div className="flex justify-center lg:justify-end mt-4 xs:mt-5 sm:mt-6 gap-3 xs:gap-4">
                    <div className="flex items-center gap-1.5 xs:gap-2 px-2 xs:px-3 py-1 xs:py-1.5 rounded-full bg-white/5 border border-white/10">
                      <Users className="w-3 h-3 xs:w-3.5 xs:h-3.5 text-blue-400" />
                      <span className="text-[9px] xs:text-xs text-gray-300">
                        Nationwide Impact
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom decorative note - Mobile optimized */}
              <div className="text-center mt-8 xs:mt-10 sm:mt-12 md:mt-16 relative z-10">
                <p className="text-[8px] xs:text-[9px] sm:text-xs text-gray-500 px-2">
                  * Strategic partners committed to healthcare excellence and
                  quality of life enhancement
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="relative w-full mx-auto overflow-hidden py-8 sm:py-12">
        <div className="relative z-10 px-4 sm:px-6">
          {/* Main Container */}
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white shadow-[0_10px_50px_rgba(0,0,0,0.06)] min-h-[600px]">
            <div className="absolute inset-0 bg-black/3"></div>

            {/* top glow line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
              {/* LOGO - More compact */}
              <div className="flex justify-center mb-8 sm:mb-20 mt-8">
                <div className="relative group">
                  <div className="relative rounded-[1.5rem]">
                    <Image
                      src="/Images/Home/EnabalingPartners/EELogo.png"
                      alt="Enabling Entities Logo"
                      height={1200}
                      width={1200}
                      className="relative z-10 w-40 sm:w-48 md:w-56 lg:w-220 h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                      priority
                    />
                  </div>
                </div>
              </div>

              {/* CONTENT - Tighter grid gap */}
              <div className="grid grid-cols-1 lg:grid-cols-[180px_1fr] max-w-4xl mx-auto items-center">
                {/* LEFT - HPQL */}
                <div className="text-center lg:text-left">
                  <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-[-0.05em] leading-none">
                    <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 bg-clip-text text-transparent">
                      HPQL
                    </span>
                  </h2>
                  {/* <div className="mt-3 flex justify-center lg:justify-start">
                    <div className="h-1 w-12 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"></div>
                  </div> */}
                </div>

                {/* RIGHT - Content Card */}
                <div className="relative">
                  <div className="rounded-[1.5rem] p-4 sm:p-5 lg:p-6 ">
                    {/* top row - Compact */}
                    <div className="flex flex-col sm:flex-row justify-between gap-3 ">
                      <div className="flex items-center gap-2">
                        <span className="text-sm sm:text-lg lg:text-xl font-bold leading-tight text-emerald-500">
                          Moving forward together towards
                        </span>
                      </div>

                      <div className="flex items-center gap-2 sm:justify-end">
                        <span
                          className="text-sm sm:text-lg lg:text-xl font-bold leading-tight text-emerald-500 text-right"
                          dir="rtl"
                        >
                          لننطلق معا نحو
                        </span>
                      </div>
                    </div>

                    {/* titles - Compact */}
                    <div className="flex flex-col sm:flex-row justify-between gap-4">
                      {/* english */}
                      <div className="space-y-0.5">
                        <h3 className="text-sm sm:text-lg lg:text-xl font-bold leading-tight text-blue-950">
                          Health Promotion & Quality of Life
                        </h3>
                      </div>

                      {/* arabic */}
                      <div className="space-y-0.5 text-right">
                        <h3
                          className="text-sm sm:text-lg lg:text-xl font-bold leading-tight text-blue-950"
                          dir="rtl"
                        >
                          تعزيز الصحة وجودة الحياة
                        </h3>
                        <p
                          className="text-sm sm:text-base lg:text-lg font-semibold text-purple-700"
                          dir="rtl"
                        ></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3  */}
      <section className="relative w-full overflow-hidden py-6 sm:py-10 bg-[url('/Images/Home/EnabalingPartners/EE-BG-3.png')] bg-cover bg-center">
        <div className="relative z-10 px-4 sm:px-6">
          {/* Main Glass Card */}
          <div className="relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
            {/* Top Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"></div>

            {/* subtle overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_25%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(168,85,247,0.08),transparent_25%)]"></div>

            <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-8 sm:py-10 lg:py-12">
              {/* TOP HEADER  */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-4 border-b border-white/10">
                {/* Left */}
                <div className="flex items-center gap-3">
                  <div className="h-8 w-0.5 rounded-full bg-gradient-to-b from-cyan-400 to-purple-500"></div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg sm:text-xl font-black tracking-tight bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                      HPQL
                    </span>
                    <div className="h-1 w-1 rounded-full bg-white/30 hidden sm:block"></div>
                    <span className="text-[10px] sm:text-xs tracking-[0.2em] text-gray-400 uppercase">
                      <span className="">
                        Health Promotion & Quality Of Life
                      </span>
                      {/* <span className="inline sm:hidden">HPQL</span> */}
                    </span>
                  </div>
                </div>

                {/* Right Arabic */}
                <div
                  className="text-xs sm:text-sm text-gray-300 tracking-wide text-right"
                  dir="rtl"
                >
                  تعزيز الصحة وجودة الحياة
                </div>
              </div>

              {/* CONTENT - Mobile: single column, Desktop: two columns */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mt-6 sm:mt-8">
                {/* LEFT CONTENT */}
                <div>
                  {/* Mini Label */}
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-[10px] sm:text-xs font-medium text-cyan-300 mb-3 sm:mb-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></div>
                    <span className="hidden sm:inline">
                      Organization & Operational Excellence
                    </span>
                    <span className="inline sm:hidden">
                      Operational Excellence
                    </span>
                  </div>

                  {/* Heading */}
                  <h3 className="text-xl sm:text-3xl lg:text-4xl font-bold leading-[1.2] text-white">
                    Absolute precision for an experience befitting the Kingdom
                  </h3>

                  {/* Description */}
                  <p className="mt-3 sm:mt-4 text-sm text-gray-300 leading-relaxed max-w-xl">
                    All operational facets of the conference are managed and
                    executed by{" "}
                    <span className="font-semibold text-cyan-300">
                      VEXORA SOLUTIONS
                    </span>
                  </p>

                  {/* bottom tags */}
                  <div className="mt-4 sm:mt-5 flex flex-wrap gap-2">
                    <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] text-gray-300 backdrop-blur-md">
                      Premium Conference Operations
                    </div>
                    <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] text-gray-300 backdrop-blur-md">
                      Kingdom Standard Experience
                    </div>
                  </div>
                </div>

                {/* RIGHT CONTENT */}
                <div className="lg:text-right" dir="rtl">
                  {/* Mini Label */}
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-[10px] sm:text-xs font-medium text-purple-300 mb-3 sm:mb-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse"></div>
                    <span>التنظيم والتميز التشغيلي</span>
                  </div>

                  {/* Heading */}
                  <h3 className="text-xl sm:text-3xl lg:text-4xl font-bold leading-[1.3] text-white">
                    التزام بالدقة المتناهيـــة لضـــمان تجـــربة تنظيمية تليق
                    بمكانة المملكة
                  </h3>

                  {/* Description */}
                  <p className="mt-3 sm:mt-4 text-sm text-gray-300 leading-relaxed max-w-xl lg:ml-auto">
                    يتم إدارة وتنفيذ كافة العمليات التشغيلية للمؤتمر بواسطة
                    <span className="font-semibold text-cyan-300">
                      {" "}
                      SOLUTIONS VEXORA
                    </span>
                    ، بما يضمن أعلى معايير الجودة والدقة
                  </p>
                </div>
              </div>

              {/* FOOTER LOGOS  */}
              <div className="mt-8 sm:mt-10 pt-6 border-t border-white/10">
                <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-4 sm:gap-5">
                  {/* Logo 1 */}
                  <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-xl transition-all duration-500 hover:border-cyan-400/30 hover:bg-white/10 w-full sm:w-auto flex justify-center">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <Image
                      src="/Images/Home/EnabalingPartners/Logo.png"
                      alt="Logo"
                      width={150}
                      height={60}
                      className="relative z-10 w-32 sm:w-36 h-auto object-contain"
                    />
                  </div>

                  {/* Logo 2 */}
                  <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-xl transition-all duration-500 hover:border-purple-400/30 hover:bg-white/10 w-full sm:w-auto flex justify-center">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <Image
                      src="/Images/Home/EnabalingPartners/WhiteLogo.png"
                      alt="White Logo"
                      height={60}
                      width={200}
                      className="relative z-10 w-36 sm:w-44 h-auto object-contain"
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
