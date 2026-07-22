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
                  <div className="lg:hidden">
                    <div className="relative pl-10">
                      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/50 to-transparent"></div>

                      <div
                        className={`absolute left-0 top-0 w-8 h-8 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center z-10`}
                      >
                        <span className="text-white font-bold text-xs">
                          {index + 1}
                        </span>
                      </div>

                      <div
                        className={`bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 transition-all duration-500 ${
                          isActive ? "ring-2 ring-blue-500/50" : ""
                        }`}
                      >
                        <div
                          className={`relative w-12 h-12 rounded-xl bg-gradient-to-r ${step.color} flex items-center justify-center mb-3`}
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </div>

                        <h3 className="text-xl font-bold text-white">
                          {step.titleEn}
                        </h3>
                        <p className="text-gray-400 mb-2" dir="rtl">
                          {step.titleAr}
                        </p>

                        <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-2 py-0.5 mb-3">
                          <Calendar className="w-3 h-3 text-blue-400" />
                          <span className="text-xs text-gray-300">
                            {step.timeline}
                          </span>
                        </div>

                        <p className="text-sm text-gray-400 mb-3">
                          {step.description}
                        </p>

                        <div className="space-y-1.5 mb-3">
                          {step.points.map((point, idx) => {
                            const PointIcon = point.icon;
                            return (
                              <div
                                key={idx}
                                className="flex items-start gap-2 text-xs"
                              >
                                <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-300">
                                  {point.textEn}
                                </span>
                                <span
                                  className="text-gray-500 text-[10px]"
                                  dir="rtl"
                                >
                                  {point.textAr}
                                </span>
                              </div>
                            );
                          })}
                        </div>

                        <div className="flex gap-4 pt-3 border-t border-white/10">
                          {Object.entries(step.stats).map(([key, value]) => (
                            <div key={key}>
                              <p className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                                {value}
                              </p>
                              <p className="text-[10px] text-gray-500 capitalize">
                                {key}
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
          <div className="relative mt-16 overflow-hidden rounded-xl sm:rounded-2xl lg:rounded-3xl">
            <div className="absolute inset-0 bg-[url('/Images/Home/Bread-crum-1.avif')] bg-cover bg-center"></div>
            <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

            <div className="relative py-8 sm:py-10 md:py-12 lg:py-16 px-4 sm:px-6 md:px-8 text-center backdrop-blur-sm">
              <div className="inline-flex items-center gap-1 sm:gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-5 md:mb-6 lg:mb-8">
                <Star className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                <span className="text-xs sm:text-sm font-medium text-white/90">
                  {t.joinUs}
                </span>
              </div>

              <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-3 md:mb-4">
                {t.readyToBegin}
              </h4>

              <p className="text-white/80 text-xs sm:text-sm md:text-base lg:text-lg mb-4 sm:mb-5 md:mb-6 lg:mb-8 max-w-xl mx-auto px-4">
                {t.ctaDescription}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
                <Link
                  href="/pages/Events"
                  className="group bg-white text-gray-900 px-5 sm:px-6 md:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base font-semibold hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 inline-flex items-center justify-center gap-2"
                >
                  {t.registerNow}
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-900 to-transparent"></div>
      </section>
    </>
  );
}
