"use client";
import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Users,
  Mic2,
  BookOpen,
  FlaskConical,
  HeartPulse,
  Brain,
  Stethoscope,
  Calendar,
  Clock,
  MapPin,
  Eye,
  Sparkles,
  TrendingUp,
  Award,
  FileText,
  Video,
  Star,
  MessageCircle,
  Microscope,
  Briefcase,
  UserRound,
  GraduationCap,
} from "lucide-react";
import BreadCrumb from "../../../Components/BreadCrum";
import { useLanguage } from "../../../context/LanguageContext";
import { clinicalKnowledgeForumTranslations } from "../../../il18/whatsOn/clinicalKnowledgeForum";

export default function ClinicalKnowledgeForum() {
  const { language } = useLanguage();
  const t = clinicalKnowledgeForumTranslations[language];

  const [activeDay, setActiveDay] = useState("day1");

  const sessionTracks = [
    { id: "all", name: t.allSessions, icon: BookOpen },
    { id: "keynote", name: t.keynotes, icon: Mic2 },
    { id: "panel", name: t.panelDiscussions, icon: Users },
    { id: "workshop", name: t.workshops, icon: Briefcase },
    { id: "case-study", name: t.caseStudies, icon: FileText },
  ];

  const statsData = [
    {
      icon: Mic2,
      value: "30+",
      label: t.expertSessions,
      gradient: "from-blue-500 to-cyan-400",
    },
    {
      icon: Users,
      value: "50+",
      label: t.renownedSpeakers,
      gradient: "from-purple-500 to-pink-400",
    },
    {
      icon: Award,
      value: "12",
      label: t.cmeCreditsAvailable,
      gradient: "from-amber-500 to-orange-400",
    },
    {
      icon: UserRound,
      value: "500+",
      label: t.healthcareProfessionals,
      gradient: "from-emerald-500 to-teal-500",
    },
  ];

  const agendaData = {
    day1: [
      {
        time: "09:00 AM - 09:45 AM",
        title: t.openingKeynote,
        speaker: t.drSarahSession.split(" • ")[0] || "Dr. Sarah Johnson",
        role: t.drSarahSession.split(" • ")[1] || "Chief of Oncology, Mayo Clinic",
        type: "keynote",
        location: t.mainHallA,
        track: "Oncology",
      },
      {
        time: "10:00 AM - 10:45 AM",
        title: t.aiRadiology,
        speaker: t.drMichaelSession.split(" • ")[0] || "Dr. Michael Chen",
        role: t.drMichaelSession.split(" • ")[1] || "Director of Medical Imaging, Stanford Health",
        type: "keynote",
        location: t.mainHallA,
        track: "Radiology",
      },
      {
        time: "11:00 AM - 11:45 AM",
        title: t.cardiovascularPanel,
        speaker: "Panel Discussion",
        role: t.cardiovascularPanelDesc,
        type: "panel",
        location: t.hallB,
        track: "Cardiology",
      },
      {
        time: "12:00 PM - 12:45 PM",
        title: t.surgicalWorkshop,
        speaker: t.drRobertSession.split(" • ")[0] || "Dr. Robert Williams",
        role: t.drRobertSession.split(" • ")[1] || "Head of Robotic Surgery, Johns Hopkins",
        type: "workshop",
        location: t.workshopRoom1,
        track: "Surgery",
      },
      {
        time: "01:00 PM - 01:45 PM",
        title: t.lunchNetworking,
        speaker: "",
        role: "",
        type: "break",
        location: t.exhibitionHall,
        track: "",
      },
      {
        time: "02:00 PM - 02:45 PM",
        title: t.rareDiseaseCaseStudy,
        speaker: t.drEmilySession.split(" • ")[0] || "Dr. Emily Rodriguez",
        role: t.drEmilySession.split(" • ")[1] || "Clinical Geneticist, Boston Children's",
        type: "case-study",
        location: t.hallC,
        track: "Genetics",
      },
      {
        time: "03:00 PM - 03:45 PM",
        title: t.mentalHealthPanel,
        speaker: "Panel Discussion",
        role: t.mentalHealthPanelDesc,
        type: "panel",
        location: t.hallB,
        track: "Psychiatry",
      },
      {
        time: "04:00 PM - 04:45 PM",
        title: t.closingSession,
        speaker: t.drJamesSession.split(" • ")[0] || "Dr. James Wilson",
        role: t.drJamesSession.split(" • ")[1] || "WHO Director of Research",
        type: "keynote",
        location: t.mainHallA,
        track: "Public Health",
      },
    ],
    day2: [
      {
        time: "09:00 AM - 09:45 AM",
        title: "Keynote: Immunotherapy Breakthroughs",
        speaker: t.drLisaPatel,
        role: t.chiefImmunotherapy,
        type: "keynote",
        location: t.mainHallA,
        track: "Oncology",
      },
      {
        time: "10:00 AM - 10:45 AM",
        title: "Workshop: Clinical Trial Design",
        speaker: "Dr. David Kim",
        role: "Director of Clinical Research, Pfizer",
        type: "workshop",
        location: "Workshop Room 2",
        track: "Research",
      },
      {
        time: "11:00 AM - 11:45 AM",
        title: "Panel: Telemedicine Evolution",
        speaker: "Panel Discussion",
        role: "Digital Health Leaders",
        type: "panel",
        location: t.hallB,
        track: "Digital Health",
      },
      {
        time: "12:00 PM - 12:45 PM",
        title: "Case Study: Gene Therapy Success",
        speaker: "Dr. Maria Garcia",
        role: "Lead Researcher, CRISPR Therapeutics",
        type: "case-study",
        location: t.hallC,
        track: "Genetics",
      },
    ],
  };

  const speakersData = [
    {
      name: t.drSarahJohnson,
      role: t.chiefOncology,
      topic: t.speakingPrecisionMedicine.replace("Speaking on: ", ""),
      image: "👩‍⚕️",
      featured: true,
      gradient: "from-blue-500 to-cyan-400",
    },
    {
      name: t.drMichaelChen,
      role: t.directorImaging,
      topic: t.speakingAIRadiology.replace("Speaking on: ", ""),
      image: "👨‍⚕️",
      featured: true,
      gradient: "from-purple-500 to-pink-400",
    },
    {
      name: t.drRobertWilliams,
      role: t.headRoboticSurgery,
      topic: t.speakingSurgicalInnovation.replace("Speaking on: ", ""),
      image: "👨‍⚕️",
      featured: false,
      gradient: "from-amber-500 to-orange-400",
    },
    {
      name: t.drEmilyRodriguez,
      role: t.clinicalGeneticist,
      topic: t.speakingRareDiseases.replace("Speaking on: ", ""),
      image: "👩‍⚕️",
      featured: false,
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      name: t.drJamesWilson,
      role: t.whoResearchDirector,
      topic: t.speakingGlobalHealth.replace("Speaking on: ", ""),
      image: "👨‍⚕️",
      featured: true,
      gradient: "from-blue-600 to-purple-600",
    },
    {
      name: t.drLisaPatel,
      role: t.chiefImmunotherapy,
      topic: t.speakingCancerResearch.replace("Speaking on: ", ""),
      image: "👩‍⚕️",
      featured: false,
      gradient: "from-cyan-500 to-blue-500",
    },
  ];

  const researchHighlights = [
    {
      title: t.earlyCancerDetection,
      description: t.earlyCancerDetectionDesc,
      category: t.oncology,
      icon: Microscope,
    },
    {
      title: t.aiHeartDisease,
      description: t.aiHeartDiseaseDesc,
      category: t.cardiology,
      icon: Brain,
    },
    {
      title: t.sickleCellTreatment,
      description: t.sickleCellTreatmentDesc,
      category: t.genetics,
      icon: FlaskConical,
    },
    {
      title: t.telemedicineER,
      description: t.telemedicineERDesc,
      category: t.digitalHealth,
      icon: HeartPulse,
    },
  ];

  const currentAgenda =
    activeDay === "day1" ? agendaData.day1 : agendaData.day2;

  // Get translated type label
  const getTypeLabel = (type) => {
    switch (type) {
      case "keynote":
        return t.keynote;
      case "panel":
        return t.panel;
      case "workshop":
        return t.workshop;
      case "case-study":
        return t.caseStudy;
      case "break":
        return t.break || (language === "ar" ? "استراحة" : "Break");
      default:
        return type.charAt(0).toUpperCase() + type.slice(1);
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case "keynote":
        return "from-yellow-500 to-amber-500";
      case "panel":
        return "from-blue-500 to-cyan-500";
      case "workshop":
        return "from-purple-500 to-pink-500";
      case "case-study":
        return "from-emerald-500 to-teal-500";
      case "break":
        return "from-gray-500 to-gray-600";
      default:
        return "from-blue-500 to-cyan-400";
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case "keynote":
        return <Mic2 className="w-3 h-3" />;
      case "panel":
        return <Users className="w-3 h-3" />;
      case "workshop":
        return <Briefcase className="w-3 h-3" />;
      case "case-study":
        return <FileText className="w-3 h-3" />;
      default:
        return null;
    }
  };

  return (
    <>
      <BreadCrumb
        title={t.clinicalKnowledgeForum}
        backgroundImage="/Images/Home/Bread-crum-1.avif"
        path={[{ label: t.whatsOn }, { label: t.clinicalKnowledgeForum }]}
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
              <GraduationCap className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-300" />
              <span className="text-xs sm:text-sm font-medium text-gray-300">
                {t.cmeAccredited}
              </span>
            </div>

            {/* Title - English Version */}
            {language === "en" && (
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 px-2 relative">
                <span className="text-white">Clinical</span>{" "}
                <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-300 bg-clip-text text-transparent">
                  Knowledge
                </span>
                <br />
                <span className="text-white">Forum</span>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-16 sm:w-20 md:w-24 h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
              </h1>
            )}

            {/* Title - Arabic Version */}
            {language === "ar" && (
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 px-2 relative">
                <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-300 bg-clip-text text-transparent">
                  منتدى
                </span>{" "}
                <span className="text-white">المعرفة</span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-300 bg-clip-text text-transparent">
                  السريرية
                </span>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-16 sm:w-20 md:w-24 h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
              </h1>
            )}

            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto px-4">
              {t.heroDescription}
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
                    {t.advancingClinicalExcellence}
                  </h2>

                  <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
                    {t.heroSubDescription}
                  </p>

                  <div className="mt-6 flex flex-wrap justify-center gap-2">
                    {[
                      t.cmeCredits,
                      t.expertSpeakers,
                      t.researchPresentations,
                      t.networking,
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

          {/* ========== SESSION TRACKS (Quick Links) ========== */}
          <div className="mb-12 sm:mb-16 md:mb-20">
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 sm:gap-4">
              {sessionTracks.map((track) => {
                const Icon = track.icon;
                return (
                  <div key={track.id} className="group relative">
                    <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-3 sm:p-4 text-center hover:border-white/20 hover:-translate-y-1 transition-all duration-500 cursor-pointer overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                      <div className="relative">
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 mx-auto mb-1 sm:mb-2 group-hover:scale-110 transition-transform" />
                        <p className="text-[10px] sm:text-xs text-gray-300">
                          {track.name}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ========== AGENDA / SCHEDULE SECTION ========== */}
          <div id="agenda" className="mb-12 sm:mb-16 md:mb-20">
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <div className="inline-flex items-center gap-1 sm:gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4">
                <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
                <span className="text-xs sm:text-sm font-medium text-gray-300">
                  {t.conferenceSchedule}
                </span>
              </div>
              <h2 className="relative text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
                {t.eventAgenda}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-16 sm:w-20 md:w-24 h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
              </h2>
              <p className="text-xs sm:text-sm text-gray-400 mt-3 max-w-xl mx-auto mt-6">
                {t.scheduleDescription}
              </p>
            </div>

            {/* Day Selector */}
            <div className="flex justify-center gap-3 sm:gap-4 mb-8">
              <button
                onClick={() => setActiveDay("day1")}
                className={`px-5 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 ${
                  activeDay === "day1"
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25"
                    : "bg-white/10 border border-white/20 text-gray-300 hover:bg-white/20"
                }`}
              >
                {t.day1}
              </button>
              <button
                onClick={() => setActiveDay("day2")}
                className={`px-5 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 ${
                  activeDay === "day2"
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25"
                    : "bg-white/10 border border-white/20 text-gray-300 hover:bg-white/20"
                }`}
              >
                {t.day2}
              </button>
            </div>

            {/* Agenda Items */}
            <div className="space-y-3 sm:space-y-4">
              {currentAgenda.map((item, idx) => {
                if (item.type === "break") {
                  return (
                    <div
                      key={idx}
                      className="p-3 sm:p-4 rounded-xl bg-white/5 border border-white/10 text-center"
                    >
                      <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
                        <div className="text-sm sm:text-base font-semibold text-blue-400">
                          {item.time}
                        </div>
                        <div className="text-sm sm:text-base text-gray-300">
                          {item.title}
                        </div>
                        <div className="text-xs text-gray-500">
                          {item.location}
                        </div>
                      </div>
                    </div>
                  );
                }

                return (
                  <div key={idx} className="group relative">
                    <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-3 sm:p-4 hover:border-white/20 hover:-translate-y-0.5 transition-all duration-300 overflow-hidden">
                      <div
                        className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${getTypeColor(
                          item.type
                        )}`}
                      ></div>

                      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-3 pl-3">
                        <div className="min-w-[120px]">
                          <div className="text-xs sm:text-sm font-bold text-blue-400">
                            {item.time}
                          </div>
                          <div className="text-[10px] text-gray-500 flex items-center gap-1 mt-0.5">
                            <MapPin className="w-3 h-3" />
                            {item.location}
                          </div>
                        </div>

                        <div className="flex-1">
                          <h3 className="text-sm sm:text-base font-semibold text-white">
                            {item.title}
                          </h3>
                          <p className="text-xs text-gray-400">
                            {item.speaker} • {item.role}
                          </p>
                        </div>

                        <div className="flex items-center gap-2">
                          <span
                            className={`text-[10px] sm:text-xs px-2 py-1 rounded-full bg-gradient-to-r ${getTypeColor(
                              item.type
                            )} text-white inline-flex items-center gap-1`}
                          >
                            {getTypeIcon(item.type)}
                            {getTypeLabel(item.type)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 text-center">
              <Link
                href="#"
                className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors group"
              >
                {t.downloadAgenda}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* ========== FEATURED SPEAKERS ========== */}
          <div className="mb-12 sm:mb-16 md:mb-20">
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <div className="inline-flex items-center gap-1 sm:gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4">
                <Users className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
                <span className="text-xs sm:text-sm font-medium text-gray-300">
                  {t.worldRenownedFaculty}
                </span>
              </div>
              <h2 className="relative text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
                {t.featuredSpeakers}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-16 sm:w-20 md:w-24 h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
              </h2>
              <p className="text-xs sm:text-sm text-gray-400 mt-3 max-w-xl mx-auto mt-6">
                {t.facultyDescription}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
              {speakersData.map((speaker, index) => {
                return (
                  <div key={index} className="group relative">
                    <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-5 hover:border-white/20 hover:-translate-y-1 transition-all duration-500 overflow-hidden">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${speaker.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                      ></div>
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                      </div>

                      <div className="relative flex items-start gap-3 sm:gap-4">
                        {/* Avatar */}
                        <div className="relative">
                          <div
                            className={`absolute inset-0 bg-gradient-to-r ${speaker.gradient} rounded-full blur-md opacity-20 group-hover:opacity-40 transition`}
                          ></div>
                          <div
                            className={`relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br ${speaker.gradient} flex items-center justify-center text-2xl sm:text-3xl group-hover:scale-110 transition-transform duration-500`}
                          >
                            {speaker.image}
                          </div>
                        </div>

                        <div className="flex-1">
                          <h3 className="text-base sm:text-lg font-bold text-white">
                            {speaker.name}
                          </h3>
                          <p className="text-[11px] sm:text-xs text-blue-400 mb-1">
                            {speaker.role}
                          </p>
                          <p className="text-[10px] text-gray-400">
                            {language === "ar" ? "يتحدث عن:" : "Speaking on:"}{" "}
                            {speaker.topic}
                          </p>
                        </div>
                      </div>
                    </div>
                    {speaker.featured && (
                      <div className="absolute top-3 right-3 inline-flex  items-center gap-1 px-2 py-0.5 rounded-full bg-yellow-500/20 border border-yellow-500/30 text-[9px] text-yellow-300">
                        <Star className="w-2.5 h-2.5" />
                        {language === "ar" ? "متحدث رئيسي" : "Keynote Speaker"}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* ========== RESEARCH HIGHLIGHTS ========== */}
          <div className="mb-12 sm:mb-16 md:mb-20">
            <div className="relative group">
              <div className="absolute -inset-10 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 blur-3xl opacity-30 group-hover:opacity-50 transition duration-700"></div>

              <div className="relative bg-white/[0.04] backdrop-blur-2xl border border-white/10 rounded-3xl p-6 sm:p-8 md:p-10 overflow-hidden">
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500/10 blur-3xl rounded-full"></div>

                <div className="relative z-10">
                  <div className="text-center mb-6 sm:mb-8">
                    <div className="inline-flex items-center gap-1 sm:gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4">
                      <FlaskConical className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400" />
                      <span className="text-xs sm:text-sm font-medium text-gray-300">
                        {language === "ar"
                          ? "الإنجازات البحثية"
                          : "Research Breakthroughs"}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">
                      {t.keyFindingsPresented}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-400 max-w-xl mx-auto">
                      {t.researchDescription}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                    {researchHighlights.map((highlight, idx) => {
                      const Icon = highlight.icon;
                      return (
                        <div
                          key={idx}
                          className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300"
                        >
                          <div className="flex items-start gap-3">
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center flex-shrink-0">
                              <Icon className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <div className="flex items-center gap-2 mb-1">
                                <h4 className="text-sm sm:text-base font-semibold text-white">
                                  {highlight.title}
                                </h4>
                                <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-white/10 text-gray-400">
                                  {highlight.category}
                                </span>
                              </div>
                              <p className="text-xs text-gray-300 leading-relaxed">
                                {highlight.description}
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
          <div className="mb-12 sm:mb-16 md:mb-20 relative">
            <div className="absolute inset-0 flex justify-center">
              <div className="w-[600px] h-[300px] bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 blur-3xl opacity-40"></div>
            </div>

            <div className="text-center mb-10 sm:mb-14 relative z-10">
              <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-4 py-2 mb-5">
                <TrendingUp className="w-4 h-4 text-purple-400" />
                <span className="text-xs sm:text-sm text-gray-300 tracking-wide">
                  {t.forumImpact}
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight mb-3">
                {t.knowledgeExchange}
              </h2>

              <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
                {t.forumImpactDesc}
              </p>

              <div className="mt-6 flex justify-center">
                <div className="w-28 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
              </div>
            </div>

            <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
              {statsData.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="group relative rounded-2xl p-[1px] transition-all duration-500 hover:-translate-y-2"
                  >
                    <div
                      className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${stat.gradient} opacity-0 group-hover:opacity-100 blur-md transition duration-500`}
                    ></div>
                    <div className="relative bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-2xl p-4 sm:p-6 text-center overflow-hidden">
                      <div
                        className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-r ${stat.gradient} opacity-10 blur-2xl rounded-full`}
                      ></div>
                      <div className="relative mb-3">
                        <div
                          className={`absolute inset-0 bg-gradient-to-r ${stat.gradient} blur-lg opacity-20 group-hover:opacity-40 transition`}
                        ></div>
                        <Icon className="relative w-8 h-8 sm:w-10 sm:h-10 text-white mx-auto group-hover:scale-110 transition-transform duration-500" />
                      </div>
                      <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 tracking-tight">
                        {stat.value}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-400">
                        {stat.label}
                      </p>
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
                  {t.reserveYourSeat}
                </span>
              </div>

              <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-3 md:mb-4">
                {language === "ar"
                  ? "طوّر معرفتك السريرية"
                  : "Advance Your Clinical Knowledge"}
              </h4>

              <p className="text-white/80 text-xs sm:text-sm md:text-base lg:text-lg mb-4 sm:mb-5 md:mb-6 lg:mb-8 max-w-xl mx-auto px-4">
                {t.reserveDescription}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
                <Link
                  href="/register"
                  className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base font-semibold hover:shadow-2xl hover:shadow-blue-500/25 hover:-translate-y-1 transition-all duration-300 inline-flex items-center justify-center gap-2"
                >
                  {t.registerNow}
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="#agenda"
                  className="group border border-white/30 bg-white/10 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base font-semibold hover:bg-white/20 hover:-translate-y-1 transition-all duration-300 inline-flex items-center justify-center gap-2"
                >
                  {t.viewAgenda}
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
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