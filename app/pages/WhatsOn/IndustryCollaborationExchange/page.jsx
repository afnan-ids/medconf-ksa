"use client";
import { useState } from "react";
import Link from "next/link";
import {
  ChevronRight,
  Handshake,
  Building2,
  FlaskConical,
  Microscope,
  HeartPulse,
  Briefcase,
  Users,
  Calendar,
  MapPin,
  Eye,
  Sparkles,
  TrendingUp,
  Award,
  FileText,
  Video,
  Star,
  MessageCircle,
  Network,
  Target,
  Globe,
  Clock,
  BadgeCheck,
  Phone,
  Mail,
  Link as LinkIcon,
} from "lucide-react";
import BreadCrumb from "../../../Components/BreadCrum";

import { useLanguage } from "../../../context/LanguageContext";
import { translations } from "../../../il18/whatsOn/industryCollabrationExchange";

export default function IndustryCollaborationExchange() {
  const [activeTab, setActiveTab] = useState("opportunities");

  const { language } = useLanguage();
  const t = translations[language];

  const partnershipCategories = [
    {
      title: t.hospitalPharma,
      icon: Building2,
      description: t.hospitalPharmaDesc,
      opportunities: 12,
      gradient: "from-blue-500 to-cyan-400",
      color: "blue",
    },
    {
      title: t.medTechResearch,
      icon: Microscope,
      description: t.medTechResearchDesc,
      opportunities: 8,
      gradient: "from-purple-500 to-pink-400",
      color: "purple",
    },
    {
      title: t.digitalHealth,
      icon: HeartPulse,
      description: t.digitalHealthDesc,
      opportunities: 15,
      gradient: "from-amber-500 to-orange-400",
      color: "amber",
    },
    {
      title: t.academicIndustry,
      icon: Briefcase,
      description: t.academicIndustryDesc,
      opportunities: 6,
      gradient: "from-emerald-500 to-teal-500",
      color: "emerald",
    },
  ];

  const collaborationOpportunities = [
    {
      title: t.clinicalTrialPartnership,
      organization: t.pfizerResearchLabs,
      type: "Hospital-Pharma",
      description: t.clinicalTrialDesc,
      requirements: t.clinicalTrialRequirement,
      deadline: "June 30, 2026",
      matchScore: 92,
      gradient: "from-blue-500 to-cyan-400",
    },
    {
      title: t.aiDiagnosticToolValidation,
      organization: t.googleHealth,
      type: "Digital Health",
      description: t.aiDiagnosticDesc,
      requirements: t.aiDiagnosticRequirement,
      deadline: "July 15, 2026",
      matchScore: 88,
      gradient: "from-purple-500 to-pink-400",
    },
    {
      title: t.wearableDeviceResearch,
      organization: t.appleHealth,
      type: "MedTech-Research",
      description: t.wearableDeviceDesc,
      requirements: t.wearableDeviceRequirement,
      deadline: "August 1, 2026",
      matchScore: 85,
      gradient: "from-amber-500 to-orange-400",
    },
    {
      title: t.genomicResearchInitiative,
      organization: t.illumina,
      type: "Academic-Industry",
      description: t.genomicResearchDesc,
      requirements: t.genomicResearchRequirement,
      deadline: "September 30, 2026",
      matchScore: 90,
      gradient: "from-emerald-500 to-teal-500",
    },
  ];

  const successStories = [
    {
      title: t.aiPoweredRadiologyPartnership,
      partners: t.stanfordSiemens,
      result: t.stanfordSiemensDesc,
      year: "2025",
      icon: Award,
      gradient: "from-blue-500 to-cyan-400",
    },
    {
      title: t.remotePatientMonitoring,
      partners: t.clevelandPhilips,
      result: t.clevelandPhilipsDesc,
      year: "2025",
      icon: HeartPulse,
      gradient: "from-purple-500 to-pink-400",
    },
    {
      title: t.genomicsResearchConsortium,
      partners: t.mayoIlluminaPfizer,
      result: t.mayoIlluminaPfizerDesc,
      year: "2024",
      icon: FlaskConical,
      gradient: "from-amber-500 to-orange-400",
    },
  ];

  const matchmakingEvents = [
    {
      time: "10:00 AM - 12:00 PM",
      event: "Hospital-Pharma Speed Networking",
      location: "Collaboration Hall A",
      participants: "15 hospitals, 8 pharma companies",
      type: "B2B Meetings",
    },
    {
      time: "1:00 PM - 3:00 PM",
      event: "MedTech Innovation Pitch Session",
      location: "Innovation Stage",
      participants: "20 startups, 30 investors",
      type: "Pitching",
    },
    {
      time: "3:30 PM - 5:30 PM",
      event: "Research Partnership Roundtables",
      location: "Collaboration Hall B",
      participants: "12 research institutions",
      type: "Workshop",
    },
    {
      time: "6:00 PM - 8:00 PM",
      event: "Networking Gala Reception",
      location: "Grand Ballroom",
      participants: "All attendees",
      type: "Networking",
    },
  ];

  return (
    <>
      <BreadCrumb
        title={t.industryCollaborationExchange}
        backgroundImage="/Images/Home/Bread-crum-1.avif"
        path={[
          { label: t.whatsOn },
          { label: t.industryCollaborationExchange },
        ]}
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
          {/* ========== HERO SECTION ========== */}
          <div className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24">
            <div className="inline-flex items-center gap-1 sm:gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6 md:mb-8">
              <Handshake className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-300" />
              <span className="text-xs sm:text-sm font-medium text-gray-300">
                {t.bridgingHealthcareInnovation}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 px-2 relative text-white">
              {t.industryCollaborationExchange}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-16 sm:w-20 md:w-24 h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
            </h1>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto px-4">
              {t.platformForPartnerships}
            </p>
          </div>

          {/* ========== INTRO SECTION ========== */}
          <div className="mb-12 sm:mb-16 md:mb-20">
            <div className="max-w-6xl mx-auto text-center relative group">
              <div className="absolute -inset-10 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 blur-3xl opacity-40 group-hover:opacity-70 transition duration-700"></div>

              <div className="relative bg-white/[0.04] backdrop-blur-2xl border border-white/10 rounded-3xl sm:rounded-[2.5rem] p-6 sm:p-10 md:p-12 overflow-hidden transition-all duration-500">
                <div className="absolute -top-20 -right-20 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full"></div>
                <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full"></div>

                <div className="relative z-10">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-4 tracking-tight">
                    {t.wherePartnershipsDrive}
                  </h2>

                  <p className="text-sm text-justify sm:text-base md:text-lg md:text-center text-gray-300 leading-relaxed max-w-3xl mx-auto">
                    {t.heroDescription}
                  </p>

                  <div className="mt-6 flex flex-wrap justify-center gap-2">
                    {[
                      t.b2bMeetings,
                      t.jointVentures,
                      "Research Grants",
                      t.technologyTransfer,
                    ].map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 text-xs sm:text-sm rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 cursor-default"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ========== PARTNERSHIP CATEGORIES ========== */}
          <div className="mb-10 sm:mb-12 md:mb-16 lg:mb-20">
            <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
              <div className="inline-flex items-center gap-1 sm:gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-3 sm:mb-4">
                <Network className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
                <span className="text-[10px] sm:text-xs md:text-sm font-medium text-gray-300">
                  {t.collaborationAreas}
                </span>
              </div>
              <h2 className="relative text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-3 px-4">
                {t.partnershipCategories}
                <div className="absolute -bottom-3 sm:-bottom-4 md:-bottom-5 left-1/2 -translate-x-1/2 w-12 sm:w-16 md:w-20 lg:w-24 h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
              </h2>
              <p className="text-xs sm:text-sm text-gray-400 mt-4 sm:mt-5 md:mt-6 max-w-xl mx-auto px-4">
                {t.exploreCollaboration}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6 px-3 sm:px-0">
              {partnershipCategories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <div key={index} className="group relative h-full">
                    <div className="relative h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-5 hover:border-white/20 hover:-translate-y-1 transition-all duration-500 overflow-hidden flex flex-col">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                      ></div>
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                      </div>

                      <div className="relative flex flex-col h-full">
                        {/* Content - grows to fill space */}
                        <div className="flex-1">
                          <div className="relative inline-block mb-2 sm:mb-3">
                            <div
                              className={`absolute inset-0 bg-gradient-to-r ${category.gradient} rounded-xl blur-md opacity-20 group-hover:opacity-40 transition`}
                            ></div>
                            <div
                              className={`relative w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}
                            >
                              <Icon className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                            </div>
                          </div>

                          <h3 className="text-sm sm:text-base md:text-lg font-bold text-white mb-1">
                            {category.title}
                          </h3>
                          <p className="text-[10px] sm:text-xs text-gray-300 mb-2 sm:mb-3 md:mb-4 leading-relaxed line-clamp-3 sm:line-clamp-none">
                            {category.description}
                          </p>
                        </div>

                        {/* Footer - sticks to bottom */}
                        <div className="flex items-center justify-between mt-auto pt-2 sm:pt-3 border-t border-white/10">
                          <span className="text-[10px] text-blue-400 truncate">
                            {category.opportunities} active opportunities
                          </span>
                          <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-all flex-shrink-0" />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ========== COLLABORATION OPPORTUNITIES / MATCHMAKING TABS ========== */}
          <div className="mb-10 sm:mb-12 md:mb-16 lg:mb-20">
            <div className="text-center mb-6 sm:mb-8 md:mb-10">
              <div className="inline-flex items-center gap-1 sm:gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-3 sm:mb-4">
                <Target className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
                <span className="text-[10px] sm:text-xs md:text-sm font-medium text-gray-300">
                  {t.findYourMatch}
                </span>
              </div>
              <h2 className="relative text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-3 px-4">
                {t.collaborationOpportunities}
                <div className="absolute -bottom-3 sm:-bottom-4 left-1/2 -translate-x-1/2 w-12 sm:w-16 md:w-20 lg:w-24 h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
              </h2>
            </div>

            {/* Tab Buttons */}
            <div className="flex justify-center gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8 px-4 sm:px-0">
              <button
                onClick={() => setActiveTab("opportunities")}
                className={`px-4 sm:px-5 md:px-6 py-1.5 sm:py-2 md:py-3 rounded-full text-xs sm:text-sm md:text-base font-semibold transition-all duration-300 ${
                  activeTab === "opportunities"
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25"
                    : "bg-white/10 border border-white/20 text-gray-300 hover:bg-white/20"
                }`}
              >
                {t.openOpportunities}
              </button>
              <button
                onClick={() => setActiveTab("matchmaking")}
                className={`px-4 sm:px-5 md:px-6 py-1.5 sm:py-2 md:py-3 rounded-full text-xs sm:text-sm md:text-base font-semibold transition-all duration-300 ${
                  activeTab === "matchmaking"
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25"
                    : "bg-white/10 border border-white/20 text-gray-300 hover:bg-white/20"
                }`}
              >
                {t.matchmakingEvents}
              </button>
            </div>

            {/* Open Opportunities Tab */}
            {activeTab === "opportunities" && (
              <div className="space-y-3 sm:space-y-4 md:space-y-5 px-3 sm:px-0">
                {collaborationOpportunities.map((opportunity, idx) => (
                  <div key={idx} className="group relative">
                    <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 hover:border-white/20 hover:-translate-y-0.5 transition-all duration-300 overflow-hidden">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${opportunity.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                      ></div>

                      <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-3 sm:gap-4">
                        <div className="flex-1 w-full">
                          <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-2 mb-1 flex-wrap">
                            <h3 className="text-sm sm:text-base md:text-lg font-bold text-white">
                              {opportunity.title}
                            </h3>
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-gray-400 inline-block w-fit">
                              {opportunity.type}
                            </span>
                          </div>
                          <p className="text-xs text-gray-400 mb-0.5">
                            {opportunity.organization}
                          </p>
                          <p className="text-[10px] sm:text-xs md:text-sm text-gray-300 mb-2 line-clamp-2 sm:line-clamp-3">
                            {opportunity.description}
                          </p>
                          <div className="flex flex-col sm:flex-row flex-wrap gap-1 sm:gap-2 text-[10px] text-gray-500">
                            <span className="truncate">
                              📋 {opportunity.requirements}
                            </span>
                            <span className="hidden sm:inline">•</span>
                            <span>⏰ Deadline: {opportunity.deadline}</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto justify-between sm:justify-end">
                          <div className="text-center flex-shrink-0">
                            <div className="text-lg sm:text-xl md:text-2xl font-bold text-blue-400">
                              {opportunity.matchScore}%
                            </div>
                            <div className="text-[8px] sm:text-[9px] text-gray-500">
                              {t.matchScore}
                            </div>
                          </div>
                          <button className="inline-flex items-center gap-1 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-[10px] sm:text-xs font-semibold hover:shadow-lg transition-all group/btn flex-shrink-0">
                            {t.applyNow}
                            <ChevronRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                          </button>
                        </div>
                      </div>

                      <div
                        className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${opportunity.gradient} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                      ></div>
                    </div>
                  </div>
                ))}

                <div className="text-center mt-3 sm:mt-4">
                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm text-blue-400 hover:text-blue-300 transition-colors group"
                  >
                    {t.viewAllOpportunities}
                    <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            )}

            {/* Matchmaking Events Tab */}
            {activeTab === "matchmaking" && (
              <div className="space-y-2 sm:space-y-3 md:space-y-4 px-3 sm:px-0">
                {matchmakingEvents.map((event, idx) => (
                  <div key={idx} className="group relative">
                    <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-3 sm:p-4 hover:border-white/20 transition-all duration-300">
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-3">
                        <div className="min-w-[100px] sm:min-w-[120px] md:min-w-[140px] w-full sm:w-auto">
                          <div className="text-sm sm:text-base font-bold text-blue-400">
                            {event.time}
                          </div>
                          <div className="text-[10px] text-gray-500 flex items-center gap-1">
                            <MapPin className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                            <span className="truncate">{event.location}</span>
                          </div>
                        </div>

                        <div className="flex-1 w-full sm:w-auto">
                          <h3 className="text-sm sm:text-base font-semibold text-white truncate">
                            {event.event}
                          </h3>
                          <p className="text-[10px] sm:text-xs text-gray-400 truncate">
                            {event.participants}
                          </p>
                        </div>

                        <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-end">
                          <span className="text-[10px] px-2 py-1 rounded-full bg-white/10 text-gray-400 whitespace-nowrap">
                            {event.type}
                          </span>
                          <button className="text-[10px] sm:text-xs text-blue-400 hover:text-blue-300 transition-colors whitespace-nowrap">
                            {t.registerInterest} →
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* ========== SUCCESS STORIES ========== */}
          <div className="mb-10 sm:mb-12 md:mb-16 lg:mb-20">
            <div className="relative group">
              <div className="absolute -inset-4 sm:-inset-6 md:-inset-8 lg:-inset-10 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 blur-3xl opacity-30 group-hover:opacity-50 transition duration-700"></div>

              <div className="relative bg-white/[0.04] backdrop-blur-2xl border border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 overflow-hidden">
                <div className="absolute -top-20 -right-20 w-48 sm:w-64 h-48 sm:h-64 bg-blue-500/10 blur-3xl rounded-full"></div>

                <div className="relative z-10">
                  <div className="text-center mb-4 sm:mb-6 md:mb-8">
                    <div className="inline-flex items-center gap-1 sm:gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-3 sm:mb-4">
                      <Award className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400" />
                      <span className="text-[10px] sm:text-xs md:text-sm font-medium text-gray-300">
                        {t.provenPartnerships}
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-1.5 sm:mb-2 px-4">
                      {t.successStories}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-400 max-w-xl mx-auto px-4">
                      {t.successStoriesDesc}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 px-2 sm:px-0">
                    {successStories.map((story, idx) => {
                      const Icon = story.icon;
                      return (
                        <div
                          key={idx}
                          className="p-3 sm:p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 group/story hover:-translate-y-1"
                        >
                          <div className="flex items-start gap-2.5 sm:gap-3">
                            <div
                              className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br ${story.gradient} flex items-center justify-center flex-shrink-0`}
                            >
                              <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="text-xs sm:text-sm font-semibold text-white mb-0.5 sm:mb-1 truncate">
                                {story.title}
                              </h4>
                              <p className="text-[10px] sm:text-[11px] text-blue-400 mb-0.5 sm:mb-1 truncate">
                                {story.partners}
                              </p>
                              <p className="text-[10px] sm:text-xs text-gray-300 line-clamp-2 sm:line-clamp-3">
                                {story.result}
                              </p>
                              <p className="text-[9px] sm:text-[10px] text-gray-500 mt-0.5 sm:mt-1">
                                {story.year}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ========== STATS SECTION ========== */}
          <div className="mb-10 sm:mb-12 md:mb-16 lg:mb-20 relative">
            <div className="absolute inset-0 flex justify-center">
              <div className="w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] h-[200px] sm:h-[250px] md:h-[300px] bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 blur-3xl opacity-40"></div>
            </div>

            <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-14 relative z-10">
              <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-3 sm:mb-4 md:mb-5">
                <TrendingUp className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-400" />
                <span className="text-[10px] sm:text-xs md:text-sm text-gray-300 tracking-wide">
                  {t.exchangeImpact}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white tracking-tight mb-2 sm:mb-3 px-4">
                {t.partnershipEcosystem}
              </h2>

              <p className="text-gray-400 text-xs sm:text-sm md:text-base max-w-xl mx-auto px-4">
                {t.partnershipEcosystemDesc}
              </p>

              <div className="mt-4 sm:mt-5 md:mt-6 flex justify-center">
                <div className="w-16 sm:w-20 md:w-24 lg:w-28 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
              </div>
            </div>

            <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6 px-3 sm:px-0">
              {[
                {
                  icon: Building2,
                  value: "200+",
                  label: t.participatingOrganizations,
                  gradient: "from-blue-500 to-cyan-400",
                },
                {
                  icon: Handshake,
                  value: "85+",
                  label: t.activePartnerships,
                  gradient: "from-purple-500 to-pink-400",
                },
                {
                  icon: Target,
                  value: "$50M+",
                  label: t.jointFundingSecured,
                  gradient: "from-amber-500 to-orange-400",
                },
                {
                  icon: Globe,
                  value: "25+",
                  label: t.countriesRepresented,
                  gradient: "from-emerald-500 to-teal-500",
                },
              ].map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="group relative rounded-xl sm:rounded-2xl p-[1px] transition-all duration-500 hover:-translate-y-1 sm:hover:-translate-y-2 h-full"
                  >
                    <div
                      className={`absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r ${stat.gradient} opacity-0 group-hover:opacity-100 blur-md transition duration-500`}
                    ></div>
                    <div className="relative bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 lg:p-6 text-center overflow-hidden h-full flex flex-col items-center justify-center">
                      <div
                        className={`absolute -top-10 -right-10 w-20 sm:w-24 md:w-28 lg:w-32 h-20 sm:h-24 md:h-28 lg:h-32 bg-gradient-to-r ${stat.gradient} opacity-10 blur-2xl rounded-full`}
                      ></div>

                      <div className="relative flex flex-col items-center justify-center w-full">
                        <div className="relative mb-1.5 sm:mb-2 md:mb-3">
                          <div
                            className={`absolute inset-0 bg-gradient-to-r ${stat.gradient} blur-lg opacity-20 group-hover:opacity-40 transition`}
                          ></div>
                          <Icon className="relative w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-10 lg:h-10 text-white mx-auto group-hover:scale-110 transition-transform duration-500" />
                        </div>

                        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-0.5 sm:mb-1 tracking-tight">
                          {stat.value}
                        </p>
                        <p className="text-[9px] sm:text-[10px] md:text-xs lg:text-sm text-gray-400 leading-tight max-w-[90%] sm:max-w-full">
                          {stat.label}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ========== CTA SECTION ========== */}
          <div className="relative mt-16 overflow-hidden rounded-xl sm:rounded-2xl lg:rounded-3xl">
            <div className="absolute inset-0 bg-[url('/Images/Home/Bread-crum-1.avif')] bg-cover bg-center"></div>

            <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

            <div className="relative py-8 sm:py-10 md:py-12 lg:py-16 px-4 sm:px-6 md:px-8 text-center backdrop-blur-sm">
              <div className="inline-flex items-center gap-1 sm:gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-5 md:mb-6 lg:mb-8">
                <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                <span className="text-xs sm:text-sm font-medium text-white/90">
                  {t.joinTheExchange}
                </span>
              </div>

              <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-3 md:mb-4">
                {t.readyToForge}
              </h4>

              <p className="text-white/80 text-xs sm:text-sm md:text-base lg:text-lg mb-4 sm:mb-5 md:mb-6 lg:mb-8 max-w-xl mx-auto px-4">
                {t.joinExchangeDesc}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
                <Link
                  href="https://hpql-sponsor.i-diligence.com/Registration/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base font-semibold hover:shadow-2xl hover:shadow-blue-500/25 hover:-translate-y-1 transition-all duration-300 inline-flex items-center justify-center gap-2"
                >
                  {t.registerInterest}
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                {/* <Link
                  href="#"
                  className="group border border-white/30 bg-white/10 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base font-semibold hover:bg-white/20 hover:-translate-y-1 transition-all duration-300 inline-flex items-center justify-center gap-2"
                >
                  {t.browseOpportunities}
                  <Eye className="w-4 h-4 sm:w-5 sm:h-5" />
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
