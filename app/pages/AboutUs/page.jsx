"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Award,
  Users,
  Target,
  Heart,
  Globe,
  Shield,
  Sparkles,
  ArrowRight,
  Calendar,
  Building2,
  Stethoscope,
  GraduationCap,
  HandHeart,
  TrendingUp,
  CheckCircle,
  Quote,
  Mail,
  Linkedin,
  Twitter,
} from "lucide-react";
import BreadCrum from "../../Components/BreadCrum";

export default function AboutPage() {
  const stats = [
    { icon: Calendar, label: "Events Organized", value: "50+" },
    { icon: Users, label: "Healthcare Professionals", value: "25,000+" },
    { icon: Globe, label: "Countries Represented", value: "35+" },
    { icon: Award, label: "Years of Excellence", value: "10+" },
  ];

  const values = [
    {
      icon: Shield,
      title: "Excellence",
      description:
        "Delivering world-class medical conferences with the highest standards of quality and precision.",
      color: "from-blue-500 to-cyan-400",
    },
    {
      icon: HandHeart,
      title: "Integrity",
      description:
        "Operating with transparency, ethics, and respect for all stakeholders and participants.",
      color: "from-purple-500 to-pink-400",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "Fostering partnerships that drive innovation and advance healthcare in Saudi Arabia.",
      color: "from-amber-500 to-orange-400",
    },
    {
      icon: Target,
      title: "Innovation",
      description:
        "Embracing cutting-edge technology and modern approaches to medical education.",
      color: "from-green-500 to-emerald-400",
    },
  ];

  const team = [
    {
      name: "Dr. Abdullah Al-Saud",
      role: "Founder & CEO",
      bio: "Former consultant at King Faisal Specialist Hospital with 20+ years in healthcare management.",
      image: "/Images/team/placeholder-1.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "a.alsaud@medconfksa.sa",
      },
    },
    {
      name: "Dr. Nora Al-Qahtani",
      role: "Medical Director",
      bio: "Board-certified physician leading clinical content development and accreditation.",
      image: "/Images/team/placeholder-2.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "n.alqahtani@medconfksa.sa",
      },
    },
    {
      name: "Engineer Fahad Al-Otaibi",
      role: "Technical Director",
      bio: "Expert in healthcare technology and digital transformation with 15 years experience.",
      image: "/Images/team/placeholder-3.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "f.alotaibi@medconfksa.sa",
      },
    },
    {
      name: "Lina Al-Ghamdi",
      role: "Events Director",
      bio: "Award-winning event planner specializing in large-scale medical conferences.",
      image: "/Images/team/placeholder-4.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "l.alghamdi@medconfksa.sa",
      },
    },
  ];

  const milestones = [
    {
      year: "2014",
      title: "Foundation",
      description:
        "Medconf KSA was established with a vision to transform medical education.",
    },
    {
      year: "2016",
      title: "First Major Conference",
      description:
        "Launched the inaugural Saudi Healthcare Innovation Summit with 500+ attendees.",
    },
    {
      year: "2018",
      title: "International Expansion",
      description:
        "Partnered with global medical associations for knowledge exchange.",
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description:
        "Launched secure portals and virtual event platforms during the pandemic.",
    },
    {
      year: "2022",
      title: "SCFHS Accreditation",
      description:
        "Became an accredited provider for continuing medical education hours.",
    },
    {
      year: "2024",
      title: "Regional Leadership",
      description:
        "Recognized as the leading medical conference organizer in the GCC.",
    },
  ];

  const partners = [
    { name: "SCFHS", logo: "/Images/partners/scfhs.png" },
    { name: "MOH", logo: "/Images/partners/moh.png" },
    { name: "KFSH", logo: "/Images/partners/kfsh.png" },
    { name: "WHO", logo: "/Images/partners/who.png" },
    { name: "GCC Health", logo: "/Images/partners/gcc.png" },
    { name: "Saudi Vision 2030", logo: "/Images/partners/vision2030.png" },
  ];

  return (
    <>
      <BreadCrum
        title="About Us"
        backgroundImage="/Images/Home/Bread-crum-1.avif"
        path={["Home", "About Us "]}
      />
      <section className="relative min-h-screen py-28 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-900">
          {/* Floating orbs */}
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>

          {/* Grid pattern */}
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          {/* Header */}
          <div className="text-center mb-20">
            {/* Top badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
              <Sparkles className="w-4 h-4 text-yellow-300" />
              <span className="text-sm font-medium text-gray-300">
                Our Story
              </span>
            </div>

            {/* Main title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-white">Shaping the Future of</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-300 bg-clip-text text-transparent">
                Healthcare Excellence
              </span>
            </h1>

            {/* Description */}
            <div className="relative max-w-3xl mx-auto">
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-24 h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
                Since 2014, Medconf KSA has been at the forefront of medical
                education and healthcare events in Saudi Arabia, bringing
                together world-class experts and innovative solutions.
              </p>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center group hover:bg-white/10 transition-all duration-300"
                >
                  <Icon className="w-8 h-8 text-blue-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <p className="text-2xl font-bold text-white mb-1">
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-400">{stat.label}</p>
                </div>
              );
            })}
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 group hover:shadow-2xl transition-all duration-500">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity"></div>
                <div className="relative w-14 h-14 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center">
                  <Target className="w-7 h-7 text-white" />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">
                Our Mission
              </h2>
              <p className="text-gray-400 leading-relaxed">
                To advance healthcare in Saudi Arabia by creating exceptional
                platforms for knowledge exchange, professional development, and
                innovation, aligned with Saudi Vision 2030.
              </p>
              <div className="mt-6 flex items-center gap-2 text-blue-400">
                <span className="text-sm font-semibold">
                  Driving healthcare forward
                </span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 group hover:shadow-2xl transition-all duration-500">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-400 rounded-xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity"></div>
                <div className="relative w-14 h-14 rounded-xl bg-gradient-to-r from-purple-500 to-pink-400 flex items-center justify-center">
                  <Globe className="w-7 h-7 text-white" />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
              <p className="text-gray-400 leading-relaxed">
                To be the premier healthcare events organizer in the Middle
                East, connecting regional expertise with global innovation for
                better patient outcomes.
              </p>
              <div className="mt-6 flex items-center gap-2 text-purple-400">
                <span className="text-sm font-semibold">
                  Global connections, local impact
                </span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Our Values */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Core Values
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={index} className="group relative">
                    <div className="h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                      {/* Gradient hover effect */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                      ></div>

                      {/* Icon */}
                      <div className="relative mb-4">
                        <div
                          className={`absolute inset-0 bg-gradient-to-r ${value.color} rounded-xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity`}
                        ></div>
                        <div className="relative w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                      </div>

                      <h3 className="text-lg font-bold text-white mb-2">
                        {value.title}
                      </h3>
                      <p className="text-sm text-gray-400 leading-relaxed">
                        {value.description}
                      </p>

                      {/* Bottom accent line */}
                      <div
                        className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${value.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Journey
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Key milestones in our story of growth and impact
              </p>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-500/50 to-transparent transform -translate-x-1/2"></div>

              <div className="space-y-16">
                {milestones.map((milestone, index) => (
                  <div key={index} className="relative">
                    {/* Center Bubble */}
                    <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                      <div className="relative w-16 h-16 flex items-center justify-center">
                        <div className="absolute inset-0 bg-blue-500 rounded-full blur-lg opacity-50"></div>
                        <div className="relative w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center border-4 border-gray-900">
                          <span className="text-white font-bold text-sm">
                            {milestone.year}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Content Wrapper */}
                    <div className="flex flex-col lg:flex-row items-center">
                      {/* Left Side */}
                      <div
                        className={`w-full lg:w-1/2 ${index % 2 === 0 ? "lg:pr-20 lg:text-right" : "lg:pr-0"}`}
                      >
                        {index % 2 === 0 && (
                          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                            <h3 className="text-xl font-bold text-white mb-2">
                              {milestone.title}
                            </h3>
                            <p className="text-gray-400">
                              {milestone.description}
                            </p>
                          </div>
                        )}
                      </div>

                      {/* Right Side */}
                      <div
                        className={`w-full lg:w-1/2 ${index % 2 !== 0 ? "lg:pl-20" : ""}`}
                      >
                        {index % 2 !== 0 && (
                          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                            <h3 className="text-xl font-bold text-white mb-2">
                              {milestone.title}
                            </h3>
                            <p className="text-gray-400">
                              {milestone.description}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Leadership Team
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Experienced professionals dedicated to healthcare excellence
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, index) => (
                <div key={index} className="group relative">
                  <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                    {/* Image placeholder with gradient */}
                    <div className="aspect-square bg-gradient-to-br from-blue-900/50 to-purple-900/50 relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Users className="w-16 h-16 text-blue-400/30" />
                      </div>
                      {/* Overlay gradient on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-600/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-white mb-1">
                        {member.name}
                      </h3>
                      <p className="text-sm text-blue-400 mb-3">
                        {member.role}
                      </p>
                      <p className="text-sm text-gray-400 mb-4">{member.bio}</p>

                      {/* Social links */}
                      <div className="flex items-center gap-3">
                        <Link
                          href={member.social.linkedin}
                          className="text-gray-500 hover:text-blue-400 transition-colors"
                        >
                          <Linkedin className="w-4 h-4" />
                        </Link>
                        <Link
                          href={member.social.twitter}
                          className="text-gray-500 hover:text-blue-400 transition-colors"
                        >
                          <Twitter className="w-4 h-4" />
                        </Link>
                        <Link
                          href={`mailto:${member.social.email}`}
                          className="text-gray-500 hover:text-blue-400 transition-colors"
                        >
                          <Mail className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>

                    {/* Bottom accent line */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Partners Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Partners
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Trusted by leading healthcare organizations
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:scale-105 transition-all duration-300 group"
                >
                  <div className="aspect-square flex items-center justify-center">
                    <Building2 className="w-12 h-12 text-gray-500 group-hover:text-blue-400 transition-colors" />
                  </div>
                  <p className="text-center text-sm text-gray-400 mt-2">
                    {partner.name}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial */}
          <div className="mb-20">
            <div className="relative bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20 backdrop-blur-xl border border-white/10 rounded-3xl p-12 overflow-hidden">
              {/* Quote icon */}
              <Quote className="absolute top-6 right-6 w-24 h-24 text-white/5" />

              <div className="relative max-w-3xl mx-auto text-center">
                <p className="text-xl md:text-2xl text-white/90 mb-6 leading-relaxed">
                  "Medconf KSA has been instrumental in advancing medical
                  education in Saudi Arabia. Their conferences bring world-class
                  expertise to our healthcare professionals, directly
                  contributing to Vision 2030's healthcare transformation
                  goals."
                </p>

                <div className="flex items-center justify-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="text-white font-semibold">
                      Dr. Ahmed Al-Sulaiman
                    </p>
                    <p className="text-sm text-gray-400">
                      Former Deputy Minister, MOH Saudi Arabia
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent"></div>
      </section>
    </>
  );
}
