"use client";
import { Button, FormControl, MenuItem, Select } from "@mui/material";
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
import BarChart from "../../Components/admin-dashboard/charts/BarChart";
import CircularBarChart from "../../Components/admin-dashboard/charts/CircularBarChart";
import LineChart from "../../Components/admin-dashboard/charts/LineChart";
import PieChart from "../../Components/admin-dashboard/charts//PieChart";
import ScoreboardIcon from "@mui/icons-material/Scoreboard";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import { ChevronDown } from "lucide-react";
import Users from "../../Components/Pages/Users";
import Booking from "../../Components/Pages/Booking";
import AuditLog from "../../Components/Pages/AuditLog";
import Reports from "../../Components/Pages/Reports";
import BreadCrumb from '../../Components/BreadCrum'
import GaugeChart from "../../Components/admin-dashboard/charts/GaugeChart";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("Overview");
  const [selectedChart,setSelectedChart] = useState("bar");
  const [userChart,setUserChart] = useState("line");


   const chartComponents = {
    bar: <BarChart />,
    pie: <PieChart />,
    line: <LineChart />,
    circular_bar: <CircularBarChart />,
    gauge_chart:<GaugeChart/>
    // radar:<RadarChart/>
  };
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
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 pb-8 sm:pb-12 md:pb-16 ">
        {/* Overview Tab */}
        {activeTab === "Overview" && (
          <div className="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8 animate-fadeIn">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6 mt-[4rem]">
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
                <div className="flex items-center justify-between px-4 mb-3 sm:mb-4">
                  <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800">
                    Revenue Projection
                  </h3>
                  <p className="text-blue-500" />
                    <FormControl sx={{ minWidth: 100,marginBottom:"15px" }} className='w-[0px] text-[14px]  '>
              {/* <InputLabel id="demo-simple-select-helper-label">Revenue Projection</InputLabel> */}
              <Select
                labelId="demo-simple-select-helper-label"
                // id="demo-simple-select-helper"
                value={selectedChart}
                // label=""
                onChange={(e) => setSelectedChart(e.target.value)}
                sx={{ padding: "2px 4px", width: "120px", height: "30px", fontSize: "14px" }}
              >
                <MenuItem value="">
                  {/* <em>None</em> */}
                </MenuItem>
                <MenuItem value={"bar"}>Bar Chart</MenuItem>
                <MenuItem value={"pie"}>Pie Chart</MenuItem>
                <MenuItem value={"line"}>Line Chart</MenuItem>
                <MenuItem value={"circular_bar"}>Circular Bar</MenuItem>
                <MenuItem value={"gauge_chart"}>Gauge Chart</MenuItem>
              
                {/* <MenuItem value={"radar"}>Radar Chart</MenuItem> */}
              </Select>

            </FormControl>

                </div>
                <div className="h-40 sm:h-48 md:h-56 lg:h-64 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg sm:rounded-xl flex items-center justify-center border border-dashed border-gray-200">
                  
                     {chartComponents[selectedChart]}

                  
                </div>
              </div>

              <div className="bg-white rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg p-4 sm:p-5 md:p-6 border border-gray-100 hover:shadow-xl transition-all">
                <div className="flex items-center justify-between  px-4  mb-3 sm:mb-4">
                  <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800">
                    User Registration Growth
                  </h3>
                  <p className="text-purple-500" />
                    <FormControl sx={{ minWidth: 100,marginBottom:"15px" }} className='w-[0px] text-[14px]  '>
              {/* <InputLabel id="demo-simple-select-helper-label">Revenue Projection</InputLabel> */}
              <Select
                labelId="demo-simple-select-helper-label"
                // id="demo-simple-select-helper"
                value={userChart}
                // label=""
                onChange={(e) => setUserChart(e.target.value)}
                sx={{ padding: "2px 4px", width: "120px", height: "30px", fontSize: "14px" }}
              >
                <MenuItem value="">
                  {/* <em>None</em> */}
                </MenuItem>
                <MenuItem value={"bar"}>Bar Chart</MenuItem>
                <MenuItem value={"pie"}>Pie Chart</MenuItem>
                <MenuItem value={"line"}>Line Chart</MenuItem>
                <MenuItem value={"circular_bar"}>Circular Bar</MenuItem>
                <MenuItem value={"gauge_chart"}>Gauge Chart</MenuItem>
              
                {/* <MenuItem value={"radar"}>Radar Chart</MenuItem> */}
              </Select>

            </FormControl>
                </div>
                <div className="h-40 sm:h-48 md:h-56 lg:h-64 bg-gradient-to-br from-green-50 to-blue-50 rounded-lg sm:rounded-xl flex items-center justify-center border border-dashed border-gray-200">

                    {chartComponents[userChart]}

                  {/* <p className="text-xs sm:text-sm text-gray-400 text-center px-2">
                    Analytics Dashboard Loading...
                  </p> */}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Users Tab */}
        {activeTab === "Users" && (
            <Users/>
        )}

        {/* Bookings Tab */}
        {activeTab === "Bookings" && (
          <Booking/>
        )}

        {/* Audit-Logs Tab */}
        {activeTab === "Audit-Logs" && (
            <AuditLog/>
        )}

        {/* Reports Tab */}
        {activeTab === "Reports" && (
            <Reports/>
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