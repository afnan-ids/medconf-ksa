"use client";

import { useState } from "react";
import {
  Store,
  Calendar,
  Bell,
  CheckCircle,
  AlertCircle,
  Users,
  MapPin,
  Megaphone,
  Clock,
  ChevronRight,
  TrendingUp,
  MessageSquare,
  Sparkles,
} from "lucide-react";

const DashboardContent = () => {
  const [showAllUpdates, setShowAllUpdates] = useState(false);

  const statsData = [
    {
      title: "Total Booths",
      value: "120",
      icon: Store,
      trend: "+12%",
      trendUp: true,
      progress: 80,
    },
    {
      title: "CPD Points",
      value: "98",
      icon: Users,
      trend: "+8%",
      trendUp: true,
      progress: 70,
    },
    {
      title: "Pending Approvals",
      value: "12",
      icon: AlertCircle,
      trend: "-5%",
      trendUp: false,
      progress: 40,
    },
  ];

  const boothUpdates = [
    {
      id: 1,
      title: "Booth #A12 - TechCorp",
      details: "Setup approved with premium package",
      time: "1 hour ago",
      status: "approved",
    },
    {
      id: 2,
      title: "Booth #B07 - DesignHub",
      details: "Awaiting design confirmation",
      time: "3 hours ago",
      status: "pending",
    },
    {
      id: 3,
      title: "Booth #C21 - InnovateCo",
      details: "Design guidelines not met",
      time: "Yesterday",
      status: "rejected",
    },
    {
      id: 4,
      title: "Booth #D14 - HealthInc",
      details: "Confirmed with VIP amenities",
      time: "Yesterday",
      status: "approved",
    },
  ];

  const eventUpdates = [
    {
      id: 1,
      title: "Opening Ceremony",
      date: "June 10",
      time: "10:00 AM",
      location: "Main Hall",
      attendees: "450+",
    },
    {
      id: 2,
      title: "Networking Session",
      date: "June 11",
      time: "2:00 PM",
      location: "Expo Lounge",
      attendees: "280+",
    },
    {
      id: 3,
      title: "Closing Ceremony",
      date: "June 12",
      time: "5:00 PM",
      location: "Main Stage",
      attendees: "600+",
    },
  ];

  const displayedUpdates = showAllUpdates
    ? boothUpdates
    : boothUpdates.slice(0, 3);

  const getStatusBadge = (status) => {
    switch (status) {
      case "approved":
        return "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30";
      case "pending":
        return "bg-amber-500/20 text-amber-400 border border-amber-500/30";
      case "rejected":
        return "bg-red-500/20 text-red-400 border border-red-500/30";
      default:
        return "bg-white/10 text-gray-300 border border-white/10";
    }
  };

  return (
    <div className="space-y-6">
      {/* Stats Cards - Glassmorphism */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {statsData.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div
              key={i}
              className="group relative bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 shadow-2xl hover:shadow-xl hover:-translate-y-1 transition-all duration-500 overflow-hidden"
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-cyan-500/0 opacity-0 group-hover:opacity-10 transition-opacity duration-700"></div>

              {/* Decorative corner glow */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/20 rounded-bl-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative flex justify-between items-start mb-4">
                <div className="p-2.5 bg-white/10 rounded-lg border border-white/20">
                  <Icon className="w-5 h-5 text-blue-400" />
                </div>
                <div
                  className={`flex items-center gap-1 text-sm font-medium ${stat.trendUp ? "text-emerald-400" : "text-red-400"}`}
                >
                  <TrendingUp
                    className={`w-4 h-4 ${!stat.trendUp && "rotate-180"}`}
                  />
                  {stat.trend}
                </div>
              </div>
              <p className="text-sm text-gray-300">{stat.title}</p>
              <h2 className="text-2xl font-bold text-white mt-1">
                {stat.value}
              </h2>
              <div className="mt-4">
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-600 to-green-600 rounded-full transition-all duration-500 shadow-lg shadow-blue-500/30"
                    style={{ width: `${stat.progress}%` }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Main Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Booth Updates - Glass */}
        <div className="lg:col-span-2 relative bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
          {/* Decorative glow */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>

          <div className="relative p-6 border-b border-white/10 flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Booth Status Updates
              </h3>
              <p className="text-sm text-gray-300 mt-1">
                Recent activity and approvals
              </p>
            </div>
            <button
              onClick={() => setShowAllUpdates(!showAllUpdates)}
              className="text-sm text-blue-400 hover:text-blue-300 font-medium flex items-center gap-1 transition-colors"
            >
              {showAllUpdates ? "Show Less" : "View All"}
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="relative p-6">
            <div className="space-y-3">
              {displayedUpdates.map((item) => (
                <div
                  key={item.id}
                  className="group relative p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-0.5 overflow-hidden"
                >
                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-cyan-500/0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>

                  <div className="relative flex justify-between items-start">
                    <div className="flex-1">
                      <p className="font-semibold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-blue-200 group-hover:bg-clip-text transition-all duration-300">
                        {item.title}
                      </p>
                      <p className="text-sm text-gray-300 mt-1">
                        {item.details}
                      </p>
                      <div className="flex items-center gap-1 text-xs text-gray-400 mt-2">
                        <Clock className="w-3 h-3 text-blue-400" />
                        {item.time}
                      </div>
                    </div>
                    <span
                      className={`px-2.5 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${getStatusBadge(item.status)}`}
                    >
                      {item.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Upcoming Events - Glass */}
        <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
          {/* Decorative glow */}
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>

          <div className="relative p-6 border-b border-white/10">
            <h3 className="text-lg font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Upcoming Events
            </h3>
            <p className="text-sm text-gray-300 mt-1">
              Don't miss these key moments
            </p>
          </div>
          <div className="relative p-6">
            <div className="space-y-3">
              {eventUpdates.map((event) => (
                <div
                  key={event.id}
                  className="group p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <p className="font-semibold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-purple-200 group-hover:bg-clip-text transition-all duration-300">
                    {event.title}
                  </p>
                  <div className="space-y-1 mt-2">
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <Calendar className="w-4 h-4 text-blue-400" />
                      {event.date} • {event.time}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <MapPin className="w-4 h-4 text-purple-400" />
                      {event.location}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <Users className="w-4 h-4 text-cyan-400" />
                      {event.attendees} attending
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative p-4 border-t border-white/10">
            <button className="group/btn relative w-full text-sm text-blue-400 hover:text-blue-300 font-medium flex items-center justify-center gap-2 transition-colors">
              <span>View Full Schedule</span>
              <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Quick Actions - Glass */}
      <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
        {/* Decorative glows */}
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>

        <div className="relative p-6 border-b border-white/10">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-blue-400" />
            <h3 className="text-lg font-semibold text-white">Quick Actions</h3>
          </div>
        </div>
        <div className="relative p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                name: "New Booth",
                icon: Store,
                gradient: "from-cyan-600 to-green-600",
              },
              {
                name: "Send Broadcast",
                icon: Megaphone,
                gradient: "from-purple-500 to-pink-400",
              },
              {
                name: "View Reports",
                icon: TrendingUp,
                gradient: "from-emerald-500 to-teal-400",
              },
              {
                name: "Help Center",
                icon: MessageSquare,
                gradient: "from-amber-500 to-orange-400",
              },
            ].map((action, idx) => {
              const Icon = action.icon;
              return (
                <button
                  key={idx}
                  className="group relative p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 overflow-hidden text-left"
                >
                  {/* Hover gradient background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${action.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  ></div>

                  <div className="relative">
                    <div className="p-2 bg-white/10 rounded-lg w-fit mb-3 group-hover:scale-110 transition-transform duration-300 border border-white/20">
                      <Icon className="w-5 h-5 text-blue-400 group-hover:text-white transition-colors" />
                    </div>
                    <p className="font-medium text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-blue-200 group-hover:bg-clip-text transition-all duration-300">
                      {action.name}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
