"use client";

import Link from "next/link";
import {
  Building2,
  Users,
  Stethoscope,
  ChevronRight,
  ShieldCheck,
  Lock,
  Globe,
} from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../il18/translations";

// Custom Exhibitor Icon Component (removed TypeScript type)
const ExhibitorIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* Booth/Stand base */}
    <rect x="3" y="16" width="18" height="4" rx="1" />
    {/* Booth back panel */}
    <rect x="5" y="10" width="14" height="6" rx="1" />
    {/* Person */}
    <circle cx="12" cy="7" r="3" />
    {/* Person's body */}
    <path d="M12 10v4" />
    {/* Person's arms pointing to display */}
    <path d="M10 12h4" />
    {/* Display screen/content */}
    <rect
      x="7"
      y="12"
      width="10"
      height="3"
      rx="0.5"
      fill="currentColor"
      fillOpacity="0.2"
    />
    {/* Lines on display */}
    <line x1="9" y1="13" x2="15" y2="13" strokeWidth="1" />
    <line x1="9" y1="14" x2="13" y2="14" strokeWidth="1" />
  </svg>
);

// Custom Sponsor Icon - Candy/Gift Box Design (removed TypeScript type)
const SponsorIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* Candy/Gift Box Body */}
    <rect x="4" y="8" width="16" height="12" rx="2" />
    {/* Ribbon Cross */}
    <path d="M4 14h16" />
    <path d="M12 8v12" />
    {/* Ribbon Bow */}
    <path d="M8 8l4-4 4 4" />
    {/* Decorative Candy Stripes */}
    <path d="M8 11h2" strokeWidth="1.5" />
    <path d="M14 11h2" strokeWidth="1.5" />
    <path d="M8 17h2" strokeWidth="1.5" />
    <path d="M14 17h2" strokeWidth="1.5" />
    {/* Sparkle/Star on top */}
    <path d="M12 2l1 3 3-1-1 3 3 1-3 1 1 3-3-1-1 3-1-3-3 1 1-3-3-1 3-1-1-3 3 1z" />
  </svg>
);

const colorVariants = {
  blue: {
    bgLight: "bg-blue-500/20",
    border: "border-blue-500/30",
    text: "text-blue-400",
    shadow: "shadow-blue-600/30",
  },
  purple: {
    bgLight: "bg-purple-500/20",
    border: "border-purple-500/30",
    text: "text-purple-400",
    shadow: "shadow-purple-600/30",
  },
  amber: {
    bgLight: "bg-amber-500/20",
    border: "border-amber-500/30",
    text: "text-amber-400",
    shadow: "shadow-amber-600/30",
  },
  emerald: {
    bgLight: "bg-emerald-500/20",
    border: "border-emerald-500/30",
    text: "text-emerald-400",
    shadow: "shadow-emerald-600/30",
  },
};

