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
    <section className="relative w-full overflow-hidden py-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-900">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 px-6">
        <div className="rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-2xl p-10 lg:p-14">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="relative inline-block group/badge mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-lg opacity-0 group-hover/badge:opacity-50 transition-opacity duration-500"></div>
              <div className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl text-white text-xs">
                <Globe className="w-4 h-4 text-blue-400" />
                Global Network
                <span className="w-1 h-1 bg-white/30 rounded-full"></span>
                <Award className="w-4 h-4 text-cyan-400" />
                {partners.length}+ Partners
              </div>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Media & Innovation
              <span className="block text-2xl md:text-3xl text-gray-300 mt-2">
                Partners
              </span>
            </h2>

            <p className="text-gray-300 max-w-2xl mx-auto">
              Collaborating with global industry leaders and innovation
              pioneers.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="group bg-white rounded-xl p-6 flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={160}
                  height={80}
                  className="object-contain max-h-14 w-auto grayscale group-hover:grayscale-0 transition duration-300"
                />
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <Link
              href="#"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-lg font-medium hover:scale-105 transition"
            >
              <Users className="w-5 h-5" />
              Become a Partner
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
