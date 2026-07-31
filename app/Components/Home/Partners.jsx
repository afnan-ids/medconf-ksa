"use client";

import {
  ChevronRight,
  Award,
  Compass,
  Globe,
  Sparkles,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../il18/translations";

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
    name: "Seven Ventures",
    logo: "https://cdn.showmanonline.com/event739/Posts/Meet-Fellow-Investors/SevenVentures-Logo_red.png",
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

export default function PartnersGrid() {
  const { language } = useLanguage();
  const t = translations[language];
  
  return (
    <section className="relative w-full overflow-hidden py-4 xs:py-6 sm:py-10 md:py-14 lg:py-16 xl:py-20">
      {/* Background - responsive orbs */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-900">
        <div className="absolute top-5 xs:top-10 left-5 xs:left-10 w-16 h-16 xs:w-24 xs:h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-72 lg:h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-5 xs:bottom-10 right-5 xs:right-10 w-20 h-20 xs:w-28 xs:h-28 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-80 lg:h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 left-1/3 w-24 h-24 xs:w-32 xs:h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-96 lg:h-96 bg-cyan-500/10 rounded-full blur-3xl hidden xs:block"></div>
        <div className="absolute bottom-1/3 right-1/4 w-16 h-16 xs:w-24 xs:h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-700 hidden xs:block"></div>
      </div>

      <div className="relative z-10 px-2 xs:px-3 sm:px-4 md:px-6">
        <div className="rounded-lg xs:rounded-xl sm:rounded-2xl md:rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-2xl p-2 xs:p-3 sm:p-4 md:p-6 lg:p-8 xl:p-10 2xl:p-14">
          <div className="max-w-7xl mx-auto px-1 xs:px-2 sm:px-3 lg:px-0">
            {/* Header */}
            <div className="text-center mb-4 xs:mb-5 sm:mb-6 md:mb-8 lg:mb-10 xl:mb-12 2xl:mb-16">
              {/* Badge - responsive */}
              <div className="relative inline-block group/badge mb-2 xs:mb-3 sm:mb-4 md:mb-5 lg:mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-lg opacity-0 group-hover/badge:opacity-50 transition-opacity duration-500"></div>
                <div className="relative inline-flex items-center gap-1 xs:gap-1.5 sm:gap-2 px-1.5 xs:px-2 sm:px-2.5 md:px-3 lg:px-4 py-0.5 xs:py-1 sm:py-1.5 md:py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl text-white text-[8px] xs:text-[9px] sm:text-[10px] md:text-xs">
                  <Globe className="w-2 h-2 xs:w-2.5 xs:h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 text-blue-400" />
                  <span className="hidden xs:inline">{t.globalNetwork}</span>
                  <span className="inline xs:hidden">{t.network}</span>
                  <span className="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-white/30 rounded-full hidden xs:inline"></span>
                  <Award className="w-2 h-2 xs:w-2.5 xs:h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 text-cyan-400 hidden xs:inline" />
                  <span className="hidden xs:inline">
                    {partners.length} {t.partners}
                  </span>
                  <span className="inline xs:hidden">
                    {partners.length}
                  </span>
                </div>
              </div>

              {/* Title - responsive single line */}
              <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-1 xs:mb-1.5 sm:mb-2 md:mb-3 lg:mb-4 px-1 xs:px-2 leading-tight">
                {t.media} &{" "}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  {t.innovation}
                </span>
                <span className="block text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-300 mt-0.5 xs:mt-1 sm:mt-1.5 md:mt-2 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  {t.partners}
                </span>
              </h2>

              {/* Decorative line - responsive */}
              <div className="relative w-12 xs:w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 h-0.5 xs:h-1 mx-auto my-2 xs:my-2.5 sm:my-3 md:my-4 lg:my-5 xl:my-6">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-sm"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full"></div>
              </div>

              {/* Description - responsive */}
              <p className="text-[10px] xs:text-xs sm:text-sm md:text-base text-gray-300 max-w-2xl mx-auto px-2 xs:px-3 sm:px-4 leading-relaxed">
                {t.collabrotatingWithGlobalIndusty}
              </p>
            </div>

            {/* Grid - fully responsive with progressive columns */}
            <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-1.5 xs:gap-2 sm:gap-2.5 md:gap-3 lg:gap-4 xl:gap-5 2xl:gap-6">
              {partners.map((partner, index) => (
                <div
                  key={partner.name}
                  className="group bg-white rounded-lg xs:rounded-xl p-2 xs:p-2.5 sm:p-3 md:p-4 lg:p-5 xl:p-6 flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5 sm:hover:-translate-y-1"
                >
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={160}
                    height={80}
                    className="object-contain max-h-6 xs:max-h-7 sm:max-h-8 md:max-h-10 lg:max-h-12 xl:max-h-14 w-auto grayscale group-hover:grayscale-0 transition duration-300"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            {/* CTA - responsive */}
            <div className="text-center mt-6 xs:mt-7 sm:mt-8 md:mt-10 lg:mt-12 xl:mt-14 relative z-10">
              <Link
                href="https://hpql-sponsor.i-diligence.com/login/"
                className="group relative inline-flex items-center"
              >
                {/* Glow */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-50"></div>

                {/* Button */}
                <div className="relative flex items-center gap-1.5 xs:gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-2.5 xs:px-3 sm:px-4 md:px-5 lg:px-6 py-1.5 xs:py-2 sm:py-2.5 md:py-3 text-[10px] xs:text-xs sm:text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <Users className="w-2.5 h-2.5 xs:w-3 xs:h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />

                  <span className="hidden xs:inline">{t.becomeAPartner}</span>
                  <span className="inline xs:hidden">{t.join}</span>

                  <ChevronRight className="w-2.5 h-2.5 xs:w-3 xs:h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}