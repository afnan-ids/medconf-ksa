"use client";

import { useState, useEffect, useRef } from "react";
import {
  Calendar,
  Megaphone,
  Users,
  Radio,
  Video,
  CheckCircle,
  ChevronRight,
  Sparkles,
  Trophy,
  TrendingUp,
  Share2,
  Monitor,
  Newspaper,
  Clapperboard,
  Handshake,
  BarChart3,
  LucideIcon,
  Star,
} from "lucide-react";
import BreadCrumb from "../../../Components/BreadCrum";
import Link from "next/link";
import { useLanguage } from "../../../context/LanguageContext";
import { translations } from "../../../il18/aboutUs/ourjourney";

export default function ourjourney() {
  const { language } = useLanguage();
  const t = translations[language];

  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const sectionRefs = useRef([]);

  const journeySteps = [
    {
      id: "campaign",
      titleEn: t.sponsorshipCampaignTitle,
      titleAr: t.sponsorshipCampaignTitleAr || t.sponsorshipCampaignTitle,
      timeline: t.sponsorshipCampaignTimeline,
      icon: Megaphone,
      color: "from-blue-500 to-cyan-400",
      gradient: "blue",
      points: [
        {
          icon: Trophy,
          textEn: t.supportingEntities,
          textAr: t.supportingEntitiesAr || t.supportingEntities,
        },
        {
          icon: Share2,
          textEn: t.introductoryContent,
          textAr: t.introductoryContentAr || t.introductoryContent,
        },
      ],
      description: t.sponsorshipCampaignDescription,
      stats: { [t.partners]: "15+", [t.reach]: "100K+" },
    },
    {
      id: "registration",
      titleEn: t.registrationCampaignTitle,
      titleAr: t.registrationCampaignTitleAr || t.registrationCampaignTitle,
      timeline: t.registrationCampaignTimeline,
      icon: Users,
      color: "from-purple-500 to-pink-400",
      gradient: "purple",
      points: [
        {
          icon: Users,
          textEn: t.speakersAndSessions,
          textAr: t.speakersAndSessionsAr || t.speakersAndSessions,
        },
        {
          icon: Trophy,
          textEn: t.sponsorRecognition,
          textAr: t.sponsorRecognitionAr || t.sponsorRecognition,
        },
      ],
      description: t.registrationCampaignDescription,
      stats: { [t.registrations]: "2500+", [t.speakers]: "40+" },
    },
    {
      id: "digital",
      titleEn: t.digitalRegistrationTitle,
      titleAr: t.digitalRegistrationTitleAr || t.digitalRegistrationTitle,
      timeline: t.digitalRegistrationTimeline,
      icon: Monitor,
      color: "from-amber-500 to-orange-400",
      gradient: "amber",
      points: [
        {
          icon: Newspaper,
          textEn: t.traditionalAds,
          textAr: t.traditionalAdsAr || t.traditionalAds,
        },
        {
          icon: Calendar,
          textEn: t.agendaPromotion,
          textAr: t.agendaPromotionAr || t.agendaPromotion,
        },
      ],
      description: t.digitalRegistrationDescription,
      stats: { [t.impressions]: "500K+", [t.clicks]: "25K+" },
    },
    {
      id: "during",
      titleEn: t.duringEventTitle,
      titleAr: t.duringEventTitleAr || t.duringEventTitle,
      timeline: t.duringEventTimeline,
      icon: Radio,
      color: "from-green-500 to-emerald-400",
      gradient: "green",
      points: [
        {
          icon: Clapperboard,
          textEn: t.dailyCoverage,
          textAr: t.dailyCoverageAr || t.dailyCoverage,
        },
        {
          icon: Users,
          textEn: t.insightsInterviews,
          textAr: t.insightsInterviewsAr || t.insightsInterviews,
        },
        {
          icon: Handshake,
          textEn: t.sponsorSupport,
          textAr: t.sponsorSupportAr || t.sponsorSupport,
        },
      ],
      description: t.duringEventDescription,
      stats: { [t.sessions]: "60+", [t.attendees]: "3000+" },
    },
    {
      id: "after",
      titleEn: t.afterEventTitle,
      titleAr: t.afterEventTitleAr || t.afterEventTitle,
      timeline: t.afterEventTimeline,
      icon: Video,
      color: "from-red-500 to-rose-400",
      gradient: "red",
      points: [
        {
          icon: Video,
          textEn: t.highlightVideo,
          textAr: t.highlightVideoAr || t.highlightVideo,
        },
        {
          icon: Handshake,
          textEn: t.partnerThanks,
          textAr: t.partnerThanksAr || t.partnerThanks,
        },
        {
          icon: BarChart3,
          textEn: t.eventStatistics,
          textAr: t.eventStatisticsAr || t.eventStatistics,
        },
      ],
      description: t.afterEventDescription,
      stats: { [t.reachAfter]: "1M+", [t.satisfaction]: "96%" },
    },
  ];

  useEffect(() => {
    const observers = sectionRefs.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible((prev) => ({ ...prev, [index]: true }));
            }
          });
        },
        { threshold: 0.3, rootMargin: "0px 0px -100px 0px" },
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  const getGradientBg = (gradient) => {
    const gradients = {
      blue: "from-blue-600/20 via-cyan-600/10 to-transparent",
      purple: "from-purple-600/20 via-pink-600/10 to-transparent",
      amber: "from-amber-600/20 via-orange-600/10 to-transparent",
      green: "from-green-600/20 via-emerald-600/10 to-transparent",
      red: "from-red-600/20 via-rose-600/10 to-transparent",
    };
    return gradients[gradient] || gradients.blue;
  };

  return (
    <>
      <BreadCrumb
        title={t.exhibitionJourney}
        backgroundImage="/Images/Home/Bread-crum-1.avif"
        path={[{ label: t.exhibitionJourney }]}
      />

      <section className="relative min-h-screen py-10 sm:py-12 md:py-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-900">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <TrendingUp className="w-4 h-4 text-yellow-300" />
              <span className="text-sm font-medium text-gray-300">
                {t.yourPathToSuccess}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 px-2">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-300 bg-clip-text text-transparent">
                {t.exhibitionJourneyMilestones}
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t.journeyDescription}
            </p>
          </div>

          {/* Journey Timeline - Main Content */}
          <div className="relative">
            {/* Vertical Line (Desktop) */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-blue-500/30 to-transparent transform -translate-x-1/2"></div>

            {/* Journey Steps */}
            {journeySteps.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeStep === index;
              const visible = isVisible[index];

              return (
                <div
                  key={step.id}
                  ref={(el) => (sectionRefs.current[index] = el)}
                  className={`relative mb-16 lg:mb-24 transition-all duration-700 transform ${
                    visible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                >
                  {/* Desktop Layout - Alternating Cards */}
                  <div className="hidden lg:flex items-center">
                    <div
                      className={`w-1/2 ${index % 2 === 0 ? "pr-16" : "pl-16 order-2"}`}
                    >
                      <div
                        className={`bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:shadow-2xl transition-all duration-500 cursor-pointer group ${
                          isActive ? "ring-2 ring-blue-500/50" : ""
                        }`}
                        onMouseEnter={() => setActiveStep(index)}
                      >
                        <div className="relative mb-4">
                          <div
                            className={`absolute inset-0 bg-gradient-to-r ${step.color} rounded-xl blur-md opacity-20 group-hover:opacity-40 transition-opacity`}
                          ></div>
                          <div
                            className={`relative w-14 h-14 rounded-xl bg-gradient-to-r ${step.color} flex items-center justify-center`}
                          >
                            <Icon className="w-7 h-7 text-white" />
                          </div>
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-1">
                          {step.titleEn}
                        </h3>
                        <p className="text-lg text-gray-200 mb-3" dir="rtl">
                          {step.titleAr}
                        </p>

                        <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-3 py-1 mb-4">
                          <Calendar className="w-3 h-3 text-blue-400" />
                          <span className="text-xs text-gray-300">
                            {step.timeline}
                          </span>
                        </div>

                        <p className="text-gray-200 mb-4">{step.description}</p>

                        <div className="space-y-2">
                          {step.points.map((point, idx) => {
                            const PointIcon = point.icon;
                            return (
                              <div
                                key={idx}
                                className="flex items-center gap-2 text-sm"
                              >
                                <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                                <div className="flex w-full justify-between">
                                  <span className="text-gray-300">
                                    {point.textEn}
                                  </span>
                                  <span
                                    className="text-gray-200 text-xs"
                                    dir="rtl"
                                  >
                                    {" "}
                                    {point.textAr}
                                  </span>
                                </div>
                              </div>
                            );
                          })}
                        </div>

                        <div className="grid grid-cols-2 gap-3 mt-4 pt-4 border-t border-white/10">
                          {Object.entries(step.stats).map(([key, value]) => (
                            <div key={key} className="justify-self-center">
                              <p className="text-xl font-bold text-blue-400 justify-self-center w-full">
                                {value}
                              </p>
                              <p className="text-xs text-gray-500 capitalize justify-self-center">
                                {key}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center z-10">
                      <div
                        className={`relative w-12 h-12 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center border-4 border-gray-900 transition-all duration-300 ${
                          isActive
                            ? "scale-125 shadow-lg shadow-blue-500/50"
                            : ""
                        }`}
                      >
                        <span className="text-white font-bold text-sm">
                          {index + 1}
                        </span>
                      </div>
                    </div>

                    <div className="w-1/2"></div>
                  </div>

                  {/* Mobile Layout - Vertical Cards */}

                  <div className="lg:hidden w-full">
                    <div className="relative pl-12 pr-2">
                      {/* Timeline Vertical Bar Connector */}
                      <div className="absolute left-4 top-4 bottom-0 w-px bg-gradient-to-b from-blue-500 via-blue-500/30 to-transparent"></div>

                      {/* Step Index Badge Node */}
                      <div className="absolute left-0 top-7 w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center z-10 shadow-lg shadow-blue-500/20 border-2 border-slate-950 shrink-0">
                        <span className="text-white font-black text-xs tracking-tighter">
                          {index + 1}
                        </span>
                      </div>

                      {/* Premium Content Card */}
                      <div
                        className={`flex flex-col bg-slate-900/60 backdrop-blur-xl border border-white/[0.08] rounded-2xl p-5 sm:p-6 transition-all duration-300 relative overflow-hidden ${
                          isActive
                            ? "ring-1 ring-blue-500/40 shadow-2xl shadow-blue-500/10 bg-slate-900/80"
                            : ""
                        }`}
                      >
                        {/* Subtle Internal Glow Effect */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

                        {/* Header Element Row */}
                        <div className="flex items-center gap-3.5 mb-4 relative z-10">
                          <div
                            className={`w-11 h-11 rounded-xl bg-gradient-to-br ${step.color || "from-cyan-500 to-blue-600"} flex items-center justify-center shrink-0 shadow-inner shadow-white/20`}
                          >
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="text-base sm:text-lg font-bold text-white tracking-tight leading-snug">
                              {step.titleEn}
                            </h3>
                            {step.titleAr && (
                              <p
                                className="text-gray-400 text-xs mt-0.5 tracking-wide font-medium"
                                dir="rtl"
                              >
                                {step.titleAr}
                              </p>
                            )}
                          </div>
                        </div>

                        {/* Timeline Context Pill */}
                        <div className="inline-flex items-center gap-1.5 bg-white/[0.06] border border-white/[0.08] rounded-lg px-2.5 py-1 mb-4 self-start shadow-sm">
                          <Calendar className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                          <span className="text-xs text-gray-300 font-medium tracking-wide">
                            {step.timeline}
                          </span>
                        </div>

                        {/* Description Body Paragraph */}
                        <p className="text-sm text-gray-400/90 mb-5 leading-relaxed tracking-wide font-normal">
                          {step.description}
                        </p>

                        {/* Bullet Feature Item Groups */}
                        <div className="space-y-3 mb-6 relative z-10">
                          {step.points.map((point, idx) => (
                            <div
                              key={idx}
                              className="flex items-start gap-2.5 group/item"
                            >
                              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5 drop-shadow-[0_0_4px_rgba(52,211,153,0.2)]" />
                              <div className="flex flex-col min-w-0 flex-1">
                                <span className="text-xs sm:text-sm text-gray-200 font-medium leading-normal tracking-wide">
                                  {point.textEn}
                                </span>
                                {point.textAr && (
                                  <span
                                    className="text-gray-500 text-[11px] mt-0.5 tracking-wide leading-normal font-medium"
                                    dir="rtl"
                                  >
                                    {point.textAr}
                                  </span>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Bottom Fixed Stats Grid Footprint */}
                        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/[0.06] mt-auto relative z-10">
                          {Object.entries(step.stats).map(([key, value]) => (
                            <div key={key} className="min-w-0">
                              <p className="text-xl sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-300 tracking-tight leading-none mb-1">
                                {value}
                              </p>
                              <p className="text-[11px] text-gray-500 font-semibold uppercase tracking-wider truncate">
                                {key.replace(/([A-Z])/g, " $1")}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA Section */}
       <div className="relative mt-12 sm:mt-16 md:mt-24 lg:mt-32 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
  <div className="relative overflow-hidden rounded-2xl md:rounded-3xl shadow-2xl">
    {/* Background Image */}
    <div className="absolute inset-0 bg-[url('/Images/Home/Bread-crum-1.avif')] bg-cover bg-center"></div>

    {/* Floating orbs - pointer-events-none added to prevent touch blockages */}
    <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none"></div>
    <div className="absolute bottom-0 left-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl pointer-events-none"></div>

    {/* Content Container - Aligned padding for premium appearance */}
    <div className="relative py-12 sm:py-16 md:py-20 px-6 sm:px-8 md:px-12 text-center backdrop-blur-md bg-black/10">
      
      {/* Badge Tag */}
      <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3.5 py-1.5 md:px-4 md:py-2 mb-4 md:mb-6">
        <Star className="w-3.5 h-3.5 md:w-4 md:h-4 text-white shrink-0" />
        <span className="text-xs md:text-sm font-medium text-white/90 tracking-wide">
          {t.joinUs}
        </span>
      </div>

      {/* Main Heading */}
      <h4 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-3 md:mb-4 tracking-tight max-w-2xl mx-auto leading-tight">
        {t.readyToBegin}
      </h4>

      {/* Sub-description Paragraph */}
      <p className="text-white/80 text-sm md:text-base lg:text-lg mb-6 md:mb-8 max-w-xl mx-auto leading-relaxed">
        {t.ctaDescription}
      </p>

      {/* Responsive Centered Actions Section */}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full max-w-xs sm:max-w-none mx-auto">
        <Link
          href="/pages/Events"
          className="group w-full sm:w-auto bg-white text-gray-900 px-6 py-3.5 md:px-8 md:py-4 rounded-full text-sm md:text-base font-bold hover:shadow-2xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 inline-flex items-center justify-center gap-2 shrink-0"
        >
          <span>{t.registerNow}</span>
          <ChevronRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform shrink-0" />
        </Link>
      </div>

    </div>
  </div>
</div>

        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-900 to-transparent"></div>
      </section>
    </>
  );
}
