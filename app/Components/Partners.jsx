"use client";

import {
  Award,
  ChevronRight,
  Compass,
  Globe,
  Sparkles,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
  return (
    <section className="relative w-full overflow-hidden py-10 sm:py-16 md:py-20">
      {/* Background - responsive orbs */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-900">
        <div className="absolute top-10 left-10 w-32 h-32 sm:w-72 sm:h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 sm:w-80 sm:h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 left-1/3 w-48 h-48 sm:w-96 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 px-4 sm:px-6">
        <div className="rounded-2xl sm:rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-2xl p-4 sm:p-6 md:p-8 lg:p-10 xl:p-14">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
            {/* Badge - responsive */}
            <div className="relative inline-block group/badge mb-4 sm:mb-5 md:mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-lg opacity-0 group-hover/badge:opacity-50 transition-opacity duration-500"></div>
              <div className="relative inline-flex items-center gap-1 sm:gap-2 px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl text-white text-[10px] sm:text-xs">
                <Globe className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
                <span className="hidden xs:inline">Global Network</span>
                <span className="inline xs:hidden">Network</span>
                <span className="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-white/30 rounded-full"></span>
                <Award className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400" />
                <span>{partners.length}+ Partners</span>
              </div>
            </div>

            {/* Title - responsive */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-3 md:mb-4 px-2">
              Media & Innovation
              <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mt-1 sm:mt-2">
                Partners
              </span>
            </h2>

            {/* Description */}
            <p className="text-xs sm:text-sm md:text-base text-gray-300 max-w-2xl mx-auto px-4">
              Collaborating with global industry leaders and innovation
              pioneers.
            </p>
          </div>

          {/* Grid - fully responsive */}
          <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="group bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 lg:p-6 flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5 sm:hover:-translate-y-1"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={160}
                  height={80}
                  className="object-contain max-h-8 sm:max-h-10 md:max-h-12 lg:max-h-14 w-auto grayscale group-hover:grayscale-0 transition duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* CTA - responsive */}
          <div className="text-center mt-8 sm:mt-10 md:mt-12 lg:mt-16">
            <Link
              href="#"
              className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-5 md:px-6 lg:px-8 py-2.5 sm:py-3 md:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm sm:text-base md:text-lg font-medium hover:scale-105 transition"
            >
              <Users className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden xs:inline">Become a Partner</span>
              <span className="inline xs:hidden">Join</span>
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}