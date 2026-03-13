"use client";
import { Button } from "@mui/material";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import {
  Dashboard as DashboardIcon,
  Person as PersonIcon,
  Event as EventIcon,
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
  LocationOn as LocationIcon,
  Square as SquareIcon,
  Receipt as ReceiptIcon,
  CreditCard as CreditCardIcon,
  Help as HelpIcon,
  ChevronRight,
  Star as StarIcon,
  Schedule as ScheduleIcon,
  MenuBook as MenuBookIcon,
  AutoAwesome as SparklesIcon,
  Security as ShieldIcon,
  Public as GlobeIcon,
  Phone,
  Mail,
  Message,
  Headset as HeadphonesIcon,
  CardGiftcard as GiftIcon,
  EmojiEvents as AwardIcon,
  DiamondOutlined as DiamondIcon,
  Settings,
  Logout
} from "@mui/icons-material";
import {
  LayoutDashboard,
  User,
  Bell,
  Sparkles,
  Shield,
  Globe,
  LogOut
} from "lucide-react";
import BreadCrumb from "../../../Components/BreadCrum";

const SponsorPortal = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  // Tabs for Sponsor Portal
  const tabs = [
    { id: "dashboard", label: "Dashboard", icon: DashboardIcon },
    { id: "profile", label: "Sponsor Profile", icon: PersonIcon },
    { id: "package", label: "Sponsorship Package", icon: DiamondIcon },
    { id: "events", label: "Event Information", icon: EventIcon },
    { id: "support", label: "Support", icon: SupportIcon },
  ];

  // Stats data with Gold/Purple theme
  const statsData = [
    {
      title: "Sponsorship Tier",
      value: "Platinum",
      sub: "Premium Partner",
      icon: DiamondIcon,
      gradient: "from-amber-500 to-yellow-500",
      lightBg: "bg-amber-50",
      textColor: "text-amber-600",
    },
    {
      title: "Status",
      value: "Active",
      sub: "Confirmed Partner",
      icon: CheckCircleIcon,
      gradient: "from-emerald-500 to-green-400",
      lightBg: "bg-emerald-50",
      textColor: "text-emerald-600",
    },
    {
      title: "Investment",
      value: "SAR 250,000",
      sub: "Paid: SAR 125,000",
      icon: AttachMoneyIcon,
      gradient: "from-purple-500 to-pink-400",
      lightBg: "bg-purple-50",
      textColor: "text-purple-600",
    },
    {
      title: "Brand Reach",
      value: "15K+",
      sub: "Expected attendees",
      icon: PeopleIcon,
      gradient: "from-amber-500 to-orange-400",
      lightBg: "bg-amber-50",
      textColor: "text-amber-600",
    },
  ];

  // Notifications data
  const notifications = [
    {
      id: 1,
      title: "Logo deadline approaching",
      message: "Submit your company logo for branding by Feb 20th",
      time: "2 days ago",
      icon: EventIcon,
      gradient: "from-amber-500 to-yellow-500",
    },
    {
      id: 2,
      title: "Sponsor briefing",
      message: "Platinum sponsor meeting on March 10th at 10:00 AM",
      time: "3 days ago",
      icon: PeopleIcon,
      gradient: "from-purple-500 to-pink-400",
    },
    {
      id: 3,
      title: "Marketing materials ready",
      message: "Your branding package is ready for review",
      time: "5 days ago",
      icon: GiftIcon,
      gradient: "from-amber-500 to-orange-400",
    },
  ];

  // Sponsorship benefits based on tier
  const sponsorshipBenefits = [
    {
      category: "Branding Benefits",
      items: [
        "Logo on main stage backdrop",
        "Logo on all event materials",
        "Company profile in event app",
        "Branding in conference hall",
        "Social media mentions (6 posts)",
      ],
    },
    {
      category: "Speaking Opportunities",
      items: [
        "Keynote speech (30 min)",
        "Panel discussion participation",
        "Workshop hosting (2 hours)",
        "Welcome remarks",
      ],
    },
    {
      category: "Exhibition Benefits",
      items: [
        "Premium booth location (36m²)",
        "Private meeting room",
        "Hospitality suite",
        "10 complimentary registrations",
      ],
    },
    {
      category: "Networking Benefits",
      items: [
        "VIP networking dinner (4 seats)",
        "Private dinner with keynote speakers",
        "Access to VIP lounge",
        "Dedicated networking app access",
      ],
    },
  ];

  // Upcoming events
  const events = [
    {
      id: 1,
      title: "Sponsor Orientation",
      date: "March 10, 2026",
      time: "10:00 AM",
      location: "Conference Room A",
      type: "Mandatory",
    },
    {
      id: 2,
      title: "VIP Networking Dinner",
      date: "March 12, 2026",
      time: "7:30 PM",
      location: "Royal Ballroom",
      type: "Invitation Only",
    },
    {
      id: 3,
      title: "Platinum Sponsor Reception",
      date: "March 13, 2026",
      time: "6:00 PM",
      location: "VIP Lounge",
      type: "Exclusive",
    },
    {
      id: 4,
      title: "Award Ceremony",
      date: "March 14, 2026",
      time: "6:00 PM",
      location: "Main Hall",
      type: "All Sponsors",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section with Theme Gradient Header */}
      <div className="">
        <BreadCrumb
          title="Sponsor Portal"
          backgroundImage="/Images/Home/Bread-crum-1.avif"
          path={[
            { label: "Portals", href: "/pages/NavBar-Links/NavPortals" },
            { label: "Sponsor Portal" },
          ]}
        />
      </div>

      

      {/* Tabs Section - Gold/Purple Theme */}
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
            {/* Stats Cards with Gold/Purple Theme */}
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

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
              {/* Left Column - Notifications & Updates */}
              <div className="lg:col-span-2 space-y-4 sm:space-y-5">
                {/* Recent Notifications */}
                <div className="bg-white rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg p-4 sm:p-5 md:p-6 border border-gray-100">
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 flex items-center gap-2">
                      <NotificationsIcon className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600" />
                      Recent Notifications
                    </h3>
                    <button className="text-xs sm:text-sm text-amber-600 hover:text-purple-600 flex items-center gap-1">
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

              {/* Right Column - Sponsorship Status */}
              <div className="space-y-4 sm:space-y-5">
                {/* Sponsorship Tier Card */}
                <div className="bg-white rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg p-4 sm:p-5 md:p-6 border border-gray-100">
                  <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 mb-3 sm:mb-4 flex items-center gap-2">
                    <DiamondIcon className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600" />
                    Sponsorship Status
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-xs sm:text-sm text-gray-600">Tier</span>
                      <span className="text-xs sm:text-sm font-semibold text-gray-800 bg-gradient-to-r from-blue-900 via-blue-600 to-purple-900  bg-clip-text text-transparent">Platinum</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs sm:text-sm text-gray-600">Status</span>
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                        Active
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs sm:text-sm text-gray-600">Contract Signed</span>
                      <span className="text-xs sm:text-sm text-gray-800">Jan 15, 2026</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs sm:text-sm text-gray-600">Payment Status</span>
                      <span className="text-xs sm:text-sm text-gray-800">50% Paid</span>
                    </div>
                  </div>
                  <button className="w-full mt-4 text-xs sm:text-sm bg-gradient-to-r from-blue-900 via-blue-600 to-purple-900  text-white px-3 py-2 rounded-lg hover:from-amber-600 hover:to-purple-700 transition-all">
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
                      Upcoming Sponsor Events
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
                        <span className={`text-xs px-2 py-0.5 rounded-full ${
                          event.type === "Mandatory" ? "bg-amber-100 text-amber-800" :
                          event.type === "Exclusive" ? "bg-purple-100 text-purple-800" :
                          "bg-gray-100 text-gray-800"
                        }`}>
                          {event.type}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
          </div>
        )}

        {/* SPONSOR PROFILE TAB */}
        {activeTab === "profile" && (
          <div className="max-w-7xl mx-auto animate-fadeIn">
            <div className="bg-white rounded-xl sm:rounded-2xl md:rounded-3xl shadow-lg sm:shadow-xl overflow-hidden border border-gray-100">
              {/* Profile Header with Gold/Purple Theme */}
              <div className="bg-gradient-to-r from-blue-900 via-blue-600 to-purple-900 px-4 sm:px-5 md:px-6 lg:px-8 py-4 sm:py-5 md:py-6">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white flex items-center gap-2">
                  <PersonIcon className="w-5 h-5 sm:w-6 sm:h-6 text-amber-300" />
                  Sponsor Profile
                </h2>
                <p className="text-amber-100 text-xs sm:text-sm mt-0.5 sm:mt-1">
                  Manage your company and branding information
                </p>
              </div>

              <form className="p-4 sm:p-5 md:p-6 lg:p-8 space-y-4 sm:space-y-5 md:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
                  <div className="space-y-1 sm:space-y-2">
                    <label className="block text-xs sm:text-sm font-medium text-gray-700">
                      Company Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      defaultValue="PharmaCorp International"
                      className="w-full border border-gray-300 rounded-lg sm:rounded-xl p-2 sm:p-2.5 md:p-3 text-xs sm:text-sm focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-1 sm:space-y-2">
                    <label className="block text-xs sm:text-sm font-medium text-gray-700">
                      Commercial Registration No.
                    </label>
                    <input
                      type="text"
                      defaultValue="CR-2024-78901"
                      className="w-full border border-gray-300 rounded-lg sm:rounded-xl p-2 sm:p-2.5 md:p-3 text-xs sm:text-sm focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-1 sm:space-y-2">
                    <label className="block text-xs sm:text-sm font-medium text-gray-700">
                      VAT Number
                    </label>
                    <input
                      type="text"
                      defaultValue="VAT-123456789"
                      className="w-full border border-gray-300 rounded-lg sm:rounded-xl p-2 sm:p-2.5 md:p-3 text-xs sm:text-sm focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-1 sm:space-y-2">
                    <label className="block text-xs sm:text-sm font-medium text-gray-700">
                      Contact Person
                    </label>
                    <input
                      type="text"
                      defaultValue="Mohammed Al-Otaibi"
                      className="w-full border border-gray-300 rounded-lg sm:rounded-xl p-2 sm:p-2.5 md:p-3 text-xs sm:text-sm focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-1 sm:space-y-2">
                    <label className="block text-xs sm:text-sm font-medium text-gray-700">
                      Email Address
                    </label>
                    <input
                      type="email"
                      defaultValue="sponsor@pharmacorp.com"
                      className="w-full border border-gray-300 rounded-lg sm:rounded-xl p-2 sm:p-2.5 md:p-3 text-xs sm:text-sm focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-1 sm:space-y-2">
                    <label className="block text-xs sm:text-sm font-medium text-gray-700">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      defaultValue="+966 55 987 6543"
                      className="w-full border border-gray-300 rounded-lg sm:rounded-xl p-2 sm:p-2.5 md:p-3 text-xs sm:text-sm focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1 sm:space-y-2">
                  <label className="block text-xs sm:text-sm font-medium text-gray-700">
                    Company Description
                  </label>
                  <textarea
                    rows="3"
                    defaultValue="Leading pharmaceutical and healthcare company in the Middle East, specializing in innovative medical solutions and research partnerships."
                    className="w-full border border-gray-300 rounded-lg sm:rounded-xl p-2 sm:p-2.5 md:p-3 text-xs sm:text-sm focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all resize-none"
                  ></textarea>
                </div>

                {/* Branding Information Section */}
                <div className="rounded-xl p-4 sm:p-5">
                  <h3 className="text-sm sm:text-base font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <StarIcon className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600" />
                    Branding Information
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="block text-xs sm:text-sm font-medium text-gray-700">
                        Upload Company Logo
                      </label>
                      <div className="flex items-center gap-3">
                        <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-purple-100 rounded-lg flex items-center justify-center border-2 border-amber-300">
                          <span className="text-xl font-bold text-amber-700">P</span>
                        </div>
                        <input
                          type="file"
                          accept="image/*"
                          className="text-xs sm:text-sm text-gray-500 file:mr-2 file:py-1 file:px-3 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-amber-50 file:text-amber-700 hover:file:bg-amber-100"
                        />
                      </div>
                    </div>
                  
                  </div>
                </div>

                <div className="flex items-start gap-2 p-3 sm:p-4 bg-gray-50 rounded-lg sm:rounded-xl">
                  <input
                    type="checkbox"
                    id="pdpl"
                    className="rounded text-amber-600 mt-0.5 flex-shrink-0"
                    defaultChecked
                  />
                  <label htmlFor="pdpl" className="text-xs sm:text-sm text-gray-600">
                    I confirm that all branding materials comply with event guidelines
                  </label>
                </div>

                <div className="flex gap-3 sm:gap-4">
                  <button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-blue-900 via-blue-600 to-purple-900  text-white px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium hover:from-amber-600 hover:to-purple-700 transition-all transform hover:scale-[1.02] shadow-md sm:shadow-lg"
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

        {/* SPONSORSHIP PACKAGE TAB */}
        {activeTab === "package" && (
          <div className="animate-fadeIn">
            <div className="bg-white rounded-xl sm:rounded-2xl md:rounded-3xl shadow-lg sm:shadow-xl overflow-hidden border border-gray-100">
              <div className="bg-gradient-to-r from-blue-900 via-blue-600 to-purple-900 px-4 sm:px-5 md:px-6 lg:px-8 py-4 sm:py-5 md:py-6">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white flex items-center gap-2">
                  <DiamondIcon className="w-5 h-5 sm:w-6 sm:h-6 text-amber-300" />
                  Sponsorship Package Details
                </h2>
                <p className="text-amber-100 text-xs sm:text-sm mt-0.5 sm:mt-1">
                  Platinum Tier - Premium Partnership Benefits
                </p>
              </div>

              <div className="p-4 sm:p-5 md:p-6 lg:p-8">
                {/* Package Header */}
                <div className="bg-gradient-to-r from-amber-50 to-purple-50 rounded-xl p-4 sm:p-5 md:p-6 mb-6 border border-amber-200">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 flex items-center gap-2">
                        <AwardIcon className="w-5 h-5 sm:w-6 sm:h-6 text-amber-500" />
                        Platinum Sponsorship
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 mt-1">Premium Partner Package • SAR 250,000</p>
                    </div>
                    <div className="bg-white px-3 py-1.5 rounded-full border border-amber-300">
                      <span className="text-xs sm:text-sm font-medium text-amber-700">Active until Dec 2026</span>
                    </div>
                  </div>
                </div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                  {sponsorshipBenefits.map((section, idx) => (
                    <div key={idx} className="bg-gray-50 rounded-xl p-4 sm:p-5">
                      <h4 className="text-sm sm:text-base font-semibold text-gray-800 mb-3 flex items-center gap-2">
                        <GiftIcon className={`w-4 h-4 sm:w-5 sm:h-5 ${
                          idx === 0 ? "text-amber-600" :
                          idx === 1 ? "text-purple-600" :
                          idx === 2 ? "text-emerald-600" : "text-blue-600"
                        }`} />
                        {section.category}
                      </h4>
                      <ul className="space-y-2">
                        {section.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircleIcon className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                            <span className="text-xs sm:text-sm text-gray-600">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Package Documents */}
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Button
                    variant="contained"
                    className="!bg-gradient-to-r !from-amber-500 !to-purple-600 !px-4 !py-3 !rounded-lg !text-xs sm:!text-sm !font-medium !normal-case"
                    startIcon={<DownloadIcon className="w-4 h-4" />}
                  >
                    Download Sponsorship Brochure
                  </Button>
                  <Button
                    variant="outlined"
                    className="!border-amber-300 !text-amber-700 !px-4 !py-3 !rounded-lg !text-xs sm:!text-sm !font-medium !normal-case hover:!bg-amber-50"
                    startIcon={<MenuBookIcon className="w-4 h-4" />}
                  >
                    View Benefits Details
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* EVENT INFORMATION TAB */}
        {activeTab === "events" && (
          <div className="animate-fadeIn">
            <div className="bg-white rounded-xl sm:rounded-2xl md:rounded-3xl shadow-lg sm:shadow-xl overflow-hidden border border-gray-100">
              <div className="bg-gradient-to-r from-blue-900 via-blue-600 to-purple-900 px-4 sm:px-5 md:px-6 lg:px-8 py-4 sm:py-5 md:py-6">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white flex items-center gap-2">
                  <EventIcon className="w-5 h-5 sm:w-6 sm:h-6 text-amber-300" />
                  Event Information
                </h2>
                <p className="text-amber-100 text-xs sm:text-sm mt-0.5 sm:mt-1">
                  Global Health Exhibition 2026 - Sponsor Information
                </p>
              </div>

              <div className="p-4 sm:p-5 md:p-6 lg:p-8">
                {/* Event Overview */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-6">
                  <div className="lg:col-span-2 space-y-4">
                    <div className="bg-gray-50 rounded-xl p-4 sm:p-5">
                      <h3 className="text-sm sm:text-base font-semibold text-gray-800 mb-3">Event Details</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <p className="text-xs text-gray-500">Event Name</p>
                          <p className="text-sm font-medium text-gray-800">Global Health Exhibition 2026</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Dates</p>
                          <p className="text-sm font-medium text-gray-800">March 12-14, 2026</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Venue</p>
                          <p className="text-sm font-medium text-gray-800">Riyadh International Convention Center</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Expected Attendance</p>
                          <p className="text-sm font-medium text-gray-800">15,000+ Healthcare Professionals</p>
                        </div>
                      </div>
                    </div>

                    {/* Schedule */}
                    <div className="bg-gray-50 rounded-xl p-4 sm:p-5">
                      <h3 className="text-sm sm:text-base font-semibold text-gray-800 mb-3 flex items-center gap-2">
                        <ScheduleIcon className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600" />
                        Event Schedule
                      </h3>
                      <div className="space-y-3">
                        {[
                          { day: "Day 1 - March 12", events: "Opening Ceremony, Keynote Sessions, Exhibition Opens" },
                          { day: "Day 2 - March 13", events: "Scientific Sessions, Workshops, Networking Reception" },
                          { day: "Day 3 - March 14", events: "Panel Discussions, Award Ceremony, Closing" },
                        ].map((day, i) => (
                          <div key={i} className="p-3 bg-white rounded-lg">
                            <p className="text-xs font-semibold text-amber-700">{day.day}</p>
                            <p className="text-xs text-gray-600 mt-1">{day.events}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Important Dates */}
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-amber-50 to-purple-50 rounded-xl p-4 border border-amber-200">
                      <h4 className="text-xs sm:text-sm font-semibold text-gray-800 mb-3">Important Dates for Sponsors</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-gray-600">Logo Submission</span>
                          <span className="text-xs font-medium text-amber-700">Feb 20, 2026</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-gray-600">Sponsor Briefing</span>
                          <span className="text-xs font-medium text-amber-700">March 10, 2026</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-gray-600">Booth Setup</span>
                          <span className="text-xs font-medium text-amber-700">March 11, 2026</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-gray-600">Final Payment</span>
                          <span className="text-xs font-medium text-amber-700">Feb 15, 2026</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-4">
                      <h4 className="text-xs sm:text-sm font-semibold text-gray-800 mb-2">Venue Information</h4>
                      <p className="text-xs text-gray-600 mb-2">Riyadh International Convention Center</p>
                      <p className="text-xs text-gray-500">King Abdullah Road, Riyadh, Saudi Arabia</p>
                      <button className="mt-3 text-xs text-amber-600 hover:text-purple-600 flex items-center gap-1">
                        <LocationIcon className="w-3 h-3" /> View on Map
                      </button>
                    </div>
                  </div>
                </div>

                {/* Download Materials */}
                <div className="flex flex-wrap gap-3 justify-center mt-4">
                  <Button
                    variant="contained"
                    className="!bg-gradient-to-r !from-amber-500 !to-purple-600 !px-4 !py-2.5 !rounded-lg !text-xs sm:!text-sm !font-medium !normal-case"
                    startIcon={<DownloadIcon className="w-4 h-4" />}
                  >
                    Download Event Brochure
                  </Button>
                  <Button
                    variant="outlined"
                    className="!border-amber-300 !text-amber-700 !px-4 !py-2.5 !rounded-lg !text-xs sm:!text-sm !font-medium !normal-case"
                  >
                    Sponsor Guidelines PDF
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SUPPORT TAB */}
        {activeTab === "support" && (
          <div className="max-w-7xl mx-auto animate-fadeIn">
            <div className="bg-white rounded-xl sm:rounded-2xl md:rounded-3xl shadow-lg sm:shadow-xl overflow-hidden border border-gray-100">
              <div className="bg-gradient-to-r from-blue-900 via-blue-600 to-purple-900 px-4 sm:px-5 md:px-6 lg:px-8 py-4 sm:py-5 md:py-6">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white flex items-center gap-2">
                  <SupportIcon className="w-5 h-5 sm:w-6 sm:h-6 text-amber-300" />
                  Sponsor Support Desk
                </h2>
                <p className="text-amber-100 text-xs sm:text-sm mt-0.5 sm:mt-1">
                  Dedicated support for our sponsors
                </p>
              </div>

              <div className="p-4 sm:p-5 md:p-6 lg:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
                  <div className="lg:col-span-2 space-y-4">
                    {/* Contact Form */}
                    <div className="bg-gray-50 rounded-xl p-4 sm:p-5">
                      <h3 className="text-sm sm:text-base font-semibold text-gray-800 mb-3">Contact Sponsor Relations</h3>
                      <form className="space-y-3">
                        <div>
                          <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                            Subject
                          </label>
                          <select className="w-full border border-gray-300 rounded-lg p-2 sm:p-2.5 text-xs sm:text-sm focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none">
                            <option>Branding & Marketing</option>
                            <option>Sponsorship Benefits</option>
                            <option>Event Logistics</option>
                            <option>Payment Inquiry</option>
                            <option>VIP Arrangements</option>
                            <option>Other</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                            Message
                          </label>
                          <textarea
                            rows="4"
                            placeholder="Describe your request or question..."
                            className="w-full border border-gray-300 rounded-lg p-2 sm:p-2.5 text-xs sm:text-sm focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none resize-none"
                          ></textarea>
                        </div>
                        <div>
                          <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                            Priority Level
                          </label>
                          <div className="flex gap-3">
                            <label className="flex items-center gap-1">
                              <input type="radio" name="priority" className="text-amber-600" defaultChecked /> 
                              <span className="text-xs text-gray-600">Normal</span>
                            </label>
                            <label className="flex items-center gap-1">
                              <input type="radio" name="priority" className="text-amber-600" /> 
                              <span className="text-xs text-gray-600">High</span>
                            </label>
                            <label className="flex items-center gap-1">
                              <input type="radio" name="priority" className="text-amber-600" /> 
                              <span className="text-xs text-gray-600">Urgent</span>
                            </label>
                          </div>
                        </div>
                        <button
                          type="submit"
                          className="w-full bg-gradient-to-r from-blue-900 via-blue-600 to-purple-900  text-white px-4 py-2.5 rounded-lg text-xs sm:text-sm font-medium hover:from-amber-600 hover:to-purple-700 transition-all"
                        >
                          Submit Request
                        </button>
                      </form>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {/* Priority Support Card */}
                    <div className="bg-gradient-to-r from-blue-900 via-blue-600 to-purple-900  rounded-xl p-4 text-white">
                      <h4 className="text-sm font-semibold mb-2 flex items-center gap-2">
                        <StarIcon className="w-4 h-4" />
                        Priority Support Line
                      </h4>
                      <p className="text-2xl font-bold mb-1">+966 55 888 9999</p>
                      <p className="text-xs text-amber-100">24/7 Dedicated Sponsor Hotline</p>
                    </div>

                    {/* Contact Info */}
                    <div className="bg-gray-50 rounded-xl p-4">
                      <h4 className="text-xs sm:text-sm font-semibold text-gray-800 mb-3">Sponsor Relations Team</h4>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-amber-600" />
                          <span className="text-xs text-gray-600">sponsors@medconfksa.com</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-purple-600" />
                          <span className="text-xs text-gray-600">+966 11 234 5678</span>
                        </div>
                      </div>
                    </div>

                    {/* Office Hours */}
                    <div className="bg-gray-50 rounded-xl p-4">
                      <h4 className="text-xs sm:text-sm font-semibold text-gray-800 mb-2">Office Hours</h4>
                      <div className="space-y-1 text-xs">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Sat - Thu</span>
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

                    {/* FAQ Link */}
                    <div className="bg-gray-50 rounded-xl p-4 text-center">
                      <HelpIcon className="w-5 h-5 text-amber-600 mx-auto mb-2" />
                      <p className="text-xs text-gray-600 mb-2">Check our sponsor FAQ</p>
                      <button className="text-xs text-amber-600 hover:text-purple-600">
                        View FAQ →
                      </button>
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
      `}</style>
    </div>
  );
};

export default SponsorPortal;
