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
  Description as ContractIcon,
  Payment as PaymentIcon,
  Download as DownloadIcon,
  Edit as EditIcon,
  CheckCircle as CheckCircleIcon,
  TrendingUp as TrendingUpIcon,
  People as PeopleIcon,
  Inventory as InventoryIcon,
  AttachMoney as AttachMoneyIcon,
} from "@mui/icons-material";
import BreadCrumb from "../../Components/BreadCrum";

const ExhibitorSponsorPortal = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isFormDirty, setIsFormDirty] = useState(false);

  const tabs = [
    { id: "dashboard", label: "Dashboard", icon: DashboardIcon },
    { id: "profile", label: "Profile", icon: PersonIcon },
    { id: "floorplan", label: "Floor Plan", icon: MapIcon },
    { id: "booking", label: "Booking", icon: CalendarIcon },
    { id: "contract", label: "Contract", icon: ContractIcon },
    { id: "payment", label: "Payment", icon: PaymentIcon },
  ];

  const statsData = [
    {
      title: "Booked Booth",
      value: "A12",
      sub: "18m² Premium Corner",
      icon: InventoryIcon,
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Booking Status",
      value: "Confirmed",
      sub: "Ready for exhibition",
      icon: CheckCircleIcon,
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Total Cost",
      value: "SAR 85,000",
      sub: "Paid: SAR 42,500",
      icon: AttachMoneyIcon,
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Leads Collected",
      value: "245",
      sub: "+23 this week",
      icon: PeopleIcon,
      color: "from-blue-500 to-blue-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section with Parallax Effect */}
      <div className="">
        <BreadCrumb
          title="Exhibitor Dashboard"
          backgroundImage="/Images/Home/Bread-crum-1.avif"
          path={[
            { label: "Portals", href: "/pages/NavBar-Links/NavPortals" },
            { label: "Exhibitor Dashboard"},
          ]}
        />
      </div>

      {/* Tabs Section - Floating Design */}
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
            {/* Stats Cards with Hover Effects */}
            <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
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
                        <p className="text-xs sm:text-sm text-gray-500 font-medium truncate pr-2">
                          {card.title}
                        </p>
                        <Icon className={`w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-${card.color.split("-")[1]}-500 flex-shrink-0`} />
                      </div>
                      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 break-words">
                        {card.value}
                      </h2>
                      {card.sub && (
                        <p className="text-xs sm:text-sm text-gray-400 mt-1 sm:mt-2 flex items-center">
                          <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-green-400 rounded-full mr-1 sm:mr-2 flex-shrink-0"></span>
                          <span className="truncate">{card.sub}</span>
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Analytics Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg p-4 sm:p-5 md:p-6 border border-gray-100 hover:shadow-xl transition-all">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800">
                    Revenue Projection
                  </h3>
                  <TrendingUpIcon className="text-blue-500 w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="h-40 sm:h-48 md:h-56 lg:h-64 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg sm:rounded-xl flex items-center justify-center border border-dashed border-gray-200">
                  <p className="text-xs sm:text-sm text-gray-400">Interactive Chart Loading...</p>
                </div>
              </div>

              <div className="bg-white rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg p-4 sm:p-5 md:p-6 border border-gray-100 hover:shadow-xl transition-all">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800">
                    Visitor Traffic Analytics
                  </h3>
                  <PeopleIcon className="text-purple-500 w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="h-40 sm:h-48 md:h-56 lg:h-64 bg-gradient-to-br from-green-50 to-blue-50 rounded-lg sm:rounded-xl flex items-center justify-center border border-dashed border-gray-200">
                  <p className="text-xs sm:text-sm text-gray-400">Analytics Dashboard Loading...</p>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg p-4 sm:p-5 md:p-6 border border-gray-100">
              <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 mb-3 sm:mb-4">
                Recent Activity
              </h3>
              <div className="space-y-2 sm:space-y-3 md:space-y-4">
                {[1, 2, 3].map((_, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 sm:gap-3 md:gap-4 p-2 sm:p-3 hover:bg-gray-50 rounded-lg sm:rounded-xl transition-all"
                  >
                    <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircleIcon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs sm:text-sm font-medium text-gray-800 truncate">
                        Booth booking confirmed
                      </p>
                      <p className="text-xs text-gray-400">2 hours ago</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Profile Tab */}
        {activeTab === "profile" && (
          <div className="max-w-7xl mx-auto animate-fadeIn">
            <div className="bg-white rounded-xl sm:rounded-2xl md:rounded-3xl shadow-lg sm:shadow-xl overflow-hidden">
              {/* Profile Header */}
              <div className="bg-gradient-to-br from-blue-900 via-blue-600 to-purple-900 px-4 sm:px-5 md:px-6 lg:px-8 py-4 sm:py-5 md:py-6">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
                  Company Profile
                </h2>
                <p className="text-blue-100 text-xs sm:text-sm mt-0.5 sm:mt-1">
                  Manage your company information
                </p>
              </div>

              <form className="p-4 sm:p-5 md:p-6 lg:p-8 space-y-4 sm:space-y-5 md:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
                  <div className="space-y-1 sm:space-y-2">
                    <label className="block text-xs sm:text-sm font-medium text-gray-700">
                      Company Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      defaultValue="Pharma Co."
                      className="w-full border border-gray-300 rounded-lg sm:rounded-xl p-2 sm:p-2.5 md:p-3 text-xs sm:text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-1 sm:space-y-2">
                    <label className="block text-xs sm:text-sm font-medium text-gray-700">
                      Commercial Registration No.
                    </label>
                    <input
                      type="text"
                      defaultValue="CR-2024-12345"
                      className="w-full border border-gray-300 rounded-lg sm:rounded-xl p-2 sm:p-2.5 md:p-3 text-xs sm:text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-1 sm:space-y-2">
                    <label className="block text-xs sm:text-sm font-medium text-gray-700">
                      Contact Person
                    </label>
                    <input
                      type="text"
                      defaultValue="John Doe"
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
                </div>

                <div className="space-y-1 sm:space-y-2">
                  <label className="block text-xs sm:text-sm font-medium text-gray-700">
                    Company Description
                  </label>
                  <textarea
                    rows="3"
                    defaultValue="Leading pharmaceutical company specializing in..."
                    className="w-full border border-gray-300 rounded-lg sm:rounded-xl p-2 sm:p-2.5 md:p-3 text-xs sm:text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                  ></textarea>
                </div>

                <div className="space-y-1 sm:space-y-2">
                  <label className="block text-xs sm:text-sm font-medium text-gray-700">
                    Upload Logo
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
                    I consent to data processing in accordance with PDPL regulations
                  </label>
                </div>

                <div className="flex gap-3 sm:gap-4">
                  <button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-[1.02] shadow-md sm:shadow-lg shadow-blue-500/25"
                  >
                    Update Profile
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Floor Plan Tab */}
        {activeTab === "floorplan" && (
          <div className="animate-fadeIn">
            <div className="bg-white rounded-xl sm:rounded-2xl md:rounded-3xl shadow-lg sm:shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-blue-900 via-blue-600 to-purple-900 px-4 sm:px-5 md:px-6 lg:px-8 py-4 sm:py-5 md:py-6">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
                  Interactive Exhibition Floor Plan
                </h2>
                <p className="text-indigo-100 text-xs sm:text-sm mt-0.5 sm:mt-1">
                  View real-time booth availability and select your preferred location
                </p>
              </div>

              <div className="p-4 sm:p-5 md:p-6 lg:p-8">
                <div className="bg-gray-50 rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-5 lg:p-6 border border-dashed border-gray-200">
                  <div className="space-y-3 sm:space-y-4">
                    <img
                      src="/Images/exhibition-floor-plan.webp"
                      alt="exhibition-floor-plan"
                      className="object-cover h-auto w-full shadow-md rounded-lg sm:rounded-xl"
                    />
                    <img
                      src="/Images/taqeem-exhibition-booth-designs-1024x602.jpg"
                      alt="exhibition-floor-design"
                      className="object-cover h-auto w-full shadow-md rounded-lg sm:rounded-xl"
                    />
                  </div>
                  <div className="text-center">
                    <div className="flex flex-wrap gap-2 sm:gap-3 justify-center mt-4 sm:mt-5 md:mt-6">
                      <Button
                        variant="contained"
                        className="!bg-green-500 !hover:bg-green-600 !rounded-full !px-3 sm:!px-4 md:!px-5 lg:!px-6 !text-xs sm:!text-sm !py-1.5 sm:!py-2"
                      >
                        Available
                      </Button>
                      <Button
                        variant="contained"
                        className="!bg-orange-500 !hover:bg-orange-600 !rounded-full !px-3 sm:!px-4 md:!px-5 lg:!px-6 !text-xs sm:!text-sm !py-1.5 sm:!py-2"
                      >
                        Selected
                      </Button>
                      <Button
                        variant="contained"
                        className="!bg-red-500 !hover:bg-red-600 !rounded-full !px-3 sm:!px-4 md:!px-5 lg:!px-6 !text-xs sm:!text-sm !py-1.5 sm:!py-2"
                      >
                        Booked
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Booking Tab */}
        {activeTab === "booking" && (
          <div className="max-w-7xl mx-auto animate-fadeIn">
            <div className="bg-white rounded-xl sm:rounded-2xl md:rounded-3xl shadow-lg sm:shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-blue-900 via-blue-600 to-purple-900 px-4 sm:px-5 md:px-6 lg:px-8 py-4 sm:py-5 md:py-6">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
                  Booth Booking System
                </h2>
              </div>

              <form className="p-4 sm:p-5 md:p-6 lg:p-8 space-y-4 sm:space-y-5 md:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
                  <div className="space-y-1 sm:space-y-2">
                    <label className="block text-xs sm:text-sm font-medium text-gray-700">
                      Desired Booth Number
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., A12"
                      className="w-full border border-gray-300 rounded-lg sm:rounded-xl p-2 sm:p-2.5 md:p-3 text-xs sm:text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-1 sm:space-y-2">
                    <label className="block text-xs sm:text-sm font-medium text-gray-700">
                      Size (m²)
                    </label>
                    <select className="w-full border border-gray-300 rounded-lg sm:rounded-xl p-2 sm:p-2.5 md:p-3 text-xs sm:text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all">
                      <option value="9">9 m² - Small Booth</option>
                      <option value="18" selected>18 m² - Standard Booth</option>
                      <option value="36">36 m² - Premium Booth</option>
                      <option value="72">72 m² - Corner Booth</option>
                    </select>
                  </div>

                  <div className="space-y-1 sm:space-y-2">
                    <label className="block text-xs sm:text-sm font-medium text-gray-700">
                      Location Preference
                    </label>
                    <input
                      type="text"
                      placeholder="Near entrance, main aisle, etc."
                      className="w-full border border-gray-300 rounded-lg sm:rounded-xl p-2 sm:p-2.5 md:p-3 text-xs sm:text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-1 sm:space-y-2">
                    <label className="block text-xs sm:text-sm font-medium text-gray-700">
                      Total Price (Estimated)
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value="SAR 85,000"
                        readOnly
                        className="w-full bg-gray-50 border border-gray-300 rounded-lg sm:rounded-xl p-2 sm:p-2.5 md:p-3 text-xs sm:text-sm text-gray-700 font-semibold"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2 sm:space-y-3 md:space-y-4">
                  <label className="block text-xs sm:text-sm font-medium text-gray-700">
                    Additional Services
                  </label>
                  <div className="grid grid-cols-1 xs:grid-cols-2 gap-2 sm:gap-3 md:gap-4">
                    <label className="flex items-center p-2 sm:p-3 md:p-4 border border-gray-200 rounded-lg sm:rounded-xl hover:bg-gray-50 cursor-pointer transition-all">
                      <input
                        type="checkbox"
                        className="rounded text-green-600 mr-2 sm:mr-3 flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <span className="block text-xs sm:text-sm font-medium text-gray-700 truncate">
                          Electricity & Internet
                        </span>
                        <span className="text-xs text-gray-500">+SAR 5,000</span>
                      </div>
                    </label>
                    <label className="flex items-center p-2 sm:p-3 md:p-4 border border-gray-200 rounded-lg sm:rounded-xl hover:bg-gray-50 cursor-pointer transition-all">
                      <input
                        type="checkbox"
                        className="rounded text-green-600 mr-2 sm:mr-3 flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <span className="block text-xs sm:text-sm font-medium text-gray-700 truncate">
                          Furniture Package
                        </span>
                        <span className="text-xs text-gray-500">+SAR 8,000</span>
                      </div>
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium hover:from-blue-700 hover:to-blue-600 transition-all transform hover:scale-[1.02] shadow-md sm:shadow-lg"
                >
                  Confirm Booking Request
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Contract Tab */}
        {activeTab === "contract" && (
          <div className="max-w-7xl mx-auto animate-fadeIn">
            <div className="bg-white rounded-xl sm:rounded-2xl md:rounded-3xl shadow-lg sm:shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-blue-900 via-blue-600 to-purple-900 px-4 sm:px-5 md:px-6 lg:px-8 py-4 sm:py-5 md:py-6">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
                  Contract Management
                </h2>
                <p className="text-purple-100 text-xs sm:text-sm mt-0.5 sm:mt-1">
                  Review and sign your participation agreement
                </p>
              </div>

              <div className="p-4 sm:p-5 md:p-6 lg:p-8">
                <div className="bg-gray-50 rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-5 lg:p-6 border border-gray-200 mb-4 sm:mb-5 md:mb-6">
                  <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-gray-800 mb-2 sm:mb-3 md:mb-4">
                    Exhibition Participation Contract
                  </h3>
                  <div className="prose prose-xs sm:prose-sm max-w-none text-gray-600 mb-3 sm:mb-4 md:mb-5 lg:mb-6">
                    <p className="mb-2 sm:mb-3 text-xs sm:text-sm">
                      This agreement is made between Global Health Exhibition
                      and Pharma Co. for participation in the Global Health
                      Exhibition 2026...
                    </p>
                    <p className="text-xs sm:text-sm">
                      Terms and conditions include booth allocation, payment
                      schedule, cancellation policy, and code of conduct...
                    </p>
                  </div>

                  <label className="flex items-start gap-2 p-3 sm:p-4 bg-white rounded-lg sm:rounded-xl border border-gray-200 cursor-pointer hover:border-purple-300 transition-all">
                    <input
                      type="checkbox"
                      className="rounded text-purple-600 mt-0.5 flex-shrink-0"
                    />
                    <span className="text-xs sm:text-sm text-gray-700">
                      I have read and accept all terms and conditions
                    </span>
                  </label>
                </div>

                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4">
                  <Button
                    variant="contained"
                    className="!bg-gradient-to-r from-blue-600 to-blue-800 !px-4 sm:!px-5 md:!px-6 lg:!px-8 !py-2 sm:!py-2.5 md:!py-3 !rounded-lg sm:!rounded-xl !text-xs sm:!text-sm md:!text-base !font-medium hover:!from-blue-700 hover:!to-blue-600 flex-1"
                  >
                    Sign Contract Digitally
                  </Button>
                  <Button
                    variant="outlined"
                    className="!border-purple-200 !text-purple-700 !px-4 sm:!px-5 md:!px-6 lg:!px-8 !py-2 sm:!py-2.5 md:!py-3 !rounded-lg sm:!rounded-xl !text-xs sm:!text-sm md:!text-base !font-medium hover:!bg-purple-50 flex-1"
                    startIcon={<DownloadIcon className="w-3 h-3 sm:w-4 sm:h-4" />}
                  >
                    Download PDF
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Payment Tab */}
        {activeTab === "payment" && (
          <div className="max-w-7xl mx-auto animate-fadeIn">
            <div className="bg-white rounded-xl sm:rounded-2xl md:rounded-3xl shadow-lg sm:shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-blue-900 via-blue-600 to-purple-900 px-4 sm:px-5 md:px-6 lg:px-8 py-4 sm:py-5 md:py-6">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
                  Secure Payment Portal
                </h2>
                <p className="text-orange-100 text-xs sm:text-sm mt-0.5 sm:mt-1">
                  Complete your payment securely
                </p>
              </div>

              <div className="p-4 sm:p-5 md:p-6 lg:p-8">
                <div className="bg-gray-50 rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-5 lg:p-6 mb-4 sm:mb-5 md:mb-6">
                  <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 mb-2 sm:mb-3 md:mb-4">
                    Invoice Summary
                  </h3>
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex justify-between items-center py-1 sm:py-2 border-b border-gray-200">
                      <span className="text-xs sm:text-sm text-gray-600">Booth A12 - 18m² Premium</span>
                      <span className="text-xs sm:text-sm font-medium text-gray-800">SAR 75,000</span>
                    </div>
                    <div className="flex justify-between items-center py-1 sm:py-2 font-semibold text-sm sm:text-base md:text-lg">
                      <span className="text-gray-800">Total Amount</span>
                      <span className="text-orange-600">SAR 85,000</span>
                    </div>
                  </div>
                </div>

                <img
                  src="/Images/3-Best-Payment-Gateways-in-Saudi-Arabia.png"
                  alt="Payment Gateways"
                  className="h-auto w-full shadow-md rounded-lg sm:rounded-xl mb-4 sm:mb-5 md:mb-6"
                />

                <div className="bg-blue-50 rounded-lg sm:rounded-xl p-3 sm:p-4 mb-4 sm:mb-5 md:mb-6">
                  <p className="text-xs sm:text-sm text-blue-800 flex items-start gap-2">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Secure payment powered by industry-standard encryption</span>
                  </p>
                </div>

                <Button
                  variant="contained"
                  className="!w-full !bg-gradient-to-r !from-blue-600 !to-blue-600 !px-4 sm:!px-5 md:!px-6 !py-2.5 sm:!py-3 !rounded-lg sm:!rounded-xl !text-xs sm:!text-sm !font-medium !shadow-lg"
                >
                  Proceed to Secure Payment
                </Button>
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

export default ExhibitorSponsorPortal;