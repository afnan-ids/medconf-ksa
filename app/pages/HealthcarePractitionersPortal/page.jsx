"use client";
import { Button } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import {
  Dashboard as DashboardIcon,
  Person as PersonIcon,
  Map as MapIcon,
  CalendarMonth as CalendarIcon,
  CheckCircle as CheckCircleIcon,
  Inventory as InventoryIcon,
} from "@mui/icons-material";
import ScoreboardIcon from '@mui/icons-material/Scoreboard';
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import { ChevronDown } from "lucide-react";
import BreadCrum from "../../Components/BreadCrum";

const HealthcarePortal = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isFormDirty, setIsFormDirty] = useState(false);

  const tabs = [
    { id: "dashboard", label: "Dashboard", icon: DashboardIcon },
    { id: "register", label: "Register", icon: PersonIcon },
    { id: "license-status", label: "License-Status", icon: MapIcon },
    { id: "cpd-points", label: "CPD Points", icon: CalendarIcon },
  ];
  // dashboard cards data
  const statsData = [
    {
      title: "License Status",
      value: "Verified",
      icon: CheckCircleIcon,
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "CPD Points",
      value: "45 / 50",
      icon: ScoreboardIcon,
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Event Access",
      value: "Full Access",
      icon: VpnKeyIcon,
      color: "from-blue-500 to-blue-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section*/}
      <div className="">
        <BreadCrum
          title="Healthcare Practitioners Portal"
          backgroundImage="/Images/Home/Bread-crum-1.avif"
          path={[{label:"Portals",href:'/app/pages/NavBar-Links/NavPortals'}, {label:"Healthcare Practitioners Portal"}]}
        />
      </div>

      {/* Tabs Section */}
      <div className="sticky top-0 sm:top-4 z-10 max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 -mt-6 sm:-mt-8 mb-4 sm:mb-6 md:mb-8">
        <div className="bg-white/80 backdrop-blur-xl rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl p-1.5 sm:p-2 flex flex-wrap gap-1 sm:gap-2 justify-between border border-white/20">
          {tabs.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`flex items-center gap-1 sm:gap-2 px-2 sm:px-3 md:px-4 lg:px-5 py-2 sm:py-2.5 md:py-3 rounded-lg sm:rounded-xl font-medium transition-all duration-300 flex-1 sm:flex-auto justify-center ${
                activeTab === id
                  ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-md sm:shadow-lg shadow-blue-500/25 scale-95 sm:scale-90"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900 hover:cursor-pointer"
              }`}
            >
              <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-xs sm:text-sm md:text-base hidden xs:inline">{label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 pb-8 sm:pb-12 md:pb-16">
        {/* Dashboard Tab */}
        {activeTab === "dashboard" && (
          <div className="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8 animate-fadeIn">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-15">
              {statsData.map((card, i) => {
                const Icon = card.icon;
                return (
                  <div
                    key={i}
                    className="group relative bg-white rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
                  >
                    <div
                      className={`absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br ${card.color} opacity-10 rounded-bl-full transition-all group-hover:opacity-20`}
                    ></div>
                    <div className="relative p-3 sm:p-4 md:p-5 lg:p-6">
                      <div className="flex items-center justify-between mb-1 sm:mb-2 md:mb-3">
                        <p className="text-xs sm:text-sm text-gray-500 font-medium">
                          {card.title}
                        </p>
                        <Icon
                          className={`w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-${card.color.split("-")[1]}-500`}
                        />
                      </div>
                      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-800">
                        {card.value}
                      </h2>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Register Tab */}
        {activeTab === "register" && (
          <div className="max-w-7xl mx-auto animate-fadeIn">
            <div className="bg-white rounded-xl sm:rounded-2xl md:rounded-3xl shadow-lg sm:shadow-xl overflow-hidden">
              {/* Profile Header */}
              <div className="bg-gradient-to-br from-blue-900 via-blue-600 to-purple-900 px-4 sm:px-5 md:px-6 lg:px-8 py-4 sm:py-5 md:py-6">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
                  Professional Registration
                </h2>
                <p className="text-blue-100 text-xs sm:text-sm mt-0.5 sm:mt-1">
                  Add your Registration information
                </p>
              </div>

              <form className="p-4 sm:p-5 md:p-6 lg:p-8 space-y-4 sm:space-y-5 md:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
                  <div className="space-y-1 sm:space-y-2">
                    <label className="block text-xs sm:text-sm font-medium text-gray-700">
                      Title
                    </label>
                    <select className="w-full border border-gray-300 rounded-lg sm:rounded-xl p-2 sm:p-2.5 md:p-3 text-xs sm:text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all">
                      <option value="Title" selected>Title.</option>
                      <option value="Mr">Mr.</option>
                      <option value="Ms">Ms.</option>
                      <option value="Dr">Dr.</option>
                      <option value="Prof">Prof.</option>
                    </select>
                  </div>

                  <div className="space-y-1 sm:space-y-2">
                    <label className="block text-xs sm:text-sm font-medium text-gray-700">
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your First Name"
                      className="w-full border border-gray-300 rounded-lg sm:rounded-xl p-2 sm:p-2.5 md:p-3 text-xs sm:text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-1 sm:space-y-2">
                    <label className="block text-xs sm:text-sm font-medium text-gray-700">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Your Last Name"
                      className="w-full border border-gray-300 rounded-lg sm:rounded-xl p-2 sm:p-2.5 md:p-3 text-xs sm:text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-1 sm:space-y-2">
                    <label className="block text-xs sm:text-sm font-medium text-gray-700">
                      Email Address
                    </label>
                    <input
                      type="email"
                      defaultValue="contact@pharma.com"
                      className="w-full border border-gray-300 rounded-lg sm:rounded-xl p-2 sm:p-2.5 md:p-3 text-xs sm:text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-1 sm:space-y-2">
                    <label className="block text-xs sm:text-sm font-medium text-gray-700">
                      Mobile
                    </label>
                    <input
                      type="tel"
                      placeholder="Enter your Mobile Number"
                      className="w-full border border-gray-300 rounded-lg sm:rounded-xl p-2 sm:p-2.5 md:p-3 text-xs sm:text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-1 sm:space-y-2">
                    <label className="block text-xs sm:text-sm font-medium text-gray-700">
                      Specialty
                    </label>
                    <select className="w-full border border-gray-300 rounded-lg sm:rounded-xl p-2 sm:p-2.5 md:p-3 text-xs sm:text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all">
                      <option value="cardiology">Cardiology</option>
                      <option value="neurology">Neurology</option>
                      <option value="general medicine">General Medicine</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="space-y-1 sm:space-y-2">
                    <label className="block text-xs sm:text-sm font-medium text-gray-700">
                      SCFHS License Number
                    </label>
                    <input
                      type="tel"
                      placeholder="Enter your SCFHS License Number"
                      className="w-full border border-gray-300 rounded-lg sm:rounded-xl p-2 sm:p-2.5 md:p-3 text-xs sm:text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-1 sm:space-y-2">
                    <label className="block text-xs sm:text-sm font-medium text-gray-700">
                      License Expiry Date
                    </label>
                    <input
                      className="w-full border border-gray-300 rounded-lg sm:rounded-xl p-2 sm:p-2.5 md:p-3 text-xs sm:text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      type="date"
                    />
                  </div>
                </div>

                <div className="space-y-1 sm:space-y-2">
                  <label className="block text-xs sm:text-sm font-medium text-gray-700">
                    Upload Image
                  </label>
                  <div className="flex flex-col xs:flex-row items-start xs:items-center gap-3 sm:gap-4">
                    <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-xl sm:text-2xl font-bold text-gray-400">!</span>
                    </div>
                    <div className="flex-1 w-full xs:w-auto">
                      <input
                        type="file"
                        accept="image/*"
                        className="w-full text-xs sm:text-sm text-gray-500 file:mr-2 sm:file:mr-4 file:py-1 sm:file:py-2 file:px-2 sm:file:px-4 file:rounded-full file:border-0 file:text-xs sm:file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-2 p-3 sm:p-4 bg-gray-50 rounded-lg sm:rounded-xl">
                  <input
                    type="checkbox"
                    id="pdpl"
                    className="rounded text-blue-600 mt-0.5 flex-shrink-0"
                    defaultChecked
                  />
                  <label htmlFor="pdpl" className="text-xs sm:text-sm text-gray-600">
                    I consent to SCFHS verification and data processing per PDPL
                  </label>
                </div>

                <div className="flex gap-3 sm:gap-4">
                  <button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-[1.02] shadow-md sm:shadow-lg shadow-blue-500/25"
                  >
                    Submit for Automated Verification
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* license-status Tab */}
        {activeTab === "license-status" && (
          <div className="animate-fadeIn">
            <div className="bg-white rounded-xl sm:rounded-2xl md:rounded-3xl shadow-lg sm:shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-blue-900 via-blue-600 to-purple-900 px-4 sm:px-5 md:px-6 lg:px-8 py-4 sm:py-5 md:py-6">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
                  License Verification Status
                </h2>
              </div>

              <div className="p-4 sm:p-5 md:p-6 lg:p-8 xl:p-10 bg-gradient-to-b from-white to-gray-50">
                {/* Ticket Card */}
                <div className="relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 xl:p-10 border border-gray-200 shadow-md mb-4 sm:mb-5 md:mb-6 lg:mb-8">
                  {/* Status Badge Top Right */}
                  <div className="absolute top-3 sm:top-4 md:top-5 lg:top-6 right-3 sm:right-4 md:right-5 lg:right-6 bg-green-100 text-green-700 text-[10px] sm:text-xs font-semibold px-2 sm:px-3 md:px-4 py-0.5 sm:py-1 rounded-full">
                    Active
                  </div>

                  {/* Header */}
                  <div className="flex flex-col xs:flex-row items-start xs:items-center gap-3 sm:gap-4 mb-4 sm:mb-5 md:mb-6 lg:mb-8">
                    <div className="bg-green-500/10 p-2 sm:p-3 md:p-4 rounded-xl sm:rounded-2xl">
                      <CheckCircleIcon className="text-green-600 text-2xl sm:text-3xl md:text-4xl" />
                    </div>

                    <div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
                        License Verified
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-500 mt-0.5 sm:mt-1">
                        The license has been successfully validated against official records.
                      </p>
                    </div>
                  </div>

                  {/* Information Grid */}
                  <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
                    <div className="bg-gray-50 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5">
                      <p className="text-[10px] sm:text-xs uppercase tracking-wide text-gray-500 mb-1 sm:mb-2">
                        Status
                      </p>
                      <p className="text-sm sm:text-base md:text-lg font-semibold text-green-600">
                        Active
                      </p>
                    </div>

                    <div className="bg-gray-50 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5">
                      <p className="text-[10px] sm:text-xs uppercase tracking-wide text-gray-500 mb-1 sm:mb-2">
                        Valid Until
                      </p>
                      <p className="text-sm sm:text-base md:text-lg font-semibold text-gray-900">
                        December 31, 2027
                      </p>
                    </div>

                    <div className="bg-gray-50 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 xs:col-span-2 md:col-span-1">
                      <p className="text-[10px] sm:text-xs uppercase tracking-wide text-gray-500 mb-1 sm:mb-2">
                        Verified Source
                      </p>
                      <p className="text-sm sm:text-base md:text-lg font-semibold text-gray-900">
                        SCFHS Official API
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Live Workshop Tab */}
        {activeTab === "cpd-points" && (
          <div className="max-w-7xl mx-auto animate-fadeIn">
            <div className="bg-white rounded-xl sm:rounded-2xl md:rounded-3xl shadow-lg sm:shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-blue-900 via-blue-600 to-purple-900 px-4 sm:px-5 md:px-6 lg:px-8 py-4 sm:py-5 md:py-6">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
                  Continuing Professional Development (CPD)
                </h2>
                <p className="text-green-100 text-xs sm:text-sm mt-0.5 sm:mt-1">
                  Track your annual CPD progress and completed activities
                </p>
              </div>

              <div className="max-w-5xl mx-auto py-4 sm:py-5 md:py-6 lg:py-8 xl:py-10 px-4 sm:px-5 md:px-6 lg:px-8">
                {/* Main Card */}
                <div className="bg-white rounded-xl sm:rounded-2xl md:rounded-3xl shadow-lg sm:shadow-xl border border-gray-100 p-4 sm:p-5 md:p-6 lg:p-8 xl:p-10">
                  {/* Progress Section */}
                  <div className="mb-4 sm:mb-5 md:mb-6 lg:mb-8 xl:mb-10">
                    <div className="flex flex-col xs:flex-row justify-between items-start xs:items-center gap-2 mb-2 sm:mb-3 md:mb-4">
                      <h4 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800">
                        2026 CPD Progress
                      </h4>
                      <span className="text-sm sm:text-base md:text-lg font-bold text-blue-600">
                        45 / 50 Points
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200 rounded-full h-3 sm:h-4 md:h-5 lg:h-6 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-blue-600 to-indigo-600 h-full flex items-center justify-center text-white text-[10px] sm:text-xs md:text-sm font-semibold transition-all duration-500"
                        style={{ width: "90%" }}
                      >
                        90%
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-gray-500 mt-2 sm:mt-3">
                      You are 5 points away from completing your annual CPD requirement.
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-gray-200 my-4 sm:my-5 md:my-6 lg:my-8"></div>

                  {/* Completed Activities */}
                  <div>
                    <h5 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 mb-3 sm:mb-4 md:mb-5 lg:mb-6">
                      Completed Activities
                    </h5>

                    <div className="space-y-2 sm:space-y-3 md:space-y-4">
                      {/* Activity 1 */}
                      <div className="flex flex-col xs:flex-row justify-between items-start xs:items-center gap-2 bg-gray-50 p-3 sm:p-4 md:p-5 rounded-lg sm:rounded-xl border border-gray-100 hover:shadow-md transition">
                        <span className="text-xs sm:text-sm md:text-base font-medium text-gray-800">
                          Cardiology Workshop
                        </span>
                        <span className="bg-blue-100 text-blue-700 text-[10px] sm:text-xs font-semibold px-2 sm:px-3 md:px-4 py-0.5 sm:py-1 rounded-full">
                          15 Points
                        </span>
                      </div>

                      {/* Activity 2 */}
                      <div className="flex flex-col xs:flex-row justify-between items-start xs:items-center gap-2 bg-gray-50 p-3 sm:p-4 md:p-5 rounded-lg sm:rounded-xl border border-gray-100 hover:shadow-md transition">
                        <span className="text-xs sm:text-sm md:text-base font-medium text-gray-800">
                          Global Health Exhibition Attendance
                        </span>
                        <span className="bg-blue-100 text-blue-700 text-[10px] sm:text-xs font-semibold px-2 sm:px-3 md:px-4 py-0.5 sm:py-1 rounded-full">
                          30 Points
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* Add global styles for animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default HealthcarePortal;