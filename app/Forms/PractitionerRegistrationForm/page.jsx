"use client";

import Link from "next/link";
import {
  ArrowLeft,
  User,
  Mail,
  Phone,
  Briefcase,
  MapPin,
  Calendar,
  Award,
  Stethoscope,
  Building2,
  Hash,
  Globe,
  Lock,
  Upload,
  CheckCircle,
  ArrowRight,
  Shield,
  Star,
  HeartPulse,
  GraduationCap,
  Clock,
  Users,
  FileText,
  BadgeCheck,
  Medal,
  Sparkles,
} from "lucide-react";
import BreadCrumb from "../../Components/BreadCrum";

export default function PractitionerRegisterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900">
      {/* Header */}
      <div className="">
      <BreadCrumb
        title="Practitioner Account Registeration"
        backgroundImage="/Images/Home/Bread-crum-1.avif"   
        path={[{ label: "Services", href: '/pages/NavBar-Links/NavServices' }, { label: "Register for Practitioner" }]}
      />
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Hero Section */}
        <div className="text-center mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-4">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-xs sm:text-sm font-medium text-gray-300">
              Join 5,000+ Healthcare Professionals
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
            Create Your
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
              {" "}
              Practitioner Account
            </span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
            Fill in your details below to register for conferences, workshops, and networking events.
            All fields marked with <span className="text-red-400">*</span> are required.
          </p>
        </div>

        {/* Main Form */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl overflow-hidden">
          
          {/* Form Header */}
          <div className="bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-teal-500/20 p-4 sm:p-6 border-b border-white/10">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Registration Form</h3>
                  <p className="text-xs text-gray-400">Complete all sections below</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <BadgeCheck className="w-5 h-5 text-blue-400" />
                <span className="text-xs text-gray-300">SCFHS Verified</span>
              </div>
            </div>
          </div>

          {/* Form Body */}
          <div className="p-4 sm:p-6 md:p-8">
            {/* Account Information */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <Lock className="w-4 h-4 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">Account Information</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <input
                      type="email"
                      placeholder="doctor@example.com"
                      className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Confirm Email <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <input
                      type="email"
                      placeholder="Confirm your email"
                      className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Password <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <input
                      type="password"
                      placeholder="••••••••"
                      className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Confirm Password <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <input
                      type="password"
                      placeholder="••••••••"
                      className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                    />
                  </div>
                </div>
              </div>

            </div>

            {/* Personal Information */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                  <User className="w-4 h-4 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">Personal Information</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    First Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="John"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Last Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <input
                      type="tel"
                      placeholder="+966 50 123 4567"
                      className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Date of Birth <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <input
                      type="date"
                      className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Gender <span className="text-red-400">*</span>
                  </label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500/50">
                    <option value="" className="bg-slate-900">Select gender</option>
                    <option value="male" className="bg-slate-900">Male</option>
                    <option value="female" className="bg-slate-900">Female</option>
                    <option value="other" className="bg-slate-900">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Nationality <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <select className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500/50">
                      <option value="" className="bg-slate-900">Select nationality</option>
                      <option className="bg-slate-900">Saudi Arabian</option>
                      <option className="bg-slate-900">Emirati</option>
                      <option className="bg-slate-900">Egyptian</option>
                      <option className="bg-slate-900">Jordanian</option>
                      <option className="bg-slate-900">Lebanese</option>
                      <option className="bg-slate-900">Kuwaiti</option>
                      <option className="bg-slate-900">Qatari</option>
                      <option className="bg-slate-900">Bahraini</option>
                      <option className="bg-slate-900">Omani</option>
                      <option className="bg-slate-900">American</option>
                      <option className="bg-slate-900">British</option>
                      <option className="bg-slate-900">Other</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Professional Information */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                  <Briefcase className="w-4 h-4 text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">Professional Information</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Profession <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <Stethoscope className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <select className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500/50">
                      <option value="" className="bg-slate-900">Select profession</option>
                      <option className="bg-slate-900">Physician (MD/DO)</option>
                      <option className="bg-slate-900">Surgeon</option>
                      <option className="bg-slate-900">Dentist</option>
                      <option className="bg-slate-900">Pharmacist</option>
                      <option className="bg-slate-900">Registered Nurse</option>
                      <option className="bg-slate-900">Medical Researcher</option>
                      <option className="bg-slate-900">Healthcare Administrator</option>
                      <option className="bg-slate-900">Medical Student</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Specialization <span className="text-red-400">*</span>
                  </label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500/50">
                    <option value="" className="bg-slate-900">Select specialization</option>
                    <option className="bg-slate-900">Cardiology</option>
                    <option className="bg-slate-900">Dermatology</option>
                    <option className="bg-slate-900">Neurology</option>
                    <option className="bg-slate-900">Pediatrics</option>
                    <option className="bg-slate-900">Internal Medicine</option>
                    <option className="bg-slate-900">General Surgery</option>
                    <option className="bg-slate-900">Orthopedics</option>
                    <option className="bg-slate-900">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    License Number <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <Hash className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <input
                      type="text"
                      placeholder="SCFHS-123456"
                      className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    License Country <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <select className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500/50">
                      <option value="" className="bg-slate-900">Select country</option>
                      <option className="bg-slate-900">Saudi Arabia</option>
                      <option className="bg-slate-900">United Arab Emirates</option>
                      <option className="bg-slate-900">Kuwait</option>
                      <option className="bg-slate-900">Qatar</option>
                      <option className="bg-slate-900">Bahrain</option>
                      <option className="bg-slate-900">Oman</option>
                      <option className="bg-slate-900">Egypt</option>
                      <option className="bg-slate-900">Jordan</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Years of Experience <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="number"
                    placeholder="10"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Medical Council
                  </label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500/50">
                    <option value="" className="bg-slate-900">Select council</option>
                    <option className="bg-slate-900">SCFHS (Saudi Arabia)</option>
                    <option className="bg-slate-900">DHA (Dubai)</option>
                    <option className="bg-slate-900">HAAD (Abu Dhabi)</option>
                    <option className="bg-slate-900">MOH (UAE)</option>
                    <option className="bg-slate-900">GMC (UK)</option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Practice/Institution Name
                  </label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <input
                      type="text"
                      placeholder="City Hospital, Medical Center, etc."
                      className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Document Upload */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center">
                  <Upload className="w-4 h-4 text-amber-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">Document Upload</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Professional License <span className="text-red-400">*</span>
                  </label>
                  <div className="relative border-2 border-dashed border-white/10 rounded-xl p-6 text-center hover:border-blue-500/50 transition-colors group cursor-pointer">
                    <input type="file" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                    <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                    <p className="text-xs text-gray-400">Click to upload (PDF, JPG - Max 5MB)</p>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Government ID / Passport <span className="text-red-400">*</span>
                  </label>
                  <div className="relative border-2 border-dashed border-white/10 rounded-xl p-6 text-center hover:border-blue-500/50 transition-colors group cursor-pointer">
                    <input type="file" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                    <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                    <p className="text-xs text-gray-400">Click to upload (PDF, JPG - Max 5MB)</p>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Professional Photo (Optional)
                  </label>
                  <div className="relative border-2 border-dashed border-white/10 rounded-xl p-6 text-center hover:border-blue-500/50 transition-colors group cursor-pointer">
                    <input type="file" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                    <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                    <p className="text-xs text-gray-400">JPG, PNG (Max 2MB)</p>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    CV/Resume (Optional)
                  </label>
                  <div className="relative border-2 border-dashed border-white/10 rounded-xl p-6 text-center hover:border-blue-500/50 transition-colors group cursor-pointer">
                    <input type="file" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                    <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                    <p className="text-xs text-gray-400">PDF, DOC (Max 5MB)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 5: Terms & Submit */}
            <div className="mb-6">
              <div className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-xl p-4 sm:p-6">
                <div className="space-y-3">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" className="mt-1 w-4 h-4 bg-white/5 border border-white/20 rounded focus:ring-blue-500" />
                    <span className="text-sm text-gray-300">
                      I confirm that all information provided is accurate and complete. <span className="text-red-400">*</span>
                    </span>
                  </label>

                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" className="mt-1 w-4 h-4 bg-white/5 border border-white/20 rounded focus:ring-blue-500" />
                    <span className="text-sm text-gray-300">
                      I agree to the <a href="#" className="text-blue-400 hover:underline">Terms of Service</a> and <a href="#" className="text-blue-400 hover:underline">Privacy Policy</a>. <span className="text-red-400">*</span>
                    </span>
                  </label>

                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" className="mt-1 w-4 h-4 bg-white/5 border border-white/20 rounded focus:ring-blue-500" />
                    <span className="text-sm text-gray-300">
                      I would like to receive updates about conferences and events (optional)
                    </span>
                  </label>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-center pt-4">
              <p className="text-xs text-gray-500 order-2 sm:order-1">
                <span className="text-red-400">*</span> Required fields
              </p>
              
              <button className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:shadow-xl transition-all duration-300 text-white px-8 py-4 rounded-xl text-base font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 w-full sm:w-auto order-1 sm:order-2">
                Complete Registration
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-8 flex flex-wrap justify-center gap-6 items-center">
          <div className="flex items-center gap-2 text-gray-400">
            <Shield className="w-4 h-4 text-blue-400" />
            <span className="text-xs">256-bit Encryption</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <BadgeCheck className="w-4 h-4 text-green-400" />
            <span className="text-xs">SCFHS Verified</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <Users className="w-4 h-4 text-purple-400" />
            <span className="text-xs">5,000+ Members</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <Clock className="w-4 h-4 text-amber-400" />
            <span className="text-xs">24/7 Support</span>
          </div>
        </div>

        {/* Help Section */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            Need help? Contact our support team at{' '}
            <a href="mailto:support@healthcareevents.com" className="text-blue-400 hover:underline">
              support@healthcareevents.com
            </a>
          </p>
        </div>
      </div>

      
    </div>
  );
}