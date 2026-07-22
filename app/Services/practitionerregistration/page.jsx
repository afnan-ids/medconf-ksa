"use client";

import {
  Calendar,
  MapPin,
  UserCheck,
  Sparkles,
  ChevronRight,
  Users,
  Mic,
  Target,
  Award,
  Clock,
  Globe,
  CheckCircle,
  UserPlus,
  BadgeCheck,
  Network,
  Lightbulb,
  TrendingUp,
  FileCheck,
  MailCheck,
  CalendarCheck,
  UserCog,
  Stethoscope,
  ClipboardCheck,
  GraduationCap,
  TicketCheckIcon,
  ShieldCheck,
  Building2,
  FileText,
  Video,
} from "lucide-react";
import BreadCrumb from "../../Components/BreadCrum";
import Link from "next/link";
import { FaRegistered } from "react-icons/fa";

import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../il18/PractitionerRegistration";

export default function PractitionerRegistration() {
  const { language } = useLanguage();
  const t = translations[language];
  const benefits = [
    {
      icon: Lightbulb,
      title: t.knowledgeSharing,
      description: t.knowledgeSharingDescription,
      color: "from-amber-500 to-orange-400",
      stats: t.sessions50Plus,
    },
    {
      icon: Network,
      title: t.networking,
      description: t.networkingDescription,
      color: "from-blue-500 to-cyan-400",
      stats: t.peers1000Plus,
    },
    {
      icon: TrendingUp,
      title: t.industryInsights,
      description: t.industryInsightsDescription,
      color: "from-purple-500 to-pink-400",
      stats: t.exhibitors200Plus,
    },
    {
      icon: GraduationCap,
      title: t.professionalGrowth,
      description: t.professionalGrowthDescription,
      color: "from-green-500 to-emerald-400",
      stats: t.cmeCredits,
    },
  ];
  const process = [
    {
      icon: FileCheck,
      title: t.signUp,
      description: t.signUpDescription,
      color: "from-blue-500 to-cyan-400",
      step: "01",
    },
    {
      icon: BadgeCheck,
      title: t.verification,
      description: t.verificationDescription,
      color: "from-purple-500 to-pink-400",
      step: "02",
    },
    {
      icon: MailCheck,
      title: t.confirmation,
      description: t.confirmationDescription,
      color: "from-amber-500 to-orange-400",
      step: "03",
    },
    {
      icon: CalendarCheck,
      title: t.attendEvent,
      description: t.attendEventDescription,
      color: "from-green-500 to-emerald-400",
      step: "04",
    },
  ];

  const practitionerTypes = [
    {
      title: t.physiciansSpecialists,
      description: t.physiciansSpecialistsDescription,
      icon: Stethoscope,
      color: "from-blue-500 to-cyan-400",
    },
    {
      title: t.researchersAcademics,
      description: t.researchersAcademicsDescription,
      icon: GraduationCap,
      color: "from-purple-500 to-pink-400",
    },
    {
      title: t.healthcareAdministrators,
      description: t.healthcareAdministratorsDescription,
      icon: UserCog,
      color: "from-amber-500 to-orange-400",
    },
    {
      title: t.alliedHealthProfessionals,
      description: t.alliedHealthProfessionalsDescription,
      icon: ClipboardCheck,
      color: "from-green-500 to-emerald-400",
    },
  ];

  const features = [
    {
      text: t.scfhsLicenseVerificationIncluded,
      icon: ShieldCheck,
      color: "from-blue-500 to-cyan-400",
    },
    {
      text: t.accessToAllConferenceSessions,
      icon: Mic,
      color: "from-purple-500 to-pink-400",
    },
    {
      text: t.exhibitorHallAccess,
      icon: Building2,
      color: "from-amber-500 to-orange-400",
    },
    {
      text: t.networkingLoungeAccess,
      icon: Users,
      color: "from-green-500 to-emerald-400",
    },
    {
      text: t.cmeCpdCreditTracking,
      icon: Award,
      color: "from-blue-500 to-cyan-400",
    },
    {
      text: t.workshopParticipation,
      icon: GraduationCap,
      color: "from-purple-500 to-pink-400",
    },
    {
      text: t.eventMaterialsResources,
      icon: FileText,
      color: "from-amber-500 to-orange-400",
    },
    {
      text: t.postEventContentAccess,
      icon: Video,
      color: "from-green-500 to-emerald-400",
    },
  ];
  return (
    <>
      <BreadCrumb
        title={t.practitionerRegistration}
        path={[
          { label: t.services, href: "/pages/NavBar-Links/NavServices" },
          { label: t.practitionerRegistration },
        ]}
      />

      <section className="relative py-16 overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>

          {/* Grid Pattern */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>

        <div className="relative max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <UserCheck className="w-4 h-4 text-emerald-400" />
              <span className="text-sm font-medium text-gray-300">
                {t.joinHealthcareProfessionals}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-white">{t.practitioner}</span>
              {""} {""}
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                {t.registration}
              </span>
            </h1>

            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10">
              {t.practitionerHeroDescription}
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
            {[
              { number: "5000+", label: t.activeMembers, icon: Users },
              { number: "150+", label: t.eventsYearly, icon: Calendar },
              { number: "30+", label: t.specialties, icon: Stethoscope },
              { number: "50+", label: t.cmeCreditsStat, icon: Award },
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300"
                >
                  <Icon className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              );
            })}
          </div>

          {/* Practitioner Types Grid */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {t.whoCanRegister}
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                {t.whoCanRegisterDescription}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {practitionerTypes.map((type, index) => {
                const Icon = type.icon;
                return (
                  <div
                    key={index}
                    className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
                  >
                    <div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-r ${type.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      {type.title}
                    </h3>
                    <p className="text-sm text-gray-400">{type.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {t.benefitsOfRegistration}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={index}
                    className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-r ${benefit.color} flex items-center justify-center`}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-xs font-semibold text-emerald-400 bg-emerald-400/10 px-3 py-1 rounded-full">
                        {benefit.stats}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {benefit.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Process Timeline */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {t.simpleProcess}
                <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  {" "}
                  {t.fourStepProcess}
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {process.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="relative">
                    {index < process.length - 1 && (
                      <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-emerald-500 to-cyan-500"></div>
                    )}
                    <div className="relative z-10 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 group hover:bg-white/10 transition-all duration-300">
                      <div
                        className={`w-16 h-16 rounded-xl bg-gradient-to-r ${step.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform`}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-center">
                        <span
                          className={`text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r ${step.color} block mb-2`}
                        >
                          {t.step} {step.step}
                        </span>
                        <h3 className="text-lg font-bold text-white mb-2">
                          {step.title}
                        </h3>
                        <p className="text-sm text-gray-400">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Features Cloud */}
          <div className="mb-20">
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
                {t.everythingIncluded}
                <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  {" "}
                  {t.registrationText}
                </span>
              </h3>

              <div className="flex flex-wrap justify-center gap-3 ">
                {features.map((feature, index) => {
                  const Icon = feature.icon;

                  return (
                    <div
                      key={index}
                      className="flex items-center gap-2 px-4 py-2 rounded-full 
        bg-white/10 border border-white/10 backdrop-blur-sm
        hover:scale-105 transition-all duration-300 shadow-lg"
                    >
                      <div
                        className={`w-6 h-6 flex items-center justify-center rounded-md bg-gradient-to-r ${feature.color}`}
                      >
                        <Icon className="w-3.5 h-3.5 text-white" />
                      </div>

                      <span className="text-sm text-white font-medium">
                        {feature.text}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-600 via-cyan-600 to-blue-600">
              <div className="absolute inset-0 bg-[url('/Images/Home/Bread-crum-1.avif')] bg-cover bg-center"></div>{" "}
              {/* Background Pattern */}
              <div className="absolute inset-0">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
              </div>
              <div className="relative py-16 px-8 text-center">
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 mb-6">
                  <FaRegistered className="w-4 h-4 text-white" />
                  <span className="text-sm font-medium text-white">
                    {t.limitedTimeOffer}
                  </span>
                </div>

                <h4 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {t.readyToJoin}
                </h4>

                <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                  {t.readyToJoinDescription}
                </p>

                <Link
                  href="https://hpql-healthcare-practitioner.i-diligence.com/login/"
                  className="group inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  {t.registerNow}
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>

                <p className="text-white/70 text-sm mt-4">
                  {t.freeRegistrationLimitedTime} •{" "}
                  {t.verifiedProfessionalsOnly}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
