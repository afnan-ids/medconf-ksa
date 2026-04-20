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
  CheckCircle,
  Clock,
  XCircle,
  Download,
  MoreHorizontal,
  ArrowRight,
  Activity,
  DollarSign,
  Ticket,
  MapPin,
  Sparkles,
  Megaphone,
} from "lucide-react";

export default function AdminDashboard() {
  const [timeRange, setTimeRange] = useState("month");

  // Stats data
  const statsCards = [
    {
      title: "Total Exhibitors",
      value: "248",
      change: "+12%",
      trendUp: true,
      icon: Building2,
      color: "indigo",
      bgGradient: "from-indigo-600 to-indigo-400",
    },
    {
      title: "Active Sponsors",
      value: "56",
      change: "+8%",
      trendUp: true,
      icon: Users,
      color: "purple",
      bgGradient: "from-purple-600 to-purple-400",
    },
    {
      title: "Total Bookings",
      value: "1,847",
      change: "+23%",
      trendUp: true,
      icon: CalendarCheck,
      color: "cyan",
      bgGradient: "from-cyan-600 to-cyan-400",
    },
    {
      title: "Revenue",
      value: "$2.4M",
      change: "+18%",
      trendUp: true,
      icon: CreditCard,
      color: "emerald",
      bgGradient: "from-emerald-600 to-emerald-400",
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
          <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-300 bg-clip-text text-transparent">
            Dashboard
          </h1>
          <p className="text-sm text-gray-400 mt-1">
            System overview and key metrics at a glance
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2 bg-white/5 rounded-lg border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300">
            <Download className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Stats Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {statsCards.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div
              key={idx}
              className="group relative bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden hover:border-white/20 hover:-translate-y-1 transition-all duration-500"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.bgGradient} opacity-0 group-hover:opacity-5 transition-opacity duration-700`} />
              <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/10 rounded-bl-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative p-5">
                <div className="flex items-center justify-between mb-3">
                  <div className={`p-2.5 bg-gradient-to-br ${stat.bgGradient} rounded-xl shadow-lg shadow-indigo-500/30`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div className={`flex items-center gap-1 text-sm font-medium ${stat.trendUp ? "text-emerald-400" : "text-red-400"}`}>
                    {stat.trendUp ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                    {stat.change}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white">{stat.value}</h3>
                <p className="text-sm text-gray-400 mt-1">{stat.title}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Booking Status Breakdown */}
        <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl" />

          <div className="relative p-5 border-b border-white/10">
            <h3 className="font-semibold text-white flex items-center gap-2">
              <Activity className="w-4 h-4 text-indigo-400" />
              Booking Status Breakdown
            </h3>
          </div>

          <div className="relative p-5 space-y-4">
            {/* Donut Chart Visualization */}
            <div className="flex justify-center mb-4">
              <div className="relative w-32 h-32">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="12" />
                  <circle
                    cx="50" cy="50" r="42" fill="none"
                    stroke="#10b981"
                    strokeWidth="12"
                    strokeDasharray={`${62 * 2.64} 264`}
                    strokeLinecap="round"
                  />
                  <circle
                    cx="50" cy="50" r="42" fill="none"
                    stroke="#f59e0b"
                    strokeWidth="12"
                    strokeDasharray={`${24 * 2.64} 264`}
                    strokeDashoffset={`-${62 * 2.64}`}
                    strokeLinecap="round"
                  />
                  <circle
                    cx="50" cy="50" r="42" fill="none"
                    stroke="#ef4444"
                    strokeWidth="12"
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
                    <div className={`w-3 h-3 rounded-full bg-${item.color}-500`} />
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
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-${item.color}-500 rounded-full transition-all duration-700`}
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Hall Occupancy */}
        <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden">
          <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl" />

          <div className="relative p-5 border-b border-white/10">
            <h3 className="font-semibold text-white flex items-center gap-2">
              <MapPin className="w-4 h-4 text-purple-400" />
              Hall Occupancy
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
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-700"
                    style={{ width: `${hall.percentage}%` }}
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">{hall.percentage}% Occupied</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Bookings Table */}
      <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />

        <div className="relative p-5 border-b border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <h3 className="font-semibold text-white flex items-center gap-2">
            <CalendarCheck className="w-4 h-4 text-cyan-400" />
            Recent Bookings
          </h3>
          <button className="text-sm text-indigo-400 hover:text-indigo-300 font-medium flex items-center gap-1 transition-colors">
            View All
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="relative overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-white/10 bg-white/5">
              <tr>
                <th className="text-left p-4 text-xs font-medium text-gray-400 uppercase tracking-wider">Booking ID</th>
                <th className="text-left p-4 text-xs font-medium text-gray-400 uppercase tracking-wider">Exhibitor</th>
                <th className="text-left p-4 text-xs font-medium text-gray-400 uppercase tracking-wider">Booth</th>
                <th className="text-left p-4 text-xs font-medium text-gray-400 uppercase tracking-wider">Amount</th>
                <th className="text-left p-4 text-xs font-medium text-gray-400 uppercase tracking-wider">Status</th>
                <th className="text-left p-4 text-xs font-medium text-gray-400 uppercase tracking-wider">Date</th>
                <th className="text-left p-4 text-xs font-medium text-gray-400 uppercase tracking-wider"></th>
              </tr>
            </thead>
            <tbody>
              {recentBookings.map((booking, idx) => (
                <tr key={idx} className="border-b border-white/5 hover:bg-white/5 transition-all duration-300">
                  <td className="p-4 text-sm font-medium text-white">{booking.id}</td>
                  <td className="p-4 text-sm text-gray-300">{booking.exhibitor}</td>
                  <td className="p-4 text-sm text-gray-300">{booking.booth}</td>
                  <td className="p-4 text-sm font-semibold text-white">{booking.amount}</td>
                  <td className="p-4">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusBadge(booking.status)}`}>
                      {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                    </span>
                  </td>
                  <td className="p-4 text-sm text-gray-400">{booking.date}</td>
                  <td className="p-4">
                    <button className="p-1 hover:bg-white/10 rounded-lg transition-all">
                      <MoreHorizontal className="w-4 h-4 text-gray-400" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Bottom Row - Top Sponsors & Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Sponsors */}
        <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden">
          <div className="absolute -top-20 -left-20 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl" />

          <div className="relative p-5 border-b border-white/10">
            <h3 className="font-semibold text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              Top Sponsors
            </h3>
          </div>

          <div className="relative p-5 space-y-3">
            {topSponsors.map((sponsor, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-500/30">
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
        <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden">
          <div className="absolute -bottom-20 -right-20 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl" />

          <div className="relative p-5 border-b border-white/10">
            <h3 className="font-semibold text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              Quick Actions
            </h3>
          </div>

          <div className="relative p-5">
            <div className="grid grid-cols-2 gap-3">
              {[
                { name: "Add Exhibitor", icon: Users, gradient: "from-indigo-600 to-purple-600" },
                { name: "Create Booking", icon: CalendarCheck, gradient: "from-cyan-600 to-blue-600" },
                { name: "Generate Report", icon: Download, gradient: "from-emerald-600 to-teal-600" },
                { name: "Send Broadcast", icon: Megaphone, gradient: "from-amber-500 to-orange-500" },
              ].map((action, idx) => {
                const Icon = action.icon;
                return (
                  <button
                    key={idx}
                    className="group relative p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 text-left"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${action.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-xl`} />
                    <div className="relative">
                      <div className="p-2 bg-white/10 rounded-lg w-fit mb-2 group-hover:scale-110 transition-transform duration-300 border border-white/20">
                        <Icon className="w-5 h-5 text-indigo-400" />
                      </div>
                      <p className="text-sm font-medium text-white">{action.name}</p>
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