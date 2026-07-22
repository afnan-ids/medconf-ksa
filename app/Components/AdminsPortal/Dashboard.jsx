"use client";

import { useState } from "react";
import {
  Users,
  Building2,
  CalendarCheck,
  CreditCard,
  TrendingUp,
  TrendingDown,
  Eye,
  Download,
  Activity,
  MapPin,
  Sparkles,
  Megaphone,
  Store,
  Clock,
  Search,
} from "lucide-react";

export default function AdminDashboard() {
  const [timeRange, setTimeRange] = useState("month");

  // Stats data 
  const statsCards = [
    {
      title: "Total Exhibitors",
      value: "248",
      icon: Building2,
    },
    {
      title: "Active Sponsors",
      value: "56",
      icon: Users,
    },
    {
      title: "Total Bookings",
      value: "SAR 1,847",
      icon: CalendarCheck,
    },
    {
      title: "Revenue",
      value: "SAR 2.4M",
      icon: CreditCard,
    },
  ];

  // Booking status breakdown
  const bookingStatus = [
    { status: "Confirmed", count: 124, percentage: 62, color: "emerald" },
    { status: "Pending", count: 48, percentage: 24, color: "amber" },
    { status: "Cancelled", count: 28, percentage: 14, color: "red" },
  ];

  // Recent bookings
  const recentBookings = [
    {
      id: "BK-1024",
      exhibitor: "MedTech Solutions",
      booth: "A12",
      amount: "$5,000",
      status: "confirmed",
      date: "2024-03-15",
    },
    {
      id: "BK-1023",
      exhibitor: "HealthAI Systems",
      booth: "B07",
      amount: "$3,500",
      status: "pending",
      date: "2024-03-14",
    },
    {
      id: "BK-1022",
      exhibitor: "PharmaCorp",
      booth: "C21",
      amount: "$7,500",
      status: "confirmed",
      date: "2024-03-14",
    },
    {
      id: "BK-1021",
      exhibitor: "Diagnostic Labs",
      booth: "D14",
      amount: "$4,000",
      status: "cancelled",
      date: "2024-03-13",
    },
    {
      id: "BK-1020",
      exhibitor: "Wellness Global",
      booth: "E09",
      amount: "$2,800",
      status: "confirmed",
      date: "2024-03-13",
    },
  ];

  // Booth occupancy by hall
  const hallOccupancy = [
    { hall: "Hall A", total: 48, occupied: 38, percentage: 79 },
    { hall: "Hall B", total: 42, occupied: 29, percentage: 69 },
    { hall: "Hall C", total: 36, occupied: 31, percentage: 86 },
    { hall: "Hall D", total: 30, occupied: 18, percentage: 60 },
  ];

  // Top sponsors
  const topSponsors = [
    { name: "Global Health Co.", tier: "Platinum", amount: "$150,000", logo: "GH" },
    { name: "MedTech Solutions", tier: "Gold", amount: "$75,000", logo: "MT" },
    { name: "PharmaCorp Intl.", tier: "Gold", amount: "$65,000", logo: "PC" },
    { name: "HealthAI Systems", tier: "Silver", amount: "$40,000", logo: "HA" },
  ];

  const getStatusBadge = (status) => {
    switch (status) {
      case "confirmed":
        return "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30";
      case "pending":
        return "bg-amber-500/20 text-amber-400 border border-amber-500/30";
      case "cancelled":
        return "bg-red-500/20 text-red-400 border border-red-500/30";
      default:
        return "bg-white/10 text-gray-300 border border-white/10";
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Dashboard Overview
          </h1>
          <p className="text-sm text-gray-400 mt-1">
            Welcome back! Here's what's happening with your exhibition today.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl text-sm font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 flex items-center gap-2">
            <Download className="w-4 h-4" />
            Export Report
          </button>
        </div>
      </div>

      {/* Stats Cards Grid - Soft style */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {statsCards.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div
              key={idx}
              className="group relative bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden hover:border-blue-500/30 hover:-translate-y-1 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-5 transition-opacity duration-700" />
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-bl-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative p-5">
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2.5 bg-white/10 rounded-lg border border-white/20">
                    <Icon className="w-5 h-5 text-blue-400" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white">{stat.value}</h3>
                <p className="text-sm text-gray-400 mt-1">{stat.title}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Charts Row - Original structure */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Booking Status Breakdown */}
        <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden hover:border-blue-500/30 transition-all duration-300">
          <div className="absolute -top-20 -right-20 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl" />

          <div className="relative p-5 border-b border-white/10">
            <h3 className="font-semibold text-white flex items-center gap-2">
              <Activity className="w-4 h-4 text-blue-400" />
              Booking Status Breakdown
            </h3>
          </div>

          <div className="relative p-5 space-y-4">
            {/* Donut Chart Visualization */}
            <div className="flex justify-center mb-4">
              <div className="relative w-32 h-32">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="10" />
                  <circle
                    cx="50" cy="50" r="42" fill="none"
                    stroke="#10b981"
                    strokeWidth="10"
                    strokeDasharray={`${62 * 2.64} 264`}
                    strokeLinecap="round"
                  />
                  <circle
                    cx="50" cy="50" r="42" fill="none"
                    stroke="#f59e0b"
                    strokeWidth="10"
                    strokeDasharray={`${24 * 2.64} 264`}
                    strokeDashoffset={`-${62 * 2.64}`}
                    strokeLinecap="round"
                  />
                  <circle
                    cx="50" cy="50" r="42" fill="none"
                    stroke="#ef4444"
                    strokeWidth="10"
                    strokeDasharray={`${14 * 2.64} 264`}
                    strokeDashoffset={`-${86 * 2.64}`}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">200</span>
                </div>
              </div>
            </div>

            {/* Legend */}
            <div className="space-y-2">
              {bookingStatus.map((item) => (
                <div key={item.status} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full bg-${item.color}-500`} />
                    <span className="text-sm text-gray-300">{item.status}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-semibold text-white">{item.count}</span>
                    <span className="text-xs text-gray-400 w-12">{item.percentage}%</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Progress bars */}
            <div className="pt-3 space-y-2">
              {bookingStatus.map((item) => (
                <div key={item.status}>
                  <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-700`}
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Hall Occupancy */}
        <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden hover:border-blue-500/30 transition-all duration-300">
          <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl" />

          <div className="relative p-5 border-b border-white/10">
            <h3 className="font-semibold text-white flex items-center gap-2">
              <MapPin className="w-4 h-4 text-blue-400" />
              Hall Occupancy Overview
            </h3>
          </div>

          <div className="relative p-5 space-y-4">
            {hallOccupancy.map((hall, idx) => (
              <div key={idx}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-white">{hall.hall}</span>
                  <span className="text-sm text-gray-400">
                    {hall.occupied} / {hall.total}
                  </span>
                </div>
                <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-700"
                    style={{ width: `${hall.percentage}%` }}
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">{hall.percentage}% Occupied</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Bookings Table - Restored table structure with soft styling */}
      <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden hover:border-blue-500/30 transition-all duration-300">
        {/* Table Header */}
        <div className="px-6 py-4 border-b border-white/10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/10 rounded-lg border border-white/20">
                <CalendarCheck className="w-4 h-4 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">Recent Bookings</h3>
              <span className="px-2.5 py-0.5 bg-blue-500/20 text-blue-400 text-xs font-medium rounded-full border border-blue-500/30">
                {recentBookings.length} records
              </span>
            </div>
            <button className="px-3 py-1.5 text-sm text-gray-300 hover:text-white border border-white/10 rounded-lg hover:bg-white/5 transition-all duration-300 flex items-center gap-1">
              <Download className="w-4 h-4" />
              Export
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-white/5 border-b border-white/10">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">
                  Booking ID
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">
                  Exhibitor
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">
                  Booth
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {recentBookings.map((booking, idx) => (
                <tr key={idx} className="border-b border-white/5 hover:bg-white/5 transition-all duration-300">
                  <td className="px-4 py-3 text-sm font-medium text-white">
                    {booking.id}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-300">
                    {booking.exhibitor}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-300">
                    {booking.booth}
                  </td>
                  <td className="px-4 py-3 text-sm font-semibold text-white">
                    {booking.amount}
                  </td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusBadge(booking.status)}`}>
                      {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-400">
                    {new Date(booking.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'short', 
                      day: 'numeric' 
                    })}
                  </td>
                  <td className="px-4 py-3 ">
                    <button className="p-1.5 text-gray-400 hover:text-blue-400 hover:bg-blue-500/10 rounded-lg transition-all duration-300">
                      <Search className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>

            {/* Table Footer */}
            <tfoot className="bg-white/5 border-t border-white/10">
              <tr>
                <td colSpan="7" className="px-4 py-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">
                      Showing <span className="font-semibold text-white">{recentBookings.length}</span> of <span className="font-semibold text-white">{recentBookings.length}</span> entries
                    </span>
                    <div className="flex items-center gap-2">
                      <button className="px-3 py-1 text-sm text-gray-400 border border-white/10 rounded-lg hover:bg-white/5 hover:text-white transition-all duration-300 disabled:opacity-50" disabled>
                        Previous
                      </button>
                      <button className="px-3 py-1 text-sm text-white bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300">
                        1
                      </button>
                      <button className="px-3 py-1 text-sm text-gray-400 border border-white/10 rounded-lg hover:bg-white/5 hover:text-white transition-all duration-300">
                        Next
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      {/* Bottom Row - Top Sponsors & Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Sponsors */}
        <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden hover:border-blue-500/30 transition-all duration-300">
          <div className="absolute -top-20 -left-20 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl" />

          <div className="relative p-5 border-b border-white/10">
            <h3 className="font-semibold text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-blue-400" />
              Top Sponsors
            </h3>
          </div>

          <div className="relative p-5 space-y-3">
            {topSponsors.map((sponsor, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/10 hover:border-blue-500/30 hover:bg-blue-500/5 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/30">
                    <span className="text-white text-xs font-bold">{sponsor.logo}</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{sponsor.name}</p>
                    <p className="text-xs text-gray-400">{sponsor.tier} Sponsor</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-white">{sponsor.amount}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden hover:border-blue-500/30 transition-all duration-300">
          <div className="absolute -bottom-20 -right-20 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl" />

          <div className="relative p-5 border-b border-white/10">
            <h3 className="font-semibold text-white flex items-center gap-2">
              <Megaphone className="w-4 h-4 text-blue-400" />
              Quick Actions
            </h3>
          </div>

          <div className="relative p-5">
            <div className="grid grid-cols-2 gap-3">
              {[
                { name: "Add Exhibitor", icon: Store },
                { name: "Create Booking", icon: CalendarCheck },
                { name: "Generate Report", icon: Download },
                { name: "Send Broadcast", icon: Megaphone },
              ].map((action, idx) => {
                const Icon = action.icon;
                return (
                  <button
                    key={idx}
                    className="group relative p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-blue-500/30 hover:bg-blue-500/5 transition-all duration-300 hover:-translate-y-1 text-left"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-xl" />
                    <div className="relative">
                      <div className="p-2 bg-white/10 rounded-lg w-fit mb-2 group-hover:scale-110 transition-transform duration-300 border border-white/20">
                        <Icon className="w-5 h-5 text-blue-400 group-hover:text-white transition-colors" />
                      </div>
                      <p className="text-sm font-medium text-white">{action.name}</p>
                      <p className="text-xs text-gray-400 mt-1">Click to {action.name.toLowerCase()}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}