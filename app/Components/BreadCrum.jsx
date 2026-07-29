"use client";

import React from "react";
import Link from "next/link";
import { Home, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../il18/translations";

const BreadCrumb = ({ title, path }) => {
  const { language } = useLanguage();
  const t = translations[language];
  return (
    <section className="relative overflow-hidden pt-6 pb-4">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-900">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-800/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-800/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-cyan-800/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-8 pt-17">
        {/* Glass Container */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-cyan-600/30 via-gray-600/30 to-cyan-600/30 backdrop-blur-xl border border-cyan-500/40 shadow-2xl shadow-cyan-500/10 px-8 py-6 md:px-14 md:py-8 max-w-7xl mx-auto">

          {/* Corner Accents  */}
          <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-cyan-500/60 rounded-tl-xl hidden sm:block"></div>
          <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-cyan-500/60 rounded-tr-xl hidden sm:block"></div>
          <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-cyan-500/60 rounded-bl-xl hidden sm:block"></div>
          <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-cyan-500/60 rounded-br-xl hidden sm:block"></div>

          {/* Breadcrumb  */}
          <nav
            className="inline-flex items-center flex-wrap gap-2 rounded-full bg-black/30 backdrop-blur-sm border border-cyan-500/30 px-3 sm:px-5 py-1.5 sm:py-2.5 mb-8"
            aria-label="Breadcrumb"
          >
            <Link
              href="/"
              className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-all"
            >
              <Home className="w-4 h-4" />
              <span className="text-sm">{t.home}</span>
            </Link>
            {path?.map((item, index) => {
              const isLast = index === path.length - 1;
              return (
                <React.Fragment key={index}>
                  <ChevronRight className="w-4 h-4 text-cyan-500/50" />
                  {isLast ? (
                    <span className="text-sm font-medium text-cyan-400">
                      {item.label}
                    </span>
                  ) : (
                    <Link
                      href={item?.href || "#"}
                      className="text-sm text-gray-300 hover:text-cyan-400"
                    >
                      {item.label}
                    </Link>
                  )}
                </React.Fragment>
              );
            })}
          </nav>

          {/* Title */}
          <div className="relative">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              {title}
            </h1>
            <div className="mt-6">
              <div className="flex items-center gap-4">
                {/* Liquid progress bar */}
                <div className="relative w-48 h-[3px] bg-white/10 rounded-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 rounded-full animate-liquid"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Logo - Hidden on mobile */}
          <div className="absolute right-20 top-14 perspective-1000 hidden sm:block">
            <div className="relative group transform-style-3d transition-all duration-500 hover:rotate-y-12 hover:rotate-x-6">
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-4 bg-black/50 rounded-full blur-md group-hover:scale-110 transition-all"></div>
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-3 border border-white/20 shadow-2xl">
                <Image
                  src="/Images/Right-Side-Logo.png"
                  alt="logo"
                  height={250}
                  width={250}
                  className="rounded-xl"
                />
              </div>
              <div className="absolute -bottom-12 left-0 right-0 h-12 bg-gradient-to-t from-white/5 to-transparent rounded-full blur-sm transform scale-y-[-0.5] opacity-50"></div>
              <div className="absolute inset-[-10px] rounded-2xl border border-cyan-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
              <div className="absolute inset-[-20px] rounded-2xl border border-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-800/50 to-transparent"></div>

      <style jsx>{`
      @keyframes liquid {
        0% {
          background-position: 0% 50%;
          width: 0%;
        }
        50% {
          width: 70%;
        }
        100% {
          background-position: 100% 50%;
          width: 100%;
        }
      }
      .animate-liquid {
        animation: liquid 3s ease-in-out infinite alternate;
      }
      @keyframes shimmer {
        0% {
          transform: translateX(-100%);
        }
        100% {
          transform: translateX(100%);
        }
      }
      .animate-shimmer {
        animation: shimmer 2s linear infinite;
      }
      @keyframes float {
        0%,
        100% {
          transform: translateY(0px);
        }
        50% {
          transform: translateY(-20px);
        }
      }
      @keyframes spin-slow {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
      @keyframes spin-slower {
        from {
          transform: rotate(360deg);
        }
        to {
          transform: rotate(0deg);
        }
      }
      .animate-float {
        animation: float 6s ease-in-out infinite;
      }
      .animate-spin-slow {
        animation: spin-slow 12s linear infinite;
      }
      .animate-spin-slower {
        animation: spin-slower 18s linear infinite;
      }
      .perspective-1000 {
        perspective: 1000px;
      }
      .transform-style-3d {
        transform-style: preserve-3d;
      }
      .hover\\:rotate-y-12:hover {
        transform: rotateY(12deg);
      }
      .hover\\:rotate-x-6:hover {
        transform: rotateX(6deg);
      }
    `}</style>
    </section>
  );
};

export default BreadCrumb;
