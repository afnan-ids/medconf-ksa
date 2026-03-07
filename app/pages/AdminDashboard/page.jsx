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
import BreadCrumb from '../../Components/BreadCrum'

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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="">
        <BreadCrumb
          title="Admin Dash Board"
          backgroundImage="/Images/Home/Bread-crum-1.avif"
          path={[{label:"Admin Dash Board"}]}
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
        {/* Overview Tab */}
        {activeTab === "Overview" && (
          <div className="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8 animate-fadeIn">
            {/* Stats Cards */}
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
                        <p className="text-xs sm:text-sm text-gray-500 font-medium">
                          {card.title}
                        </p>
                        <Icon
                          className={`w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-${card.color.split("-")[1]}-500`}
                        />
                      </div>
                      <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-gray-800 break-words">
                        {card.value}
                      </h2>
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
                  <p className="text-blue-500" />
                </div>
                <div className="h-40 sm:h-48 md:h-56 lg:h-64 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg sm:rounded-xl flex items-center justify-center border border-dashed border-gray-200">
                  <p className="text-xs sm:text-sm text-gray-400 text-center px-2">
                    Revenue Trend (Last 12 Months)
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg p-4 sm:p-5 md:p-6 border border-gray-100 hover:shadow-xl transition-all">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800">
                    User Registration Growth
                  </h3>
                  <p className="text-purple-500" />
                </div>
                <div className="h-40 sm:h-48 md:h-56 lg:h-64 bg-gradient-to-br from-green-50 to-blue-50 rounded-lg sm:rounded-xl flex items-center justify-center border border-dashed border-gray-200">
                  <p className="text-xs sm:text-sm text-gray-400 text-center px-2">
                    Analytics Dashboard Loading...
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Users Tab */}
        {activeTab === "Users" && (
          <div className="max-w-7xl mx-auto animate-fadeIn">
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-900 via-blue-600 to-purple-800 px-4 sm:px-5 md:px-6 lg:px-8 py-4 sm:py-5 md:py-6">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white tracking-tight">
                  User Management
                </h2>
                <p className="text-blue-100 text-xs sm:text-sm mt-0.5 sm:mt-1">
                  Manage and monitor all registered users
                </p>
              </div>

              {/* Table Container - Horizontal Scroll on Mobile */}
              <div className="overflow-x-auto">
                <div className="min-w-[800px] md:min-w-full">
                  <table className="w-full text-xs sm:text-sm text-left text-gray-700 border-collapse border border-gray-300">
                    {/* Table Head */}
                    <thead className="bg-gray-100 text-gray-800 text-[10px] sm:text-xs uppercase">
                      <tr>
                        <th className="border border-gray-300 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 font-bold">
                          ID
                        </th>
                        <th className="border border-gray-300 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 font-bold">
                          Name / Company
                        </th>
                        <th className="border border-gray-300 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 font-bold">
                          Type
                        </th>
                        <th className="border border-gray-300 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 font-bold">
                          Status
                        </th>
                        <th className="border border-gray-300 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 font-bold">
                          Registered
                        </th>
                        <th className="border border-gray-300 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 font-bold text-center">
                          Actions
                        </th>
                      </tr>
                    </thead>

                    {/* Table Body */}
                    <tbody>
                      {/* Row 1 */}
                      <tr>
                        <td className="border border-gray-300 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 md:py-4 font-medium">
                          EX1001
                        </td>
                        <td className="border border-gray-300 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 md:py-4">
                          Pharma Co. International
                        </td>
                        <td className="border border-gray-300 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 md:py-4">
                          Exhibitor
                        </td>
                        <td className="border border-gray-300 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 md:py-4">
                          Active
                        </td>
                        <td className="border border-gray-300 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 md:py-4">
                          Jan 4, 2026
                        </td>
                        <td className="border border-gray-300 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 md:py-4 text-center">
                          <Button variant="contained" size="small" className="!text-[10px] sm:!text-xs !px-2 sm:!px-3 !py-1">
                            Edit
                          </Button>
                        </td>
                      </tr>

                      {/* Row 2 */}
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 md:py-4 font-medium">
                          PR2005
                        </td>
                        <td className="border border-gray-300 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 md:py-4">
                          Dr. Sarah Ahmed
                        </td>
                        <td className="border border-gray-300 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 md:py-4">
                          Practitioner
                        </td>
                        <td className="border border-gray-300 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 md:py-4">
                          Verified
                        </td>
                        <td className="border border-gray-300 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 md:py-4">
                          Jan 3, 2026
                        </td>
                        <td className="border border-gray-300 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 md:py-4 text-center">
                          <Button variant="contained" size="small" className="!text-[10px] sm:!text-xs !px-2 sm:!px-3 !py-1">
                            View
                          </Button>
                        </td>
                      </tr>

                      {/* Row 3 */}
                      <tr>
                        <td className="border border-gray-300 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 md:py-4 font-medium">
                          VI3007
                        </td>
                        <td className="border border-gray-300 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 md:py-4">
                          John Doe
                        </td>
                        <td className="border border-gray-300 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 md:py-4">
                          Visitor
                        </td>
                        <td className="border border-gray-300 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 md:py-4">
                          Registered
                        </td>
                        <td className="border border-gray-300 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 md:py-4">
                          Jan 1, 2026
                        </td>
                        <td className="border border-gray-300 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 md:py-4 text-center">
                          <Button variant="contained" size="small" className="!text-[10px] sm:!text-xs !px-2 sm:!px-3 !py-1">
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

        {/* Bookings Tab */}
        {activeTab === "Bookings" && (
          <div className="max-w-7xl mx-auto animate-fadeIn">
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-900 via-blue-600 to-purple-800 px-4 sm:px-5 md:px-6 lg:px-8 py-4 sm:py-5 md:py-6">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white tracking-tight">
                  Exhibition Booking Management
                </h2>
              </div>

              {/* Table Container - Horizontal Scroll on Mobile */}
              <div className="overflow-x-auto">
                <div className="min-w-[900px] md:min-w-full">
                  <table className="w-full text-xs sm:text-sm text-left text-gray-700 border-collapse border border-gray-300">
                    {/* Table Head */}
                    <thead className="text-[10px] sm:text-xs uppercase bg-gray-100 text-gray-800">
                      <tr>
                        <th className="border border-gray-300 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 font-bold">
                          Booth
                        </th>
                        <th className="border border-gray-300 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 font-bold">
                          Company
                        </th>
                        <th className="border border-gray-300 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 font-bold">
                          Size
                        </th>
                        <th className="border border-gray-300 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 font-bold">
                          Price
                        </th>
                        <th className="border border-gray-300 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 font-bold">
                          Status
                        </th>
                        <th className="border border-gray-300 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 font-bold text-center">
                          Payment
                        </th>
                        <th className="border border-gray-300 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 font-bold text-center">
                          Action
                        </th>
                      </tr>
                    </thead>

                    {/* Table Body */}
                    <tbody>
                      <tr className="hover:bg-gray-50 transition">
                        <td className="border border-gray-300 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 md:py-4 font-medium">
                          A12
                        </td>
                        <td className="border border-gray-300 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 md:py-4">
                          Pharma Co.
                        </td>
                        <td className="border border-gray-300 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 md:py-4">
                          18m²
                        </td>
                        <td className="border border-gray-300 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 md:py-4">
                          SAR 85,000
                        </td>
                        <td className="border border-gray-300 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 md:py-4">
                          Contract Signed
                        </td>
                        <td className="border border-gray-300 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 md:py-4">
                          Paid
                        </td>
                        <td className="border border-gray-300 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 md:py-4 text-center">
                          <span className="inline-block px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium bg-green-100 text-green-700 rounded-full">
                            Approve Final
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Audit-Logs Tab */}
        {activeTab === "Audit-Logs" && (
          <div className="max-w-7xl mx-auto animate-fadeIn">
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-900 via-blue-600 to-purple-800 px-4 sm:px-5 md:px-6 lg:px-8 py-4 sm:py-5 md:py-6">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white tracking-tight">
                  Security & Audit Logs
                </h2>
              </div>

              {/* Table Container - Horizontal Scroll on Mobile */}
              <div className="overflow-x-auto">
                <div className="min-w-[1000px] md:min-w-full">
                  <table className="w-full text-xs sm:text-sm text-left text-gray-700 border-collapse border border-gray-300">
                    {/* Table Head */}
                    <thead className="text-[10px] sm:text-xs uppercase bg-gray-100 text-gray-800">
                      <tr>
                        <th className="border border-gray-300 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 font-bold">
                          Timestamp
                        </th>
                        <th className="border border-gray-300 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 font-bold">
                          User / System
                        </th>
                        <th className="border border-gray-300 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 font-bold">
                          Action
                        </th>
                        <th className="border border-gray-300 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 font-bold">
                          Details
                        </th>
                        <th className="border border-gray-300 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 font-bold">
                          IP Address
                        </th>
                      </tr>
                    </thead>

                    {/* Table Body */}
                    <tbody>
                      <tr className="hover:bg-gray-50 transition">
                        <td className="border border-gray-300 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 md:py-4 font-medium whitespace-nowrap">
                          2026-01-05 10:30
                        </td>
                        <td className="border border-gray-300 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 md:py-4">
                          Admin
                        </td>
                        <td className="border border-gray-300 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 md:py-4 whitespace-nowrap">
                          Booking Approved
                        </td>
                        <td className="border border-gray-300 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 md:py-4">
                          Booth A12 - Pharma Co.
                        </td>
                        <td className="border border-gray-300 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 md:py-4">
                          192.168.1.100
                        </td>
                      </tr>

                      <tr className="hover:bg-gray-50 transition bg-gray-50">
                        <td className="border border-gray-300 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 md:py-4 font-medium whitespace-nowrap">
                          2026-01-05 09:15
                        </td>
                        <td className="border border-gray-300 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 md:py-4">
                          System
                        </td>
                        <td className="border border-gray-300 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 md:py-4 whitespace-nowrap">
                          License Verified
                        </td>
                        <td className="border border-gray-300 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 md:py-4">
                          Dr. Sarah Ahmed via SCFHS API
                        </td>
                        <td className="border border-gray-300 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 md:py-4">
                          -
                        </td>
                      </tr>

                      <tr className="hover:bg-gray-50 transition">
                        <td className="border border-gray-300 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 md:py-4 font-medium whitespace-nowrap">
                          2026-01-04 14:20
                        </td>
                        <td className="border border-gray-300 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 md:py-4">
                          Admin
                        </td>
                        <td className="border border-gray-300 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 md:py-4 whitespace-nowrap">
                          User Registration
                        </td>
                        <td className="border border-gray-300 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 md:py-4">
                          Visitor John Doe
                        </td>
                        <td className="border border-gray-300 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 md:py-4">
                          192.168.1.105
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Reports Tab */}
        {activeTab === "Reports" && (
          <div className="max-w-6xl mx-auto animate-fadeIn py-4 sm:py-5 md:py-6 lg:py-8 xl:py-10 px-3 sm:px-4 md:px-6 lg:px-8">
            <div className="bg-white rounded-xl sm:rounded-2xl md:rounded-3xl shadow-lg sm:shadow-xl md:shadow-2xl overflow-hidden border border-gray-100">
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-900 via-blue-600 to-purple-900 px-4 sm:px-5 md:px-6 lg:px-8 py-4 sm:py-5 md:py-6">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
                  Financial & Operational Reports
                </h2>
              </div>
              
              {/* Body */}
              <div className="p-4 sm:p-5 md:p-6 lg:p-8 xl:p-10 bg-gradient-to-b from-white to-gray-50">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
                  {/* Report Card 1 */}
                  <div className="relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 border border-gray-200 shadow-md">
                    <div className="absolute left-0 top-0 h-full w-1 sm:w-1.5 md:w-2 bg-gradient-to-b from-blue-600 to-purple-600 rounded-l-xl sm:rounded-l-2xl"></div>
                    <div className="ml-2 sm:ml-3 md:ml-4">
                      <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4 lg:mb-6">
                        Total Revenue 2026
                      </h3>
                      <div className="text-gray-700 text-xs sm:text-sm">
                        <p className="mb-2 sm:mb-3">
                          <span className="font-semibold text-gray-900">
                            SAR 18.5 Million
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Report Card 2 */}
                  <div className="relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 border border-gray-200 shadow-md">
                    <div className="absolute left-0 top-0 h-full w-1 sm:w-1.5 md:w-2 bg-gradient-to-b from-blue-600 to-purple-600 rounded-l-xl sm:rounded-l-2xl"></div>
                    <div className="ml-2 sm:ml-3 md:ml-4">
                      <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4 lg:mb-6">
                        Total Revenue 2026
                      </h3>
                      <div className="text-gray-700 text-xs sm:text-sm">
                        <p className="mb-2 sm:mb-3">
                          <span className="font-semibold text-gray-900">
                            SAR 18.5 Million
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Report Card 3 */}
                  <div className="relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 border border-gray-200 shadow-md">
                    <div className="absolute left-0 top-0 h-full w-1 sm:w-1.5 md:w-2 bg-gradient-to-b from-blue-600 to-purple-600 rounded-l-xl sm:rounded-l-2xl"></div>
                    <div className="ml-2 sm:ml-3 md:ml-4">
                      <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4 lg:mb-6">
                        Total Revenue 2026
                      </h3>
                      <div className="text-gray-700 text-xs sm:text-sm">
                        <p className="mb-2 sm:mb-3">
                          <span className="font-semibold text-gray-900">
                            SAR 18.5 Million
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Report Card 4 */}
                  <div className="relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 border border-gray-200 shadow-md">
                    <div className="absolute left-0 top-0 h-full w-1 sm:w-1.5 md:w-2 bg-gradient-to-b from-blue-600 to-purple-600 rounded-l-xl sm:rounded-l-2xl"></div>
                    <div className="ml-2 sm:ml-3 md:ml-4">
                      <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4 lg:mb-6">
                        Total Revenue 2026
                      </h3>
                      <div className="text-gray-700 text-xs sm:text-sm">
                        <p className="mb-2 sm:mb-3">
                          <span className="font-semibold text-gray-900">
                            SAR 18.5 Million
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8">
                  <button className="flex-1 bg-gradient-to-r from-blue-600 to-blue-600 text-white py-2.5 sm:py-3 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium shadow-md hover:shadow-lg transition hover:scale-[1.02]">
                    Download Full Report
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Payment Tab - Keep commented as in original */}
        {/* {activeTab === "payment" && (...) } */}
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