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
            className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden"
            id="form"
          >
            {/* Form Header */}
            <div className="px-6 py-5 border-b border-white/10 bg-gradient-to-r from-blue-600/5 to-cyan-500/5">
              <div className="flex items-center justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 mb-2">
                    <Sparkles className="w-3 h-3 text-blue-400" />
                    <span className="text-xs text-white/80">
                      MedConf KSA 2026
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-white">
                    Exhibitor Registration
                  </h2>
                  <p className="text-gray-400 text-xs mt-0.5">
                    Showcase your innovation to industry leaders
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1 px-2 py-1 bg-white/5 rounded-full">
                    <Lock className="w-3 h-3 text-cyan-400" />
                    <span className="text-xs text-gray-400">Secure</span>
                  </div>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-5 space-y-5">
              {/* ACCOUNT SECTION */}
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <div className="flex items-center gap-3 mb-4 pb-2 border-b border-white/10">
                  <div className="p-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg">
                    <Lock className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white">
                      Account Information
                    </h3>
                    <p className="text-gray-400 text-xs">
                      Create your secure account
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-gray-300 text-xs mb-1 block">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-2 text-gray-500 w-4 h-4" />
                      <input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`${inputStyle} pl-9`}
                        placeholder="company@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-gray-300 text-xs mb-1 block">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-2 text-gray-500 w-4 h-4" />
                      <input
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={`${inputStyle} pl-9`}
                        placeholder="+966 XX XXX XXXX"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-gray-300 text-xs mb-1 block">
                      Password *
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-2 text-gray-500 w-4 h-4" />
                      <input
                        name="password"
                        type={showPassword ? "text" : "password"}
                        value={formData.password}
                        onChange={handleInputChange}
                        className={`${inputStyle} pl-9 pr-9`}
                        placeholder="Create a strong password"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-2 text-gray-500 hover:text-blue-400"
                      >
                        {showPassword ? (
                          <EyeOff className="w-4 h-4" />
                        ) : (
                          <Eye className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="text-gray-300 text-xs mb-1 block">
                      Confirm Password *
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-2 text-gray-500 w-4 h-4" />
                      <input
                        name="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        className={`${inputStyle} pl-9 pr-9`}
                        placeholder="Confirm your password"
                        required
                      />
                      <button
                        type="button"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                        className="absolute right-3 top-2 text-gray-500 hover:text-blue-400"
                      >
                        {showConfirmPassword ? (
                          <EyeOff className="w-4 h-4" />
                        ) : (
                          <Eye className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* COMPANY SECTION */}
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <div className="flex items-center gap-3 mb-4 pb-2 border-b border-white/10">
                  <div className="p-2 bg-gradient-to-r from-emerald-600 to-teal-500 rounded-lg">
                    <Building2 className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white">
                      Company Information
                    </h3>
                    <p className="text-gray-400 text-xs">
                      Tell us about your organization
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-gray-300 text-xs mb-1 block">
                      Company Name *
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
                  <div>
                    <label className="text-gray-300 text-xs mb-1 block">
                      Company Website
                    </label>
                    <div className="relative">
                      <Globe className="absolute left-3 top-2 text-gray-500 w-4 h-4" />
                      <input
                        name="companyWebsite"
                        value={formData.companyWebsite}
                        onChange={handleInputChange}
                        className={`${inputStyle} pl-9`}
                        placeholder="www.yourcompany.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-gray-300 text-xs mb-1 block">
                      Country *
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

                  <div>
                    <label className="text-gray-300 text-xs mb-1 block">
                      City *
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-2 text-gray-500 w-4 h-4" />
                      <input
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className={`${inputStyle} pl-9`}
                        placeholder="e.g., Riyadh"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* CONTACT PERSON SECTION */}
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <div className="flex items-center gap-3 mb-4 pb-2 border-b border-white/10">
                  <div className="p-2 bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg">
                    <User className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white">
                      Contact Person Information
                    </h3>
                    <p className="text-gray-400 text-xs">
                      Who should we contact?
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-gray-300 text-xs mb-1 block">
                      First Name *
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
                  <div>
                    <label className="text-gray-300 text-xs mb-1 block">
                      Last Name *
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
                  <div>
                    <label className="text-gray-300 text-xs mb-1 block">
                      Job Title *
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
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <div className="flex items-center gap-3 mb-4 pb-2 border-b border-white/10">
                  <div className="p-2 bg-gradient-to-r from-orange-600 to-red-500 rounded-lg">
                    <Store className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white">
                      Exhibition Requirements
                    </h3>
                    <p className="text-gray-400 text-xs">
                      Tell us your booth preferences
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-gray-300 text-xs mb-1 block">
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

                  <div>
                    <label className="text-gray-300 text-xs mb-1 block">
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

                  <div>
                    <label className="text-gray-300 text-xs mb-1 block">
                      Estimated Budget (USD)
                    </label>
                    <select
                      name="estimatedBudget"
                      value={formData.estimatedBudget}
                      onChange={handleInputChange}
                      className={selectStyle}
                    >
                      <option value="" className="bg-gray-800">
                        Select budget range
                      </option>
                      <option className="bg-gray-800">$5,000 - $10,000</option>
                      <option className="bg-gray-800">$10,000 - $25,000</option>
                      <option className="bg-gray-800">$25,000 - $50,000</option>
                      <option className="bg-gray-800">
                        $50,000 - $100,000
                      </option>
                      <option className="bg-gray-800">$100,000+</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-gray-300 text-xs mb-1 block">
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

                  <div>
                    <label className="text-gray-300 text-xs mb-1 block">
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
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <div className="flex items-center gap-3 mb-4 pb-2 border-b border-white/10">
                  <div className="p-2 bg-gradient-to-r from-cyan-600 to-blue-500 rounded-lg">
                    <FileText className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white">
                      Upload Documents
                    </h3>
                    <p className="text-gray-400 text-xs">
                      Supporting documents for your application
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
                  {[
                    {
                      name: "Company Registration",
                      icon: Building2,
                      key: "companyRegistration",
                      color: "from-blue-500 to-cyan-500",
                      accept: ".pdf,.jpg,.png",
                    },
                    {
                      name: "Tax Certificate",
                      icon: FileText,
                      key: "taxCertificate",
                      color: "from-emerald-500 to-teal-500",
                      accept: ".pdf,.jpg,.png",
                    },
                    {
                      name: "Company Logo",
                      icon: Camera,
                      key: "companyLogo",
                      color: "from-purple-500 to-pink-500",
                      accept: "image/*",
                    },
                    {
                      name: "Product Brochure",
                      icon: FileText,
                      key: "productBrochure",
                      color: "from-orange-500 to-red-500",
                      accept: ".pdf,.doc,.docx",
                    },
                  ].map((doc, idx) => (
                    <label
                      key={idx}
                      onMouseEnter={() => setHoveredDoc(idx)}
                      onMouseLeave={() => setHoveredDoc(null)}
                      className={`relative border-2 border-dashed rounded-xl p-3 text-center cursor-pointer transition-all duration-200 ${
                        hoveredDoc === idx
                          ? `border-blue-500 bg-blue-500/10`
                          : "border-white/20 hover:border-white/40"
                      }`}
                    >
                      <input
                        type="file"
                        className="hidden"
                        accept={doc.accept}
                        onChange={(e) => handleFileChange(e, doc.key)}
                      />
                      <doc.icon
                        className={`mx-auto mb-1 w-6 h-6 ${hoveredDoc === idx ? "text-blue-400" : "text-gray-500"}`}
                      />
                      <p
                        className={`text-xs font-medium ${hoveredDoc === idx ? "text-blue-300" : "text-gray-400"}`}
                      >
                        {doc.name}
                      </p>
                      {formData[doc.key] && (
                        <p className="text-[10px] mt-1 text-cyan-400 truncate">
                          ✓ {formData[doc.key].name}
                        </p>
                      )}
                    </label>
                  ))}
                </div>
                <p className="text-[10px] text-gray-500 mt-3 text-center">
                  Accepted: PDF, JPG, PNG, DOC. Max 5MB per file
                </p>
              </div>

              {/* ADDITIONAL QUESTIONS SECTION */}
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <div className="flex items-center gap-3 mb-4 pb-2 border-b border-white/10">
                  <div className="p-2 bg-gradient-to-r from-gray-600 to-gray-700 rounded-lg">
                    <Send className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white">
                      Additional Information
                    </h3>
                    <p className="text-gray-400 text-xs">
                      Help us understand your needs
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {/* Announcements */}
                  <div>
                    <p className="text-gray-300 text-sm mb-2">
                      Do you plan on making any announcements at MedConf?
                    </p>
                    <div className="flex gap-4">
                      {["yes", "no", "maybe"].map((value) => (
                        <label
                          key={value}
                          className="flex items-center gap-1.5 cursor-pointer"
                        >
                          <input
                            type="radio"
                            name="announcement"
                            value={value}
                            onChange={(e) => setAnnouncement(e.target.value)}
                            className="w-3.5 h-3.5 text-blue-500"
                          />
                          <span className="text-gray-400 text-sm capitalize">
                            {value}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Sponsorship */}
                  <div>
                    <p className="text-gray-300 text-sm mb-2">
                      Are you interested in additional sponsorship
                      opportunities?
                    </p>
                    <div className="flex flex-wrap gap-4">
                      {[
                        { value: "yes", label: "Yes, contact me" },
                        { value: "no", label: "Not at this time" },
                        { value: "maybe", label: "Maybe, send info" },
                      ].map((option) => (
                        <label
                          key={option.value}
                          className="flex items-center gap-1.5 cursor-pointer"
                        >
                          <input
                            type="radio"
                            name="sponsorship"
                            value={option.value}
                            onChange={(e) => setSponsorship(e.target.value)}
                            className="w-3.5 h-3.5 text-blue-500"
                          />
                          <span className="text-gray-400 text-sm">
                            {option.label}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Information Request */}
                  <div>
                    <p className="text-gray-300 text-sm mb-2">
                      What information would you like to receive?
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {[
                        "Exhibitor Prospectus",
                        "Floor Plan",
                        "Sponsorship Package",
                        "Visitor Demographics",
                        "Previous Event Report",
                        "Custom Quote",
                      ].map((item) => (
                        <label
                          key={item}
                          className="flex items-center gap-1.5 cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            value={item}
                            onChange={() => handleInfoRequestChange(item)}
                            className="w-3.5 h-3.5 text-blue-500 rounded"
                          />
                          <span className="text-gray-400 text-xs">{item}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Organizer Communication */}
                  <div className="bg-white/5 rounded-lg p-3">
                    <p className="text-gray-400 text-xs mb-2">
                      Receive event updates, networking opportunities and offers
                      from MedConf.
                    </p>
                    <div className="flex flex-wrap gap-3 text-xs">
                      {["Email", "Phone", "SMS"].map((type) => (
                        <div key={type} className="flex items-center gap-1.5">
                          <span className="text-gray-400 w-10">{type}:</span>
                          {["yes", "no"].map((option) => (
                            <label
                              key={option}
                              className="flex items-center gap-0.5 cursor-pointer"
                            >
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
                                className="w-3 h-3 text-blue-500"
                              />
                              <span className="text-gray-400 text-xs capitalize">
                                {option}
                              </span>
                            </label>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Exhibitor Communication */}
                  <div className="bg-white/5 rounded-lg p-3">
                    <p className="text-gray-400 text-xs mb-2">
                      Receive information about networking opportunities and
                      exhibitor benefits.
                    </p>
                    <div className="flex flex-wrap gap-3 text-xs">
                      {["Email", "Phone", "SMS"].map((type) => (
                        <div key={type} className="flex items-center gap-1.5">
                          <span className="text-gray-400 w-10">{type}:</span>
                          {["yes", "no"].map((option) => (
                            <label
                              key={option}
                              className="flex items-center gap-0.5 cursor-pointer"
                            >
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
                                className="w-3 h-3 text-blue-500"
                              />
                              <span className="text-gray-400 text-xs capitalize">
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
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-3 rounded-xl font-semibold text-base hover:shadow-lg hover:shadow-blue-500/25 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Store className="w-4 h-4" />
                <span>Register as Exhibitor</span>
                <CheckCircle className="w-4 h-4" />
              </button>

              <p className="text-center text-gray-500 text-xs">
                By submitting, you agree to our Terms of Service and Privacy
                Policy
              </p>
            </form>

            {/* Footer */}
            <div className="text-center py-3 border-t border-white/10 bg-white/5">
              <p className="text-gray-400 text-sm">
                Already have an account?{" "}
                <Link
                  href="/Forms/Login"
                  className="text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text font-semibold"
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
