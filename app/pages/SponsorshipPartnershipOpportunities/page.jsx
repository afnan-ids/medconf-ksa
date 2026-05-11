"use client";

import { useState, useEffect } from "react";
import {
  Crown,
  Diamond,
  Medal,
  Briefcase,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Users,
  Calendar,
  Star,
  Shield,
  Megaphone,
  ParkingCircle,
  ChartBar,
  UserCircle,
  MapPin,
  Rocket,
  Award,
  Heart,
  Zap,
  Building2,
  Target,
  Globe,
  BarChart3,
  Mail,
  Phone,
  Clock,
  ChevronRight,
} from "lucide-react";
import BreadCrumb from "../../Components/BreadCrum";
import Link from "next/link";

export default function SponsorshipPage() {
  const [selectedTier, setSelectedTier] = useState("strategic");
  const [hoveredCard, setHoveredCard] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sponsorshipTiers = [
    {
      id: "strategic",
      nameAr: "الراعي الاستراتيجي",
      nameEn: "Strategic Partner",
      icon: Crown,
      color: "from-indigo-500 to-purple-600",
      gradient: "from-indigo-600/20 to-purple-600/20",
      borderColor: "border-indigo-500/30",
      price: "2,000,000 SAR",
      space: "230",
      features: [
        {
          textAr: "دعم تسويقي وفق الخطة المرفقة",
          textEn: "Marketing support as per attached plan",
        },
        {
          textAr: "مدير حساب مخصص للشريك",
          textEn: "Dedicated partnership manager",
        },
        { textAr: "مواقف VVIP (عدد 2)", textEn: "2 VVIP parking spaces" },
        { textAr: "مواقف VIP (عدد 4)", textEn: "4 VIP parking spaces" },
        { textAr: "تقرير أداء مخصص", textEn: "Dedicated performance report" },
      ],
      popular: true,
      badge: " Best Value",
    },
    {
      id: "platinum",
      nameAr: "الراعي البلاتيني",
      nameEn: "Platinum Partner",
      icon: Diamond,
      color: "from-cyan-500 to-teal-600",
      gradient: "from-cyan-600/20 to-teal-600/20",
      borderColor: "border-cyan-500/30",
      price: "1,500,000 SAR",
      space: "160",
      features: [
        {
          textAr: "دعم تسويقي وفق الخطة المرفقة",
          textEn: "Marketing support as per attached plan",
        },
        {
          textAr: "مدير حساب مخصص للشريك",
          textEn: "Dedicated partnership manager",
        },
        { textAr: "مواقف VIP (عدد 4)", textEn: "4 VIP parking spaces" },
        { textAr: "تقرير أداء مخصص", textEn: "Dedicated performance report" },
      ],
      popular: false,
    },
    {
      id: "gold",
      nameAr: "الراعي الذهبي",
      nameEn: "Gold Partner",
      icon: Medal,
      color: "from-emerald-500 to-green-600",
      gradient: "from-emerald-600/20 to-green-600/20",
      borderColor: "border-emerald-500/30",
      price: "1,000,000 SAR",
      space: "120",
      features: [
        {
          textAr: "دعم تسويقي وفق الخطة المرفقة",
          textEn: "Marketing support as per attached plan",
        },
        { textAr: "مدير حساب مخصص", textEn: "Dedicated partnership manager" },
        { textAr: "مواقف VIP (عدد 3)", textEn: "3 VIP parking spaces" },
        { textAr: "تقرير أداء مخصص", textEn: "Dedicated performance report" },
      ],
      popular: false,
    },
    {
      id: "business",
      nameAr: "باقة الأعمال",
      nameEn: "Business Package",
      icon: Briefcase,
      color: "from-blue-500 to-indigo-600",
      gradient: "from-blue-600/20 to-indigo-600/20",
      borderColor: "border-blue-500/30",
      price: "تحديد حسب المساحة",
      priceNote: "Based on space & location",
      space: "متنوعة",
      customPrice: true,
      features: [
        {
          textAr: "مساحات مختلفة بمواقع متعددة",
          textEn: "Various spaces in multiple locations",
        },
        {
          textAr: "دعم تسويقي وفق الخطة المرفقة",
          textEn: "Marketing support as per attached plan",
        },
        { textAr: "مدير حساب مخصص", textEn: "Dedicated partnership manager" },
        { textAr: "مواقف VIP (عدد 2)", textEn: "2 VIP parking spaces" },
        {
          textAr: "تقرير أداء عام عن المؤتمر",
          textEn: "Overall event performance report",
        },
      ],
      popular: false,
    },
  ];

  const benefits = [
    {
      icon: Users,
      textAr: "الوصول إلى أكثر من 5,000 من صناع القرار",
      textEn: "Access 5,000+ decision makers",
      stat: "5,000+",
      statLabel: "Decision Makers",
    },
    {
      icon: BarChart3,
      textAr: "ظهور العلامة التجارية قبل وأثناء وبعد الحدث",
      textEn: "Pre, during & post-event visibility",
      stat: "360°",
      statLabel: "Brand Exposure",
    },
    {
      icon: Calendar,
      textAr: "اجتماعات ثنائية حصرية",
      textEn: "Exclusive B2B meetings",
      stat: "50+",
      statLabel: "B2B Meetings",
    },
    {
      icon: Award,
      textAr: "شهادة تقدير من المنظمين",
      textEn: "Certificate of appreciation",
      stat: "100%",
      statLabel: "Recognition",
    },
    {
      icon: Globe,
      textAr: "تغطية إعلامية على جميع المنصات",
      textEn: "Media coverage across platforms",
      stat: "10M+",
      statLabel: "Media Reach",
    },
    {
      icon: Heart,
      textAr: "عضوية VIP في الفعاليات المستقبلية",
      textEn: "VIP membership for future events",
      stat: "24/7",
      statLabel: "VIP Support",
    },
  ];

  const stats = [
    { label: "Corporate Leaders", value: "5,000+", icon: Users },
    { label: "Media Impressions", value: "10M+", icon: Globe },
    { label: "Success Rate", value: "98%", icon: TrendingUp },
    { label: "Global Reach", value: "50+", icon: Target },
  ];

  return (
    <>
      <BreadCrumb
        title="Sponsorship Opportunities"
        backgroundImage="/Images/Home/Bread-crum-1.avif"
        path={[{ label: "Sponsorship" }]}
      />

      <section className="relative min-h-screen py-12 md:py-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-900">
          <div className="absolute top-10 left-10 w-32 h-32 sm:w-72 sm:h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 sm:w-80 sm:h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-96 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="relative text-center mb-20">
            <div className="relative max-w-5xl mx-auto">
              {/* Floating Badge */}
              <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full px-6 py-2.5 mb-8 border border-white/10 hover:border-teal-500/30 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4">
                <Sparkles className="w-4 h-4 text-teal-400 animate-pulse" />
                <span className="text-sm font-medium text-gray-300 tracking-wide">
                  PARTNERSHIP 2026
                </span>
                <div className="w-1 h-1 bg-teal-400 rounded-full"></div>
                <span className="text-xs text-teal-400 font-semibold">
                  Limited Slots Available
                </span>
              </div>

              {/* Main Title */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
                <span className="text-white">Sponsorship &</span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-300 bg-clip-text text-transparent animate-gradient-x">
                  Strategic Partnerships
                </span>
              </h1>

              <div className="flex justify-center">
                <div className="w-20 sm:w-30 md:w-40 h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
              </div>

              {/* Arabic Text */}
              <div className="mt-8" dir="rtl">
                <p className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-300">
                  فرص الرعاية والشراكات الاستراتيجية
                </p>
                <p className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-300 bg-clip-text text-transparent mt-2">
                  كن شريكاً في صياغة مستقبل التحول الصحي 2026
                </p>
              </div>

              {/* Description */}
              <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto mt-6 leading-relaxed">
                Position your brand at the forefront of healthcare innovation in
                Saudi Arabia
              </p>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mb-24">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-teal-500/50 transition-all duration-300 transform hover:-translate-y-2 group"
                  >
                    <div className="mb-3 flex justify-center">
                      <div className="p-3 rounded-full bg-gradient-to-br from-teal-500/20 to-blue-500/20 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-teal-400" />
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-24">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
                <Star className="w-3.5 h-3.5 text-teal-400" />
                <span className="text-teal-400 text-sm font-semibold uppercase tracking-wide">
                  Benefits
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
                Why Partner{" "}
                <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-300 bg-clip-text text-transparent">
                  With Us
                </span>
              </h2>
              <div className="flex justify-center mt-3">
                <div className="w-16 sm:w-20 md:w-24 h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
              </div>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-6">
                Unlock exclusive opportunities and maximize your brand's impact
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={index}
                    className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-teal-500/50 transition-all duration-300 hover:translate-y-[-4px] hover:shadow-xl"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-teal-500/20 to-blue-500/20 group-hover:from-teal-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                        <Icon className="w-6 h-6 text-teal-400" />
                      </div>
                      <div className="flex-1">
                        <p className="text-white font-semibold mb-1 group-hover:text-teal-400 transition-colors">
                          {benefit.textEn}
                        </p>
                        <p className="text-gray-400 text-sm" dir="rtl">
                          {benefit.textAr}
                        </p>
                        {benefit.stat && (
                          <div className="mt-2 pt-2 border-t border-gray-700">
                            <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">
                              {benefit.stat}
                            </div>
                            <div className="text-xs text-gray-500">
                              {benefit.statLabel}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Sponsorship Packages */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
                <Star className="w-3.5 h-3.5 text-yellow-400" />
                <span className="text-yellow-400 text-sm font-semibold uppercase tracking-wide">
                  Packages
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                <span className="text-white">Partnership </span>
                <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-300 bg-clip-text text-transparent">
                  Packages
                </span>
              </h1>
              <div className="flex justify-center">
                <div className="w-16 sm:w-20 md:w-24 h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
              </div>
              <p className="text-gray-400 ">
                Choose the package that fits your goals
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {sponsorshipTiers.map((tier, idx) => {
                const Icon = tier.icon;
                const getIconColor = () => {
                  if (tier.color.includes("indigo"))
                    return "from-indigo-400 to-purple-400";
                  if (tier.color.includes("cyan"))
                    return "from-cyan-400 to-teal-400";
                  if (tier.color.includes("emerald"))
                    return "from-emerald-400 to-green-400";
                  return "from-blue-400 to-indigo-400";
                };

                return (
                  <div className="relative">
                     {/* Badge */}
                    {tier.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-100">
                        <zdiv
                          className={`bg-gradient-to-r ${getIconColor()} text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1 whitespace-nowrap`}
                        >
                          <Star className="w-2.5 h-2.5 fill-white" />
                          RECOMMENDED
                        </zdiv>
                      </div>
                    )}
                  <div
                    key={tier.id}
                    className="group relative bg-white/5 backdrop-blur-xl rounded-2xl border border-white/15 hover:border-white/30 shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col overflow-hidden"
                  >
                    {/* Animated gradient border on hover */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${getIconColor()} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}
                    ></div>

                   

                    {/* Card Content */}
                    <div className="relative p-5 flex flex-col h-full">
                      {/* Header */}
                      <div className="text-center mb-5">
                        <div
                          className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${getIconColor()} bg-opacity-15 backdrop-blur-sm mb-3 border border-white/20 group-hover:scale-110 transition-all duration-300 group-hover:shadow-lg`}
                        >
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-white tracking-tight">
                          {tier.nameEn}
                        </h3>
                        <p
                          className="text-[11px] text-gray-400 mt-1.5"
                          dir="rtl"
                        >
                          {tier.nameAr}
                        </p>
                      </div>

                      {/* Price Card */}
                      <div className="text-center mb-5 p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                        <div className="text-2xl font-bold text-white">
                          {tier.price}
                        </div>
                        {tier.priceNote ? (
                          <div className="text-[10px] text-gray-400 mt-1">
                            {tier.priceNote}
                          </div>
                        ) : (
                          <div className="text-[10px] text-gray-500 mt-1">
                            {tier.space} m² space
                          </div>
                        )}
                      </div>

                      {/* Benefits */}
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-3">
                          <div
                            className={`w-1 h-3 bg-gradient-to-r ${getIconColor()} rounded-full`}
                          ></div>
                          <div className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">
                            What's Included
                          </div>
                        </div>
                        <div className="space-y-2.5">
                          {tier.features.map((feature, fIdx) => (
                            <div key={fIdx} className="flex items-start gap-2">
                              <div className="mt-1">
                                <div
                                  className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${getIconColor()}`}
                                ></div>
                              </div>
                              <div>
                                <div className="text-xs text-gray-300">
                                  {feature.textEn}
                                </div>
                                <div
                                  className="text-[10px] text-gray-500 mt-0.5"
                                  dir="rtl"
                                >
                                  {feature.textAr}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Footer */}
                      <div className="mt-5 pt-3 border-t border-white/10">
                        <p className="text-center text-[10px] text-gray-500">
                          *Contact partnership team for detailed package
                          information
                        </p>
                      </div>
                    </div>
                  </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="mb-24">
            <div className="bg-gradient-to-br from-indigo-900/30 to-purple-900/30 rounded-3xl p-8 md:p-12 border border-white/10">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Why Choose{" "}
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Our Partnership
                  </span>
                </h2>
                <div className="flex justify-center">
                  <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    icon: Shield,
                    title: "Proven Track Record",
                    description:
                      "20+ successful partnerships in healthcare sector",
                  },
                  {
                    icon: Target,
                    title: "Targeted Audience",
                    description: "Direct access to key decision makers",
                  },
                  {
                    icon: Rocket,
                    title: "Innovation Focus",
                    description: "Showcase your brand at forefront of change",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="text-center p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="inline-flex p-3 rounded-full bg-gradient-to-br from-teal-500/30 to-blue-500/30 mb-4">
                      <item.icon className="w-8 h-8 text-teal-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="relative overflow-hidden rounded-3xl">
            <div className="absolute inset-0 bg-[url('/Images/Home/Bread-crum-1.avif')] bg-cover bg-center"></div>

            <div className="relative py-16 px-6 text-center">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <Mail className="w-4 h-4 text-white" />
                <span className="text-sm text-white">Get in Touch</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Ready to Partner With Us?
              </h2>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Let's discuss how we can create a custom partnership package
                that aligns with your goals and maximizes your ROI
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/pages/Events"
                  className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center gap-2"
                >
                  Contact Partnership Team
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="mt-8 flex items-center justify-center gap-4 text-sm text-gray-400">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>Response within 24h</span>
                </div>
                <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                <div className="flex items-center gap-1">
                  <Mail className="w-4 h-4" />
                  <span>partnership@event.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes gradient-x {
          0%,
          100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </>
  );
}
