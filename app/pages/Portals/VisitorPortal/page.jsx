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
  Event as EventIcon,
  LocationOn as LocationIcon,
  SupportAgent as SupportIcon,
  Notifications as NotificationsIcon,
  MenuBook as MenuBookIcon,
  QrCode as QrCodeIcon,
  Schedule as ScheduleIcon,
  Help as HelpIcon,
  Phone,
  Mail,
  Headphones,
  QrCodeScanner as QrCodeScannerIcon,
} from "@mui/icons-material";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import { ChevronDown } from "lucide-react";
import BreadCrumb from "../../../Components/BreadCrum";

const VisitorPortal = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [openIndex, setOpenIndex] = useState(null);

  const tabs = [
    { id: "dashboard", label: "Dashboard", icon: DashboardIcon },
    { id: "ticket", label: "E-Ticket", icon: QrCodeIcon },
    { id: "profile", label: "Profile", icon: PersonIcon },
    { id: "schedule", label: "Event Schedule", icon: ScheduleIcon },
    { id: "floorplan", label: "Floor Plan", icon: MapIcon },
    { id: "documents", label: "Documents", icon: MenuBookIcon },
    { id: "support", label: "Support", icon: SupportIcon },
  ];

  // Dashboard stats data
  const statsData = [
    {
      title: "Event",
      value: "Global Health 2026",
      sub: "March 12-14, 2026",
      icon: EventIcon,
    },
    {
      title: "Registration",
      value: "Confirmed",
      sub: "E-Ticket Ready",
      icon: HowToRegIcon,
    },
    {
      title: "Access",
      value: "All Areas Access",
      sub: "VIP Pass",
      icon: VpnKeyIcon,
    },
    {
      title: "Days Until Event",
      value: "12 Days",
      sub: "March 12, 2026",
      icon: CalendarIcon,
    },
  ];

  // Notifications
  const notifications = [
    {
      id: 1,
      title: "Event reminder",
      message: "Global Health Exhibition starts in 12 days",
      time: "1 day ago",
    },
    {
      id: 2,
      title: "Schedule update",
      message: "Keynote speech rescheduled to 10:30 AM",
      time: "3 days ago",
    },
    {
      id: 3,
      title: "New workshop added",
      message: "AI in Healthcare workshop now available",
      time: "5 days ago",
    },
  ];

  // Event Schedule
  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const schedule = [
    {
      day: "Day 1 - March 12, 2026",
      events: [
        { time: "09:00 - 10:00", title: "Registration & Welcome Coffee", location: "Main Lobby" },
        { time: "10:00 - 11:30", title: "Opening Ceremony & Keynote: Vision 2030 in Healthcare", location: "Main Hall" },
        { time: "11:30 - 13:00", title: "Exhibition Tour", location: "Exhibition Hall" },
        { time: "13:00 - 14:00", title: "Networking Lunch", location: "Dining Area" },
        { time: "14:00 - 15:30", title: "Panel: Digital Health Transformation", location: "Conference Room A" },
        { time: "15:30 - 17:00", title: "Workshop: AI in Diagnostics", location: "Workshop Room 1" },
      ],
    },
    {
      day: "Day 2 - March 13, 2026",
      events: [
        { time: "09:00 - 10:30", title: "Keynote: Future of Medical Education", location: "Main Hall" },
        { time: "10:30 - 12:00", title: "Live Clinical Workshops", location: "Workshop Rooms" },
        { time: "12:00 - 13:30", title: "Exhibition & Product Demos", location: "Exhibition Hall" },
        { time: "13:30 - 15:00", title: "Panel: Healthcare Innovation in KSA", location: "Conference Room B" },
        { time: "15:00 - 17:00", title: "Networking Reception", location: "VIP Lounge" },
      ],
    },
    {
      day: "Day 3 - March 14, 2026",
      events: [
        { time: "09:00 - 10:30", title: "Workshop: Patient Safety Standards", location: "Workshop Room 2" },
        { time: "10:30 - 12:00", title: "Panel: Public Health Strategies", location: "Conference Room A" },
        { time: "12:00 - 14:00", title: "Lunch & Exhibition", location: "Exhibition Hall" },
        { time: "14:00 - 15:30", title: "Closing Keynote", location: "Main Hall" },
        { time: "15:30 - 17:00", title: "Award Ceremony & Closing Remarks", location: "Main Hall" },
      ],
    },
  ];

  // Documents/Brochures
  const documents = [
    {
      category: "Event Brochures",
      items: [
        { name: "Global Health Exhibition 2026 - Full Brochure", size: "5.2 MB", type: "PDF" },
        { name: "Sponsor & Exhibitor Directory", size: "3.8 MB", type: "PDF" },
        { name: "Event Floor Plan Map", size: "1.5 MB", type: "PDF" },
      ],
    },
    {
      category: "Scientific Program",
      items: [
        { name: "Conference Agenda - Full Schedule", size: "2.1 MB", type: "PDF" },
        { name: "Abstract Book", size: "8.7 MB", type: "PDF" },
        { name: "Workshop Descriptions", size: "1.2 MB", type: "PDF" },
      ],
    },
    {
      category: "Visitor Information",
      items: [
        { name: "Venue Guide & Transportation", size: "3.4 MB", type: "PDF" },
        { name: "Hotel & Accommodation Guide", size: "2.8 MB", type: "PDF" },
        { name: "Riyadh City Guide", size: "4.1 MB", type: "PDF" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <BreadCrumb
        title="Visitor Portal"
        backgroundImage="/Images/Home/Bread-crum-1.avif"
        path={[{label:"Portals", href:'/pages/NavBar-Links/NavPortals'},{label:"Visitor Portal"}]}
      />

      {/* Tabs Section - Using your specified colors */}
      <div className="sticky top-0 sm:top-4 z-10 max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 mb-4 sm:mb-6 md:mb-8">
        <div className="bg-white/80 backdrop-blur-xl rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl p-1.5 sm:p-2 flex flex-wrap gap-1 sm:gap-2 justify-between border border-gray-200">
          {tabs.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`flex items-center gap-1 sm:gap-2 px-2 sm:px-3 md:px-4 lg:px-5 py-2 sm:py-2.5 md:py-3 rounded-lg sm:rounded-xl font-medium transition-all duration-300 flex-1 sm:flex-auto justify-center ${
                activeTab === id
                  ? "bg-gradient-to-r from-blue-900 via-blue-600 to-purple-900 text-white shadow-md sm:shadow-lg scale-95 sm:scale-90"
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
            {/* Stats Cards */}
            <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
              {statsData.map((card, i) => {
                const Icon = card.icon;
                return (
                  <div
                    key={i}
                    className="group relative bg-white rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden border border-gray-100"
                  >
                    <div
                      className={`absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br from-blue-900 via-blue-600 to-purple-900 opacity-10 rounded-bl-full transition-all group-hover:opacity-20`}
                    ></div>
                    <div className="relative p-3 sm:p-4 md:p-5 lg:p-6">
                      <div className="flex items-center justify-between mb-1 sm:mb-2 md:mb-3">
                        <p className="text-xs sm:text-sm text-gray-500 font-medium truncate pr-2">
                          {card.title}
                        </p>
                        <Icon className={`w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-blue-600 flex-shrink-0`} />
                      </div>
                      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 break-words">
                        {card.value}
                      </h2>
                      {card.sub && (
                        <p className="text-xs sm:text-sm text-gray-400 mt-1 sm:mt-2 flex items-center">
                          <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mr-1 sm:mr-2 flex-shrink-0"></span>
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
              {/* Left Column - Notifications */}
              <div className="lg:col-span-2 space-y-4">
                <div className="bg-white rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg p-4 sm:p-5 md:p-6 border border-gray-100">
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 flex items-center gap-2">
                      <NotificationsIcon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                      Recent Updates
                    </h3>
                    <button className="text-xs sm:text-sm text-blue-600 hover:text-purple-600 flex items-center gap-1">
                      View all <ChevronDown className="w-3 h-3 rotate-270" />
                    </button>
                  </div>
                  <div className="space-y-2 sm:space-y-3">
                    {notifications.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-start gap-3 p-2 sm:p-3 hover:bg-gray-50 rounded-lg transition-all border-b border-gray-100 last:border-0"
                      >
                        <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 flex items-center justify-center flex-shrink-0">
                          <NotificationsIcon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
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
                    ))}
                  </div>
                </div>

                {/* Quick Links */}
                <div className="bg-white rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg p-4 sm:p-5 md:p-6 border border-gray-100">
                  <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 mb-3">Quick Links</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    <button className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all text-center">
                      <EventIcon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mx-auto mb-1" />
                      <span className="text-xs text-gray-600">Schedule</span>
                    </button>
                    <button className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all text-center">
                      <MapIcon className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 mx-auto mb-1" />
                      <span className="text-xs text-gray-600">Floor Plan</span>
                    </button>
                    <button className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all text-center">
                      <QrCodeIcon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mx-auto mb-1" />
                      <span className="text-xs text-gray-600">My Ticket</span>
                    </button>
                    <button className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all text-center">
                      <SupportIcon className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 mx-auto mb-1" />
                      <span className="text-xs text-gray-600">Support</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Column - Next Event */}
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-blue-900 via-blue-600 to-purple-900 rounded-xl p-4 text-white">
                  <h3 className="text-sm font-semibold mb-2">Next Session</h3>
                  <p className="text-lg font-bold">Opening Ceremony</p>
                  <p className="text-xs text-blue-100 mt-1">Today at 10:00 AM</p>
                  <p className="text-xs text-blue-100">Main Hall</p>
                  <button className="mt-3 text-xs bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-lg hover:bg-white/30 transition-all">
                    Add to Calendar
                  </button>
                </div>

                <div className="bg-white rounded-xl shadow-md p-4 border border-gray-100">
                  <h3 className="text-sm font-semibold text-gray-800 mb-2">Event Progress</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-600">Days until event</span>
                      <span className="font-medium text-gray-800">12 days</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* E-TICKET TAB */}
        {activeTab === "ticket" && (
          <div className="max-w-6xl mx-auto animate-fadeIn">
            <div className="bg-white rounded-xl sm:rounded-2xl md:rounded-3xl shadow-lg sm:shadow-xl md:shadow-2xl overflow-hidden border border-gray-100">
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-900 via-blue-600 to-purple-900 px-4 sm:px-5 md:px-6 lg:px-8 py-4 sm:py-5 md:py-6">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white flex items-center gap-2">
                  <QrCodeScannerIcon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-200" />
                  Your Digital E-Ticket
                </h2>
                <p className="text-blue-100 text-xs sm:text-sm mt-0.5 sm:mt-1">
                  Present this QR code at the entrance for seamless access
                </p>
              </div>
              
              {/* Body */}
              <div className="p-4 sm:p-5 md:p-6 lg:p-8 xl:p-10 bg-gradient-to-b from-white to-gray-50">
                {/* Ticket Card */}
                <div className="relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 border-2 border-gray-200 shadow-md mb-4 sm:mb-5 md:mb-6 lg:mb-8">
                  {/* Decorative Side Line */}
                  <div className="absolute left-0 top-0 h-full w-1.5 sm:w-2 bg-gradient-to-b from-blue-900 via-blue-600 to-purple-900 rounded-l-xl sm:rounded-l-2xl"></div>

                  <div className="ml-3 sm:ml-4 md:ml-5">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
                      <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900">
                        Global Health Exhibition 2026
                      </h3>
                      <span className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                        VIP Pass
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                      <div className="space-y-3">
                        <div>
                          <p className="text-xs text-gray-500">Name</p>
                          <p className="text-sm sm:text-base font-semibold text-gray-900">John Doe</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Registration ID</p>
                          <p className="text-sm sm:text-base font-semibold text-gray-900">REG-2026-12345</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Ticket Type</p>
                          <p className="text-sm sm:text-base font-semibold text-gray-900">Full Access - All Days</p>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <p className="text-xs text-gray-500">Date</p>
                            <p className="text-sm font-semibold text-gray-900">March 12-14, 2026</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500">Venue</p>
                            <p className="text-sm font-semibold text-gray-900">RICC</p>
                          </div>
                        </div>
                      </div>

                      {/* QR Section */}
                      <div className="flex flex-col items-center justify-center border border-dashed border-gray-300 rounded-xl p-4 bg-gray-50">
                        <div className="w-full max-w-[180px] bg-white p-2 rounded-lg shadow-inner">
                          <img
                            src="/Images/QrCode-e-Ticket.png"
                            alt="QR Code"
                            className="h-auto w-full object-contain"
                          />
                        </div>
                        <p className="mt-3 text-xs text-gray-500 text-center">
                          Scan for entry verification
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <button className="flex-1 bg-gradient-to-r from-blue-900 via-blue-600 to-purple-900 text-white py-3 rounded-lg text-xs sm:text-sm font-medium shadow-md hover:shadow-lg transition hover:scale-[1.02]">
                    <DownloadIcon className="w-4 h-4 inline mr-2" />
                    Download PDF Ticket
                  </button>
                  <button className="flex-1 border border-blue-300 text-blue-700 py-3 rounded-lg text-xs sm:text-sm font-medium hover:bg-blue-50 transition">
                    <QrCodeIcon className="w-4 h-4 inline mr-2" />
                    Email Ticket
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* PROFILE TAB */}
        {activeTab === "profile" && (
          <div className="max-w-7xl mx-auto animate-fadeIn">
            <div className="bg-white rounded-xl sm:rounded-2xl md:rounded-3xl shadow-lg sm:shadow-xl overflow-hidden border border-gray-100">
              {/* Profile Header */}
              <div className="bg-gradient-to-r from-blue-900 via-blue-600 to-purple-900 px-4 sm:px-5 md:px-6 lg:px-8 py-4 sm:py-5 md:py-6">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white flex items-center gap-2">
                  <PersonIcon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-200" />
                  Visitor Profile
                </h2>
                <p className="text-blue-100 text-xs sm:text-sm mt-0.5 sm:mt-1">
                  Manage your personal information
                </p>
              </div>

              <form className="p-4 sm:p-5 md:p-6 lg:p-8 space-y-4 sm:space-y-5 md:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
                  <div className="space-y-1 sm:space-y-2">
                    <label className="block text-xs sm:text-sm font-medium text-gray-700">
                      Title
                    </label>
                    <select className="w-full border border-gray-300 rounded-lg sm:rounded-xl p-2 sm:p-2.5 md:p-3 text-xs sm:text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all">
                      <option value="Mr">Mr.</option>
                      <option value="Ms">Ms.</option>
                      <option value="Dr" selected>Dr.</option>
                      <option value="Prof">Prof.</option>
                    </select>
                  </div>

                  <div className="space-y-1 sm:space-y-2">
                    <label className="block text-xs sm:text-sm font-medium text-gray-700">
                      First Name
                    </label>
                    <input
                      type="text"
                      defaultValue="John"
                      className="w-full border border-gray-300 rounded-lg sm:rounded-xl p-2 sm:p-2.5 md:p-3 text-xs sm:text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-1 sm:space-y-2">
                    <label className="block text-xs sm:text-sm font-medium text-gray-700">
                      Last Name
                    </label>
                    <input
                      type="text"
                      defaultValue="Doe"
                      className="w-full border border-gray-300 rounded-lg sm:rounded-xl p-2 sm:p-2.5 md:p-3 text-xs sm:text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-1 sm:space-y-2">
                    <label className="block text-xs sm:text-sm font-medium text-gray-700">
                      Email Address
                    </label>
                    <input
                      type="email"
                      defaultValue="john.doe@example.com"
                      className="w-full border border-gray-300 rounded-lg sm:rounded-xl p-2 sm:p-2.5 md:p-3 text-xs sm:text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-1 sm:space-y-2">
                    <label className="block text-xs sm:text-sm font-medium text-gray-700">
                      Mobile Number
                    </label>
                    <input
                      type="tel"
                      defaultValue="+966 50 123 4567"
                      className="w-full border border-gray-300 rounded-lg sm:rounded-xl p-2 sm:p-2.5 md:p-3 text-xs sm:text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-1 sm:space-y-2">
                    <label className="block text-xs sm:text-sm font-medium text-gray-700">
                      Nationality
                    </label>
                    <select className="w-full border border-gray-300 rounded-lg sm:rounded-xl p-2 sm:p-2.5 md:p-3 text-xs sm:text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all">
                      <option value="SA" selected>Saudi Arabia</option>
                      <option value="AE">UAE</option>
                      <option value="US">United States</option>
                      <option value="UK">United Kingdom</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
                  <div className="space-y-1 sm:space-y-2">
                    <label className="block text-xs sm:text-sm font-medium text-gray-700">
                      Organization / Institution
                    </label>
                    <input
                      type="text"
                      defaultValue="King Faisal Specialist Hospital"
                      className="w-full border border-gray-300 rounded-lg sm:rounded-xl p-2 sm:p-2.5 md:p-3 text-xs sm:text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-1 sm:space-y-2">
                    <label className="block text-xs sm:text-sm font-medium text-gray-700">
                      Professional Role
                    </label>
                    <select className="w-full border border-gray-300 rounded-lg sm:rounded-xl p-2 sm:p-2.5 md:p-3 text-xs sm:text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all">
                      <option value="Physician" selected>Physician</option>
                      <option value="Pharmacist">Pharmacist</option>
                      <option value="Nurse">Nurse</option>
                      <option value="Researcher">Researcher</option>
                      <option value="Student">Student</option>
                      <option value="Other">Other</option>
                    </select>
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
                    className="flex-1 bg-gradient-to-r from-blue-900 via-blue-600 to-purple-900 text-white px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium hover:from-blue-800 hover:via-blue-700 hover:to-purple-800 transition-all transform hover:scale-[1.02] shadow-md sm:shadow-lg"
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

        {/* EVENT SCHEDULE TAB */}
        {activeTab === "schedule" && (
          <div className="animate-fadeIn">
            <div className="bg-white rounded-xl sm:rounded-2xl md:rounded-3xl shadow-lg sm:shadow-xl overflow-hidden border border-gray-100">
              <div className="bg-gradient-to-r from-blue-900 via-blue-600 to-purple-900 px-4 sm:px-5 md:px-6 lg:px-8 py-4 sm:py-5 md:py-6">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white flex items-center gap-2">
                  <ScheduleIcon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-200" />
                  Event Schedule
                </h2>
                <p className="text-blue-100 text-xs sm:text-sm mt-0.5 sm:mt-1">
                  Global Health Exhibition 2026 - Full Program
                </p>
              </div>

              <div className="p-4 sm:p-5 md:p-6 lg:p-8">
                <div className="max-w-4xl mx-auto space-y-3 sm:space-y-4">
                  {schedule.map((item, index) => {
                    const isOpen = openIndex === index;

                    return (
                      <div
                        key={index}
                        className="bg-white rounded-lg sm:rounded-xl shadow border border-gray-200 overflow-hidden"
                      >
                        {/* Header */}
                        <button
                          onClick={() => toggle(index)}
                          className="w-full flex justify-between items-center p-3 sm:p-4 md:p-5 text-left font-semibold text-sm sm:text-base md:text-lg hover:bg-gray-50 transition"
                        >
                          <span className="truncate pr-2">{item.day}</span>
                          <ChevronDown
                            className={`w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 transition-transform duration-300 ${
                              isOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        {/* Content */}
                        {isOpen && (
                          <div className="p-3 sm:p-4 md:p-5 border-t border-gray-200">
                            <ul className="space-y-2 sm:space-y-3">
                              {item.events.map((event, i) => (
                                <li key={i} className="bg-gray-50 p-3 rounded-lg">
                                  <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                                    <span className="text-xs font-semibold text-blue-700 min-w-[120px]">
                                      {event.time}
                                    </span>
                                    <span className="text-xs sm:text-sm text-gray-800 flex-1">
                                      {event.title}
                                    </span>
                                    <span className="text-xs text-gray-500 flex items-center gap-1">
                                      <LocationIcon className="w-3 h-3" />
                                      {event.location}
                                    </span>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                <div className="mt-6 text-center">
                  <button className="bg-gradient-to-r from-blue-900 via-blue-600 to-purple-900 text-white px-6 py-2.5 rounded-lg text-xs sm:text-sm font-medium shadow-md hover:shadow-lg transition">
                    <DownloadIcon className="w-4 h-4 inline mr-2" />
                    Download Full Schedule
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* FLOOR PLAN TAB */}
        {activeTab === "floorplan" && (
          <div className="animate-fadeIn">
            <div className="bg-white rounded-xl sm:rounded-2xl md:rounded-3xl shadow-lg sm:shadow-xl overflow-hidden border border-gray-100">
              <div className="bg-gradient-to-r from-blue-900 via-blue-600 to-purple-900 px-4 sm:px-5 md:px-6 lg:px-8 py-4 sm:py-5 md:py-6">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white flex items-center gap-2">
                  <MapIcon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-200" />
                  Exhibition Floor Plan
                </h2>
                <p className="text-blue-100 text-xs sm:text-sm mt-0.5 sm:mt-1">
                  Navigate the exhibition hall and find booths
                </p>
              </div>

              <div className="p-4 sm:p-5 md:p-6 lg:p-8">
                <div className="bg-gray-50 rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-5 lg:p-6 border border-dashed border-gray-200">
                  <div className="space-y-3 sm:space-y-4">
                    <img
                      src="/Images/exhibition-floor-plan.webp"
                      alt="Exhibition Floor Plan"
                      className="object-cover h-auto w-full shadow-md rounded-lg sm:rounded-xl"
                    />
                    <img
                      src="/Images/taqeem-exhibition-booth-designs-1024x602.jpg"
                      alt="Booth Layout"
                      className="object-cover h-auto w-full shadow-md rounded-lg sm:rounded-xl"
                    />
                  </div>

                  {/* Legend */}
                  <div className="mt-4 sm:mt-5 md:mt-6 p-3 sm:p-4 bg-white rounded-lg border border-gray-200">
                    <h4 className="text-xs sm:text-sm font-semibold text-gray-800 mb-2">Floor Plan Legend</h4>
                    <div className="flex flex-wrap gap-3 sm:gap-4">
                      <div className="flex items-center gap-1">
                        <div className="w-3 h-3 bg-green-500 rounded-sm"></div>
                        <span className="text-xs text-gray-600">Exhibitors</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-3 h-3 bg-blue-500 rounded-sm"></div>
                        <span className="text-xs text-gray-600">Sponsors</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-3 h-3 bg-purple-500 rounded-sm"></div>
                        <span className="text-xs text-gray-600">VIP Area</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-3 h-3 bg-amber-500 rounded-sm"></div>
                        <span className="text-xs text-gray-600">Food & Beverage</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-3 h-3 bg-gray-500 rounded-sm"></div>
                        <span className="text-xs text-gray-600">Restrooms</span>
                      </div>
                    </div>
                  </div>

                  <div className="text-center mt-4">
                    <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
                      <Button
                        variant="contained"
                        className="!bg-gradient-to-r !from-blue-900 !via-blue-600 !to-purple-900 !rounded-full !px-3 sm:!px-4 md:!px-5 !text-xs sm:!text-sm !py-1.5 sm:!py-2 !shadow-md hover:!shadow-lg !normal-case"
                      >
                        <DownloadIcon className="w-3 h-3 mr-1" />
                        Download PDF Map
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* DOCUMENTS & BROCHURES TAB */}
        {activeTab === "documents" && (
          <div className="animate-fadeIn">
            <div className="bg-white rounded-xl sm:rounded-2xl md:rounded-3xl shadow-lg sm:shadow-xl overflow-hidden border border-gray-100">
              <div className="bg-gradient-to-r from-blue-900 via-blue-600 to-purple-900 px-4 sm:px-5 md:px-6 lg:px-8 py-4 sm:py-5 md:py-6">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white flex items-center gap-2">
                  <MenuBookIcon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-200" />
                  Documents & Brochures
                </h2>
                <p className="text-blue-100 text-xs sm:text-sm mt-0.5 sm:mt-1">
                  Access event materials and resources
                </p>
              </div>

              <div className="p-4 sm:p-5 md:p-6 lg:p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
                  {documents.map((category, idx) => (
                    <div key={idx} className="bg-gray-50 rounded-xl p-4 sm:p-5">
                      <h3 className="text-sm sm:text-base font-semibold text-gray-800 mb-3">
                        {category.category}
                      </h3>
                      <ul className="space-y-2">
                        {category.items.map((doc, i) => (
                          <li key={i} className="p-2 bg-white rounded-lg hover:shadow-sm transition">
                            <div className="flex items-start justify-between gap-2">
                              <div className="flex-1 min-w-0">
                                <p className="text-xs font-medium text-gray-800 truncate">
                                  {doc.name}
                                </p>
                                <p className="text-xs text-gray-500 mt-0.5">
                                  {doc.size} • {doc.type}
                                </p>
                              </div>
                              <button className="text-blue-600 hover:text-purple-600 flex-shrink-0">
                                <DownloadIcon className="w-4 h-4" />
                              </button>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-100">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white rounded-full">
                      <HelpIcon className="w-4 h-4 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs sm:text-sm text-gray-700">
                        Need a specific document? Contact our support team.
                      </p>
                    </div>
                    <button className="text-xs bg-gradient-to-r from-blue-900 via-blue-600 to-purple-900 text-white px-3 py-1.5 rounded-lg">
                      Request
                    </button>
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
              <div className="bg-gradient-to-r from-blue-900 via-blue-600 to-purple-900 px-4 sm:px-5 md:px-6 lg:px-8 py-4 sm:py-5 md:py-6">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white flex items-center gap-2">
                  <SupportIcon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-200" />
                  Visitor Support Desk
                </h2>
                <p className="text-blue-100 text-xs sm:text-sm mt-0.5 sm:mt-1">
                  We're here to help with any questions
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
                            <option>Registration Inquiry</option>
                            <option>E-Ticket Issue</option>
                            <option>Event Information</option>
                            <option>Venue & Directions</option>
                            <option>Accommodation</option>
                            <option>Other</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                            Message
                          </label>
                          <textarea
                            rows="4"
                            placeholder="How can we help you?"
                            className="w-full border border-gray-300 rounded-lg p-2 sm:p-2.5 text-xs sm:text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
                          ></textarea>
                        </div>
                        <button
                          type="submit"
                          className="w-full bg-gradient-to-r from-blue-900 via-blue-600 to-purple-900 text-white px-4 py-2.5 rounded-lg text-xs sm:text-sm font-medium hover:from-blue-800 hover:via-blue-700 hover:to-purple-800 transition-all"
                        >
                          Submit Inquiry
                        </button>
                      </form>
                    </div>

                    {/* FAQ Preview */}
                    <div className="bg-gray-50 rounded-xl p-4 sm:p-5">
                      <h3 className="text-sm sm:text-base font-semibold text-gray-800 mb-3">Frequently Asked Questions</h3>
                      <div className="space-y-2">
                        {[
                          {
                            q: "How do I get my E-Ticket?",
                            a: "After registration, your E-Ticket is available in the E-Ticket tab above."
                          },
                          {
                            q: "What are the event timings?",
                            a: "Exhibition opens at 9:00 AM daily. Sessions run until 5:00 PM."
                          },
                          {
                            q: "Is parking available?",
                            a: "Yes, free parking is available at the venue."
                          },
                        ].map((faq, i) => (
                          <div key={i} className="p-3 bg-white rounded-lg">
                            <p className="text-xs font-medium text-gray-800">{faq.q}</p>
                            <p className="text-xs text-gray-600 mt-1">{faq.a}</p>
                          </div>
                        ))}
                      </div>
                      <button className="mt-3 text-xs text-blue-600 hover:text-purple-600">
                        View All FAQs →
                      </button>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {/* Emergency Contact */}
                    <div className="bg-gradient-to-r from-blue-900 via-blue-600 to-purple-900 rounded-xl p-4 text-white">
                      <h4 className="text-sm font-semibold mb-2 flex items-center gap-2">
                        <Headphones className="w-4 h-4" />
                        Visitor Helpline
                      </h4>
                      <p className="text-lg font-bold">+966 800 123 4567</p>
                      <p className="text-xs text-blue-100 mt-1">24/7 Support</p>
                    </div>

                    {/* Contact Info */}
                    <div className="bg-gray-50 rounded-xl p-4">
                      <h4 className="text-xs sm:text-sm font-semibold text-gray-800 mb-3">Contact Options</h4>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" />
                          <span className="text-xs text-gray-600">visitors@medconfksa.com</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-purple-600" />
                          <span className="text-xs text-gray-600">+966 11 234 5678</span>
                        </div>
                      </div>
                    </div>

                    {/* On-site Info */}
                    <div className="bg-gray-50 rounded-xl p-4">
                      <h4 className="text-xs sm:text-sm font-semibold text-gray-800 mb-2">On-site Support</h4>
                      <p className="text-xs text-gray-600 mb-2">Information desks located at:</p>
                      <ul className="text-xs text-gray-600 space-y-1 list-disc list-inside">
                        <li>Main Entrance</li>
                        <li>Hall A Lobby</li>
                        <li>Hall B Lobby</li>
                      </ul>
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

export default VisitorPortal;