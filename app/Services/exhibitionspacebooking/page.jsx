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
  Building2,
  Network,
  Rocket,
  Handshake,
  LayoutGrid,
  Package,
  Ticket,
  Settings,
  Phone,
  TicketCheckIcon,
  Star,
  Zap,
  Shield,
  TrendingUp,
  BarChart3,
  Compass,
} from "lucide-react";
import BreadCrumb from "../../Components/BreadCrum";
import Link from "next/link";
import { useState } from "react";

export default function ExhibitionSpaceBooking() {
  const [selectedBooth, setSelectedBooth] = useState(null);

  const benefits = [
    {
      icon: Building2,
      title: "Brand Exposure",
      description:
        "Present your brand to thousands of healthcare professionals and decision-makers.",
      color: "from-purple-500 to-pink-400",
      stats: "10,000+ Visitors",
    },
    {
      icon: Network,
      title: "Networking",
      description:
        "Connect with distributors, buyers, investors, and industry leaders.",
      color: "from-blue-500 to-cyan-400",
      stats: "500+ Delegates",
    },
    {
      icon: Rocket,
      title: "Product Launch",
      description:
        "Introduce new products directly to your target market with maximum impact.",
      color: "from-amber-500 to-orange-400",
      stats: "Launch Ready",
    },
    {
      icon: Handshake,
      title: "Business Opportunities",
      description: "Generate qualified leads and build lasting partnerships.",
      color: "from-emerald-500 to-green-400",
      stats: "ROI Focused",
    },
  ];

  const process = [
    {
      number: "01",
      title: "Inquiry",
      description: "Contact our team to check availability and get pricing.",
      color: "from-purple-500 to-pink-400",
      icon: Phone,
    },
    {
      number: "02",
      title: "Choose Space",
      description: "Select your preferred booth size and prime location.",
      color: "from-blue-500 to-cyan-400",
      icon: MapPin,
    },
    {
      number: "03",
      title: "Registration",
      description: "Complete registration and confirm your participation.",
      color: "from-amber-500 to-orange-400",
      icon: Ticket,
    },
    {
      number: "04",
      title: "Setup & Exhibit",
      description: "Set up your booth and engage with attendees.",
      color: "from-emerald-500 to-green-400",
      icon: Building2,
    },
  ];

  const features = [
    {
      category: "Location",
      icon: MapPin,
      color: "from-blue-500 to-cyan-400",
    },
    {
      category: "Flexibility",
      icon: LayoutGrid,
      color: "from-green-500 to-emerald-400",
    },
    {
      category: "Visibility",
      icon: Star,
      color: "from-amber-500 to-orange-400",
    },
    {
      category: "Promotion",
      icon: Shield,
      color: "from-purple-500 to-pink-400",
    },
    {
      category: "Leads",
      icon: Target,
      color: "from-blue-500 to-cyan-400",
    },
    {
      category: "Marketing",
      icon: TrendingUp,
      color: "from-green-500 to-emerald-400",
    },
    {
      category: "Comfort",
      icon: Compass,
      color: "from-amber-500 to-orange-400",
    },
    {
      category: "Networking",
      icon: Users,
      color: "from-purple-500 to-pink-400",
    },
    {
      category: "Support",
      icon: Settings,
      color: "from-blue-500 to-cyan-400",
    },
    {
      category: "Analytics",
      icon: BarChart3,
      color: "from-purple-500 to-pink-400",
    },
  ];

  const boothTypes = [
    {
      name: "Standard Booth",
      size: "3m x 3m",
      price: "Starting at $2,500",
      includes: [
        "Shell scheme with back wall",
        "1 table (600 x 600mm)",
        "2 chairs",
        "Basic LED lighting",
        "1 power outlet (500W)",
        "Company listing in directory",
      ],
      color: "from-blue-500 to-cyan-400",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
      availability: "12 Spaces Left",
      popular: false,
    },
    {
      name: "Premium Booth",
      size: "6m x 4m",
      price: "Starting at $5,500",
      includes: [
        "Custom build-up design",
        "Premium furniture package",
        '2 LED screens (55")',
        "Private storage room",
        "Hospitality area with seating",
        "Premium directory listing",
        "Dedicated account manager",
      ],
      color: "from-purple-500 to-pink-400",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20",
      availability: "8 Spaces Left",
      // popular: true,
    },
    {
      name: "Corner Booth",
      size: "4m x 4m",
      price: "Starting at $4,200",
      includes: [
        "Double-side access",
        "Enhanced visibility",
        "Premium furniture",
        "Custom branding wall",
        "Product demo area",
        "Featured listing in directory",
        "2 exhibitor passes",
      ],
      color: "from-amber-500 to-orange-400",
      bgColor: "bg-amber-500/10",
      borderColor: "border-amber-500/20",
      availability: "5 Spaces Left",
      popular: false,
    },
    {
      name: "Custom Pavilion",
      size: "Custom Size",
      price: "Custom Pricing",
      includes: [
        "Fully customizable space",
        "Island booth configuration",
        "Multi-level structure",
        "Lounge & meeting rooms",
        "Premium AV equipment",
        "VIP hospitality suite",
        "Dedicated branding area",
        "Priority marketing package",
      ],
      color: "from-emerald-500 to-green-400",
      bgColor: "bg-emerald-500/10",
      borderColor: "border-emerald-500/20",
      availability: "Limited Availability",
      popular: false,
    },
  ];

  const upcomingEvents = [
    {
      name: "Global Health Expo 2024",
      date: "Nov 15-18, 2024",
      location: "Dubai World Trade Centre",
      attendees: "15,000+",
    },
    {
      name: "MedTech Innovation Summit",
      date: "Dec 5-7, 2024",
      location: "Abu Dhabi National Exhibition Centre",
      attendees: "8,000+",
    },
    {
      name: "Healthcare Leaders Forum",
      date: "Jan 20-22, 2025",
      location: "Riyadh International Convention Center",
      attendees: "5,000+",
    },
  ];

  return (
    <>
      <BreadCrumb
        title="Exhibition & Space Booking"
        backgroundImage="/Images/Home/Bread-crum-1.avif"
        path={[
          { label: "Services", href: "/pages/NavBar-Links/NavServices" },
          { label: "Exhibition & Space Booking" },
        ]}
      />

      <section className="relative py-12 md:py-16 lg:py-20 overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900">
        {/* Enhanced Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>

          {/* Grid Pattern */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-medium text-gray-300">
                Premium Exhibition Spaces • Limited Availability
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-white">Showcase Your Brand at</span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-amber-400 bg-clip-text text-transparent">
                Premier Healthcare Events
              </span>
            </h1>

            <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto mb-8 px-4">
              Secure premium exhibition space at leading medical conferences and
              connect with thousands of healthcare professionals,
              decision-makers, and industry leaders.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              {[
                { number: "50+", label: "Events Yearly", icon: Calendar },
                { number: "15K+", label: "Annual Visitors", icon: Users },
                { number: "200+", label: "Exhibitors", icon: Building2 },
                { number: "85%", label: "Return Rate", icon: TrendingUp },
              ].map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4"
                  >
                    <Icon className="w-5 h-5 text-purple-400 mx-auto mb-2" />
                    <div className="text-xl font-bold text-white">
                      {stat.number}
                    </div>
                    <div className="text-xs text-gray-400">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Upcoming Events Banner */}
          <div className="mb-16 md:mb-20">
            <div className="bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-amber-500/10 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-purple-400" />
                Upcoming Exhibition Opportunities
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {upcomingEvents.map((event, index) => (
                  <div
                    key={index}
                    className="bg-white/5 rounded-xl p-4 border border-white/10"
                  >
                    <h4 className="text-white font-medium mb-2">
                      {event.name}
                    </h4>
                    <div className="flex items-center gap-2 text-xs text-gray-400 mb-1">
                      <Calendar className="w-3 h-3" />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
                      <MapPin className="w-3 h-3" />
                      {event.location}
                    </div>
                    <div className="flex items-center gap-1 text-xs text-purple-400">
                      <Users className="w-3 h-3" />
                      {event.attendees} expected
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Booth Types with Enhanced Cards */}
          <div className="mb-16 md:mb-20">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
                Choose Your Perfect
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {" "}
                  Exhibition Space
                </span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Select from our range of premium booth options designed to
                maximize your brand visibility
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {boothTypes.map((booth, index) => {
                const Icon = booth.popular ? Star : Package;
                return (
                  <div
                    key={index}
                    className={`group relative rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 cursor-pointer ${
                      selectedBooth === index ? "ring-2 ring-purple-500" : ""
                    }`}
                    onClick={() => setSelectedBooth(index)}
                  >
                    {/* Popular Badge */}
                    {booth.popular && (
                      <div className="absolute top-1 right-4 z-10">
                        <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                          <Star className="w-3 h-3" />
                          Most Popular
                        </div>
                      </div>
                    )}

                    {/* Background Gradient */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${booth.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    ></div>

                    {/* Border Gradient */}
                    <div
                      className={`absolute inset-0 border-2 border-transparent group-hover:border-${booth.color.split("-")[1]}-500/50 rounded-2xl transition-all duration-500`}
                    ></div>

                    {/* Content */}
                    <div
                      className={`relative h-full p-6 ${booth.bgColor} backdrop-blur-sm border ${booth.borderColor} rounded-2xl`}
                    >
                      <div className="mb-4 flex items-center justify-between">
                        <div
                          className={`w-12 h-12 rounded-xl bg-gradient-to-r ${booth.color} flex items-center justify-center`}
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-xs font-semibold text-white/60 bg-white/10 px-3 py-1 rounded-full">
                          {booth.availability}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-1">
                        {booth.name}
                      </h3>
                      <p className="text-sm text-gray-400 mb-2">{booth.size}</p>
                      <p className="text-lg font-bold text-white mb-4">
                        {booth.price}
                      </p>

                      <div className="space-y-2 mb-6">
                        {booth.includes.slice(0, 4).map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle
                              className={`w-4 h-4 text-${booth.color.split("-")[1]}-400 flex-shrink-0 mt-0.5`}
                            />
                            <span className="text-xs text-gray-300">
                              {item}
                            </span>
                          </div>
                        ))}
                        {booth.includes.length > 4 && (
                          <p className="text-xs text-gray-500">
                            +{booth.includes.length - 4} more items
                          </p>
                        )}
                      </div>

                      <button
                        className={`w-full py-2 px-4 rounded-xl bg-gradient-to-r ${booth.color} text-white text-sm font-semibold hover:shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0`}
                      >
                        Select This Space
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="mb-16 md:mb-20">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
                Why Exhibit With
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {" "}
                  Us?
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="group relative">
                    <div className="relative h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity`}
                      ></div>

                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-r ${benefit.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </div>

                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-bold text-white">
                          {benefit.title}
                        </h3>
                        <span className="text-xs font-semibold text-purple-400 bg-purple-400/10 px-2 py-1 rounded-full">
                          {benefit.stats}
                        </span>
                      </div>

                      <p className="text-sm text-gray-400">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Process Timeline */}
          <div className="mb-16 md:mb-20">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
                Simple
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {" "}
                  4-Step Process
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {process.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="relative">
                    {/* Connector Line */}
                    {index < process.length - 1 && (
                      <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500"></div>
                    )}

                    <div className="relative z-10 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center group hover:bg-white/10 transition-all duration-300">
                      <div
                        className={`w-16 h-16 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </div>

                      <span
                        className={`text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r ${step.color} block mb-2`}
                      >
                        Step {step.number}
                      </span>

                      <h3 className="text-lg font-bold text-white mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-gray-400">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mb-20">
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
                Everything Included in Your
                <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  {" "}
                  Exhibition Package
                </span>
              </h3>

              <div className="flex flex-wrap justify-center gap-3">
                {features.map((feature, index) => {
                  const Icon = feature.icon;

                  return (
                    <div
                      key={index}
                      className="flex items-center gap-2 px-4 py-2 rounded-full 
        bg-white/10 border border-white/10 backdrop-blur-sm
        hover:scale-105 transition-all duration-300 shadow-lg"
                    >
                      {/* Icon */}
                      <div
                        className={`w-6 h-6 flex items-center justify-center rounded-md bg-gradient-to-r ${feature.color}`}
                      >
                        <Icon className="w-3.5 h-3.5 text-white" />
                      </div>

                      {/* Text */}
                      <span className="text-sm text-white font-medium whitespace-nowrap">
                        {feature.category}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="relative overflow-hidden rounded-3xl">
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-amber-600 opacity-90"></div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
              </div>
              <div className="absolute inset-0 bg-[url('/Images/Home/Bread-crum-1.avif')] bg-cover bg-center"></div>
              <div className="relative py-16 px-8">
                <h4 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
                  Ready to Showcase Your Brand?
                </h4>

                <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                  Join industry leaders at our upcoming exhibitions and connect
                  with thousands of healthcare professionals.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="group inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300">
                    Book Your Space Now
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/20 transition-all duration-300">
                    Contact Sales
                  </button>
                </div>

                <div className="flex flex-wrap justify-center gap-6 mt-8">
                  <div className="flex items-center gap-2 text-white/80">
                    <Shield className="w-4 h-4" />
                    <span className="text-sm">Best price guarantee</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/80">
                    <Zap className="w-4 h-4" />
                    <span className="text-sm">Fast confirmation</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/80">
                    <Users className="w-4 h-4" />
                    <span className="text-sm">Dedicated support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