export default function Portals() {
  const { language } = useLanguage();
  const t = translations[language];

  const portals = [
    {
      title: t.visitorPortalTitle,
      description: t.visitorPortalDescription,
      icon: Users,
      href: "https://hpql-visitor.i-diligence.com/login/",
      gradient: "from-purple-600 to-pink-500",
      color: "purple",
    },
    {
      title: t.healthcarePractitionersPortalTitle,
      description: t.healthcarePractitionersPortalDescription,
      icon: Stethoscope,
      href: "https://hpql-healthcare-practitioner.i-diligence.com/login/",
      gradient: "from-amber-600 to-orange-500",
      color: "amber",
    },
    {
      title: t.exhibitorSponsorPortalTitle,
      description: t.exhibitorSponsorPortalDescription,
      icon: ExhibitorIcon,
      href: "https://hpql-exhibitor.i-diligence.com/login/",
      gradient: "from-blue-600 to-cyan-400",
      color: "blue",
    },
    {
      title: t.homepageSponsorPortal,
      description: t.homepageSponsorPortaldescri,
      icon: SponsorIcon,
      href: "https://hpql-sponsor.i-diligence.com/login/",
      gradient: "from-emerald-600 to-teal-400",
      color: "emerald",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden py-10 sm:py-16 md:py-20">
      {/* Dark themed background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-900">
        {/* Floating orbs */}
        <div className="absolute top-10 left-10 w-32 h-32 sm:w-72 sm:h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 sm:w-80 sm:h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 left-1/3 w-48 h-48 sm:w-96 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-40 w-32 h-32 sm:w-64 sm:h-64 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-700 hidden sm:block"></div>
        <div className="absolute bottom-40 left-40 w-36 h-36 sm:w-72 sm:h-72 bg-amber-500/20 rounded-full blur-3xl animate-pulse delay-500 hidden sm:block"></div>
      </div>

      <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-4">
        <div className="rounded-2xl sm:rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-2xl overflow-hidden hover:shadow-[0_30px_60px_-15px_rgba(79,70,229,0.3)] transition-all duration-700">
          {/* Top gradient line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>

          <div className="py-4 px-3 sm:py-8 lg:py-14 lg:px-0 max-w-7xl mx-auto relative">
            {/* Decorative orbs inside */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl hidden sm:block"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl hidden sm:block"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl hidden sm:block"></div>

            {/* Title with badge */}
            <div className="text-center mb-8 sm:mb-12 md:mb-16 relative z-10">
              {/* Badge */}
              <div className="relative inline-block group/badge mb-4 sm:mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-lg opacity-0 group-hover/badge:opacity-50 transition-opacity duration-500"></div>
                <div className="relative inline-flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1 sm:py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl text-white text-[10px] sm:text-xs">
                  <Lock className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
                  <span>{t.secureAccess} </span>
                  <span className="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-white/30 rounded-full"></span>
                  <ShieldCheck className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400" />
                  <span>PDPL {t.complaints}</span>
                </div>
              </div>

              {/* Gradient title */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-4 px-2">
                <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
                  {t.secure}
                </span>{" "}
                <span className="text-white">{t.portals}</span>
              </h2>

              {/* Decorative line */}
              <div className="relative w-20 sm:w-32 h-1 mx-auto my-3 sm:my-6">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full blur-sm"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 rounded-full"></div>
              </div>

              <p className="text-gray-300 max-w-2xl mx-auto text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed px-4">
                {t.allPortalAreEncrypted}
              </p>
            </div>

            {/* Cards grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 relative z-10">
              {portals.map((portal, index) => {
                const Icon = portal.icon;
                const colors = colorVariants[portal.color];

                return (
                  <div
                    key={index}
                    className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl sm:rounded-[2rem] p-4 sm:p-6 md:p-8 transition-all duration-500 hover:-translate-y-1 sm:hover:-translate-y-2 hover:shadow-2xl overflow-hidden flex flex-col h-full"
                  >
                    {/* Gradient hover effect */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${portal.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-700`}
                    />

                    {/* Shine effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    </div>

                    {/* Corner accent */}
                    <div
                      className={`absolute top-0 right-0 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 ${colors.bgLight} rounded-bl-[30px] sm:rounded-bl-[40px] rounded-tr-2xl sm:rounded-tr-[2rem] blur-lg sm:blur-xl group-hover:blur-xl sm:group-hover:blur-2xl transition-all duration-500 opacity-50 group-hover:opacity-100`}
                    />

                    {/* Content wrapper */}
                    <div className="flex flex-col flex-1">
                      {/* Icon with gradient background */}
                      <div className="relative mb-3 sm:mb-4 md:mb-6">
                        <div
                          className={`absolute inset-0 bg-gradient-to-r ${portal.gradient} blur-lg sm:blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-500 rounded-xl sm:rounded-2xl`}
                        />
                        <div
                          className={`relative w-11 h-11 sm:w-13 sm:h-13 md:w-15 md:h-15 flex items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-br ${portal.gradient} shadow-lg group-hover:scale-110 transition-transform duration-500`}
                        >
                          <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
                        </div>
                      </div>

                      {/* Text */}
                      <div className="flex-1">
                        <h3 className="relative text-base sm:text-lg md:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-blue-200 transition-all duration-500">
                          {portal.title}
                        </h3>

                        <p className="relative text-gray-300 mb-4 sm:mb-5 md:mb-6 leading-relaxed text-xs sm:text-sm">
                          {portal.description}
                        </p>
                      </div>

                      {/* Button */}
                      <Link
                        href={portal.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`relative inline-flex items-center justify-center gap-1 sm:gap-2 w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl text-[10px] sm:text-xs md:text-sm font-medium group/btn overflow-hidden transition-all duration-300 border ${colors.border} hover:border-transparent mt-auto`}
                      >
                        {/* Gradient background on hover */}
                        <span
                          className={`absolute inset-0 bg-gradient-to-r ${portal.gradient} opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500`}
                        />

                        {/* Glow effect */}
                        <span
                          className={`absolute inset-0 bg-gradient-to-r ${portal.gradient} opacity-0 group-hover/btn:opacity-40 blur-lg sm:blur-xl transition-opacity duration-500`}
                        />

                        {/* Button text */}
                        <span className="relative z-10 flex items-center text-gray-300 group-hover/btn:text-white transition-colors duration-300">
                          {t.explorePortal}
                          <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover/btn:translate-x-1 sm:group-hover/btn:translate-x-2 transition-transform duration-300 mb-1" />
                        </span>

                        {/* Bottom line animation */}
                        <span
                          className={`absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r ${portal.gradient} group-hover/btn:w-full transition-all duration-500`}
                        />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom CTA */}
            <div className="text-center mt-8 sm:mt-12 relative z-10">
              <Link
                href="../../pages/SignIn"
                className="group relative inline-flex items-center"
              >
                {/* Glow */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-50"></div>

                {/* Button */}
                <div className="relative flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  {/* <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> */}
                  <span>{t.accessAllPortals}</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
