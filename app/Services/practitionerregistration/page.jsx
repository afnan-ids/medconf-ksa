"use client";

import {
  Calendar,
  MapPin,
  UserCheck,
  Sparkles,
  ArrowRight,
  Users,
  Mic,
  Target,
  Award,
  Clock,
  Globe,
  CheckCircle,
  UserPlus,
  BadgeCheck,
  Network,
  Lightbulb,
  TrendingUp,
  FileCheck,
  MailCheck,
  CalendarCheck,
  UserCog,
  Stethoscope,
  ClipboardCheck,
  GraduationCap,
  TicketCheckIcon,
} from "lucide-react";
import BreadCrumb from "../../Components/BreadCrum";
import Link from "next/link";
import { FaRegistered } from "react-icons/fa";

export default function PractitionerRegistration() {
  const benefits = [
    {
      icon: Lightbulb,
      title: "Knowledge Sharing",
      description:
        "Attend educational sessions and learn about the latest medical innovations.",
      color: "from-amber-500 to-orange-400",
      stats: "50+ Sessions",
    },
    {
      icon: Network,
      title: "Networking",
      description: "Connect with doctors, researchers, and healthcare experts.",
      color: "from-blue-500 to-cyan-400",
      stats: "1000+ Peers",
    },
    {
      icon: TrendingUp,
      title: "Industry Insights",
      description:
        "Explore new technologies and medical solutions from leading companies.",
      color: "from-purple-500 to-pink-400",
      stats: "200+ Exhibitors",
    },
    {
      icon: GraduationCap,
      title: "Professional Growth",
      description:
        "Enhance your professional network and career opportunities.",
      color: "from-green-500 to-emerald-400",
      stats: "CME Credits",
    },
  ];

  const process = [
    {
      icon: FileCheck,
      title: "Sign Up",
      description:
        "Fill out the practitioner registration form with your details.",
      color: "from-blue-500 to-cyan-400",
      step: "01",
    },
    {
      icon: BadgeCheck,
      title: "Verification",
      description:
        "Our team verifies your professional credentials and license.",
      color: "from-purple-500 to-pink-400",
      step: "02",
    },
    {
      icon: MailCheck,
      title: "Confirmation",
      description: "Receive confirmation and event access details via email.",
      color: "from-amber-500 to-orange-400",
      step: "03",
    },
    {
      icon: CalendarCheck,
      title: "Attend Event",
      description:
        "Participate in conferences, workshops, and networking sessions.",
      color: "from-green-500 to-emerald-400",
      step: "04",
    },
  ];

  const practitionerTypes = [
    {
      title: "Physicians & Specialists",
      description: "Medical doctors across all specialties",
      icon: Stethoscope,
      color: "from-blue-500 to-cyan-400",
    },
    {
      title: "Researchers & Academics",
      description: "Medical researchers and faculty members",
      icon: GraduationCap,
      color: "from-purple-500 to-pink-400",
    },
    {
      title: "Healthcare Administrators",
      description: "Hospital and clinic management professionals",
      icon: UserCog,
      color: "from-amber-500 to-orange-400",
    },
    {
      title: "Allied Health Professionals",
      description: "Nurses, technicians, and therapists",
      icon: ClipboardCheck,
      color: "from-green-500 to-emerald-400",
    },
  ];

  const features = [
    {
      text: "SCFHS license verification included",
      color: "from-blue-500 to-cyan-400",
    },
    {
      text: "Access to all conference sessions",
      color: "from-purple-500 to-pink-400",
    },
    {
      text: "Exhibitor hall access",
      color: "from-amber-500 to-orange-400",
    },
    {
      text: "Networking lounge access",
      color: "from-green-500 to-emerald-400",
    },
    {
      text: "CME/CPD credit tracking",
      color: "from-blue-500 to-cyan-400",
    },
    {
      text: "Workshop participation",
      color: "from-purple-500 to-pink-400",
    },
    {
      text: "Event materials & resources",
      color: "from-amber-500 to-orange-400",
    },
    {
      text: "Post-event content access",
      color: "from-green-500 to-emerald-400",
    },
  ];

  return (
    <>
      <BreadCrumb
        title="Practitioner Registration"
        backgroundImage="/Images/Home/Bread-crum-1.avif"
        path={[{ label: "Services" }, { label: "Practitioner Registration" }]}
      />

      <section className="relative py-16 overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>

          {/* Grid Pattern */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <UserCheck className="w-4 h-4 text-emerald-400" />
              <span className="text-sm font-medium text-gray-300">
                Join 5,000+ Healthcare Professionals
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-white">Practitioner</span>
              <br />
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Registration
              </span>
            </h1>

            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10">
              Register as a healthcare practitioner to access exclusive
              conferences, workshops, and networking events. Connect with peers
              and stay at the forefront of medical innovation.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
            {[
              { number: "5000+", label: "Active Members", icon: Users },
              { number: "150+", label: "Events Yearly", icon: Calendar },
              { number: "30+", label: "Specialties", icon: Stethoscope },
              { number: "50+", label: "CME Credits", icon: Award },
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300"
                >
                  <Icon className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              );
            })}
          </div>

          {/* Practitioner Types Grid */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Who Can
                <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  {" "}
                  Register?
                </span>
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Our registration is open to all qualified healthcare
                professionals looking to expand their knowledge and network.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {practitionerTypes.map((type, index) => {
                const Icon = type.icon;
                return (
                  <div
                    key={index}
                    className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
                  >
                    <div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-r ${type.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      {type.title}
                    </h3>
                    <p className="text-sm text-gray-400">{type.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Benefits of
                <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  {" "}
                  Registration
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={index}
                    className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-r ${benefit.color} flex items-center justify-center`}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-xs font-semibold text-emerald-400 bg-emerald-400/10 px-3 py-1 rounded-full">
                        {benefit.stats}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {benefit.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Process Timeline */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Simple
                <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  {" "}
                  4-Step Process
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {process.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="relative">
                    {index < process.length - 1 && (
                      <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-emerald-500 to-cyan-500"></div>
                    )}
                    <div className="relative z-10 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                      <div
                        className={`w-16 h-16 rounded-xl bg-gradient-to-r ${step.color} flex items-center justify-center mb-4 mx-auto`}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-center">
                        <span
                          className={`text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r ${step.color} block mb-2`}
                        >
                          Step {step.step}
                        </span>
                        <h3 className="text-lg font-bold text-white mb-2">
                          {step.title}
                        </h3>
                        <p className="text-sm text-gray-400">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Features Cloud */}
          <div className="mb-20">
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
                Everything Included in Your
                <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  {" "}
                  Registration
                </span>
              </h3>

              <div className="flex flex-wrap justify-center gap-3">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className={`px-4 py-2 rounded-full bg-gradient-to-r ${feature.color} bg-opacity-10 hover:scale-105 transition-transform duration-300 cursor-default shadow-lg`}
                    style={{
                      background: `linear-gradient(to right, ${feature.color.split(" ")[1]}, ${feature.color.split(" ")[3]})`,
                    }}
                  >
                    <span className="text-sm text-white font-medium whitespace-nowrap">
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-600 via-cyan-600 to-blue-600">
              <div className="absolute inset-0 bg-[url('/Images/Home/Bread-crum-1.avif')] bg-cover bg-center"></div>{" "}
              {/* Background Pattern */}
              <div className="absolute inset-0">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
              </div>
              <div className="relative py-16 px-8 text-center">
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 mb-6">
                  <FaRegistered className="w-4 h-4 text-white" />
                  <span className="text-sm font-medium text-white">
                    Limited Time Offer
                  </span>
                </div>

                <h4 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready to Join?
                </h4>

                <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                  Become part of a professional healthcare network and stay
                  updated with the latest industry innovations.
                </p>

                <button className="group inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300">
                  Register Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <p className="text-white/70 text-sm mt-4">
                  Free registration for limited time • Verified professionals
                  only
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
