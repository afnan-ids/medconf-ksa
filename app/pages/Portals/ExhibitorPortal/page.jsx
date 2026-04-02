"use client";
import { Button } from "@mui/material";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
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
  Store as StoreIcon,
  SupportAgent as SupportIcon,
  Notifications as NotificationsIcon, 
  Event as EventIcon,
  LocationOn as LocationIcon,
  Square as SquareIcon,
  Receipt as ReceiptIcon,
  CreditCard as CreditCardIcon,
  Help as HelpIcon
} from "@mui/icons-material";
import { ChevronRight, Headphones, Mail, Phone, Shield, Sparkles } from "lucide-react";
import BreadCrumb from "../../../Components/BreadCrum";

const ExhibitorPortal = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isFormDirty, setIsFormDirty] = useState(false);

  // Updated tabs with your 7 required sections
  const tabs = [
    { id: "dashboard", label: "Dashboard", icon: DashboardIcon },
    { id: "profile", label: "Profile", icon: PersonIcon },
    { id: "floorplan", label: "Floor Plan", icon: MapIcon },
    { id: "booth", label: "Booth Details", icon: StoreIcon },
    { id: "contract", label: "Contract", icon: ContractIcon },
    { id: "payment", label: "Payment", icon: PaymentIcon },
    { id: "support", label: "Support", icon: SupportIcon },
  ];

  // Stats data with theme colors
  const statsData = [
    {
      title: "Booked Booth",
      value: "A12",
      sub: "18m² Premium Corner",
      icon: StoreIcon,
      gradient: "from-blue-900 via-blue-600 to-purple-900 ",
      lightBg: "bg-blue-50",
      textColor: "text-blue-600",
    },
    {
      title: "Booking Status",
      value: "Confirmed",
      sub: "Ready for exhibition",
      icon: CheckCircleIcon,
      gradient: "from-emerald-500 to-green-400",
      lightBg: "bg-emerald-50",
      textColor: "text-emerald-600",
    },
    {
      title: "Total Cost",
      value: "SAR 85,000",
      sub: "Paid: SAR 42,500",
      icon: AttachMoneyIcon,
      gradient: "from-purple-500 to-pink-400",
      lightBg: "bg-purple-50",
      textColor: "text-purple-600",
    },
    {
      title: "Leads Collected",
      value: "245",
      sub: "+23 this week",
      icon: PeopleIcon,
      gradient: "from-amber-500 to-orange-400",
      lightBg: "bg-amber-50",
      textColor: "text-amber-600",
    },
  ];

  // Notifications data for dashboard
  const notifications = [
    {
      id: 1,
      title: "Booth construction deadline",
      message: "Complete your booth design by March 1st, 2026",
      time: "2 days ago",
      icon: EventIcon,
      gradient: "from-amber-500 to-orange-400",
    },
    {
      id: 2,
      title: "Payment reminder",
      message: "Final payment of SAR 42,500 due by Feb 15th",
      time: "5 days ago",
      icon: PaymentIcon,
      gradient: "from-purple-500 to-pink-400",
    },
    {
      id: 3,
      title: "New visitor leads",
      message: "12 new leads scanned from your booth",
      time: "1 week ago",
      icon: PeopleIcon,
      gradient: "from-blue-900 via-blue-600 to-purple-900 ",
    },
  ];

  // Upcoming events
  const events = [
    {
      id: 1,
      title: "Exhibitor Briefing",
      date: "March 10, 2026",
      time: "10:00 AM",
      location: "Main Hall A",
    },
    {
      id: 2,
      title: "Networking Reception",
      date: "March 12, 2026",
      time: "7:00 PM",
      location: "Ballroom",
    },
    {
      id: 3,
      title: "Award Ceremony",
      date: "March 14, 2026",
      time: "6:00 PM",
      location: "Main Stage",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section with Theme Gradient Header */}
      <div className="">
        <BreadCrumb
          title="Exhibitor Portal"
          backgroundImage="/Images/Home/Bread-crum-1.avif"
          path={[
            { label: "Portals", href: "/pages/NavBar-Links/NavPortals" },
            { label: "Exhibitor Portal" },
          ]}
        />
      </div>

    
      {/* Tabs Section - Theme Colors */}
      <div className="sticky top-0 sm:top-4 z-10 max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 mb-4 sm:mb-6 md:mb-8">
        <div className="bg-white/80 backdrop-blur-xl rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl p-1.5 sm:p-2 flex flex-wrap gap-1 sm:gap-2 justify-between border border-gray-200">
          {tabs.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`flex items-center gap-1 sm:gap-2 px-2 sm:px-3 md:px-4 lg:px-5 py-2 sm:py-2.5 md:py-3 rounded-lg sm:rounded-xl font-medium transition-all duration-300 flex-1 sm:flex-auto justify-center ${
                activeTab === id
                  ? "bg-gradient-to-r from-blue-900 via-blue-600 to-purple-900  text-white shadow-md sm:shadow-lg scale-95 sm:scale-90"
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
        {/* DASHBOARD TAB */}
        {activeTab === "dashboard" && (
          <div className="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8 animate-fadeIn">
            {/* Stats Cards with Theme Colors */}
            <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
              {statsData.map((card, i) => {
                const Icon = card.icon;
                return (
                  <div
                    key={i}
                    className="group relative bg-white rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden border border-gray-100"
                  >
                    <div
                      className={`absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br ${card.gradient} opacity-10 rounded-bl-full transition-all group-hover:opacity-20`}
                    ></div>
                    <div className="relative p-3 sm:p-4 md:p-5 lg:p-6">
                      <div className="flex items-center justify-between mb-1 sm:mb-2 md:mb-3">
                        <p className="text-xs sm:text-sm text-gray-500 font-medium truncate pr-2">
                          {card.title}
                        </p>
                        <Icon className={`w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 ${card.textColor} flex-shrink-0`} />
                      </div>
                      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 break-words">
                        {card.value}
                      </h2>
                      {card.sub && (
                        <p className="text-xs sm:text-sm text-gray-400 mt-1 sm:mt-2 flex items-center">
                          <span className={`w-1 h-1 sm:w-1.5 sm:h-1.5 bg-gradient-to-r ${card.gradient} rounded-full mr-1 sm:mr-2 flex-shrink-0`}></span>
                          <span className="truncate">{card.sub}</span>
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Two Column Layout for Dashboard */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
              {/* Left Column - Notifications & Updates */}
              <div className="lg:col-span-2 space-y-4 sm:space-y-5">
                {/* Recent Notifications */}
                <div className="bg-white rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg p-4 sm:p-5 md:p-6 border border-gray-100">
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 flex items-center gap-2">
                      <NotificationsIcon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                      Recent Notifications
                    </h3>
                    <button className="text-xs sm:text-sm text-blue-600 hover:text-cyan-600 flex items-center gap-1">
                      View all <ChevronRight className="w-3 h-3" />
                    </button>
                  </div>
                  <div className="space-y-2 sm:space-y-3">
                    {notifications.map((item) => {
                      const Icon = item.icon;
                      return (
                        <div
                          key={item.id}
                          className="flex items-start gap-3 p-2 sm:p-3 hover:bg-gray-50 rounded-lg transition-all border-b border-gray-100 last:border-0"
                        >
                          <div className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-r ${item.gradient} bg-opacity-10 flex items-center justify-center flex-shrink-0`}>
                            <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-xs sm:text-sm font-medium text-gray-800">
                              {item.title}
                            </p>
                            <p className="text-xs text-gray-500 mt-0.5">
                              {item.message}
                            </p>
                            <p className="text-xs text-gray-400 mt-1">{item.time}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

              
              </div>

              {/* Right Column - Booth Status & Quick Actions */}
              <div className="space-y-4 sm:space-y-5">
                {/* Booth Status Card */}
                <div className="bg-white rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg p-4 sm:p-5 md:p-6 border border-gray-100">
                  <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 mb-3 sm:mb-4 flex items-center gap-2">
                    <StoreIcon className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600" />
                    Booth Status
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-xs sm:text-sm text-gray-600">Booth Number</span>
                      <span className="text-xs sm:text-sm font-semibold text-gray-800 bg-gradient-to-r from-blue-900 via-blue-600 to-purple-900  bg-clip-text text-transparent">A12</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs sm:text-sm text-gray-600">Size</span>
                      <span className="text-xs sm:text-sm text-gray-800">18 m²</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs sm:text-sm text-gray-600">Location</span>
                      <span className="text-xs sm:text-sm text-gray-800">Hall 1, Corner</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs sm:text-sm text-gray-600">Status</span>
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                        Confirmed
                      </span>
                    </div>
                  </div>
                  <button className="w-full mt-4 text-xs sm:text-sm bg-gradient-to-r from-blue-900 via-blue-600 to-purple-900  text-white px-3 py-2 rounded-lg hover:from-blue-700 hover:to-cyan-500 transition-all">
                    View Full Details
                  </button>
                </div>

               
              </div>
              
            </div>
             {/* Upcoming Events */}
                <div className="bg-white rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg p-4 sm:p-5 md:p-6 border border-gray-100">
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 flex items-center gap-2">
                      <EventIcon className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
                      Upcoming Events
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {events.map((event) => (
                      <div
                        key={event.id}
                        className="flex items-center justify-between p-2 sm:p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all"
                      >
                        <div>
                          <p className="text-xs sm:text-sm font-medium text-gray-800">{event.title}</p>
                          <p className="text-xs text-gray-500 mt-1">{event.date} • {event.time}</p>
                          <p className="text-xs text-gray-400 mt-0.5">{event.location}</p>
                        </div>
                        <button className="text-xs text-blue-600 hover:text-cyan-600">
                          Add
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
          </div>
        )}

        {/* PROFILE TAB */}
        {activeTab === "profile" && (
          <div className="max-w-7xl mx-auto animate-fadeIn">
            <div className="bg-white rounded-xl sm:rounded-2xl md:rounded-3xl shadow-lg sm:shadow-xl overflow-hidden border border-gray-100">
              {/* Profile Header with Theme Gradient */}
              <div className="bg-gradient-to-r from-gray-900 via-indigo-950 to-gray-900 px-4 sm:px-5 md:px-6 lg:px-8 py-4 sm:py-5 md:py-6">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white flex items-center gap-2">
                  <PersonIcon className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
                  Company Profile
                </h2>
                <p className="text-gray-300 text-xs sm:text-sm mt-0.5 sm:mt-1">
                  Manage your exhibitor company information
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
                      defaultValue="PharmaCo Exhibitions"
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
                      defaultValue="Ahmed Al-Saud"
                      className="w-full border border-gray-300 rounded-lg sm:rounded-xl p-2 sm:p-2.5 md:p-3 text-xs sm:text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-1 sm:space-y-2">
                    <label className="block text-xs sm:text-sm font-medium text-gray-700">
                      Email Address
                    </label>
                    <input
                      type="email"
                      defaultValue="exhibitor@pharmaco.com"
                      className="w-full border border-gray-300 rounded-lg sm:rounded-xl p-2 sm:p-2.5 md:p-3 text-xs sm:text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
                  <div className="space-y-1 sm:space-y-2">
                    <label className="block text-xs sm:text-sm font-medium text-gray-700">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      defaultValue="+966 50 123 4567"
                      className="w-full border border-gray-300 rounded-lg sm:rounded-xl p-2 sm:p-2.5 md:p-3 text-xs sm:text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-1 sm:space-y-2">
                    <label className="block text-xs sm:text-sm font-medium text-gray-700">
                      Website
                    </label>
                    <input
                      type="url"
                      defaultValue="www.pharmaco-exhibits.com"
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
                    defaultValue="Leading pharmaceutical company specializing in medical equipment and supplies. Exhibiting at major healthcare conferences across Saudi Arabia and the Middle East."
                    className="w-full border border-gray-300 rounded-lg sm:rounded-xl p-2 sm:p-2.5 md:p-3 text-xs sm:text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                  ></textarea>
                </div>

                <div className="space-y-1 sm:space-y-2">
                  <label className="block text-xs sm:text-sm font-medium text-gray-700">
                    Upload Company Logo
                  </label>
                  <div className="flex flex-col xs:flex-row items-start xs:items-center gap-3 sm:gap-4">
                    <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 border-2 border-blue-200">
                      <span className="text-xl sm:text-2xl font-bold text-blue-600">P</span>
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
                    className="flex-1 bg-gradient-to-r from-blue-900 via-blue-600 to-purple-900  text-white px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium hover:from-blue-700 hover:to-cyan-500 transition-all transform hover:scale-[1.02] shadow-md sm:shadow-lg"
                  >
                    Update Profile
                  </button>
                  <button
                    type="button"
                    className="px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium border border-gray-300 text-gray-700 hover:bg-gray-50 transition-all"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* FLOOR PLAN TAB */}
        {activeTab === "floorplan" && (
          <div className="animate-fadeIn">
            <div className="bg-white rounded-xl sm:rounded-2xl md:rounded-3xl shadow-lg sm:shadow-xl overflow-hidden border border-gray-100">
              <div className="bg-gradient-to-r from-gray-900 via-indigo-950 to-gray-900 px-4 sm:px-5 md:px-6 lg:px-8 py-4 sm:py-5 md:py-6">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white flex items-center gap-2">
                  <MapIcon className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
                  Exhibition Floor Plan
                </h2>
                <p className="text-gray-300 text-xs sm:text-sm mt-0.5 sm:mt-1">
                  View your booth location and exhibition layout
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
                  
                  {/* Booth Location Highlight */}
                  <div className="mt-4 sm:mt-5 md:mt-6 p-3 sm:p-4 bg-blue-50 rounded-lg border border-blue-100">
                    <div className="flex items-center gap-2 mb-2">
                      <LocationIcon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                      <span className="text-xs sm:text-sm font-medium text-gray-800">Your Booth Location: <span className="text-blue-600 font-bold">A12</span></span>
                    </div>
                    <p className="text-xs text-gray-600">Hall 1, Premium Corner Section - Near Main Entrance</p>
                  </div>

                  <div className="text-center">
                    <div className="flex flex-wrap gap-2 sm:gap-3 justify-center mt-4 sm:mt-5 md:mt-6">
                      <Button
                        variant="contained"
                        className="!bg-gradient-to-r !from-emerald-500 !to-green-400 !rounded-full !px-3 sm:!px-4 md:!px-5 lg:!px-6 !text-xs sm:!text-sm !py-1.5 sm:!py-2 !shadow-md hover:!shadow-lg !normal-case"
                      >
                        Available
                      </Button>
                      <Button
                        variant="contained"
                        className="!bg-gradient-to-r !from-amber-500 !to-orange-400 !rounded-full !px-3 sm:!px-4 md:!px-5 lg:!px-6 !text-xs sm:!text-sm !py-1.5 sm:!py-2 !shadow-md hover:!shadow-lg !normal-case"
                      >
                        Selected
                      </Button>
                      
                      <Button
                        variant="contained"
                        className="!bg-gradient-to-r !from-red-500 !to-rose-500 !rounded-full !px-3 sm:!px-4 md:!px-5 lg:!px-6 !text-xs sm:!text-sm !py-1.5 sm:!py-2 !shadow-md hover:!shadow-lg !normal-case"
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

        {/* BOOTH DETAILS TAB */}
        {activeTab === "booth" && (
          <div className="animate-fadeIn">
            <div className="bg-white rounded-xl sm:rounded-2xl md:rounded-3xl shadow-lg sm:shadow-xl overflow-hidden border border-gray-100">
              <div className="bg-gradient-to-r from-gray-900 via-indigo-950 to-gray-900 px-4 sm:px-5 md:px-6 lg:px-8 py-4 sm:py-5 md:py-6">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white flex items-center gap-2">
                  <StoreIcon className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
                  Booth Details
                </h2>
                <p className="text-gray-300 text-xs sm:text-sm mt-0.5 sm:mt-1">
                  View your booth allocation, size, and display information
                </p>
              </div>

              <div className="p-4 sm:p-5 md:p-6 lg:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                  {/* Booth Information */}
                 
                    <div className="bg-gray-50 rounded-xl p-4 sm:p-5">
                      <h3 className="text-sm sm:text-base font-semibold text-gray-800 mb-3 flex items-center gap-2">
                        <SquareIcon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                        Booth Specifications
                      </h3>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                          <span className="text-xs sm:text-sm text-gray-600">Booth Number</span>
                          <span className="text-xs sm:text-sm font-semibold text-gray-800 bg-gradient-to-r from-blue-900 via-blue-600 to-purple-900  bg-clip-text text-transparent">A12</span>
                        </div>
                        <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                          <span className="text-xs sm:text-sm text-gray-600">Booth Size</span>
                          <span className="text-xs sm:text-sm text-gray-800">18 m² (6m x 3m)</span>
                        </div>
                        <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                          <span className="text-xs sm:text-sm text-gray-600">Location</span>
                          <span className="text-xs sm:text-sm text-gray-800">Hall 1, Corner Booth</span>
                        </div>
                        <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                          <span className="text-xs sm:text-sm text-gray-600">Booth Type</span>
                          <span className="text-xs sm:text-sm text-gray-800">Premium Corner</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-xs sm:text-sm text-gray-600">Status</span>
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                            Confirmed
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-4 sm:p-5">
                      <h3 className="text-sm sm:text-base font-semibold text-gray-800 mb-3 flex items-center gap-2">
                        <InventoryIcon className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
                        Included Amenities
                      </h3>
                      <div className="grid grid-cols-2 gap-2">
                        {[
                          "Electricity (3kW)",
                          "Wi-Fi Connection",
                          "2 Spotlights",
                          "1 Table",
                          "2 Chairs",
                          "Waste Basket",
                          "Carpet",
                          "Company Signage",
                        ].map((item, i) => (
                          <div key={i} className="flex items-center gap-1">
                            <CheckCircleIcon className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-500" />
                            <span className="text-xs text-gray-600">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                

                
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CONTRACT TAB */}
        {activeTab === "contract" && (
          <div className="max-w-7xl mx-auto animate-fadeIn">
            <div className="bg-white rounded-xl sm:rounded-2xl md:rounded-3xl shadow-lg sm:shadow-xl overflow-hidden border border-gray-100">
              <div className="bg-gradient-to-r from-gray-900 via-indigo-950 to-gray-900 px-4 sm:px-5 md:px-6 lg:px-8 py-4 sm:py-5 md:py-6">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white flex items-center gap-2">
                  <ContractIcon className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
                  Contract Management
                </h2>
                <p className="text-gray-300 text-xs sm:text-sm mt-0.5 sm:mt-1">
                  View and download your exhibitor agreement
                </p>
              </div>

              <div className="p-4 sm:p-5 md:p-6 lg:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
                  <div className="lg:col-span-2">
                    <div className="bg-gray-50 rounded-lg sm:rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-6 border border-gray-200">
                      <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">
                        Exhibition Participation Contract
                      </h3>
                      <div className="prose prose-xs sm:prose-sm max-w-none text-gray-600 mb-4 sm:mb-5 max-h-60 overflow-y-auto">
                        <p className="mb-3 text-xs sm:text-sm">
                          <strong>1. PARTIES</strong><br />
                          This agreement is made between MedConf KSA Exhibition Organizer ("Organizer") and PharmaCo Exhibitions ("Exhibitor") for participation in the Global Health Exhibition 2026.
                        </p>
                        <p className="mb-3 text-xs sm:text-sm">
                          <strong>2. BOOTH ALLOCATION</strong><br />
                          The Organizer allocates Booth Number A12 (18m²) to the Exhibitor in Hall 1. The booth location is final and non-transferable.
                        </p>
                        <p className="mb-3 text-xs sm:text-sm">
                          <strong>3. PAYMENT TERMS</strong><br />
                          Total participation fee: SAR 85,000. Payment schedule: 50% upon signing (SAR 42,500), remaining 50% due by February 15, 2026.
                        </p>
                        <p className="mb-3 text-xs sm:text-sm">
                          <strong>4. CANCELLATION POLICY</strong><br />
                          Cancellations before January 15, 2026: 75% refund. After January 15: No refund.
                        </p>
                        <p className="mb-3 text-xs sm:text-sm">
                          <strong>5. CODE OF CONDUCT</strong><br />
                          Exhibitor agrees to comply with all exhibition rules, safety regulations, and professional standards.
                        </p>
                      </div>

                      <label className="flex items-start gap-2 p-3 sm:p-4 bg-white rounded-lg sm:rounded-xl border border-gray-200 cursor-pointer hover:border-blue-300 transition-all">
                        <input
                          type="checkbox"
                          className="rounded text-blue-600 mt-0.5 flex-shrink-0"
                          defaultChecked
                        />
                        <span className="text-xs sm:text-sm text-gray-700">
                          I have read and accept all terms and conditions
                        </span>
                      </label>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-4 border border-blue-100">
                      <h4 className="text-xs sm:text-sm font-semibold text-gray-800 mb-2">Contract Status</h4>
                      <div className="flex items-center gap-2">
                        <CheckCircleIcon className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500" />
                        <span className="text-xs sm:text-sm text-gray-700">Signed on Jan 15, 2026</span>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-4">
                      <h4 className="text-xs sm:text-sm font-semibold text-gray-800 mb-3">Actions</h4>
                      <div className="space-y-2">
                        <Button
                          variant="contained"
                          className="!w-full !bg-gradient-to-r !from-blue-600 !to-cyan-400 !px-4 !py-2.5 !rounded-lg !text-xs sm:!text-sm !font-medium !normal-case"
                          startIcon={<DownloadIcon className="w-3 h-3 sm:w-4 sm:h-4" />}
                        >
                          Download Contract (PDF)
                        </Button>
                        <Button
                          variant="outlined"
                          className="!w-full !border-blue-200 !text-blue-700 !px-4 !py-2.5 !rounded-lg !text-xs sm:!text-sm !font-medium !normal-case hover:!bg-blue-50"
                        >
                          Request Amendment
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* PAYMENT TAB */}
        {activeTab === "payment" && (
          <div className="max-w-7xl mx-auto animate-fadeIn">
            <div className="bg-white rounded-xl sm:rounded-2xl md:rounded-3xl shadow-lg sm:shadow-xl overflow-hidden border border-gray-100">
              <div className="bg-gradient-to-r from-gray-900 via-indigo-950 to-gray-900 px-4 sm:px-5 md:px-6 lg:px-8 py-4 sm:py-5 md:py-6">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white flex items-center gap-2">
                  <PaymentIcon className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
                  Payment Details
                </h2>
                <p className="text-gray-300 text-xs sm:text-sm mt-0.5 sm:mt-1">
                  Manage payment status and invoices
                </p>
              </div>

              <div className="p-4 sm:p-5 md:p-6 lg:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
                  <div className="lg:col-span-2 space-y-4">
                    {/* Invoice Summary */}
                    <div className="bg-gray-50 rounded-lg sm:rounded-xl p-4 sm:p-5">
                      <h3 className="text-sm sm:text-base font-semibold text-gray-800 mb-3">Invoice Summary</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center py-2 border-b border-gray-200">
                          <span className="text-xs sm:text-sm text-gray-600">Booth A12 - 18m² Premium Corner</span>
                          <span className="text-xs sm:text-sm font-medium text-gray-800">SAR 75,000</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b border-gray-200">
                          <span className="text-xs sm:text-sm text-gray-600">Electricity & Internet</span>
                          <span className="text-xs sm:text-sm font-medium text-gray-800">SAR 5,000</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b border-gray-200">
                          <span className="text-xs sm:text-sm text-gray-600">Furniture Package</span>
                          <span className="text-xs sm:text-sm font-medium text-gray-800">SAR 5,000</span>
                        </div>
                        <div className="flex justify-between items-center py-2 font-semibold text-sm sm:text-base">
                          <span className="text-gray-800">Total Amount</span>
                          <span className="bg-gradient-to-r from-blue-900 via-blue-600 to-purple-900  bg-clip-text text-transparent">SAR 85,000</span>
                        </div>
                      </div>
                    </div>

                    {/* Payment Schedule */}
                    <div className="bg-gray-50 rounded-lg sm:rounded-xl p-4 sm:p-5">
                      <h3 className="text-sm sm:text-base font-semibold text-gray-800 mb-3">Payment Schedule</h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                          <div>
                            <p className="text-xs sm:text-sm font-medium text-gray-800">Initial Deposit (50%)</p>
                            <p className="text-xs text-gray-500">Due upon signing</p>
                          </div>
                          <div className="text-right">
                            <p className="text-xs sm:text-sm font-semibold text-gray-800">SAR 42,500</p>
                            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                              Paid on Jan 15
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                          <div>
                            <p className="text-xs sm:text-sm font-medium text-gray-800">Final Payment (50%)</p>
                            <p className="text-xs text-gray-500">Due Feb 15, 2026</p>
                          </div>
                          <div className="text-right">
                            <p className="text-xs sm:text-sm font-semibold text-gray-800">SAR 42,500</p>
                            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                              Pending
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {/* Payment Methods */}
                    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-4 border border-blue-100">
                      <h4 className="text-xs sm:text-sm font-semibold text-gray-800 mb-3">Payment Methods</h4>
                      <div className="space-y-2">
                        <img
                          src="/Images/3-Best-Payment-Gateways-in-Saudi-Arabia.png"
                          alt="Payment Gateways"
                          className="h-auto w-full rounded-lg mb-2"
                        />
                        <p className="text-xs text-gray-600 flex items-center gap-1">
                          <Shield className="w-3 h-3 text-blue-600" />
                          Secure payment powered by industry-standard encryption
                        </p>
                      </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="bg-gray-50 rounded-xl p-4">
                      <h4 className="text-xs sm:text-sm font-semibold text-gray-800 mb-3">Quick Actions</h4>
                      <div className="space-y-2">
                        <Button
                          variant="contained"
                          className="!w-full !bg-gradient-to-r !from-blue-600 !to-cyan-400 !px-4 !py-2.5 !rounded-lg !text-xs sm:!text-sm !font-medium !normal-case"
                          startIcon={<CreditCardIcon className="w-3 h-3 sm:w-4 sm:h-4" />}
                        >
                          Pay Remaining Balance
                        </Button>
                        <Button
                          variant="outlined"
                          className="!w-full !border-blue-200 !text-blue-700 !px-4 !py-2.5 !rounded-lg !text-xs sm:!text-sm !font-medium !normal-case hover:!bg-blue-50"
                          startIcon={<ReceiptIcon className="w-3 h-3 sm:w-4 sm:h-4" />}
                        >
                          Download Invoice
                        </Button>
                      </div>
                    </div>

                    {/* Payment History */}
                    <div className="bg-gray-50 rounded-xl p-4">
                      <h4 className="text-xs sm:text-sm font-semibold text-gray-800 mb-2">Payment History</h4>
                      <div className="text-xs text-gray-600">
                        <div className="flex justify-between py-1">
                          <span>Jan 15, 2026</span>
                          <span className="font-medium">SAR 42,500</span>
                        </div>
                        <div className="flex justify-between py-1 text-gray-400">
                          <span>Feb 15, 2026</span>
                          <span className="font-medium">SAR 42,500 (Pending)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SUPPORT TAB */}
        {activeTab === "support" && (
          <div className="max-w-7xl mx-auto animate-fadeIn">
            <div className="bg-white rounded-xl sm:rounded-2xl md:rounded-3xl shadow-lg sm:shadow-xl overflow-hidden border border-gray-100">
              <div className="bg-gradient-to-r from-gray-900 via-indigo-950 to-gray-900 px-4 sm:px-5 md:px-6 lg:px-8 py-4 sm:py-5 md:py-6">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white flex items-center gap-2">
                  <SupportIcon className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
                  Help Desk & Support
                </h2>
                <p className="text-gray-300 text-xs sm:text-sm mt-0.5 sm:mt-1">
                  Contact the event organizer for assistance
                </p>
              </div>

              <div className="p-4 sm:p-5 md:p-6 lg:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
                  <div className="lg:col-span-2 space-y-4">
                    {/* Contact Form */}
                    <div className="bg-gray-50 rounded-xl p-4 sm:p-5">
                      <h3 className="text-sm sm:text-base font-semibold text-gray-800 mb-3">Send a Message</h3>
                      <form className="space-y-3">
                        <div>
                          <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                            Subject
                          </label>
                          <select className="w-full border border-gray-300 rounded-lg p-2 sm:p-2.5 text-xs sm:text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none">
                            <option>Booth Setup Inquiry</option>
                            <option>Payment Question</option>
                            <option>Technical Support</option>
                            <option>Logistics Coordination</option>
                            <option>Other</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                            Message
                          </label>
                          <textarea
                            rows="4"
                            placeholder="Describe your issue or question..."
                            className="w-full border border-gray-300 rounded-lg p-2 sm:p-2.5 text-xs sm:text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
                          ></textarea>
                        </div>
                        <div>
                          <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                            Attachments (optional)
                          </label>
                          <input
                            type="file"
                            className="w-full text-xs sm:text-sm text-gray-500 file:mr-2 file:py-1 file:px-3 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                          />
                        </div>
                        <button
                          type="submit"
                          className="w-full bg-gradient-to-r from-blue-900 via-blue-600 to-purple-900  text-white px-4 py-2.5 rounded-lg text-xs sm:text-sm font-medium hover:from-blue-700 hover:to-cyan-500 transition-all"
                        >
                          Submit Ticket
                        </button>
                      </form>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {/* Contact Info Cards */}
                    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-4 border border-blue-100">
                      <h4 className="text-xs sm:text-sm font-semibold text-gray-800 mb-3 flex items-center gap-2">
                        <Phone className="w-4 h-4 text-blue-600" />
                        Emergency Contact
                      </h4>
                      <p className="text-sm font-bold text-gray-900">+966 55 123 4567</p>
                      <p className="text-xs text-gray-600 mt-1">24/7 On-site Support</p>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-4">
                      <h4 className="text-xs sm:text-sm font-semibold text-gray-800 mb-3">Support Hours</h4>
                      <div className="space-y-2 text-xs">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Saturday - Thursday</span>
                          <span className="text-gray-800">9:00 AM - 8:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Friday</span>
                          <span className="text-gray-800">Closed</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Event Days</span>
                          <span className="text-gray-800">24/7 Support</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-4">
                      <h4 className="text-xs sm:text-sm font-semibold text-gray-800 mb-3">Direct Contacts</h4>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" />
                          <span className="text-xs text-gray-600">exhibitor@medconfksa.com</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Headphones className="w-3 h-3 sm:w-4 sm:h-4 text-purple-600" />
                          <span className="text-xs text-gray-600">Live Chat Available</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Global Styles */}
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

        /* Custom scrollbar for contract */
        .overflow-y-auto::-webkit-scrollbar {
          width: 4px;
        }
        .overflow-y-auto::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        .overflow-y-auto::-webkit-scrollbar-thumb {
          background: #888;
          border-radius: 4px;
        }
        .overflow-y-auto::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
      `}</style>
    </div>
  );
};

export default ExhibitorPortal;