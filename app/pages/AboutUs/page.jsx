"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Award,
  Users,
  Target,
  Globe,
  Shield,
  Sparkles,
  ArrowRight,
  Calendar,
  HandHeart,
  Mail,
  Star,
} from "lucide-react";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import BreadCrumb from "../../Components/BreadCrum";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../il18/aboutUs/whoweare";

export default function AboutPage() {
  const { language } = useLanguage();
  const t = translations[language];

  const stats = [
    { icon: Calendar, label: t.eventsOrganized, value: "50+" },
    { icon: Users, label: t.healthcareProfessionals, value: "25,000+" },
    { icon: Globe, label: t.countriesRepresented, value: "35+" },
    { icon: Award, label: t.yearsOfExcellence, value: "10+" },
  ];

  const values = [
    {
      icon: Shield,
      title: t.excellence,
      description: t.excellenceDescription,
      color: "from-blue-500 to-cyan-400",
    },
    {
      icon: HandHeart,
      title: t.integrity,
      description: t.integrityDescription,
      color: "from-purple-500 to-pink-400",
    },
    {
      icon: Users,
      title: t.collaboration,
      description: t.collaborationDescription,
      color: "from-amber-500 to-orange-400",
    },
    {
      icon: Target,
      title: t.innovation,
      description: t.innovationDescription,
      color: "from-green-500 to-emerald-400",
    },
  ];

  const team = [
    {
      name: t.drJaneSmith,
      role: t.drJaneSmithRole,
      bio: t.drJaneSmithBio,
      image: "/Images/team/placeholder-1.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "a.alsaud@Hpql.sa",
      },
    },
    {
      name: t.drAlex,
      role: t.drAlexRole,
      bio: t.drAlexBio,
      image: "/Images/team/placeholder-2.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "n.alqahtani@Hpql.sa",
      },
    },
    {
      name: t.engineerJordan,
      role: t.engineerJordanRole,
      bio: t.engineerJordanBio,
      image: "/Images/team/placeholder-3.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "f.alotaibi@Hpql.sa",
      },
    },
    {
      name: t.casey,
      role: t.caseyRole,
      bio: t.caseyBio,
      image: "/Images/team/placeholder-4.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "l.alghamdi@Hpql.sa",
      },
    },
  ];

  const milestones = [
    {
      year: t.year2014,
      title: t.year2014Title,
      description: t.year2014Description,
    },
    {
      year: t.year2016,
      title: t.year2016Title,
      description: t.year2016Description,
    },
    {
      year: t.year2018,
      title: t.year2018Title,
      description: t.year2018Description,
    },
    {
      year: t.year2020,
      title: t.year2020Title,
      description: t.year2020Description,
    },
    {
      year: t.year2022,
      title: t.year2022Title,
      description: t.year2022Description,
    },
    {
      year: t.year2024,
      title: t.year2024Title,
      description: t.year2024Description,
    },
  ];

  const partners = [
    {
      name: "Airbus",
      logo: "https://cdn.showmanonline.com/event739/Posts/logos25/Airbuslogo18.jpg",
    },
    {
      name: "Ajinomoto",
      logo: "https://cdn.showmanonline.com/event739/Posts/Side_Events/ajinomoto.jpg",
    },
    {
      name: "Aschendorff",
      logo: "https://cdn.showmanonline.com/event739/Posts/logos25/Aschendorff-CVC.png",
    },
    {
      name: "Bayer",
      logo: "https://cdn.showmanonline.com/event739/Posts/logos25/Bayer.png",
    },
    {
      name: "Beiersdorf",
      logo: "https://cdn.showmanonline.com/event739/Posts/Community%20Partner/Beiersdorflogo19.png",
    },
    {
      name: "BMW i Ventures",
      logo: "https://cdn.showmanonline.com/event739/Posts/Meet-Fellow-Investors/BMW%20I%20ventures.jpeg",
    },
    {
      name: "Gekko Capital Partners",
      logo: "https://cdn.showmanonline.com/event739/Posts/Meet-Fellow-Investors/gcp-logo-black.png",
    },
    {
      name: "Giesecke+Devrient",
      logo: "https://cdn.showmanonline.com/event739/Posts/logos25/GD_Logo_GieseckeDevrient.png",
    },
    {
      name: "Hitachi Ventures",
      logo: "https://cdn.showmanonline.com/event739/Posts/Meet-Fellow-Investors/hitachi-ventures-logo-NEW.png",
    },
    {
      name: "Orange Ventures",
      logo: "https://cdn.showmanonline.com/event739/Posts/Community%20Partner/OrangeVentureslogo19.png",
    },
    {
      name: "Porsche Ventures",
      logo: "https://cdn.showmanonline.com/event739/Posts/Meet-Fellow-Investors/Ventures_1c_grey.png",
    },
    {
      name: "Raiffeisen Bank",
      logo: "https://cdn.showmanonline.com/event739/Posts/logos25/RaiffeisenBanklogo18.jpg",
    },
    {
      name: "Sony Innovation Fund",
      logo: "https://cdn.showmanonline.com/event739/Posts/logos25/SonyInnovationFundlogo18.jpg",
    },
    {
      name: "Sopra Steria Ventures",
      logo: "https://cdn.showmanonline.com/event739/Posts/Community%20Partner/SopraSterialogo19.png",
    },
    {
      name: "T Capital",
      logo: "https://cdn.showmanonline.com/event739/Posts/logos25/TCapitallogo01.jpg",
    },
    {
      name: "UCB Ventures",
      logo: "https://cdn.showmanonline.com/event739/Posts/logos25/UCB-Ventures.png",
    },
    {
      name: "Wayra",
      logo: "https://cdn.showmanonline.com/event739/Posts/logos25/Wayra.png",
    },
  ];

  return (
    <>
      <BreadCrumb
        title={t.aboutUs}
        backgroundImage="/Images/Home/Bread-crum-1.avif"
        path={[{ label: t.aboutUs }]}
      />
      <section className="relative min-h-screen py-10 sm:py-12 md:py-15 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-900">
          <div className="absolute top-10 left-10 w-32 h-32 sm:w-72 sm:h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 sm:w-80 sm:h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/3 right-1/3 w-48 h-48 sm:w-96 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          {/* Header */}
          <div className="text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-1 sm:gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6 md:mb-8">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-300" />
              <span className="text-xs sm:text-sm font-medium text-gray-300">
                {t.ourStory}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 px-2">
              <span className="text-white">{t.shapingTheFutureOf}</span>
              {""} {""}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-300 bg-clip-text text-transparent">
                {t.healthcareExcellence}
              </span>
            </h1>

            <div className="relative max-w-3xl mx-auto">
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-16 sm:w-20 md:w-24 h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed px-4">
                {t.heroDescription}
              </p>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6 mb-12 sm:mb-16 md:mb-20">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 lg:p-6 text-center group hover:bg-white/10 transition-all duration-300"
                >
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-blue-400 mx-auto mb-1 sm:mb-2 md:mb-3 group-hover:scale-110 transition-transform" />
                  <p className="text-sm sm:text-base md:text-lg lg:text-2xl font-bold text-white mb-0.5 sm:mb-1">
                    {stat.value}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-400">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-8 mb-12 sm:mb-16 md:mb-20">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-5 md:p-6 lg:p-8 group hover:shadow-2xl transition-all duration-500">
              <div className="relative mb-3 sm:mb-4 md:mb-5 lg:mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg sm:rounded-xl blur-md sm:blur-lg opacity-20 group-hover:opacity-40 transition-opacity"></div>
                <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center">
                  <Target className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
                </div>
              </div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3 md:mb-4">
                {t.ourMission}
              </h2>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                {t.missionDescription}
              </p>
              <div className="mt-3 sm:mt-4 md:mt-5 lg:mt-6 flex items-center gap-1 sm:gap-2 text-blue-400">
                <span className="text-xs sm:text-sm font-semibold">
                  {t.drivingHealthcareForward}
                </span>
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-5 md:p-6 lg:p-8 group hover:shadow-2xl transition-all duration-500">
              <div className="relative mb-3 sm:mb-4 md:mb-5 lg:mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-400 rounded-lg sm:rounded-xl blur-md sm:blur-lg opacity-20 group-hover:opacity-40 transition-opacity"></div>
                <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl bg-gradient-to-r from-purple-500 to-pink-400 flex items-center justify-center">
                  <Globe className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
                </div>
              </div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3 md:mb-4">
                {t.ourVision}
              </h2>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                {t.visionDescription}
              </p>
              <div className="mt-3 sm:mt-4 md:mt-5 lg:mt-6 flex items-center gap-1 sm:gap-2 text-purple-400">
                <span className="text-xs sm:text-sm font-semibold">
                  {t.globalConnectionsLocalImpact}
                </span>
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
              </div>
            </div>
          </div>

          {/* Our Values */}
          <div className="mb-12 sm:mb-16 md:mb-20">
            <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-3 md:mb-4">
                {t.ourCoreValues}
              </h2>
              <p className="text-xs sm:text-sm text-gray-400 max-w-2xl mx-auto px-4">
                {t.coreValuesDescription}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={index} className="group relative">
                    <div className="h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 lg:p-6 hover:shadow-2xl hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                      ></div>

                      <div className="relative mb-2 sm:mb-3 md:mb-4">
                        <div
                          className={`absolute inset-0 bg-gradient-to-r ${value.color} rounded-lg sm:rounded-xl blur-md sm:blur-lg opacity-20 group-hover:opacity-40 transition-opacity`}
                        ></div>
                        <div className="relative w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg sm:rounded-xl bg-white/10 border border-white/20 flex items-center justify-center">
                          <Icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                        </div>
                      </div>

                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-white mb-1 sm:mb-2">
                        {value.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                        {value.description}
                      </p>

                      <div
                        className={`absolute bottom-0 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r ${value.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Timeline Section */}
          <div className="mb-12 sm:mb-16 md:mb-20">
            <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-3 md:mb-4">
                {t.ourJourney}
              </h2>
              <p className="text-xs sm:text-sm text-gray-400 max-w-2xl mx-auto px-4">
                {t.journeyDescription}
              </p>
            </div>

            {/* Mobile Timeline */}
            <div className="lg:hidden space-y-4 sm:space-y-5 md:space-y-6">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative pl-8 sm:pl-10">
                  <div className="absolute left-3 sm:left-4 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 to-transparent"></div>
                  <div className="absolute left-0 top-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center border-2 border-gray-900">
                    <span className="text-[10px] sm:text-xs font-bold text-white">
                      {milestone.year}
                    </span>
                  </div>
                  <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5">
                    <h3 className="text-sm sm:text-base md:text-lg font-bold text-white mb-1">
                      {milestone.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-400">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop Timeline */}
            <div className="hidden lg:block relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-500/50 to-transparent transform -translate-x-1/2"></div>
              <div className="space-y-16">
                {milestones.map((milestone, index) => (
                  <div key={index} className="relative">
                    <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                      <div className="relative w-16 h-16 flex items-center justify-center">
                        <div className="absolute inset-0 bg-blue-500 rounded-full blur-lg opacity-50"></div>
                        <div className="relative w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center border-4 border-gray-900">
                          <span className="text-white font-bold text-sm">
                            {milestone.year}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col lg:flex-row items-center">
                      <div
                        className={`w-full lg:w-1/2 ${index % 2 === 0 ? "lg:pr-20 lg:text-right" : "lg:pr-0"}`}
                      >
                        {index % 2 === 0 && (
                          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                            <h3 className="text-xl font-bold text-white mb-2">
                              {milestone.title}
                            </h3>
                            <p className="text-gray-400">
                              {milestone.description}
                            </p>
                          </div>
                        )}
                      </div>
                      <div
                        className={`w-full lg:w-1/2 ${index % 2 !== 0 ? "lg:pl-20" : ""}`}
                      >
                        {index % 2 !== 0 && (
                          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                            <h3 className="text-xl font-bold text-white mb-2">
                              {milestone.title}
                            </h3>
                            <p className="text-gray-400">
                              {milestone.description}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-12 sm:mb-16 md:mb-20">
            <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-3 md:mb-4">
                {t.leadershipTeam}
              </h2>
              <p className="text-xs sm:text-sm text-gray-400 max-w-2xl mx-auto px-4">
                {t.leadershipTeamDescription}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
              {team.map((member, index) => (
                <div key={index} className="group relative">
                  <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl sm:rounded-2xl overflow-hidden hover:shadow-2xl hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-500">
                    <div className="aspect-square bg-gradient-to-br from-blue-900/50 to-purple-900/50 relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Users className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-blue-400/30" />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-600/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>

                    <div className="p-3 sm:p-4 md:p-5 lg:p-6">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-white mb-0.5 sm:mb-1">
                        {member.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-blue-400 mb-2 sm:mb-3">
                        {member.role}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4 line-clamp-3">
                        {member.bio}
                      </p>

                      <div className="flex items-center gap-2 sm:gap-3">
                        <Link
                          href={member.social.linkedin}
                          className="text-gray-500 hover:text-blue-400 transition-colors"
                        >
                          <FaLinkedin className="w-3 h-3 sm:w-4 sm:h-4" />
                        </Link>
                        <Link
                          href={member.social.twitter}
                          className="text-gray-500 hover:text-blue-400 transition-colors"
                        >
                          <FaTwitter className="w-3 h-3 sm:w-4 sm:h-4" />
                        </Link>
                        <Link
                          href={`mailto:${member.social.email}`}
                          className="text-gray-500 hover:text-blue-400 transition-colors"
                        >
                          <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
                        </Link>
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-blue-500 to-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Partners Section */}
          <div className="mb-12 sm:mb-16 md:mb-20">
            <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-3 md:mb-4">
                {t.ourPartners}
              </h2>
              <p className="text-xs sm:text-sm text-gray-400 max-w-2xl mx-auto px-4">
                {t.partnersDescription}
              </p>
            </div>

            <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4 hover:bg-white/10 hover:scale-105 transition-all duration-300 group"
                >
                  <div className="aspect-square flex items-center justify-center">
                    <div className="bg-white rounded-lg p-2 sm:p-3 flex items-center justify-center w-full h-full">
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        width={160}
                        height={80}
                        className="object-contain max-h-8 sm:max-h-10 md:max-h-12 lg:max-h-14 w-auto grayscale group-hover:grayscale-0 transition duration-300"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial Section */}
          <div className="relative mt-16 overflow-hidden rounded-xl sm:rounded-2xl lg:rounded-3xl">
            <div className="absolute inset-0 bg-[url('/Images/Home/Bread-crum-1.avif')] bg-cover bg-center"></div>
            <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

            <div className="relative py-8 sm:py-10 md:py-12 lg:py-16 px-4 sm:px-6 md:px-8 text-center backdrop-blur-sm">
              <div className="inline-flex items-center gap-1 sm:gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-5 md:mb-6 lg:mb-8">
                <Star className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                <span className="text-xs sm:text-sm font-medium text-white/90">
                  {t.since2014}
                </span>
              </div>

              <h4 className="text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-3 md:mb-4">
                "{t.testimonialText}"
              </h4>

              <div className="flex flex-col xs:flex-row items-center justify-center gap-3 sm:gap-4 px-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="text-center xs:text-left">
                  <p className="text-sm sm:text-base text-white font-semibold">
                    {t.testimonialAuthor}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-400">
                    {t.testimonialAuthorRole}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-20 md:h-24 lg:h-32 bg-gradient-to-t from-gray-900 to-transparent"></div>
      </section>
    </>
  );
}