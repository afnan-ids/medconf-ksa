"use client";

import Image from "next/image";

import { useLanguage } from "../../context/LanguageContext";

const SlideVexora = ({ labels = {} }) => {
  const { language } = useLanguage();

  const conferenceTitle = labels["ConferenceTitle"]?.[language] || "";
  const conferenceTagline = labels["ConferenceTagline"]?.[language] || "";
  const venue = labels["Venue"]?.[language] || "";
  const month = labels["Month"]?.[language] || "";

  return (
    <>
      <div className="hidden md:block relative w-full h-full bg-[url('/Images/Home/VeroxaSliderBackground.png')] bg-cover bg-center">
        <div className="relative z-10 w-full max-w-7xl mx-auto h-full grid grid-cols-1 lg:grid-cols-[45%_55%]  text-white lg:mt-20 pt-10">
          {/* Left Column */}
          <div className="text-center lg:text-left mb-8 lg:mb-0"></div>

          {/* Right Column */}
          <div className="w-full max-w-4xl mx-auto space-y-5 py-5 ">
            {/* HPQL Section  */}
            <div className="text-right space-y-2">
              <div className="flex items-center justify-end">
                {language === "en" && (
                  <Image
                    src="/Images/Home/slider/MainLogo.png"
                    alt="Logo"
                    width={200}
                    height={200}
                    className="opacity-90 mb-16"
                  />
                )}
                {language === "ar" && (
                  <Image
                    src="/Images/Home/slider/Right-Side-Logo.png"
                    alt="Logo"
                    width={250}
                    height={200}
                    className="opacity-90"
                  />
                )}
              </div>

              <div className="">
                {language === "ar" && (
                  <h2
                    className="text-2xl md:text-2xl lg:text-3xl font-bold text-white leading-tight lg:mt-20 tracking-[0.15em]"
                    dir="rtl"
                    style={{fontSize : "2.3rem", wordSpacing: "0.3rem"}}
                  >
                    {conferenceTitle}
                  </h2>
                )}
                {language === "en" && (
                  <h2 className=" text-white tracking-[0.15em]"
                    style={{fontSize : "1rem"}} >
                    {conferenceTitle}
                  </h2>
                )}
              </div>
            </div>

            {/* HEAL Section - More compact */}
            <div className="flex justify-end items-center pt-1 gap-1 lg:mt-8 tracking-[0.3em]">
              <p className="font-black text-6xl" style={{ letterSpacing : "6px"}}>
                HPQL
              </p>
              <div className="text-right">
                {language === "ar" && (
                  <p
                    className="text-base font-bold text-white mb-0.5"
                    dir="rtl"
                    style={{fontSize : "2.2rem"}}
                  >
                    {conferenceTagline}
                  </p>
                )}
                {language === "en" && (
                  <p className="w-full text-white uppercase tracking-[0.25em] font-light"
                    style={{fontSize : "1.1rem"}}>
                    {conferenceTagline}
                  </p>
                )}
              </div>
            </div>

            {/* Info Card  */}
            <div className="flex justify-end">
              <div className="bg-cyan-500 backdrop-blur-md rounded-xl border border-white/20 overflow-hidden w-full max-w-200">
                <div className="p-4">
                  <div className="flex items-center justify-between gap-3">
                    {/* Location */}
                    <div className="text-center">
                      {language === "ar" && (
                        <p className="text-md font-bold text-blue-900" dir="rtl">
                          {venue}
                        </p>
                      )}
                      {language === "en" && (
                        <p className="text-md font-bold text-blue-900 mt-0.5">
                          {venue}
                        </p>
                      )}
                    </div>

                    <div className="w-px h-10 bg-white/15" />

                    {/* 2026  - Arabic */}
                    <div className="text-center">
                      <p className="text-md font-bold text-blue-900">{month}</p>
                      <p className="text-md font-bold text-blue-900">2026</p>
                    </div>

                    <div className="w-px h-10 bg-white/15" />

                    {/* Date - Arabic */}
                    <div className="flex text-center">
                      <p className="text-3xl font-bold text-blue-900">9 - 11</p>
                    </div>

                    <div className="w-px h-10 bg-white/15" />

                    {/* Date */}
                    <div className="text-start text-lg ">
                      <p className="font-bold text-blue-900">{month}</p>
                      <p className="font-bold text-blue-900 mt-0.5">2026</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* For mobile  */}
      <div className="block md:hidden relative h-[700px] bg-[url('/Images/Home/VeroxaSliderBackground.png')] bg-cover bg-center">
        <div className="relative z-10 w-full h-full flex items-center px-4 py-6 overflow-y-auto">
          <div className="w-full max-w-md mx-auto space-y-6">
            {/* Logos Section  */}
            <div className="flex justify-between items-center mb-10">
              {language === "en" && (
                <Image
                  src="/Images/Home/slider/MainLogo.png"
                  alt="Logo"
                  width={100}
                  height={80}
                  className="opacity-90 w-auto h-10 sm:h-12"
                  priority
                />
              )}
              {language === "ar" && (
                <Image
                  src="/Images/Home/slider/Right-Side-Logo.png"
                  alt="Logo"
                  width={120}
                  height={100}
                  className="opacity-90 w-auto h-10 sm:h-12"
                  priority
                />
              )}
            </div>

            {/* Conference Name */}
            <div className="text-center space-y-1.5">
              {language === "ar" && (
                <h2
                  className="text-base sm:text-lg font-bold text-white leading-tight"
                  dir="rtl"
                >
                  {conferenceTitle}
                </h2>
              )}
              {language === "en" && (
                <h2 className="text-[10px] sm:text-xs text-white tracking-wide">
                  {conferenceTitle}
                </h2>
              )}
            </div>

            {/* HPQL & Slogan Section */}
            <div className="text-center space-y-2">
              <p className="text-4xl sm:text-5xl font-black text-white">HPQL</p>
              <div>
                {language === "ar" && (
                  <p className="text-sm sm:text-base font-bold text-white" dir="rtl">
                    {conferenceTagline}
                  </p>
                )}
                {language === "en" && (
                  <p className="text-[10px] sm:text-xs text-white tracking-wide mt-0.5">
                    {conferenceTagline}
                  </p>
                )}
              </div>
            </div>

            {/* Info Card */}
            <div className="pt-4">
              <div className="bg-cyan-500 backdrop-blur-md rounded-xl border border-white/20 overflow-hidden">
                <div className="p-4">
                  {/* Location - Full width on mobile */}
                  <div className="col-span-2 text-center pb-2 border-b border-white/20">
                    {language === "ar" && (
                      <p className="text-sm font-bold text-blue-900" dir="rtl">
                        {venue}
                      </p>
                    )}
                    {language === "en" && (
                      <p className="text-xs font-bold text-blue-900 mt-0.5">
                        {venue}
                      </p>
                    )}
                  </div>
                  {/* Mobile optimized grid layout */}
                  <div className="grid grid-cols-3 gap-4 mt-4">
                    {/* Month - Arabic */}
                    <div className="text-center">
                      <p className="text-base font-bold text-blue-900">{month}</p>
                      <p className="text-base font-bold text-blue-900">2026</p>
                    </div>

                    {/* Date */}
                    <div className="text-center">
                      <p className="text-3xl font-bold text-blue-900">9 - 11</p>
                    </div>
                    <div className="">
                      <p className="text-sm font-bold text-blue-900 mt-1">{month} 2026</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SlideVexora;
