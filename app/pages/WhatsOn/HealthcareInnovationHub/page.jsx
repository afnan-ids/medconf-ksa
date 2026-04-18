// pages/whats-on/healthcare-innovation-hub.js

"use client";
import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Rocket,
  Microscope,
  HeartPulse,
  Cpu,
  FlaskConical,
  TrendingUp,
  Calendar,
  Sparkles,
  Users,
  Briefcase,
  BadgeCheck,
  Clock,
  MapPin,
  Eye,
  Star,
  Brain,
  Watch,
  Dna,
  Monitor,
  Bot,
  Pill,
  Heart,
} from "lucide-react";
import BreadCrumb from "../../../Components/BreadCrum";

export default function HealthcareInnovationHub() {
  const [activeCategory, setActiveCategory] = useState("all");

  const companiesData = [
    {
      name: "MediAI Solutions",
      logo: Brain,
      category: "digital-health",
      description:
        "AI-powered diagnostic platform that predicts disease progression with 94% accuracy using patient data.",
      tags: ["AI Diagnostics", "Predictive Analytics", "Cloud-Based"],
      booth: "Booth #A12",
      featured: true,
      gradient: "from-blue-500 to-cyan-400",
    },
    {
      name: "HealthTrack Wearables",
      logo: Watch,
      category: "medtech",
      description:
        "Next-gen wearable sensors for continuous glucose monitoring and cardiac health tracking.",
      tags: ["Wearables", "Remote Monitoring", "IoT"],
      booth: "Booth #B05",
      featured: false,
      gradient: "from-purple-500 to-pink-400",
    },
    {
      name: "Genomic Research Lab",
      logo: Dna,
      category: "biotech",
      description:
        "Revolutionary gene sequencing technology for personalized medicine and rare disease detection.",
      tags: ["Genomics", "Personalized Medicine", "Research"],
      booth: "Booth #C08",
      featured: true,
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      name: "TeleCare Platform",
      logo: Monitor,
      category: "digital-health",
      description:
        "Integrated telemedicine solution with AI triage, EHR integration, and multi-language support.",
      tags: ["Telemedicine", "EHR", "AI Triage"],
      booth: "Booth #D03",
      featured: false,
      gradient: "from-amber-500 to-orange-400",
    },
    {
      name: "Surgical Robotics Inc",
      logo: Bot,
      category: "medtech",
      description:
        "Minimally invasive surgical robots with haptic feedback and 4K 3D visualization.",
      tags: ["Robotics", "Surgery", "Precision"],
      booth: "Booth #E11",
      featured: true,
      gradient: "from-blue-600 to-purple-600",
    },
    {
      name: "BioPharma Innovations",
      logo: Pill,
      category: "biotech",
      description:
        "Novel drug delivery systems using nanotechnology for targeted cancer therapy.",
      tags: ["Nanotech", "Drug Delivery", "Oncology"],
      booth: "Booth #F07",
      featured: false,
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      name: "Mental Health AI",
      logo: Heart,
      category: "digital-health",
      description:
        "AI-powered mental health companion app providing CBT-based interventions and crisis detection.",
      tags: ["Mental Health", "AI", "Mobile App"],
      booth: "Booth #G02",
      featured: false,
      gradient: "from-purple-600 to-pink-500",
    },
    {
      name: "NanoMed Devices",
      logo: Microscope,
      category: "medtech",
      description:
        "Nano-scale biosensors for early disease detection and real-time biomarker monitoring.",
      tags: ["Nanotech", "Biosensors", "Early Detection"],
      booth: "Booth #H14",
      featured: false,
      gradient: "from-green-500 to-emerald-400",
    },
  ];

  const filteredCompanies =
    activeCategory === "all"
      ? companiesData
      : companiesData.filter((c) => c.category === activeCategory);

  const categories = [
    { id: "all", name: "All Innovations", icon: Sparkles },
    { id: "digital-health", name: "Digital Health", icon: HeartPulse },
    { id: "medtech", name: "Medical Devices", icon: Microscope },
    { id: "biotech", name: "Biotechnology", icon: FlaskConical },
  ];

  const pitchSchedule = [
    {
      time: "10:30 AM",
      company: "MediAI Solutions",
      topic: "AI in Early Disease Detection",
      stage: "Main Stage",
    },
    {
      time: "11:45 AM",
      company: "Genomic Research Lab",
      topic: "Personalized Medicine Revolution",
      stage: "Innovation Stage",
    },
    {
      time: "1:30 PM",
      company: "Surgical Robotics Inc",
      topic: "Future of Minimally Invasive Surgery",
      stage: "Main Stage",
    },
    {
      time: "3:00 PM",
      company: "HealthTrack Wearables",
      topic: "Wearable Tech in Chronic Care",
      stage: "Innovation Stage",
    },
  ];

  return (
    <>
      <BreadCrumb
        title="Healthcare Innovation Hub"
        backgroundImage="/Images/Home/Bread-crum-1.avif"
        path={[{ label: "Whats On" }, { label: "Healthcare Innovation Hub" }]}
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
              <Rocket className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-300" />
              <span className="text-xs sm:text-sm font-medium text-gray-300">
                Startup & Innovation Showcase
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 px-2 relative">
              <span className="text-white">Healthcare</span>{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-300 bg-clip-text text-transparent">
                Innovation
              </span>
              <br />
              <span className="text-white">Hub</span>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-16 sm:w-20 md:w-24 h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
            </h1>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto px-4">
              A dedicated space for startups and companies presenting new
              healthcare solutions, digital health platforms, and medical
              research innovations.
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
                    Where{" "}
                    <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      Innovation Meets Opportunity
                    </span>
                  </h2>

                  <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
                    Discover groundbreaking solutions from{" "}
                    <span className="text-blue-400 font-medium">
                      50+ startups
                    </span>{" "}
                    and{" "}
                    <span className="text-cyan-300">established companies</span>{" "}
                    at the forefront of healthcare transformation. From{" "}
                    <span className="text-purple-300">AI diagnostics</span> to{" "}
                    <span className="text-emerald-300">
                      next-gen medical devices
                    </span>
                    , connect with pioneers shaping the future of medicine.
                  </p>

                  <div className="mt-6 flex flex-wrap justify-center gap-2">
                    {[
                      "Meet Founders",
                      "Live Demos",
                      "Investment Opportunities",
                      "Networking",
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

          {/* ========== FEATURED COMPANIES GRID ========== */}
          <div id="companies" className="mb-12 sm:mb-16 md:mb-20">
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <div className="inline-flex items-center gap-1 sm:gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4">
                <Building2 className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
                <span className="text-xs sm:text-sm font-medium text-gray-300">
                  Featured Innovators
                </span>
              </div>
              <h2 className="relative text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
                Meet the{" "}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  Pioneers
                </span>
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-16 sm:w-20 md:w-24 h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
              </h2>
              <p className="text-xs sm:text-sm text-gray-400 mt-3 max-w-xl mx-auto mt-6">
                Discover innovative companies transforming healthcare
              </p>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10">
              {categories.map((cat) => {
                const Icon = cat.icon;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                      activeCategory === cat.id
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25"
                        : "bg-white/10 border border-white/20 text-gray-300 hover:bg-white/20"
                    }`}
                  >
                    <Icon className="w-3 h-3 sm:w-4 sm:h-4" />
                    {cat.name}
                  </button>
                );
              })}
            </div>

            {/* Companies Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
              {filteredCompanies.map((company, index) => {
                return (
                  <Link key={index} href="#" className="group relative block">
                    <div className="relative h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl sm:rounded-2xl overflow-hidden hover:shadow-2xl hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-500">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${company.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                      ></div>

                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                      </div>

                      {/* Featured Badge */}
                      {company.featured && (
                        <div className="absolute top-3 right-3 z-20">
                          <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-gradient-to-r from-yellow-500 to-amber-500 text-[10px] font-semibold text-white">
                            <Star className="w-3 h-3" />
                            Featured
                          </span>
                        </div>
                      )}

                    
                      {/* Logo Area  */}
                      <div className="relative p-4 sm:p-5 md:p-6 pb-0">
                        <div className="relative inline-block">
                          <div
                            className={`absolute inset-0 bg-gradient-to-r ${company.gradient} rounded-xl blur-md opacity-20 group-hover:opacity-40 transition-opacity duration-500`}
                          ></div>
                          <div
                            className={`relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br ${company.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}
                          >
                            {/* Render the Icon component instead of emoji text */}
                            <company.logo className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-4 sm:p-5 md:p-6 pt-2 sm:pt-3">
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1">
                          {company.name}
                        </h3>

                        {/* Booth Number */}
                        <div className="inline-flex items-center gap-1 text-[10px] sm:text-xs text-blue-400 mb-2">
                          <MapPin className="w-3 h-3" />
                          {company.booth}
                        </div>

                        <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-3 sm:mb-4">
                          {company.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1.5 mb-3 sm:mb-4">
                          {company.tags.map((tag, idx) => (
                            <span
                              key={idx}
                              className="inline-flex px-2 py-0.5 rounded-full bg-white/10 border border-white/20 text-[9px] sm:text-[10px] text-gray-400"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Visit Booth Button */}
                        <div className="inline-flex items-center gap-1 text-xs sm:text-sm text-blue-400 group-hover:text-blue-300 transition-colors">
                          <span>Visit Booth</span>
                          <Eye className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>

                      <div
                        className={`absolute bottom-0 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r ${company.gradient} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                      ></div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* ========== PITCH ARENA / DEMO SCHEDULE ========== */}
          <div className="mb-12 sm:mb-16 md:mb-20">
            <div className="relative group">
              <div className="absolute -inset-10 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 blur-3xl opacity-30 group-hover:opacity-50 transition duration-700"></div>

              <div className="relative bg-white/[0.04] backdrop-blur-2xl border border-white/10 rounded-3xl p-6 sm:p-8 md:p-10 overflow-hidden">
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500/10 blur-3xl rounded-full"></div>

                <div className="relative z-10">
                  <div className="text-center mb-6 sm:mb-8">
                    <div className="inline-flex items-center gap-1 sm:gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4">
                      <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400" />
                      <span className="text-xs sm:text-sm font-medium text-gray-300">
                        Pitch Arena Schedule
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">
                      Live{" "}
                      <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                        Presentations
                      </span>
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-400 max-w-xl mx-auto">
                      Watch startups pitch their innovations to investors and
                      industry experts
                    </p>
                  </div>

                  <div className="space-y-3 sm:space-y-4">
                    {pitchSchedule.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-3 sm:p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group/item"
                      >
                        <div className="flex items-center gap-3 sm:gap-4 mb-2 sm:mb-0">
                          <div className="text-sm sm:text-base font-bold text-blue-400">
                            {item.time}
                          </div>
                          <div>
                            <div className="text-sm sm:text-base font-semibold text-white">
                              {item.company}
                            </div>
                            <div className="text-xs text-gray-400">
                              {item.topic}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] sm:text-xs text-gray-500">
                            {item.stage}
                          </span>
                          <button className="text-xs text-blue-400 hover:text-blue-300 transition-colors">
                            Add to Calendar +
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 text-center">
                    <Link
                      href="#"
                      className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors group"
                    >
                      View Full Schedule
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ========== STATS SECTION - Investment Impact ========== */}
          <div className="mb-12 sm:mb-16 md:mb-20 relative">
            <div className="absolute inset-0 flex justify-center">
              <div className="w-[600px] h-[300px] bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 blur-3xl opacity-40"></div>
            </div>

            <div className="text-center mb-10 sm:mb-14 relative z-10">
              <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-4 py-2 mb-5">
                <TrendingUp className="w-4 h-4 text-purple-400" />
                <span className="text-xs sm:text-sm text-gray-300 tracking-wide">
                  Hub Impact
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight mb-3">
                Innovation{" "}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  Ecosystem
                </span>
              </h2>

              <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
                Driving healthcare transformation through collaboration
              </p>

              <div className="mt-6 flex justify-center">
                <div className="w-28 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
              </div>
            </div>

            <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
              {[
                {
                  icon: Users,
                  value: "50+",
                  label: "Startups",
                  gradient: "from-blue-500 to-cyan-400",
                },
                {
                  icon: Briefcase,
                  value: "30+",
                  label: "Investors",
                  gradient: "from-purple-500 to-pink-400",
                },
                {
                  icon: BadgeCheck,
                  value: "100+",
                  label: "Innovations",
                  gradient: "from-amber-500 to-orange-400",
                },
                {
                  icon: Rocket,
                  value: "$50M+",
                  label: "Funding Potential",
                  gradient: "from-emerald-500 to-teal-500",
                },
              ].map((stat, index) => {
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
                <Rocket className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                <span className="text-xs sm:text-sm font-medium text-white/90">
                  Join the Innovation Ecosystem
                </span>
              </div>

              <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-3 md:mb-4">
                Are You a Healthcare Innovator?
              </h4>

              <p className="text-white/80 text-xs sm:text-sm md:text-base lg:text-lg mb-4 sm:mb-5 md:mb-6 lg:mb-8 max-w-xl mx-auto px-4">
                Showcase your solution, connect with investors, and accelerate
                your growth at the Healthcare Innovation Hub
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
                <Link
                  href="/register"
                  className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base font-semibold hover:shadow-2xl hover:shadow-blue-500/25 hover:-translate-y-1 transition-all duration-300 inline-flex items-center justify-center gap-2"
                >
                  Apply to Exhibit
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="#companies"
                  className="group border border-white/30 bg-white/10 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base font-semibold hover:bg-white/20 hover:-translate-y-1 transition-all duration-300 inline-flex items-center justify-center gap-2"
                >
                  Explore Innovators
                  <Eye className="w-4 h-4 sm:w-5 sm:h-5" />
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
