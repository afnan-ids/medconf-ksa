"use client";

import Link from "next/link";
import {
  User,
  Mail,
  Phone,
  Briefcase,
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
  DollarSign,
  CalendarDays,
  Ruler,
  Ticket,
  Store,
} from "lucide-react";
import { useState } from "react";
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

export default function ExhibitorRegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [hoveredDoc, setHoveredDoc] = useState(null);
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    companyName: "",
    contactPersonFirstName: "",
    contactPersonLastName: "",
    jobTitle: "",
    country: "",
    city: "",
    companyWebsite: "",
    boothPreference: "",
    boothSize: "",
    estimatedBudget: "",
    numberOfStaff: "",
    previousParticipation: "",
    companyRegistration: null,
    taxCertificate: null,
    companyLogo: null,
    productBrochure: null,
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
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item],
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
    console.log("Exhibitor Form submitted:", completeData);
  };

  const floatingIcons = [
    {
      Icon: Store,
      delay: 0,
      duration: 25,
      startX: 5,
      startY: 15,
      color: "text-blue-400/50",
    },
    {
      Icon: Building2,
      delay: 2,
      duration: 22,
      startX: 92,
      startY: 10,
      color: "text-rose-400/50",
    },
    {
      Icon: Shield,
      delay: 4,
      duration: 28,
      startX: 3,
      startY: 70,
      color: "text-emerald-400/50",
    },
    {
      Icon: Users,
      delay: 1,
      duration: 20,
      startX: 78,
      startY: 85,
      color: "text-purple-400/50",
    },
    {
      Icon: Award,
      delay: 3,
      duration: 24,
      startX: 88,
      startY: 78,
      color: "text-amber-400/50",
    },
    {
      Icon: Star,
      delay: 5,
      duration: 30,
      startX: 95,
      startY: 45,
      color: "text-yellow-400/50",
    },
    {
      Icon: Sparkles,
      delay: 2.5,
      duration: 18,
      startX: 2,
      startY: 40,
      color: "text-indigo-400/50",
    },
    {
      Icon: BadgeCheck,
      delay: 6,
      duration: 26,
      startX: 10,
      startY: 90,
      color: "text-green-400/50",
    },
    {
      Icon: Clock,
      delay: 1.5,
      duration: 21,
      startX: 25,
      startY: 3,
      color: "text-cyan-400/50",
    },
    {
      Icon: Briefcase,
      delay: 3.5,
      duration: 23,
      startX: 97,
      startY: 60,
      color: "text-orange-400/50",
    },
    {
      Icon: Globe,
      delay: 4.5,
      duration: 27,
      startX: 50,
      startY: 50,
      color: "text-teal-400/50",
    },
    {
      Icon: Calendar,
      delay: 1.8,
      duration: 24,
      startX: 60,
      startY: 92,
      color: "text-rose-400/50",
    },
    {
      Icon: Ticket,
      delay: 0.8,
      duration: 19,
      startX: 15,
      startY: 45,
      color: "text-yellow-400/50",
    },
    {
      Icon: DollarSign,
      delay: 3.2,
      duration: 26,
      startX: 85,
      startY: 20,
      color: "text-green-400/50",
    },
  ];

  return (
    <>
      <BreadCrumb
        title="Exhibitor Registration"
        backgroundImage="/Images/Home/Bread-crum-1.avif"
        path={[{ label: "Exhibitor Registration" }]}
      />
      <div className="min-h-screen relative">
        {/* Dark themed background */}
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
          {/* Hero Banner */}
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl shadow-2xl mb-8 overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-700">
            <div className="p-8 md:p-10">
              <div className="text-center mb-8">
                <div className="relative inline-block group/badge mb-4">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full blur-lg opacity-0 group-hover/badge:opacity-50 transition-opacity duration-500"></div>
                  <div className="relative inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl text-white text-xs">
                    <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
                    <span>MedConf KSA 2026 • Riyadh, Saudi Arabia</span>
                  </div>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                  Exhibit at{" "}
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                    MedConf KSA 2026
                  </span>
                  <br />
                  <span className="text-white bg-clip-text text-transparent">
                    Showcase Your Innovation
                  </span>
                </h1>

                <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                  Secure your booth at the region's largest healthcare
                  exhibition. Connect with{" "}
                  <span className="font-semibold text-blue-400">
                    50,000+ healthcare professionals
                  </span>
                  , showcase your innovations, and unlock{" "}
                  <span className="font-semibold text-blue-400">
                    strategic partnerships
                  </span>{" "}
                  with key decision-makers from Saudi Arabia's healthcare
                  sector.
                </p>
              </div>

              {/* Why Exhibit Section */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5 text-blue-400" />
                  Why exhibit at MedConf KSA?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {[
                    "Connect with key decision-makers from Saudi Arabia's healthcare sector",
                    "Showcase your medical innovations to 50,000+ healthcare professionals",
                    "Access exclusive B2B matching and networking opportunities",
                    "Generate qualified leads with our smart lead capture system",
                    "Position your brand as a leader in healthcare innovation",
                    "Participate in CME-accredited conferences and workshops",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2 text-sm text-gray-300"
                    >
                      <CheckCircle className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        
          {/* Main Form Container */}
          <div
            className="relative bg-gradient-to-br from-gray-900/80 via-indigo-950/80 to-gray-900/80 backdrop-blur-md rounded-3xl shadow-2xl border border-white/10 overflow-hidden hover:border-blue-500/30 transition-all duration-700"
            id="form"
          >
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-cyan-500/5 to-blue-600/5 opacity-0 hover:opacity-100 transition-opacity duration-700"></div>

            {/* Decorative corner elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-br-3xl blur-2xl"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-blue-500/20 to-cyan-500/20 rounded-tl-3xl blur-2xl"></div>

            {/* Form Header */}
            <div className="relative text-center py-10 px-4 border-b border-white/10 bg-gradient-to-r from-blue-600/10 via-cyan-500/10 to-blue-600/10">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
              <div className="relative">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 mb-4">
                  <Store className="w-4 h-4 text-blue-400" />
                  <span className="text-xs text-blue-300 font-medium">
                    Exhibition Opportunity
                  </span>
                </div>
                <h2 className="pb-2 text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent animate-gradient">
                  Exhibitor Registration
                </h2>
                <p className="text-gray-300 mt-3 text-lg">
                  Showcase your innovation to industry leaders
                </p>
                <div className="flex items-center justify-center gap-2 mt-4">
                  <div className="flex items-center gap-1 px-3 py-1.5 bg-white/5 rounded-full border border-white/10">
                    <Lock className="w-3 h-3 text-cyan-400" />
                    <span className="text-xs text-gray-400">
                      256-bit SSL Secure
                    </span>
                  </div>
                  <div className="flex items-center gap-1 px-3 py-1.5 bg-white/5 rounded-full border border-white/10">
                    <Shield className="w-3 h-3 text-blue-400" />
                    <span className="text-xs text-gray-400">
                      GDPR Compliant
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="relative p-6 md:p-8 lg:p-10 space-y-8"
            >
              {/* ACCOUNT SECTION */}
              <div className="relative group bg-gradient-to-br from-white/5 to-white/3 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10 hover:border-blue-500/40 transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/10">
                <div className="absolute -inset-px bg-gradient-to-r from-blue-500/0 via-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:via-blue-500/10 group-hover:to-cyan-500/10 rounded-2xl blur-xl transition-all duration-700 -z-10"></div>

                <div className="flex items-center gap-4 mb-8 pb-3 border-b border-white/10">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl blur-lg opacity-50 animate-pulse"></div>
                    <div className="relative p-3 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl shadow-lg">
                      <Lock className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                      Account Information
                    </h3>
                    <p className="text-gray-400 text-sm mt-1">
                      Create your secure account
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group/field">
                    <label className="font-semibold text-gray-300 mb-2 block text-sm flex items-center gap-1">
                      <Mail className="w-4 h-4 text-blue-400" />
                      Email Address <span className="text-red-400">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3.5 text-gray-400 w-5 transition-all group-hover/field:text-blue-400" />
                      <input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`${inputStyle} pl-12`}
                        placeholder="company@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="group/field">
                    <label className="font-semibold text-gray-300 mb-2 block text-sm flex items-center gap-1">
                      <Phone className="w-4 h-4 text-cyan-400" />
                      Phone Number <span className="text-red-400">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3.5 text-gray-400 w-5 transition-all group-hover/field:text-cyan-400" />
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

                  <div className="group/field">
                    <label className="font-semibold text-gray-300 mb-2 block text-sm flex items-center gap-1">
                      <Lock className="w-4 h-4 text-blue-400" />
                      Password <span className="text-red-400">*</span>
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3.5 text-gray-400 w-5 transition-all group-hover/field:text-blue-400" />
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
                        className="absolute right-3 top-3.5 text-gray-400 hover:text-blue-400 transition-colors"
                      >
                        {showPassword ? (
                          <EyeOff className="w-5" />
                        ) : (
                          <Eye className="w-5" />
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="group/field">
                    <label className="font-semibold text-gray-300 mb-2 block text-sm flex items-center gap-1">
                      <Lock className="w-4 h-4 text-cyan-400" />
                      Confirm Password <span className="text-red-400">*</span>
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3.5 text-gray-400 w-5 transition-all group-hover/field:text-cyan-400" />
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
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                        className="absolute right-3 top-3.5 text-gray-400 hover:text-cyan-400 transition-colors"
                      >
                        {showConfirmPassword ? (
                          <EyeOff className="w-5" />
                        ) : (
                          <Eye className="w-5" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* COMPANY SECTION */}
              <div className="relative group bg-gradient-to-br from-white/5 to-white/3 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10 hover:border-emerald-500/40 transition-all duration-500 hover:shadow-xl hover:shadow-emerald-500/10">
                <div className="absolute -inset-px bg-gradient-to-r from-emerald-500/0 via-emerald-500/0 to-teal-500/0 group-hover:from-emerald-500/10 group-hover:via-emerald-500/10 group-hover:to-teal-500/10 rounded-2xl blur-xl transition-all duration-700 -z-10"></div>

                <div className="flex items-center gap-4 mb-8 pb-3 border-b border-white/10">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl blur-lg opacity-50 animate-pulse"></div>
                    <div className="relative p-3 bg-gradient-to-r from-emerald-600 to-teal-500 rounded-xl shadow-lg">
                      <Building2 className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                      Company Information
                    </h3>
                    <p className="text-gray-400 text-sm mt-1">
                      Tell us about your organization
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group/field">
                    <label className="font-semibold text-gray-300 mb-2 block text-sm flex items-center gap-1">
                      <Building2 className="w-4 h-4 text-emerald-400" />
                      Company Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      className={inputStyle}
                      placeholder="Enter your company name"
                      required
                    />
                  </div>

                  <div className="group/field">
                    <label className="font-semibold text-gray-300 mb-2 block text-sm flex items-center gap-1">
                      <Globe className="w-4 h-4 text-teal-400" />
                      Company Website
                    </label>
                    <div className="relative">
                      <Globe className="absolute left-3 top-3.5 text-gray-400 w-5" />
                      <input
                        name="companyWebsite"
                        value={formData.companyWebsite}
                        onChange={handleInputChange}
                        className={`${inputStyle} pl-12`}
                        placeholder="www.yourcompany.com"
                      />
                    </div>
                  </div>

                  <div className="group/field">
                    <label className="font-semibold text-gray-300 mb-2 block text-sm flex items-center gap-1">
                      <Globe className="w-4 h-4 text-emerald-400" />
                      Country <span className="text-red-400">*</span>
                    </label>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      className={selectStyle}
                      required
                    >
                      <option value="" className="bg-gray-800">
                        Select country
                      </option>
                      <option className="bg-gray-800">Saudi Arabia</option>
                      <option className="bg-gray-800">
                        United Arab Emirates
                      </option>
                      <option className="bg-gray-800">Kuwait</option>
                      <option className="bg-gray-800">Qatar</option>
                      <option className="bg-gray-800">Bahrain</option>
                      <option className="bg-gray-800">Oman</option>
                      <option className="bg-gray-800">Other</option>
                    </select>
                  </div>

                  <div className="group/field">
                    <label className="font-semibold text-gray-300 mb-2 block text-sm flex items-center gap-1">
                      <MapPin className="w-4 h-4 text-teal-400" />
                      City <span className="text-red-400">*</span>
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3.5 text-gray-400 w-5" />
                      <input
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className={`${inputStyle} pl-12`}
                        placeholder="e.g., Riyadh"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* CONTACT PERSON SECTION */}
              <div className="relative group bg-gradient-to-br from-white/5 to-white/3 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10 hover:border-purple-500/40 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/10">
                <div className="absolute -inset-px bg-gradient-to-r from-purple-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 rounded-2xl blur-xl transition-all duration-700 -z-10"></div>

                <div className="flex items-center gap-4 mb-8 pb-3 border-b border-white/10">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl blur-lg opacity-50 animate-pulse"></div>
                    <div className="relative p-3 bg-gradient-to-r from-purple-600 to-pink-500 rounded-xl shadow-lg">
                      <User className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                      Contact Person Information
                    </h3>
                    <p className="text-gray-400 text-sm mt-1">
                      Who should we contact?
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group/field">
                    <label className="font-semibold text-gray-300 mb-2 block text-sm">
                      First Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      name="contactPersonFirstName"
                      value={formData.contactPersonFirstName}
                      onChange={handleInputChange}
                      className={inputStyle}
                      placeholder="John"
                      required
                    />
                  </div>

                  <div className="group/field">
                    <label className="font-semibold text-gray-300 mb-2 block text-sm">
                      Last Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      name="contactPersonLastName"
                      value={formData.contactPersonLastName}
                      onChange={handleInputChange}
                      className={inputStyle}
                      placeholder="Doe"
                      required
                    />
                  </div>

                  <div className="group/field">
                    <label className="font-semibold text-gray-300 mb-2 block text-sm">
                      Job Title <span className="text-red-400">*</span>
                    </label>
                    <input
                      name="jobTitle"
                      value={formData.jobTitle}
                      onChange={handleInputChange}
                      className={inputStyle}
                      placeholder="e.g., Marketing Manager"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* EXHIBITION REQUIREMENTS SECTION */}
              <div className="relative group bg-gradient-to-br from-white/5 to-white/3 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10 hover:border-orange-500/40 transition-all duration-500 hover:shadow-xl hover:shadow-orange-500/10">
                <div className="absolute -inset-px bg-gradient-to-r from-orange-500/0 via-orange-500/0 to-red-500/0 group-hover:from-orange-500/10 group-hover:via-orange-500/10 group-hover:to-red-500/10 rounded-2xl blur-xl transition-all duration-700 -z-10"></div>

                <div className="flex items-center gap-4 mb-8 pb-3 border-b border-white/10">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl blur-lg opacity-50 animate-pulse"></div>
                    <div className="relative p-3 bg-gradient-to-r from-orange-600 to-red-500 rounded-xl shadow-lg">
                      <Store className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                      Exhibition Requirements
                    </h3>
                    <p className="text-gray-400 text-sm mt-1">
                      Tell us your booth preferences
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group/field">
                    <label className="font-semibold text-gray-300 mb-2 block text-sm">
                      Booth Preference
                    </label>
                    <select
                      name="boothPreference"
                      value={formData.boothPreference}
                      onChange={handleInputChange}
                      className={selectStyle}
                    >
                      <option value="" className="bg-gray-800">
                        Select booth preference
                      </option>
                      <option className="bg-gray-800">Corner Booth</option>
                      <option className="bg-gray-800">Inline Booth</option>
                      <option className="bg-gray-800">Island Booth</option>
                      <option className="bg-gray-800">Premium Location</option>
                    </select>
                  </div>

                  <div className="group/field">
                    <label className="font-semibold text-gray-300 mb-2 block text-sm">
                      Booth Size (sqm)
                    </label>
                    <select
                      name="boothSize"
                      value={formData.boothSize}
                      onChange={handleInputChange}
                      className={selectStyle}
                    >
                      <option value="" className="bg-gray-800">
                        Select booth size
                      </option>
                      <option className="bg-gray-800">9 sqm (3x3)</option>
                      <option className="bg-gray-800">12 sqm (3x4)</option>
                      <option className="bg-gray-800">18 sqm (3x6)</option>
                      <option className="bg-gray-800">24 sqm (4x6)</option>
                      <option className="bg-gray-800">36+ sqm (Custom)</option>
                    </select>
                  </div>

                  <div className="group/field">
                    <label className="font-semibold text-gray-300 mb-2 block text-sm">
                      Estimated Budget (USD)
                    </label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-3.5 text-gray-400 w-5" />
                      <select
                        name="estimatedBudget"
                        value={formData.estimatedBudget}
                        onChange={handleInputChange}
                        className={`${selectStyle} pl-12`}
                      >
                        <option value="" className="bg-gray-800">
                          Select budget range
                        </option>
                        <option className="bg-gray-800">
                          $5,000 - $10,000
                        </option>
                        <option className="bg-gray-800">
                          $10,000 - $25,000
                        </option>
                        <option className="bg-gray-800">
                          $25,000 - $50,000
                        </option>
                        <option className="bg-gray-800">
                          $50,000 - $100,000
                        </option>
                        <option className="bg-gray-800">$100,000+</option>
                      </select>
                    </div>
                  </div>

                  <div className="group/field">
                    <label className="font-semibold text-gray-300 mb-2 block text-sm">
                      Number of Staff
                    </label>
                    <select
                      name="numberOfStaff"
                      value={formData.numberOfStaff}
                      onChange={handleInputChange}
                      className={selectStyle}
                    >
                      <option value="" className="bg-gray-800">
                        Select number
                      </option>
                      <option className="bg-gray-800">1-2</option>
                      <option className="bg-gray-800">3-5</option>
                      <option className="bg-gray-800">6-10</option>
                      <option className="bg-gray-800">11-20</option>
                      <option className="bg-gray-800">20+</option>
                    </select>
                  </div>

                  <div className="group/field">
                    <label className="font-semibold text-gray-300 mb-2 block text-sm">
                      Previous Participation at MedConf
                    </label>
                    <select
                      name="previousParticipation"
                      value={formData.previousParticipation}
                      onChange={handleInputChange}
                      className={selectStyle}
                    >
                      <option value="" className="bg-gray-800">
                        Select
                      </option>
                      <option className="bg-gray-800">
                        Yes, previously exhibited
                      </option>
                      <option className="bg-gray-800">
                        Yes, attended as visitor
                      </option>
                      <option className="bg-gray-800">No, first time</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* DOCUMENTS SECTION */}
              <div className="relative group bg-gradient-to-br from-white/5 to-white/3 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10 hover:border-cyan-500/40 transition-all duration-500 hover:shadow-xl hover:shadow-cyan-500/10">
                <div className="absolute -inset-px bg-gradient-to-r from-cyan-500/0 via-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/10 group-hover:via-cyan-500/10 group-hover:to-blue-500/10 rounded-2xl blur-xl transition-all duration-700 -z-10"></div>

                <div className="flex items-center gap-4 mb-8 pb-3 border-b border-white/10">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl blur-lg opacity-50 animate-pulse"></div>
                    <div className="relative p-3 bg-gradient-to-r from-cyan-600 to-blue-500 rounded-xl shadow-lg">
                      <FileText className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                      Upload Documents
                    </h3>
                    <p className="text-gray-400 text-sm mt-1">
                      Supporting documents for your application
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    {
                      name: "Company Registration",
                      icon: Building2,
                      key: "companyRegistration",
                      accept: ".pdf,.jpg,.png",
                    },
                    {
                      name: "Tax Certificate",
                      icon: FileText,
                      key: "taxCertificate",
                      accept: ".pdf,.jpg,.png",
                    },
                    {
                      name: "Company Logo",
                      icon: Camera,
                      key: "companyLogo",
                      accept: "image/*",
                    },
                    {
                      name: "Product Brochure",
                      icon: FileText,
                      key: "productBrochure",
                      accept: ".pdf,.doc,.docx",
                    },
                  ].map((doc, idx) => (
                    <label
                      key={idx}
                      onMouseEnter={() => setHoveredDoc(idx)}
                      onMouseLeave={() => setHoveredDoc(null)}
                      className={`relative border-2 border-dashed rounded-2xl p-6 text-center cursor-pointer transition-all duration-300 transform ${
                        hoveredDoc === idx
                          ? "border-transparent bg-gradient-to-br from-cyan-500 to-blue-500 shadow-2xl scale-105"
                          : "border-white/20 hover:border-white/40 bg-white/5"
                      }`}
                    >
                      <input
                        type="file"
                        className="hidden"
                        accept={doc.accept}
                        onChange={(e) => handleFileChange(e, doc.key)}
                      />
                      <div
                        className={`transition-all duration-300 ${hoveredDoc === idx ? "text-white" : "text-gray-400"}`}
                      >
                        <doc.icon className="mx-auto mb-3 w-10 h-10" />
                      </div>
                      <p
                        className={`text-sm font-medium transition-all duration-300 ${hoveredDoc === idx ? "text-white" : "text-gray-300"}`}
                      >
                        {doc.name}
                      </p>
                      {formData[doc.key] && (
                        <p
                          className={`text-xs mt-2 truncate px-2 ${hoveredDoc === idx ? "text-white/80" : "text-cyan-400"}`}
                        >
                          ✓ {formData[doc.key].name}
                        </p>
                      )}
                      <Upload
                        className={`absolute bottom-4 right-4 w-5 h-5 transition-all duration-300 ${hoveredDoc === idx ? "text-white opacity-100" : "opacity-0"}`}
                      />
                    </label>
                  ))}
                </div>
                <p className="text-xs text-gray-500 mt-4 text-center">
                  Accepted formats: PDF, JPG, PNG, DOC. Max size: 5MB per file
                </p>
              </div>

              {/* ADDITIONAL QUESTIONS SECTION */}
              <div className="relative group bg-gradient-to-br from-white/5 to-white/3 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10">
                <div className="absolute -inset-px bg-gradient-to-r from-gray-500/0 via-gray-500/0 to-gray-600/0 group-hover:from-gray-500/10 group-hover:via-gray-500/10 group-hover:to-gray-600/10 rounded-2xl blur-xl transition-all duration-700 -z-10"></div>

                <div className="flex items-center gap-4 mb-8 pb-3 border-b border-white/10">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-500 to-gray-600 rounded-xl blur-lg opacity-50 animate-pulse"></div>
                    <div className="relative p-3 bg-gradient-to-r from-gray-600 to-gray-700 rounded-xl shadow-lg">
                      <Send className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                      Additional Information
                    </h3>
                    <p className="text-gray-400 text-sm mt-1">
                      Help us understand your needs
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  {/* Announcements */}
                  <div>
                    <h4 className="font-semibold text-gray-300 mb-3 text-lg">
                      Do you plan on making any announcements at MedConf?
                    </h4>
                    <div className="flex flex-wrap gap-6">
                      {["yes", "no", "maybe"].map((value) => (
                        <label
                          key={value}
                          className="flex items-center gap-2 cursor-pointer group/radio"
                        >
                          <div className="relative">
                            <input
                              type="radio"
                              name="announcement"
                              value={value}
                              onChange={(e) => setAnnouncement(e.target.value)}
                              className="w-4 h-4 text-blue-500 bg-white/10 border-white/20 peer hidden"
                            />
                            <div className="w-5 h-5 rounded-full border-2 border-gray-400 group-hover/radio:border-blue-400 transition-all duration-300 peer-checked:border-blue-500 peer-checked:bg-blue-500 flex items-center justify-center">
                              <div className="w-2 h-2 rounded-full bg-white opacity-0 peer-checked:opacity-100 transition-opacity duration-300"></div>
                            </div>
                          </div>
                          <span className="text-gray-300 capitalize group-hover/radio:text-white transition-colors duration-300">
                            {value}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Sponsorship */}
                  <div>
                    <h4 className="font-semibold text-gray-300 mb-3 text-lg">
                      Are you interested in additional sponsorship
                      opportunities?
                    </h4>
                    <div className="flex flex-wrap gap-6">
                      {[
                        { value: "yes", label: "Yes, please contact me" },
                        { value: "no", label: "Not at this time" },
                        { value: "maybe", label: "Maybe, send me information" },
                      ].map((option) => (
                        <label
                          key={option.value}
                          className="flex items-center gap-2 cursor-pointer group/radio"
                        >
                          <div className="relative">
                            <input
                              type="radio"
                              name="sponsorship"
                              value={option.value}
                              onChange={(e) => setSponsorship(e.target.value)}
                              className="w-4 h-4 text-blue-500 bg-white/10 border-white/20 peer hidden"
                            />
                            <div className="w-5 h-5 rounded-full border-2 border-gray-400 group-hover/radio:border-blue-400 transition-all duration-300 peer-checked:border-blue-500 peer-checked:bg-blue-500 flex items-center justify-center">
                              <div className="w-2 h-2 rounded-full bg-white opacity-0 peer-checked:opacity-100 transition-opacity duration-300"></div>
                            </div>
                          </div>
                          <span className="text-gray-300 group-hover/radio:text-white transition-colors duration-300">
                            {option.label}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Information Request */}
                  <div>
                    <h4 className="font-semibold text-gray-300 mb-3 text-lg">
                      What information would you like to receive?
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {[
                        "Exhibitor Prospectus",
                        "Floor Plan",
                        "Sponsorship Package",
                        "Visitor Demographics",
                        "Previous Event Report",
                        "Custom Quote",
                      ].map((item, i) => (
                        <label
                          key={i}
                          className="flex items-center gap-2 cursor-pointer group/checkbox"
                        >
                          <div className="relative">
                            <input
                              type="checkbox"
                              value={item}
                              onChange={() => handleInfoRequestChange(item)}
                              className="w-4 h-4 text-blue-500 rounded bg-white/10 border-white/20 peer hidden"
                            />
                            <div className="w-5 h-5 rounded border-2 border-gray-400 group-hover/checkbox:border-blue-400 transition-all duration-300 peer-checked:bg-blue-500 peer-checked:border-blue-500 flex items-center justify-center">
                              <CheckCircle className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity duration-300" />
                            </div>
                          </div>
                          <span className="text-sm text-gray-300 group-hover/checkbox:text-white transition-colors duration-300">
                            {item}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Organizer Communication */}
                  <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                    <p className="text-sm text-gray-300 mb-4 font-medium">
                      I would like to receive tailored information, including
                      exhibition updates, exclusive networking opportunities and
                      access to offers from MedConf and Tahaluf.
                    </p>
                    <div className="flex flex-wrap gap-6 text-sm">
                      {["Email", "Phone", "SMS"].map((type) => (
                        <div key={type} className="flex items-center gap-3">
                          <span className="text-gray-400 font-medium w-12">
                            {type}:
                          </span>
                          {["yes", "no"].map((option) => (
                            <label
                              key={option}
                              className="flex items-center gap-1 cursor-pointer group/radio"
                            >
                              <div className="relative">
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
                                  className="w-3.5 h-3.5 text-blue-500 bg-white/10 border-white/20 peer hidden"
                                />
                                <div className="w-4 h-4 rounded-full border-2 border-gray-400 group-hover/radio:border-blue-400 transition-all duration-300 peer-checked:border-blue-500 peer-checked:bg-blue-500 flex items-center justify-center">
                                  <div className="w-1.5 h-1.5 rounded-full bg-white opacity-0 peer-checked:opacity-100 transition-opacity duration-300"></div>
                                </div>
                              </div>
                              <span className="text-gray-400 text-sm capitalize group-hover/radio:text-white transition-colors duration-300">
                                {option}
                              </span>
                            </label>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Exhibitor Communication */}
                  <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                    <p className="text-sm text-gray-300 mb-4 font-medium">
                      I would like to receive information about networking
                      opportunities and exhibitor benefits.
                    </p>
                    <div className="flex flex-wrap gap-6 text-sm">
                      {["Email", "Phone", "SMS"].map((type) => (
                        <div key={type} className="flex items-center gap-3">
                          <span className="text-gray-400 font-medium w-12">
                            {type}:
                          </span>
                          {["yes", "no"].map((option) => (
                            <label
                              key={option}
                              className="flex items-center gap-1 cursor-pointer group/radio"
                            >
                              <div className="relative">
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
                                  className="w-3.5 h-3.5 text-blue-500 bg-white/10 border-white/20 peer hidden"
                                />
                                <div className="w-4 h-4 rounded-full border-2 border-gray-400 group-hover/radio:border-blue-400 transition-all duration-300 peer-checked:border-blue-500 peer-checked:bg-blue-500 flex items-center justify-center">
                                  <div className="w-1.5 h-1.5 rounded-full bg-white opacity-0 peer-checked:opacity-100 transition-opacity duration-300"></div>
                                </div>
                              </div>
                              <span className="text-gray-400 text-sm capitalize group-hover/radio:text-white transition-colors duration-300">
                                {option}
                              </span>
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
                  className="relative group/btn w-full overflow-hidden transition-all duration-500"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 rounded-2xl animate-gradient-x"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur-xl opacity-0 group-hover/btn:opacity-60 transition-opacity duration-500"></div>
                  <div className="relative bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-10 py-4 rounded-2xl text-lg font-bold hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-3 w-full">
                    <Store className="w-5 h-5" />
                    <span>Register as Exhibitor</span>
                    <CheckCircle className="w-5 h-5 group-hover/btn:scale-125 transition-transform duration-300" />
                    <div className="absolute inset-0 rounded-2xl bg-white opacity-0 group-hover/btn:opacity-20 transition-opacity duration-300"></div>
                  </div>
                  <div className="absolute inset-0 rounded-2xl overflow-hidden">
                    <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                  </div>
                </button>

                <div className="flex items-center justify-center gap-4 mt-6">
                  <p className="text-xs text-gray-500 text-center">
                    By submitting, you agree to our Terms of Service and Privacy
                    Policy
                  </p>
                </div>
              </div>
            </form>

            {/* Footer */}
            <div className="relative text-center py-6 border-t border-white/10 bg-gradient-to-r from-blue-600/5 via-cyan-500/5 to-blue-600/5">
              <p className="text-gray-400 text-sm">
                Already have an account?{" "}
                <Link
                  href="/Forms/Login"
                  className="text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text font-semibold hover:from-blue-300 hover:to-cyan-200 transition-all duration-300"
                >
                  Sign in here
                </Link>
              </p>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes float {
            0% {
              transform: translateY(0px) translateX(0px) rotate(0deg);
            }
            25% {
              transform: translateY(-70px) translateX(50px) rotate(6deg);
            }
            50% {
              transform: translateY(-110px) translateX(0px) rotate(0deg);
            }
            75% {
              transform: translateY(-35px) translateX(-50px) rotate(-6deg);
            }
            100% {
              transform: translateY(0px) translateX(0px) rotate(0deg);
            }
          }
        `}</style>
      </div>
    </>
  );
}
