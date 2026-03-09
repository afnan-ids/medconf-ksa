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
  Download,
  Phone,
  Star,
  Zap,
  Shield,
  TrendingUp,
  BarChart3,
  Compass,
  Coffee,
  Video,
  Settings,
  Heart,
  Briefcase,
  MessageSquare,
  Camera,
  Music,
  Wifi,
  PartyPopper,
} from "lucide-react";
import BreadCrumb from "../../Components/BreadCrum";
import Link from "next/link";
import { useState } from "react";

export default function ConferenceOrganization() {
  const [activeTab, setActiveTab] = useState("Medical Conferences");

  const benefits = [
    {
      icon: Users,
      title: "Expert Planning",
      description:
        "Professional planning and coordination to ensure every detail of your conference runs smoothly.",
      color: "from-blue-500 to-cyan-400",
      stats: "10+ Years Experience",
    },
    {
      icon: Mic,
      title: "Speaker Management",
      description:
        "Coordination with keynote speakers, medical experts, and industry leaders.",
      color: "from-purple-500 to-pink-400",
      stats: "500+ Speakers",
    },
    {
      icon: Target,
      title: "Attendee Engagement",
      description:
        "Interactive sessions, workshops, and networking opportunities for participants.",
      color: "from-amber-500 to-orange-400",
      stats: "95% Satisfaction",
    },
    {
      icon: Award,
      title: "End-to-End Management",
      description:
        "From venue booking to event execution, we handle everything professionally.",
      color: "from-emerald-500 to-green-400",
      stats: "200+ Events",
    },
  ];

  const process = [
    {
      number: "01",
      title: "Discovery & Planning",
      description: "Understanding your goals, audience, and conference vision.",
      color: "from-blue-500 to-cyan-400",
      icon: Compass,
      details: "Initial consultation, goal setting, budget planning, timeline creation",
    },
    {
      number: "02",
      title: "Venue & Logistics",
      description: "Selecting and securing the perfect venue with all amenities.",
      color: "from-purple-500 to-pink-400",
      icon: MapPin,
      details: "Venue sourcing, contract negotiation, layout planning, accommodation booking",
    },
    {
      number: "03",
      title: "Speaker & Content",
      description: "Curating experts and developing engaging session content.",
      color: "from-amber-500 to-orange-400",
      icon: Mic,
      details: "Speaker invitations, abstract management, session scheduling, material preparation",
    },
    {
      number: "04",
      title: "Marketing & Registration",
      description: "Driving attendance and managing participant registration.",
      color: "from-emerald-500 to-green-400",
      icon: TrendingUp,
      details: "Marketing campaigns, registration platform, attendee communications, reporting",
    },
    {
      number: "05",
      title: "Execution & Follow-up",
      description: "Flawless on-day execution and post-event analysis.",
      color: "from-rose-500 to-pink-400",
      icon: PartyPopper,
      details: "On-site management, live support, feedback collection, post-event reporting",
    },
  ];

  const features = [
    {
      category: "Planning",
      items: [
        "Full conference planning & strategy",
        "Budget management & optimization",
        "Timeline & milestone tracking",
        "Risk management planning",
      ],
      icon: Briefcase,
      color: "from-blue-500 to-cyan-400",
    },
    {
      category: "Venue & Production",
      items: [
        "Venue selection & management",
        "Stage design & AV setup",
        "Live streaming & hybrid options",
        "Exhibition area management",
      ],
      icon: Settings,
      color: "from-purple-500 to-pink-400",
    },
    {
      category: "Content & Speakers",
      items: [
        "Speaker coordination & management",
        "Workshop & breakout sessions",
        "Scientific program development",
        "CME/CPD accreditation support",
      ],
      icon: MessageSquare,
      color: "from-amber-500 to-orange-400",
    },
    {
      category: "Attendee Experience",
      items: [
        "Attendee registration system",
        "Networking event planning",
        "Mobile app & event platform",
        "On-site support & hospitality",
      ],
      icon: Heart,
      color: "from-emerald-500 to-green-400",
    },
  ];

  const pastConferences = [
    {
      name: "Global Health Summit 2024",
      attendees: "2,500+",
      speakers: "85",
      location: "Dubai",
      image: "/Images/Events/GlobalHealth-2.webp",
    },
    {
      name: "MedTech Innovation Forum",
      attendees: "1,800+",
      speakers: "62",
      location: "Abu Dhabi",
      image: "/Images/Events/GlobalHealthSaudi.jpg",
    },
    {
      name: "Middle East Cardiology Conference",
      attendees: "3,200+",
      speakers: "120",
      location: "Riyadh",
      image: "/Images/Events/Riyadh-2.webp",
    },
  ];

  const testimonials = [
    {
      text: "The team delivered an exceptional conference experience. Their attention to detail and professional execution exceeded our expectations.",
      author: "Dr. Sarah Johnson",
      role: "Conference Chair, Global Health Summit",
    },
    {
      text: "From planning to execution, everything was seamless. Our attendees loved the experience, and we've already booked for next year.",
      author: "Prof. Ahmed Al-Rashid",
      role: "Medical Director, City Hospital",
    },
  ];

  return (
    <>
      <BreadCrumb
        title="Conference Organization"
        backgroundImage="/Images/Home/Bread-crum-1.avif"   
        path={[{ label: "Services", href: '/pages/NavBar-Links/NavServices' }, { label: "Conference Organization" }]}
      />

      <section className="relative py-8 sm:py-12 md:py-16 lg:py-20 overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900">
        {/* Enhanced Animated Background - Mobile Optimized */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 sm:w-56 sm:h-56 md:w-80 md:h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/3 right-1/3 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
          
          {/* Grid Pattern - Adjusted for mobile */}
          <div 
            className="absolute inset-0 opacity-10 sm:opacity-20"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)`,
              backgroundSize: '20px 20px sm:40px 40px'
            }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section - Mobile Optimized */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-1 sm:gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
              <span className="text-xs sm:text-sm font-medium text-gray-300">
                Professional Conference Management
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 px-2">
              <span className="text-white">Transform Your Vision Into</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Unforgettable Conferences
              </span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
              We plan and manage professional medical conferences, summits,
              and industry events that connect healthcare leaders, innovators,
              and professionals from around the world.
            </p>

           

            {/* Trust Badges - Mobile Optimized */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-10 md:mt-12 px-4">
              <div className="flex items-center gap-1 sm:gap-2 text-gray-400">
                <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                <span className="text-xs sm:text-sm">ISO Certified</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2 text-gray-400">
                <Award className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
                <span className="text-xs sm:text-sm">Award-Winning</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2 text-gray-400">
                <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
                <span className="text-xs sm:text-sm">Global Reach</span>
              </div>
            </div>
          </div>

          {/* Stats Section - Mobile Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-12 sm:mb-16 md:mb-20 px-2">
            {[
              { number: "200+", label: "Events", icon: Calendar },
              { number: "50K+", label: "Attendees", icon: Users },
              { number: "500+", label: "Speakers", icon: Mic },
              { number: "15+", label: "Countries", icon: Globe },
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 text-center hover:bg-white/10 transition-all duration-300">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-blue-400 mx-auto mb-2 sm:mb-3" />
                  <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-xs sm:text-sm text-gray-400">{stat.label}</div>
                </div>
              );
            })}
          </div>

          {/* Service Explanation with Tabs - Mobile Optimized */}
          <div className="mb-12 sm:mb-16 md:mb-20 px-2">
            <div className="bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-cyan-500/5 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10">
              <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-12">
                <div className="flex-1 w-full">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4">
                    Professional Conference Management
                  </h2>
                  <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-4 sm:mb-6">
                    Our team specializes in organizing high-quality conferences
                    that bring together healthcare professionals, researchers,
                    innovators, and industry leaders. From planning to
                    execution, we handle every aspect of conference management
                    to ensure a successful and impactful event.
                  </p>
                  
                  {/* Tabs - Horizontal Scroll on Mobile */}
                  <div className="overflow-x-auto pb-2 mb-4 sm:mb-6 -mx-2 px-2">
                    <div className="flex gap-2 min-w-max sm:min-w-0 sm:flex-wrap">
                      {["Medical"].map((tab, idx) => (
                        <button
                          key={idx}
                          onClick={() => setActiveTab(tab === "Medical" ? "Medical Conferences" : "Workshops")}
                          className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                            (tab === "Medical" && activeTab === "Medical Conferences") ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
                              : 'bg-white/5 text-gray-400 hover:bg-white/10'
                          }`}
                        >
                          {tab}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2 sm:space-y-3">
                    {(activeTab === "Medical Conferences" || activeTab === "Medical") && (
                      <>
                        <div className="flex items-start gap-2 text-gray-300">
                          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm">CME/CPD accredited programs</span>
                        </div>
                        <div className="flex items-start gap-2 text-gray-300">
                          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm">International faculty coordination</span>
                        </div>
                        <div className="flex items-start gap-2 text-gray-300">
                          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm">Scientific committee management</span>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                <div className="relative flex-shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-2xl blur-2xl opacity-20"></div>
                  <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 bg-gradient-to-br from-blue-500/20 to-cyan-400/20 rounded-2xl border border-white/20 flex items-center justify-center">
                    <Calendar className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 text-white/80" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits Section - Mobile Grid */}
          <div className="mb-12 sm:mb-16 md:mb-20 px-2">
            <div className="text-center mb-6 sm:mb-8 md:mb-10">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-3 md:mb-4">
                Why Choose Our
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  {" "}
                  Conference Services
                </span>
              </h2>
              <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto px-4">
                Comprehensive solutions tailored to your conference needs
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="group relative">
                    <div className="relative h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 sm:p-5 md:p-6 hover:bg-white/10 transition-all duration-300">
                      <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity`}></div>
                      
                      <div className={`w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-xl bg-gradient-to-r ${benefit.color} flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform`}>
                        <Icon className="w-5 h-5 sm:w-5.5 sm:h-5.5 md:w-6 md:h-6 text-white" />
                      </div>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                        <h3 className="text-base sm:text-lg font-bold text-white">{benefit.title}</h3>
                        <span className="text-xs font-semibold text-blue-400 bg-blue-400/10 px-2 py-1 rounded-full text-center sm:self-auto">
                          {benefit.stats}
                        </span>
                      </div>
                      
                      <p className="text-xs sm:text-sm text-gray-400">{benefit.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Process Timeline - Mobile Vertical */}
          <div className="mb-12 sm:mb-16 md:mb-20 px-2">
            <div className="text-center mb-6 sm:mb-8 md:mb-10">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-3 md:mb-4">
                Our
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {" "}
                  5-Step Process
                </span>
              </h2>
              <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto px-4">
                A systematic approach to delivering exceptional conferences
              </p>
            </div>

            <div className="relative">
              {/* Mobile Timeline Line */}
              <div className="absolute left-4 sm:left-5 md:left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 md:hidden"></div>

              <div className="space-y-4 sm:space-y-5 md:space-y-6">
                {process.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <div key={index} className="relative flex items-start gap-3 sm:gap-4 md:gap-6 group">
                      <div className={`relative z-10 flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-xl bg-gradient-to-r ${step.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-white" />
                      </div>
                      
                      <div className="flex-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-3 sm:p-4 md:p-5 lg:p-6 group-hover:bg-white/10 transition-all duration-300">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mb-2">
                          <span className={`text-xs sm:text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r ${step.color}`}>
                            Step {step.number}
                          </span>
                          <h3 className="text-sm sm:text-base md:text-lg font-bold text-white">{step.title}</h3>
                        </div>
                        
                        <p className="text-xs sm:text-sm text-gray-400 mb-2 sm:mb-3">{step.description}</p>
                        
                        <div className="text-xs sm:text-sm text-gray-500">
                          {step.details}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Features Grid - Mobile Optimized */}
          <div className="mb-12 sm:mb-16 md:mb-20 px-2">
            <div className="text-center mb-6 sm:mb-8 md:mb-10">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-3 md:mb-4">
                Comprehensive
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  {" "}
                  Solutions
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
              {features.map((category, idx) => {
                const Icon = category.icon;
                return (
                  <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6">
                    <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                      <div className={`w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                        <Icon className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 text-white" />
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-white">{category.category}</h3>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                      {category.items.map((item, i) => (
                        <div key={i} className="flex items-start gap-1.5 sm:gap-2">
                          <CheckCircle className={`w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-${category.color.split('-')[1]}-400 flex-shrink-0 mt-0.5`} />
                          <span className="text-xs sm:text-sm text-gray-300">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Past Conferences Gallery - Mobile Grid */}
          <div className="mb-12 sm:mb-16 md:mb-20 px-2">
            <div className="text-center mb-6 sm:mb-8 md:mb-10">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-3 md:mb-4">
                Recent
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  {" "}
                  Conferences
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
              {pastConferences.map((conf, idx) => (
                <div key={idx} className="group relative rounded-xl sm:rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>
                  <img src={conf.image} alt={conf.name} className="w-full h-48 sm:h-56 md:h-64 object-cover group-hover:scale-110 transition-transform duration-700" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-5 lg:p-6 z-20">
                    <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white mb-1 sm:mb-2">{conf.name}</h3>
                    
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4 text-xs sm:text-sm text-gray-300">
                      <div className="flex items-center gap-1">
                        <Users className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                        {conf.attendees}
                      </div>
                      <div className="flex items-center gap-1">
                        <Mic className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                        {conf.speakers}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                        {conf.location}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials - Mobile Optimized */}
          <div className="mb-12 sm:mb-16 md:mb-20 px-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
              {testimonials.map((testimonial, idx) => (
                <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6">
                  <div className="flex gap-0.5 sm:gap-1 mb-3 sm:mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-gray-300 mb-3 sm:mb-4">"{testimonial.text}"</p>
                  <div>
                    <p className="text-sm sm:text-base text-white font-semibold">{testimonial.author}</p>
                    <p className="text-xs sm:text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA  */}
          <div className="text-center px-2">
            <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 opacity-90"></div>
              <div className="absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-white/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-white/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

              <div className="absolute inset-0 bg-[url('/Images/Home/Bread-crum-1.avif')] bg-cover bg-center"></div>
              

              <div className="relative py-8 sm:py-10 md:py-12 lg:py-16 px-4 sm:px-6 md:px-8">
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
                  Ready to Organize Your Conference?
                </h3>
                
                <p className="text-white/90 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                  Partner with us to organize impactful medical conferences that
                  connect professionals and drive innovation.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
                  <button className="group inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-base md:text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 w-full sm:w-auto">
                    Schedule Consultation
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  
                  <button className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-base md:text-lg font-semibold hover:bg-white/20 transition-all duration-300 w-full sm:w-auto">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                    Call Us
                  </button>
                </div>

                <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-6 sm:mt-8 text-xs sm:text-sm text-white/80 px-4">
                  <span>✓ Free consultation</span>
                  <span>✓ Custom proposals</span>
                  <span>✓ 24/7 support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}