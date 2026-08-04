"use client"
import { 
  BuildingOffice2Icon, 
  UserGroupIcon, 
  UserIcon, 
  HeartIcon, 
  AcademicCapIcon,
  ArrowRightIcon,
  BriefcaseIcon,
  TrophyIcon,
  BuildingLibraryIcon
} from '@heroicons/react/24/outline';
import {Stethoscope } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../il18/translations";
import Link from 'next/link';

export default function RegistrationPage() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-900">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 py-4 px-3 sm:py-8 lg:py-14 lg:px-0 max-w-7xl mx-auto">
        <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
          {/* Header Banner */}
          <div className="mb-8 md:mb-12 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              {language === 'ar' ? 'سجل الآن' : 'Register Now'}
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              {language === 'ar' 
                ? 'اختر نوع التسجيل المناسب لك' 
                : 'Choose the right registration type for you'}
            </p>
            <div className="mt-4 inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 text-green-400 px-4 py-2 rounded-full">
              <span className="text-sm font-medium"> All registrations are FREE</span>
            </div>
          </div>

          {/* Two Main Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            
            {/* Card 1: Attendees (Visitors & Professionals) */}
            <Link href="https://hpql-visitor.i-diligence.com/Registration/">
              <div className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/10 cursor-pointer h-full">
                <div className="p-8">
                  {/* Icons */}
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-400/20">
                      <UserIcon className="w-7 h-7 text-cyan-400" />
                    </div>
                    <div className="text-gray-400 text-2xl font-thin">+</div>
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-emerald-500/20 to-teal-400/20">
                      <Stethoscope className="w-7 h-7 text-emerald-400" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white text-center mb-2">
                    Attendees
                  </h3>
                  <p className="text-sm text-gray-400 text-center mb-2">
                    Register as a visitor or healthcare professional
                  </p>
                  
                  <div className="flex flex-col gap-2 mt-4">
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <UserIcon className="w-4 h-4 text-cyan-400" />
                      <span>Visitor Registration</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <Stethoscope className="w-4 h-4 text-emerald-400" />
                      <span>Professional Registration</span>
                      <span className="text-xs text-emerald-400">(License number required)</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="mt-6">
                    <div className="block w-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-bold py-3 px-4 rounded-xl text-center transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-cyan-500/25">
                      <div className="flex items-center justify-center gap-2">
                        <span>Register as Attendee</span>
                        <ArrowRightIcon className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Card 2: Business (Sponsors & Exhibitors) */}
            <Link href="https://hpql-sponsor.i-diligence.com/Registration/">
              <div className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/10 cursor-pointer h-full">
                {/* Limited Availability Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="inline-block bg-red-500/90 text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider animate-pulse">
                    LIMITED AVAILABILITY
                  </span>
                </div>

                <div className="p-8">
                  {/* Icons */}
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-purple-500/20 to-indigo-400/20">
                      <TrophyIcon className="w-7 h-7 text-indigo-400" />
                    </div>
                    <div className="text-gray-400 text-2xl font-thin">+</div>
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-rose-500/20 to-pink-400/20">
                      <BuildingLibraryIcon className="w-7 h-7 text-rose-400" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white text-center mb-2">
                    Business
                  </h3>
                  <p className="text-sm text-gray-400 text-center mb-2">
                    Register as a sponsor or exhibitor
                  </p>
                  
                  <div className="flex flex-col gap-2 mt-4">
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <TrophyIcon className="w-4 h-4 text-indigo-400" />
                      <span>Sponsor Registration</span>
                      <span className="text-xs text-indigo-400">(Gold • Silver • Bronze)</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <BuildingLibraryIcon className="w-4 h-4 text-rose-400" />
                      <span>Exhibitor Registration</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="mt-6">
                    <div className="block w-full bg-gradient-to-r from-purple-500 to-indigo-400 text-white font-bold py-3 px-4 rounded-xl text-center transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-purple-500/25">
                      <div className="flex items-center justify-center gap-2">
                        <span>Register as Business</span>
                        <ArrowRightIcon className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <p className="text-sm text-gray-400">
              {language === 'ar' 
                ? 'للحصول على معلومات إضافية، يرجى التواصل مع فريق الدعم'
                : 'For additional information, please contact our support team'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}