"use client";

import Link from "next/link";
import {
  User,
  Mail,
  Phone,
  Briefcase,
  Stethoscope,
  Building2,
  Globe,
  Lock,
  Upload,
  CheckCircle,
  Shield,
  Users,
  Clock,
  BadgeCheck,
  Sparkles,
  Eye,
  EyeOff,
  Star,
  Heart,
  Award,
  FileText,
  Camera,
  IdCard,
  GraduationCap,
  MapPin,
  Calendar,
  ChevronRight,
  Send,
  Download,
  TrendingUp,
  Target,
  Globe2,
  Zap,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";
import PortalIntro from "../../Layout/PortalsAnimation";
import BreadCrumb from "../../Components/BreadCrum";

const FloatingIcon = ({
  Icon,
  delay = 0,
  duration = 20,
  startX = 0,
  startY = 0,
  color = "text-white",
}) => {
  const randomX = Math.random() * 100;
  const randomY = Math.random() * 100;

  return (
    <div
      className="absolute"
      style={{
        left: `${startX || randomX}%`,
        top: `${startY || randomY}%`,
        animation: `float ${duration}s infinite ease-in-out`,
        animationDelay: `${delay}s`,
        opacity: 0.3,
      }}
    >
      <Icon className={`w-6 h-6 md:w-8 md:h-10 ${color}`} />
    </div>
  );
};

export default function PractitionerRegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [hoveredDoc, setHoveredDoc] = useState(null);
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    nationality: "",
    city: "",
    profession: "",
    specialization: "",
    companyName: "",
    scfhsNumber: "",
    medicalLicense: null,
    governmentId: null,
    professionalPhoto: null,
    cvResume: null,
  });
  const [announcement, setAnnouncement] = useState("");
  const [sponsorship, setSponsorship] = useState("");
  const [infoRequests, setInfoRequests] = useState([]);
  const [orgComm, setOrgComm] = useState({ email: "", phone: "", sms: "" });
  const [exhibitorComm, setExhibitorComm] = useState({
    email: "",
    phone: "",
    sms: "",
  });

  const inputStyle =
    "w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-gray-400 transition-all duration-300 hover:border-blue-400/50 hover:bg-white/15 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500";

  const selectStyle =
    "w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 text-white transition-all duration-300 hover:border-blue-400/50 hover:bg-white/15 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500";

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e, docType) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        [docType]: file,
      });
    }
  };

  const handleInfoRequestChange = (item) => {
    setInfoRequests((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const completeData = {
      ...formData,
      announcement,
      sponsorship,
      infoRequests,
      organizerCommunication: orgComm,
      exhibitorCommunication: exhibitorComm,
    };
    console.log("Form submitted:", completeData);
  };

  const floatingIcons = [
    { Icon: Stethoscope, delay: 0, duration: 25, startX: 5, startY: 15, color: "text-blue-400/50" },
    { Icon: Heart, delay: 2, duration: 22, startX: 92, startY: 10, color: "text-rose-400/50" },
    { Icon: Shield, delay: 4, duration: 28, startX: 3, startY: 70, color: "text-emerald-400/50" },
    { Icon: Users, delay: 1, duration: 20, startX: 78, startY: 85, color: "text-purple-400/50" },
    { Icon: Award, delay: 3, duration: 24, startX: 88, startY: 78, color: "text-amber-400/50" },
    { Icon: Star, delay: 5, duration: 30, startX: 95, startY: 45, color: "text-yellow-400/50" },
    { Icon: Sparkles, delay: 2.5, duration: 18, startX: 2, startY: 40, color: "text-indigo-400/50" },
    { Icon: BadgeCheck, delay: 6, duration: 26, startX: 10, startY: 90, color: "text-green-400/50" },
    { Icon: Clock, delay: 1.5, duration: 21, startX: 25, startY: 3, color: "text-cyan-400/50" },
    { Icon: Building2, delay: 3.5, duration: 23, startX: 97, startY: 60, color: "text-slate-400/50" },
    { Icon: Briefcase, delay: 0.5, duration: 19, startX: 85, startY: 30, color: "text-orange-400/50" },
    { Icon: Globe, delay: 4.5, duration: 27, startX: 50, startY: 50, color: "text-teal-400/50" },
    { Icon: Calendar, delay: 1.8, duration: 24, startX: 60, startY: 92, color: "text-rose-400/50" },
  ];

  return (
    <>
      <BreadCrumb
        title="Health Care Registration"
        backgroundImage="/Images/Home/Bread-crum-1.avif"
        path={[
          { label: "Services", href: "/pages/NavBar-Links/NavServices" },
          { label: "Health Care Registration" },
        ]}
      />
      <div className="min-h-screen relative">

        {/* Dark themed background - matching other components */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-900">
          <div className="absolute top-10 left-10 w-32 h-32 sm:w-72 sm:h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 sm:w-80 sm:h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/3 left-1/3 w-48 h-48 sm:w-96 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 right-1/4 w-32 h-32 sm:w-64 sm:h-64 bg-emerald-500/20 rounded-full blur-3xl animate-pulse delay-700 hidden sm:block"></div>
        </div>

        {/* Floating Icons Background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          {floatingIcons.map((icon, idx) => (
            <FloatingIcon key={idx} {...icon} />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-8 md:py-12">
          {/* Hero Banner - Dark themed */}
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl shadow-2xl mb-8 overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-700">
            <div className="p-8 md:p-10">
              <div className="text-center mb-8">
                <div className="relative inline-block group/badge mb-4">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-lg opacity-0 group-hover/badge:opacity-50 transition-opacity duration-500"></div>
                  <div className="relative inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl text-white text-xs">
                    <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
                    <span>MedConf KSA 2026 • Riyadh, Saudi Arabia</span>
                  </div>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                  Let's Talk{" "}
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                    Healthcare Innovation
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                    Let's Talk MedConf
                  </span>
                </h1>

                <div className="flex flex-wrap items-center justify-center gap-4 text-gray-300 text-sm mb-4">
                  <div className="flex items-center gap-2 bg-white/5 rounded-full px-3 py-1 border border-white/10">
                    <Calendar className="w-4 h-4 text-blue-400" />
                    <span>15 - 17 November 2026</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/5 rounded-full px-3 py-1 border border-white/10">
                    <MapPin className="w-4 h-4 text-cyan-400" />
                    <span>Riyadh International Convention & Exhibition Center</span>
                  </div>
                </div>

                <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                  Complete the form to connect with our commercial team and
                  explore how{" "}
                  <span className="font-semibold text-blue-400">MedConf KSA</span>{" "}
                  can deliver
                  <span className="font-semibold text-blue-400">
                    {" "}
                    strategic partnerships, brand visibility, and measurable
                    impact
                  </span>{" "}
                  for your healthcare organization.
                </p>
              </div>

              {/* Why Exhibit Section - Dark themed */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5 text-cyan-400" />
                  Why exhibit at MedConf KSA?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {[
                    "Connect with key decision-makers from Saudi Arabia's healthcare sector",
                    "Showcase your medical innovations to 50,000+ healthcare professionals",
                    "Align your brand with Saudi Vision 2030 healthcare transformation goals",
                    "Access exclusive B2B matching and networking opportunities",
                    "Gain exposure to government and private hospital procurement teams",
                    "Participate in CME-accredited conferences and workshops",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2 text-sm text-gray-300"
                    >
                      <CheckCircle className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Form Container - Glass morphism */}
          <div
            className="bg-white/5 backdrop-blur-md rounded-3xl shadow-2xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-700"
            id="form"
          >
            {/* Form Header */}
            <div className="text-center py-8 px-4 border-b border-white/10 bg-white/10 ">
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-600 to-cyan-600 pb-2 bg-clip-text text-transparent">
                Practitioner Registration
              </h2>
              <p className="text-gray-400 mt-2">Join the region's premier healthcare network</p>
              <p className="text-xs text-gray-500 mt-3 flex items-center justify-center gap-1">
                <Lock className="w-3 h-3" /> Your information is secure and confidential
              </p>
            </div>

            <form onSubmit={handleSubmit} className="p-6 md:p-8 lg:p-10 space-y-8">
              {/* ACCOUNT SECTION */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10 transition-all hover:border-blue-500/30">
                <div className="flex items-center gap-3 mb-6 pb-2 border-b border-white/10">
                  <div className="p-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl shadow-lg">
                    <Lock className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    Account Information
                  </h3>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="font-semibold text-gray-300 mb-2 block text-sm">
                      Email Address <span className="text-red-400">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3.5 text-gray-400 w-5 transition-all group-hover:text-blue-400" />
                      <input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`${inputStyle} pl-12`}
                        placeholder="dr.name@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="group">
                    <label className="font-semibold text-gray-300 mb-2 block text-sm">
                      Phone Number <span className="text-red-400">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3.5 text-gray-400 w-5 transition-all group-hover:text-blue-400" />
                      <input
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={`${inputStyle} pl-12`}
                        placeholder="+966 XX XXX XXXX"
                        required
                      />
                    </div>
                  </div>

                  <div className="group">
                    <label className="font-semibold text-gray-300 mb-2 block text-sm">
                      Password <span className="text-red-400">*</span>
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3.5 text-gray-400 w-5 transition-all group-hover:text-blue-400" />
                      <input
                        name="password"
                        type={showPassword ? "text" : "password"}
                        value={formData.password}
                        onChange={handleInputChange}
                        className={`${inputStyle} pl-12 pr-12`}
                        placeholder="Create a strong password"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-3.5 text-gray-400 hover:text-gray-300 transition-colors"
                      >
                        {showPassword ? <EyeOff className="w-5" /> : <Eye className="w-5" />}
                      </button>
                    </div>
                  </div>

                  <div className="group">
                    <label className="font-semibold text-gray-300 mb-2 block text-sm">
                      Confirm Password <span className="text-red-400">*</span>
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3.5 text-gray-400 w-5 transition-all group-hover:text-blue-400" />
                      <input
                        name="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        className={`${inputStyle} pl-12 pr-12`}
                        placeholder="Confirm your password"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-3.5 text-gray-400 hover:text-gray-300 transition-colors"
                      >
                        {showConfirmPassword ? <EyeOff className="w-5" /> : <Eye className="w-5" />}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* PERSONAL SECTION */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10 transition-all hover:border-emerald-500/30">
                <div className="flex items-center gap-3 mb-6 pb-2 border-b border-white/10">
                  <div className="p-2 bg-gradient-to-r from-emerald-600 to-teal-500 rounded-xl shadow-lg">
                    <User className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    Personal Information
                  </h3>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="font-semibold text-gray-300 mb-2 block text-sm">
                      First Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className={inputStyle}
                      placeholder="John"
                      required
                    />
                  </div>
                  <div>
                    <label className="font-semibold text-gray-300 mb-2 block text-sm">
                      Last Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className={inputStyle}
                      placeholder="Doe"
                      required
                    />
                  </div>

                  <div>
                    <label className="font-semibold text-gray-300 mb-2 block text-sm">
                      Nationality
                    </label>
                    <div className="relative">
                      <Globe className="absolute left-3 top-3.5 text-gray-400 w-5" />
                      <input
                        name="nationality"
                        value={formData.nationality}
                        onChange={handleInputChange}
                        className={`${inputStyle} pl-12`}
                        placeholder="e.g., Saudi, American, British"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-semibold text-gray-300 mb-2 block text-sm">
                      City
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3.5 text-gray-400 w-5" />
                      <input
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className={`${inputStyle} pl-12`}
                        placeholder="e.g., Riyadh, Jeddah, Dammam"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* PROFESSIONAL SECTION */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10 transition-all hover:border-purple-500/30">
                <div className="flex items-center gap-3 mb-6 pb-2 border-b border-white/10">
                  <div className="p-2 bg-gradient-to-r from-purple-600 to-pink-500 rounded-xl shadow-lg">
                    <Stethoscope className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    Professional Information
                  </h3>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="font-semibold text-gray-300 mb-2 block text-sm">
                      Job/Title <span className="text-red-400">*</span>
                    </label>
                    <select
                      name="profession"
                      value={formData.profession}
                      onChange={handleInputChange}
                      className={selectStyle}
                      required
                    >
                      <option value="" className="bg-gray-800">Select your profession</option>
                      <option className="bg-gray-800">Medical Doctor</option>
                      <option className="bg-gray-800">Dentist</option>
                      <option className="bg-gray-800">Pharmacist</option>
                      <option className="bg-gray-800">Nurse</option>
                      <option className="bg-gray-800">Physiotherapist</option>
                      <option className="bg-gray-800">Healthcare Administrator</option>
                      <option className="bg-gray-800">Researcher</option>
                    </select>
                  </div>
                  <div>
                    <label className="font-semibold text-gray-300 mb-2 block text-sm">
                      Specialization
                    </label>
                    <input
                      name="specialization"
                      value={formData.specialization}
                      onChange={handleInputChange}
                      className={inputStyle}
                      placeholder="e.g., Cardiology, Pediatrics"
                    />
                  </div>
                  <div>
                    <label className="font-semibold text-gray-300 mb-2 block text-sm">
                      Company/Institution <span className="text-red-400">*</span>
                    </label>
                    <input
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      className={inputStyle}
                      placeholder="Enter company or institution name"
                      required
                    />
                  </div>
                  <div>
                    <label className="font-semibold text-gray-300 mb-2 block text-sm">
                      SCFHS Number
                    </label>
                    <input
                      name="scfhsNumber"
                      value={formData.scfhsNumber}
                      onChange={handleInputChange}
                      className={inputStyle}
                      placeholder="Enter SCFHS license number"
                    />
                  </div>
                </div>
              </div>

              {/* DOCUMENTS SECTION */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10 transition-all hover:border-orange-500/30">
                <div className="flex items-center gap-3 mb-6 pb-2 border-b border-white/10">
                  <div className="p-2 bg-gradient-to-r from-orange-600 to-red-500 rounded-xl shadow-lg">
                    <FileText className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    Upload Documents
                  </h3>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { name: "Medical License", icon: Award, key: "medicalLicense", color: "from-blue-500 to-cyan-500", accept: ".pdf,.jpg,.png" },
                    { name: "Government ID", icon: IdCard, key: "governmentId", color: "from-emerald-500 to-teal-500", accept: ".pdf,.jpg,.png" },
                    { name: "Professional Photo", icon: Camera, key: "professionalPhoto", color: "from-purple-500 to-pink-500", accept: "image/*" },
                    { name: "CV/Resume", icon: GraduationCap, key: "cvResume", color: "from-orange-500 to-red-500", accept: ".pdf,.doc,.docx" },
                  ].map((doc, idx) => (
                    <label
                      key={idx}
                      onMouseEnter={() => setHoveredDoc(idx)}
                      onMouseLeave={() => setHoveredDoc(null)}
                      className={`relative border-2 border-dashed rounded-2xl p-6 text-center cursor-pointer transition-all duration-300 transform ${
                        hoveredDoc === idx
                          ? `border-transparent bg-gradient-to-br ${doc.color} shadow-2xl scale-105`
                          : "border-white/20 hover:border-white/40 bg-white/5"
                      }`}
                    >
                      <input
                        type="file"
                        className="hidden"
                        accept={doc.accept}
                        onChange={(e) => handleFileChange(e, doc.key)}
                      />
                      <div className={`transition-all duration-300 ${hoveredDoc === idx ? "text-white" : "text-gray-400"}`}>
                        <doc.icon className="mx-auto mb-3 w-10 h-10" />
                      </div>
                      <p className={`text-sm font-medium transition-all duration-300 ${hoveredDoc === idx ? "text-white" : "text-gray-300"}`}>
                        {doc.name}
                      </p>
                      {formData[doc.key] && (
                        <p className={`text-xs mt-2 truncate px-2 ${hoveredDoc === idx ? "text-white/80" : "text-cyan-400"}`}>
                          ✓ {formData[doc.key].name}
                        </p>
                      )}
                      <Upload className={`absolute bottom-3 right-3 w-4 h-4 transition-all duration-300 ${hoveredDoc === idx ? "text-white opacity-100" : "opacity-0"}`} />
                    </label>
                  ))}
                </div>
                <p className="text-xs text-gray-500 mt-4 text-center">
                  Accepted formats: PDF, JPG, PNG. Max size: 5MB per file
                </p>
              </div>

              {/* ADDITIONAL QUESTIONS SECTION */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10">
                <div className="flex items-center gap-3 mb-6 pb-2 border-b border-white/10">
                  <div className="p-2 bg-gradient-to-r from-gray-600 to-gray-700 rounded-xl shadow-lg">
                    <Send className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    Additional Information
                  </h3>
                </div>

                <div className="space-y-8">
                  {/* Announcements */}
                  <div>
                    <h4 className="font-semibold text-gray-300 mb-3">
                      Do you plan on making any announcements at Medconf?
                    </h4>
                    <div className="flex flex-wrap gap-6">
                      {["yes", "no"].map((value) => (
                        <label key={value} className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="announcement"
                            value={value}
                            onChange={(e) => setAnnouncement(e.target.value)}
                            className="w-4 h-4 text-blue-500 bg-white/10 border-white/20"
                          />
                          <span className="text-gray-300 capitalize">{value}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Sponsorship */}
                  <div>
                    <h4 className="font-semibold text-gray-300 mb-3">
                      Are you interested in sponsorship opportunities?
                    </h4>
                    <div className="flex flex-wrap gap-6">
                      {[
                        { value: "yes", label: "Yes, please contact me" },
                        { value: "no", label: "Not at this time" },
                        { value: "maybe", label: "Maybe, send me information" },
                      ].map((option) => (
                        <label key={option.value} className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="sponsorship"
                            value={option.value}
                            onChange={(e) => setSponsorship(e.target.value)}
                            className="w-4 h-4 text-blue-500 bg-white/10 border-white/20"
                          />
                          <span className="text-gray-300">{option.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Information Request */}
                  <div>
                    <h4 className="font-semibold text-gray-300 mb-3">
                      What information would you like to receive?
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {[
                        "Sales Brochure",
                        "Attendee Information",
                        "2025 Event Report",
                        "Sponsorship Package",
                        "Floor Plan",
                        "Speaker Opportunities",
                      ].map((item, i) => (
                        <label key={i} className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="checkbox"
                            value={item}
                            onChange={() => handleInfoRequestChange(item)}
                            className="w-4 h-4 text-blue-500 rounded bg-white/10 border-white/20"
                          />
                          <span className="text-sm text-gray-300">{item}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Organizer Communication */}
                  <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                    <p className="text-sm text-gray-300 mb-4 font-medium">
                      I would like to receive tailored information, including
                      industry insights, exclusive networking opportunities and
                      access to offers from MedConf and Tahaluf.
                    </p>
                    <div className="flex flex-wrap gap-6 text-sm">
                      {["Email", "Phone", "SMS"].map((type) => (
                        <div key={type} className="flex items-center gap-3">
                          <span className="text-gray-400 font-medium w-12">{type}:</span>
                          {["yes", "no"].map((option) => (
                            <label key={option} className="flex items-center gap-1 cursor-pointer">
                              <input
                                type="radio"
                                name={`org-${type}`}
                                value={option}
                                onChange={() =>
                                  setOrgComm({
                                    ...orgComm,
                                    [type.toLowerCase()]: option,
                                  })
                                }
                                className="w-3.5 h-3.5 text-blue-500 bg-white/10"
                              />
                              <span className="text-gray-400 text-sm capitalize">{option}</span>
                            </label>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Exhibitor Communication */}
                  <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                    <p className="text-sm text-gray-300 mb-4 font-medium">
                      I would like to receive information about innovations,
                      products and services from exhibitors and sponsors.
                    </p>
                    <div className="flex flex-wrap gap-6 text-sm">
                      {["Email", "Phone", "SMS"].map((type) => (
                        <div key={type} className="flex items-center gap-3">
                          <span className="text-gray-400 font-medium w-12">{type}:</span>
                          {["yes", "no"].map((option) => (
                            <label key={option} className="flex items-center gap-1 cursor-pointer">
                              <input
                                type="radio"
                                name={`expo-${type}`}
                                value={option}
                                onChange={() =>
                                  setExhibitorComm({
                                    ...exhibitorComm,
                                    [type.toLowerCase()]: option,
                                  })
                                }
                                className="w-3.5 h-3.5 text-blue-500 bg-white/10"
                              />
                              <span className="text-gray-400 text-sm capitalize">{option}</span>
                            </label>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  type="submit"
                  className="relative inline-flex items-center justify-center gap-2 w-full group/btn overflow-hidden transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-xl opacity-0 group-hover/btn:opacity-60 transition-opacity duration-500"></div>
                  <div className="relative bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-10 py-4 rounded-xl text-lg font-semibold hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 w-full">
                    Complete Registration
                    <CheckCircle className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
                    <div className="absolute inset-0 rounded-xl bg-white opacity-0 group-hover/btn:opacity-20 transition-opacity"></div>
                  </div>
                </button>
                <p className="text-xs text-gray-500 text-center mt-4">
                  By submitting, you agree to our Terms of Service and Privacy Policy
                </p>
              </div>
            </form>

            {/* Footer */}
            <div className="text-center py-6 border-t border-white/10 bg-white/5">
              <p className="text-gray-400 text-sm">
                Already have an account?{" "}
                <Link
                  href="/Forms/Login"
                  className="text-cyan-400 font-semibold hover:text-blue-400 transition-colors"
                >
                  Sign in here
                </Link>
              </p>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes float {
            0% { transform: translateY(0px) translateX(0px) rotate(0deg); }
            25% { transform: translateY(-70px) translateX(50px) rotate(6deg); }
            50% { transform: translateY(-110px) translateX(0px) rotate(0deg); }
            75% { transform: translateY(-35px) translateX(-50px) rotate(-6deg); }
            100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          }
        `}</style>
      </div>
    </>
  );
}