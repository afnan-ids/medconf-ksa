"use client";
import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Microscope,
  Brain,
  Stethoscope,
  Activity,
  HeartPulse,
  Shield,
  Zap,
  Users,
  Calendar,
  Sparkles,
  TrendingUp,
  Cpu,
  Scan,
  Monitor,
  Star,
  View,
} from "lucide-react";
import BreadCrumb from "../../../Components/BreadCrum";

import { useLanguage } from "../../../context/LanguageContext";
import { translations } from "../../../il18/whatsOn/medicalInnovationArena";

export default function MedicalInnovationArena() {
  const { language } = useLanguage();
  const t = translations[language];
  const statsData = [
    {
      icon: Microscope,
      value: "50+",
      label: t.latestTechnologies,
      gradient: "from-blue-500 to-cyan-400",
    },
    {
      icon: Brain,
      value: "25+",
      label: t.aiSolutions,
      gradient: "from-purple-500 to-pink-400",
    },
    {
      icon: Users,
      value: "100+",
      label: t.industryExperts,
      gradient: "from-amber-500 to-orange-400",
    },
    {
      icon: Activity,
      value: "10+",
      label: t.liveDemosCount,
      gradient: "from-emerald-500 to-teal-500",
    },
  ];

  const experienceCards = [
    {
      title: t.aiPoweredDiagnostics,
      description: t.aiDescription,
      icon: Brain,
      gradient: "from-blue-500 to-cyan-400",
      tag: t.aiInnovations,
    },
    {
      title: t.smartMedicalDevices,
      description: t.wearableDescription,
      icon: Monitor,
      gradient: "from-purple-500 to-pink-400",
      tag: t.wearableTech,
    },
    {
      title: t.roboticSurgerySystems,
      description: t.roboticsDescription,
      icon: Zap,
      gradient: "from-amber-500 to-orange-400",
      tag: t.precisionSurgery,
    },
    {
      title: t.diagnosticImagingEvolution,
      description: t.imagingDescription,
      icon: Scan,
      gradient: "from-emerald-500 to-teal-500",
      tag: t.nextGenImaging,
    },
    {
      title: t.digitalHealthPlatforms,
      description: t.digitalHealthDescription,
      icon: HeartPulse,
      gradient: "from-blue-600 to-purple-600",
      tag: t.digitalHealth,
    },
    {
      title: t.medicalIoTSensors,
      description: t.iotDescription,
      icon: Shield,
      gradient: "from-cyan-500 to-blue-500",
      tag: t.connectedCare,
    },
  ];

  return (
    <>
      <BreadCrumb
        title={t.medicalInnovationArena}
        backgroundImage="/Images/Home/Bread-crum-1.avif"
        path={[{ label: t.whatsOn }, { label: t.medicalInnovationArena }]}
      />

      <section className="relative min-h-screen py-10 sm:py-12 md:py-16 overflow-hidden">
        {/* Animated Background - Floating Orbs */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-900">
          <div className="absolute top-20 left-10 w-32 h-32 sm:w-72 sm:h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 sm:w-80 sm:h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/3 left-1/2 w-48 h-48 sm:w-96 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-56 h-56 sm:w-64 sm:h-64 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          {/* ========== SECTION 1: HERO - UPDATED ========== */}
          <div className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24">
            {/* Top badge */}
            <div className="inline-flex items-center gap-1 sm:gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6 md:mb-8">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-300" />
              <span className="text-xs sm:text-sm font-medium text-gray-300">
                {t.innovationShowcase2026}
              </span>
            </div>

            {/* Main title with gradient */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 px-2 relative text-white">
              {t.medicalInnovationArena}
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto px-4">
              {t.heroDescription}
            </p>
          </div>

          {/* INTRO */}
          <div className="mb-12 sm:mb-16 md:mb-20">
            <div className="max-w-6xl mx-auto text-center relative group">
              {/* Glow background */}
              <div className="absolute -inset-10 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 blur-3xl opacity-40 group-hover:opacity-70 transition duration-700"></div>

              {/* Card */}
              <div className="relative bg-white/[0.04] backdrop-blur-2xl border border-white/10 rounded-3xl sm:rounded-[2.5rem] p-6 sm:p-10 md:p-12 overflow-hidden transition-all duration-500">
                {/* Animated gradient border */}
                <div className="absolute inset-0 rounded-3xl p-[1px] bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition duration-700"></div>

                {/* Floating gradient orb */}
                <div className="absolute -top-20 -right-20 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full"></div>
                <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full"></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Heading (NEW) */}
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-4 tracking-tight">
                    {t.experienceFuture}
                  </h2>

                  {/* Paragraph */}
                  <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
                    {t.heroSubDescription}
                  </p>

                  {/* Tags */}
                  <div className="mt-6 flex flex-wrap justify-center gap-2">
                    {[t.liveDemos, t.expertSessions, t.handsOnExperience].map(
                      (tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 text-xs sm:text-sm rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 cursor-default"
                        >
                          {tag}
                        </span>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* EXPERIENCE CARDS */}
          <div id="experience" className="mb-12 sm:mb-16 md:mb-20">
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <div className="inline-flex items-center gap-1 sm:gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4">
                <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
                <span className="text-xs sm:text-sm font-medium text-gray-300">
                  {t.wantToExperience}
                </span>
              </div>
              <h2 className="relative text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
                {t.innovationZones}
              </h2>

              <p className="text-xs sm:text-sm text-gray-400 mt-3 max-w-xl mx-auto mt-6">
                {t.innovationZonesDescription}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
              {experienceCards.map((card, index) => {
                const Icon = card.icon;
                return (
                  <Link key={index} href="#" className="group relative block">
                    <div className="relative h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl sm:rounded-2xl overflow-hidden hover:shadow-2xl hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-500">
                      {/* Gradient hover effect */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                      ></div>

                      {/* Shine effect (same as contact cards) */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                      </div>

                      {/* Icon Container - Same style as contact page icons */}
                      <div className="relative p-4 sm:p-5 md:p-6 pb-0">
                        <div className="relative inline-block">
                          <div
                            className={`absolute inset-0 bg-gradient-to-r ${card.gradient} rounded-xl blur-md opacity-20 group-hover:opacity-40 transition-opacity duration-500`}
                          ></div>
                          <div
                            className={`relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${card.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}
                          >
                            <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-4 sm:p-5 md:p-6 pt-2 sm:pt-3">
                        {/* Tag/Badge */}
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/10 border border-white/20 text-[10px] text-gray-300 mb-2 sm:mb-3">
                          {card.tag}
                        </span>

                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3">
                          {card.title}
                        </h3>

                        <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-3 sm:mb-4">
                          {card.description}
                        </p>

                        {/* Learn more link with arrow (same as contact page) */}
                        <div className="inline-flex items-center gap-1 text-xs sm:text-sm text-blue-400 group-hover:text-blue-300 transition-colors">
                          <span>{t.exploreZone}</span>
                          <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>

                      {/* Bottom accent line (same as contact cards) */}
                      <div
                        className={`absolute bottom-0 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r ${card.gradient} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                      ></div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/*STATS SECTION */}
          <div className="mb-12 sm:mb-16 md:mb-20 relative">
            {/* Section Glow Background */}
            <div className="absolute inset-0 flex justify-center">
              <div className="w-[600px] h-[300px] bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 blur-3xl opacity-40"></div>
            </div>

            {/* HEADER */}
            <div className="text-center mb-10 sm:mb-14 relative z-10">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-4 py-2 mb-5">
                <Cpu className="w-4 h-4 text-purple-400" />
                <span className="text-xs sm:text-sm text-gray-300 tracking-wide">
                  {t.byTheNumbers}
                </span>
              </div>

              {/* Title */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight mb-3">
                {t.innovationImpact}
              </h2>

              {/* Subtitle */}
              <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
                {t.innovationImpactDescription}
              </p>

              {/* Divider */}
              <div className="mt-6 flex justify-center">
                <div className="w-28 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
              </div>
            </div>

            {/* STATS GRID */}
            <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
              {statsData.map((stat, index) => {
                const Icon = stat.icon;

                return (
                  <div
                    key={index}
                    className="group relative rounded-2xl p-[1px] transition-all duration-500 hover:-translate-y-2"
                  >
                    {/* Gradient border on hover */}
                    <div
                      className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${stat.gradient} opacity-0 group-hover:opacity-100 blur-md transition duration-500`}
                    ></div>

                    {/* Card */}
                    <div className="relative bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-2xl p-4 sm:p-6 text-center overflow-hidden">
                      {/* Floating glow orb */}
                      <div
                        className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-r ${stat.gradient} opacity-10 blur-2xl rounded-full`}
                      ></div>

                      {/* Icon */}
                      <div className="relative mb-3">
                        <div
                          className={`absolute inset-0 bg-gradient-to-r ${stat.gradient} blur-lg opacity-20 group-hover:opacity-40 transition`}
                        ></div>
                        <Icon className="relative w-8 h-8 sm:w-10 sm:h-10 text-white mx-auto group-hover:scale-110 transition-transform duration-500" />
                      </div>

                      {/* Value */}
                      <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 tracking-tight">
                        {stat.value}
                      </p>

                      {/* Label */}
                      <p className="text-xs sm:text-sm text-gray-400">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/*CTA SECTION */}
          <div className="relative mt-16 overflow-hidden rounded-xl sm:rounded-2xl lg:rounded-3xl">
            {/* Animated background */}
            <div className="absolute inset-0 bg-[url('/Images/Home/Bread-crum-1.avif')] bg-cover bg-center"></div>

            {/* Floating orbs */}
            <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

            <div className="relative py-8 sm:py-10 md:py-12 lg:py-16 px-4 sm:px-6 md:px-8 text-center backdrop-blur-sm">
              <div className="inline-flex items-center gap-1 sm:gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-5 md:mb-6 lg:mb-8">
                <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                <span className="text-xs sm:text-sm font-medium text-white/90">
                  {t.limitedAvailability}
                </span>
              </div>

              <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-3 md:mb-4">
                {t.ctaTitle}
              </h4>

              <p className="text-white/80 text-xs sm:text-sm md:text-base lg:text-lg mb-4 sm:mb-5 md:mb-6 lg:mb-8 max-w-xl mx-auto px-4">
                {t.ctaDescription}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
                <Link
                  href="https://hpql-healthcare-practitioner.i-diligence.com/login/"
                    target="_blank"
  rel="noopener noreferrer"
                  className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base font-semibold hover:shadow-2xl hover:shadow-blue-500/25 hover:-translate-y-1 transition-all duration-300 inline-flex items-center justify-center gap-2"
                >
                  {t.registerNow}
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                {/* <Link
                  href="#experience"
                  className="group border border-white/30 bg-white/10 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base font-semibold hover:bg-white/20 hover:-translate-y-1 transition-all duration-300 inline-flex items-center justify-center gap-2"
                >
                  {t.viewAllZones}
                  <View className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link> */}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-20 md:h-24 bg-gradient-to-t from-gray-900 to-transparent pointer-events-none"></div>
      </section>
    </>
  );
}
