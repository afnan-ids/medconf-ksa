"use client";
import { useState } from "react";
import Link from "next/link";
import {
  ChevronRight,
  Compass,
  MapPin,
  Clock,
  Users,
  Microscope,
  HeartPulse,
  Brain,
  Stethoscope,
  Calendar,
  Sparkles,
  TrendingUp,
  Award,
  Star,
  Navigation,
  Flag,
  BadgeCheck,
  Route,
  StarIcon,
  Headphones,
  CheckCircle,
  Zap,
  Shield,
} from "lucide-react";
import BreadCrumb from "../../../Components/BreadCrum";

import { useLanguage } from "../../../context/LanguageContext";
import { translations } from "../../../il18/whatsOn/guidedExhibitionTrours";

export default function GuidedExhibitionTours() {
  const [selectedTour, setSelectedTour] = useState("innovation");
  const [hoveredStop, setHoveredStop] = useState(null);

  const { language } = useLanguage();
  const t = translations[language];

  const tourSchedules = [
    {
      time: "10:00 AM",
      duration: "90 min",
      theme: t.innovationSpotlight,
      guide: "Dr. Sarah Chen",
      language: "English",
      maxGroup: 15,
      available: 12,
    },
    {
      time: "11:30 AM",
      duration: "90 min",
      theme: t.clinicalExcellence,
      guide: "Dr. Michael Roberts",
      language: "English",
      maxGroup: 15,
      available: 8,
    },
    {
      time: "1:00 PM",
      duration: "60 min",
      theme: t.digitalHealth,
      guide: "Lisa Wong",
      language: "English",
      maxGroup: 12,
      available: 10,
    },
    {
      time: "2:30 PM",
      duration: "90 min",
      theme: t.researchInnovations,
      guide: "Dr. James Wilson",
      language: "English",
      maxGroup: 15,
      available: 15,
    },
    {
      time: "4:00 PM",
      duration: "60 min",
      theme: t.surgicalTech,
      guide: "Dr. Emily Martinez",
      language: "English",
      maxGroup: 12,
      available: 7,
    },
  ];

  const tourThemes = [
    {
      id: "innovation",
      title: t.innovationSpotlight,
      icon: Sparkles,
      description: t.innovationSpotlightDesc,
      duration: "90 min",
      stops: 8,
      color: "blue",
    },
    {
      id: "clinical",
      title: t.clinicalExcellence,
      icon: Stethoscope,
      description: t.clinicalExcellenceDesc,
      duration: "90 min",
      stops: 7,
      color: "purple",
    },
    {
      id: "digital",
      title: t.digitalHealth,
      icon: HeartPulse,
      description: t.digitalHealthDesc,
      duration: "60 min",
      stops: 5,
      color: "amber",
    },
    {
      id: "research",
      title: t.researchInnovations,
      icon: Brain,
      description: t.researchInnovationsDesc,
      duration: "90 min",
      stops: 6,
      color: "emerald",
    },
    {
      id: "surgical",
      title: t.surgicalTech,
      icon: Microscope,
      description: t.surgicalTechDesc,
      duration: "60 min",
      stops: 6,
      color: "cyan",
    },
  ];

  const tourStops = {
    innovation: [
      {
        booth: "#101",
        name: t.siemensHealthineers,
        highlight: t.aiPoweredMRI,
        type: t.medicalImaging,
        time: "15 min",
      },
      {
        booth: "#205",
        name: t.intuitiveSurgical,
        highlight: t.daVinciRoboticSystem,
        type: t.robotics,
        time: "20 min",
      },
      {
        booth: "#112",
        name: t.medtronic,
        highlight: t.nextGenCardiacDevices,
        type: t.cardiovascular,
        time: "15 min",
      },
      {
        booth: "#156",
        name: t.geHealthcare,
        highlight: t.aiEnabledImaging,
        type: t.digitalHealth,
        time: "15 min",
      },
      {
        booth: "#089",
        name: t.bostonScientific,
        highlight: t.innovativeEndoscopySolutions,
        type: t.surgical,
        time: "10 min",
      },
      {
        booth: "#203",
        name: t.philipsHealthcare,
        highlight: t.advancedPatientMonitoring,
        type: t.monitoring,
        time: "10 min",
      },
      {
        booth: "#167",
        name: t.stryker,
        highlight: t.roboticJointReplacement,
        type: t.orthopedics,
        time: "15 min",
      },
      {
        booth: "#134",
        name: t.abbottLaboratories,
        highlight: t.diabetesCareInnovations,
        type: t.chronicCare,
        time: "10 min",
      },
    ],
    clinical: [
      {
        booth: "#112",
        name: t.medtronic,
        highlight: "Minimally Invasive Surgery",
        type: "Surgical",
        time: "15 min",
      },
      {
        booth: "#101",
        name: t.siemensHealthineers,
        highlight: "Clinical Diagnostics",
        type: "Diagnostics",
        time: "15 min",
      },
      {
        booth: "#205",
        name: t.intuitiveSurgical,
        highlight: "Clinical Outcomes",
        type: "Surgical",
        time: "15 min",
      },
      {
        booth: "#189",
        name: "Baxter",
        highlight: "Acute Care Solutions",
        type: "Critical Care",
        time: "10 min",
      },
      {
        booth: "#156",
        name: t.geHealthcare,
        highlight: "Clinical Workflow Solutions",
        type: "IT Solutions",
        time: "10 min",
      },
      {
        booth: "#203",
        name: t.philipsHealthcare,
        highlight: "Patient Monitoring Systems",
        type: "Monitoring",
        time: "10 min",
      },
      {
        booth: "#221",
        name: "Zimmer Biomet",
        highlight: "Orthopedic Clinical Solutions",
        type: "Orthopedics",
        time: "10 min",
      },
    ],
    digital: [
      {
        booth: "#203",
        name: "Philips Healthcare",
        highlight: "Telehealth Platform",
        type: "Telemedicine",
        time: "15 min",
      },
      {
        booth: "#156",
        name: "GE Healthcare",
        highlight: "AI Diagnostics Suite",
        type: "AI Solutions",
        time: "15 min",
      },
      {
        booth: "#108",
        name: "Epic Systems",
        highlight: "Cloud EHR Platform",
        type: "EHR",
        time: "10 min",
      },
      {
        booth: "#089",
        name: "Cerner",
        highlight: "Population Health Analytics",
        type: "Analytics",
        time: "10 min",
      },
      {
        booth: "#205",
        name: "Google Health",
        highlight: "AI in Medical Imaging",
        type: "AI",
        time: "10 min",
      },
    ],
    research: [
      {
        booth: "#156",
        name: "GE Healthcare",
        highlight: "Research Imaging Solutions",
        type: "Imaging",
        time: "15 min",
      },
      {
        booth: "#112",
        name: "Medtronic",
        highlight: "Clinical Trial Devices",
        type: "Research",
        time: "15 min",
      },
      {
        booth: "#101",
        name: "Siemens Healthineers",
        highlight: "Research Collaborations",
        type: "Partnerships",
        time: "15 min",
      },
      {
        booth: "#205",
        name: "Illumina",
        highlight: "Genomic Research Tools",
        type: "Genomics",
        time: "15 min",
      },
      {
        booth: "#134",
        name: "Pfizer",
        highlight: "Clinical Research Programs",
        type: "Pharma",
        time: "15 min",
      },
      {
        booth: "#167",
        name: "Mayo Clinic",
        highlight: "Academic Research",
        type: "Academic",
        time: "10 min",
      },
    ],
    surgical: [
      {
        booth: "#205",
        name: "Intuitive Surgical",
        highlight: "Robotic Surgery Demo",
        type: "Robotics",
        time: "20 min",
      },
      {
        booth: "#112",
        name: "Medtronic",
        highlight: "Surgical Navigation Systems",
        type: "Navigation",
        time: "15 min",
      },
      {
        booth: "#167",
        name: "Stryker",
        highlight: "Joint Replacement Robotics",
        type: "Robotics",
        time: "15 min",
      },
      {
        booth: "#189",
        name: "Olympus",
        highlight: "Endoscopic Surgical Systems",
        type: "Endoscopy",
        time: "10 min",
      },
      {
        booth: "#203",
        name: "Karl Storz",
        highlight: "OR Integration Solutions",
        type: "OR Tech",
        time: "10 min",
      },
      {
        booth: "#221",
        name: "Zimmer Biomet",
        highlight: "Surgical Instruments",
        type: "Instruments",
        time: "10 min",
      },
    ],
  };

  const tourGuides = [
    {
      name: t.drSarahChen,
      role: t.medicalTechnologySpecialist,
      expertise: t.drSarahExpertise,
      image: "👩‍⚕️",
      yearsExp: 12,
    },
    {
      name: t.drMichaelRoberts,
      role: t.clinicalInnovationDirector,
      expertise: t.drMichaelExpertise,
      image: "👨‍⚕️",
      yearsExp: 15,
    },
    {
      name: t.lisaWong,
      role: t.digitalHealthLead,
      expertise: t.lisaExpertise,
      image: "👩‍💻",
      yearsExp: 8,
    },
    {
      name: t.jamesWilson,
      role: t.researchPartner,
      expertise: t.jamesExpertise,
      image: "👨‍🔬",
      yearsExp: 10,
    },
  ];

  const currentStops = tourStops[selectedTour] || tourStops.innovation;
  const currentTheme = tourThemes.find((t) => t.id === selectedTour);

  const getColorStyles = (color) => {
    const styles = {
      blue: "from-blue-500 to-blue-600",
      purple: "from-purple-500 to-purple-600",
      amber: "from-amber-500 to-amber-600",
      emerald: "from-emerald-500 to-emerald-600",
      cyan: "from-cyan-500 to-cyan-600",
    };
    return styles[color] || styles.blue;
  };

  const getLightColor = (color) => {
    const styles = {
      blue: "text-blue-400",
      purple: "text-purple-400",
      amber: "text-amber-400",
      emerald: "text-emerald-400",
      cyan: "text-cyan-400",
    };
    return styles[color] || styles.blue;
  };

  return (
    <>
      <BreadCrumb
        title={t.guidedExhibitionTours}
        backgroundImage="/Images/Home/Bread-crum-1.avif"
        path={[{ label: t.whatsOn }, { label: t.guidedExhibitionTours }]}
      />

      <section className="relative min-h-screen py-16 md:py-20 lg:py-24 overflow-hidden">
        {/* Background - Kept the same */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-900">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/3 left-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section - Minimalist */}
          <div className="text-center max-w-4xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 mb-6">
              <Compass className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-gray-300">
                {t.expertLedExperiences}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              {t.guidedExhibitionTours}
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
              {t.heroDescription}
            </p>
          </div>

          {/* Tour Themes - Minimal Cards */}
        <div className="mb-16 sm:mb-20">
  <div className="text-center mb-8 sm:mb-10 md:mb-12">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4 px-4">
      {t.chooseYourPath}
    </h2>
    <div className="w-16 sm:w-20 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-5 px-3 sm:px-0">
    {tourThemes.map((theme) => {
      const Icon = theme.icon;
      const isSelected = selectedTour === theme.id;
      return (
        <button
          key={theme.id}
          onClick={() => setSelectedTour(theme.id)}
          className={`group text-left transition-all duration-300 w-full ${
            isSelected ? "scale-[1.02] sm:scale-[1.02]" : "hover:scale-[1.01]"
          }`}
        >
          <div
            className={`p-3 sm:p-4 md:p-5 rounded-xl border transition-all duration-300 h-full flex flex-col ${
              isSelected
                ? `bg-gradient-to-br ${getColorStyles(theme.color)} border-transparent shadow-lg`
                : "bg-white/5 border-white/10 hover:border-white/20"
            }`}
          >
            <div
              className={`mb-2 sm:mb-3 ${isSelected ? "text-white" : `text-${theme.color}-400`}`}
            >
              <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
            </div>
            <h3
              className={`text-sm sm:text-base font-semibold mb-1 ${isSelected ? "text-white" : "text-white"}`}
            >
              {theme.title}
            </h3>
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-[10px] sm:text-xs mb-1.5 sm:mb-2">
              <span
                className={isSelected ? "text-white/70" : "text-gray-400"}
              >
                <Clock className="w-2.5 h-2.5 sm:w-3 sm:h-3 inline mr-1" />
                {theme.duration}
              </span>
              <span
                className={isSelected ? "text-white/70" : "text-gray-400"}
              >
                <Flag className="w-2.5 h-2.5 sm:w-3 sm:h-3 inline mr-1" />
                {theme.stops} stops
              </span>
            </div>
            <p
              className={`text-[10px] sm:text-xs leading-relaxed flex-1 ${isSelected ? "text-white/70" : "text-gray-400"}`}
            >
              {theme.description}
            </p>
          </div>
        </button>
      );
    })}
  </div>
</div>

          {/* Tour Stops - Clean Timeline */}
       {currentTheme && (
  <div className="mb-16 sm:mb-20">
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 mb-6 sm:mb-8 px-3 sm:px-0">
      <div className="w-full sm:w-auto">
        <h3
          className={`text-xl sm:text-2xl font-bold text-white ${getLightColor(currentTheme.color)}`}
        >
          {currentTheme.title}
        </h3>
        <p className="text-gray-400 text-xs sm:text-sm mt-0.5 sm:mt-1">
          {currentTheme.description}
        </p>
      </div>
      <Link
        href="#schedule"
        className="px-4 sm:px-5 py-1.5 sm:py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-medium transition-all duration-300 inline-flex items-center gap-1.5 sm:gap-2 flex-shrink-0 w-full sm:w-auto justify-center"
      >
        {t.bookATour} <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
      </Link>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 px-3 sm:px-0">
      {currentStops.map((stop, idx) => (
        <div
          key={idx}
          className="group relative"
          onMouseEnter={() => setHoveredStop(idx)}
          onMouseLeave={() => setHoveredStop(null)}
        >
          <div className="bg-white/5 border border-white/10 rounded-xl p-3 sm:p-4 hover:bg-white/10 transition-all duration-300">
            <div className="flex items-start gap-2.5 sm:gap-3">
              <div
                className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-r ${getColorStyles(currentTheme.color)} flex items-center justify-center text-white text-xs sm:text-sm font-bold flex-shrink-0`}
              >
                {idx + 1}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-2 mb-0.5 sm:mb-1">
                  <span className="text-[10px] sm:text-xs font-mono text-blue-400 truncate">
                    {stop.booth}
                  </span>
                  <span className="text-[10px] sm:text-xs text-gray-500 flex-shrink-0">
                    {stop.time}
                  </span>
                </div>
                <h4 className="text-sm sm:text-base font-semibold text-white mb-0.5 sm:mb-1 truncate">
                  {stop.name}
                </h4>
                <p className="text-xs sm:text-sm text-gray-400 line-clamp-2 sm:line-clamp-none">
                  {stop.highlight}
                </p>
                <span className="inline-block mt-1.5 sm:mt-2 text-[9px] sm:text-xs px-1.5 sm:px-2 py-0.5 rounded-full bg-white/5 text-gray-400">
                  {stop.type}
                </span>
              </div>
              <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-500 group-hover:text-blue-400 transition-colors flex-shrink-0 mt-0.5" />
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
)}
          {/* Schedule - Minimal Table Style */}
     <div id="schedule" className="mb-16 sm:mb-20">
  <div className="text-center mb-8 sm:mb-10">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-3 px-4">
      {t.dailySchedule}
    </h2>
    <p className="text-gray-400 text-sm sm:text-base px-4">{t.reserveYourSpot}</p>
  </div>

  <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
    <div className="overflow-x-auto">
      <table className="w-full min-w-[600px] sm:min-w-full">
        <thead className="bg-white/5 border-b border-white/10">
          <tr>
            <th className="text-left p-3 sm:p-4 text-xs sm:text-sm text-gray-300 font-medium">
              Time
            </th>
            <th className="text-left p-3 sm:p-4 text-xs sm:text-sm text-gray-300 font-medium">
              Tour
            </th>
            <th className="text-left p-3 sm:p-4 text-xs sm:text-sm text-gray-300 font-medium hidden sm:table-cell">
              Guide
            </th>
            <th className="text-left p-3 sm:p-4 text-xs sm:text-sm text-gray-300 font-medium">
              Availability
            </th>
            <th className="text-left p-3 sm:p-4 text-xs sm:text-sm text-gray-300 font-medium"></th>
          </tr>
        </thead>
        <tbody>
          {tourSchedules.map((schedule, idx) => (
            <tr
              key={idx}
              className="border-b border-white/5 hover:bg-white/5 transition-colors"
            >
              <td className="p-3 sm:p-4">
                <div className="font-semibold text-white text-sm sm:text-base">
                  {schedule.time}
                </div>
                <div className="text-[10px] sm:text-xs text-gray-500">
                  {schedule.duration}
                </div>
              </td>
              <td className="p-3 sm:p-4">
                <div className="text-sm sm:text-base text-white">
                  {schedule.theme} Tour
                </div>
                <div className="text-[10px] sm:text-xs text-gray-500">
                  {schedule.language}
                </div>
              </td>
              <td className="p-3 sm:p-4 hidden sm:table-cell">
                <div className="text-sm sm:text-base text-white">{schedule.guide}</div>
                <div className="text-[10px] sm:text-xs text-gray-500">
                  Max {schedule.maxGroup} people
                </div>
              </td>
              <td className="p-3 sm:p-4">
                <span className="text-green-400 font-medium text-sm sm:text-base">
                  {schedule.available} spots
                </span>
                <div className="text-[10px] sm:text-xs text-gray-500">available</div>
              </td>
              <td className="p-3 sm:p-4">
                <button className="px-3 sm:px-4 py-1.5 sm:py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-medium transition-colors w-full sm:w-auto whitespace-nowrap">
                  Reserve
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
</div>

          {/* Guides - Minimal Cards */}
        <div className="mb-16 sm:mb-20">
  <div className="text-center mb-8 sm:mb-10">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-3 px-4">
      {t.expertGuides}
    </h2>
    <p className="text-gray-400 text-sm sm:text-base px-4">{t.expertGuidesDesc}</p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 px-3 sm:px-0">
    {tourGuides.map((guide, index) => (
      <div
        key={index}
        className="bg-white/5 border border-white/10 rounded-xl p-4 sm:p-5 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
      >
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-xl sm:text-2xl flex-shrink-0">
            {guide.image}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-sm sm:text-base font-semibold text-white truncate">
              {guide.name}
            </h3>
            <p className="text-xs sm:text-sm text-blue-400 truncate">{guide.role}</p>
            <p className="text-[10px] sm:text-xs text-gray-500 mt-0.5 sm:mt-1">
              {guide.yearsExp}+ years exp
            </p>
          </div>
        </div>
        <div className="mt-3 pt-3 border-t border-white/10">
          <p className="text-[10px] sm:text-xs text-gray-400 line-clamp-2 sm:line-clamp-none">
            Expertise: {guide.expertise}
          </p>
        </div>
      </div>
    ))}
  </div>
</div>
          {/* Stats - Clean Numbers */}
        <div className="mb-16 sm:mb-20">
  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6 px-3 sm:px-0">
    {[
      { icon: Navigation, value: "8+", label: t.dailyTours },
      { icon: Users, value: "15", label: t.maxGroupSize },
      { icon: Award, value: "100%", label: t.expertGuides },
      { icon: BadgeCheck, value: "90%", label: t.satisfaction },
    ].map((stat, index) => {
      const Icon = stat.icon;
      return (
        <div
          key={index}
          className="text-center p-4 sm:p-5 md:p-6 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:-translate-y-1 transition-all duration-300"
        >
          <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-blue-400 mx-auto mb-2 sm:mb-3" />
          <p className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-0.5 sm:mb-1">
            {stat.value}
          </p>
          <p className="text-[10px] sm:text-xs md:text-sm text-gray-400 leading-tight">
            {stat.label}
          </p>
        </div>
      );
    })}
  </div>
</div>

          <div className="relative mt-16 overflow-hidden rounded-xl sm:rounded-2xl lg:rounded-3xl">
            {/* Animated background */}
            <div className="absolute inset-0 bg-[url('/Images/Home/Bread-crum-1.avif')] bg-cover bg-center"></div>

            {/* Floating orbs */}
            <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

            <div className="relative py-8 sm:py-10 md:py-12 lg:py-16 px-4 sm:px-6 md:px-8 text-center backdrop-blur-sm">
              <div className="inline-flex items-center gap-1 sm:gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-5 md:mb-6 lg:mb-8">
                <Star className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                <span className="text-xs sm:text-sm font-medium text-white/90">
                  {t.dontMissOut}
                </span>
              </div>

              <h4 className="text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-3 md:mb-4">
                {t.ctaDescription}
              </h4>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/register"
                  className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 inline-flex items-center justify-center gap-2"
                >
                  {t.bookATour} <ChevronRight className="w-4 h-4" />
                </Link>
                <Link
                  href="#"
                  className="px-6 py-3 border border-white/30 text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 inline-flex items-center justify-center gap-2"
                >
                  {t.privateGroup} <Users className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
