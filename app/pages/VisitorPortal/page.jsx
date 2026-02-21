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
import HowToRegIcon from "@mui/icons-material/HowToReg";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import { ChevronDown } from "lucide-react";

const VisitorPortal = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isFormDirty, setIsFormDirty] = useState(false);

  const tabs = [
    { id: "dashboard", label: "Dashboard", icon: DashboardIcon },
    { id: "register", label: "Register", icon: PersonIcon },
    { id: "agenda", label: "Agenda", icon: MapIcon },
    { id: "live-Workshops", label: "Live Workshops", icon: CalendarIcon },
    { id: "e-Ticket", label: "E-Ticket", icon: ContractIcon },
  ];
  // dashboard cards data
  const statsData = [
    {
      title: "Event",
      value: "Global Health 2026",
      icon: InventoryIcon,
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Registeration",
      value: "Confirmed",
      icon: HowToRegIcon,
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Access",
      value: "Live Streaming Enabled",
      icon: VpnKeyIcon,
      color: "from-blue-500 to-blue-600",
    },
  ];

  // Agenda

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const agenda = [
    {
      day: "Day 1 - October 26, 2026",
      events: [
        "09:00 - Opening Ceremony",
        "10:30 - Keynote: Vision 2030 in Healthcare",
        "14:00 - Panel: Digital Health Transformation",
      ],
    },
    {
      day: "Day 2 - October 27, 2026",
      events: ["09:00 - Live Clinical Workshops", "13:00 - Exhibition Tour"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section*/}
      <div className="relative w-full bg-gradient-to-br from-blue-900 via-blue-600 to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          {/* Breadcrumb with enhanced styling */}
          <nav className="flex items-center space-x-2 text-sm text-blue-200 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              href="/portals"
              className="hover:text-white transition-colors"
            >
              Portals
            </Link>
            <span>/</span>
            <span className="text-white font-medium">Visitor Dashboard</span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
                Visitor Dashboard
              </h1>
              <p className="mt-3 text-lg text-blue-200 flex items-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                Welcome, John Doe | Global Health Exhibition 2026
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Section - Floating Design */}
      <div className="sticky top-4 z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 mb-8">
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl p-2 flex flex-wrap gap-2 justify-between border border-white/20">
          {tabs.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeTab === id
                  ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-500/25 scale-90"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900 hover:cursor-pointer"
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="hidden sm:inline">{label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {/* Dashboard Tab */}
        {activeTab === "dashboard" && (
          <div className="space-y-8 animate-fadeIn">
            {/* Stats Cards with Hover Effects */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-15 ">
              {statsData.map((card, i) => {
                const Icon = card.icon;
                return (
                  <div
                    key={i}
                    className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
                  >
                    <div
                      className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${card.color} opacity-10 rounded-bl-full transition-all group-hover:opacity-20`}
                    ></div>
                    <div className="relative p-6">
                      <div className="flex items-center justify-between mb-3">
                        <p className="text-gray-500 text-sm font-medium">
                          {card.title}
                        </p>
                        <Icon
                          className={`w-6 h-6 text-${card.color.split("-")[1]}-500`}
                        />
                      </div>
                      <h2 className="text-3xl font-bold text-gray-800">
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
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              {/* Profile Header */}
              <div className="bg-gradient-to-br from-blue-900 via-blue-600 to-purple-900 px-8 py-6">
                <h2 className="text-2xl font-bold text-white">
                  Visitor Registration
                </h2>
                <p className="text-blue-100 mt-1">
                  Add your Registration information
                </p>
              </div>

              <form className="p-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Title
                      {/* <span className="text-red-500">*</span> */}
                    </label>
                    <select className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all">
                      <option value="Title" selected>
                        Title.
                      </option>
                      <option value="Mr">Mr.</option>
                      <option value="Ms">Ms.</option>
                      <option value="Dr">Dr.</option>
                      <option value="Prof">Prof.</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter you First Name"
                      className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Your Last Name"
                      className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Email Address
                    </label>
                    <input
                      type="email"
                      defaultValue="contact@pharma.com"
                      className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Mobile
                    </label>
                    <input
                      type="tel"
                      placeholder="Enter your Mobile Number"
                      className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Company Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your Company Name"
                      className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Address
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your Address"
                      className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      City
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your City"
                      className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      State
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your State"
                      className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Organization / Institution
                    </label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                    ></input>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Professional Role
                    </label>
                    <select className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all">
                      <option value="Title" selected>
                        Physician
                      </option>
                      <option value="Mr">Pharmacist</option>
                      <option value="Ms">Nurse</option>
                      <option value="Dr">Other</option>
                    </select>
                  </div>
                  
                </div>

                <div className="flex justify-between">
                  <div className="flex items-center justify-between gap-2 p-4 bg-gray-50 rounded-xl">
                  <input
                    type="checkbox"
                    id="pdpl"
                    className="rounded text-blue-600"
                    defaultChecked
                  />
                  <label htmlFor="pdpl" className="text-sm text-gray-600">
                    I consent to data processing in accordance with PDPL
                    regulations
                  </label>
                  </div>
                  <div className="justify-center  rounded-2xl p-2 absolute right-8 bottom-25">
                  <img src="/Images/ScanMoblie_registeration.png" alt="ScanMoblie_registeration" className="h-32 w-32 object-cover justify-self-center" />
                  <span className="text-xs font-semibold mt-2">Scan QR for instant mobile registration</span>
                  </div>
                  
                </div>

                <div className="flex gap-4">
                  <button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-xl font-medium hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-[1.02] shadow-lg shadow-blue-500/25"
                  >
                    Complete Registration & Pay
                  </button>
                  {/* <button
                    type="button"
                    className="px-6 py-3 border border-gray-300 rounded-xl font-medium text-gray-700 hover:bg-gray-50 transition-all"
                  >
                    Cancel
                  </button> */}
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Agends Tab */}
        {activeTab === "agenda" && (
          <div className="animate-fadeIn">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-blue-900 via-blue-600 to-purple-900 px-8 py-6">
                <h2 className="text-2xl font-bold text-white">
                  Detailed Event Agenda
                </h2>
                {/* <p className="text-indigo-100 mt-1">
                  Select your preferred booth location
                </p> */}
              </div>

              <div className="p-8">
                <div className="max-w-4xl mx-auto space-y-4 py-10">
                  {agenda.map((item, index) => {
                    const isOpen = openIndex === index;

                    return (
                      <div
                        key={index}
                        className="bg-white rounded-xl shadow border overflow-hidden"
                      >
                        {/* Header */}
                        <button
                          onClick={() => toggle(index)}
                          className="w-full flex justify-between items-center p-5 text-left font-semibold text-lg hover:bg-gray-50 transition"
                        >
                          {item.day}
                          <ChevronDown
                            className={`transition-transform duration-300 ${
                              isOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        {/* Content */}
                        {isOpen && (
                          <div className="p-5 border-t">
                            <ul className="space-y-3">
                              {item.events.map((event, i) => (
                                <li
                                  key={i}
                                  className="bg-gray-50 p-3 rounded-lg"
                                >
                                  {event}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Live Workshop Tab */}
        {activeTab === "live-Workshops" && (
          <div className="max-w-7xl mx-auto animate-fadeIn">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-blue-900 via-blue-600 to-purple-900  px-8 py-6">
                <h2 className="text-2xl font-bold text-white">
                  Live Streaming Workshops
                </h2>
                {/* <p className="text-green-100 mt-1">
                  Customize your exhibition space
                </p> */}
              </div>

              <div className="p-8">
                <div className="bg-gray-50 rounded-2xl p-6 border-2 border-dashed border-gray-200 min-h-[400px] flex items-center justify-center">
                  <div className="text-center">
                    <MapIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-400">This video is unavailable</p>
                    <div className="flex gap-3 justify-center mt-4">
                      <Button
                        variant="contained"
                        className="!bg-blue-500 !hover:bg-blue-600 !rounded-full !px-6"
                      >
                        Join Chat & Q&A
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Ticket Tab */}
        {activeTab === "e-Ticket" && (
          <div className="max-w-6xl mx-auto animate-fadeIn py-10">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
              {/* Header */}
             <div className="bg-gradient-to-r from-blue-900 via-blue-600 to-purple-900  px-8 py-6">
                <h2 className="text-2xl font-bold text-white">
                Your Digital E-Ticket
                </h2>
                <p className="text-green-100 mt-1">
                  Present this ticket at the entrance for seamless access.
                </p>
              </div>
              {/* Body */}
              <div className="p-10 bg-gradient-to-b from-white to-gray-50">
                {/* Ticket Card */}
                <div className="relative bg-white rounded-2xl p-8 border border-gray-200 shadow-md mb-8">
                  {/* Decorative Side Line */}
                  <div className="absolute left-0 top-0 h-full w-2 bg-gradient-to-b from-blue-600 to-purple-600 rounded-l-2xl"></div>

                  <div className="ml-4">
                    <span className="text-2xl font-bold text-gray-900 mb-6">
                      Global Health Exhibition 2026
                    </span>

                    <div className="grid md:grid-cols-2 gap-6 text-gray-700 text-sm ">
                      <div className="lg:mt-8">
                        <p className="mb-3 text-xl">
                          <span className="font-semibold text-gray-900">
                            Name:
                          </span>{" "}
                          John Doe
                        </p>
                        <p className="mb-3 text-xl">
                          <span className="font-semibold text-gray-900">
                            Date:
                          </span>{" "}
                          October 26–29, 2026
                        </p>
                        <p className="text-xl">
                          <span className="font-semibold text-gray-900">
                            Venue:
                          </span>{" "}
                          Riyadh International Convention Center
                        </p>
                      </div>

                      {/* QR Section */}
                      <div className="flex flex-col items-center justify-center border border-dashed border-gray-300 rounded-xl p-6 bg-gray-50">
                      
                        <div className="w-full h-full bg-white shadow-inner rounded-lg flex items-center justify-center">
                          <img src="/Images/QrCode-e-Ticket.png" alt="QrCode-e-Ticket" />
                        </div>
                        <p className="mt-4 text-xs text-gray-500 text-center">
                          Show this QR code at the entrance
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="flex-1 !bg-gradient-to-r !from-blue-600 !to-blue-600 text-white py-3 rounded-xl font-medium shadow-md hover:shadow-lg transition hover:scale-[1.02]">
                    Download PDF Ticket
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Payment Tab */}
        {activeTab === "payment" && (
          <div className="max-w-7xl mx-auto animate-fadeIn">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-blue-900 via-blue-600 to-purple-900  px-8 py-6">
                <h2 className="text-2xl font-bold text-white">
                  Secure Payment Portal
                </h2>
                <p className="text-orange-100 mt-1">
                  Complete your payment securely
                </p>
              </div>

              <div className="p-8">
                <div className="bg-gray-50 rounded-2xl p-6 mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    Invoice Summary
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-gray-600">
                        Booth A12 - 18m² Premium
                      </span>
                      <span className="font-medium text-gray-800">
                        SAR 75,000
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-gray-600">Additional Services</span>
                      <span className="font-medium text-gray-800">
                        SAR 10,000
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 font-semibold text-lg">
                      <span className="text-gray-800">Total Amount</span>
                      <span className="text-orange-600">SAR 85,000</span>
                    </div>
                    <div className="flex justify-between items-center py-2 text-sm">
                      <span className="text-gray-500">Paid Amount</span>
                      <span className="text-green-600 font-medium">
                        SAR 42,500
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 font-semibold">
                      <span className="text-gray-800">Remaining Balance</span>
                      <span className="text-red-600">SAR 42,500</span>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-xl p-4 mb-6">
                  <p className="text-sm text-blue-800 flex items-center">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Secure payment powered by industry-standard encryption
                  </p>
                </div>

                <Button
                  variant="contained"
                  className="!w-full !bg-gradient-to-r !from-blue-600 !to-blue-600 !px-6 !py-3 !rounded-xl !text-white !font-medium !shadow-lg"
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

export default VisitorPortal;
