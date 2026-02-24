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
import ScoreboardIcon from "@mui/icons-material/Scoreboard";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import { ChevronDown } from "lucide-react";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  const tabs = [
    { id: "Overview", label: "Overview", icon: DashboardIcon },
    { id: "Users", label: "Users", icon: PersonIcon },
    { id: "Bookings", label: "Bookings", icon: MapIcon },
    { id: "Reports", label: "Reports", icon: CalendarIcon },
    { id: "Audit-Logs", label: "Audit Logs", icon: CalendarIcon },
  ];
  // dashboard cards data
  const statsData = [
    {
      title: "Total Registered Users",
      value: "12,450",
      icon: CheckCircleIcon,
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Active Booth Bookings",
      value: "342",
      icon: ScoreboardIcon,
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Total Revenue",
      value: "SAR 18.5M",
      icon: VpnKeyIcon,
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Active Events",
      value: "6",
      icon: CalendarIcon,
      color: "from-blue-500 to-blue-600",
    },
  ];

  return (
    <div className=" min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
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
           
            {/* <span>/</span> */}
            <span className="text-white font-medium">
              Administrative Dashboard
            </span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
                Administrative Dashboard
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
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
        {activeTab === "Overview" && (
          <div className="space-y-8 animate-fadeIn">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

            {/* Analytics Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Revenue Projection
                  </h3>
                  <p className="text-blue-500" />
                </div>
                <div className="h-64 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl flex items-center justify-center border-2 border-dashed border-gray-200">
                  <p className="text-gray-400">
                    Revenue Trend (Last 12 Months)
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    User Registration Growth
                  </h3>
                  <p className="text-purple-500" />
                </div>
                <div className="h-64 bg-gradient-to-br from-green-50 to-blue-50 rounded-xl flex items-center justify-center border-2 border-dashed border-gray-200">
                  <p className="text-gray-400">
                    Analytics Dashboard Loading...
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Register Tab */}
        {activeTab === "Users" && (
          <div className="max-w-7xl mx-auto animate-fadeIn">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-900 via-blue-600 to-purple-800 px-8 py-6">
                <h2 className="text-2xl font-bold text-white tracking-tight">
                  User Management
                </h2>
                <p className="text-blue-100 text-sm mt-1">
                  Manage and monitor all registered users
                </p>
              </div>

              {/* Table Container */}
              <div className="overflow-x-auto">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left text-gray-700 border-collapse border border-gray-300">
                    {/* Table Head */}
                    <thead className="bg-gray-100 text-gray-800 text-xs uppercase">
                      <tr>
                        <th className="border border-gray-300 px-6 py-3 font-bold">
                          ID
                        </th>
                        <th className="border border-gray-300 px-6 py-3 font-bold">
                          Name / Company
                        </th>
                        <th className="border border-gray-300 px-6 py-3 font-bold">
                          Type
                        </th>
                        <th className="border border-gray-300 px-6 py-3 font-bold">
                          Status
                        </th>
                        <th className="border border-gray-300 px-6 py-3 font-bold">
                          Registered
                        </th>
                        <th className="border border-gray-300 px-6 py-3 font-bold text-center">
                          Actions
                        </th>
                      </tr>
                    </thead>

                    {/* Table Body */}
                    <tbody>
                      {/* Row 1 */}
                      <tr>
                        <td className="border border-gray-300 px-6 py-4 font-medium">
                          EX1001
                        </td>
                        <td className="border border-gray-300 px-6 py-4">
                          Pharma Co. International
                        </td>
                        <td className="border border-gray-300 px-6 py-4">
                          Exhibitor
                        </td>
                        <td className="border border-gray-300 px-6 py-4">
                          Active
                        </td>
                        <td className="border border-gray-300 px-6 py-4">
                          Jan 4, 2026
                        </td>
                        <td className="border border-gray-300 px-6 py-4 text-center">
                          <Button variant="contained" size="small">
                            Edit
                          </Button>
                        </td>
                      </tr>

                      {/* Row 2 */}
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-6 py-4 font-medium">
                          PR2005
                        </td>
                        <td className="border border-gray-300 px-6 py-4">
                          Dr. Sarah Ahmed
                        </td>
                        <td className="border border-gray-300 px-6 py-4">
                          Practitioner
                        </td>
                        <td className="border border-gray-300 px-6 py-4">
                          Verified
                        </td>
                        <td className="border border-gray-300 px-6 py-4">
                          Jan 3, 2026
                        </td>
                        <td className="border border-gray-300 px-6 py-4 text-center">
                          <Button variant="contained" size="small">
                            View
                          </Button>
                        </td>
                      </tr>

                      {/* Row 3 */}
                      <tr>
                        <td className="border border-gray-300 px-6 py-4 font-medium">
                          VI3007
                        </td>
                        <td className="border border-gray-300 px-6 py-4">
                          John Doe
                        </td>
                        <td className="border border-gray-300 px-6 py-4">
                          Visitor
                        </td>
                        <td className="border border-gray-300 px-6 py-4">
                          Registered
                        </td>
                        <td className="border border-gray-300 px-6 py-4">
                          Jan 1, 2026
                        </td>
                        <td className="border border-gray-300 px-6 py-4 text-center">
                          <Button variant="contained" size="small">
                            View
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}

        {/*Bookings Tab */}
        {activeTab === "Bookings" && (
          <div className="max-w-7xl mx-auto animate-fadeIn">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-900 via-blue-600 to-purple-800 px-8 py-6">
                <h2 className="text-2xl font-bold text-white tracking-tight">
                  Exhibition Booking Management
                </h2>
              </div>

              {/* Table Container */}
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-700 border-collapse border border-gray-300">
                  {/* Table Head */}
                  <thead className="text-xs uppercase bg-gray-100 text-gray-800">
                    <tr>
                      <th className="border border-gray-300 px-6 py-3 font-bold">
                        Booth
                      </th>
                      <th className="border border-gray-300 px-6 py-3 font-bold">
                        Company
                      </th>
                      <th className="border border-gray-300 px-6 py-3 font-bold">
                        Size
                      </th>
                      <th className="border border-gray-300 px-6 py-3 font-bold">
                        Price
                      </th>
                      <th className="border border-gray-300 px-6 py-3 font-bold">
                        Status
                      </th>
                      <th className="border border-gray-300 px-6 py-3 font-bold text-center">
                        Payment
                      </th>
                      <th className="border border-gray-300 px-6 py-3 font-bold text-center">
                        Action
                      </th>
                    </tr>
                  </thead>

                  {/* Table Body */}
                  <tbody>
                    <tr className="hover:bg-gray-50 transition">
                      <td className="border border-gray-300 px-6 py-4 font-medium">
                        A12
                      </td>
                      <td className="border border-gray-300 px-6 py-4">
                        Pharma Co.
                      </td>
                      <td className="border border-gray-300 px-6 py-4">18m²</td>
                      <td className="border border-gray-300 px-6 py-4">
                        SAR 85,000
                      </td>
                      <td className="border border-gray-300 px-6 py-4">
                        Contract Signed
                      </td>
                      <td className="border border-gray-300 px-6 py-4">Paid</td>
                      <td className="border border-gray-300 px-6 py-4 text-center">
                        <span className="px-3 py-1 text-xs font-medium bg-green-100 text-green-700 rounded-full">
                          Approve Final
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Audit-Logs Tab */}
        {activeTab === "Audit-Logs" && (
          <div className="max-w-7xl mx-auto animate-fadeIn">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-900 via-blue-600 to-purple-800 px-8 py-6">
                <h2 className="text-2xl font-bold text-white tracking-tight">
                  Security & Audit Logs
                </h2>
              </div>

              {/* Table Container */}
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-700 border-collapse border border-gray-300">
                  {/* Table Head */}
                  <thead className="text-xs uppercase bg-gray-100 text-gray-800">
                    <tr>
                      <th className="border border-gray-300 px-6 py-3 font-bold">
                        Timestamp
                      </th>
                      <th className="border border-gray-300 px-6 py-3 font-bold">
                        User / System
                      </th>
                      <th className="border border-gray-300 px-6 py-3 font-bold">
                        Action
                      </th>
                      <th className="border border-gray-300 px-6 py-3 font-bold">
                        Details
                      </th>
                      <th className="border border-gray-300 px-6 py-3 font-bold">
                        IP Address
                      </th>
                    </tr>
                  </thead>

                  {/* Table Body */}
                  <tbody>
                    <tr className="hover:bg-gray-50 transition">
                      <td className="border border-gray-300 px-6 py-4 font-medium">
                        2026-01-05 10:30
                      </td>
                      <td className="border border-gray-300 px-6 py-4">
                        Admin
                      </td>
                      <td className="border border-gray-300 px-6 py-4">
                        Booking Approved
                      </td>
                      <td className="border border-gray-300 px-6 py-4">
                        Booth A12 - Pharma Co.
                      </td>
                      <td className="border border-gray-300 px-6 py-4">
                        192.168.1.100
                      </td>
                    </tr>

                    <tr className="hover:bg-gray-50 transition bg-gray-50">
                      <td className="border border-gray-300 px-6 py-4 font-medium">
                        2026-01-05 09:15
                      </td>
                      <td className="border border-gray-300 px-6 py-4">
                        System
                      </td>
                      <td className="border border-gray-300 px-6 py-4">
                        License Verified
                      </td>
                      <td className="border border-gray-300 px-6 py-4">
                        Dr. Sarah Ahmed via SCFHS API
                      </td>
                      <td className="border border-gray-300 px-6 py-4">-</td>
                    </tr>

                    <tr className="hover:bg-gray-50 transition">
                      <td className="border border-gray-300 px-6 py-4 font-medium">
                        2026-01-04 14:20
                      </td>
                      <td className="border border-gray-300 px-6 py-4">
                        Admin
                      </td>
                      <td className="border border-gray-300 px-6 py-4">
                        User Registration
                      </td>
                      <td className="border border-gray-300 px-6 py-4">
                        Visitor John Doe
                      </td>
                      <td className="border border-gray-300 px-6 py-4">
                        192.168.1.105
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Ticket Tab */}
        {activeTab === "Reports" && (
          <div className="max-w-6xl mx-auto animate-fadeIn py-10">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-900 via-blue-600 to-purple-900  px-8 py-6">
                <h2 className="text-2xl font-bold text-white">
                  Financial & Operational Reports
                </h2>
              </div>
              {/* Body */}
              <div className="p-10 bg-linear-to-b from-white to-gray-50 grid grid-cols-2 gap-3">
                {/* Ticket Card */}

                <div className="relative bg-white rounded-2xl p-8 border border-gray-200 shadow-md mb-8">
                  {/* Decorative Side Line */}
                  <div className="absolute left-0 top-0 h-full w-2 bg-linear-to-b from-blue-600 to-purple-600 rounded-l-2xl"></div>

                  <div className="ml-4">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">
                      Total Revenue 2026
                    </h3>
                    <div className="gap-6 text-gray-700 text-sm">
                      <div>
                        <p className="mb-3">
                          <span className="font-semibold text-gray-900">
                            SAR 18.5 Million
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative bg-white rounded-2xl p-8 border border-gray-200 shadow-md mb-8">
                  {/* Decorative Side Line */}
                  <div className="absolute left-0 top-0 h-full w-2 bg-linear-to-b from-blue-600 to-purple-600 rounded-l-2xl"></div>

                  <div className="ml-4">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">
                      Total Revenue 2026
                    </h3>
                    <div className="gap-6 text-gray-700 text-sm">
                      <div>
                        <p className="mb-3">
                          <span className="font-semibold text-gray-900">
                            SAR 18.5 Million
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative bg-white rounded-2xl p-8 border border-gray-200 shadow-md mb-8">
                  {/* Decorative Side Line */}
                  <div className="absolute left-0 top-0 h-full w-2 bg-linear-to-b from-blue-600 to-purple-600 rounded-l-2xl"></div>

                  <div className="ml-4">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">
                      Total Revenue 2026
                    </h3>
                    <div className="gap-6 text-gray-700 text-sm">
                      <div>
                        <p className="mb-3">
                          <span className="font-semibold text-gray-900">
                            SAR 18.5 Million
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative bg-white rounded-2xl p-8 border border-gray-200 shadow-md mb-8">
                  {/* Decorative Side Line */}
                  <div className="absolute left-0 top-0 h-full w-2 bg-linear-to-b from-blue-600 to-purple-600 rounded-l-2xl"></div>

                  <div className="ml-4">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">
                      Total Revenue 2026
                    </h3>
                    <div className="gap-6 text-gray-700 text-sm">
                      <div>
                        <p className="mb-3">
                          <span className="font-semibold text-gray-900">
                            SAR 18.5 Million
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div></div>

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

export default AdminDashboard;
