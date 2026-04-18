"use client";
import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Compass,
  MapPin,
  Clock,
  Users,
  Microscope,
  HeartPulse,
  Brain,
  Stethoscope,
  Calendar,
  Sparkles,
  TrendingUp,
  Award,
  Star,
  Navigation,
  Flag,
  BadgeCheck,
  Route,
  StarIcon,
  Headphones,
  ChevronRight,
  CheckCircle,
  Zap,
  Shield,
} from "lucide-react";
import BreadCrumb from "../../../Components/BreadCrum";

export default function GuidedExhibitionTours() {
  const [selectedTour, setSelectedTour] = useState("innovation");
  const [hoveredStop, setHoveredStop] = useState(null);

  const tourSchedules = [
    {
      time: "10:00 AM",
      duration: "90 min",
      theme: "Innovation Spotlight",
      guide: "Dr. Sarah Chen",
      language: "English",
      maxGroup: 15,
      available: 12,
    },
    {
      time: "11:30 AM",
      duration: "90 min",
      theme: "Clinical Excellence",
      guide: "Dr. Michael Roberts",
      language: "English",
      maxGroup: 15,
      available: 8,
    },
    {
      time: "1:00 PM",
      duration: "60 min",
      theme: "Digital Health Express",
      guide: "Lisa Wong",
      language: "English",
      maxGroup: 12,
      available: 10,
    },
    {
      time: "2:30 PM",
      duration: "90 min",
      theme: "Research & Innovation",
      guide: "Dr. James Wilson",
      language: "English",
      maxGroup: 15,
      available: 15,
    },
    {
      time: "4:00 PM",
      duration: "60 min",
      theme: "Surgical Tech Focus",
      guide: "Dr. Emily Martinez",
      language: "English",
      maxGroup: 12,
      available: 7,
    },
  ];

  const tourThemes = [
    {
      id: "innovation",
      title: "Innovation Spotlight",
      icon: Sparkles,
      description: "Breakthrough technologies and game-changing innovations",
      duration: "90 min",
      stops: 8,
      color: "blue",
    },
    {
      id: "clinical",
      title: "Clinical Excellence",
      icon: Stethoscope,
      description: "Practical clinical solutions and patient care innovations",
      duration: "90 min",
      stops: 7,
      color: "purple",
    },
    {
      id: "digital",
      title: "Digital Health",
      icon: HeartPulse,
      description: "AI, telemedicine, and healthcare IT solutions",
      duration: "60 min",
      stops: 5,
      color: "amber",
    },
    {
      id: "research",
      title: "Research & Innovation",
      icon: Brain,
      description: "Clinical research and academic-industry collaborations",
      duration: "90 min",
      stops: 6,
      color: "emerald",
    },
    {
      id: "surgical",
      title: "Surgical Tech",
      icon: Microscope,
      description: "Robotic systems and OR technology innovations",
      duration: "60 min",
      stops: 6,
      color: "cyan",
    },
  ];

  const tourStops = {
    innovation: [
      { booth: "#101", name: "Siemens Healthineers", highlight: "AI-Powered MRI Systems", type: "Medical Imaging", time: "15 min" },
      { booth: "#205", name: "Intuitive Surgical", highlight: "Da Vinci Robotic System", type: "Robotics", time: "20 min" },
      { booth: "#112", name: "Medtronic", highlight: "Next-Gen Cardiac Devices", type: "Cardiovascular", time: "15 min" },
      { booth: "#156", name: "GE Healthcare", highlight: "AI-Enabled Imaging", type: "Digital Health", time: "15 min" },
      { booth: "#089", name: "Boston Scientific", highlight: "Innovative Endoscopy Solutions", type: "Surgical", time: "10 min" },
      { booth: "#203", name: "Philips Healthcare", highlight: "Advanced Patient Monitoring", type: "Monitoring", time: "10 min" },
      { booth: "#167", name: "Stryker", highlight: "Robotic Joint Replacement", type: "Orthopedics", time: "15 min" },
      { booth: "#134", name: "Abbott Laboratories", highlight: "Diabetes Care Innovations", type: "Chronic Care", time: "10 min" },
    ],
    clinical: [
      { booth: "#112", name: "Medtronic", highlight: "Minimally Invasive Surgery", type: "Surgical", time: "15 min" },
      { booth: "#101", name: "Siemens Healthineers", highlight: "Clinical Diagnostics", type: "Diagnostics", time: "15 min" },
      { booth: "#205", name: "Intuitive Surgical", highlight: "Clinical Outcomes", type: "Surgical", time: "15 min" },
      { booth: "#189", name: "Baxter", highlight: "Acute Care Solutions", type: "Critical Care", time: "10 min" },
      { booth: "#156", name: "GE Healthcare", highlight: "Clinical Workflow Solutions", type: "IT Solutions", time: "10 min" },
      { booth: "#203", name: "Philips Healthcare", highlight: "Patient Monitoring Systems", type: "Monitoring", time: "10 min" },
      { booth: "#221", name: "Zimmer Biomet", highlight: "Orthopedic Clinical Solutions", type: "Orthopedics", time: "10 min" },
    ],
    digital: [
      { booth: "#203", name: "Philips Healthcare", highlight: "Telehealth Platform", type: "Telemedicine", time: "15 min" },
      { booth: "#156", name: "GE Healthcare", highlight: "AI Diagnostics Suite", type: "AI Solutions", time: "15 min" },
      { booth: "#108", name: "Epic Systems", highlight: "Cloud EHR Platform", type: "EHR", time: "10 min" },
      { booth: "#089", name: "Cerner", highlight: "Population Health Analytics", type: "Analytics", time: "10 min" },
      { booth: "#205", name: "Google Health", highlight: "AI in Medical Imaging", type: "AI", time: "10 min" },
    ],
    research: [
      { booth: "#156", name: "GE Healthcare", highlight: "Research Imaging Solutions", type: "Imaging", time: "15 min" },
      { booth: "#112", name: "Medtronic", highlight: "Clinical Trial Devices", type: "Research", time: "15 min" },
      { booth: "#101", name: "Siemens Healthineers", highlight: "Research Collaborations", type: "Partnerships", time: "15 min" },
      { booth: "#205", name: "Illumina", highlight: "Genomic Research Tools", type: "Genomics", time: "15 min" },
      { booth: "#134", name: "Pfizer", highlight: "Clinical Research Programs", type: "Pharma", time: "15 min" },
      { booth: "#167", name: "Mayo Clinic", highlight: "Academic Research", type: "Academic", time: "10 min" },
    ],
    surgical: [
      { booth: "#205", name: "Intuitive Surgical", highlight: "Robotic Surgery Demo", type: "Robotics", time: "20 min" },
      { booth: "#112", name: "Medtronic", highlight: "Surgical Navigation Systems", type: "Navigation", time: "15 min" },
      { booth: "#167", name: "Stryker", highlight: "Joint Replacement Robotics", type: "Robotics", time: "15 min" },
      { booth: "#189", name: "Olympus", highlight: "Endoscopic Surgical Systems", type: "Endoscopy", time: "10 min" },
      { booth: "#203", name: "Karl Storz", highlight: "OR Integration Solutions", type: "OR Tech", time: "10 min" },
      { booth: "#221", name: "Zimmer Biomet", highlight: "Surgical Instruments", type: "Instruments", time: "10 min" },
    ],
  };

  const tourGuides = [
    { name: "Dr. Sarah Chen", role: "Medical Technology Specialist", expertise: "AI & Diagnostics", image: "👩‍⚕️", yearsExp: 12 },
    { name: "Dr. Michael Roberts", role: "Clinical Innovation Director", expertise: "Surgical Tech", image: "👨‍⚕️", yearsExp: 15 },
    { name: "Lisa Wong", role: "Digital Health Lead", expertise: "Telemedicine & AI", image: "👩‍💻", yearsExp: 8 },
    { name: "Dr. James Wilson", role: "Research Partnerships", expertise: "Clinical Research", image: "👨‍🔬", yearsExp: 10 },
  ];

  const currentStops = tourStops[selectedTour] || tourStops.innovation;
  const currentTheme = tourThemes.find((t) => t.id === selectedTour);

  const getColorStyles = (color) => {
    const styles = {
      blue: "from-blue-500 to-blue-600",
      purple: "from-purple-500 to-purple-600",
      amber: "from-amber-500 to-amber-600",
      emerald: "from-emerald-500 to-emerald-600",
      cyan: "from-cyan-500 to-cyan-600",
    };
    return styles[color] || styles.blue;
  };

  const getLightColor = (color) => {
    const styles = {
      blue: "text-blue-400",
      purple: "text-purple-400",
      amber: "text-amber-400",
      emerald: "text-emerald-400",
      cyan: "text-cyan-400",
    };
    return styles[color] || styles.blue;
  };

  return (
    <>
      <BreadCrumb
        title="Guided Exhibition Tours"
        backgroundImage="/Images/Home/Bread-crum-1.avif"
        path={[{ label: "Whats On" }, { label: "Guided Exhibition Tours" }]}
      />

      <section className="relative min-h-screen py-16 md:py-20 lg:py-24 overflow-hidden">
        {/* Background - Kept the same */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-900">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/3 left-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section - Minimalist */}
          <div className="text-center max-w-4xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 mb-6">
              <Compass className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-gray-300">Expert-Led Experiences</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-white">Guided</span>
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent ml-3">
                Exhibition Tours
              </span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
              Expert-led journeys through the most impactful exhibits and medical innovations
            </p>
          </div>

          {/* Tour Themes - Minimal Cards */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Choose Your Path
              </h2>
              <div className="w-20 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {tourThemes.map((theme) => {
                const Icon = theme.icon;
                const isSelected = selectedTour === theme.id;
                return (
                  <button
                    key={theme.id}
                    onClick={() => setSelectedTour(theme.id)}
                    className={`group text-left transition-all duration-300 ${
                      isSelected ? "scale-[1.02]" : "hover:scale-[1.01]"
                    }`}
                  >
                    <div
                      className={`p-5 rounded-xl border transition-all duration-300 ${
                        isSelected
                          ? `bg-gradient-to-br ${getColorStyles(theme.color)} border-transparent shadow-lg`
                          : "bg-white/5 border-white/10 hover:border-white/20"
                      }`}
                    >
                      <div className={`mb-3 ${isSelected ? "text-white" : `text-${theme.color}-400`}`}>
                        <Icon className="w-8 h-8" />
                      </div>
                      <h3 className={`font-semibold mb-1 ${isSelected ? "text-white" : "text-white"}`}>
                        {theme.title}
                      </h3>
                      <div className="flex items-center gap-3 text-xs mb-2">
                        <span className={isSelected ? "text-white/70" : "text-gray-400"}>
                          <Clock className="w-3 h-3 inline mr-1" />
                          {theme.duration}
                        </span>
                        <span className={isSelected ? "text-white/70" : "text-gray-400"}>
                          <Flag className="w-3 h-3 inline mr-1" />
                          {theme.stops} stops
                        </span>
                      </div>
                      <p className={`text-xs leading-relaxed ${isSelected ? "text-white/70" : "text-gray-400"}`}>
                        {theme.description}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Tour Stops - Clean Timeline */}
          {currentTheme && (
            <div className="mb-20">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className={`text-2xl font-bold text-white ${getLightColor(currentTheme.color)}`}>
                    {currentTheme.title}
                  </h3>
                  <p className="text-gray-400 mt-1">{currentTheme.description}</p>
                </div>
                <Link
                  href="#schedule"
                  className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition-all duration-300 inline-flex items-center gap-2"
                >
                  Book Tour <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentStops.map((stop, idx) => (
                  <div
                    key={idx}
                    className="group relative"
                    onMouseEnter={() => setHoveredStop(idx)}
                    onMouseLeave={() => setHoveredStop(null)}
                  >
                    <div className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300">
                      <div className="flex items-start gap-3">
                        <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${getColorStyles(currentTheme.color)} flex items-center justify-center text-white text-sm font-bold flex-shrink-0`}>
                          {idx + 1}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                            <span className="text-xs font-mono text-blue-400">{stop.booth}</span>
                            <span className="text-xs text-gray-500">{stop.time}</span>
                          </div>
                          <h4 className="font-semibold text-white mb-1">{stop.name}</h4>
                          <p className="text-sm text-gray-400">{stop.highlight}</p>
                          <span className="inline-block mt-2 text-xs px-2 py-0.5 rounded-full bg-white/5 text-gray-400">
                            {stop.type}
                          </span>
                        </div>
                        <MapPin className="w-4 h-4 text-gray-500 group-hover:text-blue-400 transition-colors flex-shrink-0" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Schedule - Minimal Table Style */}
          <div id="schedule" className="mb-20">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                Daily Schedule
              </h2>
              <p className="text-gray-400">Reserve your spot on our expert-led tours</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-white/5 border-b border-white/10">
                    <tr>
                      <th className="text-left p-4 text-gray-300 font-medium">Time</th>
                      <th className="text-left p-4 text-gray-300 font-medium">Tour</th>
                      <th className="text-left p-4 text-gray-300 font-medium">Guide</th>
                      <th className="text-left p-4 text-gray-300 font-medium">Availability</th>
                      <th className="text-left p-4 text-gray-300 font-medium"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {tourSchedules.map((schedule, idx) => (
                      <tr key={idx} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                        <td className="p-4">
                          <div className="font-semibold text-white">{schedule.time}</div>
                          <div className="text-xs text-gray-500">{schedule.duration}</div>
                        </td>
                        <td className="p-4">
                          <div className="text-white">{schedule.theme} Tour</div>
                          <div className="text-xs text-gray-500">{schedule.language}</div>
                        </td>
                        <td className="p-4">
                          <div className="text-white">{schedule.guide}</div>
                          <div className="text-xs text-gray-500">Max {schedule.maxGroup} people</div>
                        </td>
                        <td className="p-4">
                          <span className="text-green-400 font-medium">{schedule.available} spots</span>
                          <div className="text-xs text-gray-500">available</div>
                        </td>
                        <td className="p-4">
                          <button className="px-4 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition-colors">
                            Reserve
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Guides - Minimal Cards */}
          <div className="mb-20">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                Expert Guides
              </h2>
              <p className="text-gray-400">Industry experts with deep knowledge of medical technology</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {tourGuides.map((guide, index) => (
                <div key={index} className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-2xl">
                      {guide.image}
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">{guide.name}</h3>
                      <p className="text-sm text-blue-400">{guide.role}</p>
                      <p className="text-xs text-gray-500 mt-1">{guide.yearsExp}+ years exp</p>
                    </div>
                  </div>
                  <div className="mt-3 pt-3 border-t border-white/10">
                    <p className="text-xs text-gray-400">Expertise: {guide.expertise}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats - Clean Numbers */}
          <div className="mb-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: Navigation, value: "8+", label: "Daily Tours" },
                { icon: Users, value: "15", label: "Max Group Size" },
                { icon: Award, value: "100%", label: "Expert Guides" },
                { icon: BadgeCheck, value: "90%", label: "Satisfaction" },
              ].map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center p-6 bg-white/5 border border-white/10 rounded-xl">
                    <Icon className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                    <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
                    <p className="text-sm text-gray-400">{stat.label}</p>
                  </div>
                );
              })}
            </div>
          </div>

          
    
     <div className="relative mt-16 overflow-hidden rounded-xl sm:rounded-2xl lg:rounded-3xl">
            {/* Animated background */}
            <div className="absolute inset-0 bg-[url('/Images/Home/Bread-crum-1.avif')] bg-cover bg-center"></div>

            {/* Floating orbs */}
            <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

            <div className="relative py-8 sm:py-10 md:py-12 lg:py-16 px-4 sm:px-6 md:px-8 text-center backdrop-blur-sm">
              <div className="inline-flex items-center gap-1 sm:gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-5 md:mb-6 lg:mb-8">
                <Star className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                <span className="text-xs sm:text-sm font-medium text-white/90">
                 Don't Miss Out
                </span>
              </div>

              <h4 className="text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-3 md:mb-4">
                
                Book your guided tour today and discover the most innovative medical technologies
              </h4>

               <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/register"
                  className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 inline-flex items-center justify-center gap-2"
                >
                  Book a Tour <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="#"
                  className="px-6 py-3 border border-white/30 text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 inline-flex items-center justify-center gap-2"
                >
                  Private Group <Users className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>


        </div>
      </section>
    </>
  );
}