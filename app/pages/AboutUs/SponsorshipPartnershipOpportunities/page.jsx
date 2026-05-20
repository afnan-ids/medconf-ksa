"use client";

import { useState } from "react";
import {
  Crown,
  Diamond,
  Medal,
  Briefcase,
  ArrowRight,
  Sparkles,
  Users,
  Calendar,
  Star,
  Shield,
  Globe,
  Award,
  Heart,
  Target,
  Rocket,
  Mail,
  Clock,
  CheckCircle,
  TrendingUp,
} from "lucide-react";
import BreadCrumb from "../../../Components/BreadCrum";
import Link from "next/link";
import { GrServices } from "react-icons/gr";

export default function SponsorshipPage() {
  const sponsorshipTiers = [
    {
      id: "strategic",
      name: "Strategic Partner",
      nameAr: "الراعي الاستراتيجي",
      icon: Crown,
      description:
        "Maximum visibility and exclusive benefits for industry leaders",
      color: "from-indigo-500 to-purple-600",
      price: "2,000,000 SAR",
      space: "230 m²",
      features: [
        "Marketing support as per attached plan",
        "Dedicated partnership manager",
        "2 VVIP parking spaces",
        "4 VIP parking spaces",
        "Dedicated performance report",
      ],
      featuresAr: [
        "دعم تسويقي وفق الخطة المرفقة",
        "مدير حساب مخصص للشريك",
        "مواقف VVIP (عدد 2)",
        "مواقف VIP (عدد 4)",
        "تقرير أداء مخصص",
      ],
      popular: true,
      badge: "Best Value",
    },
    {
      id: "platinum",
      name: "Platinum Partner",
      nameAr: "الراعي البلاتيني",
      icon: Diamond,
      description: "Premium exposure with comprehensive benefits",
      color: "from-cyan-500 to-teal-600",
      price: "1,500,000 SAR",
      space: "160 m²",
      features: [
        "Marketing support as per attached plan",
        "Dedicated partnership manager",
        "4 VIP parking spaces",
        "Dedicated performance report",
      ],
      featuresAr: [
        "دعم تسويقي وفق الخطة المرفقة",
        "مدير حساب مخصص للشريك",
        "مواقف VIP (عدد 4)",
        "تقرير أداء مخصص",
      ],
      popular: false,
    },
    {
      id: "gold",
      name: "Gold Partner",
      nameAr: "الراعي الذهبي",
      icon: Medal,
      description: "Strong brand presence with key benefits",
      color: "from-emerald-500 to-green-600",
      price: "1,000,000 SAR",
      space: "120 m²",
      features: [
        "Marketing support as per attached plan",
        "Dedicated partnership manager",
        "3 VIP parking spaces",
        "Dedicated performance report",
      ],
      featuresAr: [
        "دعم تسويقي وفق الخطة المرفقة",
        "مدير حساب مخصص",
        "مواقف VIP (عدد 3)",
        "تقرير أداء مخصص",
      ],
      popular: false,
    },
    {
      id: "business",
      name: "Business Package",
      nameAr: "باقة الأعمال",
      icon: Briefcase,
      description: "Flexible solutions tailored to your needs",
      color: "from-blue-500 to-indigo-600",
      price: "Custom pricing",
      space: "Flexible space",
      features: [
        "Various spaces in multiple locations",
        "Marketing support as per attached plan",
        "Dedicated partnership manager",
        "2 VIP parking spaces",
        "Overall event performance report",
      ],
      featuresAr: [
        "مساحات مختلفة بمواقع متعددة",
        "دعم تسويقي وفق الخطة المرفقة",
        "مدير حساب مخصص",
        "مواقف VIP (عدد 2)",
        "تقرير أداء عام عن المؤتمر",
      ],
      popular: false,
      customPrice: true,
    },
  ];

  const benefits = [
    {
      icon: Users,
      title: "Access 5,000+ Decision Makers",
      titleAr: "الوصول إلى أكثر من 5,000 من صناع القرار",
      stat: "5,000+",
      statLabel: "Decision Makers",
    },
    {
      icon: TrendingUp,
      title: "360° Brand Exposure",
      titleAr: "ظهور العلامة التجارية قبل وأثناء وبعد الحدث",
      stat: "360°",
      statLabel: "Brand Exposure",
    },
    {
      icon: Calendar,
      title: "Exclusive B2B Meetings",
      titleAr: "اجتماعات ثنائية حصرية",
      stat: "50+",
      statLabel: "B2B Meetings",
    },
    {
      icon: Award,
      title: "Official Recognition",
      titleAr: "شهادة تقدير من المنظمين",
      stat: "100%",
      statLabel: "Recognition",
    },
    {
      icon: Globe,
      title: "Global Media Coverage",
      titleAr: "تغطية إعلامية على جميع المنصات",
      stat: "10M+",
      statLabel: "Media Reach",
    },
    {
      icon: Heart,
      title: "VIP Future Access",
      titleAr: "عضوية VIP في الفعاليات المستقبلية",
      stat: "24/7",
      statLabel: "VIP Support",
    },
  ];

  const stats = [
    { value: "5,000+", label: "Corporate Leaders", icon: Users },
    { value: "10M+", label: "Media Impressions", icon: Globe },
    { value: "98%", label: "Success Rate", icon: TrendingUp },
    { value: "50+", label: "Global Reach", icon: Target },
  ];

  return (
    <>
      <BreadCrumb
        title="Sponsorship Opportunities"
        backgroundImage="/Images/Home/Bread-crum-1.avif"
        path={[{ label: "Sponsorship" }]}
      />

      <section className="relative py-8 sm:py-10 md:py-12 lg:py-16 overflow-hidden">
        {/* Animated Background - Same as services section */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-900">
          <div className="absolute top-10 left-10 w-32 h-32 sm:w-72 sm:h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 sm:w-80 sm:h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-96 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto ">
          {/* Section Header - Matching services section */}
          <div className="text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-1 sm:gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6 md:mb-8">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
              <span className="text-xs sm:text-sm font-medium text-gray-300">
                Partnership Opportunities 2026
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 px-2">
              <span className="text-white">Sponsorship &</span>
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-300 bg-clip-text text-transparent">
                {" "}
                Strategic Partnerships
              </span>
            </h2>

            <div className="relative max-w-3xl mx-auto">
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-16 sm:w-20 md:w-24 h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed px-4">
                Position your brand at the forefront of healthcare innovation in
                Saudi Arabia. Partner with us to shape the future of healthcare
                transformation.
              </p>
            </div>

            {/* Arabic Title */}
            <div className="mt-6" dir="rtl">
              <p className="text-xl sm:text-2xl md:text-3xl font-light text-gray-300">
                فرص الرعاية والشراكات الاستراتيجية
              </p>
              <p className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-300 bg-clip-text text-transparent mt-2">
                كن شريكاً في صياغة مستقبل التحول الصحي 2026
              </p>
            </div>
          </div>

          {/* Stats Section - Matching card style */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16 sm:mb-20 md:mb-24">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="group relative rounded-xl sm:rounded-2xl p-4 sm:p-6 bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-1"
                >
                  <div className="text-center">
                    <div className="inline-flex p-2 sm:p-3 rounded-lg sm:rounded-xl bg-white/10 mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-500">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-teal-400" />
                    </div>
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-400">
                      {stat.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

         

          {/* Sponsorship Packages Grid - Matching services card style */}
          <div className="mb-16 sm:mb-20 md:mb-24">
            <div className="text-center mb-10 sm:mb-12 md:mb-16">
              <div className="inline-flex items-center gap-1 sm:gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6">
                <Crown className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400" />
                <span className="text-xs sm:text-sm font-medium text-gray-300">
                  Partnership Packages
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
                <span className="text-white">Choose Your</span>
                <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-300 bg-clip-text text-transparent">
                  {" "}
                  Partnership Level
                </span>
              </h3>
              <div className="relative max-w-3xl mx-auto">
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-16 sm:w-20 md:w-24 h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
                <p className="text-sm sm:text-base text-gray-400 px-4 mt-4">
                  Select the package that aligns with your business objectives
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
              {sponsorshipTiers.map((tier, index) => {
                const Icon = tier.icon;
                return (
                  <div key={tier.id} className="group relative">
                    {/* Card with Glass Morphism - Matching services section */}
                    <div className="relative h-full rounded-xl sm:rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                      {/* Gradient hover effect - From services section */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${tier.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                      ></div>

                      {/* Shine effect - From services section */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                      </div>

                      {/* Top Accent Bar - Kept for sharpness */}
                      <div
                        className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${tier.color} transform -translate-y-full group-hover:translate-y-0 transition-transform duration-700`}
                      ></div>

                      <div className="relative p-4 sm:p-5 md:p-6 flex flex-col h-full">
                        {/* Icon Section - Original glass style */}
                        <div className="relative mb-4 sm:mb-5 md:mb-6">
                          <div
                            className={`absolute inset-0 bg-gradient-to-r ${tier.color} rounded-lg sm:rounded-xl blur-md sm:blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500`}
                          ></div>
                          <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl flex items-center justify-center border border-white/20 bg-white/10 group-hover:bg-white/20 transition-all duration-500">
                            <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white group-hover:scale-110 transition-transform duration-500" />
                          </div>

                          {/* Index number - From services section */}
                          <span className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-xs sm:text-sm font-bold text-white/60">
                            {index + 1}
                          </span>
                        </div>

                        {/* Title Section - With hover text gradient from services */}
                        <div className="mb-3 sm:mb-4">
                          <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-500">
                            {tier.name}
                          </h3>
                          <p
                            className="text-xs sm:text-sm text-gray-400 mb-1"
                            dir="rtl"
                          >
                            {tier.nameAr}
                          </p>
                          <p className="text-xs text-gray-500">
                            {tier.description}
                          </p>
                          <div
                            className={`w-8 h-0.5 bg-gradient-to-r ${tier.color} mt-3`}
                          ></div>
                        </div>

                        {/* Price Point - Glass style */}
                        <div className="mb-4 sm:mb-5 p-2 sm:p-3 rounded-lg bg-white/5 border border-white/10">
                          <div className="text-lg sm:text-xl font-bold text-white">
                            {tier.price}
                          </div>
                          <div className="text-[10px] sm:text-xs text-gray-400">
                            {tier.space}
                          </div>
                        </div>

                        {/* Benefits - Original list style from services */}
                        <div className="flex-1 mb-4 sm:mb-5">
                          <div className="space-y-1.5 sm:space-y-2">
                            {tier.features.slice(0, 3).map((feature, idx) => (
                              <div
                                key={idx}
                                className="flex items-start gap-1.5 sm:gap-2"
                              >
                                <div
                                  className={`w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-gradient-to-r ${tier.color} mt-1.5`}
                                ></div>
                                <p className="text-xs sm:text-sm text-gray-300">
                                  {feature}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Mobile button - Original style from services */}
                        <div className="md:hidden mt-3">
                          <button
                            className={`inline-flex items-center justify-center gap-1 sm:gap-2 w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg sm:rounded-xl bg-gradient-to-r ${tier.color} text-white text-xs sm:text-sm font-semibold hover:shadow-lg transition-all duration-300 group/btn`}
                          >
                            Request Information
                            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover/btn:translate-x-1 transition-transform" />
                          </button>
                        </div>

                        {/* Bottom accent line - Original from services */}
                        <div
                          className={`absolute bottom-0 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r ${tier.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                        ></div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="relative mb-20 sm:mb-24 max-w-5xl mx-auto text-center px-4">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 bg-white/8 backdrop-blur-md border border-white/10 rounded-full px-4 py-2 mb-8 shadow-lg shadow-cyan-500/5">
              <Shield className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-medium tracking-wide text-gray-300">
                Why Industry Leaders Choose Us
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
              The{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-300 bg-clip-text text-transparent">
                Strategic Advantage
              </span>
            </h3>

            {/* Subtext */}
            <p className="max-w-2xl mx-auto text-gray-400 text-base sm:text-lg leading-relaxed mb-10">
              Trusted by leading healthcare organizations to deliver measurable
              growth, targeted outreach, and long-term strategic impact.
            </p>

            {/* Features */}
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              {[
                "Proven Track Record",
                "Targeted Audience",
                "Innovation Focus",
                "Data-Driven Strategy",
              ].map((item) => (
                <div
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                >
                  <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section  */}
          <div className="relative rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-[url('/Images/Home/Bread-crum-1.avif')] bg-cover bg-center"></div>

            <div className="relative p-8 sm:p-10 md:p-12 lg:p-16 text-center">
              <div className="inline-flex items-center gap-1 sm:gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6">
                <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
                <span className="text-xs sm:text-sm font-medium text-gray-300">
                  Get in Touch
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
                Ready to Partner With Us?
              </h2>
              <p className="text-sm sm:text-base text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
                Let's discuss how we can create a custom partnership package
                that aligns with your goals and maximizes your ROI
              </p>

              <Link
                href="/pages/Events"
                className="group inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Contact Partnership Team
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-400">
                <div className="flex items-center gap-1 sm:gap-2">
                  <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>Response within 24h</span>
                </div>
                <div className="hidden sm:block w-1 h-1 bg-gray-600 rounded-full"></div>
                <div className="flex items-center gap-1 sm:gap-2">
                  <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>partnership@event.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom gradient fade - Matching services section */}
        <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-20 md:h-24 lg:h-32 bg-gradient-to-t from-gray-900 to-transparent pointer-events-none"></div>
      </section>
    </>
  );
}
